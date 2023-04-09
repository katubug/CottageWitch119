data modify storage better_traders:trader_offers fullData set from entity @s Offers
data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[0]


execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[1]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[0]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll1

data modify storage better_traders:trader_offers Offer1 set from entity @s Offers.Recipes[1]


execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[2]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[0]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll2

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer1 set from entity @s Offers.Recipes[2]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer1 set from entity @s Offers.Recipes[1]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll2

data modify storage better_traders:trader_offers Offer2 set from entity @s Offers.Recipes[2]


execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[3]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[0]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll3

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer1 set from entity @s Offers.Recipes[3]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer1 set from entity @s Offers.Recipes[1]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll3

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer2 set from entity @s Offers.Recipes[3]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer2 set from entity @s Offers.Recipes[2]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll3

data modify storage better_traders:trader_offers Offer3 set from entity @s Offers.Recipes[3]


execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[4]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[0]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll4

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer1 set from entity @s Offers.Recipes[4]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer1 set from entity @s Offers.Recipes[1]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll4

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer2 set from entity @s Offers.Recipes[4]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer2 set from entity @s Offers.Recipes[2]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll4

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer3 set from entity @s Offers.Recipes[4]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer3 set from entity @s Offers.Recipes[3]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll4

data modify storage better_traders:trader_offers Offer4 set from entity @s Offers.Recipes[4]


execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[5]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer0 set from entity @s Offers.Recipes[0]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll5

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer1 set from entity @s Offers.Recipes[5]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer1 set from entity @s Offers.Recipes[1]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll5

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer2 set from entity @s Offers.Recipes[5]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer2 set from entity @s Offers.Recipes[2]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll5

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer3 set from entity @s Offers.Recipes[5]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer3 set from entity @s Offers.Recipes[3]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll5

execute store success score @s BT.TradeSuccess run data modify storage better_traders:trader_offers Offer4 set from entity @s Offers.Recipes[5]
execute if score @s BT.TradeSuccess matches 1 run data modify storage better_traders:trader_offers Offer4 set from entity @s Offers.Recipes[4]
execute if score @s BT.TradeSuccess matches 0 run function better_traders:roll5

data modify storage better_traders:trader_offers Offer4 set from entity @s Offers.Recipes[5]


execute store success score @s BT.DataCheck run data modify storage better_traders:trader_offers fullData set from entity @s Offers
execute as @e[type=minecraft:wandering_trader,limit=1,scores={BT.DataCheck=1}] run function better_traders:dupe_check