ServerEvents.recipes(event => {
    
    //Witchy Compost
    event.shapeless(
        Item.of('farmersdelight:organic_compost', 2), 
        [ 
            {tag: 'forge:dirt'},
            {tag: 'supplementaries:straw'},
            {tag: 'supplementaries:straw'},
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            {tag: 'forge:compost'},
            {tag: 'forge:compost'},
            {tag: 'forge:compost'},
            {tag: 'forge:compost'}
        ]
      )

    // Building Gadgets

    //Building Gadget
    event.shaped(
        Item.of('buildinggadgets:gadget_building', '{energy:500000.0d,state:{data:{},serializer:"buildinggadgets:dummy_serializer",state:{Name:"minecraft:air"}}}'),
        [
            'ABA',
            'CBC',
            'ADA'
        ],
        {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:diamond',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Exchanging Gadget
    event.shaped(
        Item.of('buildinggadgets:gadget_exchanging', '{energy:500000.0d,state:{data:{},serializer:"buildinggadgets:dummy_serializer",state:{Name:"minecraft:air"}}}'),        [
            'ABA',
            'CDC',
            'ADA'
        ],
        {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:diamond',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Copy Paste Gadget
    event.shaped(
        Item.of('buildinggadgets:gadget_copy_paste', '{energy:500000.0d,mode:0b,template_id:[I;-1758435112,-1217443030,-1679697278,2082124584]}'),        
        [
            'ABA',
            'CBC',
            'ADA'
        ],
        {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:emerald',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Destruction Gadget
    event.shaped(
        Item.of('buildinggadgets:gadget_destruction', '{energy:1000000.0d,fuzzy:1b,overlay:1b}'),
        [
            'ABA',
            'CBC',
            'ADA'
        ],
        {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:ender_pearl',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Akashic Tome
    event.shapeless(
        Item.of('akashictome:tome', '{"akashictome:data":{alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},babyfat:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"babyfat:the_book_of_baby_fat"}},byg:{Count:1b,id:"byg:biomepedia"},caupona:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"caupona:book"}},create_central_kitchen:{Count:1b,ForgeCaps:{Parent:{}},id:"create_central_kitchen:cooking_guide"},deeperdarker:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"deeperdarker:wanderers_notebook"}},ftbquests:{Count:1b,id:"ftbquests:book"},lexicon:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"lexicon:lexicon"}},mythicmounts:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"mythicmounts:mythical_mounts"}},sculktransporting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sculktransporting:guide"}},solsweetpotato:{Count:1b,id:"solsweetpotato:food_book"}}}'),
            [ 
                'minecraft:book',
                'minecraft:stick'
            ]
          )

    //Time In A bottle
    event.shaped(
        Item.of('tiab:time_in_a_bottle'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:diamond',
            C: 'minecraft:clock',
            D: 'minecraft:lapis_lazuli',
            E: 'quark:bottled_cloud'
        }
    )

    //Ars Nouveau Novice Spellbook
    event.shaped(
        Item.of('ars_nouveau:novice_spell_book'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'ars_nouveau:worn_notebook'
        }
    )

    //Critters and Companions Pearl Necklaces
    //Necklace Tier 2
    event.shapeless(
        Item.of('crittersandcompanions:pearl_necklace_2'),
            [ 
                'crittersandcompanions:pearl_necklace_1',
                'minecraft:ender_pearl'
            ]
          )

    //Necklace Tier 3
    event.shapeless(
        Item.of('crittersandcompanions:pearl_necklace_3'),
        [ 
            'crittersandcompanions:pearl_necklace_2',
            'mermod:glowing_pearl_modifier'
        ]
      )

    //Mermod Moon Rock Uses Moon Dust
    event.shapeless(
        Item.of('mermod:moon_rock_modifier'),
        [ 
            '#forge:cobblestone',
            'hexerei:moon_dust',
            'minecraft:black_dye'
        ]
      )

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

    //Nature's Compass
    event.shaped(
        Item.of('naturescompass:naturescompass'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#minecraft:saplings',
            B: '#minecraft:logs',
            C: 'hexerei:dowsing_rod'
        }
    )

    //Chest Recipe WTF why did the recipe go poof?
    event.shaped(
        Item.of('minecraft:chest'),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
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
        ],
        {
            A: '#minecraft:logs'
        }
    )

    //End Remastered Eyes to Pearls
    event.shapeless(
        Item.of('minecraft:ender_pearl', 4),
        [ 
            '#forge:eyes'
        ]
      )

    //Selenite Glass Purification
    event.shaped(
        Item.of('minecraft:glass', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:stained_glass',
            B: 'hexerei:selenite_shard'
        }
    )

    //Mandrake Totem of Undying
    event.shaped(
        Item.of('minecraft:totem_of_undying'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'twilightforest:red_thread',
            B: 'endrem:evil_eye',
            C: 'hexerei:moon_dust',
            D: 'hexerei:mandrake_root',
            E: 'twilightforest:charm_of_life_1'
        }
    )

    //Ring of Ender Chest
    event.shaped(
        Item.of('ring_of_enderchest:ring_of_enderchest'),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:ender_pearl',
            C: 'minecraft:ender_chest'
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

    // Pipez Item Pipe
    event.shaped(
        Item.of('pipez:item_pipe', 16),
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:redstone'
        }
    )

    // Tarot Deck
    event.shaped(
        Item.of('tarotcards:tarot_deck'),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: 'create:golden_sheet',
            B: 'minecraft:dragon_egg',
            C: 'minecraft:nether_star',
            D: 'tarotcards:justice'
        }
    )

    // Dried Sage Bundle
    event.shaped(
        Item.of('hexerei:dried_sage_bundle'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'hexerei:dried_sage',
            B: 'minecraft:string'
        }
    )

    // Warp Scrolls to Warp Stones
    event.shaped(
        Item.of('waystones:warp_stone'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'waystones:warp_scroll',
            B: 'minecraft:emerald'
        }
    )

    // Waystones to Sharestones
    event.shapeless(
        Item.of('waystones:sharestone'),
        [ 
            '#forge:waystones'
        ]
    )

    // Quark Azalea Wood Conversion Recipes

    // Quark Azalea Log
    event.shapeless(
        Item.of('quark:azalea_log'),
        [ 
            'minecraft:moss_block',
            '#forge:azalea_logs'
        ]
    )

    // Quark Azalea Wood
    event.shapeless(
        Item.of('quark:azalea_wood'),
        [ 
            'minecraft:moss_block',
            '#forge:azalea_wood'
        ]
    )

    // Quark Azalea Planks
    event.shapeless(
        Item.of('quark:azalea_planks'),
        [ 
            'minecraft:moss_block',
            '#forge:azalea_planks'
        ]
    )

    // Quark Azalea Stripped Wood
    event.shapeless(
        Item.of('quark:stripped_azalea_wood'),
        [ 
            'minecraft:moss_block',
            'ecologics:stripped_azalea_wood'
        ]
    )

    // Quark Azalea Stripped Log
    event.shapeless(
        Item.of('quark:stripped_azalea_log'),
        [ 
            'minecraft:moss_block',
            'ecologics:stripped_azalea_log'
        ]
    )

    // Mermod Sea Crystal
    event.shapeless(
        Item.of('mermod:sea_crystal', 4),
        [ 
            'endrem:guardian_eye',
            'minecraft:heart_of_the_sea'
        ]
    )

    // Fried Egg uses all Eggs
    event.smelting('farmersdelight:fried_egg', '#forge:eggs')
    
    // Plushie Cloning
    //Snow Golem
    event.shaped(
        Item.of('plushies:snow_golem', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:snow_golem'
        }
    )

    //Axolotl
    event.shaped(
        Item.of('plushies:axolotl', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:axolotl'
        }
    )

    //Bee
    event.shaped(
        Item.of('plushies:bee', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:bee'
        }
    )

    //Cat
    event.shaped(
        Item.of('plushies:cat', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:cat'
        }
    )

    //cow
    event.shaped(
        Item.of('plushies:cow', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:cow'
        }
    )

    //Dolphin
    event.shaped(
        Item.of('plushies:dolphin', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:dolphin'
        }
    )

    //Dragon
    event.shaped(
        Item.of('plushies:dragon', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:dragon'
        }
    )

    //Enderman
    event.shaped(
        Item.of('plushies:enderman', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:enderman'
        }
    )

    //Cat
    event.shaped(
        Item.of('plushies:parrot', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:parrot'
        }
    )

    //Mooshroom
    event.shaped(
        Item.of('plushies:mooshroom', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:mooshroom'
        }
    )

    //llama
    event.shaped(
        Item.of('plushies:llama', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:llama'
        }
    )

    //white_fox
    event.shaped(
        Item.of('plushies:white_fox', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:white_fox'
        }
    )

    //frog
    event.shaped(
        Item.of('plushies:frog', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:frog'
        }
    )

    //goat
    event.shaped(
        Item.of('plushies:goat', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:goat'
        }
    )

    //warden
    event.shaped(
        Item.of('plushies:warden', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:warden'
        }
    )

    //sheep
    event.shaped(
        Item.of('plushies:sheep', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:sheep'
        }
    )

    //turtle
    event.shaped(
        Item.of('plushies:turtle', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:turtle'
        }
    )

    //magma_cube
    event.shaped(
        Item.of('plushies:magma_cube', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:magma_cube'
        }
    )

    //red_fox
    event.shaped(
        Item.of('plushies:red_fox', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:red_fox'
        }
    )

    //panda
    event.shaped(
        Item.of('plushies:panda', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:panda'
        }
    )

    //slime
    event.shaped(
        Item.of('plushies:slime', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:slime'
        }
    )

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
        ],
        {
            A: '#forge:roasted_dragon_meat',
            B: 'minecraft:bone_meal',
            C: 'minecraft:milk_bucket',
            D: 'minecraft:dragon_egg'
        }
    )

    //Gateway to Eternity Gate Pearl Recipes

    // Hoglin Gate
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:hoglin_gate"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:crimson_fungus',
            B: 'nethersdelight:hoglin_loin',
            C: 'minecraft:ender_eye'
        }
    )

    // Hoglin Gate Small
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:hoglin_gate_small"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:crimson_fungus',
            B: 'minecraft:porkchop',
            C: 'minecraft:ender_eye'
        }
    )

    // Wraith Gate
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:wraith_gate"}'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'quark:soul_bead',
            B: 'minecraft:ender_eye'
        }
    )

    // Guardian Gate
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:elder_guardian_gate"}'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:prismarine_shard',
            B: 'minecraft:ender_eye'
        }
    )

    // Cluttered Sewing Table Clutter Recipe
    event.shaped(
        Item.of('luphieclutteredmod:luphie_sewing_table_clutter'),
        [
            '   ',
            'ABC',
            '   '
        ],
        {
            A: '#forge:string',
            B: '#minecraft:wool_carpets',
            C: '#minecraft:wool'
        }
    )

    // Blackstone Blast Furnace
    event.shaped(
        Item.of('nethersdelight:blackstone_blast_furnace'),
        [
            'AAA',
            'ABA',
            'CCC'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: '#forge:blackstone_furnaces',
            C: 'minecraft:polished_blackstone'
        }
    )

    // Blackstone Furnace Conversion
    event.shapeless(
        Item.of('nethersdelight:blackstone_furnace'),
        [ 
            'quark:blackstone_furnace'
        ]
    )
    event.shapeless(
        Item.of('quark:blackstone_furnace'),
        [ 
            'nethersdelight:blackstone_furnace'
        ]
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

    //Recipe Replacements
    //Cherries
    event.replaceInput(
        { input: 'environmental:cherries' }, // Arg 1: the filter
        'environmental:cherries',            // Arg 2: the item to replace
        '#forge:fruits/cherry'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    //Compressed Dirt
    event.replaceInput(
        { input: 'minecraft:dirt' }, // Arg 1: the filter
        'minecraft:dirt',            // Arg 2: the item to replace
        '#forge:compressable_dirt'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    // BG Charging Gadget
    event.shaped(
        Item.of('charginggadgets:charging_station'),
        [
            'ABA',
            'DBD',
            'ACA'
        ],
        {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:coal_block',
            D: 'minecraft:lapis_lazuli'
        }
    )

    // BG Template Manager
    event.shaped(
        Item.of('buildinggadgets:template_manager'),
        [
            'ABA',
            'BCB',
            'ADA'
        ],
        {
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:emerald',
            D: 'minecraft:lapis_lazuli'
        }
    )

    // Mysterious Worm Craftable
    event.shaped(
        Item.of('alexsmobs:mysterious_worm'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'twilightforest:moonworm',
            B: 'ars_nouveau:void_jar'
        }
    )

    // Mosquito Larva Crafting
    event.shapeless(
        Item.of('alexsmobs:mosquito_larva'),
        [ 
            'alexsmobs:maggot',
            'minecraft:crimson_fungus'
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

    // Craft Fish Oil
    event.shapeless(
        Item.of('alexsmobs:fish_oil'),
        [ 
            '#forge:raw_fishes',
            '#forge:raw_fishes',
            '#forge:raw_fishes',
            '#forge:raw_fishes',
            'minecraft:glass_bottle'
        ]
    )

    // Sleeping Bags

    event.shaped(
        Item.of('comforts:sleeping_bag_cyan'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:cyan_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_purple'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:purple_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_blue'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:blue_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_brown'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:brown_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_green'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:green_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_red'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:red_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_black'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:black_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_white'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:white_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_orange'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:orange_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_light_blue'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:light_blue_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_yellow'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:yellow_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_lime'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:lime_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_pink'),
        [
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:pink_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_gray'),
        [    
            '   ',
            'A A',
            'BBB'
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:gray_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_light_gray'),
        [
            '   ',
            'A A',
            'BBB'

        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:light_gray_wool'
        }
    )

    event.shaped(
        Item.of('comforts:sleeping_bag_magenta'),
        [
            '   ',
            'A A',
            'BBB'

        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:magenta_wool'
        }
    )

    // Dyeing Sleeping Bags
    event.shapeless(
        Item.of('comforts:sleeping_bag_white'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/white'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_orange'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/orange'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_magenta'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/magenta'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_light_blue'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/light_blue'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_yellow'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/yellow'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_lime'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/lime'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_pink'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/pink'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_gray'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/gray'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_light_gray'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/light_gray'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_cyan'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/cyan'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_purple'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/purple'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_blue'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/blue'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_brown'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/brown'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_green'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/green'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_red'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/red'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_black'),
        [ 
            '#comforts:sleeping_bags',
            '#forge:dyes/black'
        ]
    )
    
    //Walnut Replacements
    event.replaceInput(
        { input: 'ecologics:walnut' }, // Arg 1: the filter
        'ecologics:walnut',            // Arg 2: the item to replace
        '#forge:nuts/walnut'         // Arg 3: the item to replace it with
    )

    // Soul Elytra
    event.shaped(
        Item.of('deeperdarker:soul_elytra'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'deeperdarker:sculk_bone',
            B: 'alexsmobs:skreecher_soul',
            C: 'deeperdarker:soul_dust',
            D: 'minecraft:elytra',
            E: 'quark:soul_bead',
            F: 'deeperdarker:soul_crystal'
        }
    )

   /* // Mixed Ore Chunk Uses Tags
    event.shapeless(
        Item.of('better_fishing_rods:mixed_ore_chunk'),
        [ 
            '#forge:ores/coal',
            '#forge:ores/iron',
            '#forge:ores/redstone',
            '#forge:ores/gold',
            '#forge:ores/lapis',
            '#forge:ores/diamond',
            '#forge:ores/emerald'
        ]
    )*/

    // Glowstick Recipe Uses Tags
    event.shaped(
        Item.of('spelunkery:glowstick', 4),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: '#forge:slimeballs',
            B: '#forge:glowstickingredients',
            C: 'minecraft:stick'
        }
    )

    // Coal to Compacting Drawers
    event.shapeless(
        Item.of('spelunkery:coal_lump', 9),
        [ 
            'minecraft:coal'
        ]
    )
    event.shapeless(
        Item.of('minecraft:coal'),
        [ 
            'spelunkery:coal_lump',
            'spelunkery:coal_lump',
            'spelunkery:coal_lump',
            'spelunkery:coal_lump',
            'spelunkery:coal_lump',
            'spelunkery:coal_lump',
            'spelunkery:coal_lump',
            'spelunkery:coal_lump',
            'spelunkery:coal_lump'
        ]
    )
    event.shapeless(
        Item.of('minecraft:coal', 9),
        [ 
            'minecraft:coal_block'
        ]
    )

    // Farseer Stuff
    // Gateway recipe
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:farseer_gate"}'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'create:sturdy_sheet',
            B: 'minecraft:diamond',
            C: 'deeperdarker:soul_crystal',
            D: 'alexsmobs:shattered_dimensional_carver',
            E: 'quark:soul_bead'
        }
    )

    // Transmutation Table
    event.shaped(
        Item.of('alexsmobs:transmutation_table'),
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            A: 'minecraft:netherite_ingot',
            B: 'minecraft:nether_star',
            C: 'alexsmobs:farseer_arm',
            D: 'minecraft:dragon_egg',
            E: 'minecraft:obsidian'
        }
    )

    // Gate Pearl Recipes
    // Murmur Gate
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:murmur_gate"}'),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: 'minecraft:note_block',
            B: 'quark:paper_lantern_sakura',
            C: 'hexerei:cloth',
            D: 'minecraft:ender_eye'
        }
    )

    // Mimicube
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:mimicube_gate"}'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:dragon_breath',
            B: 'ars_nouveau:mimic_scroll',
            C: 'alexsmobs:mimicream',
            D: 'minecraft:ender_eye',
            E: 'minecraft:slime_block'
        }
    )

    // Sculk
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:sculk_gate"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:sculk',
            B: 'deeperdarker:reinforced_echo_shard',
            C: 'minecraft:ender_eye'
        }
    )

    // Nether
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:nether_gate"}'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:blaze_rod',
            B: 'minecraft:warped_fungus',
            C: 'alexsmobs:maggot',
            D: 'minecraft:ender_eye',
            E: 'minecraft:crimson_fungus'
        }
    )

    // Insectoid
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:insectoid_gate"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'overweight_farming:vegetable_peels',
            B: 'minecraft:honey_bottle',
            C: 'minecraft:ender_eye'
        }
    )

    // Golden Core
    event.shaped(
        Item.of('gildednetherite:golden_core'),
        [
            'A A',
            'ABA',
            'A A'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'create:precision_mechanism'
        }
    )

    // Portable Jukebox
    event.shapeless(
        Item.of('portablejukebox:portable_jukebox'),
        [ 
            'minecraft:jukebox',
            'portablejukebox:portable_note_block'
        ]
    )

    // Tusklin Shoes
    event.shaped(
        Item.of('alexsmobs:pigshoes'),
        [
            'A A',
            'B B',
            'ACA'
        ],
        {
            A: 'minecraft:iron_nugget',
            B: 'minecraft:iron_ingot',
            C: 'twilightforest:ironwood_ingot'
        }
    )

    // squid
    event.shapeless(
        Item.of('miners_delight:squid'),
        [ 
            'culturaldelights:squid'
        ]
    )
    event.shapeless(
        Item.of('culturaldelights:squid'),
        [ 
            'miners_delight:squid'
        ]
    )
    event.shapeless(
        Item.of('miners_delight:glow_squid'),
        [ 
            'culturaldelights:glow_squid'
        ]
    )
    event.shapeless(
        Item.of('culturaldelights:glow_squid'),
        [ 
            'miners_delight:glow_squid'
        ]
    )
    event.shapeless(
        Item.of('miners_delight:baked_squid'),
        [ 
            'culturaldelights:cooked_squid'
        ]
    )
    event.shapeless(
        Item.of('culturaldelights:cooked_squid'),
        [ 
            'miners_delight:baked_squid'
        ]
    )
    
    //BYG Recipes
    // Windswept Sandstone
    event.shapeless(
        Item.of('byg:windswept_sandstone'),
        [ 
            'byg:windswept_sand',
            'byg:windswept_sand',
            'byg:windswept_sand',
            'byg:windswept_sand'
        ]
    )

    // Black Sand
    event.shaped(
        Item.of('byg:black_sand', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:sand',
            B: 'minecraft:black_dye'
        }
    )

    // white Sand
    event.shaped(
        Item.of('byg:white_sand', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:sand',
            B: 'minecraft:white_dye'
        }
    )

    // blue Sand
    event.shaped(
        Item.of('byg:blue_sand', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:sand',
            B: 'minecraft:blue_dye'
        }
    )

    // purple Sand
    event.shaped(
        Item.of('byg:purple_sand', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:sand',
            B: 'minecraft:purple_dye'
        }
    )

    // pink Sand
    event.shaped(
        Item.of('byg:pink_sand', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:sand',
            B: 'minecraft:pink_dye'
        }
    )

    // windswept Sand
    event.shaped(
        Item.of('byg:windswept_sand', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:sand',
            B: 'spelunkery:rock_salt'
        }
    )

    // end Sand
    event.shaped(
        Item.of('byg:end_sand', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:sand',
            B: 'minecraft:ender_pearl'
        }
    )

    // warped_soul Sand
    event.shaped(
        Item.of('byg:warped_soul_sand', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:sand',
            B: 'minecraft:warped_fungus'
        }
    )

    // warped_soul soil
    event.shaped(
        Item.of('byg:warped_soul_soil', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:dirt',
            B: 'minecraft:warped_fungus'
        }
    )
    event.shapeless(
        Item.of('prefab:item_carton_of_eggs'), 
        [ 
            'minecraft:egg',
            'minecraft:egg',
            'minecraft:egg',
            'minecraft:egg',
            'minecraft:egg',
            'minecraft:egg',
            'minecraft:egg',
            'minecraft:egg',
            'minecraft:egg'
        ]
      )

      event.shapeless(
        Item.of('minecraft:egg', 9), 
        [ 
            'prefab:item_carton_of_eggs'
        ]
      )

    // lodestone
    event.shaped(
        Item.of('minecraft:lodestone' ),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
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
 // hexerei stone window
 event.shapeless(
    Item.of('hexerei:stone_window', 2), 
    [ 
        '#forge:stone',
        '#forge:glass'
    ]
  )

  // hexerei stone window pane

  event.shaped(
    Item.of('hexerei:stone_window_pane', 16),
    [
        'AAA',
        'AAA'
    ],
    {
        A: 'hexerei:stone_window'
    }
  )

/// casting crystal
event.shaped(
    Item.of('casting_crystals:casting_crystal'),
    [
        'ADA',
        'DBD',
        'CDA'
    ],
    {
        A:'minecraft:string',
        B:'ars_nouveau:source_gem',
        C:'ars_nouveau:manipulation_essence',
        D:'minecraft:gold_ingot'
    })

// Coin Conversion recipes
    // Lunar to Solar
    event.shapeless(
        Item.of('kubejs:solar_coin'),
        [ 
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin'
        ]
    )

    // Solar to Arcane
    event.shapeless(
        Item.of('kubejs:arcane_coin'),
        [ 
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin'
        ]
    )

    // Arcane to Solar
    event.shapeless(
        Item.of('kubejs:solar_coin', 9),
        [ 
            'kubejs:arcane_coin'
        ]
    )

    // Solar to Lunar
    event.shapeless(
        Item.of('kubejs:lunar_coin', 9),
        [ 
            'kubejs:solar_coin'
        ]
    )
 /// Hexhaven Specific Coins
        // Lunar to Solar
        event.shapeless(
            Item.of('kubejs:solarcoin'),
            [ 
                'kubejs:lunarcoin',
                'kubejs:lunarcoin',
                'kubejs:lunarcoin',
                'kubejs:lunarcoin',
                'kubejs:lunarcoin',
                'kubejs:lunarcoin',
                'kubejs:lunarcoin',
                'kubejs:lunarcoin',
                'kubejs:lunarcoin'
            ]
        )
    
        // Solar to Arcane
        event.shapeless(
            Item.of('kubejs:arcanecoin'),
            [ 
                'kubejs:solarcoin',
                'kubejs:solarcoin',
                'kubejs:solarcoin',
                'kubejs:solarcoin',
                'kubejs:solarcoin',
                'kubejs:solarcoin',
                'kubejs:solarcoin',
                'kubejs:solarcoin',
                'kubejs:solarcoin'
            ]
        )
    
        // Arcane to Solar
        event.shapeless(
            Item.of('kubejs:solarcoin', 9),
            [ 
                'kubejs:arcanecoin'
            ]
        )
    
        // Solar to Lunar
        event.shapeless(
            Item.of('kubejs:lunarcoin', 9),
            [ 
                'kubejs:solarcoin'
            ]
        )

//Mythic Mounts Book

event.shapeless(
    Item.of('patchouli:guide_book', '{"patchouli:book":"mythicmounts:mythical_mounts"}'),
    [ 
        'minecraft:book',
        'minecraft:saddle'
    ]
)
 



 //Saddle
event.shaped(
    Item.of('minecraft:saddle', 1),
    [
        'AAA',
        ' B '
    ],
    {
        A: 'minecraft:leather',
        B: '#forge:rope' 
    }
  )

      // Palette
      event.shaped(
        Item.of('xercapaint:item_palette'),
        [
            'AA ',
            'AA '
        ],
        {
            A: '#minecraft:wooden_slabs'
        }
    )

        //Cluttered's Shelves
        event.shaped(
            Item.of('luphieclutteredmod:small_shelf'),
            [
                'AAA',
                'A A'
            ],
            {
                A: 'minecraft:oak_slab'
            }
        )

    // Aquaculture Fishies
    let aquaFish = [
        'aquaculture:arapaima', 
        'aquaculture:atlantic_cod', 
        'aquaculture:atlantic_halibut', 
        'aquaculture:atlantic_herring', 
        'aquaculture:bayad', 
        'aquaculture:blackfish', 
        'aquaculture:bluegill', 
        'aquaculture:boulti', 
        'aquaculture:brown_shrooma',
        'aquaculture:brown_trout', 
        'aquaculture:capitaine', 
        'aquaculture:carp', 
        'aquaculture:catfish', 
        'aquaculture:gar', 
        'aquaculture:jellyfish', 
        'aquaculture:minnow', 
        'aquaculture:muskellunge', 
        'aquaculture:pacific_halibut', 
        'aquaculture:perch', 
        'aquaculture:pink_salmon', 
        'aquaculture:piranha', 
        'aquaculture:pollock', 
        'aquaculture:rainbow_trout', 
        'aquaculture:red_grouper', 
        'aquaculture:red_shrooma', 
        'aquaculture:smallmouth_bass', 
        'aquaculture:synodontis', 
        'aquaculture:tambaqui', 
        'aquaculture:tuna'
    ];

    for (const fish of aquaFish) {
        event.shapeless(
            Item.of(fish+'_bucket'),
            [
                fish, 'minecraft:water_bucket'
            ]
        ).replaceIngredient('minecraft:water_bucket', Item.empty)
    }

// backpacked

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


// New EXP Pump Upgrade 
event.shaped(
    Item.of('sophisticatedbackpacks:xp_pump_upgrade'),
    [
        'BCB',
        'DAD',
        'BCB'
    ], {
        A: 'sophisticatedbackpacks:upgrade_base',
        B: 'minecraft:redstone',
        C: 'minecraft:ender_eye',
        D: 'minecraft:experience_bottle'
    }

    
)

/// Refined Storage Recipes

//Controller
event.shaped(
    Item.of('refinedstorage:creative_controller'),
    [
        'ABA',
        'CEC',
        'ADA'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'minecraft:lodestone',
        C: 'refinedstorage:silicon',
        D: 'refinedstorage:machine_casing',
        E: 'ars_creo:starbuncle_wheel'
    }

)

//Cable
event.shaped(
    Item.of('refinedstorage:cable', 12),
    [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'glassential:glass_redstone',
        C: 'minecraft:glowstone_dust'
    
    }

)

// Aetheric Receptor
event.shaped(
    Item.of('refinedstorage:network_receiver'),
    [
        'AFA',
        'BED',
        'CCC'
    ], {
        A: 'refinedstorage:advanced_processor',
        B: 'refinedstorage:construction_core',
        C: 'minecraft:ender_pearl',
        D: 'refinedstorage:destruction_core',
        E: 'refinedstorage:machine_casing',
        F: 'ars_nouveau:glyph_redstone_signal'
    
    }

)

// Aetheric Messenger
event.shaped(
    Item.of('refinedstorage:network_transmitter'),
    [
        'CCC',
        'BED',
        'AFA'
    ], {
        A: 'refinedstorage:advanced_processor',
        B: 'refinedstorage:construction_core',
        C: 'minecraft:ender_pearl',
        D: 'refinedstorage:destruction_core',
        E: 'refinedstorage:machine_casing',
        F: 'ars_nouveau:glyph_redstone_signal'
    
    }

)

/// Stone Casing/Storage Housing
event.shaped(
    Item.of('refinedstorage:storage_housing'),
    [
        'CCC',
        'CAC',
        'BBB'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'glassential:glass_redstone',
        C: '#forge:stone'
    
    }

)

/// Upgrade
event.shaped(
    Item.of('refinedstorage:upgrade'),
    [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'glassential:glass_redstone',
        C: 'refinedstorage:improved_processor'
    
    }

)

/// 1k Storage Glyph / Storage Part
event.shaped(
    Item.of('refinedstorage:1k_storage_part'),
    [
        ' C ',
        'CAC',
        ' C '
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        C: 'refinedstorage:basic_processor'
    
    }

)

/// 1k Glyphstone / 1k Storage Disk
event.shaped(
    Item.of('refinedstorage:1k_storage_disk'),
    [
        'DBD',
        'BCB',
        'AAA'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'glassential:glass_redstone',
        C: 'refinedstorage:1k_storage_part',
        D: '#forge:stone'
    
    }

)
/// 4k Glyphstone / 4k Storage Disk
event.shaped(
    Item.of('refinedstorage:4k_storage_disk'),
    [
        'DBD',
        'BCB',
        'AAA'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'glassential:glass_redstone',
        C: 'refinedstorage:4k_storage_part',
        D: '#forge:stone'
    
    }

)

/// 16k Glyphstone / 16k Storage Disk
event.shaped(
    Item.of('refinedstorage:16k_storage_disk'),
    [
        'DBD',
        'BCB',
        'AAA'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'glassential:glass_redstone',
        C: 'refinedstorage:16k_storage_part',
        D: '#forge:stone'
    
    }

)

/// 64k Glyphstone / 64k Storage Disk
event.shaped(
    Item.of('refinedstorage:64k_storage_disk'),
    [
        'DBD',
        'BCB',
        'AAA'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'glassential:glass_redstone',
        C: 'refinedstorage:64k_storage_part',
        D: '#forge:stone'
    
    }

)


// Aetheric Console / Creative Wireless Grid
event.shaped(
    Item.of('refinedstorage:creative_wireless_grid'),
    [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'minecraft:ender_pearl',
        C: '#refinedstorage:grid',
        D: 'refinedstorage:advanced_processor'
    }
)

    // Aetheric Crafting Console/Creative Wireless Crafting Grid
event.shaped(
    Item.of('refinedstorageaddons:creative_wireless_crafting_grid'),
    [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'minecraft:ender_pearl',
        C: '#refinedstorage:crafting_grid',
        D: 'refinedstorage:advanced_processor'
    }  
)



    // Infinity Range Booster
    event.shaped(
        Item.of('rsinfinitybooster:infinity_card'),
        [
            ' B ',
            'BCB',
            ' B '
        ], {
        
            B: 'refinedstorage:range_upgrade',
            C: 'minecraft:nether_star',
    
        }
    )

        // Dimension Card
event.shaped(
    Item.of('rsinfinitybooster:dimension_card'),
    [
        ' A ',
        'BCD',
        ' E '
    ], {
        A: 'twilightforest:maze_map_focus',
        B: 'deeperdarker:heart_of_the_deep',
        C: 'rsinfinitybooster:infinity_card',
        D: 'minecraft:dragon_egg',
        E: 'minecraft:netherite_ingot'
    }  
)

    // Illuminite (quartz-enriched iron)
    event.shaped(
        Item.of('refinedstorage:quartz_enriched_iron', 4),
        [
            'AA ',
            'AB ',
            '   '
        ], {
        
            A: 'minecraft:iron_ingot',
            B: 'minecraft:glowstone_dust',
    
        }
    )

     // Illuminite Block uncrafting
     event.shapeless(
        Item.of('refinedstorage:quartz_enriched_iron', 9),
        [
        
        
            'refinedstorage:quartz_enriched_iron_block'

        ]
    )  

// Aetheric Messenger
event.shapeless(
    Item.of('refinedstorage:network_transmitter'),
    [
     
        '#refinedstorage:network_transmitter',
        '#forge:dyes/light_blue'
    ]
)

// Aetheric Receptor
event.shapeless(
    Item.of('refinedstorage:network_receiver'),
    [
     
        '#refinedstorage:network_receiver',
        '#forge:dyes/light_blue'
    ]
)


// Aetheric Crafting Console / creative wireless crafting grid
    event.shapeless(
        Item.of('refinedstorageaddons:creative_wireless_crafting_grid'),
        [
         
            'refinedstorageaddons:creative_wireless_grid',
            'minecraft:crafting_table',
            'refinedstorage:advanced_processor'
        ]
    )
    
    // 1k Storage disk from storage housing
    event.shapeless(
        Item.of('refinedstorage:1k_storage_disk'),
        [ 
              'refinedstorage:1k_storage_part',
              'refinedstorage:storage_housing'
           
        ]
    )
    // 4k Storage disk from storage housing
    event.shapeless(
        Item.of('refinedstorage:4k_storage_disk'),
        [ 
              'refinedstorage:4k_storage_part',
              'refinedstorage:storage_housing'
           
        ]
    )

    // 16k Storage disk from storage housing
    event.shapeless(
        Item.of('refinedstorage:16k_storage_disk'),
        [ 
              'refinedstorage:16k_storage_part',
              'refinedstorage:storage_housing'
           
        ]
    )
    // 64k Storage disk from storage housing
    event.shapeless(
        Item.of('refinedstorage:64k_storage_disk'),
        [ 
              'refinedstorage:64k_storage_part',
              'refinedstorage:storage_housing'
           
        ]
    )
    




    // White Controller
    event.shapeless(
        Item.of('refinedstorage:white_creative_controller'),
        [ 
              '#forge:creative_controller',
            '#forge:dyes/white'
        ]
    )

        // Black Controller
        event.shapeless(
            Item.of('refinedstorage:black_creative_controller'),
            [ 
                  '#forge:creative_controller',
                '#forge:dyes/black'
            ]
        )

            // Light Gray Controller
    event.shapeless(
        Item.of('refinedstorage:light_gray_creative_controller'),
        [ 
              '#forge:creative_controller',
            '#forge:dyes/light_gray'
        ]
    )

        // Gray Controller
        event.shapeless(
            Item.of('refinedstorage:gray_creative_controller'),
            [ 
                  '#forge:creative_controller',
                '#forge:dyes/gray'
            ]
        )

            // Brown Controller
    event.shapeless(
        Item.of('refinedstorage:brown_creative_controller'),
        [ 
              '#forge:creative_controller',
            '#forge:dyes/brown'
        ]
    )

        // Red Controller
        event.shapeless(
            Item.of('refinedstorage:red_creative_controller'),
            [ 
                  '#forge:creative_controller',
                '#forge:dyes/red'
            ]
        )

            // Orange Controller
    event.shapeless(
        Item.of('refinedstorage:orange_creative_controller'),
        [ 
              '#forge:creative_controller',
            '#forge:dyes/orange'
        ]
    )

        // Yellow Controller
        event.shapeless(
            Item.of('refinedstorage:yellow_creative_controller'),
            [ 
                  '#forge:creative_controller',
                '#forge:dyes/yellow'
            ]
        )

            // Lime Controller
    event.shapeless(
        Item.of('refinedstorage:lime_creative_controller'),
        [ 
              '#forge:creative_controller',
            '#forge:dyes/lime'
        ]
    )

        // Green Controller
        event.shapeless(
            Item.of('refinedstorage:green_creative_controller'),
            [ 
                  '#forge:creative_controller',
                '#forge:dyes/green'
            ]
        )

            // Cyan Controller
    event.shapeless(
        Item.of('refinedstorage:cyan_creative_controller'),
        [ 
            '#forge:creative_controller',
            '#forge:dyes/cyan'
        ]
    )

        // Light Blue Controller
        event.shapeless(
            Item.of('refinedstorage:creative_controller'),
            [ 
                '#forge:creative_controller',
                '#forge:dyes/light_blue'
            ]
        )

            // Blue Controller
    event.shapeless(
        Item.of('refinedstorage:blue_creative_controller'),
        [ 
              '#forge:creative_controller',
            '#forge:dyes/blue'
        ]
    )

        // Purple Controller
        event.shapeless(
            Item.of('refinedstorage:purple_creative_controller'),
            [ 
                  '#forge:creative_controller',
                '#forge:dyes/purple'
            ]
        )

            // Magenta Controller
    event.shapeless(
        Item.of('refinedstorage:magenta_creative_controller'),
        [ 
              '#forge:creative_controller',
            '#forge:dyes/magenta'
        ]
    )

   // Pink Controller
             event.shapeless(
        Item.of('refinedstorage:pink_creative_controller'),
          [ 
                     '#forge:creative_controller',
                  '#forge:dyes/pink'
                    ]
                )

    


//Stonecutter recipes for Handcrafted Boards
event.stonecutting('4x handcrafted:acacia_board', 'minecraft:acacia_planks')
event.stonecutting('4x handcrafted:birch_board', 'minecraft:birch_planks')
event.stonecutting('4x handcrafted:dark_oak_board', 'minecraft:dark_oak_planks')
event.stonecutting('4x handcrafted:jungle_board', 'minecraft:jungle_planks')
event.stonecutting('4x handcrafted:mangrove_board', 'minecraft:mangrove_planks')
event.stonecutting('4x handcrafted:oak_board', 'minecraft:oak_planks')
event.stonecutting('4x handcrafted:spruce_board', 'minecraft:spruce_planks')
event.stonecutting('4x handcrafted:crimson_board', 'minecraft:crimson_planks')
event.stonecutting('4x handcrafted:warped_board', 'minecraft:warped_planks')
  })

  
