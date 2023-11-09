import random
import string

def generate_random_letter():
    """Generates a random uppercase letter."""
    return random.choice(string.ascii_uppercase)

def shuffle_letters(letters):
    """Shuffles a list of Letter objects randomly."""
    random.shuffle(letters)
    return letters

def get_blank_board(size):
    """Returns a blank board data structure for the given size."""
    board = []

    for _ in range(size):
        row = ['_'] * size
        board.append(row)

    return board