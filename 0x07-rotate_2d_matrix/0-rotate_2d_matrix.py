#!/usr/bin/python3
'''
Given an n x n 2D matrix, rotate it 90 degrees clockwise
'''


def rotate_2d_matrix(matrix):
    """ Rotates a 2D matrix clockwise in 90 degrees
        The matrix must be edited in-place
    Args:
        matrix (list): 2D matrix
    Return:
        None
    """
    # Reverse row-wise and zip the unpacked matrix
    matrix[:] = list(map(list, zip(*matrix[::-1])))
