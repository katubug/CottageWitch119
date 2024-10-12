LootJS.modifiers((event) => {

    //event.enableLogging();

    //Remove all Chalk from Chests
    event.removeGlobalModifier('@chalk')

    //Remove all Photographs from Chests
    event.removeGlobalModifier('@exposure')

    //Make Corruption easier to come by
    event.addEntityLootModifier("twilightforest:maze_slime")
    .removeLoot("twilightforest:charm_of_keeping_1")

    event.addLootTableModifier('betterdungeons:spider_dungeon/chests/egg_room')
    .logName('dragonfly_wings')
    .addLoot('2x crittersandcompanions:dragonfly_wing')
    .randomChance(0.3)

    event.addLootTableModifier('minecraft:chests/shipwreck_treasure').removeLoot([
      'simplehats:hatbag_common', 
      'simplehats:hatbag_uncommon', 
      'simplehats:hatbag_rare', 
      'simplehats:hatbag_epic'
    ])

    event.addLootTypeModifier(LootType.CHEST).logName("junk_removal").removeLoot([
        'create:dough',
        'supplementaries:rope',
        'twilightforest:charm_of_keeping_1',
        'twilightforest:charm_of_keeping_2',
        'twilightforest:charm_of_keeping_3',
        'farmersdelight:rope',
        'farmersdelight:cooking_pot',
        'farmersdelight:skillet',
        'minecraft:beetroot_seeds'
      ])

    event.addEntityLootModifier("alexsmobs:mimicube")
    .removeLoot('alexsmobs:mimicream')
    .addLoot('nethersdelight:mimicarnation')
});