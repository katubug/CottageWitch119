ServerEvents.recipes((event) => {
	// Mysterious Worm Craftable
	event.shaped(Item.of("alexsmobs:mysterious_worm"), ["AAA", "ABA", "AAA"], {
		A: "twilightforest:moonworm",
		B: "ars_nouveau:void_jar",
	});

	// Mosquito Larva Crafting
	event.shapeless(Item.of("alexsmobs:mosquito_larva"), [
		"alexsmobs:maggot",
		"minecraft:crimson_fungus",
	]);

	// Craft Fish Oil
	event.shapeless(Item.of("alexsmobs:fish_oil"), [
		"#forge:raw_fishes",
		"#forge:raw_fishes",
		"#forge:raw_fishes",
		"#forge:raw_fishes",
		"minecraft:glass_bottle",
	]);

	// Transmutation Table
	event.shaped(Item.of("alexsmobs:transmutation_table"), ["ABA", "CDC", "EEE"], {
		A: "minecraft:netherite_ingot",
		B: "minecraft:nether_star",
		C: "alexsmobs:farseer_arm",
		D: "minecraft:dragon_egg",
		E: "minecraft:obsidian",
	});

	// Tusklin Shoes
	event.shaped(Item.of("alexsmobs:pigshoes"), ["A A", "B B", "ACA"], {
		A: "minecraft:iron_nugget",
		B: "minecraft:iron_ingot",
		C: "twilightforest:ironwood_ingot",
	});

	// Hemolymph Blaster
	event.shaped(Item.of("alexsmobs:hemolymph_blaster"), ["AAA", "BCD", "E  "], {
		A: "alexsmobs:hemolymph_sac",
		B: "nethersdelight:mimicarnation",
		C: "alexsmobs:blood_sprayer",
		D: "alexsmobs:mosquito_proboscis",
		E: "alexsmobs:warped_muscle",
	});
});
