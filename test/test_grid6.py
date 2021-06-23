#!/usr/bin/env python3
import unittest

import grid6


class TestGrid6(unittest.TestCase):
    def test_cell_origin(self):
        self.assertEqual(grid6.get_cell_origin('A'), [-180.0, -90.0])
        self.assertEqual(grid6.get_cell_origin('B'), [-135.0, -90.0])
        with self.assertRaises(ValueError):
            grid6.get_cell_origin('a')

    def test_cell_bounds(self):
        self.assertEqual(
                grid6.get_cell_bounds('A'), [-180.0, -90.0, -135.0, -45.0])

    def test_cell_geometry(self):
        self.assertEqual(
                grid6.get_cell_geometry('A'), [
                    [-180.0, -90.0],
                    [-135.0, -90.0],
                    [-135.0, -45.0],
                    [-180.0, -45.0],
                    ])

    def test_cell_from_lon_lat(self):
        self.assertEqual(
                grid6.get_cell_from_lon_lat(-180, -90, 1), 'A')
        self.assertEqual(
                grid6.get_cell_from_lon_lat(149.124448, -35.308232, 8),
                'RHM3YE6P')

    def test_cell_word_list(self):
        self.assertEqual(
                grid6.get_cell_word_list('RHM3YE6P'), [
                    'northwest',
                    'dwarfing',
                    'furor',
                    'starcraft',
                    'scornful',
                    'entranced',
                    'strongly',
                    'homegrown'])

    def test_cell_words(self):
        self.assertEqual(
                grid6.get_cell_words('RHM3YE6P'),
                'northwest//dwarfing//furor//starcraft//'
                'scornful//entranced//strongly//homegrown')


if __name__ == '__main__':
    unittest.main()
