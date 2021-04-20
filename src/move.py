import random

def move(champ, choice_cards):
    cho = random.choice(choice_cards)
    new_pos = champ.position
    if cho == 0:
        print(f"{champ.id} moves forward")
        new_pos = new_pos + 1
    if cho == 2:
        print(f"{champ.id} moves backward")
        new_pos = new_pos - 1
    return new_pos