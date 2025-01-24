ServerEvents.recipes(event => {

    // Array of frosting colors, ordered to match the colors used in Extra Delight :P
    const COLORS = [
        "white",
        "light_gray",
        "gray",
        "black",
        "brown",
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink"
    ]

    // Loop to generate recipes for each color of frosting and frosted gingerbread blocks
    for (const color of COLORS) {
        event.recipes.create.mixing(
            [
                `4x extradelight:frosting_${color}`
            ],
            [   
                "#forge:whipped_cream",
                `#forge:dyes/${color}`,
                "#forge:butter",
                "#extradelight:sweetener"
            ]
        )

        event.recipes.create.deploying(
            `extradelight:gingerbread_block_${color}`,
            [
                "extradelight:gingerbread_cookie_block_item",
                `extradelight:frosting_${color}`
            ]
        )
    }
})

ServerEvents.recipes(event => {

    // Butter mixing recipe
    event.recipes.create.mixing(
        [
            "#forge:butter"
        ],
        "#forge:whipped_cream"
    )

})

ServerEvents.recipes(event => {

    // Shared ingredients for all cookie dough recipes
    const COOKIE_BASE = [
        "#forge:flour",
        "#forge:eggs",
        "#extradelight:sweetener",
        "#forge:butter"
    ]

    // Basic sugar cookie dough recipe
    event.recipes.create.mixing(
        `extradelight:sugar_cookie_dough`,
        COOKIE_BASE
    )

    // Flavor options with each flavor’s unique ingredients
    const COOKIE_FLAVORINGS = {
        "gingerbread": ["#forge:cinnamon/ground", "#forge:ginger/grated"],
        "pumpkin": ["farmersdelight:pumpkin_slice"],
        "glow_berry": ["minecraft:glow_berries"],
        "apple": ["#forge:cinnamon/ground", "#extradelight:processed/apple"],
        "sweet_berry": ["minecraft:sweet_berries"],
        "honey": ["minecraft:honey_bottle"],
        "chocolate_chip": ["minecraft:cocoa_beans"]
    }

    // Create recipes for each flavored cookie dough, using the base ingredients plus the unique flavor
    for (const flavor in COOKIE_FLAVORINGS) {
        event.recipes.create.mixing(
            `extradelight:${flavor}_cookie_dough`,
            COOKIE_BASE.concat(COOKIE_FLAVORINGS[flavor])
        )


        event.recipes.create.mixing(
            `extradelight:${flavor}_cookie_dough`,
            ["extradelight:sugar_cookie_dough"].concat(COOKIE_FLAVORINGS[flavor])
        )

    }

})
