ServerEvents.recipes(event => {

	//Burger Recipes
	//Hamburger
	event.shapeless(
		Item.of('farmersdelight:hamburger'),
		[
			'#forge:bread',
			'#forge:salad_ingredients',
			'farmersdelight:onion',
			'farmersdelight:tomato',
			'#forge:cooked_beef'
		]
	)

	//Cheeseburger Conversion
	event.shapeless(
		Item.of('delightful:cheeseburger'),
		[
			'farmersdelight:hamburger',
			'#forge:cheese'
		]
	)

	//Cheeseburger from scratch
	event.shapeless(
		Item.of('delightful:cheeseburger'),
		[
			'#forge:bread',
			'#forge:salad_ingredients',
			'farmersdelight:onion',
			'farmersdelight:tomato',
			'#forge:cooked_beef',
			'#forge:cheese'
		]
	)

	//Ultraburger Conversion
	event.shapeless(
		Item.of('delightful:deluxe_cheeseburger'),
		[
			'delightful:cheeseburger',
			'#forge:cheese',
			'#forge:cooked_beef',
			'farmersdelight:cooked_bacon'
		]
	)

	//Ultraburger from scratch
	event.shapeless(
		Item.of('delightful:deluxe_cheeseburger'),
		[
			'#forge:bread',
			'#forge:salad_ingredients',
			'farmersdelight:onion',
			'farmersdelight:tomato',
			'#forge:cooked_beef',
			'#forge:cheese',
			'#forge:cheese',
			'farmersdelight:cooked_bacon'
		]
	)

	//Burn the hell out of steak
	event.smelting('supplementaries:ash', 'minecraft:cooked_beef')

	// Mushroom Stew
	event.shapeless(
		Item.of('minecraft:mushroom_stew'),
		[
			'#forge:mushrooms',
			'#forge:mushrooms',
			'#forge:bowls'
		]
	)

	// Nourishing Egg Recipe
	event.shaped(
		Item.of('ends_delight:non_hatchable_dragon_egg'),
		[
			'ABA',
			'CDC',
			'ABA'
		], {
			A: '#forge:roasted_dragon_meat',
			B: 'minecraft:bone_meal',
			C: 'minecraft:milk_bucket',
			D: 'minecraft:dragon_egg'
		}
	)

	// Farmer's Delight Milk Crafting
	event.shapeless(
		Item.of('farmersdelight:milk_bottle', 3),
		[
			'minecraft:milk_bucket',
			'minecraft:glass_bottle',
			'minecraft:glass_bottle',
			'minecraft:glass_bottle'
		]
	)

	// Craft Water Lettuce
	event.shapeless(
		Item.of('babyfat:water_lettuce', 2),
		[
			'farmersdelight:cabbage',
			'farmersdelight:rice_panicle'
		]
	)
})