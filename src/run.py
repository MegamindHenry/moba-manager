import move
import champion_position
import champion

round_cnt = 0
champs_num = 6
map_size = 20
red_player1 = champion.Champion("XiaoGou", "xg")
red_player2 = champion.Champion("ChaoXi", "cx")
red_player3 = champion.Champion("HuoQiang", "hq")
blue_player1 = champion.Champion("XiaoNiu", "xn")
blue_player2 = champion.Champion("NvWang", "nw")
blue_player3 = champion.Champion("VS", "vs")

position = champion_position.ChampionPosition([5,6,7,8,9,10],
    [red_player1, red_player2, red_player3,
    blue_player1, blue_player2, blue_player3],
    champs_num = champs_num)

# print(red_player1)
# print(red_player2)
# print(red_player3)
# print(blue_player1)
# print(blue_player2)
# print(blue_player3)

while True:
    round_cnt += 1
    print("="*20)
    print(f"Round: {round_cnt}")
    print("="*20)
    position.display_position()
    print("-"*20)
    print(f"Move phase")
    print("-"*20)
    for i in range(champs_num):
        position.champs[i].action(map_size)
    q = input("Press Enter to continue(q for quit): ")
    if q == "q":
        break