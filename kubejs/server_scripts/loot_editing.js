LootJS.modifiers((event) => {

    //event.enableLogging();

    //Remove all Chalk from Chests
    event.removeGlobalModifier('@chalk')

    //Remove all Photographs from Chests
    event.removeGlobalModifier('@exposure')

    //Make Corruption easier to come by
    event.addEntityLootModifier("twilightforest:maze_slime")
    .removeLoot("twilightforest:charm_of_keeping_1")

    event.addLootTypeModifier(LootType.CHEST).removeLoot([
        'create:dough',
        'supplementaries:rope',
        'twilightforest:charm_of_keeping_1',
        'twilightforest:charm_of_keeping_2',
        'twilightforest:charm_of_keeping_3'
      ])
});