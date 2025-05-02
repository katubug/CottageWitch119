ServerEvents.recipes(event => {
    // Remove Keg Recipes that crash / are being rewritten
    let toRemove = [
        { output: 'brewinandchewin:jerky' }, 
        { output: 'brewinandchewin:kimchi' },
        { output: 'brewinandchewin:kippers' },
        { output: 'culturaldelights:pickle' }
    ];

	for (const remove of toRemove) {
		event.remove(remove);
	}
})


ServerEvents.recipes(event => {
    // Jerky
    event.custom({
		"type": "brewinandchewin:fermenting",
		"experience": 0.6,
		"fermentingtime": 12000,
		"fluiditem": {
			"item": "spelunkery:salt"
		  },
		"ingredients": [
			{
			"tag": "brewinandchewin:raw_meats"
			},
			{
			"tag": "brewinandchewin:raw_meats"
			},
			{
			"tag": "brewinandchewin:raw_meats"
			}
		],
		"recipe_book_tab": "misc",
		"result": {
			"count": 3,
			"item": "brewinandchewin:jerky"
		},
		"temperature": 3
	}).id('kjs_jerky')

    // Kippers
	event.custom({
		"type": "brewinandchewin:fermenting",
		"experience": 0.6,
		"fermentingtime": 12000,
		"fluiditem": {
			"item": "spelunkery:salt"
		  },
		"ingredients": [
			{
			"tag": "forge:raw_fishes"
			},
			{
			"tag": "forge:raw_fishes"
			},
			{
			"item": "minecraft:kelp"
			}
		],
		"recipe_book_tab": "misc",
		"result": {
			"count": 3,
			"item": "brewinandchewin:kippers"
		},
		"temperature": 3
	}).id('kjs_kippers')
	
    // Kimchi
	event.custom({
		"type": "brewinandchewin:fermenting",
		"experience": 0.6,
		"fermentingtime": 12000,
		"fluiditem": {
			"item": "spelunkery:salt"
		  },
		"ingredients": [
		  {
			"item": "farmersdelight:cabbage_leaf"
		  },
		  {
			"tag": "forge:vegetables"
		  },
		  {
			"item": "minecraft:kelp"
		  }
		],
		"recipe_book_tab": "misc",
		"result": {
		  "count": 2,
		  "item": "brewinandchewin:kimchi"
		},
		"temperature": 3
	}).id('kjs_kimchi')

    // Pickle
	event.custom({
		"type": "brewinandchewin:fermenting",
		"experience": 0.6,
		"fermentingtime": 12000,
		"fluiditem": {
			"item": "spelunkery:salt"
		  },
		"ingredients": [
			{
			"item": "culturaldelights:cucumber"
			},
			{
			"item": "culturaldelights:cucumber"
			},
			{
			"item": "culturaldelights:cucumber"
			},
			{
			"item": "culturaldelights:cucumber"
			}
		],
		"recipe_book_tab": "misc",
		"result": {
			"count": 4,
			"item": "culturaldelights:pickle"
		},
  "temperature": 2
	}).id('kjs_pickle')
})