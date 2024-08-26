# Desc: Recursively compares current trade index with the trade index list
#
# Called by: wandering_trades:check_existing_trades

execute store result score @s wt_tradeIndex run data get entity @s Item.tag.TradeIndex[0]

execute if score @e[type=minecraft:wandering_trader,sort=nearest,limit=1] wt_tradeIndex = @s wt_tradeIndex run scoreboard players set @s wt_tradeIndex -64

data remove entity @s Item.tag.TradeIndex[0]

execute if score @s wt_tradeIndex matches 1.. run function wandering_trades:recursive_check