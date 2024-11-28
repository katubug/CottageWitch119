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
})
