LootJS.modifiers((event) => {

    //Turtles can be fished up
    event.addLootTableModifier("minecraft:gameplay/fishing")
    .logName("box_turtle")
    .anyBiome("minecraft:swamp", "minecraft:mangrove_swamp", "#forge:is_swamp")
    .randomChance(0.20)
    .removeLoot(Ingredient.all)
    .addLoot("aquaculture:box_turtle")
    
    event.addLootTableModifier("minecraft:gameplay/fishing")
    .anyBiome("#forge:is_ocean")
    .logName("arrau_turtle")
    .randomChance(0.02)
    .removeLoot(Ingredient.all)
    .addLoot("aquaculture:arrau_turtle")

    event.addLootTableModifier("minecraft:gameplay/fishing")
    .anyBiome("#twilightforest:in_twilight_forest")
    .logName("starshell_turtle")
    .randomChance(0.02)
    .removeLoot(Ingredient.all)
    .addLoot("aquaculture:starshell_turtle")

    //Hat Bags
    event.addLootTableModifier("minecraft:gameplay/fishing")
    .logName("hatbag_common_fishing")
    .randomChance(0.20)
    .removeLoot(Ingredient.all)
    .addLoot("simplehats:hatbag_common")

    event.addLootTableModifier("minecraft:gameplay/fishing")
    .logName("hatbag_uncommon_fishing")
    .randomChance(0.15)
    .removeLoot(Ingredient.all)
    .addLoot("simplehats:hatbag_uncommon")

    event.addLootTableModifier("minecraft:gameplay/fishing")
    .logName("hatbag_rare_fishing")
    .randomChance(0.10)
    .removeLoot(Ingredient.all)
    .addLoot("simplehats:hatbag_rare")

    event.addLootTableModifier("minecraft:gameplay/fishing")
    .logName("hatbag_epic_fishing")
    .randomChance(0.02)
    .removeLoot(Ingredient.all)
    .addLoot("simplehats:hatbag_epic")

    //Katu thinks these other loot tables literally aren't getting used and she thinks it's probably Aquaculture's fault.
    /*
    event.addLootTableModifier("minecraft:gameplay/fishing/junk")
    .logName("hatbag_common_junk")
    .randomChance(0.20)
    .removeLoot(Ingredient.all)
    .addLoot("simplehats:hatbag_common")

    event.addLootTableModifier("minecraft:gameplay/fishing/junk")
    .logName("hatbag_uncommon_junk")
    .randomChance(0.15)
    .removeLoot(Ingredient.all)
    .addLoot("simplehats:hatbag_uncommon")

    event.addLootTableModifier("minecraft:gameplay/fishing/treasure")
    .randomChance(0.20)
    .logName("hatbag_rare_treasure")
    .addLoot("simplehats:hatbag_rare")

    event.addLootTableModifier("minecraft:gameplay/fishing/treasure")
    .logName("hatbag_epic_treasure")
    .randomChance(0.10)
    .addLoot("simplehats:hatbag_epic")

    event.addLootTableModifier("aquaculture:gameplay/fishing/neptunium")
    .logName("hatbag_rare_neptunium")
    .randomChance(0.20)
    .addLoot("simplehats:hatbag_rare")

    event.addLootTableModifier("aquaculture:gameplay/fishing/neptunium")
    .logName("hatbag_epic_neptunium")
    .randomChance(0.10)
    .addLoot("simplehats:hatbag_epic")
    */

})


