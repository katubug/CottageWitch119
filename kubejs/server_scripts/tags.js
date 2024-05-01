ServerEvents.tags('item', event => {

    // Dirt for Compost Recipe
    event.add('forge:dirt',
     'minecraft:dirt', 
     'minecraft:coarse_dirt',
    'minecraft:rooted_dirt',
    'minecraft:podzol', 
    'byg:lush_dirt', 
    'twilightforest:uberous_soil')

    // Dirt for Compost Recipe
 event.add('forge:compressable_dirt', 
 'minecraft:dirt', 
 'minecraft:coarse_dirt',
 'minecraft:rooted_dirt',
 'minecraft:podzol', 
 'byg:lush_dirt', 
 'twilightforest:uberous_soil')

    // Organic materials for Compost Recipe
    event.add('forge:compost',
    'hexerei:mugwort_flowers',
    'hexerei:mugwort_leaves',
    'hexerei:yellow_dock_flowers',
    'hexerei:yellow_dock_leaves',
    'hexerei:belladonna_flowers',
    'hexerei:belladonna_berries',
    'hexerei:mandrake_root',
    'hexerei:mandrake_flowers',
    'hexerei:dried_sage',
    'hexerei:dried_belladonna_flowers',
    'hexerei:dried_mandrake_flowers',
    'hexerei:dried_mugwort_flowers',
    'hexerei:dried_mugwort_leaves',
    'hexerei:dried_yellow_dock_flowers',
    'hexerei:dried_yellow_dock_leaves',
    'farmersdelight:tree_bark',
    'minecraft:rotten_flesh')

    // Rope Tags
    event.add('supplementaries:ropes', 'farmersdelight:rope', 'beautify:rope')

    // Eyes tags
    event.add('forge:eyes', 
    'endrem:evil_eye',
    'endrem:cursed_eye',
    'endrem:rogue_eye',
    'endrem:old_eye',
    'endrem:nether_eye',
    'endrem:lost_eye',
    'endrem:corrupted_eye',
    'endrem:cold_eye',
    'endrem:black_eye',
    'endrem:guardian_eye',
    'endrem:magical_eye',
    'endrem:wither_eye',
    'endrem:witch_eye',
    'endrem:undead_eye',
    'endrem:exotic_eye'
    )

    // Seeds Tags
    event.add('forge:seeds',
    'farmersrespite:tea_seeds',
    'culturaldelights:eggplant_seeds',
    'culturaldelights:corn_kernels',
    'culturaldelights:cucumber_seeds'
    )

    // Waystone Tags
    event.add('forge:waystones',
    'waystones:waystone',
    'waystones:mossy_waystone',
    'waystones:sandy_waystone'
    )

    // Wrench Tags
    event.add('forge:wrenches', 'supplementaries:wrench')

    // Azalea Logs Tags
    event.add('forge:azalea_logs',
    'ecologics:flowering_azalea_log',
    'ecologics:azalea_log'
    )

    // Azalea Wood Tags
    event.add('forge:azalea_wood',
    'ecologics:flowering_azalea_wood',
    'ecologics:azalea_wood'
    )

    // Azalea Planks Tags
    event.add('forge:azalea_planks',
    'ecologics:flowering_azalea_planks',
    'ecologics:azalea_planks'
    )

    // Corn Dough Tags
    event.add('minecraft:dough',
    'culturaldelights:corn_dough'
    )
    event.add('forge:dough',
    'culturaldelights:corn_dough'
    )


    // Cheese Tags for Crafting
    event.add(
        'forge:cheese',
        'brewinandchewin:scarlet_cheese_wedge',
        'brewinandchewin:flaxen_cheese_wedge'
    )

    // Bowl Tagging
    event.add('forge:bowls',
    'minecraft:bowl',
    'ecologics:coconut_husk'
    )


    //Vegetables
    event.add('forge:vegetables',
        'culturaldelights:cut_cucumber',
        'culturaldelights:cucumber',
        'culturaldelights:cut_avocado',
        'culturaldelights:avocado',
        'culturaldelights:eggplant',
        'culturaldelights:cut_eggplant',
        'culturaldelights:white_eggplant',
        'culturaldelights:corn_cob',
        'delightful:cactus_flesh',
        'farmersdelight:pumpkin_slice'
    )

    //Fruits
    event.add('forge:fruits',
        'ars_nouveau:frostaya_pod',
        'ecologics:coconut_slice',
        'ends_delight:chorus_succulent',
        'ends_delight:chorus_fruit_grain',
        'ends_delight:ender_pearl_grain',
        'ars_nouveau:mendosteen_pod',
        'ars_nouveau:bastion_pod',
        'ars_nouveau:bombegranate_pod'
    )

    //Seafood
    event.add('forge:seafood',
        'quark:crab_leg',
        'quark:cooked_crab_leg',
        'ecologics:crab_meat',
        'culturaldelights:squid',
        'culturaldelights:raw_calamari',
        'culturaldelights:glow_squid',
        'ends_delight:shulker_meat_slice',
        'ends_delight:shulker_meat'
    )

    //Meats
    event.add('forge:meats',
        'farmersdelight:bacon',
        'farmersdelight:mutton_chops',
        'farmersdelight:minced_beef',
        'nethersdelight:hoglin_loin',
        'farmersdelight:ham',
        'nethersdelight:ground_strider',
        'ends_delight:raw_dragon_meat_cuts',
        'ends_delight:raw_dragon_meat',
        'ends_delight:raw_ender_mite_meat',
        'ends_delight:dragon_leg',
        'nethersdelight:strider_slice'
    )

    // Golden Things for Tarot
    event.add('tarotcards:golden',
    'reaping:gold_reaping_tool',
    'nethersdelight:golden_machete',
    'farmersdelight:golden_knife',
    'twilightforest:gold_minotaur_axe',
    'better_fishing_rods:golden_fishing_rod',
    'better_fishing_rods:lucky_golden_fishing_rod'
    )

    // Blackstone Furnaces
    event.add('forge:blackstone_furnaces',
    'nethersdelight:blackstone_furnace', 
    'quark:blackstone_furnace'
    )


    //===Banning Uncraftables===
    event.add('twilightforest:banned_uncraftables', 'plushies:dragon', '#forge:eyes', 'ends_delight:non_hatchable_dragon_egg')
    event.add('twilightforest:banned_uncrafting_ingredients', '#forge:eyes')

    //===Tags for FTB Quests=== TODO : Change all these quests over

    // Brooms
    event.add('forge:brooms', 'hexerei:mahogany_broom', 'hexerei:witch_hazel_broom', 'hexerei:willow_broom')

    //Tom's Storage Tags
    event.add('forge:invcable', 'toms_storage:ts.inventory_cable','toms_storage:ts.inventory_cable_framed')

    event.add('forge:connector', 
    'toms_storage:ts.inventory_cable_connector_filtered',
    'toms_storage:ts.inventory_cable_connector',
    'toms_storage:ts.inventory_cable_connector_framed',
    'sophisticatedstorage:storage_link',
    'toms_storage:ts.trim')

    //Pet Beds
    event.add('forge:petbeds',
    'domesticationinnovation:pet_bed_white',
    'domesticationinnovation:pet_bed_orange',
    'domesticationinnovation:pet_bed_magenta',
    'domesticationinnovation:pet_bed_light_blue',
    'domesticationinnovation:pet_bed_yellow',
    'domesticationinnovation:pet_bed_green',
    'domesticationinnovation:pet_bed_brown',
    'domesticationinnovation:pet_bed_blue',
    'domesticationinnovation:pet_bed_purple',
    'domesticationinnovation:pet_bed_cyan',
    'domesticationinnovation:pet_bed_light_gray',
    'domesticationinnovation:pet_bed_gray',
    'domesticationinnovation:pet_bed_pink',
    'domesticationinnovation:pet_bed_lime',
    'domesticationinnovation:pet_bed_red',
    'domesticationinnovation:pet_bed_black'
    )

    //Mushroom Colony
    event.add('forge:mushcolony',
    'farmersdelight:red_mushroom_colony', 
    'farmersdelight:brown_mushroom_colony',
    'collectorsreap:portobello_colony')

    //Fungus Colony
    event.add('forge:funguscolony',
    'nethersdelight:crimson_fungus_colony', 
    'nethersdelight:warped_fungus_colony')

    //Overweight Crops
    event.add('forge:overweightcrops',
    'overweight_farming:overweight_cabbage_block',
    'overweight_farming:overweight_onion_block',
    'overweight_farming:overweight_apple_block',
    'overweight_farming:overweight_poisonous_potato_block',
    'overweight_farming:overweight_nether_wart_block',
    'overweight_farming:overweight_potato_block',
    'overweight_farming:overweight_cocoa_block',
    'overweight_farming:overweight_carrot_block',
    'overweight_farming:overweight_beetroot_block'
    )

    //Ancient Tomes
    event.add('forge:tomes', 'quark:ancient_tome')

    //Ritual Tablets
    event.add('forge:ritual_tablets',
    'ars_nouveau:ritual_flight',
    'ars_nouveau:ritual_sunrise',
    'ars_nouveau:ritual_overgrowth',
    'ars_nouveau:ritual_moonfall',
    'ars_nouveau:ritual_fertility',
    'ars_nouveau:ritual_binding',
    'ars_nouveau:ritual_wilden_summon',
    'ars_nouveau:ritual_scrying',
    'ars_nouveau:ritual_awakening',
    'ars_nouveau:ritual_burrowing',
    'ars_nouveau:ritual_challenge',
    'ars_nouveau:ritual_cloudshaping',
    'ars_nouveau:ritual_disintegration',
    'ars_nouveau:ritual_warping',
    'ars_nouveau:ritual_restoration',
    'ars_nouveau:ritual_animal_summon',
    'ars_nouveau:ritual_harvest',
    'ars_nouveau:ritual_conjure_island_desert',
    'ars_nouveau:ritual_containment',
    'ars_nouveau:ritual_flowering',
    'ars_nouveau:ritual_sanctuary',
    'ars_nouveau:ritual_conjure_island_plains',
    'ars_nouveau:ritual_forestation'
    )

    //Lilies
    event.add('forge:lilies',
    'cnb:pink_waterlily',
    'cnb:light_pink_waterlily',
    'cnb:yellow_waterlily',
    'cnb:pink_minipad_flower',
    'cnb:light_pink_minipad_flower',
    'cnb:yellow_minipad_flower',
    'cnb:pink_minipad_flower_glow',
    'cnb:light_pink_minipad_flower_glow',
    'cnb:yellow_minipad_flower_glow'
    )

    // Apple Crates
    event.add('forge:apple_crates',
    'applecrates:oak_crate',
    'applecrates:birch_crate',
    'applecrates:spruce_crate',
    'applecrates:acacia_crate',
    'applecrates:jungle_crate',
    'applecrates:dark_oak_crate',
    'applecrates:crimson_crate',
    'applecrates:warped_crate'
    )

    // Cheese Tags for Quests
    event.add('forge:unripe_cheese_wheels',
    'brewinandchewin:unripe_flaxen_cheese_wheel',
    'brewinandchewin:unripe_scarlet_cheese_wheel'
    )

    // Scythe/Reaping Tool Tagging
    event.add('forge:scythe', 
    'reaping:diamond_reaping_tool',
    'reaping:gold_reaping_tool',
    'reaping:iron_reaping_tool',
    'reaping:netherite_reaping_tool'
    )

    // Magnum Torch Tagging
    event.add(
    'forge:magnum_torches',
    'magnumtorch:diamond_magnum_torch',
    'magnumtorch:emerald_magnum_torch',
    'magnumtorch:amethyst_magnum_torch'
    )

    // Inventory Managers
    event.add('forge:inventory_controllers',
    'sophisticatedstorage:controller',
    'toms_storage:ts.inventory_connector'
    )

    // Inventory Upgrades
    event.add('forge:inventory_upgrades',
    'sophisticatedstorage:auto_smelting_upgrade',
    'sophisticatedstorage:auto_smoking_upgrade',
    'sophisticatedstorage:auto_blasting_upgrade',
    'sophisticatedstorage:smelting_upgrade',
    'sophisticatedstorage:smoking_upgrade',
    'sophisticatedstorage:blasting_upgrade'
    )

    // Accessory Boosters
    event.add('forge:accessory_boosters',
    'majruszsaccessories:owl_feather',
    'majruszsaccessories:golden_dice',
    'majruszsaccessories:dice',
    'majruszsaccessories:horseshoe',
    'majruszsaccessories:golden_horseshoe'
    )

    // Stack Upgrades
    event.add('forge:stack_upgrades',
    'sophisticatedstorage:stack_upgrade_tier_1',
    'sophisticatedstorage:stack_upgrade_tier_2',
    'sophisticatedstorage:stack_upgrade_tier_3',
    'sophisticatedstorage:stack_upgrade_tier_4'
    )

    // Bison Patties
    event.add('forge:cooked_beef',
    'alexsdelight:bison_patty'
    )

    // Teeth
    event.add('forge:teeth',
    'alexsmobs:shark_tooth',
    'alexsmobs:bone_serpent_tooth',
    'alexsmobs:cachalot_whale_tooth',
    'alexsmobs:serrated_shark_tooth'
    )

    // Glass Casings
    event.add('forge:glass_casings',
    'create_crystal_clear:andesite_glass_casing',
    'create_crystal_clear:brass_glass_casing',
    'create_crystal_clear:copper_glass_casing',
    'create_crystal_clear:train_glass_casing',
    'create_crystal_clear:andesite_clear_glass_casing',
    'create_crystal_clear:brass_clear_glass_casing',
    'create_crystal_clear:copper_clear_glass_casing',
    'create_crystal_clear:train_clear_glass_casing'
    )

    // Umbrellas
    event.add('forge:umbrellas',
    'davespotioneering:cyan_umbrella',
    'davespotioneering:purple_umbrella',
    'davespotioneering:blue_umbrella',
    'davespotioneering:brown_umbrella',
    'davespotioneering:green_umbrella',
    'davespotioneering:red_umbrella',
    'davespotioneering:black_umbrella',
    'davespotioneering:gilded_umbrella',
    'davespotioneering:aged_umbrella',
    'davespotioneering:orange_umbrella',
    'davespotioneering:white_umbrella',
    'davespotioneering:lime_umbrella',
    'davespotioneering:yellow_umbrella',
    'davespotioneering:light_blue_umbrella',
    'davespotioneering:magenta_umbrella',
    'davespotioneering:pink_umbrella',
    'davespotioneering:gray_umbrella',
    'davespotioneering:light_gray_umbrella'
    )

    // Fishing Rod Tags
    event.add('forge:fishing_rods',
    'better_fishing_rods:slimy_fishing_rod',
    'better_fishing_rods:wheaty_fishing_rod',
    'better_fishing_rods:coraly_fishing_rod',
    'better_fishing_rods:villager_fishing_rod',
    'better_fishing_rods:golden_fishing_rod',
    'better_fishing_rods:meaty_fishing_rod',
    'better_fishing_rods:orely_fishing_rod',
    'minecraft:fishing_rod'
    )

    // Sleeping Bags
    event.add('forge:sleeping_bags',
    'comforts:sleeping_bag_purple',
    'comforts:sleeping_bag_blue',
    'comforts:sleeping_bag_brown',
    'comforts:sleeping_bag_green',
    'comforts:sleeping_bag_red',
    'comforts:sleeping_bag_black',
    'comforts:sleeping_bag_white',
    'comforts:sleeping_bag_orange',
    'comforts:sleeping_bag_magenta',
    'comforts:sleeping_bag_light_blue',
    'comforts:sleeping_bag_yellow',
    'comforts:sleeping_bag_lime',
    'comforts:sleeping_bag_pink',
    'comforts:sleeping_bag_gray',
    'comforts:sleeping_bag_light_gray',
    'comforts:sleeping_bag_cyan'
    )

    // Walnuts
    event.add('forge:nuts', 'caupona:walnut')
    event.add('forge:nuts/walnut', 'caupona:walnut')
    event.add('caupona:walnut', 'ecologics:walnut')

    // Figs
    event.add('forge:fruits', 'caupona:fig')

    // Green Apples
    event.add('forge:fruits/sweet', 'byg:green_apple')

    // Glowstick Ingredients
    event.add('forge:glowstickingredients',
    'minecraft:glow_berries',
    'minecraft:glow_ink_sac',
    'spelunkery:phosphor_fungus',
    'spelunkery:mushgloom',
    'extendedmushrooms:glowshroom',
    'twilightforest:torchberries'
    )

    // BYG Sand Tags
    event.add('c:sand/purple', 'byg:purple_sand')
    event.add('c:sand/pink', 'byg:pink_sand')
    event.add('c:sand/blue', 'byg:blue_sand')
    event.add('c:sand/white', 'byg:white_sand')
    event.add('c:sand/black', 'byg:black_sand')

    // Duck Tags
    event.add('forge:raw_duck', 'duckling:raw_duck')

    // Cart Tags'
    event.add('forge:carts', 'astikorcarts:supply_cart', 
    'astikorcarts:animal_cart')

    // Frying Pan Tags
    event.add('forge:cookingpans', 
    'caupona:stone_griddle',
    'caupona:copper_frying_pan',
    'caupona:iron_frying_pan')

    // Dolium Tagging
    event.add('forge:dolium',
    'caupona:opus_incertum_counter_with_dolium',
    'caupona:opus_latericium_counter_with_dolium',
    'caupona:mud_counter_with_dolium',
    'caupona:stone_brick_counter_with_dolium'
    )

    // Alliums are Onions
    event.add('forge:vegetables/onion',
    'minecraft:allium',
    'byg:pink_allium'
    )

    // Caupona Tagging
    event.add('caupona:mushroom',
    'spelunkery:button_mushroom',
    'collectorsreap:portobello',
    'spelunkery:portabella',
    'spelunkery:crimini',
    'byg:white_puffball_cap',
    'byg:cooked_white_puffball_cap',
    'environmental:truffle'
    )

    event.add('forge:mushroom',
    'spelunkery:button_mushroom',
    'collectorsreap:portobello',
    'spelunkery:portabella',
    'spelunkery:crimini',
    'byg:white_puffball_cap',
    'byg:cooked_white_puffball_cap',
    'environmental:truffle'
    )

    event.add('caupona:meats',
    'alexsdelight:kangaroo_shank',
    'twilightforest:cooked_meef',
    'twilightforest:raw_meef',
    'delightful:venison_chops',
    'delightful:cooked_venison_chops',
    'delightful:raw_goat',
    'delightful:cooked_goat',
    'twilightforest:cooked_venison',
    'twilightforest:raw_venison',
    'alexsmobs:cooked_kangaroo_meat',
    'alexsmobs:kangaroo_meat',
    'alexsmobs:cooked_moose_ribs',
    'alexsmobs:moose_ribs',
    'alexsdelight:bison_patty',
    'alexsdelight:cooked_bison',
    'alexsdelight:raw_bison',
    'alexsdelight:bison_mince',
    'alexsdelight:cooked_loose_moose_rib',
    'alexsdelight:loose_moose_rib',
    'alexsdelight:cooked_kangaroo_shank',
    'nethersdelight:ground_strider',
    'ends_delight:raw_dragon_meat_cuts',
    'ends_delight:raw_dragon_meat',
    'ends_delight:raw_ender_mite_meat',
    'ends_delight:dragon_leg',
    'nethersdelight:strider_slice',
    'environmental:venison',
    'abnormals_delight:venison_shanks'
    )

    event.add('caupona:meats/meat',
    'alexsdelight:kangaroo_shank',
    'twilightforest:cooked_meef',
    'twilightforest:raw_meef',
    'delightful:venison_chops',
    'delightful:cooked_venison_chops',
    'delightful:raw_goat',
    'delightful:cooked_goat',
    'twilightforest:cooked_venison',
    'twilightforest:raw_venison',
    'alexsmobs:cooked_kangaroo_meat',
    'alexsmobs:kangaroo_meat',
    'alexsmobs:cooked_moose_ribs',
    'alexsmobs:moose_ribs',
    'alexsdelight:bison_patty',
    'alexsdelight:cooked_bison',
    'alexsdelight:raw_bison',
    'alexsdelight:bison_mince',
    'alexsdelight:cooked_loose_moose_rib',
    'alexsdelight:loose_moose_rib',
    'alexsdelight:cooked_kangaroo_shank',
    'nethersdelight:ground_strider',
    'ends_delight:raw_dragon_meat_cuts',
    'ends_delight:raw_dragon_meat',
    'ends_delight:raw_ender_mite_meat',
    'ends_delight:dragon_leg',
    'nethersdelight:strider_slice',
    'environmental:venison',
    'abnormals_delight:venison_shanks'
    )

    event.add('caupona:meats/poultry',
    'duckling:cooked_duck',
    'duckling:raw_duck',
    'alexsdelight:cooked_bunfungus',
    'alexsdelight:raw_bunfungus',
    'alexsdelight:cooked_bunfungus_drumstick',
    'alexsdelight:raw_bunfungus_drumstick',
    'farmersdelight:chicken_cuts',
    'abnormals_delight:duck_fillet',
    'environmental:duck',
    'environmental:cooked_duck'
    )

    event.add('forge:cooked_duck', 'duckling:cooked_duck')

    event.add('caupona:meats',
    'duckling:cooked_duck',
    'duckling:raw_duck',
    'alexsdelight:cooked_bunfungus',
    'alexsdelight:raw_bunfungus',
    'alexsdelight:cooked_bunfungus_drumstick',
    'alexsdelight:raw_bunfungus_drumstick',
    'farmersdelight:chicken_cuts',
    'abnormals_delight:duck_fillet',
    'environmental:duck',
    'environmental:cooked_duck'
    )

    event.add('caupona:seafood/fish',
    'alexsmobs:raw_catfish',
    'alexsmobs:cooked_catfish',
    'alexsdelight:cooked_catfish_slice',
    'alexsdelight:raw_catfish_slice',
    'netherdepthsupgrade:soulsucker_slice',
    'netherdepthsupgrade:glowdine_slice',
    'netherdepthsupgrade:magmacubefish_slice',
    'netherdepthsupgrade:blazefish_slice',
    'netherdepthsupgrade:searing_cod_slice',
    'netherdepthsupgrade:obsidianfish_slice',
    'netherdepthsupgrade:lava_pufferfish_slice'
    )

    event.add('minecraft:fishes',
    'alexsmobs:raw_catfish',
    'alexsmobs:cooked_catfish',
    'alexsdelight:cooked_catfish_slice',
    'alexsdelight:raw_catfish_slice',
    'netherdepthsupgrade:soulsucker_slice',
    'netherdepthsupgrade:glowdine_slice',
    'netherdepthsupgrade:magmacubefish_slice',
    'netherdepthsupgrade:blazefish_slice',
    'netherdepthsupgrade:searing_cod_slice',
    'netherdepthsupgrade:obsidianfish_slice',
    'netherdepthsupgrade:lava_pufferfish_slice'
    )

    event.add('caupona:seafood',
    'quark:crab_leg',
    'quark:cooked_crab_leg',
    'alexsmobs:lobster_tail',
    'alexsmobs:cooked_lobster_tail',
    'ecologics:crab_meat',
    'culturaldelights:squid',
    'culturaldelights:raw_calamari',
    'culturaldelights:glow_squid',
    'ends_delight:shulker_meat_slice',
    'ends_delight:shulker_meat'
    )

    event.add('forge:seafood',
    'quark:crab_leg',
    'quark:cooked_crab_leg',
    'alexsmobs:lobster_tail',
    'alexsmobs:cooked_lobster_tail',
    'ecologics:crab_meat',
    'culturaldelights:squid',
    'culturaldelights:raw_calamari',
    'culturaldelights:glow_squid',
    'ends_delight:shulker_meat_slice',
    'ends_delight:shulker_meat'
    )

    event.add('caupona:eggs',
    'duckling:duck_egg',
    'alexsmobs:terrapin_egg',
    'cnb:lizard_egg',
    'quark:egg_parrot_red_blue',
    'quark:egg_parrot_blue',
    'alexsmobs:emu_egg',
    'quark:egg_parrot_green',
    'quark:egg_parrot_yellow_blue',
    'alexsmobs:crocodile_egg',
    'quark:egg_parrot_grey',
    'environmental:duck_egg'
    )

    event.add('forge:meats',
    'alexsmobs:moose_ribs',
    'farmersdelight:bacon',
    'farmersdelight:mutton_chops',
    'twilightforest:raw_meef',
    'farmersdelight:minced_beef',
    'alexsdelight:loose_moose_rib',
    'nethersdelight:hoglin_loin',
    'farmersdelight:ham',
    'alexsmobs:kangaroo_meat',
    'alexsdelight:bison_mince',
    'alexsdelight:kangaroo_shank',
    'alexsdelight:raw_bison',
    'nethersdelight:ground_strider',
    'ends_delight:raw_dragon_meat_cuts',
    'ends_delight:raw_dragon_meat',
    'ends_delight:raw_ender_mite_meat',
    'ends_delight:dragon_leg',
    'nethersdelight:strider_slice',
    'alexsdelight:raw_bunfungus',
    'alexsdelight:raw_bunfungus_drumstick'
    )

    event.add('caupona:cereals',
    'create:dough',
    'culturaldelights:corn_dough',
    'create:wheat_flour',
    'culturaldelights:tortilla'
    )

    event.add('caupona:cereals/baked',
    'culturaldelights:tortilla'
    )

    // Squid
    event.add('forge:squid',
    'culturaldelights:squid',
    'culturaldelights:cooked_squid',
    'culturaldelights:glow_squid',
    'miners_delight:squid',
    'miners_delight:glow_squid',
    'miners_delight:baked_squid'
    )

      // Reinforced Deepslate
      event.add('forge:relocation_not_supported',
      'minecraft:reinforced_deepslate'
      )

      //string

event.add('forge:string',
'crittersandcompanions:silk'
)

// Majrusz's Accessories

event.add('forge:maj_acs',
'majruszsaccessories:certificate_of_taming',
'majruszsaccessories:idol_of_fertility',
'majruszsaccessories:lucky_rock',
'majruszsaccessories:tamed_potato_beetle',
'majruszsaccessories:angler_trophy',
'majruszsaccessories:discount_voucher',
'majruszsaccessories:dream_catcher',
'majruszsaccessories:metal_lure',
'majruszsaccessories:miner_guide',
'majruszsaccessories:adventurer_kit',
'majruszsaccessories:tool_scraps',
'majruszsaccessories:unbreakable_fishing_line',
'majruszsaccessories:adventurer_rune',
'majruszsaccessories:angler_rune',
'majruszsaccessories:household_rune',
'majruszsaccessories:miner_rune',
'majruszsaccessories:nature_rune',
'majruszsaccessories:soul_of_minecraft',
'majruszsaccessories:secret_ingredient',
'majruszsaccessories:swimmer_guide'
)

// Majruzs's Boosters
event.add('forge:maj_boosters',
'majruszsaccessories:onyx',
'majruszsaccessories:dice',
'majruszsaccessories:owl_feather',
'majruszsaccessories:golden_dice',
'majruszsaccessories:golden_horseshoe',
'majruszsaccessories:horseshoe'
)

// Majruzs's Cards
event.add('forge:maj_cards',
'majruszsaccessories:gambling_card',
'majruszsaccessories:removal_card',
'majruszsaccessories:reverse_card'
)

   //Aquaculture tags
    //Fishing Rods
    event.add('forge:fishing_rods',
    'aquaculture:iron_fishing_rod',
    'aquaculture:gold_fishing_rod',
    'aquaculture:diamond_fishing_rod'
    )

    //Upgraded Hooks
    event.add('forge:upgraded_hooks',
    'aquaculture:nether_star_hook',
    'aquaculture:double_hook',
    'aquaculture:diamond_hook',
    'aquaculture:gold_hook'
    )

    //Niche Hooks
    event.add('forge:niche_hooks',
    'aquaculture:note_hook',
    'aquaculture:redstone_hook',
    'aquaculture:heavy_hook',
    'aquaculture:light_hook'
    )

    // Sophisticated Backpack Tags
// Utility Upgrades

event.add('forge:sophb_utility',
    'sophisticatedbackpacks:auto_blasting_upgrade', 
    'sophisticatedbackpacks:auto_smelting_upgrade', 
    'sophisticatedbackpacks:auto_smoking_upgrade', 
    'sophisticatedbackpacks:smoking_upgrade', 
    'sophisticatedbackpacks:smelting_upgrade', 
    'sophisticatedbackpacks:blasting_upgrade', 
    'sophisticatedbackpacks:crafting_upgrade', 
    'sophisticatedbackpacks:anvil_upgrade'
)

// Inventory Management Upgrades

event.add('forge:sophb_inventory',
    'sophisticatedbackpacks:advanced_compacting_upgrade', 
    'sophisticatedbackpacks:compacting_upgrade', 
    'sophisticatedbackpacks:stack_upgrade_tier_1', 
    'sophisticatedbackpacks:stack_upgrade_starter_tier'
)

// Quick Access Upgrades

event.add('forge:sophb_quick',
    'sophisticatedbackpacks:advanced_feeding_upgrade', 
    'sophisticatedbackpacks:advanced_restock_upgrade', 
    'sophisticatedbackpacks:advanced_refill_upgrade', 
    'sophisticatedbackpacks:advanced_tool_swapper_upgrade', 
    'sophisticatedbackpacks:tool_swapper_upgrade', 
    'sophisticatedbackpacks:refill_upgrade', 
    'sophisticatedbackpacks:restock_upgrade', 
    'sophisticatedbackpacks:feeding_upgrade'
)

// Environmental Upgrade

event.add('forge:sophb_environmental',
    'sophisticatedbackpacks:jukebox_upgrade', 
    'sophisticatedbackpacks:magnet_upgrade', 
    'sophisticatedbackpacks:pickup_upgrade', 
    'sophisticatedbackpacks:advanced_pickup_upgrade', 
    'sophisticatedbackpacks:advanced_magnet_upgrade'
)

// Exp Fluid Upgrades

event.add('forge:sophb_fluid',
    'sophisticatedbackpacks:tank_upgrade',
    'sophisticatedbackpacks:xp_pump_upgrade'
)

// aquaculture fish
event.add('forge:aquafish',
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
)

/// Refined Storage Controllers/Lodestones

    event.add('forge:creative_controller',
        "refinedstorage:white_creative_controller",
      "refinedstorage:orange_creative_controller",
      "refinedstorage:magenta_creative_controller",
      "refinedstorage:creative_controller",
      "refinedstorage:yellow_creative_controller",
      "refinedstorage:lime_creative_controller",
      "refinedstorage:pink_creative_controller",
      "refinedstorage:gray_creative_controller",
      "refinedstorage:light_gray_creative_controller",
      "refinedstorage:cyan_creative_controller",
      "refinedstorage:purple_creative_controller",
      "refinedstorage:blue_creative_controller",
      "refinedstorage:brown_creative_controller",
      "refinedstorage:green_creative_controller",
      "refinedstorage:red_creative_controller",
      "refinedstorage:black_creative_controller"
    
    )
/// coal ores 
event.add('forge:ores/coal',
"spelunkery:granite_coal_ore", 
"spelunkery:andesite_coal_ore", 
"spelunkery:diorite_coal_ore", 
"spelunkery:tuff_coal_ore"
)

})


