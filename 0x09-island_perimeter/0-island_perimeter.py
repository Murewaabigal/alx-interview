#!/usr/bin/python3


""" This module contain te function that
calculate the perimeter of the island
"""


def island_perimeter(grid):
    """Returns the perimeter of the island with the highest perimeter."""
    perimeters = []
    for row in range(len(grid)):
        for col in range(len(grid[row])):
            if grid[row][col] == 1:
                perimeter = get_island_perimeter(grid, row, col)
                perimeters.append(perimeter)
    if not perimeters:
        return 0
    return max(perimeters)


def get_island_perimeter(grid, start_row, start_col):
    """Returns the perimeter of the island starting
    from (start_row, start_col)."""
    stack = [(start_row, start_col)]
    visited = set()
    perimeter = 0
    while stack:
        row, col = stack.pop()
        if (row, col) in visited:
            continue
        visited.add((row, col))
        if row == 0 or grid[row-1][col] == 0:
            perimeter += 1
        if col == 0 or grid[row][col-1] == 0:
            perimeter += 1
        if row == len(grid)-1 or grid[row+1][col] == 0:
            perimeter += 1
        if col == len(grid[row])-1 or grid[row][col+1] == 0:
            perimeter += 1
        if row > 0 and grid[row-1][col] == 1:
            stack.append((row-1, col))
        if col > 0 and grid[row][col-1] == 1:
            stack.append((row, col-1))
        if row < len(grid)-1 and grid[row+1][col] == 1:
            stack.append((row+1, col))
        if col < len(grid[row])-1 and grid[row][col+1] == 1:
            stack.append((row, col+1))
    return perimeter
