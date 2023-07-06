EntityEvents.hurt(event => {
    const {entity, source,level} = event
    if(!entity.isPlayer()) return
    let player = entity

    if(player.persistentData.voidForgiven == true && source == 'DamageSource (fall)'){
        player.persistentData.voidForgiven = false

        if(player.health > 8) {
            player.attack(player.health-4)
            event.cancel()
        }
    }

    if(source == 'DamageSource (outOfWorld)' && player.y < -64){
        player.persistentData.voidForgiven = true

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
        event.cancel()

        event.server.scheduleInTicks(100, _=>{
            player.stages.remove('inVoid')
        })
    }
})