ServerEvents.tags('block', event => {

    //Hot Blocks
    //Farmer's Delight
    event.add('farmersdelight:heat_sources', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'farmersdelight:stove',
    'byg:magmatic_stone',
    'byg:cryptic_magma_block',
    'byg:boric_campfire',
    'byg:cryptic_campfire',
    'caupona:brick_hypocaust_firebox',
    'caupona:opus_incertum_hypocaust_firebox',
    'caupona:opus_latericium_hypocaust_firebox',
    'caupona:stone_brick_hypocaust_firebox',
    'caupona:mud_kitchen_stove',
    'caupona:brick_kitchen_stove',
    'caupona:opus_incertum_kitchen_stove',
    'caupona:opus_latericium_kitchen_stove',
    'caupona:stone_brick_kitchen_stove'
    )

    //Brewin and Chewin
    event.add('brewinandchewin:hot_blocks', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'farmersdelight:stove',
    'byg:magmatic_stone',
    'byg:cryptic_magma_block',
    'byg:boric_campfire',
    'byg:cryptic_campfire',
    'caupona:brick_hypocaust_firebox',
    'caupona:opus_incertum_hypocaust_firebox',
    'caupona:opus_latericium_hypocaust_firebox',
    'caupona:stone_brick_hypocaust_firebox',
    'caupona:mud_kitchen_stove',
    'caupona:brick_kitchen_stove',
    'caupona:opus_incertum_kitchen_stove',
    'caupona:opus_latericium_kitchen_stove',
    'caupona:stone_brick_kitchen_stove'
    )

    // Caupona
    event.add('caupona:stoves',
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'farmersdelight:stove',
    'byg:magmatic_stone',
    'byg:cryptic_magma_block',
    'byg:boric_campfire',
    'byg:cryptic_campfire',
    'caupona:brick_hypocaust_firebox',
    'caupona:opus_incertum_hypocaust_firebox',
    'caupona:opus_latericium_hypocaust_firebox',
    'caupona:stone_brick_hypocaust_firebox',
    'caupona:mud_kitchen_stove',
    'caupona:brick_kitchen_stove',
    'caupona:opus_incertum_kitchen_stove',
    'caupona:opus_latericium_kitchen_stove',
    'caupona:stone_brick_kitchen_stove'
    )

      // Reinforced Deepslate
      event.add('forge:relocation_not_supported',
      'minecraft:reinforced_deepslate'
      )



    
})

