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
	event.smelting('minecraft:tube_coral_block', 'minecraft:dead_tube_coral_block')
	event.smelting('minecraft:brain_coral_block', 'minecraft:dead_brain_coral_block')
	event.smelting('minecraft:bubble_coral_block', 'minecraft:dead_bubble_coral_block')
	event.smelting('minecraft:fire_coral_block', 'minecraft:dead_fire_coral_block')
	event.smelting('minecraft:horn_coral_block', 'minecraft:dead_horn_coral_block')
	event.smelting('minecraft:tube_coral', 'minecraft:dead_tube_coral')
	event.smelting('minecraft:brain_coral', 'minecraft:dead_brain_coral')
	event.smelting('minecraft:bubble_coral', 'minecraft:dead_bubble_coral')
	event.smelting('minecraft:fire_coral', 'minecraft:dead_fire_coral')
	event.smelting('minecraft:horn_coral', 'minecraft:dead_horn_coral')
	event.smelting('minecraft:tube_coral_fan', 'minecraft:dead_tube_coral_fan')
	event.smelting('minecraft:brain_coral_fan', 'minecraft:dead_brain_coral_fan')
	event.smelting('minecraft:bubble_coral_fan', 'minecraft:dead_bubble_coral_fan')
	event.smelting('minecraft:fire_coral_fan', 'minecraft:dead_fire_coral_fan')
	event.smelting('minecraft:horn_coral_fan', 'minecraft:dead_horn_coral_fan')

})