
BlockEvents.rightClicked('block.right_click', event => {
    //main hand only
    const { block, hand, item, world, player } = event

    //check for banned plants being placed
    if (!item.hasTag("forge:overgrowth_banned")) return
    console.log("Hexerei plant placed.")

    //create area (5 block distance)
    const area = AABB.ofBlock(block).inflate(5)

    //check area for braziers
    console.log("Checking area for braziers...")
    const blocks = player.level.getBlockStates(area)
    console.log("Blocks to check:"+blocks.count)

    //iterate through blockstates
    blocks.forEach(e => {
        if (e.block.id == "ars_nouveau:ritual_brazier") {
            console.log("Brazier found! Preventing placement")
            //let player know
            let cmd = `title ${player.username} actionbar {"text":"WARNING: Hexerei plants can crash when near an overgrowth ritual.", "italic":true, "color":"yellow"}`
            console.log(cmd)
            event.server.runCommandSilent(cmd)
            //cancel placing
            event.cancel()
        }
    })
}
);


ServerEvents.tags('item', event => {
    event.add('forge:overgrowth_banned',
        "hexerei:yellow_dock_bush",
        "hexerei:mugwort_bush"
    )
})