ServerEvents.tags("entity_type", event => {

    event.add("ars_nouveau:drygmy_blacklist",[
    "minecraft:villager",
    "minecraft:pillager",
    "#forge:bosses",
    "twilightforest:naga",
    "twilightforest:lich",
    "twilightforest:minoshroom",
    "twilightforest:hydra",
    "twilightforest:knight_phantom",
    "twilightforest:ur_ghast",
    "twilightforest:alpha_yeti",
    "twilightforest:snow_queen",
    "twilightforest:plateau_boss",
    "minecraft:warden",
    "artifacts:mimic",
    "minecraft:wither",
    "minecraft:ender_dragon",
    "alexsmobs:void_worm",
    "alexsmobs:void_worm_part",
    "friendsandfoes:iceologer",
    "friendsandfoes:wildfire",
    "minecraft:evoker",
    "minecraft:illusioner",
    "minecraft:vindicator",
    "luggage:luggage",
    "luggage:ender_luggage",
    "lootr:lootr_minecart",
    "minecraft:chest_minecart",
    "deeperanddarker:shattered",
    "deeperanddarker:stalker",
    "deeperanddarker:sculk_snapper",
    "alexsmobs:mimicube",
    "twilightforest:armored_giant",
    "twilightforest:giant_miner",
    "alexsmobs:warped_mosco",
    "minecraft:iron_golem"



        

    ])
})


ServerEvents.tags("entity_type", event => {

    event.add("ars_nouveau:jar_blacklist",[
        "#ars_nouveau:familiar",
        "#forge:bosses",
        "twilightforest:naga",
        "twilightforest:lich",
        "twilightforest:minoshroom",
        "twilightforest:hydra",
        "twilightforest:knight_phantom",
        "twilightforest:ur_ghast",
        "twilightforest:alpha_yeti",
        "twilightforest:snow_queen",
        "twilightforest:plateau_boss",
        "minecraft:warden",
        "alexsmobs:void_worm",
        "alexsmobs:void_worm_part",
        "minecraft:wither",
        "minecraft:ender_dragon",
        "enigmaticgraves:grave",
        "friendsandfoes:copper_golem",
        "minecraft:elder_guardian",
        "friendsandfoes:wildfire",
        "luggage:luggage",
        "luggage:ender_luggage",
        "lootr:lootr_minecart",
        "minecraft:chest_minecart",
        "deeperanddarker:shattered",
        "deeperanddarker:stalker",
        "deeperanddarker:sculk_snapper"

    ])
})

