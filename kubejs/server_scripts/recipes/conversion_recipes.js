ServerEvents.recipes((event) => {
	//Myalite Crystal to Myalite
	event.shaped(
		Item.of("quark:myalite", 8),
		[
			"AAA", //
			"ABA", //
			"AAA", //
		],
		{
			A: "quark:myalite_crystal",
			B: "ars_nouveau:manipulation_essence",
		}
	);

	//Myalite to Dusky Myalite
	event.shaped(
		Item.of("quark:dusky_myalite", 8),
		[
			"AAA", //
			"ABA", //
			"AAA", //
		],
		{
			A: "quark:myalite",
			B: "ars_nouveau:manipulation_essence",
		}
	);

	//Dusky Myalite to Myalite Crystal
	event.shaped(
		Item.of("quark:myalite_crystal", 8),
		[
			"AAA", //
			"ABA", //
			"AAA", //
		],
		{
			A: "quark:dusky_myalite",
			B: "ars_nouveau:manipulation_essence",
		}
	);

	// Warp Scrolls to Warp Stones
	event.shaped(
		Item.of("waystones:warp_stone"),
		[
			" A ", //
			"ABA", //
			" A ", //
		],
		{
			A: "waystones:warp_scroll",
			B: "minecraft:emerald",
		}
	);

	// Waystones to Sharestones
	event.shapeless(Item.of("waystones:sharestone"), ["#waystones:waystone"]);
	// Waystones from Sharestones
	event.shapeless(Item.of("waystones:waystone"), ["#waystones:sharestone"]);

	// Quark Azalea Wood Conversion Recipes

	// Quark Azalea Log
	event.shapeless(Item.of("quark:azalea_log"), [
		"minecraft:moss_block",
		"#cw:azalea_logs",
	]);

	// Quark Azalea Wood
	event.shapeless(Item.of("quark:azalea_wood"), [
		"minecraft:moss_block",
		"#cw:azalea_wood",
	]);

	// Quark Azalea Planks
	event.shapeless(Item.of("quark:azalea_planks"), [
		"minecraft:moss_block",
		"#cw:azalea_planks",
	]);

	// Quark Azalea Stripped Wood
	event.shapeless(Item.of("quark:stripped_azalea_wood"), [
		"minecraft:moss_block",
		"cw:stripped_azalea_wood",
	]);

	// Quark Azalea Stripped Log
	event.shapeless(Item.of("quark:stripped_azalea_log"), [
		"minecraft:moss_block",
		"cw:stripped_azalea_log",
	]);

	// unglow a glowing flower crown
	event.shapeless(Item.of("cnb:flower_crown"), [
		"cnb:glowing_flower_crown",
		"supplementaries:soap",
	]);

	// reglow a flower crown
	event.shapeless(Item.of("cnb:glowing_flower_crown"), [
		"cnb:flower_crown",
		"minecraft:glow_ink_sac",
	]);

	//Venison exchange
	//Env to TF Raw
	event.shapeless(Item.of("twilightforest:raw_venison"), [
		"environmental:venison",
	]);

	//Env to TF Cooked
	event.shapeless(Item.of("twilightforest:cooked_venison"), [
		"environmental:cooked_venison",
	]);

	// squid
	event.shapeless(Item.of("miners_delight:squid"), ["culturaldelights:squid"]);
	event.shapeless(Item.of("culturaldelights:squid"), ["miners_delight:squid"]);
	event.shapeless(Item.of("miners_delight:glow_squid"), [
		"culturaldelights:glow_squid",
	]);
	event.shapeless(Item.of("culturaldelights:glow_squid"), [
		"miners_delight:glow_squid",
	]);
	event.shapeless(Item.of("miners_delight:baked_squid"), [
		"culturaldelights:cooked_squid",
	]);
	event.shapeless(Item.of("culturaldelights:cooked_squid"), [
		"miners_delight:baked_squid",
	]);

	// Coin Conversion recipes
	// Lunar to Solar
	event.shapeless(Item.of("kubejs:solar_coin"), [
		"kubejs:lunar_coin",
		"kubejs:lunar_coin",
		"kubejs:lunar_coin",
		"kubejs:lunar_coin",
		"kubejs:lunar_coin",
		"kubejs:lunar_coin",
		"kubejs:lunar_coin",
		"kubejs:lunar_coin",
		"kubejs:lunar_coin",
	]);

	// Solar to Arcane
	event.shapeless(Item.of("kubejs:arcane_coin"), [
		"kubejs:solar_coin",
		"kubejs:solar_coin",
		"kubejs:solar_coin",
		"kubejs:solar_coin",
		"kubejs:solar_coin",
		"kubejs:solar_coin",
		"kubejs:solar_coin",
		"kubejs:solar_coin",
		"kubejs:solar_coin",
	]);

	// Arcane to Solar
	event.shapeless(Item.of("kubejs:solar_coin", 9), ["kubejs:arcane_coin"]);

	// Solar to Lunar
	event.shapeless(Item.of("kubejs:lunar_coin", 9), ["kubejs:solar_coin"]);
	/// Hexhaven Specific Coins
	// Lunar to Solar
	event.shapeless(Item.of("kubejs:solarcoin"), [
		"kubejs:lunarcoin",
		"kubejs:lunarcoin",
		"kubejs:lunarcoin",
		"kubejs:lunarcoin",
		"kubejs:lunarcoin",
		"kubejs:lunarcoin",
		"kubejs:lunarcoin",
		"kubejs:lunarcoin",
		"kubejs:lunarcoin",
	]);

	// Solar to Arcane
	event.shapeless(Item.of("kubejs:arcanecoin"), [
		"kubejs:solarcoin",
		"kubejs:solarcoin",
		"kubejs:solarcoin",
		"kubejs:solarcoin",
		"kubejs:solarcoin",
		"kubejs:solarcoin",
		"kubejs:solarcoin",
		"kubejs:solarcoin",
		"kubejs:solarcoin",
	]);

	// Arcane to Solar
	event.shapeless(Item.of("kubejs:solarcoin", 9), ["kubejs:arcanecoin"]);

	// Solar to Lunar
	event.shapeless(Item.of("kubejs:lunarcoin", 9), ["kubejs:solarcoin"]);

	// Wool Dye Attempt
	let woolColors = [
		"red",
		"yellow",
		"black",
		"white",
		"orange",
		"magenta",
		"light_blue",
		"lime",
		"pink",
		"gray",
		"light_gray",
		"cyan",
		"purple",
		"blue",
		"brown",
		"green",
	];

	for (const dye of woolColors) {
		event.remove({
			output: "minecraft:" + dye + "_wool",
		});
	}

	for (const color of woolColors) {
		event.shaped(
			Item.of("minecraft:" + color + "_wool", 8),
			["AAA", "ABA", "AAA"],
			{
				A: "#minecraft:wool",
				B: "minecraft:" + color + "_dye",
			}
		);
	}

	// Corundum Clusters to Blocks
	let corundumColors = [
		"red",
		"yellow",
		"black",
		"white",
		"orange",
		"violet",
		"indigo",
		"blue",
		"green",
	];

	for (const color of corundumColors) {
		event.shapeless(Item.of("quark:" + color + "_corundum"), [
			"quark:" + color + "_corundum_cluster",
			"quark:" + color + "_corundum_cluster",
			"quark:" + color + "_corundum_cluster",
			"quark:" + color + "_corundum_cluster",
		]);
	}

	// Blackstone Furnace Conversion
	event.shapeless(Item.of("nethersdelight:blackstone_furnace"), [
		"quark:blackstone_furnace",
	]);
	event.shapeless(Item.of("quark:blackstone_furnace"), [
		"nethersdelight:blackstone_furnace",
	]);
});
