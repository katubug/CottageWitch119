ServerEvents.tags("item", (event) => {
	//MARK:Dirt for Compost Recipe
	event.add(
		"forge:dirt",
		"minecraft:dirt",
		"minecraft:coarse_dirt",
		"minecraft:rooted_dirt",
		"minecraft:podzol",
		"byg:lush_dirt",
		"twilightforest:uberous_soil"
	);

	//MARK:Dirt for Compost Recipe
	event.add(
		"forge:compressable_dirt",
		"minecraft:dirt",
		"minecraft:coarse_dirt",
		"minecraft:rooted_dirt",
		"minecraft:podzol",
		"byg:lush_dirt",
		"twilightforest:uberous_soil"
	);

	//MARK: Organic materials for Compost Recipe
	event.add(
		"forge:compost",
		"hexerei:mugwort_flowers",
		"hexerei:mugwort_leaves",
		"hexerei:yellow_dock_flowers",
		"hexerei:yellow_dock_leaves",
		"hexerei:belladonna_flowers",
		"hexerei:belladonna_berries",
		"hexerei:mandrake_root",
		"hexerei:mandrake_flowers",
		"hexerei:dried_sage",
		"hexerei:dried_belladonna_flowers",
		"hexerei:dried_mandrake_flowers",
		"hexerei:dried_mugwort_flowers",
		"hexerei:dried_mugwort_leaves",
		"hexerei:dried_yellow_dock_flowers",
		"hexerei:dried_yellow_dock_leaves",
		"farmersdelight:tree_bark",
		"minecraft:rotten_flesh"
	);

	//MARK: Rope Tags
	event.add("supplementaries:ropes", "farmersdelight:rope", "beautify:rope");

	//MARK: Eyes tags
	event.add(
		"cw:eyes",
		"endrem:evil_eye",
		"endrem:cursed_eye",
		"endrem:rogue_eye",
		"endrem:old_eye",
		"endrem:nether_eye",
		"endrem:lost_eye",
		"endrem:corrupted_eye",
		"endrem:cold_eye",
		"endrem:black_eye",
		"endrem:guardian_eye",
		"endrem:magical_eye",
		"endrem:wither_eye",
		"endrem:witch_eye",
		"endrem:undead_eye",
		"endrem:exotic_eye"
	);

	//MARK: Seeds Tags
	event.add("forge:seeds", "extradelight:corn_seeds");

	event.add("forge:seeds/corn", "culturaldelights:corn_kernels");
	event.add("forge:seeds/cucumber", "culturaldelights:cucumber_seeds");
	event.add("forge:seeds/eggplant", "culturaldelights:eggplant_seeds");
	event.add("forge:seeds/avocado", "culturaldelights:avocado_pit");
	event.add("forge:seeds/tea", "farmersrespite:tea_seeds");
	event.add("forge:seeds/sage", "hexerei:sage_seed");

	//MARK: Waystone Tags
	event.add(
		"waystones:waystone",
		"waystones:waystone",
		"waystones:mossy_waystone",
		"waystones:sandy_waystone"
	);

	//MARK: Wrench Tags
	event.add("forge:wrenches", "refurbished_furniture:wrench");

	//MARK: Azalea Tags
	// Excludes quark, for recipes

	//  Log Tags
	event.add("cw:azalea_log", /.*azalea_log.*/);
	event.add("cw:stripped_azalea_log", /.*stripped_azalea_log.*/);

	// Wood Tags
	event.add("cw:azalea_wood", /.*azalea_wood.*/);
	event.add("cw:stripped_azalea_wood", /.*stripped_azalea_wood.*/);

	// Planks Tags
	event.add("cw:azalea_planks", /.*azalea_planks.*/);

	// Remove quark ones
	event.remove("cw:azalea_log", /quark.*azalea_log.*/);
	event.remove("cw:stripped_azalea_log", /quark.*stripped_azalea_log.*/);

	event.remove("cw:azalea_wood", /quark.*azalea_wood.*/);
	event.remove("cw:stripped_azalea_wood", /quark.*stripped_azalea_wood.*/);

	event.remove("cw:azalea_planks", /quark.*azalea_planks.*/);

	//MARK: Cinnamon Wood Stuff
	event.add("minecraft:planks", "extradelight:cinnamon_planks");
	event.add("minecraft:logs", "extradelight:cinnamon_log");

	//MARK: Corn Dough Tags
	event.add("minecraft:dough", "culturaldelights:corn_dough");
	event.add("cw:dough", "culturaldelights:corn_dough");

	//MARK:  Cheese Tags for Crafting
	event.add(
		"forge:cheese",
		"brewinandchewin:scarlet_cheese_wedge",
		"refurbished_furniture:cheese"
	);

	//MARK:  Bowl Tagging
	event.add("cw:bowls", "minecraft:bowl", "ecologics:coconut_husk");

	//MARK: Cookie Jar
	event.add(
		"supplementaries:cookies",
		"abnormals_delight:cherry_cookie",
		"collectorsreap:lime_cookie",
		"ends_delight:chorus_cookie",
		"twilightdelight:torchberry_cookie",
		"extradelight:pumpkin_cookie",
		"extradelight:sugar_cookie",
		"extradelight:glow_berry_cookie",
		"extradelight:apple_cookie",
		"extradelight:gingerbread_cookie",
		"extradelight:sugar_cookie_steve",
		"extradelight:sugar_cookie_alex",
		"extradelight:sugar_cookie_villager",
		"extradelight:sugar_cookie_creeper",
		"extradelight:sugar_cookie_sword",
		"extradelight:sugar_cookie_pickaxe",
		"extradelight:sugar_cookie_diamond",
		"extradelight:sugar_cookie_emerald",
		"extradelight:gingerbread_steve",
		"extradelight:gingerbread_alex",
		"extradelight:gingerbread_villager",
		"extradelight:gingerbread_creeper",
		"extradelight:gingerbread_sword",
		"extradelight:gingerbread_pickaxe",
		"extradelight:gingerbread_diamond",
		"extradelight:gingerbread_emerald"
	);

	//MARK: Cactus Pad
	event.add("cw:cactus_cuts", "delightful:cactus_flesh", "extradelight:cactus");

	//MARK: Vegetables
	event.add(
		"cw:vegetables",
		"culturaldelights:cut_cucumber",
		"culturaldelights:cucumber",
		"culturaldelights:cut_avocado",
		"culturaldelights:avocado",
		"culturaldelights:eggplant",
		"culturaldelights:cut_eggplant",
		"culturaldelights:white_eggplant",
		"culturaldelights:corn_cob",
		"delightful:cactus_flesh",
		"farmersdelight:pumpkin_slice"
	);

	//MARK: Fruits
	event.add(
		"cw:fruits",
		"ars_nouveau:frostaya_pod",
		"ecologics:coconut_slice",
		"ends_delight:chorus_succulent",
		"ends_delight:chorus_fruit_grain",
		"ends_delight:ender_pearl_grain",
		"ars_nouveau:mendosteen_pod",
		"ars_nouveau:bastion_pod",
		"ars_nouveau:bombegranate_pod"
	);

	//MARK: Seafood
	event.add(
		"cw:seafood",
		"quark:crab_leg",
		"quark:cooked_crab_leg",
		"ecologics:crab_meat",
		"culturaldelights:squid",
		"culturaldelights:raw_calamari",
		"culturaldelights:glow_squid",
		"ends_delight:shulker_meat_slice",
		"ends_delight:shulker_meat"
	);

	//MARK: Meats
	event.add(
		"cw:meats",
		"farmersdelight:bacon",
		"farmersdelight:mutton_chops",
		"farmersdelight:minced_beef",
		"nethersdelight:hoglin_loin",
		"farmersdelight:ham",
		"nethersdelight:ground_strider",
		"ends_delight:raw_dragon_meat_cuts",
		"ends_delight:raw_dragon_meat",
		"ends_delight:raw_ender_mite_meat",
		"ends_delight:dragon_leg",
		"nethersdelight:strider_slice",
		"alexsmobs:moose_ribs",
		"twilightforest:raw_meef",
		"alexsdelight:loose_moose_rib",
		"alexsmobs:kangaroo_meat",
		"alexsdelight:bison_mince",
		"alexsdelight:kangaroo_shank",
		"alexsdelight:raw_bison",
		"alexsdelight:raw_bunfungus",
		"alexsdelight:raw_bunfungus_drumstick"
	);

	//MARK:  Golden Things for Tarot
	event.add(
		"tarotcards:golden",
		"reaping:gold_reaping_tool",
		"nethersdelight:golden_machete",
		"farmersdelight:golden_knife",
		"twilightforest:gold_minotaur_axe",
		"better_fishing_rods:golden_fishing_rod",
		"better_fishing_rods:lucky_golden_fishing_rod"
	);

	//MARK:  Blackstone Furnaces
	event.add(
		"cw:blackstone_furnaces",
		"nethersdelight:blackstone_furnace",
		"quark:blackstone_furnace"
	);

	//MARK:  Banning Uncraftables
	event.add(
		"twilightforest:banned_uncraftables",
		"plushies:dragon",
		"#forge:eyes",
		"ends_delight:non_hatchable_dragon_egg",
		"aquaculture:nether_star_hook",
		"environmental:grass_thatch_vertical_slab",
		"environmental:grass_thatch_slab",
		"extradelight:oak_knife_block",
		"extradelight:dark_oak_knife_block",
		"extradelight:spruce_knife_block",
		"extradelight:birch_knife_block",
		"extradelight:jungle_knife_block",
		"extradelight:acacia_knife_block",
		"extradelight:crimson_knife_block",
		"extradelight:warped_knife_block",
		"extradelight:mangrove_knife_block",
		"extradelight:cinnamon_knife_block",
		"gateways:gate_pearl",
		"alexsmobs:hemolymph_blaster"
	);
	event.add(
		"twilightforest:banned_uncrafting_ingredients",
		"#forge:eyes",
		"minecraft:nether_star",
		"minecraft:dragon_egg"
	);

	//MARK:  Brooms
	event.add(
		"cw:brooms",
		"hexerei:mahogany_broom",
		"hexerei:witch_hazel_broom",
		"hexerei:willow_broom"
	);

	//MARK:  Pet Beds
	event.add(
		"cw:petbeds",
		"domesticationinnovation:pet_bed_white",
		"domesticationinnovation:pet_bed_orange",
		"domesticationinnovation:pet_bed_magenta",
		"domesticationinnovation:pet_bed_light_blue",
		"domesticationinnovation:pet_bed_yellow",
		"domesticationinnovation:pet_bed_green",
		"domesticationinnovation:pet_bed_brown",
		"domesticationinnovation:pet_bed_blue",
		"domesticationinnovation:pet_bed_purple",
		"domesticationinnovation:pet_bed_cyan",
		"domesticationinnovation:pet_bed_light_gray",
		"domesticationinnovation:pet_bed_gray",
		"domesticationinnovation:pet_bed_pink",
		"domesticationinnovation:pet_bed_lime",
		"domesticationinnovation:pet_bed_red",
		"domesticationinnovation:pet_bed_black"
	);

	//MARK:  Mushroom Colony
	event.add(
		"cw:mushcolony",
		"farmersdelight:red_mushroom_colony",
		"farmersdelight:brown_mushroom_colony",
		"collectorsreap:portobello_colony"
	);

	//MARK:  Fungus Colony
	event.add(
		"cw:funguscolony",
		"nethersdelight:crimson_fungus_colony",
		"nethersdelight:warped_fungus_colony"
	);

	//MARK:  Overweight Crops
	event.add(
		"cw:overweightcrops",
		"overweight_farming:overweight_cabbage_block",
		"overweight_farming:overweight_onion_block",
		"overweight_farming:overweight_apple_block",
		"overweight_farming:overweight_poisonous_potato_block",
		"overweight_farming:overweight_nether_wart_block",
		"overweight_farming:overweight_potato_block",
		"overweight_farming:overweight_cocoa_block",
		"overweight_farming:overweight_carrot_block",
		"overweight_farming:overweight_beetroot_block"
	);

	//MARK:  Ancient Tomes
	event.add("cw:tomes", "quark:ancient_tome");

	//MARK:  Ritual Tablets
	event.add(
		"cw:ritual_tablets",
		"ars_nouveau:ritual_flight",
		"ars_nouveau:ritual_sunrise",
		"ars_nouveau:ritual_overgrowth",
		"ars_nouveau:ritual_moonfall",
		"ars_nouveau:ritual_fertility",
		"ars_nouveau:ritual_binding",
		"ars_nouveau:ritual_wilden_summon",
		"ars_nouveau:ritual_scrying",
		"ars_nouveau:ritual_awakening",
		"ars_nouveau:ritual_burrowing",
		"ars_nouveau:ritual_challenge",
		"ars_nouveau:ritual_cloudshaping",
		"ars_nouveau:ritual_disintegration",
		"ars_nouveau:ritual_warping",
		"ars_nouveau:ritual_restoration",
		"ars_nouveau:ritual_animal_summon",
		"ars_nouveau:ritual_harvest",
		"ars_nouveau:ritual_conjure_island_desert",
		"ars_nouveau:ritual_containment",
		"ars_nouveau:ritual_flowering",
		"ars_nouveau:ritual_sanctuary",
		"ars_nouveau:ritual_conjure_island_plains",
		"ars_nouveau:ritual_forestation"
	);

	//MARK:  Lilies
	event.add(
		"cw:lilies",
		"cnb:pink_waterlily",
		"cnb:light_pink_waterlily",
		"cnb:yellow_waterlily",
		"cnb:pink_minipad_flower",
		"cnb:light_pink_minipad_flower",
		"cnb:yellow_minipad_flower",
		"cnb:pink_minipad_flower_glow",
		"cnb:light_pink_minipad_flower_glow",
		"cnb:yellow_minipad_flower_glow"
	);

	//MARK:  Apple Crates
	event.add(
		"cw:apple_crates",
		"applecrates:oak_crate",
		"applecrates:birch_crate",
		"applecrates:spruce_crate",
		"applecrates:acacia_crate",
		"applecrates:jungle_crate",
		"applecrates:dark_oak_crate",
		"applecrates:crimson_crate",
		"applecrates:warped_crate"
	);

	//MARK:  Cheese Tags for Quests
	event.add(
		"cw:unripe_cheese_wheels",
		"brewinandchewin:unripe_flaxen_cheese_wheel",
		"brewinandchewin:unripe_scarlet_cheese_wheel"
	);

	//MARK:  Scythe/Reaping Tool Tagging
	event.add(
		"cw:scythe",
		"reaping:diamond_reaping_tool",
		"reaping:gold_reaping_tool",
		"reaping:iron_reaping_tool",
		"reaping:netherite_reaping_tool"
	);

	//MARK:  Magnum Torch Tagging
	event.add(
		"cw:magnum_torches",
		"magnumtorch:diamond_magnum_torch",
		"magnumtorch:emerald_magnum_torch",
		"magnumtorch:amethyst_magnum_torch"
	);

	//MARK:  Inventory Managers
	event.add("cw:inventory_controllers", "sophisticatedstorage:controller");

	//MARK:  Inventory Upgrades
	event.add(
		"cw:inventory_upgrades",
		"sophisticatedstorage:auto_smelting_upgrade",
		"sophisticatedstorage:auto_smoking_upgrade",
		"sophisticatedstorage:auto_blasting_upgrade",
		"sophisticatedstorage:smelting_upgrade",
		"sophisticatedstorage:smoking_upgrade",
		"sophisticatedstorage:blasting_upgrade"
	);

	//MARK:  Accessory Boosters
	event.add(
		"cw:accessory_boosters",
		"majruszsaccessories:owl_feather",
		"majruszsaccessories:golden_dice",
		"majruszsaccessories:dice",
		"majruszsaccessories:horseshoe",
		"majruszsaccessories:golden_horseshoe"
	);

	//MARK:  Stack Upgrades
	event.add(
		"cw:stack_upgrades",
		"sophisticatedstorage:stack_upgrade_tier_1",
		"sophisticatedstorage:stack_upgrade_tier_2",
		"sophisticatedstorage:stack_upgrade_tier_3",
		"sophisticatedstorage:stack_upgrade_tier_4"
	);

	//MARK:  Bison Patties
	event.add("cw:cooked_beef", "alexsdelight:bison_patty");

	//MARK:  Teeth
	event.add(
		"cw:teeth",
		"alexsmobs:shark_tooth",
		"alexsmobs:bone_serpent_tooth",
		"alexsmobs:cachalot_whale_tooth",
		"alexsmobs:serrated_shark_tooth"
	);

	//MARK:  Glass Casings
	event.add(
		"cw:glass_casings",
		"create_crystal_clear:andesite_glass_casing",
		"create_crystal_clear:brass_glass_casing",
		"create_crystal_clear:copper_glass_casing",
		"create_crystal_clear:train_glass_casing",
		"create_crystal_clear:andesite_clear_glass_casing",
		"create_crystal_clear:brass_clear_glass_casing",
		"create_crystal_clear:copper_clear_glass_casing",
		"create_crystal_clear:train_clear_glass_casing"
	);

	//MARK:  Umbrellas
	event.add(
		"cw:umbrellas",
		"davespotioneering:cyan_umbrella",
		"davespotioneering:purple_umbrella",
		"davespotioneering:blue_umbrella",
		"davespotioneering:brown_umbrella",
		"davespotioneering:green_umbrella",
		"davespotioneering:red_umbrella",
		"davespotioneering:black_umbrella",
		"davespotioneering:gilded_umbrella",
		"davespotioneering:aged_umbrella",
		"davespotioneering:orange_umbrella",
		"davespotioneering:white_umbrella",
		"davespotioneering:lime_umbrella",
		"davespotioneering:yellow_umbrella",
		"davespotioneering:light_blue_umbrella",
		"davespotioneering:magenta_umbrella",
		"davespotioneering:pink_umbrella",
		"davespotioneering:gray_umbrella",
		"davespotioneering:light_gray_umbrella"
	);

	//MARK:  Fishing Rod Tags
	event.add(
		"cw:fishing_rods",
		"better_fishing_rods:slimy_fishing_rod",
		"better_fishing_rods:wheaty_fishing_rod",
		"better_fishing_rods:coraly_fishing_rod",
		"better_fishing_rods:villager_fishing_rod",
		"better_fishing_rods:golden_fishing_rod",
		"better_fishing_rods:meaty_fishing_rod",
		"better_fishing_rods:orely_fishing_rod",
		"minecraft:fishing_rod"
	);

	//MARK:  Slice And Dice Allowed Tools Tag
	event.add(
		"sliceanddice:allowed_tools",
		"extradelight:grater",
		"#forge:tools/pickaxes",
		"#forge:tools/shovels",
		"#forge:tools/hoes",
		"#forge:shears",
		"minecraft:nether_star"
	);

	//MARK:  Sleeping Bags
	event.add(
		"cw:sleeping_bags",
		"comforts:sleeping_bag_purple",
		"comforts:sleeping_bag_blue",
		"comforts:sleeping_bag_brown",
		"comforts:sleeping_bag_green",
		"comforts:sleeping_bag_red",
		"comforts:sleeping_bag_black",
		"comforts:sleeping_bag_white",
		"comforts:sleeping_bag_orange",
		"comforts:sleeping_bag_magenta",
		"comforts:sleeping_bag_light_blue",
		"comforts:sleeping_bag_yellow",
		"comforts:sleeping_bag_lime",
		"comforts:sleeping_bag_pink",
		"comforts:sleeping_bag_gray",
		"comforts:sleeping_bag_light_gray",
		"comforts:sleeping_bag_cyan"
	);

	//MARK:  Walnuts
	event.add("cw:nuts", "caupona:walnut");
	event.add("cw:nuts/walnut", "caupona:walnut");
	event.add("caupona:walnut", "ecologics:walnut");

	//MARK:  Figs
	event.add("cw:fruits", "caupona:fig");

	//MARK:  Green Apples
	event.add(
		"cw:fruits/sweet",
		"byg:green_apple",
		"caupona:fig",
		"caupona:wolfberries",
		"twilightforest:torchberries",
		"ars_nouveau:source_berry"
	);

	//MARK:  Glowstick Ingredients
	event.add(
		"cw:glowstickingredients",
		"minecraft:glow_berries",
		"minecraft:glow_ink_sac",
		"spelunkery:phosphor_fungus",
		"spelunkery:mushgloom",
		"extendedmushrooms:glowshroom",
		"twilightforest:torchberries"
	);

	//MARK:  BYG Sand Tags
	event.add("c:sand/purple", "byg:purple_sand");
	event.add("c:sand/pink", "byg:pink_sand");
	event.add("c:sand/blue", "byg:blue_sand");
	event.add("c:sand/white", "byg:white_sand");
	event.add("c:sand/black", "byg:black_sand");

	//MARK:  Duck Tag
	event.add("cw:raw_duck", "duckling:raw_duck");

	//MARK:  Cart Tags'
	event.add("cw:carts", "astikorcarts:supply_cart", "astikorcarts:animal_cart");

	//MARK:  Frying Pan Tags
	event.add(
		"cw:cookingpans",
		"caupona:stone_griddle",
		"caupona:copper_frying_pan",
		"caupona:iron_frying_pan"
	);

	//MARK:  Dolium Tagging
	event.add(
		"cw:dolium",
		"caupona:opus_incertum_counter_with_dolium",
		"caupona:opus_latericium_counter_with_dolium",
		"caupona:mud_counter_with_dolium",
		"caupona:stone_brick_counter_with_dolium"
	);

	//MARK:  Alliums are Onions
	event.add("cw:vegetables/onion", "minecraft:allium", "byg:pink_allium");

	//MARK:  Caupona Tagging
	event.add(
		"pona:mushroom",
		"spelunkery:button_mushroom",
		"collectorsreap:portobello",
		"spelunkery:portabella",
		"spelunkery:crimini",
		"byg:white_puffball_cap",
		"byg:cooked_white_puffball_cap",
		"environmental:truffle"
	);

	//MARK:  Mushrooms
	event.add(
		"cw:mushroom",
		"spelunkery:button_mushroom",
		"collectorsreap:portobello",
		"spelunkery:portabella",
		"spelunkery:crimini",
		"byg:white_puffball_cap",
		"byg:cooked_white_puffball_cap",
		"environmental:truffle"
	);

	//MARK:  Caupona Meats
	event.add(
		"pona:meats",
		"alexsdelight:kangaroo_shank",
		"twilightforest:cooked_meef",
		"twilightforest:raw_meef",
		"delightful:venison_chops",
		"delightful:cooked_venison_chops",
		"delightful:raw_goat",
		"delightful:cooked_goat",
		"twilightforest:cooked_venison",
		"twilightforest:raw_venison",
		"alexsmobs:cooked_kangaroo_meat",
		"alexsmobs:kangaroo_meat",
		"alexsmobs:cooked_moose_ribs",
		"alexsmobs:moose_ribs",
		"alexsdelight:bison_patty",
		"alexsdelight:cooked_bison",
		"alexsdelight:raw_bison",
		"alexsdelight:bison_mince",
		"alexsdelight:cooked_loose_moose_rib",
		"alexsdelight:loose_moose_rib",
		"alexsdelight:cooked_kangaroo_shank",
		"nethersdelight:ground_strider",
		"ends_delight:raw_dragon_meat_cuts",
		"ends_delight:raw_dragon_meat",
		"ends_delight:raw_ender_mite_meat",
		"ends_delight:dragon_leg",
		"nethersdelight:strider_slice",
		"environmental:venison",
		"abnormals_delight:venison_shanks"
	);

	event.add(
		"pona:meats/meat",
		"alexsdelight:kangaroo_shank",
		"twilightforest:cooked_meef",
		"twilightforest:raw_meef",
		"delightful:venison_chops",
		"delightful:cooked_venison_chops",
		"delightful:raw_goat",
		"delightful:cooked_goat",
		"twilightforest:cooked_venison",
		"twilightforest:raw_venison",
		"alexsmobs:cooked_kangaroo_meat",
		"alexsmobs:kangaroo_meat",
		"alexsmobs:cooked_moose_ribs",
		"alexsmobs:moose_ribs",
		"alexsdelight:bison_patty",
		"alexsdelight:cooked_bison",
		"alexsdelight:raw_bison",
		"alexsdelight:bison_mince",
		"alexsdelight:cooked_loose_moose_rib",
		"alexsdelight:loose_moose_rib",
		"alexsdelight:cooked_kangaroo_shank",
		"nethersdelight:ground_strider",
		"ends_delight:raw_dragon_meat_cuts",
		"ends_delight:raw_dragon_meat",
		"ends_delight:raw_ender_mite_meat",
		"ends_delight:dragon_leg",
		"nethersdelight:strider_slice",
		"environmental:venison",
		"abnormals_delight:venison_shanks"
	);

	event.add(
		"pona:meats/poultry",
		"duckling:cooked_duck",
		"duckling:raw_duck",
		"alexsdelight:cooked_bunfungus",
		"alexsdelight:raw_bunfungus",
		"alexsdelight:cooked_bunfungus_drumstick",
		"alexsdelight:raw_bunfungus_drumstick",
		"farmersdelight:chicken_cuts",
		"abnormals_delight:duck_fillet",
		"environmental:duck",
		"environmental:cooked_duck"
	);

	event.add("cw:cooked_duck", "duckling:cooked_duck");

	event.add(
		"pona:meats",
		"duckling:cooked_duck",
		"duckling:raw_duck",
		"alexsdelight:cooked_bunfungus",
		"alexsdelight:raw_bunfungus",
		"alexsdelight:cooked_bunfungus_drumstick",
		"alexsdelight:raw_bunfungus_drumstick",
		"farmersdelight:chicken_cuts",
		"abnormals_delight:duck_fillet",
		"environmental:duck",
		"environmental:cooked_duck"
	);

	event.add(
		"pona:seafood/fish",
		"alexsmobs:raw_catfish",
		"alexsmobs:cooked_catfish",
		"alexsdelight:cooked_catfish_slice",
		"alexsdelight:raw_catfish_slice",
		"netherdepthsupgrade:soulsucker_slice",
		"netherdepthsupgrade:glowdine_slice",
		"netherdepthsupgrade:magmacubefish_slice",
		"netherdepthsupgrade:blazefish_slice",
		"netherdepthsupgrade:searing_cod_slice",
		"netherdepthsupgrade:obsidianfish_slice",
		"netherdepthsupgrade:lava_pufferfish_slice"
	);

	event.add(
		"minecraft:fishes",
		"alexsmobs:raw_catfish",
		"alexsmobs:cooked_catfish",
		"alexsdelight:cooked_catfish_slice",
		"alexsdelight:raw_catfish_slice",
		"netherdepthsupgrade:soulsucker_slice",
		"netherdepthsupgrade:glowdine_slice",
		"netherdepthsupgrade:magmacubefish_slice",
		"netherdepthsupgrade:blazefish_slice",
		"netherdepthsupgrade:searing_cod_slice",
		"netherdepthsupgrade:obsidianfish_slice",
		"netherdepthsupgrade:lava_pufferfish_slice"
	);

	event.add(
		"pona:seafood",
		"quark:crab_leg",
		"quark:cooked_crab_leg",
		"alexsmobs:lobster_tail",
		"alexsmobs:cooked_lobster_tail",
		"ecologics:crab_meat",
		"culturaldelights:squid",
		"culturaldelights:raw_calamari",
		"culturaldelights:glow_squid",
		"ends_delight:shulker_meat_slice",
		"ends_delight:shulker_meat"
	);

	event.add(
		"cw:seafood",
		"quark:crab_leg",
		"quark:cooked_crab_leg",
		"alexsmobs:lobster_tail",
		"alexsmobs:cooked_lobster_tail",
		"ecologics:crab_meat",
		"culturaldelights:squid",
		"culturaldelights:raw_calamari",
		"culturaldelights:glow_squid",
		"ends_delight:shulker_meat_slice",
		"ends_delight:shulker_meat"
	);

	event.add(
		"pona:eggs",
		"duckling:duck_egg",
		"alexsmobs:terrapin_egg",
		"cnb:lizard_egg",
		"quark:egg_parrot_red_blue",
		"quark:egg_parrot_blue",
		"alexsmobs:emu_egg",
		"quark:egg_parrot_green",
		"quark:egg_parrot_yellow_blue",
		"alexsmobs:crocodile_egg",
		"quark:egg_parrot_grey",
		"environmental:duck_egg"
	);

	event.add(
		"pona:cereals",
		"create:dough",
		"culturaldelights:corn_dough",
		"create:wheat_flour",
		"culturaldelights:tortilla"
	);

	event.add("pona:cereals/baked", "culturaldelights:tortilla");

	//MARK:  Squid
	event.add(
		"cw:squid",
		"culturaldelights:squid",
		"culturaldelights:cooked_squid",
		"culturaldelights:glow_squid",
		"miners_delight:squid",
		"miners_delight:glow_squid",
		"miners_delight:baked_squid"
	);

	//MARK:  Reinforced Deepslate
	event.add("cw:relocation_not_supported", "minecraft:reinforced_deepslate");

	//MARK:  String
	event.add("cw:string", "crittersandcompanions:silk");

	//MARK:  Majrusz's Accessories
	event.add(
		"cw:maj_acs",
		"majruszsaccessories:certificate_of_taming",
		"majruszsaccessories:idol_of_fertility",
		"majruszsaccessories:lucky_rock",
		"majruszsaccessories:tamed_potato_beetle",
		"majruszsaccessories:angler_trophy",
		"majruszsaccessories:discount_voucher",
		"majruszsaccessories:dream_catcher",
		"majruszsaccessories:metal_lure",
		"majruszsaccessories:miner_guide",
		"majruszsaccessories:adventurer_kit",
		"majruszsaccessories:tool_scraps",
		"majruszsaccessories:unbreakable_fishing_line",
		"majruszsaccessories:adventurer_rune",
		"majruszsaccessories:angler_rune",
		"majruszsaccessories:household_rune",
		"majruszsaccessories:miner_rune",
		"majruszsaccessories:nature_rune",
		"majruszsaccessories:soul_of_minecraft",
		"majruszsaccessories:secret_ingredient",
		"majruszsaccessories:swimmer_guide"
	);

	//MARK:  Majruzs's Boosters
	event.add(
		"cw:maj_boosters",
		"majruszsaccessories:onyx",
		"majruszsaccessories:dice",
		"majruszsaccessories:owl_feather",
		"majruszsaccessories:golden_dice",
		"majruszsaccessories:golden_horseshoe",
		"majruszsaccessories:horseshoe"
	);

	//MARK:  Majruzs's Cards
	event.add(
		"cw:maj_cards",
		"majruszsaccessories:gambling_card",
		"majruszsaccessories:removal_card",
		"majruszsaccessories:reverse_card"
	);

	//MARK:  Aquaculture Tags
	//MARK:  Fishing Rods
	event.add(
		"cw:fishing_rods",
		"aquaculture:iron_fishing_rod",
		"aquaculture:gold_fishing_rod",
		"aquaculture:diamond_fishing_rod"
	);

	//MARK:  Upgraded Hooks
	event.add(
		"cw:upgraded_hooks",
		"aquaculture:nether_star_hook",
		"aquaculture:double_hook",
		"aquaculture:diamond_hook",
		"aquaculture:gold_hook"
	);

	//MARK:  Niche
	event.add(
		"cw:niche_hooks",
		"aquaculture:note_hook",
		"aquaculture:redstone_hook",
		"aquaculture:heavy_hook",
		"aquaculture:light_hook"
	);

	//MARK:  Sophisticated Backpack Tags
	//MARK:  Utility Upgrades
	event.add(
		"cw:sophb_utility",
		"sophisticatedbackpacks:auto_blasting_upgrade",
		"sophisticatedbackpacks:auto_smelting_upgrade",
		"sophisticatedbackpacks:auto_smoking_upgrade",
		"sophisticatedbackpacks:smoking_upgrade",
		"sophisticatedbackpacks:smelting_upgrade",
		"sophisticatedbackpacks:blasting_upgrade",
		"sophisticatedbackpacks:crafting_upgrade",
		"sophisticatedbackpacks:anvil_upgrade"
	);

	//MARK:  Inventory Management Upgrades
	event.add(
		"cw:sophb_inventory",
		"sophisticatedbackpacks:advanced_compacting_upgrade",
		"sophisticatedbackpacks:compacting_upgrade",
		"sophisticatedbackpacks:stack_upgrade_tier_1",
		"sophisticatedbackpacks:stack_upgrade_starter_tier"
	);

	//MARK:  Quick Access Upgrades
	event.add(
		"cw:sophb_quick",
		"sophisticatedbackpacks:advanced_feeding_upgrade",
		"sophisticatedbackpacks:advanced_restock_upgrade",
		"sophisticatedbackpacks:advanced_refill_upgrade",
		"sophisticatedbackpacks:advanced_tool_swapper_upgrade",
		"sophisticatedbackpacks:tool_swapper_upgrade",
		"sophisticatedbackpacks:refill_upgrade",
		"sophisticatedbackpacks:restock_upgrade",
		"sophisticatedbackpacks:feeding_upgrade"
	);

	//MARK:  Environmental Upgrade
	event.add(
		"cw:sophb_environmental",
		"sophisticatedbackpacks:jukebox_upgrade",
		"sophisticatedbackpacks:magnet_upgrade",
		"sophisticatedbackpacks:pickup_upgrade",
		"sophisticatedbackpacks:advanced_pickup_upgrade",
		"sophisticatedbackpacks:advanced_magnet_upgrade"
	);

	//MARK:  Exp Fluid Upgrades
	event.add(
		"cw:sophb_fluid",
		"sophisticatedbackpacks:tank_upgrade",
		"sophisticatedbackpacks:xp_pump_upgrade"
	);

	//MARK:  Azalea Saplings
	event.add(
		"cw:saplings",
		"colorfulazaleas:orange_azalea_sapling",
		"colorfulazaleas:yellow_azalea_sapling",
		"colorfulazaleas:red_azalea_sapling",
		"colorfulazaleas:blue_azalea_sapling",
		"colorfulazaleas:pink_azalea_sapling",
		"colorfulazaleas:purple_azalea_sapling",
		"colorfulazaleas:white_azalea_sapling"
	);

	//MARK:  Wind Chimes
	event.add(
		"cw:wind_chimes",
		"chimes:bamboo_chimes",
		"chimes:iron_chimes",
		"chimes:carved_bamboo_chimes",
		"chimes:copper_chimes",
		"chimes:amethyst_chimes"
	);

	//MARK:  Aquaculture Fish
	event.add(
		"cw:aquafish",
		"aquaculture:arapaima",
		"aquaculture:atlantic_cod",
		"aquaculture:atlantic_halibut",
		"aquaculture:atlantic_herring",
		"aquaculture:bayad",
		"aquaculture:blackfish",
		"aquaculture:bluegill",
		"aquaculture:boulti",
		"aquaculture:brown_shrooma",
		"aquaculture:brown_trout",
		"aquaculture:capitaine",
		"aquaculture:carp",
		"aquaculture:catfish",
		"aquaculture:gar",
		"aquaculture:jellyfish",
		"aquaculture:minnow",
		"aquaculture:muskellunge",
		"aquaculture:pacific_halibut",
		"aquaculture:perch",
		"aquaculture:pink_salmon",
		"aquaculture:piranha",
		"aquaculture:pollock",
		"aquaculture:rainbow_trout",
		"aquaculture:red_grouper",
		"aquaculture:red_shrooma",
		"aquaculture:smallmouth_bass",
		"aquaculture:synodontis",
		"aquaculture:tambaqui",
		"aquaculture:tuna"
	);

	//MARK:  Refined Storage Controllers/Lodestones
	event.add(
		"cw:creative_controller",
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
	);

	//MARK:  Coal Ores
	event.add(
		"cw:ores/coal",
		"spelunkery:granite_coal_ore",
		"spelunkery:andesite_coal_ore",
		"spelunkery:diorite_coal_ore",
		"spelunkery:tuff_coal_ore"
	);

	///MARK:  Simple Hat Bags
	event.add(
		"cw:hatbags",
		"simplehats:hatbag_common",
		"simplehats:hatbag_uncommon",
		"simplehats:hatbag_rare",
		"simplehats:hatbag_epic",
		"simplehats:hatbag_easter",
		"simplehats:hatbag_summer",
		"simplehats:hatbag_halloween",
		"simplehats:hatbag_festive"
	);

	event.add(
		"cw:hatscraps",
		"simplehats:hatscraps_common",
		"simplehats:hatscraps_uncommon",
		"simplehats:hatscraps_rare",
		"simplehats:hatscraps_easter",
		"simplehats:hatscraps_summer",
		"simplehats:hatscraps_halloween",
		"simplehats:hatscraps_festive"
	);

	event.add("minecraft:small_flowers", "sprout:yellow_lily_of_the_valley");

	event.add(
		"cw:overworld_vines",
		"minecraft:vine",
		"hexerei:willow_vines",
		"byg:skyris_vine",
		"swampier_swamps:swamp_vine"
	);

	event.add(
		"cw:moon_certificates",
		"kubejs:pink_moon",
		"kubejs:flower_moon",
		"kubejs:strawberry_moon",
		"kubejs:antler_moon",
		"kubejs:harvest_moon",
		"kubejs:corn_moon",
		"kubejs:oak_moon",
		"kubejs:hunter_moon",
		"kubejs:wolf_moon",
		"kubejs:frost_moon",
		"kubejs:snow_moon",
		"kubejs:worm_moon",
		"kubejs:black_moon"
	);

	//MARK: Sea Crystals
	event.add(
		"cw:sea_crystals",
		"mermod:sea_crystal",
		"mermod:deep_sea_crystal_modifier",
		"minecraft:prismarine_crystals"
	);

	//MARK: Terrestrial Crystals
	event.add(
		"cw:terrestrial_crystals",
		"byg:subzero_crystal_shard",
		"byg:therium_crystal_shard",
		"deeperdarker:soul_crystal",
		"experienceobelisk:cognitive_crystal",
		"minecraft:amethyst_shard"
	);

	//MARK:  colorful azalea item tag fixes. These seem to automatically add mising block tags.
	const woods = [
		"tecal_azalea",
		"fiss_azalea",
		"roze_azalea",
		"azule_azalea",
		"bright_azalea",
		"walnut_azalea",
		"titanium_azalea",
	];
	const namespace = "colorfulazaleas:";
	const tagsNeeded = [
		"byg:all/logs",
		"minecraft:logs_that_burn",
		"minecraft:logs",
		"byg:all/logs_that_burn",
		"caupona:fuel/woods",
		"minecraft:completes_find_tree_tutorial",
	];

	let addToTag = (tagList, item) => {
		for (const tag of tagList) {
			event.add(tag, item);
		}
	};

	for (const woodtype of woods) {
		let log = namespace + woodtype + "_log";
		let wood = namespace + woodtype + "_wood";
		let strippedLog = namespace + "stripped_" + woodtype + "_log";
		let strippedWood = namespace + "stripped_" + woodtype + "_wood";

		addToTag(tagsNeeded, log);
		addToTag(tagsNeeded, wood);
		addToTag(tagsNeeded, strippedLog);
		addToTag(tagsNeeded, strippedWood);
	}

	Ingredient.all.stacks.forEach((item) => {
		event.add("mod:" + item.id.split(":")[0], item.id);
		//foodstuffs
		if (item.item.edible) {
			event.add("cw:edible", item.id);

			if (item.item.foodProperties.meat) {
				event.add("cw:meaty", item.id);
			}
			if (item.getUseAnimation().name() == "EAT") {
				event.add("cw:foods", item.id);
			}
			if (item.getUseAnimation().name() == "DRINK") {
				event.add("cw:drinks", item.id);
			}
		}
		// fuels
		if (item.item.burnTime) {
			event.add("cw:fuels", item.id);
		}
		// rarity
		if (item.item.rarity || item.rarity) {
			event.add(`cw:rarity_${item.rarity.name().toLowerCase()}`, item.id);
		}
		//block stuff
		if (item.block) {
			let block = Block.getBlock(item.id);
			let state = block.defaultBlockState();

			if (state.getMaterial()) {
				let mat = state.getMaterial();
				if (mat.flammable) event.add(`cw:flammable`, item.id);
				if (mat.solid) event.add("cw:solid", item.id);
				if (!mat.blocksMotion()) event.add("cw:does_not_block_motion", item.id);
			}
			if (state.lightEmission) {
				event.add("cw:emits_light", item.id);
			}
			if (state.getProperties()) {
				state.getProperties().forEach((p) => {
					switch (p.name) {
						case "waterlogged":
							event.add("cw:waterloggable", item.id);
							break;
						case "powered":
							event.add("cw:powerable", item.id);
							break;
					}
				});
			}
		}
	});
});
