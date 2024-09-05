//Make Deepslate faster to mine
BlockEvents.modification(e => {
	e.modify('minecraft:deepslate', block => {
		block.destroySpeed = 2
	  })

	e.modify('minecraft:cobbled_deepslate', block => {
		block.destroySpeed = 2
	  })

	e.modify('minecraft:polished_deepslate', block => {
		block.destroySpeed = 2
	})

	e.modify('#chipped:deepslate', block => {
		block.destroySpeed = 2
	})
  })