LootJS.modifiers((event) => {
    event.addLootTableModifier("minecraft:gameplay/fishing")
    .randomChance(0.20)
    .addLoot("simplehats:hatbag_common")

    event.addLootTableModifier("minecraft:gameplay/fishing")
    .randomChance(0.15)
    .addLoot("simplehats:hatbag_uncommon")

    event.addLootTableModifier("aquaculture:gameplay/fishing/junk")
    .randomChance(0.20)
    .addLoot("simplehats:hatbag_common")

    event.addLootTableModifier("aquaculture:gameplay/fishing/junk")
    .randomChance(0.15)
    .addLoot("simplehats:hatbag_uncommon")

    event.addLootTableModifier("minecraft:gameplay/fishing/treasure")
    .randomChance(0.10)
    .addLoot("simplehats:hatbag_rare")

    event.addLootTableModifier("minecraft:gameplay/fishing/treasure")
    .randomChance(0.10)
    .addLoot("simplehats:hatbag_rare")

    event.addLootTableModifier("minecraft:gameplay/fishing/treasure")
    .randomChance(0.02)
    .addLoot("simplehats:hatbag_epic")

    event.addLootTableModifier("aquaculture:gameplay/fishing/neptunium")
    .randomChance(0.10)
    .addLoot("simplehats:hatbag_rare")

    event.addLootTableModifier("aquaculture:gameplay/fishing/neptunium")
    .randomChance(0.02)
    .addLoot("simplehats:hatbag_epic")

})


