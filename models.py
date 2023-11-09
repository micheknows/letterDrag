class Letter:

    def __init__(self, value):
        self.value = value
        self.matched = False

    def match(self):
        self.matched = True

    def __repr__(self):
        return self.value