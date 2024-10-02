ServerEvents.recipes(e => {
    e.recipes.create.sandpaper_polishing('3x waystones:warp_dust', 'waystones:attuned_shard')

    e.recipes.create.compacting('brewinandchewin:unripe_flaxen_cheese_wheel', [Fluid.of('minecraft:milk', 1000), 'minecraft:brown_mushroom', 'minecraft:brown_mushroom', 'minecraft:sugar']).heated()

    e.recipes.create.compacting('brewinandchewin:unripe_scarlet_cheese_wheel', [Fluid.of('minecraft:milk', 1000), 'minecraft:crimson_fungus', 'minecraft:crimson_fungus', 'minecraft:sugar']).heated()

    e.recipes.create.haunting('brewinandchewin:flaxen_cheese_wheel', 'brewinandchewin:unripe_flaxen_cheese_wheel')

    e.recipes.create.haunting('brewinandchewin:scarlet_cheese_wheel', 'brewinandchewin:unripe_scarlet_cheese_wheel')

    e.recipes.create.haunting('domesticationinnovation:sinister_carrot', 'miners_delight:cave_carrot')

    e.recipes.create.haunting('byg:crimson_berries', 'byg:blueberries')

    e.recipes.create.crushing('2x minecraft:prismarine_shard', 'minecraft:prismarine')

    e.recipes.create.crushing(['2x minecraft:coal', Item.of('minecraft:coal').withChance(0.5)], '#forge:ores/coal')

    e.recipes.create.crushing(['minecraft:quartz', Item.of('minecraft:quartz').withChance(0.5)], 'byg:raw_quartz_block')

    e.recipes.create.mixing('culturaldelights:corn_dough', [Fluid.water(1000), '3x culturaldelights:corn_cob'])

    let stripWood = (output, input) => {
        e.recipes.create.cutting(
            Item.of(output), input
        )
    }

    const woodTypes = ["ars_elemental:yellow_archwood_log","ars_elemental:yellow_archwood","hexerei:mahogany_log", "hexerei:mahogany_wood","hexerei:witch_hazel_log","hexerei:witch_hazel_wood","hexerei:willow_log","hexerei:willow_wood","byg:white_mangrove_log","byg:white_mangrove_wood","byg:sythian_stem","byg:sythian_hyphae","byg:embur_pedu","byg:embur_hyphae","quark:bamboo_block","quark:ancient_log","quark:ancient_wood","caupona:walnut_log","caupona:walnut_wood","deeperdarker:echo_log","deeperdarker:echo_wood","colorfulazaleas:tecal_azalea_log","colorfulazaleas:tecal_azalea_wood","colorfulazaleas:fiss_azalea_log","colorfulazaleas:fiss_azalea_wood","colorfulazaleas:roze_azalea_log","colorfulazaleas:roze_azalea_wood","colorfulazaleas:azule_azalea_log","colorfulazaleas:azule_azalea_wood","colorfulazaleas:bright_azalea_log","colorfulazaleas:bright_azalea_wood","colorfulazaleas:walnut_azalea_log","colorfulazaleas:walnut_azalea_wood","colorfulazaleas:titanium_azalea_log","colorfulazaleas:titanium_azalea_wood","luphieclutteredmod:luphie_green_log","luphieclutteredmod:luphie_green_wood","luphieclutteredmod:luphie_yellow_log","luphieclutteredmod:luphie_yellow_wood","luphieclutteredmod:luphie_purple_log","luphieclutteredmod:luphie_purple_wood","luphieclutteredmod:luphie_pink_log","luphieclutteredmod:luphie_pink_wood","luphieclutteredmod:luphie_glow_log","luphieclutteredmod:luphie_glow_wood","luphieclutteredmod:luphie_flowering_yellow_log","luphieclutteredmod:luphie_flowering_yellow_wood","luphieclutteredmod:luphie_flowering_purple_log","luphieclutteredmod:luphie_flowering_purple_wood","luphieclutteredmod:luphie_flowering_pink_wood", "environmental:willow_log", "environmental:willow_wood", "environmental:pine_log", "environmental:pine_wood", "environmental:cherry_log", "environmental:cherry_wood", "environmental:wisteria_log", "environmental:wisteria_wood"]
    
    for (const woodType of woodTypes) {
        let splitString = woodType.split(":");
        let strippedWoodType = splitString[0] + ":stripped_" + splitString[1];
        stripWood(strippedWoodType, woodType);
    }

    stripWood("extendedmushrooms:glowshroom_stem_stripped", "extendedmushrooms:glowshroom_stem");
    stripWood("extendedmushrooms:poisonous_mushroom_stem_stripped", "extendedmushrooms:poisonous_mushroom_stem");
    stripWood("extendedmushrooms:honey_fungus_stem_stripped", "extendedmushrooms:honey_fungus_stem");
    stripWood("luphieclutteredmod:stripped_luphie_flowering_pinklog", "luphieclutteredmod:luphie_flowering_pink_log");

})
