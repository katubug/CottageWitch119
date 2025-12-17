ServerEvents.recipes(event => {
	// Mushroom Stew Cup
	event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 1,
        "ingredients": [
            { 
                "tag": "forge:mushrooms"
            },
            {
                "tag": "forge:mushrooms"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "miners_delight:mushroom_stew_cup"
        }
    }).id('kjs_mushroom_stew_cup')
    
    // Rabbit Stew Cup
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 1,
        "ingredients": [
            { 
                "item": "minecraft:baked_potato"
            },
            {
                "item": "minecraft:rabbit"
            },
            {
                "item": "minecraft:carrot"
            },
            {
                "tag": "forge:mushrooms"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "miners_delight:rabbit_stew_cup"
        }
    }).id('kjs_rabbit_stew_cup')

    // Beef Stew Cup
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 1,
        "ingredients": [
            { 
                "tag": "forge:raw_beef"
            },
            {
                "item": "minecraft:carrot"
            },
            {
                "item": "minecraft:potato"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "miners_delight:beef_stew_cup"
        }
    }).id('kjs_beef_stew_cup')
})