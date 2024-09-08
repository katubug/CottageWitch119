BlockEvents.rightClicked('byg:imbued_blue_enchanted_log', event =>{
    if(event.item.hasTag('forge:axes')){
        event.block.popItem('create:experience_nugget')
    }
})
BlockEvents.rightClicked('byg:imbued_green_enchanted_log', event =>{
    if(event.item.hasTag('forge:axes')){
        event.block.popItem('create:experience_nugget')
    }
})
ServerEvents.recipes(event =>{

    let unimbueLog = (output, input) => {
        event.recipes.create.cutting(
            [output, Item.of('create:experience_nugget')], input
        )
    }
    unimbueLog('byg:green_enchanted_log','byg:imbued_green_enchanted_log')
    unimbueLog('byg:blue_enchanted_log','byg:imbued_blue_enchanted_log')
})

