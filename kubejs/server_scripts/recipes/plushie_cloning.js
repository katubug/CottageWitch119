ServerEvents.recipes((event) => {
	// Plushie Cloning

	let plushies = [
		"plushies:axolotl",
		"plushies:bee",
		"plushies:cat",
		"plushies:cow",
		"plushies:dolphin",
		"plushies:dragon",
		"plushies:enderman",
		"plushies:parrot",
		"plushies:mooshroom",
		"plushies:llama",
		"plushies:white_fox",
		"plushies:frog",
		"plushies:goat",
		"plushies:warden",
		"plushies:sheep",
		"plushies:turtle",
		"plushies:magma_cube",
		"plushies:red_fox",
		"plushies:panda",
		"plushies:slime",
	];

	plushies.forEach((plushie) => {
		event
			.shaped(
				Item.of(plushie, 1),
				[
					"AAA",
					"ABA", //
					"AAA",
				],
				{
					A: "ars_nouveau:mirrorweave",
					B: plushie,
				}
			)
			.keepIngredient(plushie);
	});
});
