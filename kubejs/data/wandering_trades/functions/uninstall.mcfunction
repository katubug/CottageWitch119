# Desc: Removes all scores within the datapack
#
# Called by: main:uninstall_message

schedule clear wandering_trades:tick

scoreboard objectives remove wt_trades
scoreboard objectives remove wt_tradeIndex