ServerEvents.recipes(e => {
    e.recipes.create.compacting('brewinandchewin:unripe_flaxen_cheese_wheel', [Fluid.of('minecraft:milk', 1000), 'minecraft:brown_mushroom', 'minecraft:brown_mushroom', 'minecraft:sugar']).heated()

    e.recipes.create.compacting('brewinandchewin:unripe_scarlet_cheese_wheel', [Fluid.of('minecraft:milk', 1000), 'minecraft:crimson_fungus', 'minecraft:crimson_fungus', 'minecraft:sugar']).heated()

    e.recipes.create.haunting('brewinandchewin:flaxen_cheese_wheel', 'brewinandchewin:unripe_flaxen_cheese_wheel')

    e.recipes.create.haunting('brewinandchewin:scarlet_cheese_wheel', 'brewinandchewin:unripe_scarlet_cheese_wheel')

    e.recipes.create.haunting('domesticationinnovation:sinister_carrot', 'miners_delight:cave_carrot')

    e.recipes.create.haunting('byg:crimson_berries', 'byg:blueberries')

    e.recipes.create.crushing('2x minecraft:prismarine_shard', 'minecraft:prismarine')

    e.recipes.create.crushing(['2x minecraft:coal', Item.of('minecraft:coal').withChance(0.5)], '#forge:ores/coal')

    e.recipes.create.crushing(['minecraft:quartz', Item.of('minecraft:quartz').withChance(0.5)], 'byg:raw_quartz_block')



})