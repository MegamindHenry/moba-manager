class ChampionPosition:
    def __init__(self, poss, champs, champs_num = 10, maps_size = 20):
        self.champs = champs
        self.champs_num = champs_num
        self.maps_size = maps_size

        self.init_pos(poss, self.champs)

    def init_pos(self, poss, champs):
        for i in range(self.champs_num):
            champs[i].position = poss[i]

    def display_position(self):
        position_infos = [[] for i in range(self.maps_size)]
        for i in range(self.champs_num):
            position_infos[self.champs[i].position].append(self.champs[i].id)

        for i in range(self.maps_size):
            print(f"P{i+1}: {self.display_position_info(position_infos[i])}")

    def display_position_info(self, position_info):
        return ", ".join(str(e) for e in position_info)