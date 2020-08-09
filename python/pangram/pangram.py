import string

alphabet = set(string.ascii_lowercase)


def is_pangram(sentence: str):
    return not set(alphabet) - set(sentence.lower())
