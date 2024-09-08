

BlockEvents.rightClicked('minecraft:shulker_box', e => {
    if(e.item.id == 'sophisticatedstorage:basic_tier_upgrade'     
    || e.item.id == 'sophisticatedstorage:basic_to_copper_tier_upgrade'
    || e.item.id == 'sophisticatedstorage:basic_to_iron_tier_upgrade'
    || e.item.id == 'sophisticatedstorage:basic_to_gold_tier_upgrade'
    || e.item.id == 'sophisticatedstorage:basic_to_diamond_tier_upgrade'
    || e.item.id == 'sophisticatedstorage:basic_to_netherite_tier_upgrade'
    ) e.cancel()
})
