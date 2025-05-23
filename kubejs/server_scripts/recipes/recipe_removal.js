ServerEvents.recipes(event => {

	// All Recipe Removal
	let toRemove = [
		//Removed Recipes
		{ id: 'netherdepthsupgrade:eyeball' },
		{ id: 'netherdepthsupgrade:fortress_grouper_plate' },
		{ mod: 'mcsa' },
		{ mod: 'plushies' },
		{ output: 'alexsmobs:transmutation_table' },
		{ output: 'aquaculture:acacia_fish_mount' },
		{ output: 'aquaculture:birch_fish_mount' },
		{ output: 'aquaculture:dark_oak_fish_mount' },
		{ output: 'aquaculture:jungle_fish_mount' },
		{ output: 'aquaculture:oak_fish_mount' },
		{ output: 'aquaculture:spruce_fish_mount' },
		{ output: 'artifacts:eternal_steak' },
		{ output: 'artifacts:everlasting_beef' },
		{ output: 'artifacts:feral_claws' },
		{ output: 'artifacts:flippers' },
		{ output: 'artifacts:golden_hook' },
		{ output: 'artifacts:helium_flamingo' },
		{ output: 'artifacts:snorkel' },
		{ output: 'artifacts:umbrella' },
		{ output: 'backpacked:backpack' },
		{ output: 'buildinggadgets:gadget_building' },
		{ output: 'buildinggadgets:gadget_copy_paste' },
		{ output: 'buildinggadgets:gadget_destruction' },
		{ output: 'buildinggadgets:gadget_exchanging' },
		{ output: 'buildinggadgets:template_manager' },
		{ output: 'caupona:stock' },
		{ output: 'caupona:stock_aspic' },
		{ output: 'charginggadgets:charging_station' },
		{ output: 'comforts:sleeping_bag_black' },
		{ output: 'comforts:sleeping_bag_blue' },
		{ output: 'comforts:sleeping_bag_brown' },
		{ output: 'comforts:sleeping_bag_cyan' },
		{ output: 'comforts:sleeping_bag_gray' },
		{ output: 'comforts:sleeping_bag_green' },
		{ output: 'comforts:sleeping_bag_light_blue' },
		{ output: 'comforts:sleeping_bag_light_gray' },
		{ output: 'comforts:sleeping_bag_lime' },
		{ output: 'comforts:sleeping_bag_magenta' },
		{ output: 'comforts:sleeping_bag_orange' },
		{ output: 'comforts:sleeping_bag_pink' },
		{ output: 'comforts:sleeping_bag_purple' },
		{ output: 'comforts:sleeping_bag_red' },
		{ output: 'comforts:sleeping_bag_white' },
		{ output: 'comforts:sleeping_bag_yellow' },
		{ output: 'crittersandcompanions:diamond_dragonfly_armor' },
		{ output: 'crittersandcompanions:gold_dragonfly_armor' },
		{ output: 'crittersandcompanions:iron_dragonfly_armor' },
		{ output: 'crittersandcompanions:pearl_necklace_2' },
		{ output: 'crittersandcompanions:pearl_necklace_3' },
		{ output: 'deeperdarker:soul_elytra' },
		{ output: 'delightful:animal_fat' },
		{ output: 'delightful:animal_oil_bottle' },
		{ output: 'delightful:cheeseburger' },
		{ output: 'delightful:cooked_venison_chops' },
		{ output: 'delightful:deluxe_cheeseburger' },
		{ output: 'delightful:zinc_knife' },
		{ output: 'ends_delight:dragon_egg_shell_knife' },
		{ output: 'ends_delight:end_stone_knife' },
		{ output: 'ends_delight:purpur_knife' },
		{ output: 'enigmaticgraves:grave_finder' },
		{ output: 'environmental:cherries' },
		{ output: 'environmental:cherry_crate' },
		{ output: 'extradisks:256k_storage_block' },
		{ output: 'extradisks:1024k_storage_block' },
		{ output: 'extradisks:4096k_storage_block' },
		{ output: 'extradisks:16384k_fluid_storage_block' },
		{ output: 'extradisks:16384k_fluid_storage_disk' },
		{ output: 'extradisks:16384k_fluid_storage_part' },
		{ output: 'extradisks:16384k_storage_block' },
		{ output: 'extradisks:65536k_fluid_storage_block' },
		{ output: 'extradisks:65536k_fluid_storage_disk' },
		{ output: 'extradisks:65536k_fluid_storage_part' },
		{ output: 'extradisks:65536k_storage_block' },
		{ output: 'extradisks:262144k_fluid_storage_block' },
		{ output: 'extradisks:262144k_fluid_storage_disk' },
		{ output: 'extradisks:262144k_fluid_storage_part' },
		{ output: 'extradisks:262144k_storage_block' },
		{ output: 'extradisks:1048576k_fluid_storage_block' },
		{ output: 'extradisks:1048576k_fluid_storage_disk' },
		{ output: 'extradisks:1048576k_fluid_storage_part' },
		{ output: 'extradisks:1048576k_storage_block' },
		{ output: 'extradisks:infinite_fluid_storage_block' },
		{ output: 'extradisks:infinite_fluid_storage_disk' },
		{ output: 'extradisks:infinite_fluid_storage_part' },
		{ output: 'extradisks:infinite_storage_block' },
		{ output: 'farmersdelight:golden_knife' },
		{ output: 'farmersdelight:hamburger' },
		{ output: 'farmersdelight:organic_compost' },
		{ output: 'farmingforblockheads:feeding_trough' },
		{ output: 'ftbquests:barrier' },
		{ output: 'ftbquests:custom_icon' },
		{ output: 'ftbquests:detector' },
		{ output: 'ftbquests:loot_crate_opener' },
		{ output: 'ftbquests:missing_item' },
		{ output: 'ftbquests:screen_1' },
		{ output: 'ftbquests:screen_3' },
		{ output: 'ftbquests:screen_5' },
		{ output: 'ftbquests:screen_7' },
		{ output: 'ftbquests:stage_barrier' },
		{ output: 'functionalstorage:armory_cabinet' },
		{ output: 'gildedarmor:gilded_enderite_boots' },
		{ output: 'gildedarmor:gilded_enderite_chestplate' },
		{ output: 'gildedarmor:gilded_enderite_helmet' },
		{ output: 'gildedarmor:gilded_enderite_leggings' },
		{ output: 'hexerei:milk_bottle' },
		{ output: 'incubation:fried_egg' },
		{ output: 'itemfilters:always_false' },
		{ output: 'itemfilters:always_true' },
		{ output: 'itemfilters:and' },
		{ output: 'itemfilters:block' },
		{ output: 'itemfilters:custom' },
		{ output: 'itemfilters:damage' },
		{ output: 'itemfilters:id_regex' },
		{ output: 'itemfilters:item_group' },
		{ output: 'itemfilters:max_count' },
		{ output: 'itemfilters:mod' },
		{ output: 'itemfilters:not' },
		{ output: 'itemfilters:or' },
		{ output: 'itemfilters:strong_nbt' },
		{ output: 'itemfilters:tag' },
		{ output: 'itemfilters:weak_nbt' },
		{ output: 'itemfilters:xor' },
		{ output: 'luphieclutteredmod:luphie_sewing_table_clutter' },
		{ output: 'luphieclutteredmod:small_shelf' },
		{ output: 'mermod:moon_rock_modifier' },
		{ output: 'mermod:sea_crystal' },
		{ output: 'minecraft:coal' },
		{ output: 'minecraft:lodestone' },
		{ output: 'minecraft:milk_bucket' },
		{ output: 'minecraft:mushroom_stew' },
		{ output: 'miners_delight:sticky_basket' },
		{ output: 'naturescompass:naturescompass' },
		{ output: 'nethersdelight:blackstone_blast_furnace' },
		{ output: 'pipez:energy_pipe' },
		{ output: 'pipez:fluid_pipe' },
		{ output: 'pipez:gas_pipe' },
		{ output: 'pipez:item_pipe' },
		{ output: 'pipez:universal_pipe' },
		{ output: 'prefab:block_boundary' },
		{ output: 'prefab:item_bunch_of_beets' },
		{ output: 'prefab:item_bunch_of_carrots' },
		{ output: 'prefab:item_bunch_of_potatoes' },
		{ output: 'prefab:item_clutch_of_eggs' },
		{ output: 'prefab:item_crate_of_beets' },
		{ output: 'prefab:item_crate_of_carrots' },
		{ output: 'prefab:item_crate_of_potatoes' },
		{ output: 'prefab:item_sickle_diamond' },
		{ output: 'prefab:item_sickle_gold' },
		{ output: 'prefab:item_sickle_iron' },
		{ output: 'prefab:item_sickle_netherite' },
		{ output: 'prefab:item_sickle_stone' },
		{ output: 'prefab:item_sickle_wood' },
		{ output: 'prefab:item_swift_blade_bronze' },
		{ output: 'prefab:item_swift_blade_copper' },
		{ output: 'prefab:item_swift_blade_diamond' },
		{ output: 'prefab:item_swift_blade_gold' },
		{ output: 'prefab:item_swift_blade_iron' },
		{ output: 'prefab:item_swift_blade_netherite' },
		{ output: 'prefab:item_swift_blade_obsidian' },
		{ output: 'prefab:item_swift_blade_osmium' },
		{ output: 'prefab:item_swift_blade_steel' },
		{ output: 'prefab:item_swift_blade_stone' },
		{ output: 'prefab:item_swift_blade_wood' },
		{ output: 'prefab:item_wooden_crate' },
		{ output: 'quark:beetroot_crate' },
		{ output: 'quark:carrot_crate' },
		{ output: 'quark:feeding_trough' },
		{ output: 'quark:potato_crate' },
		{ output: 'refinedstorage:1k_storage_block' },
		{ output: 'refinedstorage:1k_storage_disk' },
		{ output: 'refinedstorage:1k_storage_part' },
		{ output: 'refinedstorage:4k_storage_block' },
		{ output: 'refinedstorage:4k_storage_disk' },
		{ output: 'refinedstorage:16k_storage_block' },
		{ output: 'refinedstorage:16k_storage_disk' },
		{ output: 'refinedstorage:64k_fluid_storage_block' },
		{ output: 'refinedstorage:64k_fluid_storage_disk' },
		{ output: 'refinedstorage:64k_fluid_storage_part' },
		{ output: 'refinedstorage:64k_storage_block' },
		{ output: 'refinedstorage:64k_storage_disk' },
		{ output: 'refinedstorage:256k_fluid_storage_block' },
		{ output: 'refinedstorage:256k_fluid_storage_disk' },
		{ output: 'refinedstorage:256k_fluid_storage_part' },
		{ output: 'refinedstorage:1024k_fluid_storage_block' },
		{ output: 'refinedstorage:1024k_fluid_storage_disk' },
		{ output: 'refinedstorage:1024k_fluid_storage_part' },
		{ output: 'refinedstorage:4096k_fluid_storage_block' },
		{ output: 'refinedstorage:4096k_fluid_storage_disk' },
		{ output: 'refinedstorage:4096k_fluid_storage_part' },
		{ output: 'refinedstorage:black_controller' },
		{ output: 'refinedstorage:black_crafter' },
		{ output: 'refinedstorage:black_crafter_manager' },
		{ output: 'refinedstorage:black_crafting_monitor' },
		{ output: 'refinedstorage:black_fluid_grid' },
		{ output: 'refinedstorage:black_pattern_grid' },
		{ output: 'refinedstorage:blue_controller' },
		{ output: 'refinedstorage:blue_crafter' },
		{ output: 'refinedstorage:blue_crafter_manager' },
		{ output: 'refinedstorage:blue_crafting_monitor' },
		{ output: 'refinedstorage:blue_fluid_grid' },
		{ output: 'refinedstorage:blue_pattern_grid' },
		{ output: 'refinedstorage:brown_controller' },
		{ output: 'refinedstorage:brown_crafter' },
		{ output: 'refinedstorage:brown_crafter_manager' },
		{ output: 'refinedstorage:brown_crafting_monitor' },
		{ output: 'refinedstorage:brown_fluid_grid' },
		{ output: 'refinedstorage:brown_pattern_grid' },
		{ output: 'refinedstorage:cable' },
		{ output: 'refinedstorage:constructor' },
		{ output: 'refinedstorage:controller' },
		{ output: 'refinedstorage:crafter' },
		{ output: 'refinedstorage:crafter_manager' },
		{ output: 'refinedstorage:crafting_monitor' },
		{ output: 'refinedstorage:crafting_upgrade' },
		{ output: 'refinedstorage:creative_fluid_storage_block' },
		{ output: 'refinedstorage:creative_fluid_storage_disk' },
		{ output: 'refinedstorage:creative_portable_grid' },
		{ output: 'refinedstorage:creative_storage_block' },
		{ output: 'refinedstorage:creative_wireless_crafting_monitor' },
		{ output: 'refinedstorage:creative_wireless_fluid_grid' },
		{ output: 'refinedstorage:cyan_controller' },
		{ output: 'refinedstorage:cyan_crafter' },
		{ output: 'refinedstorage:cyan_crafter_manager' },
		{ output: 'refinedstorage:cyan_crafting_monitor' },
		{ output: 'refinedstorage:cyan_fluid_grid' },
		{ output: 'refinedstorage:cyan_pattern_grid' },
		{ output: 'refinedstorage:destructor' },
		{ output: 'refinedstorage:fluid_grid' },
		{ output: 'refinedstorage:fluid_interface' },
		{ output: 'refinedstorage:fortune_1_upgrade' },
		{ output: 'refinedstorage:fortune_2_upgrade' },
		{ output: 'refinedstorage:fortune_3_upgrade' },
		{ output: 'refinedstorage:gray_controller' },
		{ output: 'refinedstorage:gray_crafter' },
		{ output: 'refinedstorage:gray_crafter_manager' },
		{ output: 'refinedstorage:gray_crafting_monitor' },
		{ output: 'refinedstorage:gray_fluid_grid' },
		{ output: 'refinedstorage:gray_pattern_grid' },
		{ output: 'refinedstorage:green_controller' },
		{ output: 'refinedstorage:green_crafter' },
		{ output: 'refinedstorage:green_crafter_manager' },
		{ output: 'refinedstorage:green_crafting_monitor' },
		{ output: 'refinedstorage:green_fluid_grid' },
		{ output: 'refinedstorage:green_pattern_grid' },
		{ output: 'refinedstorage:light_gray_controller' },
		{ output: 'refinedstorage:light_gray_crafter' },
		{ output: 'refinedstorage:light_gray_crafter_manager' },
		{ output: 'refinedstorage:light_gray_crafting_monitor' },
		{ output: 'refinedstorage:light_gray_fluid_grid' },
		{ output: 'refinedstorage:light_gray_pattern_grid' },
		{ output: 'refinedstorage:lime_controller' },
		{ output: 'refinedstorage:lime_crafter' },
		{ output: 'refinedstorage:lime_crafter_manager' },
		{ output: 'refinedstorage:lime_crafting_monitor' },
		{ output: 'refinedstorage:lime_fluid_grid' },
		{ output: 'refinedstorage:lime_pattern_grid' },
		{ output: 'refinedstorage:magenta_controller' },
		{ output: 'refinedstorage:magenta_crafter' },
		{ output: 'refinedstorage:magenta_crafter_manager' },
		{ output: 'refinedstorage:magenta_crafting_monitor' },
		{ output: 'refinedstorage:magenta_fluid_grid' },
		{ output: 'refinedstorage:magenta_pattern_grid' },
		{ output: 'refinedstorage:network_receiver' },
		{ output: 'refinedstorage:network_transmitter' },
		{ output: 'refinedstorage:orange_controller' },
		{ output: 'refinedstorage:orange_crafter' },
		{ output: 'refinedstorage:orange_crafter_manager' },
		{ output: 'refinedstorage:orange_crafting_monitor' },
		{ output: 'refinedstorage:orange_fluid_grid' },
		{ output: 'refinedstorage:orange_pattern_grid' },
		{ output: 'refinedstorage:pattern' },
		{ output: 'refinedstorage:pattern_grid' },
		{ output: 'refinedstorage:pink_controller' },
		{ output: 'refinedstorage:pink_crafter' },
		{ output: 'refinedstorage:pink_crafter_manager' },
		{ output: 'refinedstorage:pink_crafting_monitor' },
		{ output: 'refinedstorage:pink_fluid_grid' },
		{ output: 'refinedstorage:pink_pattern_grid' },
		{ output: 'refinedstorage:portable_grid' },
		{ output: 'refinedstorage:purple_controller' },
		{ output: 'refinedstorage:purple_crafter' },
		{ output: 'refinedstorage:purple_crafter_manager' },
		{ output: 'refinedstorage:purple_crafting_monitor' },
		{ output: 'refinedstorage:purple_fluid_grid' },
		{ output: 'refinedstorage:purple_pattern_grid' },
		{ output: 'refinedstorage:quartz_enriched_iron' },
		{ output: 'refinedstorage:red_controller' },
		{ output: 'refinedstorage:red_crafter' },
		{ output: 'refinedstorage:red_crafter_manager' },
		{ output: 'refinedstorage:red_crafting_monitor' },
		{ output: 'refinedstorage:red_fluid_grid' },
		{ output: 'refinedstorage:red_pattern_grid' },
		{ output: 'refinedstorage:silk_touch_upgrade' },
		{ output: 'refinedstorage:storage_housing' },
		{ output: 'refinedstorage:storage_monitor' },
		{ output: 'refinedstorage:upgrade' },
		{ output: 'refinedstorage:white_controller' },
		{ output: 'refinedstorage:white_crafter' },
		{ output: 'refinedstorage:white_crafter_manager' },
		{ output: 'refinedstorage:white_crafting_monitor' },
		{ output: 'refinedstorage:white_fluid_grid' },
		{ output: 'refinedstorage:white_pattern_grid' },
		{ output: 'refinedstorage:wireless_crafting_monitor' },
		{ output: 'refinedstorage:wireless_fluid_grid' },
		{ output: 'refinedstorage:wireless_grid' },
		{ output: 'refinedstorage:yellow_controller' },
		{ output: 'refinedstorage:yellow_crafter' },
		{ output: 'refinedstorage:yellow_crafter_manager' },
		{ output: 'refinedstorage:yellow_crafting_monitor' },
		{ output: 'refinedstorage:yellow_fluid_grid' },
		{ output: 'refinedstorage:yellow_pattern_grid' },
		{ output: 'refinedstorageaddons:wireless_crafting_grid' },
		{ output: 'ring_of_enderchest:ring_of_enderchest' },
		{ output: 'rsinfinitybooster:dimension_card' },
		{ output: 'rsinfinitybooster:infinity_card' },
		{ output: 'sophisticatedbackpacks:advanced_deposit_upgrade' },
		{ output: 'sophisticatedbackpacks:advanced_pump_upgrade' },
		{ output: 'sophisticatedbackpacks:backpack' },
		{ output: 'sophisticatedbackpacks:battery_upgrade' },
		{ output: 'sophisticatedbackpacks:deposit_upgrade' },
		{ output: 'sophisticatedbackpacks:inception_upgrade' },
		{ output: 'sophisticatedbackpacks:pump_upgrade' },
		{ output: 'sophisticatedbackpacks:stack_upgrade_tier_2' },
		{ output: 'sophisticatedbackpacks:stack_upgrade_tier_3' },
		{ output: 'sophisticatedbackpacks:stack_upgrade_tier_4' },
		{ output: 'sophisticatedbackpacks:xp_pump_upgrade' },
		{ output: 'sophisticatedstorage:advanced_feeding_upgrade' },
		{ output: 'sophisticatedstorage:advanced_pump_upgrade' },
		{ output: 'sophisticatedstorage:copper_shulker_box' },
		{ output: 'sophisticatedstorage:debug_tool' },
		{ output: 'sophisticatedstorage:diamond_shulker_box' },
		{ output: 'sophisticatedstorage:feeding_upgrade' },
		{ output: 'sophisticatedstorage:gold_shulker_box' },
		{ output: 'sophisticatedstorage:iron_shulker_box' },
		{ output: 'sophisticatedstorage:jukebox_upgrade' },
		{ output: 'sophisticatedstorage:netherite_shulker_box' },
		{ output: 'sophisticatedstorage:pump_upgrade' },
		{ output: 'sophisticatedstorage:shulker_box' },
		{ output: 'sophisticatedstorage:xp_pump_upgrade' },
		{ output: 'spelunkery:coal_lump' },
		{ output: 'spelunkery:glowstick' },
		{ output: 'structure_gel:blue_gel' },
		{ output: 'structure_gel:building_tool' },
		{ output: 'structure_gel:cyan_gel' },
		{ output: 'structure_gel:data_handler' },
		{ output: 'structure_gel:dynamic_spawner' },
		{ output: 'structure_gel:green_gel' },
		{ output: 'structure_gel:orange_gel' },
		{ output: 'structure_gel:red_gel' },
		{ output: 'structure_gel:yellow_gel' },
		{ output: 'supplementaries:rope' },
		{ output: 'tarotcards:tarot_deck' },
		{ output: 'tiab:time_in_a_bottle' },
		{ output: 'twilightdelight:cooked_venison_rib' },
		{ output: 'twilightdelight:raw_venison_rib' },
		{ output: 'twilightforest:charm_of_keeping_1' },
		{ output: 'twilightforest:charm_of_keeping_2' },
		{ output: 'twilightforest:charm_of_keeping_3' },
		{ output: 'twilightforest:cooked_venison' },
		{ output: 'twilightforest:raw_venison' },
		{ output: 'alexsmobs:mimicream' },
		{ id: 'extradelight:chicken_patty'},
		{output: 'extradelight:fried_brains'},
		{output: 'extradelight:liver_onions'},
		{output: 'extradelight:sextuple_meat_treat'},
		{output: 'extradelight:oxtail_soup'},
		{output: 'extradelight:haggis_block_item'},
		{output: 'extradelight:haggis'},
		{id: 'hexerei:leather_from_drying_rack'},
		{id: 'create:crafting/tree_fertilizer'}, // this is the buggy recipe with the missing tag / barrier block
		{id: 'extradelight:vinegar_pot_potion'},// allows uncrafting into uncraftable potion, not much point anyways when you can just use a water bucket
		{id: 'extradelight:cactus_juice'},
		{id: 'culturaldelights:cutting/corn_kernels'},
		{id: 'culturaldelights:cutting/corn_kernels_using_deployer'},
		{id: 'refurbished_furniture:constructing/crimson_mail_box'},
		{id: 'refurbished_furniture:constructing/warped_mail_box'},
		{id: 'refurbished_furniture:constructing/mangrove_mail_box'},
		{id: 'refurbished_furniture:constructing/dark_oak_mail_box'},
		{id: 'refurbished_furniture:constructing/acacia_mail_box'},
		{id: 'refurbished_furniture:constructing/jungle_mail_box'},
		{id: 'refurbished_furniture:constructing/birch_mail_box'},
		{id: 'refurbished_furniture:constructing/spruce_mail_box'},
		{id: 'refurbished_furniture:constructing/oak_mail_box'},
		{id: 'refurbished_furniture:constructing/post_box'},
		{output: 'ars_instrumentum:numeric_mana_charm'},
		{id: 'create:milling/compat/botania/black_petal'}, // Removal of Botania compat causing removed tags to appear in JEI
		{id: 'create:milling/compat/botania/blue_petal'},
		{id: 'create:milling/compat/botania/brown_petal'},
		{id: 'create:milling/compat/botania/cyan_petal'},
		{id: 'create:milling/compat/botania/gray_petal'},
		{id: 'create:milling/compat/botania/green_petal'},
		{id: 'create:milling/compat/botania/light_blue_petal'},
		{id: 'create:milling/compat/botania/light_gray_petal'},
		{id: 'create:milling/compat/botania/lime_petal'},
		{id: 'create:milling/compat/botania/magenta_petal'},
		{id: 'create:milling/compat/botania/orange_petal'},
		{id: 'create:milling/compat/botania/pink_petal'},
		{id: 'create:milling/compat/botania/purple_petal'},
		{id: 'create:milling/compat/botania/red_petal'},
		{id: 'create:milling/compat/botania/white_petal'},
		{id: 'create:milling/compat/botania/yellow_petal'},
		{id: 'create:crushing/compat/byg/lignite_ore'}, //Removal of lignite compat with missing tag / barrier block
		{id: 'alexsmobs:hemolymph_blaster'}
	];

	for (const remove of toRemove) {
		event.remove(remove);
	}
})
