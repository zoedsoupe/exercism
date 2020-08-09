from random import randint, choice
from string import ascii_uppercase


class Robot:
    def __init__(self):
        self.name = self.generateName()
        self.reset()

    def generateName(self):
        letters = ''.join(choice(ascii_uppercase) + choice(ascii_uppercase))
        self.name = ''.join(letters + str(randint(100, 999)))

        return self.name

    def reset(self):
        self.name = self.generateName()

