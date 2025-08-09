ServerEvents.recipes((event) => {
	//Chest Recipe WTF why did the recipe go poof?
	event.shaped(
		Item.of("minecraft:chest"),
		[
			"AAA", //
			"A A",
			"AAA",
		],
		{
			A: "#minecraft:planks",
		}
	);

	//Chest Recipe with Logs
	event.shaped(
		Item.of("minecraft:chest", 4),
		[
			"AAA", //
			"A A",
			"AAA",
		],
		{
			A: "#minecraft:logs",
		}
	);

	//Uncompress Honey
	event.shapeless(Item.of("minecraft:honeycomb", 4), ["minecraft:honeycomb_block"]);

	//Uncompress Quartz
	event.shapeless(Item.of("minecraft:quartz", 4), ["minecraft:quartz_block"]);

	// lodestone uses spelunkery
	event.shaped(
		Item.of("minecraft:lodestone"),
		[
			"ABA", //
			"BCB",
			"ABA",
		],
		{
			A: "minecraft:chiseled_stone_bricks",
			B: "spelunkery:cinnabar",
			C: "spelunkery:magnetite_chunk",
		}
	);

	// wool to string
	event.shapeless(Item.of("minecraft:string", 4), ["#minecraft:wool"]);

	// string to wool
	event.shaped(
		Item.of("minecraft:white_wool"),
		[
			"AA ", //
			"AA ",
			"   ",
		],
		{
			A: "minecraft:string",
		}
	);

	//Saddle
	event.shaped(
		Item.of("minecraft:saddle", 1),
		[
			"AAA", //
			" B ",
		],
		{
			A: "minecraft:leather",
			B: "#forge:rope",
		}
	);

	//Dripstone Cutting
	event.custom({
		type: "farmersdelight:cutting",
		ingredients: [
			{
				item: "minecraft:dripstone_block",
			},
		],
		tool: {
			tag: "forge:tools/pickaxes",
		},
		result: [
			{
				item: "minecraft:pointed_dripstone",
				count: 4,
			},
		],
	});

	const coralType = ["tube", "brain", "bubble", "fire", "horn"];
	const blockType = ["_block", "", "_fan"];
	console.log("Coral smelting:");
	coralType.forEach((type) => {
		blockType.forEach((block) => {
			let deadName = "minecraft:dead_" + type + "_coral" + block;
			let liveName = "minecraft:" + type + "_coral" + block;
			console.log(liveName + "-->" + deadName);
			event.smelting(deadName, liveName, 0, 40);
		});
	});
});
