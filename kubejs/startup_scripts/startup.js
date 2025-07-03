// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

Platform.mods.kubejs.name = 'Cottage Witch'

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

//Make Deepslate faster to mine
BlockEvents.modification(e => {
	e.modify('minecraft:deepslate', block => {
		block.destroySpeed = 1
	  })

	e.modify('minecraft:cobbled_deepslate', block => {
		block.destroySpeed = 1
	  })

	e.modify('minecraft:polished_deepslate', block => {
	block.destroySpeed = 1
	})

	e.modify('#chipped:deepslate', block => {
	block.destroySpeed = 1
	})
  })

  ItemEvents.modification((event) => {
    const increaseStackSize = [
		'usefulslime:slippery_slime_block',
		'byg:ametrine_horse_armor',
		'byg:pendorite_horse_armor',
		'minecraft:leather_horse_armor',
		'minecraft:iron_horse_armor',
		'minecraft:golden_horse_armor',
		'minecraft:diamond_horse_armor'
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    })
})
