ServerEvents.recipes(event => {

    // these all accept any color of infused fabric, because colored infused fabric CAN be rclicked with another dye to be replaced.
    // this does mean that you can dye the block to itself, unfortunately, but I didn't want to manually do all the combinations

    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_white'), ['#hexerei:infused_fabric_block', 'minecraft:white_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_orange'), ['#hexerei:infused_fabric_block', 'minecraft:orange_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_magenta'), ['#hexerei:infused_fabric_block', 'minecraft:magenta_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_light_blue'), ['#hexerei:infused_fabric_block', 'minecraft:light_blue_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_yellow'), ['#hexerei:infused_fabric_block', 'minecraft:yellow_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_lime'), ['#hexerei:infused_fabric_block', 'minecraft:lime_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_pink'), ['#hexerei:infused_fabric_block', 'minecraft:pink_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_gray'), ['#hexerei:infused_fabric_block', 'minecraft:gray_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_light_gray'), ['#hexerei:infused_fabric_block', 'minecraft:light_gray_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_cyan'), ['#hexerei:infused_fabric_block', 'minecraft:cyan_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_purple'), ['#hexerei:infused_fabric_block', 'minecraft:purple_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_blue'), ['#hexerei:infused_fabric_block', 'minecraft:blue_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_brown'), ['#hexerei:infused_fabric_block', 'minecraft:brown_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_green'), ['#hexerei:infused_fabric_block', 'minecraft:green_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_red'), ['#hexerei:infused_fabric_block', 'minecraft:red_dye']
    )
    event.shapeless(
        Item.of('hexerei:infused_fabric_block_dyed_black'), ['#hexerei:infused_fabric_block', 'minecraft:black_dye']
    )
})