(function () {
	// This controls the drop chance of mob eggs.
	// NOT A PERCENT, this is a multiplier.
	// This means 1.0 is 100%, and 0.01 is 1%
	let EGG_DROP_CHANCE = 0.01;

	// This controls which mobs drop eggs.
	// It is a mapping of mob id to the item id of the spawn egg, and stored in global constants.
	// Some mobs are omitted from this mapping because they are special cases:
	//      * Sporelings drop different items depending on whether they are the nether variety

	let EGGS = global.allowed_eggs;

	// Technical implementation details below.

	function applyEggDropLootConditions(lootPool) {
		lootPool.killedByPlayer();
		lootPool.randomChance(EGG_DROP_CHANCE);
		lootPool.matchMainHand(Ingredient.of("#forge:scythe"));
	}

	function addEggDrop(event, mobId, eggId) {
		event.addEntityLootModifier(mobId).pool((pool) => {
			applyEggDropLootConditions(pool);
			pool.addLoot(eggId);
		});
	}

	function addSporelingEggDrops(event) {
		let netherEggEntry = LootEntry.of("cnb:sporeling_nether_egg").when((conditions) => {
			conditions.customCondition({
				condition: "minecraft:alternative",
				terms: [
					{
						condition: "minecraft:entity_properties",
						entity: "this",
						predicate: {
							nbt: '{SporelingType: "cnb:red_nether"}',
						},
					},
					{
						condition: "minecraft:entity_properties",
						entity: "this",
						predicate: {
							nbt: '{SporelingType: "cnb:brown_nether"}',
						},
					},
				],
			});
		});
		let overworldEggEntry = LootEntry.of("cnb:sporeling_overworld_egg");

		event.addEntityLootModifier("cnb:sporeling").pool((pool) => {
			applyEggDropLootConditions(pool);
			pool.addAlternativesLoot(netherEggEntry, overworldEggEntry);
		});
	}

	LootJS.modifiers((event) => {
		for (let mobId in EGGS) {
			addEggDrop(event, mobId, EGGS[mobId]);
		}
		addSporelingEggDrops(event);
	});
})();
