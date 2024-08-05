ServerEvents.recipes(event => {

    //replace cogwheel and large_cogwheel with cogwheel tags
    event.replaceInput({input: 'create:cogwheel'}, 'create:cogwheel','#forge:cogwheels')
    event.replaceInput({input: 'create:large_cogwheel'}, 'create:large_cogwheel', '#forge:large_cogwheels')

    //cogwheel variants
    let smallCog = (output, plankInput) => {
        event.shapeless(
            Item.of(output),
            [
                'create:shaft',
                plankInput
            ]
        )
    }
    smallCog('createcasing:oak_cogwheel', 'minecraft:oak_planks')
    smallCog('createcasing:birch_cogwheel', 'minecraft:birch_planks')
    smallCog('createcasing:jungle_cogwheel', 'minecraft:jungle_planks')
    smallCog('createcasing:acacia_cogwheel', 'minecraft:acacia_planks')
    smallCog('createcasing:dark_oak_cogwheel', 'minecraft:dark_oak_planks')
    smallCog('createcasing:mangrove_cogwheel', 'minecraft:mangrove_planks')
    smallCog('createcasing:crimson_cogwheel', 'minecraft:crimson_planks')
    smallCog('createcasing:warped_cogwheel', 'minecraft:warped_planks')

    //large cogwheel variants
    let largeCog = (output, plankInput) => {
        event.shapeless(
            Item.of(output),
            [
                'create:shaft',
                plankInput,
                plankInput
            ]
        )
    }
    largeCog('createcasing:oak_large_cogwheel', 'minecraft:oak_planks')
    largeCog('createcasing:birch_large_cogwheel', 'minecraft:birch_planks')
    largeCog('createcasing:jungle_large_cogwheel', 'minecraft:jungle_planks')
    largeCog('createcasing:acacia_large_cogwheel', 'minecraft:acacia_planks')
    largeCog('createcasing:dark_oak_large_cogwheel', 'minecraft:dark_oak_planks')
    largeCog('createcasing:mangrove_large_cogwheel', 'minecraft:mangrove_planks')
    largeCog('createcasing:crimson_large_cogwheel', 'minecraft:crimson_planks')
    largeCog('createcasing:warped_large_cogwheel', 'minecraft:warped_planks')

    //large cogwheel alt
    let largeAlt = (output, cogInput, plankInput) => {
        event.shapeless(
            Item.of(output),
            [
                cogInput,
                plankInput
            ]
        ),
        event.recipes.create.deploying(output,
            [
                cogInput,
                plankInput
            ]
        )
    }
    largeAlt('createcasing:oak_large_cogwheel','createcasing:oak_cogwheel', 'minecraft:oak_planks')
    largeAlt('createcasing:birch_large_cogwheel','createcasing:birch_cogwheel', 'minecraft:birch_planks')
    largeAlt('createcasing:jungle_large_cogwheel','createcasing:jungle_cogwheel', 'minecraft:jungle_planks')
    largeAlt('createcasing:acacia_large_cogwheel','createcasing:acacia_cogwheel', 'minecraft:acacia_planks')
    largeAlt('createcasing:dark_oak_large_cogwheel','createcasing:dark_oak_cogwheel', 'minecraft:dark_oak_planks')
    largeAlt('createcasing:mangrove_large_cogwheel','createcasing:mangrove_cogwheel', 'minecraft:mangrove_planks')
    largeAlt('createcasing:crimson_large_cogwheel','createcasing:crimson_cogwheel', 'minecraft:crimson_planks')
    largeAlt('createcasing:warped_large_cogwheel','createcasing:warped_cogwheel', 'minecraft:warped_planks')
})

ServerEvents.tags('item', event => {
    event.add('forge:large_cogwheels','create:large_cogwheel','createcasing:oak_large_cogwheel','createcasing:birch_large_cogwheel','createcasing:jungle_large_cogwheel','createcasing:acacia_large_cogwheel','createcasing:dark_oak_large_cogwheel','createcasing:mangrove_large_cogwheel','createcasing:crimson_large_cogwheel', 'createcasing:warped_large_cogwheel')

    event.add('forge:cogwheels','create:cogwheel','createcasing:oak_cogwheel','createcasing:birch_cogwheel','createcasing:jungle_cogwheel','createcasing:acacia_cogwheel','createcasing:dark_oak_cogwheel','createcasing:mangrove_cogwheel','createcasing:crimson_cogwheel', 'createcasing:warped_cogwheel')

})
