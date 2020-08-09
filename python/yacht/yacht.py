from typing import Callable, List


def _yacht(dice: List[int]) -> int:
    return 50 if len(set(dice)) == 1 else 0


def _ns(dice: List[int], n: int) -> int:
    return n * dice.count(n)


def _full_house(dice: List[int]) -> int:
    if set(dice.count(d) for d in dice) == {2, 3}:
        return sum(dice)
    return 0


def _four_of_a_kind(dice: List[int]) -> int:
    count, die = max((dice.count(d), d) for d in dice)
    return 4 * die if count >= 4 else 0


def _straight(dice: List[int], straight: List[int]) -> int:
    return 30 if set(dice) == set(straight) else 0


def score(dice: List[int], category: Callable[[List[int]], int]) -> int:
    return category(dice)


YACHT = _yacht
def ONES(dice): return _ns(dice, 1)
def TWOS(dice): return _ns(dice, 2)
def THREES(dice): return _ns(dice, 3)
def FOURS(dice): return _ns(dice, 4)
def FIVES(dice): return _ns(dice, 5)
def SIXES(dice): return _ns(dice, 6)


FULL_HOUSE = _full_house
FOUR_OF_A_KIND = _four_of_a_kind
def LITTLE_STRAIGHT(dice): return _straight(dice, [1, 2, 3, 4, 5])
def BIG_STRAIGHT(dice): return _straight(dice, [2, 3, 4, 5, 6])
def CHOICE(dice): return sum(dice)
