ServerEvents.recipes((event) => {
	/// Refined Storage Recipes

	//Controller
	event.shaped(Item.of("refinedstorage:creative_controller"), ["ABA", "CEC", "ADA"], {
		A: "refinedstorage:quartz_enriched_iron",
		B: "minecraft:lodestone",
		C: "refinedstorage:silicon",
		D: "refinedstorage:machine_casing",
		E: "ars_creo:starbuncle_wheel",
	});

	//Cable
	event.shaped(Item.of("refinedstorage:cable", 12), ["AAA", "BCB", "AAA"], {
		A: "refinedstorage:quartz_enriched_iron",
		B: "glassential:glass_redstone",
		C: "minecraft:glowstone_dust",
	});

	// Aetheric Receptor
	event.shaped(Item.of("refinedstorage:network_receiver"), ["AFA", "BED", "CCC"], {
		A: "refinedstorage:advanced_processor",
		B: "refinedstorage:construction_core",
		C: "minecraft:ender_pearl",
		D: "refinedstorage:destruction_core",
		E: "refinedstorage:machine_casing",
		F: "ars_nouveau:glyph_redstone_signal",
	});

	// Aetheric Messenger
	event.shaped(Item.of("refinedstorage:network_transmitter"), ["CCC", "BED", "AFA"], {
		A: "refinedstorage:advanced_processor",
		B: "refinedstorage:construction_core",
		C: "minecraft:ender_pearl",
		D: "refinedstorage:destruction_core",
		E: "refinedstorage:machine_casing",
		F: "ars_nouveau:glyph_redstone_signal",
	});

	/// Stone Casing/Storage Housing
	event.shaped(Item.of("refinedstorage:storage_housing"), ["CCC", "CAC", "BBB"], {
		A: "refinedstorage:quartz_enriched_iron",
		B: "glassential:glass_redstone",
		C: "#forge:stone",
	});

	/// Upgrade
	event.shaped(Item.of("refinedstorage:upgrade"), ["ABA", "ACA", "ABA"], {
		A: "refinedstorage:quartz_enriched_iron",
		B: "glassential:glass_redstone",
		C: "refinedstorage:improved_processor",
	});

	/// 1k Storage Glyph / Storage Part
	event.shaped(Item.of("refinedstorage:1k_storage_part"), [" C ", "CAC", " C "], {
		A: "refinedstorage:quartz_enriched_iron",
		C: "refinedstorage:basic_processor",
	});

	/// 1k Glyphstone / 1k Storage Disk
	event.shaped(Item.of("refinedstorage:1k_storage_disk"), ["DBD", "BCB", "AAA"], {
		A: "refinedstorage:quartz_enriched_iron",
		B: "glassential:glass_redstone",
		C: "refinedstorage:1k_storage_part",
		D: "#forge:stone",
	});
	/// 4k Glyphstone / 4k Storage Disk
	event.shaped(Item.of("refinedstorage:4k_storage_disk"), ["DBD", "BCB", "AAA"], {
		A: "refinedstorage:quartz_enriched_iron",
		B: "glassential:glass_redstone",
		C: "refinedstorage:4k_storage_part",
		D: "#forge:stone",
	});

	/// 16k Glyphstone / 16k Storage Disk
	event.shaped(Item.of("refinedstorage:16k_storage_disk"), ["DBD", "BCB", "AAA"], {
		A: "refinedstorage:quartz_enriched_iron",
		B: "glassential:glass_redstone",
		C: "refinedstorage:16k_storage_part",
		D: "#forge:stone",
	});

	/// 64k Glyphstone / 64k Storage Disk
	event.shaped(Item.of("refinedstorage:64k_storage_disk"), ["DBD", "BCB", "AAA"], {
		A: "refinedstorage:quartz_enriched_iron",
		B: "glassential:glass_redstone",
		C: "refinedstorage:64k_storage_part",
		D: "#forge:stone",
	});

	// Aetheric Console / Creative Wireless Grid
	event.shaped(Item.of("refinedstorage:creative_wireless_grid"), ["ABA", "ACA", "ABA"], {
		A: "refinedstorage:quartz_enriched_iron",
		B: "minecraft:ender_pearl",
		C: "#refinedstorage:grid",
	});

	// Aetheric Crafting Console/Creative Wireless Crafting Grid
	event.shaped(
		Item.of("refinedstorageaddons:creative_wireless_crafting_grid"),
		["ABA", "ACA", "ABA"],
		{
			A: "refinedstorage:quartz_enriched_iron",
			B: "minecraft:ender_pearl",
			C: "#refinedstorage:crafting_grid",
		}
	);

	// Infinity Range Booster
	event.shaped(Item.of("rsinfinitybooster:infinity_card"), [" B ", "BCB", " B "], {
		B: "refinedstorage:range_upgrade",
		C: "minecraft:nether_star",
	});

	// Dimension Card
	event.shaped(Item.of("rsinfinitybooster:dimension_card"), [" A ", "BCD", " E "], {
		A: "twilightforest:maze_map_focus",
		B: "deeperdarker:heart_of_the_deep",
		C: "rsinfinitybooster:infinity_card",
		D: "minecraft:dragon_egg",
		E: "minecraft:netherite_ingot",
	});

	// Illuminite (quartz-enriched iron)
	event.shaped(Item.of("refinedstorage:quartz_enriched_iron", 8), ["AA ", "AB ", "   "], {
		A: "minecraft:iron_ingot",
		B: "minecraft:glowstone_dust",
	});

	// Illuminite Block uncrafting
	event.shapeless(Item.of("refinedstorage:quartz_enriched_iron", 9), [
		"refinedstorage:quartz_enriched_iron_block",
	]);

	// Aetheric Messenger
	event.shapeless(Item.of("refinedstorage:network_transmitter"), [
		"#refinedstorage:network_transmitter",
		"#forge:dyes/light_blue",
	]);

	// Aetheric Receptor
	event.shapeless(Item.of("refinedstorage:network_receiver"), [
		"#refinedstorage:network_receiver",
		"#forge:dyes/light_blue",
	]);

	// Aetheric Crafting Console / creative wireless crafting grid
	event.shapeless(Item.of("refinedstorageaddons:creative_wireless_crafting_grid"), [
		"refinedstorage:creative_wireless_grid",
		"minecraft:crafting_table",
	]);

	// 1k Storage disk from storage housing
	event.shapeless(Item.of("refinedstorage:1k_storage_disk"), [
		"refinedstorage:1k_storage_part",
		"refinedstorage:storage_housing",
	]);
	// 4k Storage disk from storage housing
	event.shapeless(Item.of("refinedstorage:4k_storage_disk"), [
		"refinedstorage:4k_storage_part",
		"refinedstorage:storage_housing",
	]);

	// 16k Storage disk from storage housing
	event.shapeless(Item.of("refinedstorage:16k_storage_disk"), [
		"refinedstorage:16k_storage_part",
		"refinedstorage:storage_housing",
	]);
	// 64k Storage disk from storage housing
	event.shapeless(Item.of("refinedstorage:64k_storage_disk"), [
		"refinedstorage:64k_storage_part",
		"refinedstorage:storage_housing",
	]);

	// White Controller
	event.shapeless(Item.of("refinedstorage:white_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/white",
	]);

	// Black Controller
	event.shapeless(Item.of("refinedstorage:black_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/black",
	]);

	// Light Gray Controller
	event.shapeless(Item.of("refinedstorage:light_gray_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/light_gray",
	]);

	// Gray Controller
	event.shapeless(Item.of("refinedstorage:gray_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/gray",
	]);

	// Brown Controller
	event.shapeless(Item.of("refinedstorage:brown_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/brown",
	]);

	// Red Controller
	event.shapeless(Item.of("refinedstorage:red_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/red",
	]);

	// Orange Controller
	event.shapeless(Item.of("refinedstorage:orange_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/orange",
	]);

	// Yellow Controller
	event.shapeless(Item.of("refinedstorage:yellow_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/yellow",
	]);

	// Lime Controller
	event.shapeless(Item.of("refinedstorage:lime_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/lime",
	]);

	// Green Controller
	event.shapeless(Item.of("refinedstorage:green_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/green",
	]);

	// Cyan Controller
	event.shapeless(Item.of("refinedstorage:cyan_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/cyan",
	]);

	// Light Blue Controller
	event.shapeless(Item.of("refinedstorage:creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/light_blue",
	]);

	// Blue Controller
	event.shapeless(Item.of("refinedstorage:blue_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/blue",
	]);

	// Purple Controller
	event.shapeless(Item.of("refinedstorage:purple_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/purple",
	]);

	// Magenta Controller
	event.shapeless(Item.of("refinedstorage:magenta_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/magenta",
	]);

	// Pink Controller
	event.shapeless(Item.of("refinedstorage:pink_creative_controller"), [
		"#forge:creative_controller",
		"#forge:dyes/pink",
	]);

	// clean ward bypass
	event.shapeless(Item.of("refinedstorage:security_card"), [
		"refinedstorage:security_card",
		"supplementaries:soap",
	]);
});
