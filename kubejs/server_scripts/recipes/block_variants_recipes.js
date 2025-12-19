ServerEvents.recipes((event) => {
	// Cracked Stone Brick Stairs
	event.shaped(
		Item.of("4x block_variants:cracked_stone_brick_stairs"),
		["A  ", "AA ", "AAA"],
		{
			A: "minecraft:cracked_stone_bricks",
		}
	);
	event.stonecutting(
		"block_variants:cracked_stone_brick_stairs",
		"minecraft:cracked_stone_bricks"
	);

	// Cracked Stone Brick Slab
	event.shaped(Item.of("6x block_variants:cracked_stone_brick_slab"), ["AAA"], {
		A: "minecraft:cracked_stone_bricks",
	});
	event.stonecutting(
		"2x block_variants:cracked_stone_brick_slab",
		"minecraft:cracked_stone_bricks"
	);

	// Cracked Stone Brick Slab
	event.shaped(Item.of("6x block_variants:cracked_stone_brick_wall"), ["AAA", "AAA"], {
		A: "minecraft:cracked_stone_bricks",
	});
	event.stonecutting(
		"block_variants:cracked_stone_brick_wall",
		"minecraft:cracked_stone_bricks"
	);
});
