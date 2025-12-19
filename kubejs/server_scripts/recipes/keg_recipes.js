ServerEvents.recipes((event) => {
	// Remove Keg Recipes that crash / are being rewritten
	let toRemove = [
		{ output: "brewinandchewin:jerky" },
		{ output: "brewinandchewin:kimchi" },
		{ output: "brewinandchewin:kippers" },
		{ output: "culturaldelights:pickle" },
	];

	for (const remove of toRemove) {
		event.remove(remove);
	}
});

ServerEvents.recipes((event) => {
	// Jerky
	event
		.custom({
			type: "farmersdelight:cooking",
			cookingtime: 200,
			experience: 1.0,
			ingredients: [
				{
					tag: "brewinandchewin:raw_meats",
				},
				{
					tag: "brewinandchewin:raw_meats",
				},
				{
					tag: "brewinandchewin:raw_meats",
				},
				{
					item: "spelunkery:salt",
				},
			],
			recipe_book_tab: "misc",
			result: {
				count: 3,
				item: "brewinandchewin:jerky",
			},
		})
		.id("kjs_jerky");

	// Kippers
	event
		.custom({
			type: "farmersdelight:cooking",
			cookingtime: 200,
			experience: 1.0,
			ingredients: [
				{
					tag: "forge:raw_fishes",
				},
				{
					tag: "forge:raw_fishes",
				},
				{
					item: "minecraft:kelp",
				},
				{
					item: "spelunkery:salt",
				},
			],
			recipe_book_tab: "misc",
			result: {
				count: 3,
				item: "brewinandchewin:kippers",
			},
		})
		.id("kjs_kippers");

	// Kimchi
	event
		.custom({
			type: "farmersdelight:cooking",
			cookingtime: 200,
			experience: 1.0,
			ingredients: [
				{
					item: "farmersdelight:cabbage_leaf",
				},
				{
					tag: "forge:vegetables",
				},
				{
					item: "minecraft:kelp",
				},
				{
					item: "spelunkery:salt",
				},
			],
			recipe_book_tab: "misc",
			result: {
				count: 2,
				item: "brewinandchewin:kimchi",
			},
		})
		.id("kjs_kimchi");

	// Pickle
	event
		.custom({
			type: "farmersdelight:cooking",
			cookingtime: 200,
			experience: 1.0,
			ingredients: [
				{
					item: "culturaldelights:cucumber",
				},
				{
					item: "culturaldelights:cucumber",
				},
				{
					item: "culturaldelights:cucumber",
				},
				{
					item: "culturaldelights:cucumber",
				},
				{
					item: "spelunkery:salt",
				},
			],
			recipe_book_tab: "misc",
			result: {
				count: 4,
				item: "culturaldelights:pickle",
			},
		})
		.id("kjs_pickle");
});
