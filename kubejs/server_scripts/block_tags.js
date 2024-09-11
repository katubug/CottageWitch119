ServerEvents.tags('block', event => {

    // Hot Blocks
    // Farmer's Delight
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

    // Brewin and Chewin
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
})
