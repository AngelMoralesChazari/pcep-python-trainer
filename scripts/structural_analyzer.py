#!/usr/bin/env python3
"""
Analizador Estructural y Detector de Similitud para PCEP Trainer
Implementa normalización de AST, huellas estructurales (fingerprinting) y detección
de variantes superficiales (cambio de nombres/números sin cambio de razonamiento).
"""

import ast
import hashlib
import json
import re
from typing import Dict, List, Tuple, Any, Optional

class CodeNormalizer(ast.NodeTransformer):
    """
    Normaliza el Árbol de Sintaxis Abstracta (AST) de Python:
    - Renombra identificadores a variables canónicas según orden de aparición (var_0, var_1...)
    - Reemplaza literales constantes numéricos y cadenas por marcadores abstractos
    - Mantiene intactas las funciones integradas de Python y palabras clave del temario PCEP
    """
    BUILTINS = {
        'print', 'input', 'len', 'range', 'int', 'float', 'str', 'bool',
        'list', 'tuple', 'dict', 'set', 'type', 'id', 'min', 'max', 'sum',
        'abs', 'round', 'sorted', 'enumerate', 'zip', 'open', 'super'
    }

    def __init__(self):
        super().__init__()
        self.var_map: Dict[str, str] = {}
        self.var_counter = 0

    def get_canonical_id(self, original_id: str) -> str:
        if original_id in self.BUILTINS or original_id.startswith('__'):
            return original_id
        if original_id not in self.var_map:
            self.var_map[original_id] = f"_v{self.var_counter}"
            self.var_counter += 1
        return self.var_map[original_id]

    def visit_Name(self, node: ast.Name) -> ast.Name:
        new_id = self.get_canonical_id(node.id)
        return ast.copy_location(ast.Name(id=new_id, ctx=node.ctx), node)

    def visit_Constant(self, node: ast.Constant) -> ast.AST:
        # Distinguir tipos de constantes pero neutralizar valores específicos
        if isinstance(node.value, bool):
            val_type = "BOOL"
        elif isinstance(node.value, int):
            val_type = "INT"
        elif isinstance(node.value, float):
            val_type = "FLOAT"
        elif isinstance(node.value, str):
            val_type = "STR"
        elif node.value is None:
            val_type = "NONE"
        else:
            val_type = "CONST"
        return ast.copy_location(ast.Constant(value=f"_LIT_{val_type}_"), node)

    def visit_FunctionDef(self, node: ast.FunctionDef) -> ast.AST:
        new_name = self.get_canonical_id(node.name)
        self.generic_visit(node)
        node.name = new_name
        return node

    def visit_arg(self, node: ast.arg) -> ast.arg:
        node.arg = self.get_canonical_id(node.arg)
        return node


def normalize_python_code(code_str: str) -> Tuple[str, str]:
    """
    Devuelve (ast_dump_normalizado, resumen_estructural_legible).
    Si el código tiene errores sintácticos intencionales (ej. en debugging),
    realiza normalización basada en patrones léxicos regulares.
    """
    if not code_str or not code_str.strip():
        return ("EMPTY", "EMPTY")

    cleaned = "\n".join(line for line in code_str.splitlines() if not line.strip().startswith('#'))
    try:
        tree = ast.parse(cleaned)
        normalizer = CodeNormalizer()
        normalized_tree = normalizer.visit(tree)
        ast.fix_missing_locations(normalized_tree)
        # ast.dump normalizado como representación canónica profunda
        deep_dump = ast.dump(normalized_tree, annotate_fields=True, include_attributes=False)
        return (deep_dump, "AST_VALID")
    except SyntaxError:
        # Normalización fallback para fragmentos con SyntaxError deliberado
        token_abstract = re.sub(r'\b[a-zA-Z_]\w*\b', '_ID_', cleaned)
        token_abstract = re.sub(r'\b\d+(\.\d+)?\b', '_NUM_', token_abstract)
        token_abstract = re.sub(r'["\'].*?["\']', '_STR_', token_abstract)
        token_abstract = re.sub(r'\s+', ' ', token_abstract).strip()
        return (f"SYNTAX_ERR:{token_abstract}", "SYNTAX_ERROR_SNIPPET")


