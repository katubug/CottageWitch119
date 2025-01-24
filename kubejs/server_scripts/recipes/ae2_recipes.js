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
			B: 'ars_nouveau:glyph_ender_inventory',
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
			B: 'ars_nouveau:glyph_ender_inventory',
			C: 'waystones:warp_dust',
			D: 'ae2:wireless_receiver'
		}
	)

	/*
	//1k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_1k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'minecraft:redstone',
			B: 'thaumon:mutagen',
			C: '#ae2:all_certus_quartz',
			D: 'malum:intricate_assembly'
		}
	)

	//4k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_4k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'waystones:warp_dust',
			B: 'malum:spectral_lens',
			C: 'ae2:cell_component_1k',
			D: 'malum:intricate_assembly'
		}
	)

	//16k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_16k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'minecraft:glowstone_dust',
			B: 'forbidden_arcanus:mundabitur_dust',
			C: 'ae2:cell_component_4k',
			D: 'malum:intricate_assembly'
		}
	)

	//64k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_64k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'mermod:glowing_pearl_modifier',
			B: 'netherstar_shards:netherstarshard',
			C: 'ae2:cell_component_16k',
			D: 'malum:intricate_assembly'
		}
	)

	//256k Cell Components
	event.shaped(
		Item.of('ae2:cell_component_256k'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'ae2:sky_dust',
			B: 'forbidden_arcanus:dark_nether_star',
			C: 'ae2:cell_component_64k',
			D: 'malum:intricate_assembly'
		}
	)
	*/

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
			D: 'create:brass_casing',
			E: 'ars_creo:starbuncle_wheel'
		}
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