ServerEvents.recipes(event => {
	//ME Drive
	event.shaped(
		Item.of('ae2:drive'),
		[
			'ABA',
			'C C',
			'ADA'
		], {
			A: 'minecraft:iron_ingot',
			B: 'ars_nouveau:repository',
			C: 'hexerei:moon_dust',
			D: 'minecraft:enchanting_table'
		}
	)

	//ME Wireless Terminal
	event.shaped(
		Item.of('ae2:wireless_terminal'),
		[
			'ABC',
			' D '
		], {
			A: 'ae2:terminal',
			B: 'ars_nouveau:enchanters_eye',
			C: 'waystones:warp_dust',
			D: 'ae2:wireless_receiver'
		}
	)

	//ME Wireless Crafting Terminal
	event.shaped(
		Item.of('ae2:wireless_crafting_terminal'),
		[
			'ABC',
			' D '
		], {
			A: 'ae2:crafting_terminal',
			B: 'ars_nouveau:enchanters_eye',
			C: 'waystones:warp_dust',
			D: 'ae2:wireless_receiver'
		}
	)

	
	//1k Cell Components/Primal Resonant Gems
	event.shaped(
		Item.of('ae2:cell_component_1k'),
		[
			' A ',
			'ABA',
			' A '
		], {
			A: 'minecraft:redstone',
			B: 'minecraft:quartz'
		}
	)

	//4k Cell Components/Arcane Resonant Gems
	event.shaped(
		Item.of('ae2:cell_component_4k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'waystones:warp_dust',
			B: 'create:precision_mechanism',
			C: 'ae2:cell_component_1k',
			D: 'minecraft:emerald'
		}
	)

	//16k Cell Components/Divine Resonant Gems
	event.shaped(
		Item.of('ae2:cell_component_16k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'minecraft:glowstone_dust',
			B: 'create:powdered_obsidian',
			C: 'ae2:cell_component_4k',
			D: 'minecraft:diamond'
		}
	)

	//64k Cell Components/Celestial Resonant Gems
	event.shaped(
		Item.of('ae2:cell_component_64k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'mermod:glowing_pearl_modifier',
			B: 'gildednetherite:golden_core',
			C: 'ae2:cell_component_16k',
			D: 'ars_nouveau:source_gem'
		}
	)

	//256k Cell Components/Transcendent Resonant Gems
	event.shaped(
		Item.of('ae2:cell_component_256k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'ae2:sky_dust',
			B: 'minecraft:nether_star',
			C: 'ae2:cell_component_64k',
			D: 'byg:ametrine_gems'
		}
	)

	//Covered Cables
	event.shapeless(
		Item.of('4x ae2:fluix_covered_cable'),
		[
			'pipez:item_pipe',
			'create:andesite_alloy',
			'ae2:fluix_dust'
		]
	)

	//Annihilation Core
	event.shapeless(
		Item.of('2x ae2:annihilation_core'),
		[
			'#forge:gems/quartz', 
			'minecraft:gunpowder', 
			'minecraft:gunpowder', 
			'ae2:fluix_dust'
		]
	)

	//Formation Core
	event.shapeless(
		Item.of('2x ae2:formation_core'),
		[
			'#forge:gems/quartz', 
			'create:experience_nugget', 
			'ae2:fluix_dust'
		]
	)

	//ME Terminal
	event.shapeless(
		Item.of('ae2:terminal'),
		[
			'#ae2:illuminated_panel', 
			'ae2:annihilation_core', 
			'starbunclemania:star_battery', 
			'ae2:formation_core'
		]
	)

	//ME Crafting Terminal
	event.shapeless(
		Item.of('ae2:crafting_terminal'),
		[
			'hexerei:crystal_ball', 
			'minecraft:crafting_table', 
			'ae2:terminal',
		]
	)

	//Item Housing
	event.shaped(
		Item.of('ae2:item_cell_housing'),
		[
			'CCC',
			'CAC',
			'BBB'
		], {
			A: '#forge:terrestrial_crystals',
        	B: 'glassential:glass_redstone',
        	C: '#forge:stone'
		}
	)

	//Fluid Housing
	event.shaped(
		Item.of('ae2:fluid_cell_housing'),
		[
			'CCC',
			'CAC',
			'BBB'
		], {
			A: '#forge:sea_crystals',
        	B: 'glassential:glass_redstone',
        	C: '#forge:stone'
		}
	)

	//Basic Card/Certus Tablet
	event.shaped(
		Item.of('ae2:basic_card'),
		[
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'ae2:charged_certus_quartz_crystal',
			B: 'ars_nouveau:source_gem',
			C: 'minecraft:redstone'
		}
	)

	//Advanced Card/Fluix Tablet
	event.shaped(
		Item.of('ae2:advanced_card'),
		[
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'ae2:fluix_crystal',
			B: 'quark:soul_bead',
			C: 'minecraft:redstone'
		}
	)

	//Equal Distribution Tablet/Card
	event.shapeless(
		Item.of('ae2:equal_distribution_card'),
		[
			'ae2:advanced_card', 
			'create:electron_tube'
		]
	)

	//Resonance Tablet/Energy Card
	event.shapeless(
		Item.of('ae2:energy_card'),
		[
			'ae2:advanced_card', 
			'experienceobelisk:cognitive_crystal'
		]
	)

	//Universal Nexus Aperture/Wireless Universal Terminal
	//TODO - do I want this recipe? should i do it differently?
	event.shapeless(
		Item.of('ae2wtlib:wireless_universal_terminal'),
		[
			'ae2:wireless_terminal', 
			'ae2:wireless_crafting_terminal'
		]
	)

	//Void Tablet/Overflow Destruction Card
	event.shapeless(
		Item.of('ae2:void_card'),
		[
			'ae2:basic_card', 
			'create:powdered_obsidian'
		]
	)

	//Lodestone Core/Creative Energy Cell
	event.shaped(
		Item.of('ae2:creative_energy_cell'),
		[
			'ABA',
			'CEC',
			'ADA'
		],
		{
			A: 'experienceobelisk:cognitive_crystal',
			B: 'minecraft:lodestone',
			C: 'create:polished_rose_quartz',
			D: 'minecraft:gold_block',
			E: 'ars_creo:starbuncle_wheel'
		}
	)

	//Quantum Ring/Planar Relay Tether
	event.shaped(
		Item.of('ae2:quantum_ring'),
		[
			'ABA',
			'CDC',
			'ABA'
		],
		{
			A: 'minecraft:gold_ingot',
			B: 'ars_nouveau:magebloom_fiber',
			C: 'minecraft:obsidian',
			D: 'functionalstorage:ender_drawer'
		}
	)

	//IO Port/Vibrant Communicator
	event.shaped(
		Item.of('ae2:io_port'),
		[
			'AAA',
			'BCB',
			'DED'
		],
		{
			A: '#forge:glass',
			B: 'ae2:drive',
			C: 'ae2:fluix_covered_cable',
			D: 'create:andesite_alloy',
			E: 'create:electron_tube'
		}
	)

	//Cell Workbench/Glyphstone Workbench
	event.shaped(
		Item.of('ae2:cell_workbench'),
		[
			'ABA',
			'CDC',
			'CCC'
		],
		{
			A: 'ars_nouveau:source_gem',
			B: 'spelunkery:flint_hammer_and_chisel',
			C: 'create:andesite_alloy',
			D: 'minecraft:crafting_table',
		}
	)

	//Vibrant Chest/ME Chest
	event.shaped(
		Item.of('ae2:chest'),
		[
			'ABA',
			'C C',
			'DDD'
		],
		{
			A: '#forge:glass',
			B: 'ae2:terminal',
			C: 'ae2:fluix_covered_cable',
			D: 'create:brass_ingot'
		}
	)

	//Ward Bypass/Biometric Card
	event.shaped(
		Item.of('ae2:biometric_card'),
		[
			'ABC',
			'DEC'
		],
		{
			A: 'create:electron_tube',
			B: 'supplementaries:key',
			C: 'ars_nouveau:source_gem',
			D: 'minecraft:redstone',
			E: 'minecraft:paper'
		}
	)

	//Network Tool
	event.shaped(
		Item.of('ae2:network_tool'),
		[
			'AB',
			'CD'
		],
		{
			A: '#ae2:illuminated_panel',
			B: 'minecraft:chest',
			C: '#forge:wrenches',
			D: 'create:electron_tube'
		}
	)

	//Resonance Access Point
	event.shaped(
		Item.of('ae2:wireless_access_point'),
		[
			'A',
			'B',
			'C'
		],
		{
			A: 'ae2:wireless_receiver',
			B: 'create:polished_rose_quartz',
			C: 'ae2:fluix_covered_cable'
		}
	)

	//Guardian Ward/Security Station
	event.shaped(
		Item.of('ae2:security_station'),
		[
			'ABA',
			'CDC',
			'AEA'
		],
		{
			A: 'create:brass_ingot',
			B: 'ae2:chest',
			C: 'ae2:fluix_covered_cable',
			D: 'ae2:cell_component_16k',
			E: 'create:electron_tube'
		}
	)

	//Replace Cable Recipes
	event.replaceInput({
		input: 'ae2:fluix_glass_cable'
	}, // Arg 1: the filter
	'ae2:fluix_glass_cable', // Arg 2: the item to replace
	'ae2:fluix_covered_cable' // Arg 3: the item to replace it with
)

	//Sized Items
	let numbers = [
		'1k',
		'4k',
		'16k',
		'64k',
		'256k'
	];

	for (const number of numbers) {
		event.shapeless(
			Item.of('ae2:portable_item_cell_'+number),
			[
				'#forge:books', 
				'ae2:cell_component_1k', 
				'ae2:item_cell_housing',
				'ae2:chest'
			]
		)

		event.shapeless(
			Item.of('ae2:portable_fluid_cell_'+number),
			[
				'#forge:books', 
				'ae2:cell_component_'+number, 
				'ae2:fluid_cell_housing',
				'ae2:chest'
			]
		)

		event.shaped(
			Item.of('ae2:fluid_storage_cell_'+number),
			[
				' A ',
				'BCB',
				'DED'
			], {
				A: '#forge:sea_crystals',
				B: 'ars_nouveau:magebloom_fiber',
				D: 'ars_nouveau:source_gem',
				E: 'hexerei:blood_bottle',
				C: 'ae2:cell_component_'+number
			}
		)

		event.shaped(
			Item.of('ae2:item_storage_cell_'+number),
			[
				' A ',
				'BCB',
				'DED'
			], {
				A: '#forge:terrestrial_crystals',
				B: 'ars_nouveau:magebloom_fiber',
				D: 'ars_nouveau:source_gem',
				E: 'hexerei:blood_bottle',
				C: 'ae2:cell_component_'+number
			}
		)
	}

})