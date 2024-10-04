
BlockEvents.rightClicked('block.right_click', event => {
    //main hand only
    const { block, hand, item, world, player } = event;
    if (item.id == 'pipez:item_pipe' && block.id == 'create:item_vault') {
        let cmd = `/tell ${player.username} Please do not connect Pipez to Vaults. It's very laggy.`
        console.log(cmd)
        event.server.runCommand(cmd)
        event.cancel()
    }
});