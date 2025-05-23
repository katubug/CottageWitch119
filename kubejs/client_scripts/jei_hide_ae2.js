JEIEvents.hideItems(event => {
    // Disabled Items Removal
    let toHide = [
        'ae2:matter_ball',
        'ae2:matter_cannon',
        'ae2:light_gray_lumen_paint_ball',
        'ae2:cyan_lumen_paint_ball',
        'ae2:purple_lumen_paint_ball',
        'ae2:blue_lumen_paint_ball',
        'ae2:brown_lumen_paint_ball',
        'ae2:green_lumen_paint_ball',
        'ae2:black_lumen_paint_ball',
        'ae2:red_lumen_paint_ball',
        'ae2:white_lumen_paint_ball',
        'ae2:orange_lumen_paint_ball',
        'ae2:magenta_lumen_paint_ball',
        'ae2:light_blue_lumen_paint_ball',
        'ae2:yellow_lumen_paint_ball',
        'ae2:lime_lumen_paint_ball',
        'ae2:pink_lumen_paint_ball',
        'ae2:gray_lumen_paint_ball',
        'ae2:logic_processor_press',
        'ae2:engineering_processor_press',
        'ae2:calculation_processor_press',
        'ae2:printed_logic_processor',
        'ae2:printed_engineering_processor',
        'ae2:printed_calculation_processor',
        'ae2:engineering_processor',
        'ae2:calculation_processor',
        'ae2:logic_processor',
        'ae2:silicon_press',
        'ae2:crafting_card',
        'ae2:spatial_cell_component_2',
        'ae2:spatial_cell_component_16',
        'ae2:spatial_cell_component_128',
        'ae2:spatial_storage_cell_2',
        'ae2:spatial_storage_cell_16',
        'ae2:spatial_storage_cell_128',
        'ae2:spatial_pylon',
        'ae2:spatial_anchor',
        'ae2:spatial_io_port',
        'ae2:pattern_provider',
        'ae2:cable_pattern_provider',
        'ae2:1k_crafting_storage',
        'ae2:4k_crafting_storage',
        'ae2:16k_crafting_storage',
        'ae2:64k_crafting_storage',
        'ae2:256k_crafting_storage',
        'ae2:crafting_monitor',
        'ae2:molecular_assembler',
        'ae2:energy_acceptor',
        'ae2:energy_cell',
        'ae2:dense_energy_cell',
        'ae2:energy_level_emitter',
        'ae2:cable_energy_acceptor',
        'ae2:fe_p2p_tunnel',
        'ae2:pattern_access_terminal',
        'ae2:not_so_mysterious_cube',
        'ae2:condenser',
        'ae2:crafting_accelerator',
        'ae2:silicon',
        'ae2:printed_silicon',
        'ae2:crafting_unit',
        'ae2:charger',
        'ae2:blank_pattern',
        'ae2:growth_accelerator',
        'ae2:inscriber',
        'ae2:name_press',
        'ae2:pattern_encoding_terminal',
        'ae2:sky_stone_chest', 
        'ae2:smooth_sky_stone_chest', 
        'ae2:mysterious_cube',
        'ae2:vibration_chamber',
        'ae2:memory_card_white',
        'ae2:memory_card_orange',
        'ae2:memory_card_magenta',
        'ae2:memory_card_light_blue',
        'ae2:memory_card_yellow',
        'ae2:memory_card_lime',
        'ae2:memory_card_pink',
        'ae2:memory_card_gray',
        'ae2:memory_card_light_gray',
        'ae2:memory_card_cyan',
        'ae2:memory_card_purple',
        'ae2:memory_card_blue',
        'ae2:memory_card_brown',
        'ae2:memory_card_green',
        'ae2:memory_card_red',
        'ae2:memory_card_black',
        //'ae2:memory_card',
        'ae2:white_paint_ball',
        'ae2:orange_paint_ball',
        'ae2:magenta_paint_ball',
        'ae2:blue_paint_ball',
        'ae2:purple_paint_ball',
        'ae2:cyan_paint_ball',
        'ae2:light_gray_paint_ball',
        'ae2:gray_paint_ball',
        'ae2:pink_paint_ball',
        'ae2:lime_paint_ball',
        'ae2:yellow_paint_ball',
        'ae2:light_blue_paint_ball',
        'ae2:brown_paint_ball',
        'ae2:green_paint_ball',
        'ae2:red_paint_ball',
        'ae2:black_paint_ball',
        'ae2:guide',
        'ae2:purple_smart_dense_cable',
        'ae2:blue_smart_dense_cable',
        'ae2:brown_smart_dense_cable',
        'ae2:green_smart_dense_cable',
        'ae2:red_smart_dense_cable',
        'ae2:black_smart_dense_cable',
        'ae2:fluix_smart_dense_cable',
        'ae2:orange_smart_dense_cable',
        'ae2:magenta_smart_dense_cable',
        'ae2:light_blue_smart_dense_cable',
        'ae2:yellow_smart_dense_cable',
        'ae2:lime_smart_dense_cable',
        'ae2:pink_smart_dense_cable',
        'ae2:gray_smart_dense_cable',
        'ae2:light_gray_smart_dense_cable',
        'ae2:cyan_smart_dense_cable',
        'ae2:white_smart_dense_cable',
        'ae2:fluix_covered_dense_cable',
        'ae2:black_covered_dense_cable',
        'ae2:red_covered_dense_cable',
        'ae2:green_covered_dense_cable',
        'ae2:brown_covered_dense_cable',
        'ae2:blue_covered_dense_cable',
        'ae2:purple_covered_dense_cable',
        'ae2:cyan_covered_dense_cable',
        'ae2:white_covered_dense_cable',
        'ae2:orange_covered_dense_cable',
        'ae2:magenta_covered_dense_cable',
        'ae2:light_blue_covered_dense_cable',
        'ae2:yellow_covered_dense_cable',
        'ae2:lime_covered_dense_cable',
        'ae2:pink_covered_dense_cable',
        'ae2:gray_covered_dense_cable',
        'ae2:light_gray_covered_dense_cable',
        'ae2:white_glass_cable',
        'ae2:orange_glass_cable',
        'ae2:magenta_glass_cable',
        'ae2:light_blue_glass_cable',
        'ae2:yellow_glass_cable',
        'ae2:lime_glass_cable',
        'ae2:pink_glass_cable',
        'ae2:gray_glass_cable',
        'ae2:fluix_glass_cable',
        'ae2:black_glass_cable',
        'ae2:red_glass_cable',
        'ae2:green_glass_cable',
        'ae2:brown_glass_cable',
        'ae2:blue_glass_cable',
        'ae2:purple_glass_cable',
        'ae2:cyan_glass_cable',
        'ae2:light_gray_glass_cable',
        'ae2:fluix_smart_cable',
        'ae2:black_smart_cable',
        'ae2:pink_smart_cable',
        'ae2:gray_smart_cable',
        'ae2:light_gray_smart_cable',
        'ae2:cyan_smart_cable',
        'ae2:purple_smart_cable',
        'ae2:blue_smart_cable',
        'ae2:brown_smart_cable',
        'ae2:green_smart_cable',
        'ae2:red_smart_cable',
        'ae2:lime_smart_cable',
        'ae2:yellow_smart_cable',
        'ae2:light_blue_smart_cable',
        'ae2:magenta_smart_cable',
        'ae2:orange_smart_cable',
        'ae2:white_smart_cable',
        'ae2wtlib:wireless_pattern_encoding_terminal', 
        'ae2wtlib:wireless_pattern_access_terminal',
        'ae2:meteorite_compass',
        'ae2:charged_staff',
        'ae2:color_applicator',
        'ae2:entropy_manipulator',
        'ae2:certus_quartz_axe',
        'ae2:certus_quartz_hoe',
        'ae2:certus_quartz_shovel',
        'ae2:nether_quartz_sword',
        'ae2:nether_quartz_pickaxe',
        'ae2:nether_quartz_shovel',
        'ae2:nether_quartz_hoe',
        'ae2:nether_quartz_axe',
        'ae2:certus_quartz_sword',
        'ae2:certus_quartz_pickaxe',
        'ae2:nether_quartz_cutting_knife',
        'ae2wtlib:magnet_card',
        'ae2:controller',
        'ae2:crank',
        'ae2:wireless_terminal',
        //'arseng:portable_source_cell_1k',
        //'arseng:portable_source_cell_4k',
        //'arseng:portable_source_cell_16k',
        //'arseng:portable_source_cell_64k', 
        //'arseng:portable_source_cell_256k'
        
    ];
    
    for (const hide of toHide) {
      event.hide(hide);
  }
})

JEIEvents.information(event => {
	event.addItem('ae2:charged_certus_quartz_crystal', [
		`Consecrate a regular Certus Quartz Crystal by right clicking it onto a lit candle. Hexerei candles won't extinguish when you right click on them, but basic ones will.`
]);
})
