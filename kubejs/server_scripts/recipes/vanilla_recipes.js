ServerEvents.recipes(event => {
	//Chest Recipe WTF why did the recipe go poof?
	event.shaped(
		Item.of('minecraft:chest'),
		[
			'AAA',
			'A A',
			'AAA'
		], {
			A: '#minecraft:planks'
		}
	)

	//Chest Recipe with Logs
	event.shaped(
		Item.of('minecraft:chest', 4),
		[
			'AAA',
			'A A',
			'AAA'
		], {
			A: '#minecraft:logs'
		}
	)

	//Uncompress Honey
	event.shapeless(
		Item.of('minecraft:honeycomb', 4),
		[
			'minecraft:honeycomb_block'
		]
	)

	//Uncompress Quartz
	event.shapeless(
		Item.of('minecraft:quartz', 4),
		[
			'minecraft:quartz_block'
		]
	)

	// lodestone uses spelunkery
	event.shaped(
		Item.of('minecraft:lodestone'),
		[
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'minecraft:chiseled_stone_bricks',
			B: 'spelunkery:cinnabar',
			C: 'spelunkery:magnetite_chunk'
		}
	)

	// wool to string
	event.shapeless(
		Item.of('minecraft:string', 4),
		[
			'#minecraft:wool'
		]
	)

	// string to wool
	event.shaped(
		Item.of('minecraft:white_wool'),
		[
			'AA ',
			'AA ',
			'   '
		], {

			A: 'minecraft:string'

		}
	)

	//Saddle
	event.shaped(
		Item.of('minecraft:saddle', 1),
		[
			'AAA',
			' B '
		], {
			A: 'minecraft:leather',
			B: '#forge:rope'
		}
	)

	//Dripstone Cutting
	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [{
			item: 'minecraft:dripstone_block'
		}],
		tool: {
			tag: 'forge:tools/pickaxes'
		},
		result: [{
			item: 'minecraft:pointed_dripstone',
			count: 4
		}]
	})

	// smelting live coral to dead coral
	event.smelting('minecraft:dead_tube_coral_block', 'minecraft:tube_coral_block')
	event.smelting('minecraft:dead_brain_coral_block', 'minecraft:brain_coral_block')
	event.smelting('minecraft:dead_bubble_coral_block', 'minecraft:bubble_coral_block')
	event.smelting('minecraft:dead_fire_coral_block', 'minecraft:fire_coral_block')
	event.smelting('minecraft:dead_horn_coral_block', 'minecraft:horn_coral_block')
	event.smelting('minecraft:dead_tube_coral', 'minecraft:tube_coral')
	event.smelting('minecraft:dead_brain_coral', 'minecraft:brain_coral')
	event.smelting('minecraft:dead_bubble_coral', 'minecraft:bubble_coral')
	event.smelting('minecraft:dead_fire_coral', 'minecraft:fire_coral')
	event.smelting('minecraft:dead_horn_coral', 'minecraft:horn_coral')
	event.smelting('minecraft:dead_tube_coral_fan', 'minecraft:tube_coral_fan')
	event.smelting('minecraft:dead_brain_coral_fan', 'minecraft:brain_coral_fan')
	event.smelting('minecraft:dead_bubble_coral_fan', 'minecraft:bubble_coral_fan')
	event.smelting('minecraft:dead_fire_coral_fan', 'minecraft:fire_coral_fan')
	event.smelting('minecraft:dead_horn_coral_fan', 'minecraft:horn_coral_fan')

})
