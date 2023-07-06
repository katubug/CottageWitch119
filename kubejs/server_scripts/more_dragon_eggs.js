EntityEvents.death('minecraft:ender_dragon', event => {
    for(let i = 64; i < 128; i++){
        let block = event.level.getBlock([0, i, 0])
        if(block == 'minecraft:air'){
            block.set('minecraft:dragon_egg')
            break
        }
    }
})