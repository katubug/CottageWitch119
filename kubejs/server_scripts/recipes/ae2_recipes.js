ServerEvents.recipes((event) => {
	//ME Drive
	event.shaped(
		Item.of("ae2:drive"),
		[
			"ABA", //
			"C C",
			"ADA",
		],
		{
			A: "minecraft:gold_ingot",
			B: "ars_nouveau:repository",
			C: "ars_instrumentum:runic_storage_stone",
			D: "minecraft:enchanting_table",
		}
	);

	//Memory Card
	event.shaped(
		Item.of("ae2:memory_card"),
		[
			"ABA", //
			"ACA",
		],
		{
			A: "minecraft:copper_ingot",
			B: "create:polished_rose_quartz",
			C: "minecraft:redstone",
		}
	);

	//Wireless Booster
	event.shaped(
		Item.of("ae2:wireless_booster"),
		[
			"BCD", //
			"AAA",
		],
		{
			A: "create:brass_ingot",
			B: "ae2:fluix_dust",
			C: "#ae2:all_certus_quartz",
			D: "create:polished_rose_quartz",
		}
	);

	//ME Wireless Crafting Terminal
	event.shaped(
		Item.of("ae2:wireless_crafting_terminal", "{internalCurrentPower:1600000.0d}"),
		[
			"ABC", //
			" D ",
		],
		{
			A: "ae2:crafting_terminal",
			B: "ars_nouveau:enchanters_eye",
			C: "waystones:warp_dust",
			D: "ae2:wireless_receiver",
		}
	);

	//1k Cell Components/Primal Resonant Gems
	event.shaped(
		Item.of("ae2:cell_component_1k"),
		[
			" A ", //
			"ABA",
			" A ",
		],
		{
			A: "minecraft:redstone",
			B: "minecraft:quartz",
		}
	);

	//4k Cell Components/Arcane Resonant Gems
	event.shaped(
		Item.of("ae2:cell_component_4k"),
		[
			"ABA", //
			"CDC",
			"ACA",
		],
		{
			A: "minecraft:glowstone_dust",
			B: "minecraft:copper_ingot",
			C: "ae2:cell_component_1k",
			D: "minecraft:emerald",
		}
	);

	//16k Cell Components/Divine Resonant Gems
	event.shaped(
		Item.of("ae2:cell_component_16k"),
		[
			"ABA", //
			"CDC",
			"ACA",
		],
		{
			A: "waystones:warp_dust",
			B: "minecraft:iron_ingot",
			C: "ae2:cell_component_4k",
			D: "minecraft:diamond",
		}
	);

	//64k Cell Components/Celestial Resonant Gems
	event.shaped(
		Item.of("ae2:cell_component_64k"),
		[
			"ABA", //
			"CDC",
			"ACA",
		],
		{
			A: "hexerei:moon_dust",
			B: "minecraft:gold_ingot",
			C: "ae2:cell_component_16k",
			D: "ars_nouveau:source_gem",
		}
	);

	//256k Cell Components/Transcendent Resonant Gems
	event.shaped(
		Item.of("ae2:cell_component_256k"),
		[
			"ABA", //
			"CDC",
			"ACA",
		],
		{
			A: "ae2:sky_dust",
			B: "minecraft:nether_star",
			C: "ae2:cell_component_64k",
			D: "byg:ametrine_gems",
		}
	);

	//Covered Cables
	event.shapeless(
		Item.of("4x ae2:fluix_covered_cable"), //
		[
			"pipez:item_pipe", //
			"create:andesite_alloy",
			"ae2:fluix_dust",
		]
	);

	//Annihilation Core
	event.shapeless(
		Item.of("2x ae2:annihilation_core"), //
		[
			"#forge:gems/quartz", //
			"minecraft:gunpowder",
			"minecraft:gunpowder",
			"ae2:fluix_dust",
		]
	);

	//Formation Core
	event.shapeless(
		Item.of("2x ae2:formation_core"), //
		[
			"#forge:gems/quartz", //
			"create:experience_nugget",
			"ae2:fluix_dust",
		]
	);

	//ME Terminal
	event.shapeless(
		Item.of("ae2:terminal"), //
		[
			"#ae2:illuminated_panel",
			"ae2:annihilation_core",
			"starbunclemania:star_battery",
			"ae2:formation_core",
		]
	);

	//ME Crafting Terminal
	event.shapeless(
		Item.of("ae2:crafting_terminal"), //
		[
			"hexerei:crystal_ball", //
			"minecraft:crafting_table",
			"ae2:terminal",
		]
	);

	//Item Housing/Gilded Gem Setting
	event.shaped(
		Item.of("ae2:item_cell_housing"),
		[
			" A ", //
			"BCB",
			" B ",
		],
		{
			A: "#forge:terrestrial_crystals",
			B: "minecraft:gold_ingot",
			C: "ars_nouveau:source_gem",
		}
	);

	//Fluid Housing/Ferrous Gem Setting
	event.shaped(
		Item.of("ae2:fluid_cell_housing"),
		[
			" A ", //
			"BCB",
			" B ",
		],
		{
			A: "#forge:sea_crystals",
			B: "minecraft:iron_ingot",
			C: "ars_nouveau:source_gem",
		}
	);

	//Basic Card/Certus Tablet
	event.shaped(
		Item.of("ae2:basic_card"),
		[
			"ABA", //
			"BCB",
			"ABA",
		],
		{
			A: "ae2:charged_certus_quartz_crystal",
			B: "ars_nouveau:source_gem",
			C: "minecraft:redstone",
		}
	);

	//Advanced Card/Fluix Tablet
	event.shaped(
		Item.of("ae2:advanced_card"),
		[
			"ABA", //
			"BCB",
			"ABA",
		],
		{
			A: "ae2:fluix_crystal",
			B: "quark:soul_bead",
			C: "minecraft:redstone",
		}
	);

	//Equal Distribution Tablet/Card
	event.shapeless(
		Item.of("ae2:equal_distribution_card"), //
		[
			"ae2:advanced_card", //
			"create:electron_tube",
		]
	);

	//Resonance Tablet/Energy Card
	event.shapeless(
		Item.of("ae2:energy_card"), //
		[
			"ae2:advanced_card", //
			"experienceobelisk:cognitive_crystal",
		]
	);

	//Universal Nexus Aperture/Wireless Universal Terminal
	//Commented this one out so we can use it in the future if we add the autocrafting
	///event.shapeless(
	///	Item.of('ae2wtlib:wireless_universal_terminal'),
	///	[
	//		'ae2:wireless_terminal',
	//		'ae2:wireless_crafting_terminal'
	//	]
	//)

	//Void Tablet/Overflow Destruction Card
	event.shapeless(
		Item.of("ae2:void_card"), //
		[
			"ae2:basic_card", //
			"create:powdered_obsidian",
		]
	);

	//Lodestone Core/Creative Energy Cell
	event.shaped(
		Item.of("ae2:creative_energy_cell"),
		[
			"ABA", //
			"CEC",
			"ADA",
		],
		{
			A: "ae2:fluix_crystal",
			B: "minecraft:lodestone",
			C: "ae2:charged_certus_quartz_crystal",
			D: "minecraft:gold_block",
			E: "ars_creo:starbuncle_wheel",
		}
	);

	//Quantum Ring/Aetheric Ring
	event.shaped(
		Item.of("ae2:quantum_ring"),
		[
			"ABA", //
			"CDC",
			"ABA",
		],
		{
			A: "minecraft:gold_ingot",
			B: "ars_nouveau:magebloom_fiber",
			C: "minecraft:obsidian",
			D: "functionalstorage:ender_drawer",
		}
	);

	//IO Port/Vibrant Communicator
	event.shaped(
		Item.of("ae2:io_port"),
		[
			"AAA", //
			"BCB",
			"DED",
		],
		{
			A: "#forge:glass",
			B: "ae2:drive",
			C: "ae2:fluix_covered_cable",
			D: "create:andesite_alloy",
			E: "create:electron_tube",
		}
	);

	//Cell Workbench/Glyphstone Workbench
	event.shaped(
		Item.of("ae2:cell_workbench"),
		[
			"ABA", //
			"CDC",
			"CCC",
		],
		{
			A: "ars_nouveau:source_gem",
			B: "spelunkery:flint_hammer_and_chisel",
			C: "create:andesite_alloy",
			D: "minecraft:crafting_table",
		}
	);

	//Vibrant Chest/ME Chest
	event.shaped(
		Item.of("ae2:chest"),
		[
			"ABA", //
			"C C",
			"DDD",
		],
		{
			A: "#forge:glass",
			B: "ae2:terminal",
			C: "ae2:fluix_covered_cable",
			D: "create:brass_ingot",
		}
	);

	//Ward Bypass/Biometric Card
	event.shaped(
		Item.of("ae2:biometric_card"),
		[
			"ABC", //
			"DEC",
		],
		{
			A: "create:electron_tube",
			B: "supplementaries:key",
			C: "ars_nouveau:source_gem",
			D: "minecraft:redstone",
			E: "minecraft:paper",
		}
	);

	//Network Tool
	event.shaped(
		Item.of("ae2:network_tool"),
		[
			"AB", //
			"CD",
		],
		{
			A: "#ae2:illuminated_panel",
			B: "minecraft:chest",
			C: "#forge:wrenches",
			D: "create:electron_tube",
		}
	);

	//Aetheric Beacon
	event.shaped(
		Item.of("ae2:wireless_access_point"),
		[
			"A", //
			"B",
			"C",
		],
		{
			A: "ae2:wireless_receiver",
			B: "create:polished_rose_quartz",
			C: "ae2:fluix_covered_cable",
		}
	);

	//Guardian Ward/Security Station
	event.shaped(
		Item.of("ae2:security_station"),
		[
			"ABA", //
			"CDC",
			"AEA",
		],
		{
			A: "create:brass_ingot",
			B: "ae2:chest",
			C: "ae2:fluix_covered_cable",
			D: "ae2:cell_component_16k",
			E: "create:electron_tube",
		}
	);

	//Replace Cable Recipes
	event.replaceInput(
		{
			input: "ae2:fluix_glass_cable",
		}, // Arg 1: the filter
		"ae2:fluix_glass_cable", // Arg 2: the item to replace
		"ae2:fluix_covered_cable" // Arg 3: the item to replace it with
	);

	//Sized Items
	let numbers = [
		"1k", //
		"4k",
		"16k",
		"64k",
		"256k",
	];

	for (const number of numbers) {
		event.shapeless(
			Item.of("ae2:portable_item_cell_" + number), //
			[
				"#forge:books", //
				"ae2:cell_component_" + number,
				"ae2:item_cell_housing",
				"ae2:chest",
			]
		);

		event.shapeless(
			Item.of("ae2:portable_fluid_cell_" + number), //
			[
				"#forge:books",
				"ae2:cell_component_" + number,
				"ae2:fluid_cell_housing",
				"ae2:chest",
			]
		);

		//Fluid Storage Cells/Fluid Glyphstones
		event.shaped(
			Item.of("ae2:fluid_storage_cell_" + number),
			[
				" A ", //
				"BCB",
				" B ",
			],
			{
				A: "#forge:sea_crystals",
				B: "minecraft:iron_ingot",
				C: "ae2:cell_component_" + number,
			}
		);

		event.shapeless(
			Item.of("ae2:fluid_storage_cell_" + number), //
			[
				"ae2:fluid_cell_housing", //
				"ae2:cell_component_" + number,
			]
		);

		//Item Storage Cells/Item Glyphstones
		event.shaped(
			Item.of("ae2:item_storage_cell_" + number),
			[
				" A ", //
				"BCB",
				" B ",
			],
			{
				A: "#forge:terrestrial_crystals",
				B: "minecraft:gold_ingot",
				C: "ae2:cell_component_" + number,
			}
		);

		event.shapeless(
			Item.of("ae2:item_storage_cell_" + number), //
			[
				"ae2:item_cell_housing", //
				"ae2:cell_component_" + number,
			]
		);
	}

	//Aetheric Core
	event
		.custom({
			type: "extendedmushrooms:fairy_ring_recipe",
			ingredients: [
				{ item: "minecraft:ender_eye" },
				{ item: "ae2:charged_certus_quartz_crystal" },
				{ item: "ars_nouveau:ritual_binding" },
				{ item: "spelunkery:rough_lazurite" },
			],
			recipeTime: 300,
			result: { item: "ae2:singularity" },
		})
		.id("kjs_aetheric_core");

	//Planar Bridge Card
	event.shaped(
		Item.of("ae2wtlib:quantum_bridge_card"),
		[
			" A ", //
			"BCD",
			" E ",
		],
		{
			A: "twilightforest:maze_map_focus",
			B: "deeperdarker:heart_of_the_deep",
			C: "ae2:wireless_receiver",
			D: "minecraft:dragon_egg",
			E: "minecraft:netherite_ingot",
		}
	);

	//Nexus Level Emitter
	event.shapeless(Item.of("ae2:level_emitter"), [
		"minecraft:redstone_torch",
		"create:electron_tube",
	]);

	//Sky Stone
	event
		.shaped(
			Item.of("8x ae2:sky_stone_block"),
			[
				"AAA", //
				"ABA",
				"AAA",
			],
			{
				A: "minecraft:stone",
				B: "quark:bottled_cloud",
			}
		)
		.replaceIngredient("quark:bottled_cloud", "minecraft:glass_bottle");

	//Nexus Transference Focus
	event.shaped(
		Item.of("2x ae2:me_p2p_tunnel"),
		[
			" A ", //
			"ABA",
			"CCC",
		],
		{
			A: "minecraft:iron_ingot",
			B: "create:electron_tube",
			C: "ae2:fluix_crystal",
		}
	);

	//Fluix Axe
	event.smithing(
		"ae2:fluix_axe", //
		"minecraft:iron_axe",
		"ae2:fluix_block"
	);

	//Fluix Hoe
	event.smithing(
		"ae2:fluix_hoe", //
		"minecraft:iron_hoe",
		"ae2:fluix_block"
	);

	//Fluix Shovel
	event.smithing(
		"ae2:fluix_shovel", //
		"minecraft:iron_shovel",
		"ae2:fluix_block"
	);

	//Fluix Pickaxe
	event.smithing(
		"ae2:fluix_pickaxe", //
		"minecraft:iron_pickaxe",
		"ae2:fluix_block"
	);

	//Fluix Sword
	event.smithing(
		"ae2:fluix_sword", //
		"minecraft:iron_sword",
		"ae2:fluix_block"
	);

	//Memory Card
	event.shaped(
		Item.of("ae2:memory_card"),
		[
			"ABA", //
			"ACA",
		],
		{
			A: "minecraft:copper_ingot",
			B: "create:polished_rose_quartz",
			C: "minecraft:redstone",
		}
	);

	//Cable Anchor
	event
		.shapeless(
			Item.of("4x ae2:cable_anchor"), //
			[
				"#ae2:metal_ingots", //
				"#forge:tools/knives",
			]
		)
		.keepIngredient("#forge:tools/knives");

	// Certus Quartz Dust (Crushing)
	event.recipes.create
		.crushing(
			[
				"ae2:certus_quartz_dust", //
				Item.of("ae2:certus_quartz_dust").withChance(0.1),
			],
			"#ae2:all_certus_quartz"
		)
		.id("kjs_certus_quartz_dust_crush");

	// Certus Quartz Dust (Milling)
	event.recipes.create
		.milling(
			[
				"ae2:certus_quartz_dust", //
				Item.of("ae2:certus_quartz_dust").withChance(0.1),
			],
			"#ae2:all_certus_quartz"
		)
		.id("kjs_certus_quartz_dust_mill");

	// Fluix Dust (Crushing)
	event.recipes.create
		.crushing(
			[
				"ae2:fluix_dust", //
				Item.of("ae2:fluix_dust").withChance(0.1),
			],
			"ae2:fluix_crystal"
		)
		.id("kjs_fluix_dust_crush");

	// Fluix Dust (Milling)
	event.recipes.create
		.milling(
			[
				"ae2:fluix_dust", //
				Item.of("ae2:fluix_dust").withChance(0.1),
			],
			"ae2:fluix_crystal"
		)
		.id("kjs_fluix_dust_mill");
});
