from functools import reduce


def is_armstrong_number(number: int) -> bool:
    if number == 0:
        return True

    numbers = [int(x) for x in str(number)]

    soma = reduce(lambda y, _: pow(y, len(numbers)), numbers)

    return True if soma == number else False
