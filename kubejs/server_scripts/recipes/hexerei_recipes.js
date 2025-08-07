ServerEvents.recipes(event => {
    // Remove Hexerei Recipes that crash / are being rewritten
    let toRemove = [
        { output: 'hexerei:willow_woodcutter' }
    ];

	for (const remove of toRemove) {
		event.remove(remove);
	}
})

ServerEvents.recipes(event => {
    
    //Willow Woodcutter Replacement
	event.shaped(
		Item.of('hexerei:mahogany_woodcutter'),
		[
			' C ',
			'ABA'
		], {
			A: 'hexerei:willow_planks',
			B: 'minecraft:andesite',
			C: 'minecraft:iron_ingot'
		}
	)

})