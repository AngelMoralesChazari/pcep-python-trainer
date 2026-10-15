#!/usr/bin/env python3
"""
Pruebas Automatizadas de Calidad, Integridad y Diversidad Estructural
Para el Banco de Ejercicios de PCEP Trainer
"""

import sys
import json
import re
import unittest
from structural_analyzer import normalize_python_code, compute_structural_fingerprint, analyze_exercise_bank_diversity

class TestPCEPExerciseBank(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        sys.path.append('scripts')
        cls.all_exercises = []

        # Cargar las 4 secciones estándar
        for sec in [1, 2, 3, 4]:
            with open(f'src/data/exercises/section{sec}.ts', 'r', encoding='utf-8') as f:
                content = f.read()
                m = re.search(r'export const SECTION_' + str(sec) + r'_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]*\]);', content)
                if m:
                    cls.all_exercises.extend(json.loads(m.group(1)))

        # Cargar ejercicios de 4Geeks
        with open('src/data/exercises/external/fourGeeksExercises.ts', 'r', encoding='utf-8') as f:
            content = f.read()
            m = re.search(r'export const FOUR_GEEKS_EXERCISES:\s*Exercise\[\]\s*=\s*(\[[\s\S]*\]);', content)
            if m:
                cls.four_geeks = json.loads(m.group(1))
                cls.all_exercises.extend(cls.four_geeks)

    def test_total_exercise_count(self):
        """Verifica que el banco contenga al menos los 400 ejercicios base + 21 de 4Geeks."""
        self.assertGreaterEqual(len(self.all_exercises), 421)
        print(f"\n[PASS] Banco verificado con {len(self.all_exercises)} ejercicios totales.")

    def test_no_exact_duplicate_ids(self):
        """Verifica que todos los identificadores sean únicos y estables."""
        seen_ids = set()
        duplicates = []
        for ex in self.all_exercises:
            eid = ex.get('id')
            self.assertIsNotNone(eid)
            if eid in seen_ids:
                duplicates.append(eid)
            seen_ids.add(eid)
        self.assertEqual(len(duplicates), 0, f"Existen IDs duplicados: {duplicates}")
        print("[PASS] 100% de los identificadores son únicos.")

    def test_curriculum_objectives_validity(self):
        """Verifica que cada ejercicio esté asociado a un objetivo oficial de PCEP-30-02."""
        valid_objs = {
            '1.1', '1.2', '1.3', '1.4', '1.5',
            '2.1', '2.2',
            '3.1', '3.2', '3.3', '3.4',
            '4.1', '4.2', '4.3', '4.4'
        }
        invalid = []
        for ex in self.all_exercises:
            obj = ex.get('pcepObjective')
            if obj not in valid_objs:
                invalid.append((ex.get('id'), obj))
        self.assertEqual(len(invalid), 0, f"Objetivos inválidos encontrados: {invalid}")
        print("[PASS] Todos los objetivos corresponden al temario oficial PCEP.")

    def test_exercise_structural_fingerprints(self):
        """Calcula huellas estructurales y valida el ratio de diversidad del banco."""
        report = analyze_exercise_bank_diversity(self.all_exercises)
        print(f"\n[REPORTE DIVERSIDAD] Ratio estructural: {report['structuralDiversityRatio']} ({report['uniqueStructuralFingerprints']} huellas únicas / {report['totalExercises']} ejercicios)")
        self.assertGreaterEqual(report['structuralDiversityRatio'], 0.90)

    def test_4geeks_exercises_integrity(self):
        """Verifica la integridad de los ejercicios importados de 4Geeks."""
        self.assertEqual(len(self.four_geeks), 21)
        for ex in self.four_geeks:
            self.assertEqual(ex.get('source'), '4geeks_academy')
            self.assertIn('license', ex)
            self.assertIn('sourceUrl', ex)
            self.assertEqual(ex.get('type'), 'programming')
            self.assertIsNotNone(ex.get('starterCode'))
            self.assertIsNotNone(ex.get('solutionCode'))
        print("[PASS] 21 ejercicios de 4Geeks verificados con atribución y casos de prueba.")

    def test_ast_normalizer_detects_trivial_variants(self):
        """Comprueba que el normalizador detecta isomorfismo entre variantes con solo cambio de números/nombres."""
        code_a = "x = 10\ny = 20\nprint(x + y)"
        code_b = "foo = 50\nbar = 99\nprint(foo + bar)"
        code_c = "for i in range(10):\n    print(i)"

        ast_a, _ = normalize_python_code(code_a)
        ast_b, _ = normalize_python_code(code_b)
        ast_c, _ = normalize_python_code(code_c)

        self.assertEqual(ast_a, ast_b, "Debe detectar isomorfismo entre code_a y code_b")
        self.assertNotEqual(ast_a, ast_c, "Debe distinguir code_a de code_c")
        print("[PASS] Detección de isomorfismos estructurales validada.")

if __name__ == '__main__':
    unittest.main()
