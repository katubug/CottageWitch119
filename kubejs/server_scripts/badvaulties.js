BlockEvents.rightClicked('create:item_vault', e => {
    if(e.item.id == 'pipez:item_pipe')
    e.cancel()
    e.server.runCommandSilent(`tell @p Please do not connect Pipez to Vaults. It's very laggy.`)
})

