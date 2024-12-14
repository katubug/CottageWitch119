ServerEvents.recipes(e => {

    const bigPlankList = Ingredient.of("#minecraft:planks").itemIds



    let getModID = (blockID) => {
        let split1 = blockID.split(':')
        let mod = split1[0]
        mod = mod + ':'
        return mod;
    }

    let getRecipeBuildID = (item) => {
        const replaced = item.replace(':', '_')
        return replaced;
    }

    let hexCut = (output, outputCount, ingredient, ingredientCount) => {
        e.custom({
            'type': 'hexerei:woodcutting',
            'count': outputCount,
            'ingredient': {'item': ingredient},
            'ingredient_count': ingredientCount,
            'result': output
        }).id('arzadu:hexcut_' + getRecipeBuildID(output) + '_from_' + getRecipeBuildID(ingredient))
    }

    const blossom = Ingredient.of(/.*blossom.*/)
    const ancient = Ingredient.of(/.*ancient.*/)
    const bamboo = Ingredient.of(/.*bamboo.*/)
    const azalea = Ingredient.of(/.*azalea.*/) // MUST BE USED INSIDE if(quark)

    let hexRecipeBuild = (planks) => {
        // get mod id and wood type word list
        let modID = getModID(planks)
        let split1 = planks.split(':')
        let split2 = split1[1].split('_')

        let skip = false; // THIS IS FOR SKIPPING PROBLEM IDS

        let boatSkip = false; // for skipping boats 
        let shroomNames = false; // if it uses mushroom naming conventions instead of wood ones
        let extendedSkip = false; // for skipping recipes using blocks not included in extendedmushrooms
        let arsmod = false; // for dealing with archwood
        let verticalGen = false; // fixes duplicate recipes from vertical planks (quark and env)
        let logSkip = false; // for mods which need to skip logs (ars, quark, tflostblocks, etc)
        let stripSkip = false; // for mods which only need to skip stripped logs (eco:floweringazalea)
        let redstoneSkip = false; // skips buttons and pressure plates (cinnamon, eco:floweringazalea)

        // getting wood type name
        let type = ''
        for (const i in split2) {
            if (split2[i] == 'planks') {
                break;
            }
            if (type != '') {
                type = type + '_'
            }
            if (split2[i] != 'vertical') {
                type = type + split2[i]
            } else {
                verticalGen = true
            }
        }

        // skipping existing mod id recipes and weird mods
        if (modID == 'hexerei:') {
            skip = true;
        } else if (modID == 'minecraft:') {
            skip = true;
        } else if (modID == 'luphieclutteredmod:') {
            skip = true; // TERRIBLE NAMING CONVENTIONS, manually done below everything else
        }

        const bonusTowerwood = ['twilightforest:cracked_towerwood', 'twilightforest:mossy_towerwood', 'twilightforest:infested_towerwood', 'twilightforest:encased_towerwood', 'twilightforest:towerwood']
        for (const it of bonusTowerwood) {
            if (planks == it) {
                skip = true; // towerwood is Too Weird
            }
        }

        // conk skip
        if (planks == 'spelunkery:conk_fungus') {
            skip = true;
        }

        //  boat skips
        if (modID == 'twilightforest:' || modID == 'colorfulazaleas:' || modID == 'ars_nouveau:') {
            boatSkip = true;
        }
        const bygNoBoat = ['byg:imparius_planks', 'byg:lament_planks', 'byg:ether_planks', 'byg:bulbis_planks', 'byg:nightshade_planks', 'byg:sythian_planks', 'byg:embur_planks']
        for (const wood of bygNoBoat) {
            if (wood == planks) {
                boatSkip == true
            }
        }

        // extradelight
        if (modID == 'extradelight:') {
            boatSkip = true;
            redstoneSkip = true;
        }

        // mushrooms
        const mushrooms = ["extendedmushrooms:glowshroom_planks", "extendedmushrooms:honey_fungus_planks", "extendedmushrooms:mushroom_planks", "extendedmushrooms:poisonous_mushroom_planks", 'byg:sythian_planks', 'byg:imparius_planks', 'byg:bulbis_planks', 'byg:embur_planks', 'quark:vertical_crimson_planks', 'quark:vertical_warped_planks']
        for (const shroom of mushrooms) {
            if (planks == shroom) {
                shroomNames = true;
            }
        }


        // initiating all the things
        let log, wood, stripped_log, stripped_wood, slab, boat, button, chest_boat, door, fence, fence_gate, stairs, pressure_plate, sign, trapdoor;

        // assigning variables to generated item ids
        log = modID + type + '_log'
        wood = modID + type + '_wood'
        stripped_log = modID + 'stripped_' + type + '_log'
        stripped_wood = modID + 'stripped_' + type + '_wood'
        if (shroomNames == true) {
            // resets already-established "wood" and "log" names if its a mushroom
            log = modID + type + '_stem'
            wood = modID + type + '_hyphae'
            stripped_log = modID + 'stripped_' + type + '_stem'
            stripped_wood = modID + 'stripped_' + type + '_hyphae'
        }
        slab = modID + type + '_slab'
        boat = modID + type + '_boat'
        button = modID + type + '_button'
        chest_boat = modID + type + '_chest_boat'
        door = modID + type + '_door'
        fence = modID + type + '_fence'
        fence_gate = modID + type + '_fence_gate'
        stairs = modID + type + '_stairs'
        pressure_plate = modID + type + '_pressure_plate'
        sign = modID + type + '_sign'
        trapdoor = modID + type + '_trapdoor'

        // manual fixing certain mods that don't follow naming conventions
        if (modID == 'extendedmushrooms:') {
            extendedSkip = true
            if (planks == 'extendedmushrooms:mushroom_planks') {
                log = 'minecraft:mushroom_stem'
            } else if (planks == 'extendedmushrooms:glowshroom_planks' || planks == 'extendedmushrooms:honey_fungus_planks' || planks == 'extendedmushrooms:poisonous_mushroom_planks') {
                stripped_log = modID + type + '_stem_stripped'
            }
        }

        // fixing ars: five wood types, one plank type
        else if (modID == 'ars_nouveau:') {
            arsmod = true
            logSkip = true
            log = ['ars_nouveau:blue_archwood_log', 'ars_nouveau:purple_archwood_log', 'ars_nouveau:green_archwood_log', 'ars_nouveau:red_archwood_log', 'ars_elemental:yellow_archwood_log']
            wood = ['ars_nouveau:blue_archwood_wood', 'ars_nouveau:purple_archwood_wood', 'ars_nouveau:green_archwood_wood', 'ars_nouveau:red_archwood_wood', 'ars_elemental:yellow_archwood']
            stripped_log = ['ars_nouveau:stripped_blue_archwood_log', 'ars_nouveau:stripped_green_archwood_log', 'ars_nouveau:stripped_red_archwood_log', 'ars_nouveau:stripped_purple_archwood_log', 'ars_elemental:stripped_yellow_archwood_log']
            stripped_wood = ['ars_nouveau:stripped_blue_archwood_wood', 'ars_nouveau:stripped_green_archwood_wood', 'ars_nouveau:stripped_red_archwood_wood', 'ars_nouveau:stripped_purple_archwood_wood', 'ars_elemental:stripped_yellow_archwood']
        }

        // fixing quark
        else if (modID == 'quark:') {
            if (verticalGen == true && azalea.test(planks) == false && ancient.test(planks) == false && blossom.test(planks) == false && bamboo.test(planks) == false) {
                log = 'minecraft:' + type + '_log'
                wood = 'minecraft:' + type + '_wood'
                stripped_log = 'minecraft:' + 'stripped_' + type + '_log'
                stripped_wood = 'minecraft:' + 'stripped_' + type + '_wood'
                if (shroomNames == true) {
                    log = 'minecraft:' + type + '_stem'
                    wood = 'minecraft:' + type + '_hyphae'
                    stripped_log = 'minecraft:' + 'stripped_' + type + '_stem'
                    stripped_wood = 'minecraft:' + 'stripped_' + type + '_hyphae'
                }
                slab = 'minecraft:' + type + '_slab'
                boat = 'minecraft:' + type + '_boat'
                button = 'minecraft:' + type + '_button'
                chest_boat = 'minecraft:' + type + '_chest_boat'
                door = 'minecraft:' + type + '_door'
                fence = 'minecraft:' + type + '_fence'
                fence_gate = 'minecraft:' + type + '_fence_gate'
                stairs = 'minecraft:' + type + '_stairs'
                pressure_plate = 'minecraft:' + type + '_pressure_plate'
                sign = 'minecraft:' + type + '_sign'
                trapdoor = 'minecraft:' + type + '_trapdoor'
            }
            if (blossom.test(planks) || ancient.test(planks) || azalea.test(planks) || bamboo.test(planks)) {
                slab = modID + type + '_planks_slab'
                stairs = modID + type + '_planks_stairs'
                if (bamboo.test(planks)) {
                    logSkip = true
                }
            }
        }

        // manual fixing specific block IDs
        if (planks == 'tflostblocks:thorn_planks') {
            stripped_log = modID + 'stripped_thorn_block'
            logSkip = true
        } else if (planks == 'byg:imparius_planks') {
            stripSkip = true
        } else if (planks == 'byg:bulbis_planks') {
            wood = 'byg:bulbis_wood'
            stripped_wood = 'byg:stripped_bulbis_wood'
        } else if (planks == 'byg:embur_planks') {
            log = 'byg:embur_pedu'
            stripped_log = 'byg:stripped_embur_pedu'
        } else if (planks == 'ecologics:flowering_azalea_planks') {
            stripSkip = true
            redstoneSkip = true
        } else if (planks == 'extradelight:cinnamon_planks') {
            logSkip = true
            redstoneSkip = true
        }


        if (skip == false) {
            if (verticalGen == false && redstoneSkip == false) {
                hexCut(button, 1, slab, 1)
                hexCut(door, 1, slab, 4)
                hexCut(fence, 1, slab, 2)
                hexCut(fence_gate, 1, slab, 2)
                hexCut(pressure_plate, 1, slab, 2)
                hexCut(sign, 1, slab, 2)
                hexCut(stairs, 1, slab, 2)
                hexCut(trapdoor, 1, slab, 4)
                hexCut(slab, 3, stairs, 2)
                hexCut('minecraft:barrel', 1, slab, 6)
                hexCut('minecraft:chest', 1, slab, 12)
                hexCut('minecraft:crafting_table', 1, slab, 4)
            } else if (verticalGen == false && redstoneSkip == true) {
                hexCut(door, 1, slab, 4)
                hexCut(fence, 1, slab, 2)
                hexCut(fence_gate, 1, slab, 2)
                hexCut(stairs, 1, slab, 2)
                hexCut(trapdoor, 1, slab, 4)
                hexCut(slab, 3, stairs, 2)
                hexCut('minecraft:barrel', 1, slab, 6)
                hexCut('minecraft:chest', 1, slab, 12)
                hexCut('minecraft:crafting_table', 1, slab, 4)
            }
            if (boatSkip == false) {
                hexCut(chest_boat, 1, planks, 9)
                hexCut(boat, 1, planks, 4)
            }
            if (boatSkip == false && verticalGen == false) {
                hexCut(chest_boat, 1, slab, 18)
                hexCut(boat, 1, slab, 8)
            }
            if (logSkip == false) {
                if (extendedSkip == false) {
                    hexCut(planks, 5, wood, 1)
                    if (stripSkip == false) {
                        hexCut(planks, 5, stripped_wood, 1)
                    }
                }
                hexCut(planks, 5, log, 1)
                if (stripSkip == false) {
                    hexCut(planks, 5, stripped_log, 1)
                }
            }
            if (redstoneSkip == false) {
                hexCut(button, 2, planks, 1)
                hexCut(pressure_plate, 1, planks, 1)
            }
            hexCut(door, 1, planks, 2)
            hexCut(fence, 1, planks, 1)
            hexCut(fence_gate, 1, planks, 1)
            hexCut(planks, 3, stairs, 4)
            hexCut(planks, 1, slab, 2)
            hexCut(slab, 2, planks, 1)
            hexCut(stairs, 1, planks, 1)
            hexCut(trapdoor, 1, planks, 2)
            hexCut('minecraft:barrel', 1, planks, 3)
            hexCut('minecraft:chest', 1, planks, 6)
            hexCut('minecraft:crafting_table', 1, planks, 2)
            if (arsmod == true) {
                // naming these variables SUCKED
                for (const archwood_log of log) {
                    hexCut(planks, 5, archwood_log, 1)
                }
                for (const stripped_archwood_log of stripped_log) {
                    hexCut(planks, 5, stripped_archwood_log, 1)
                }
                for (const archwood_wood of wood) {
                    hexCut(planks, 5, archwood_wood, 1)
                }
                for (const stripped_archwood_wood of stripped_wood){
                    hexCut(planks, 5, stripped_archwood_wood, 1)
                }
            } else if (modID != 'colorfulazaleas:' && modID != 'extradelight:') {
                hexCut(sign, 1, planks, 1)
            }
        }
    }

    for (const thing of bigPlankList) {
        hexRecipeBuild(thing)
    }
    hexRecipeBuild('quark:vertical_mangrove_planks')

    // manually doing recipes which get skipped by the above function:
    hexCut('tflostblocks:thorn_planks', 5, 'tflostblocks:stripped_thorn_block', 1)

    hexCut('extradelight:cinnamon_planks', 5, 'extradelight:cinnamon_log', 1)
    hexCut('extradelight:cinnamon_planks', 5, 'extradelight:stripped_cinnamon_log', 1)

    // luphie:
    const pink = ['luphieclutteredmod:luphie_pink_planks', 'luphieclutteredmod:luphie_pink_stairs', 'luphieclutteredmod:luphie_pink_slab', 'luphieclutteredmod:luphie_pink_log', 'luphieclutteredmod:stripped_luphie_pink_log', 'luphieclutteredmod:luphie_pink_wood', 'luphieclutteredmod:stripped_luphie_pink_wood', 'luphieclutteredmod:luphie_pink_heart_door', 'luphieclutteredmod:luphie_pink_trapdoor', 'luphieclutteredmod:luphie_pink_fence', 'luphieclutteredmod:luphie_pink_fence_gate', 'luphieclutteredmod:luphie_pink_button', 'luphieclutteredmod:luphie_pink_pressure_plate']
    const floweringPink = ['luphieclutteredmod:luphie_flowering_pink_planks', 'luphieclutteredmod:luphie_flowering_pink_stairs', 'luphieclutteredmod:luphie_flowering_pink_slab', 'luphieclutteredmod:luphie_flowering_pink_log', 'luphieclutteredmod:stripped_luphie_flowering_pinklog', 'luphieclutteredmod:luphie_flowering_pink_wood', 'luphieclutteredmod:stripped_luphie_flowering_pink_wood', 'luphieclutteredmod:luphie_flowering_pink_heart_door', 'luphieclutteredmod:luphie_flowering_pink_trapdoor', 'luphieclutteredmod:luphie_flowering_pink_fence', 'luphieclutteredmod:luphie_flowering_pink_fence_gate', 'luphieclutteredmod:luphie_flowering_pink_button', 'luphieclutteredmod:luphie_flowering_pink_pressure_plate']
    const yellow = ['luphieclutteredmod:luphie_yellow_planks', 'luphieclutteredmod:luphie_yellow_stair_recipe', 'luphieclutteredmod:luphie_yellow_slab', 'luphieclutteredmod:luphie_yellow_log', 'luphieclutteredmod:stripped_luphie_yellow_log', 'luphieclutteredmod:luphie_yellow_wood', 'luphieclutteredmod:stripped_luphie_yellow_wood', 'luphieclutteredmod:luphie_yellow_door', 'luphieclutteredmod:luphie_yellow_trapdoor', 'luphieclutteredmod:luphie_yellow_fence', 'luphieclutteredmod:luphie_yellow_fence_gate', 'luphieclutteredmod:luphie_yellow_button', 'luphieclutteredmod:luphie_yellow_pressure_plate']
    const floweringYellow = ['luphieclutteredmod:luphie_flowering_yellow_planks', 'luphieclutteredmod:luphie_flowering_yellow_stairs', 'luphieclutteredmod:luphie_flowering_yellow_slab', 'luphieclutteredmod:luphie_flowering_yellow_log', 'luphieclutteredmod:stripped_luphie_flowering_log', 'luphieclutteredmod:luphie_flowering_yellow_wood', 'luphieclutteredmod:stripped_luphie_flowering_wood', 'luphieclutteredmod:luphie_flowering_yellow_door', 'luphieclutteredmod:luphie_flowering_yellow_trapdoor', 'luphieclutteredmod:luphie_flowering_yellow_fence', 'luphieclutteredmod:luphie_flowering_yellow_fence_gate', 'luphieclutteredmod:luphie_flowering_yellow_button', 'luphieclutteredmod:luphie_flowering_yellow_pressure_plate']
    const green = ['luphieclutteredmod:luphie_green_planks', 'luphieclutteredmod:luphie_green_stairs', 'luphieclutteredmod:luphie_green_slab', 'luphieclutteredmod:luphie_green_log', 'luphieclutteredmod:stripped_luphie_green_log', 'luphieclutteredmod:luphie_green_wood', 'luphieclutteredmod:stripped_luphie_green_wood', 'luphieclutteredmod:luphie_green_door', 'luphieclutteredmod:luphie_green_trapdoor', 'luphieclutteredmod:luphie_green_fence', 'luphieclutteredmod:luphie_green_fence_gate', 'luphieclutteredmod:luphie_green_button', 'luphieclutteredmod:luphie_green_pressure_plate']
    const glow = ['luphieclutteredmod:luphie_glow_planks', 'luphieclutteredmod:luphie_glow_wood_set_stairs', 'luphieclutteredmod:luphie_glow_wood_set_slab', 'luphieclutteredmod:luphie_glow_log', 'luphieclutteredmod:stripped_luphie_glow_log', 'luphieclutteredmod:luphie_glow_wood', 'luphieclutteredmod:stripped_luphie_glow_wood', 'luphieclutteredmod:luphie_glow_door', 'luphieclutteredmod:luphie_glow_trapdoor', 'luphieclutteredmod:luphie_glow_wood_set_fence', 'luphieclutteredmod:luphie_glow_wood_set_fence_gate', 'luphieclutteredmod:luphie_glow_wood_set_button', 'luphieclutteredmod:luphie_glow_wood_set_pressure_plate']
    const purple = ['luphieclutteredmod:luphie_purple_planks', 'luphieclutteredmod:luphie_purple_plank_set_stairs', 'luphieclutteredmod:luphie_purple_plank_set_slab', 'luphieclutteredmod:luphie_purple_log', 'luphieclutteredmod:stripped_luphie_purple_log', 'luphieclutteredmod:luphie_purple_wood', 'luphieclutteredmod:stripped_luphie_purple_wood', 'luphieclutteredmod:luphie_purple_door', 'luphieclutteredmod:luphie_purple_trapdoor', 'luphieclutteredmod:luphie_purple_plank_set_fence', 'luphieclutteredmod:luphie_purple_plank_set_fence_gate', 'luphieclutteredmod:luphie_purple_plank_set_button', 'luphieclutteredmod:luphie_purple_plank_set_pressure_plate']
    const floweringPurple = ['luphieclutteredmod:luphie_flowering_purple_planks', 'luphieclutteredmod:luphie_flowering_purple_s_tairs', 'luphieclutteredmod:luphie_flowering_purple_slab', 'luphieclutteredmod:luphie_flowering_purple_log', 'luphieclutteredmod:stripped_luphie_flowering_purple_log', 'luphieclutteredmod:luphie_flowering_purple_wood', 'luphieclutteredmod:stripped_luphie_flowering_purple_wood', 'luphieclutteredmod:luphie_flowering_purple_door', 'luphieclutteredmod:luphie_flowering_purple_trapdoor', 'luphieclutteredmod:luphie_flowering_purple_fence', 'luphieclutteredmod:luphie_flowering_purple_fence_gate', 'luphieclutteredmod:luphie_flowering_purple_button', 'luphieclutteredmod:luphie_flowering_purple_pressure_plate']
    let luphieRecipeBuild = ([planks, stairs, slab, log, stripped_log, wood, stripped_wood, door, trapdoor, fence, fence_gate, button, pressure_plate]) => {
        hexCut(button, 1, slab, 1)
        hexCut(door, 1, slab, 4)
        hexCut(fence, 1, slab, 2)
        hexCut(fence_gate, 1, slab, 2)
        hexCut(pressure_plate, 1, slab, 2)
        hexCut(stairs, 1, slab, 2)
        hexCut(trapdoor, 1, slab, 4)
        hexCut(slab, 3, stairs, 2)
        hexCut('minecraft:barrel', 1, slab, 6)
        hexCut('minecraft:chest', 1, slab, 12)
        hexCut('minecraft:crafting_table', 1, slab, 4)
        hexCut(planks, 5, wood, 1)
        hexCut(planks, 5, stripped_wood, 1)
        hexCut(planks, 5, log, 1)
        hexCut(planks, 5, stripped_log, 1)
        hexCut(door, 1, planks, 2)
        hexCut(fence, 1, planks, 1)
        hexCut(fence_gate, 1, planks, 1)
        hexCut(planks, 3, stairs, 4)
        hexCut(planks, 1, slab, 2)
        hexCut(slab, 2, planks, 1)
        hexCut(stairs, 1, planks, 1)
        hexCut(trapdoor, 1, planks, 2)
        hexCut('minecraft:barrel', 1, planks, 3)
        hexCut('minecraft:chest', 1, planks, 6)
        hexCut('minecraft:crafting_table', 1, planks, 2)
        hexCut(button, 2, planks, 1)
        hexCut(pressure_plate, 1, planks, 1)
    }
    luphieRecipeBuild(pink)
    luphieRecipeBuild(floweringPink)
    luphieRecipeBuild(yellow)
    luphieRecipeBuild(floweringYellow)
    luphieRecipeBuild(green)
    luphieRecipeBuild(glow)
    luphieRecipeBuild(purple)
    luphieRecipeBuild(floweringPurple)


})