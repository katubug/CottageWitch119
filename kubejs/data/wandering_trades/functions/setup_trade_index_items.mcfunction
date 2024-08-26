# Desc: Places 2 items to transfer trade index data
#
# Called by: wandering_trades:tick

tag @s add trade_items_spawned

summon minecraft:item ~ ~ ~ {Tags:["trade_index_item","trade_index"],Item:{id:"minecraft:brown_mushroom",Count:1},NoGravity:1b,PickupDelay:32767}
summon minecraft:item ~ ~ ~ {Tags:["trade_index_item","trade_index_copy"],Item:{id:"minecraft:brown_mushroom",Count:1},NoGravity:1b,PickupDelay:32767}