ServerEvents.recipes(event => {

let bagColors = [
   "red",
        "yellow",
        "black",
        "white",
        "orange",
        "magenta",
        "light_blue",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green"
];

for (const color of bagColors) {
    event.shaped(
        Item.of('comforts:sleeping_bag_'+color),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:'+color+'_wool'
        }
    )
    event.shapeless(
        Item.of('comforts:sleeping_bag_'+color),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/'+color
        ]
    )
}
})