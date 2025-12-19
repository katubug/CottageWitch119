ServerEvents.recipes((event) => {
	//BYG Recipes
	// Windswept Sandstone
	event.shapeless(Item.of("byg:windswept_sandstone"), [
		"byg:windswept_sand",
		"byg:windswept_sand",
		"byg:windswept_sand",
		"byg:windswept_sand",
	]);

	// Black Sand
	event.shaped(Item.of("byg:black_sand", 8), ["AAA", "ABA", "AAA"], {
		A: "minecraft:sand",
		B: "minecraft:black_dye",
	});

	// white Sand
	event.shaped(Item.of("byg:white_sand", 8), ["AAA", "ABA", "AAA"], {
		A: "minecraft:sand",
		B: "minecraft:white_dye",
	});

	// blue Sand
	event.shaped(Item.of("byg:blue_sand", 8), ["AAA", "ABA", "AAA"], {
		A: "minecraft:sand",
		B: "minecraft:blue_dye",
	});

	// purple Sand
	event.shaped(Item.of("byg:purple_sand", 8), ["AAA", "ABA", "AAA"], {
		A: "minecraft:sand",
		B: "minecraft:purple_dye",
	});

	// pink Sand
	event.shaped(Item.of("byg:pink_sand", 8), ["AAA", "ABA", "AAA"], {
		A: "minecraft:sand",
		B: "minecraft:pink_dye",
	});

	// windswept Sand
	event.shaped(Item.of("byg:windswept_sand", 8), ["AAA", "ABA", "AAA"], {
		A: "minecraft:sand",
		B: "spelunkery:rock_salt",
	});

	// end Sand
	event.shaped(Item.of("byg:end_sand", 8), ["AAA", "ABA", "AAA"], {
		A: "minecraft:sand",
		B: "minecraft:ender_pearl",
	});

	// warped_soul Sand
	event.shaped(Item.of("byg:warped_soul_sand", 8), ["AAA", "ABA", "AAA"], {
		A: "minecraft:sand",
		B: "minecraft:warped_fungus",
	});

	// warped_soul soil
	event.shaped(Item.of("byg:warped_soul_soil", 8), ["AAA", "ABA", "AAA"], {
		A: "#forge:dirt",
		B: "minecraft:warped_fungus",
	});
});
