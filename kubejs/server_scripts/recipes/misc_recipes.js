ServerEvents.recipes(event => {
	//Akashic Tome
	event.shapeless(
		Item.of('akashictome:tome', '{"akashictome:data":{alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},babyfat:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"babyfat:the_book_of_baby_fat"}},byg:{Count:1b,id:"byg:biomepedia"},caupona:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"caupona:book"}},create_central_kitchen:{Count:1b,ForgeCaps:{Parent:{}},id:"create_central_kitchen:cooking_guide"},deeperdarker:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"deeperdarker:wanderers_notebook"}},ftbquests:{Count:1b,id:"ftbquests:book"},lexicon:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"lexicon:lexicon"}},mythicmounts:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"mythicmounts:mythical_mounts"}},sculktransporting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sculktransporting:guide"}},solsweetpotato:{Count:1b,id:"solsweetpotato:food_book"}}}'),
		[
			'minecraft:book',
			'minecraft:stick'
		]
	)

	//Time In A bottle
	event.shaped(
		Item.of('tiab:time_in_a_bottle'),
		[
			'AAA',
			'BCB',
			'DED'
		], {
			A: 'minecraft:gold_ingot',
			B: 'minecraft:diamond',
			C: 'minecraft:clock',
			D: 'minecraft:lapis_lazuli',
			E: 'quark:bottled_cloud'
		}
	)

	//Ars Nouveau Novice Spellbook
	event.shaped(
		Item.of('ars_nouveau:novice_spell_book'),
		[
			' A ',
			'ABA',
			' A '
		], {
			A: 'minecraft:gold_ingot',
			B: 'ars_nouveau:worn_notebook'
		}
	)

	//Critters and Companions Pearl Necklaces
	//Necklace Tier 2
	event.shapeless(
		Item.of('crittersandcompanions:pearl_necklace_2'),
		[
			'crittersandcompanions:pearl_necklace_1',
			'minecraft:ender_pearl'
		]
	)

	//Necklace Tier 3
	event.shapeless(
		Item.of('crittersandcompanions:pearl_necklace_3'),
		[
			'crittersandcompanions:pearl_necklace_2',
			'mermod:glowing_pearl_modifier'
		]
	)

	//Mermod Moon Rock Uses Moon Dust
	event.shapeless(
		Item.of('mermod:moon_rock_modifier'),
		[
			'#forge:cobblestone',
			'hexerei:moon_dust',
			'minecraft:black_dye'
		]
	)

	//Nature's Compass
	event.shaped(
		Item.of('naturescompass:naturescompass'),
		[
			'ABA',
			'BCB',
			'ABA'
		], {
			A: '#minecraft:saplings',
			B: '#minecraft:logs',
			C: 'hexerei:dowsing_rod'
		}
	)

	//End Remastered Eyes to Pearls
	event.shapeless(
		Item.of('minecraft:ender_pearl', 4),
		[
			'#forge:eyes'
		]
	)

	//Selenite Glass Purification
	event.shaped(
		Item.of('minecraft:glass', 8),
		[
			'AAA',
			'ABA',
			'AAA'
		], {
			A: '#forge:stained_glass',
			B: 'hexerei:selenite_shard'
		}
	)

	//Mandrake Totem of Undying
	event.shaped(
		Item.of('minecraft:totem_of_undying'),
		[
			'ABA',
			'CDC',
			'AEA'
		], {
			A: 'twilightforest:red_thread',
			B: 'endrem:evil_eye',
			C: 'hexerei:moon_dust',
			D: 'hexerei:mandrake_root',
			E: 'twilightforest:charm_of_life_1'
		}
	)

	//Ring of Ender Chest
	event.shaped(
		Item.of('ring_of_enderchest:ring_of_enderchest'),
		[
			'ABA',
			'ACA',
			'ABA'
		], {
			A: 'minecraft:iron_ingot',
			B: 'minecraft:ender_pearl',
			C: 'minecraft:ender_chest'
		}
	)

	// Pipez Item Pipe
	event.shaped(
		Item.of('pipez:item_pipe', 16),
		[
			'AAA',
			'BBB',
			'AAA'
		], {
			A: 'minecraft:copper_ingot',
			B: 'minecraft:redstone'
		}
	)

	// Tarot Deck
	event.shaped(
		Item.of('tarotcards:tarot_deck'),
		[
			'ABA',
			'ACA',
			'ADA'
		], {
			A: 'create:golden_sheet',
			B: 'minecraft:dragon_egg',
			C: 'minecraft:nether_star',
			D: 'tarotcards:justice'
		}
	)

	// Dried Sage Bundle
	event.shaped(
		Item.of('hexerei:dried_sage_bundle'),
		[
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'hexerei:dried_sage',
			B: 'minecraft:string'
		}
	)

	// Mermod Sea Crystal
	event.shapeless(
		Item.of('mermod:sea_crystal', 4),
		[
			'endrem:guardian_eye',
			'minecraft:heart_of_the_sea'
		]
	)

	// Cluttered Sewing Table Clutter Recipe
	event.shaped(
		Item.of('luphieclutteredmod:luphie_sewing_table_clutter'),
		[
			'   ',
			'ABC',
			'   '
		], {
			A: '#forge:string',
			B: '#minecraft:wool_carpets',
			C: '#minecraft:wool'
		}
	)

	// Blackstone Blast Furnace
	event.shaped(
		Item.of('nethersdelight:blackstone_blast_furnace'),
		[
			'AAA',
			'ABA',
			'CCC'
		], {
			A: 'minecraft:iron_ingot',
			B: '#forge:blackstone_furnaces',
			C: 'minecraft:polished_blackstone'
		}
	)

	// Soul Elytra
	event.shaped(
		Item.of('deeperdarker:soul_elytra'),
		[
			'ABA',
			'CDC',
			'EFE'
		], {
			A: 'deeperdarker:sculk_bone',
			B: 'alexsmobs:skreecher_soul',
			C: 'deeperdarker:soul_dust',
			D: 'minecraft:elytra',
			E: 'quark:soul_bead',
			F: 'deeperdarker:soul_crystal'
		}
	)

	// Coal to Compacting Drawers
	event.shapeless(
		Item.of('spelunkery:coal_lump', 9),
		[
			'minecraft:coal'
		]
	)
	event.shapeless(
		Item.of('minecraft:coal'),
		[
			'spelunkery:coal_lump',
			'spelunkery:coal_lump',
			'spelunkery:coal_lump',
			'spelunkery:coal_lump',
			'spelunkery:coal_lump',
			'spelunkery:coal_lump',
			'spelunkery:coal_lump',
			'spelunkery:coal_lump',
			'spelunkery:coal_lump'
		]
	)
	event.shapeless(
		Item.of('minecraft:coal', 9),
		[
			'minecraft:coal_block'
		]
	)

	//compress and uncompress eggs
	event.shapeless(
		Item.of('prefab:item_carton_of_eggs'),
		[
			'minecraft:egg',
			'minecraft:egg',
			'minecraft:egg',
			'minecraft:egg',
			'minecraft:egg',
			'minecraft:egg',
			'minecraft:egg',
			'minecraft:egg',
			'minecraft:egg'
		]
	)

	event.shapeless(
		Item.of('minecraft:egg', 9),
		[
			'prefab:item_carton_of_eggs'
		]
	)

	// Golden Core
	event.shaped(
		Item.of('gildednetherite:golden_core'),
		[
			'A A',
			'ABA',
			'A A'
		], {
			A: 'minecraft:gold_ingot',
			B: 'create:precision_mechanism'
		}
	)

	// Portable Jukebox
	event.shapeless(
		Item.of('portablejukebox:portable_jukebox'),
		[
			'minecraft:jukebox',
			'portablejukebox:portable_note_block'
		]
	)

	// hexerei stone window
	event.shapeless(
		Item.of('hexerei:stone_window', 2),
		[
			'#forge:stone',
			'#forge:glass'
		]
	)

	// hexerei stone window pane
	event.shaped(
		Item.of('hexerei:stone_window_pane', 16),
		[
			'AAA',
			'AAA'
		], {
			A: 'hexerei:stone_window'
		}
	)

	/// casting crystal
	event.shaped(
		Item.of('casting_crystals:casting_crystal'),
		[
			'ADA',
			'DBD',
			'CDA'
		], {
			A: 'minecraft:string',
			B: 'ars_nouveau:source_gem',
			C: 'ars_nouveau:manipulation_essence',
			D: 'minecraft:gold_ingot'
		})

	//Mythic Mounts Book
	event.shapeless(
		Item.of('patchouli:guide_book', '{"patchouli:book":"mythicmounts:mythical_mounts"}'),
		[
			'minecraft:book',
			'minecraft:saddle'
		]
	)

	// Palette
	event.shaped(
		Item.of('xercapaint:item_palette'),
		[
			'AA ',
			'AA '
		], {
			A: '#minecraft:wooden_slabs'
		}
	)

	//Cluttered's Shelves
	event.shaped(
		Item.of('luphieclutteredmod:small_shelf'),
		[
			'AAA',
			'A A'
		], {
			A: 'minecraft:oak_slab'
		}
	)

	// Aquaculture Fishies
	let aquaFish = [
		'aquaculture:arapaima',
		'aquaculture:atlantic_cod',
		'aquaculture:atlantic_halibut',
		'aquaculture:atlantic_herring',
		'aquaculture:bayad',
		'aquaculture:blackfish',
		'aquaculture:bluegill',
		'aquaculture:boulti',
		'aquaculture:brown_shrooma',
		'aquaculture:brown_trout',
		'aquaculture:capitaine',
		'aquaculture:carp',
		'aquaculture:catfish',
		'aquaculture:gar',
		'aquaculture:jellyfish',
		'aquaculture:minnow',
		'aquaculture:muskellunge',
		'aquaculture:pacific_halibut',
		'aquaculture:perch',
		'aquaculture:pink_salmon',
		'aquaculture:piranha',
		'aquaculture:pollock',
		'aquaculture:rainbow_trout',
		'aquaculture:red_grouper',
		'aquaculture:red_shrooma',
		'aquaculture:smallmouth_bass',
		'aquaculture:synodontis',
		'aquaculture:tambaqui',
		'aquaculture:tuna'
	];

	for (const fish of aquaFish) {
		event.shapeless(
			Item.of(fish + '_bucket'),
			[
				fish, 'minecraft:water_bucket'
			]
		).replaceIngredient('minecraft:water_bucket', Item.empty)
	}

	// New EXP Pump Upgrade 
	event.shaped(
		Item.of('sophisticatedbackpacks:xp_pump_upgrade'),
		[
			'BCB',
			'DAD',
			'BCB'
		], {
			A: 'sophisticatedbackpacks:upgrade_base',
			B: 'minecraft:redstone',
			C: 'minecraft:ender_eye',
			D: 'minecraft:experience_bottle'
		}
	)

	//Dragon Tooth Knife Crafting
	event.shaped(
		Item.of('ends_delight:dragon_tooth_knife'),
		[
			' A ',
			' B ',
			'   '
		], {

			A: 'ends_delight:dragon_tooth',
			B: 'ends_delight:half_dragon_egg_shell',

		}
	)

	// Sculk Bones to Bone Meal
	event.shapeless(
		Item.of('minecraft:bone_meal'),
		[

			'deeperdarker:sculk_bone'
		]
	)

	// Sack with Canvas
	event.shaped(
		Item.of('supplementaries:sack'),
		[
			' B ',
			'A A',
			' A '
		], {

			A: 'farmersdelight:canvas',
			B: 'minecraft:string'

		}
	)

	// Painting Canvas for FD Canvas
	event.shaped(
		Item.of('xercapaint:item_canvas'),
		[
			' A ',
			'ABA',
			' A '
		], {

			A: 'minecraft:stick',
			B: 'farmersdelight:canvas'

		}
	)

	//Zinc Block Smelting
	event.smelting('create:zinc_block', 'create:raw_zinc_block')

	//smithing
	event.smithing('experienceobelisk:precision_dispeller', 'minecraft:grindstone', 'experienceobelisk:cognitive_crystal_block')

	//Stonecutter recipes for Handcrafted Boards
	event.stonecutting('4x handcrafted:acacia_board', 'minecraft:acacia_planks')
	event.stonecutting('4x handcrafted:birch_board', 'minecraft:birch_planks')
	event.stonecutting('4x handcrafted:dark_oak_board', 'minecraft:dark_oak_planks')
	event.stonecutting('4x handcrafted:jungle_board', 'minecraft:jungle_planks')
	event.stonecutting('4x handcrafted:mangrove_board', 'minecraft:mangrove_planks')
	event.stonecutting('4x handcrafted:oak_board', 'minecraft:oak_planks')
	event.stonecutting('4x handcrafted:spruce_board', 'minecraft:spruce_planks')
	event.stonecutting('4x handcrafted:crimson_board', 'minecraft:crimson_planks')
	event.stonecutting('4x handcrafted:warped_board', 'minecraft:warped_planks')


	// peat and lush dirt recipes
	event.shapeless(
		Item.of('byg:peat'), 
		['ecologics:surface_moss', 'minecraft:dirt']
	)

	event.shapeless(
		Item.of('byg:lush_dirt'), 
		['minecraft:bone_meal', 'minecraft:dirt']
	)

	// allowing blooming azalea leaves to do the color thing
	event.shaped(
		Item.of('colorfulazaleas:orange_azalea_leaves'), 
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: 'colorfulazaleas:orange_blooming_azalea_leaves',
			B: 'minecraft:bone_meal'
		}
	)
	event.shaped(
		Item.of('colorfulazaleas:yellow_azalea_leaves'), 
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: 'colorfulazaleas:yellow_blooming_azalea_leaves',
			B: 'minecraft:bone_meal'
		}
	)
	event.shaped(
		Item.of('colorfulazaleas:red_azalea_leaves'), 
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: 'colorfulazaleas:red_blooming_azalea_leaves',
			B: 'minecraft:bone_meal'
		}
	)
	event.shaped(
		Item.of('colorfulazaleas:blue_azalea_leaves'), 
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: 'colorfulazaleas:blue_blooming_azalea_leaves',
			B: 'minecraft:bone_meal'
		}
	)
	event.shaped(
		Item.of('colorfulazaleas:pink_azalea_leaves'), 
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: 'colorfulazaleas:pink_blooming_azalea_leaves',
			B: 'minecraft:bone_meal'
		}
	)
	event.shaped(
		Item.of('colorfulazaleas:purple_azalea_leaves'), 
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: 'colorfulazaleas:purple_blooming_azalea_leaves',
			B: 'minecraft:bone_meal'
		}
	)
	event.shaped(
		Item.of('colorfulazaleas:white_azalea_leaves'), 
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: 'colorfulazaleas:white_blooming_azalea_leaves',
			B: 'minecraft:bone_meal'
		}
	)

	// misc stonecutting
	event.stonecutting('ars_scalaes:smooth_sourcestone_wall', 'ars_nouveau:smooth_sourcestone')
	event.stonecutting('ars_scalaes:smooth_sourcestone_stairs', 'ars_nouveau:smooth_sourcestone')
	event.stonecutting('block_variants:cracked_stone_brick_stairs', 'minecraft:cracked_stone_bricks')
	event.stonecutting('block_variants:cracked_stone_brick_wall', 'minecraft:cracked_stone_bricks')

})