def compute_structural_fingerprint(exercise: Dict[str, Any]) -> str:
    """
    Genera un hash SHA256 de la estructura profunda del ejercicio.
    Tiene en cuenta:
    - Objetivo PCEP (pcepObjective)
    - Tipo de actividad (type)
    - Familia cognitiva (cognitiveFamily si está definida)
    - Estructura canónica del código (AST normalizado)
    - Esqueleto del enunciado (sin números específicos)
    """
    obj = exercise.get('pcepObjective', '')
    etype = exercise.get('type', '')
    family = exercise.get('cognitiveFamily', exercise.get('topic', ''))
    
    code = exercise.get('codeSnippet') or exercise.get('starterCode') or exercise.get('solutionCode') or ''
    ast_dump, _ = normalize_python_code(code)

    # Esqueleto del enunciado neutralizando números y nombres entre comillas
    raw_stmt = exercise.get('statement', '')
    skeleton_stmt = re.sub(r'`.*?`', '`_EXPR_`', raw_stmt)
    skeleton_stmt = re.sub(r'\b\d+\b', '_NUM_', skeleton_stmt)
    skeleton_stmt = re.sub(r'\s+', ' ', skeleton_stmt).strip()

    payload = f"OBJ:{obj}|TYPE:{etype}|FAM:{family}|AST:{ast_dump}|STMT:{skeleton_stmt[:120]}"
    return hashlib.sha256(payload.encode('utf-8')).hexdigest()[:16]


def analyze_exercise_bank_diversity(exercises: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Analiza una colección de ejercicios detectando:
    - Duplicados exactos (mismo ID o mismo código/enunciado textual)
    - Variantes superficiales (idéntico fingerprint estructural)
    - Cobertura de familias cognitivas
    - Distribución por tipo de ejercicio y dificultad
    """
    seen_ids = set()
    exact_duplicates = []
    fingerprint_map: Dict[str, List[Dict[str, Any]]] = {}
    family_counter: Dict[str, int] = {}
    type_counter: Dict[str, int] = {}

    for ex in exercises:
        eid = ex.get('id', 'unknown')
        if eid in seen_ids:
            exact_duplicates.append(eid)
        seen_ids.add(eid)

        etype = ex.get('type', 'unspecified')
        type_counter[etype] = type_counter.get(etype, 0) + 1

        fam = ex.get('cognitiveFamily', 'general')
        family_counter[fam] = family_counter.get(fam, 0) + 1

        fp = compute_structural_fingerprint(ex)
        if fp not in fingerprint_map:
            fingerprint_map[fp] = []
        fingerprint_map[fp].append(ex)

    trivial_variant_groups = {fp: items for fp, items in fingerprint_map.items() if len(items) > 1}
    total_trivial_variants = sum(len(items) - 1 for items in trivial_variant_groups.values())

    return {
        "totalExercises": len(exercises),
        "uniqueStructuralFingerprints": len(fingerprint_map),
        "exactDuplicateCount": len(exact_duplicates),
        "trivialVariantCount": total_trivial_variants,
        "trivialVariantGroupsCount": len(trivial_variant_groups),
        "typeDistribution": type_counter,
        "familyDistribution": family_counter,
        "structuralDiversityRatio": round(len(fingerprint_map) / max(len(exercises), 1), 4)
    }

if __name__ == '__main__':
    # Demostración del analizador estructural
    code1 = "var = 1\nprint(var)\nvar = var + 1\nprint(var)"
    code2 = "total = 5\nprint(total)\ntotal = total + 1\nprint(total)"
    code3 = "for i in range(10):\n    if i % 2 == 0:\n        print(i)"

    ast1, _ = normalize_python_code(code1)
    ast2, _ = normalize_python_code(code2)
    ast3, _ = normalize_python_code(code3)

    print("Test 1: Normalización de AST")
    print("Código 1 y Código 2 son isomorfos estructuralmente:", ast1 == ast2)
    print("Código 1 y Código 3 son estructuralmente diferentes:", ast1 != ast3)
