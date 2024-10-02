ServerEvents.recipes(event => {
	// Glowstick Recipe Uses Tags
	event.shaped(
		Item.of('spelunkery:glowstick', 4),
		[
			' A ',
			' B ',
			' C '
		], {
			A: '#forge:slimeballs',
			B: '#forge:glowstickingredients',
			C: 'minecraft:stick'
		}
	)

	//Compost uses tags
	event.shapeless(
		Item.of('farmersdelight:organic_compost', 2),
		[
			'#forge:dirt',
			'#supplementaries:straw',
			'#supplementaries:straw',
			'minecraft:bone_meal',
			'minecraft:bone_meal',
			'#forge:compost',
			'#forge:compost',
			'#forge:compost',
			'#forge:compost'
		]
	)

	// Fried Egg uses all Eggs
	event.smelting('farmersdelight:fried_egg', '#forge:eggs')

	//Recipe Replacements
	//Cherries
	event.replaceInput({
			input: 'environmental:cherries'
		}, // Arg 1: the filter
		'environmental:cherries', // Arg 2: the item to replace
		'#forge:fruits/cherry' // Arg 3: the item to replace it with
	)

	//Walnut Replacements
	event.replaceInput({
			input: 'ecologics:walnut'
		}, // Arg 1: the filter
		'ecologics:walnut', // Arg 2: the item to replace
		'#forge:nuts/walnut' // Arg 3: the item to replace it with
	)

	//Compressed Dirt
	event.replaceInput({
			input: 'minecraft:dirt'
		}, // Arg 1: the filter
		'minecraft:dirt', // Arg 2: the item to replace
		'#forge:compressable_dirt' // Arg 3: the item to replace it with
	)

	//Backpacked uses any leather
	event.shaped(
		Item.of('backpacked:backpack'),
		[
			'AAA',
			'BCB',
			'AAA'
		], {
			A: '#forge:leather',
			B: '#forge:string',
			C: 'minecraft:iron_ingot',

		}
	)
})