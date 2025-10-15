LootJS.modifiers((event) => {
	//event.enableLogging();

	//Remove all Chalk from Chests
	event.removeGlobalModifier("@chalk");

	//Remove all Photographs from Chests
	event.removeGlobalModifier("@exposure");

	// remove all unobtainable items from loot tables
	let unobtainables = [];
	Ingredient.of("#cw:unobtainable").itemIds.forEach((id) => {
		unobtainables.push(id);
	});
	console.log(
		`Found ${unobtainables.length} unobtainable items. Removing from all loot pools...`
	);
	LootType.values().forEach((type) => {
		console.log(`Removing unobtainable items from ${type}`);
		event.addLootTypeModifier(type).removeLoot(unobtainables);
	});

	//Make Corruption easier to come by
	event
		.addEntityLootModifier("twilightforest:maze_slime")
		.removeLoot("twilightforest:charm_of_keeping_1");

	event
		.addLootTableModifier("betterdungeons:spider_dungeon/chests/egg_room")
		.logName("dragonfly_wings")
		.addLoot("2x crittersandcompanions:dragonfly_wing")
		.randomChance(0.3);

	event
		.addLootTableModifier("minecraft:chests/shipwreck_treasure")
		.removeLoot([
			"simplehats:hatbag_common",
			"simplehats:hatbag_uncommon",
			"simplehats:hatbag_rare",
			"simplehats:hatbag_epic",
		]);

	event
		.addLootTypeModifier(LootType.CHEST)
		.logName("junk_removal")
		.removeLoot([
			"create:dough",
			"supplementaries:rope",
			"twilightforest:charm_of_keeping_1",
			"twilightforest:charm_of_keeping_2",
			"twilightforest:charm_of_keeping_3",
			"farmersdelight:rope",
			"farmersdelight:cooking_pot",
			"farmersdelight:skillet",
			"minecraft:beetroot_seeds",
		]);

	event
		.addEntityLootModifier("alexsmobs:mimicube")
		.removeLoot("alexsmobs:mimicream")
		.addLoot("nethersdelight:mimicarnation");

	event
		.addBlockLootModifier("byg:budding_subzero_crystal")
		.addLoot(
			LootEntry.of("byg:budding_subzero_crystal").when((c) =>
				c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
			)
		);

	event
		.addBlockLootModifier("byg:budding_therium_crystal")
		.addLoot(
			LootEntry.of("byg:budding_therium_crystal").when((c) =>
				c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
			)
		);

	event
		.addBlockLootModifier("tflostblocks:chiseled_trollsteinn")
		.addLoot(LootEntry.of("tflostblocks:chiseled_trollsteinn"));
});
