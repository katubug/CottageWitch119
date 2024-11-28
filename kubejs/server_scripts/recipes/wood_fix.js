ServerEvents.recipes(e => {
    // existing code, copied from create.js
    let stripWood = (output, input) => {
        e.recipes.create.cutting(
            Item.of(output), input
        )
    }

    // new code
    let strippedToPlanks = (output, input) => {
        e.recipes.create.cutting(
            Item.of(output, 6), input
        )
    }

    // existing code, copied from create.js
    const woodTypes = ["ars_elemental:yellow_archwood_log","ars_elemental:yellow_archwood","hexerei:mahogany_log", "hexerei:mahogany_wood","hexerei:witch_hazel_log","hexerei:witch_hazel_wood","hexerei:willow_log","hexerei:willow_wood","byg:white_mangrove_log","byg:white_mangrove_wood","byg:sythian_stem","byg:sythian_hyphae","byg:embur_pedu","byg:embur_hyphae","quark:bamboo_block","quark:ancient_log","quark:ancient_wood","caupona:walnut_log","caupona:walnut_wood","deeperdarker:echo_log","deeperdarker:echo_wood","colorfulazaleas:tecal_azalea_log","colorfulazaleas:tecal_azalea_wood","colorfulazaleas:fiss_azalea_log","colorfulazaleas:fiss_azalea_wood","colorfulazaleas:roze_azalea_log","colorfulazaleas:roze_azalea_wood","colorfulazaleas:azule_azalea_log","colorfulazaleas:azule_azalea_wood","colorfulazaleas:bright_azalea_log","colorfulazaleas:bright_azalea_wood","colorfulazaleas:walnut_azalea_log","colorfulazaleas:walnut_azalea_wood","colorfulazaleas:titanium_azalea_log","colorfulazaleas:titanium_azalea_wood","luphieclutteredmod:luphie_green_log","luphieclutteredmod:luphie_green_wood","luphieclutteredmod:luphie_yellow_log","luphieclutteredmod:luphie_yellow_wood","luphieclutteredmod:luphie_purple_log","luphieclutteredmod:luphie_purple_wood","luphieclutteredmod:luphie_pink_log","luphieclutteredmod:luphie_pink_wood","luphieclutteredmod:luphie_glow_log","luphieclutteredmod:luphie_glow_wood","luphieclutteredmod:luphie_flowering_yellow_log","luphieclutteredmod:luphie_flowering_yellow_wood","luphieclutteredmod:luphie_flowering_purple_log","luphieclutteredmod:luphie_flowering_purple_wood","luphieclutteredmod:luphie_flowering_pink_wood", "environmental:willow_log", "environmental:willow_wood", "environmental:pine_log", "environmental:pine_wood", "environmental:cherry_log", "environmental:cherry_wood", "environmental:wisteria_log", "environmental:wisteria_wood"]
    const strippedLogs = ['colorfulazaleas:stripped_bright_azalea_log', 'colorfulazaleas:stripped_walnut_azalea_log', 'colorfulazaleas:stripped_titanium_azalea_log', 'deeperdarker:stripped_echo_log', 'caupona:stripped_walnut_log', 'luphieclutteredmod:stripped_luphie_green_log', 'luphieclutteredmod:stripped_luphie_purple_log', 'luphieclutteredmod:stripped_luphie_glow_log', 'luphieclutteredmod:stripped_luphie_yellow_log', 'luphieclutteredmod:stripped_luphie_flowering_log', 'luphieclutteredmod:stripped_luphie_flowering_pinklog', 'luphieclutteredmod:stripped_luphie_flowering_purple_log', 'luphieclutteredmod:stripped_luphie_pink_log', 'colorfulazaleas:stripped_tecal_azalea_log', 'colorfulazaleas:stripped_fiss_azalea_log', 'colorfulazaleas:stripped_roze_azalea_log', 'colorfulazaleas:stripped_azule_azalea_log', 'quark:stripped_ancient_log', 'environmental:stripped_pine_log', 'hexerei:stripped_mahogany_log', 'hexerei:stripped_willow_log', 'hexerei:stripped_witch_hazel_log', 'byg:stripped_blue_enchanted_log', 'byg:stripped_white_mangrove_log']

    for (const woodType of woodTypes) {
        let splitString = woodType.split(":");
        let strippedLogType = splitString[0] + ":stripped_" + splitString[1];
        stripWood(strippedLogType, woodType);
    }

    stripWood("extendedmushrooms:glowshroom_stem_stripped", "extendedmushrooms:glowshroom_stem");
    stripWood("extendedmushrooms:poisonous_mushroom_stem_stripped", "extendedmushrooms:poisonous_mushroom_stem");
    stripWood("extendedmushrooms:honey_fungus_stem_stripped", "extendedmushrooms:honey_fungus_stem");
    stripWood("luphieclutteredmod:stripped_luphie_flowering_pinklog", "luphieclutteredmod:luphie_flowering_pink_log");

    // new code
    for (const strippedLog of strippedLogs) {
        let split1 = strippedLog.split(':')
        let split2 = split1[1].split('_')
        let strippedWood = split1[0] + ':' + split2[0] + '_' + split2[1]
        let plankType = split1[0] + ':' + split2[1]
        if (split2[2] != 'log') {
            plankType = plankType + "_" + split2[2]
            strippedWood = strippedWood + "_" + split2[2]
        }
        plankType = plankType + "_planks"
        strippedWood = strippedWood + '_wood'
        strippedToPlanks(plankType, strippedLog)
        strippedToPlanks(plankType, strippedWood)
    }

    strippedToPlanks('ars_nouveau:archwood_planks', 'ars_elemental:stripped_yellow_archwood_log')
    strippedToPlanks('ars_nouveau:archwood_planks', 'ars_elemental:stripped_yellow_archwood')

    strippedToPlanks('byg:embur_planks', 'byg:stripped_embur_pedu')
    strippedToPlanks('byg:embur_planks', 'byg:stripped_embur_hyphae')

    strippedToPlanks('byg:sythian_planks', 'byg:stripped_sythian_stem')
    strippedToPlanks('byg:sythian_planks', 'byg:stripped_sythian_hyphae')

    strippedToPlanks('extradelight:cinnamon_planks', 'extradelight:stripped_cinnamon_log')

    strippedToPlanks('extendedmushrooms:glowshroom_planks', 'extendedmushrooms:glowshroom_stem_stripped')
    strippedToPlanks('extendedmushrooms:poisonous_mushroom_planks', 'extendedmushrooms:poisonous_mushroom_stem_stripped')
    strippedToPlanks('extendedmushrooms:honey_fungus_planks', 'extendedmushrooms:honey_fungus_stem_stripped')
    strippedToPlanks('extendedmushrooms:mushroom_planks', 'extendedmushrooms:stripped_mushroom_stem')

    e.recipes.create.cutting(
            ['extradelight:stripped_cinnamon_log',Item.of('extradelight:cinnamon_bark',2),Item.of('extradelight:cinnamon_bark',2).withChance(.25)], 'extradelight:cinnamon_log'
        )

})
