import move

class Champion:
    def __init__(self, name, id):
        self.name = name
        self.id = id
        self.position = 0

    def __str__(self):
        return f"Champion: {self.name}, {self.id}, {self.position}"

    def action(self, map_size):
        self.position = move.move(self, [0,1,2])
        self.check_map_boundary(map_size)

    def check_map_boundary(self, map_size):
        if self.position >= map_size:
            self.position = map_size - 1
        if self.position < 0:
            self.position = 0