ServerEvents.recipes((event) => {
	// these all accept any color of infused fabric, because colored infused fabric CAN be rclicked with another dye to be replaced.
	// this does mean that you can dye the block to itself, unfortunately, but I didn't want to manually do all the combinations

	global.dye_colors.forEach((color) => {
		event.shapeless(Item.of(`hexerei:infused_fabric_block_dyed_${color}`), [
			`#hexerei:infused_fabric_block`,
			`minecraft:${color}_dye`,
		]);
	});

	// ornate blocks
	event.shapeless(Item.of("hexerei:infused_fabric_block_ornate"), [
		"#hexerei:infused_fabric_block",
		"minecraft:gold_nugget",
	]);
});
