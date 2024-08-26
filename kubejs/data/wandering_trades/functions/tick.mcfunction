# Desc: All commands here run every tick
#
# Called by: main:tick

schedule function wandering_trades:tick 1t

execute as @e[type=minecraft:wandering_trader,tag=!trade_items_spawned] at @s run function wandering_trades:setup_trade_index_items

# Amount of block trades
execute as @e[type=minecraft:wandering_trader,tag=!has_new_block_trades] at @s run scoreboard players set @s math_input1 15
execute as @e[type=minecraft:wandering_trader,tag=!has_new_block_trades] at @s run scoreboard players set @s math_input2 21
execute as @e[type=minecraft:wandering_trader,tag=!has_new_block_trades] at @s run function wandering_trades:math/random
execute as @e[type=minecraft:wandering_trader,tag=!has_new_block_trades] at @s run function wandering_trades:provide_block_trades

effect give @e[type=minecraft:wandering_trader,tag=!has_new_trades] minecraft:slowness 1 255 true

execute as @e[type=minecraft:wandering_trader,tag=has_new_trades] at @s run kill @e[type=minecraft:item,tag=trade_index_item,limit=2,sort=nearest,distance=..0.5]