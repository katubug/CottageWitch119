PlayerEvents.tick(event => {
    const {player,level} = event
    if(player.y < -69){
        if(!player.stages.has('inVoid')){

            let x = Math.floor(player.x)
            let z = Math.floor(player.z)
            let command = `execute in ${level.dimension} run tp ${player.username} ${x} 256 ${z}`
            //player.tell('Executing command: ' + command)
            event.server.runCommandSilent(command);
            player.addMotion(0, -10, 0)
    
            let potion = player.potionEffects
            potion.add('minecraft:blindness', 2*20, 0, false, false)
            player.stages.add('inVoid')

        }
        //event.cancel()

        event.server.scheduleInTicks(100, _=>{
            player.stages.remove('inVoid')
        })
    }
})