ServerEvents.recipes(e => {

    let copperAge = (output, input) => {
        e.recipes.create.haunting(Item.of(output), input)
    }

    const copperBlocks =
    ["minecraft:cut_copper","minecraft:cut_copper_stairs", "minecraft:cut_copper_slab","copperandtuffbackport:chiseled_copper", "copperandtuffbackport:copper_door","copperandtuffbackport:copper_trapdoor","copperandtuffbackport:copper_grate","copperandtuffbackport:copper_bulb","create:copper_shingles","create:copper_shingle_slab","create:copper_shingle_stairs","create:copper_tiles","create:copper_tile_slab","create:copper_tile_stairs","friendsandfoes:copper_button","quark:cut_copper_vertical_slab"]

    //aging all blocks in the list
    for (const copperBlock of copperBlocks) {
        let splitString = copperBlock.split(":");
        let exposedCopper = splitString[0] + ":exposed_" + splitString[1];
        let weatheredCopper = splitString[0] + ":weathered_" + splitString[1];
        let oxidizedCopper = splitString[0] + ":oxidized_" + splitString[1];
        copperAge(exposedCopper, copperBlock);
        copperAge(weatheredCopper, exposedCopper);
        copperAge(oxidizedCopper, weatheredCopper);
    }

    //Copper Blocks
    copperAge('minecraft:exposed_copper','minecraft:copper_block')
    copperAge('minecraft:weathered_copper','minecraft:exposed_copper')
    copperAge('minecraft:oxidized_copper','minecraft:weathered_copper')

    //Short Copper Doors
    copperAge('dramaticdoors:short_exposed_copper_door','dramaticdoors:short_copper_door')
    copperAge('dramaticdoors:short_weathered_copper_door','dramaticdoors:short_exposed_copper_door')
    copperAge('dramaticdoors:short_oxidized_copper_door','dramaticdoors:short_weathered_copper_door')

    //Tall Copper Doors
    copperAge('dramaticdoors:tall_exposed_copper_door','dramaticdoors:tall_copper_door')
    copperAge('dramaticdoors:tall_weathered_copper_door','dramaticdoors:tall_exposed_copper_door')
    copperAge('dramaticdoors:tall_oxidized_copper_door','dramaticdoors:tall_weathered_copper_door')

    //Lightning Rods
    copperAge('friendsandfoes:exposed_lightning_rod','minecraft:lightning_rod')
    copperAge('friendsandfoes:weathered_lightning_rod','friendsandfoes:exposed_lightning_rod')
    copperAge('friendsandfoes:oxidized_lightning_rod','friendsandfoes:weathered_lightning_rod')
})
