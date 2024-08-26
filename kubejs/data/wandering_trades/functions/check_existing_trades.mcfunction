# [RECURSIVE FUNCTION]
# Desc: Checks if this trade has already been added to the trader
#
# Called by: wandering_trades:provide_trades
# 
# Trade Index: @e[type=item,sort=nearest,limit=1,tag=trade_index]

# Copy "Trade Index" Item to "Trade Index Copy" Item
data modify entity @s Item.tag.TradeIndex set from entity @e[type=item,sort=nearest,limit=1,tag=trade_index] Item.tag.TradeIndex

# Recursively check existing
function wandering_trades:recursive_check

# Add trade index to trade index array if not existing already
execute as @s[scores={wt_tradeIndex=0}] run tag @e[type=minecraft:wandering_trader,sort=nearest,limit=1] add success