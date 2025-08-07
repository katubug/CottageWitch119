ServerEvents.tags('block', event => {

    // Bell Blossom tag
    event.add('minecraft:small_flowers',
        'byg:wailing_bell_blossom')


    //Hot Blocks
	let hotBlocks = [
		'minecraft:campfire',
        'minecraft:soul_campfire',
        'byg:boric_campfire',
        'byg:cryptic_campfire',
        'create:blaze_burner',
        'nethersdelight:blackstone_stove',
        'caupona:stone_brick_kitchen_stove',
        'caupona:opus_latericium_kitchen_stove',
        'caupona:opus_incertum_kitchen_stove',
        'caupona:brick_kitchen_stove',
        'caupona:mud_kitchen_stove',
        'twilightdelight:maze_stove',
        'ends_delight:end_stove',
        'farmersdelight:stove',
        'byg:cryptic_magma_block',
        'byg:magmatic_stone',
        'fantasyfurniture:necrolord/oven',
        'fantasyfurniture:royal/oven',
        'fantasyfurniture:bone/wither/oven',
        'fantasyfurniture:bone/skeleton/oven',
        'minecraft:magma_block',
        'fantasyfurniture:venthyr/oven',
        'fantasyfurniture:nordic/oven',
        'handcrafted:oven'
	]

	for (const block of hotBlocks) {
		event.add('farmersdelight:heat_sources', block);
		event.add('create:passive_boiler_heaters', block);
		event.add('brewinandchewin:hot_blocks', block);
		event.add('caupona:stoves', block);
        //TODO Katu add the Let's Do Mods here when it's time.
	}

    // Prevent moving block
    event.add('forge:relocation_not_supported',
        'minecraft:reinforced_deepslate',
        'prefab:block_boundary'
        )

    // Hexerei Crow Harvestables
    event.add('hexerei:crow_harvestable',
        'minecraft:cave_vines_plant',
        'minecraft:sweet_berry_bush',
        'culturaldelights:cucumbers',
        'culturaldelights:corn_upper',
        'culturaldelights:eggplants',
        'ars_nouveau:sourceberry_bush',
        'byg:crimson_berry_bush',
        'byg:blueberry_bush',
        'sprout:peanut_plant',
        'minecraft:nether_wart'
    )

    event.add('minecraft:mineable/pickaxe',
        'buildinggadgets:construction_block'
    )

    event.add('minecraft:planks',
              'extradelight:cinnamon_planks'
    )

    event.add('ae2:growth_acceleratable',
              'hexerei:budding_selenite',
              'byg:budding_ametrine_ore',
              'byg:budding_subzero_crystal',
              'byg:budding_therium_crystal'
    )

    event.add('beautify:candleabras',
        'beautify:lamp_candleabra', 'beautify:lamp_candleabra_light_blue', 'beautify:lamp_candleabra_light_gray', 'beautify:lamp_candleabra_black', 'beautify:lamp_candleabra_blue', 'beautify:lamp_candleabra_brown', 'beautify:lamp_candleabra_cyan', 'beautify:lamp_candleabra_gray', 'beautify:lamp_candleabra_green', 'beautify:lamp_candleabra_lime', 'beautify:lamp_candleabra_magenta', 'beautify:lamp_candleabra_orange', 'beautify:lamp_candleabra_pink', 'beautify:lamp_candleabra_purple', 'beautify:lamp_candleabra_red', 'beautify:lamp_candleabra_white', 'beautify:lamp_candleabra_yellow'
    )

    // candles for consecration:
    event.add('minecraft:candles',
        '#hexerei:candles',
        '#supplementaries:skull_candles',
        '#supplementaries:candle_holders',
        '#beautify:candleabras',
        'fantasyfurniture:decorations/venthyr_candles',
        'fantasyfurniture:decorations/bone_candles',
        'hexerei:candelabra',
        'twilightforest:zombie_skull_candle',
        'twilightforest:skeleton_skull_candle',
        'twilightforest:wither_skeleton_skull_candle',
        'twilightforest:creeper_skull_candle',
        'twilightforest:player_skull_candle'
    )

    // fixing crystals
    let crystals = ['byg:small_subzero_crystal_bud', 'byg:medium_subzero_crystal_bud', 'byg:large_subzero_crystal_bud', 'byg:small_therium_crystal_bud', 'byg:medium_therium_crystal_bud', 'byg:large_therium_crystal_bud', 'byg:therium_crystal_cluster', 'byg:budding_therium_crystal']
    for (const crystal of crystals) {
        event.add('minecraft:mineable/pickaxe', crystal)
        event.add('artifacts:mineable/digging_claws', crystal)
    }

    // flowers that have unique bonemeal behavior. used in flower_doubling.js
    event.add('kubejs:unique_bonemeal',
        'environmental:red_hibiscus', 
        'environmental:magenta_hibiscus', 
        'environmental:orange_hibiscus', 
        'environmental:yellow_hibiscus', 
        'environmental:purple_hibiscus', 
        'environmental:pink_hibiscus', 
        'ecologics:azalea_flower',
        'byg:hydrangea_bush'
    )

})
