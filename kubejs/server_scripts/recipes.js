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
        Item.of('akashictome:tome', '{"akashictome:data":{alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},babyfat:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"babyfat:the_book_of_baby_fat"}},byg:{Count:1b,id:"byg:biomepedia"},caupona:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"caupona:book"}},create_central_kitchen:{Count:1b,ForgeCaps:{Parent:{}},id:"create_central_kitchen:cooking_guide"},deeperdarker:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"deeperdarker:wanderers_notebook"}},ftbquests:{Count:1b,id:"ftbquests:book"},lexicon:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"lexicon:lexicon"}},sculktransporting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sculktransporting:guide"}},solsweetpotato:{Count:1b,id:"solsweetpotato:food_book"}}}'),
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
            'delightful:deluxe_cheeseburger',
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


    // Immersive Aircraft Recipes

    //Improved Landing Gear
    event.shaped(
        Item.of('immersive_aircraft:improved_landing_gear'),
        [
            ' A ',
            'B B',
            'C C'
        ],
        {
            A: 'create:gearbox',
            B: 'create:shaft',
            C: 'create:large_cogwheel'
        }
    )

    //Industrial Gears
    event.shaped(
        Item.of('immersive_aircraft:industrial_gears'),
        [
            'ABA',
            '   ',
            'CBC'
        ],
        {
            A: 'create:copper_sheet',
            B: 'create:cogwheel',
            C: 'create:iron_sheet'
        }
    )

    // Hull Reinforcement
    event.shaped(
        Item.of('immersive_aircraft:hull_reinforcement'),
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: 'create:iron_sheet',
            B: 'immersive_aircraft:hull'
        }
    )

    // Boiler
    event.shaped(
        Item.of('immersive_aircraft:boiler'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'create:copper_valve_handle',
            B: 'create:fluid_pipe',
            C: 'create:steam_engine',
            D: 'minecraft:blaze_powder'
        }
    )

    // Hull
    event.shaped(
        Item.of('immersive_aircraft:hull'),
        [
            'ABA',
            'ABA'
        ],
        {
            A: 'create:andesite_casing',
            B: 'minecraft:iron_ingot'
        }
    )

    // Engine
    event.shaped(
        Item.of('immersive_aircraft:engine'),
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            A: 'create:hand_crank',
            B: 'create:encased_chain_drive',
            C: 'create:mechanical_piston',
            D: 'immersive_aircraft:boiler',
            E: 'minecraft:cobbled_deepslate'
        }
    )

    // Steel Boiler
    event.shaped(
        Item.of('immersive_aircraft:steel_boiler'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:propeller',
            C: 'create:precision_mechanism',
            D: 'immersive_aircraft:boiler',
            E: 'minecraft:coal_block',
            F: 'create:blaze_burner'
        }
    )

    // Propeller
    event.shaped(
        Item.of('immersive_aircraft:propeller'),
        [
            ' A ',
            ' B ',
            ' A '
        ],
        {
            A: 'create:propeller',
            B: 'create:shaft'
        }
    )

    // Enhanced Propeller
    event.shaped(
        Item.of('immersive_aircraft:enhanced_propeller'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'immersive_aircraft:propeller'
        }
    )

    // Sail
    event.shaped(
        Item.of('immersive_aircraft:sail', 4),
        [
            '   ',
            'AAA',
            'AAA'
        ],
        {
            A: 'create:white_sail'
        }
    )

    // Sturdy Pipes
    event.shaped(
        Item.of('immersive_aircraft:sturdy_pipes'),
        [
            ' AB',
            'ABA',
            'BA '
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:fluid_pipe'
        }
    )

    // Airship
    event.shaped(
        Item.of('immersive_aircraft:airship'),
        [
            'AAA',
            'ABC',
            'DED'
        ],
        {
            A: 'immersive_aircraft:sail',
            B: 'create:red_seat',
            C: 'immersive_aircraft:propeller',
            D: 'immersive_aircraft:hull',
            E: 'immersive_aircraft:engine'
        }
    )

    // Biplane
    event.shaped(
        Item.of('immersive_aircraft:biplane'),
        [
            ' A ',
            'BCB',
            'EDE'
        ],
        {
            A: 'immersive_aircraft:propeller',
            B: 'immersive_aircraft:sail',
            C: 'immersive_aircraft:engine',
            D: 'create:red_seat',
            E: 'immersive_aircraft:hull'
        }
    )

    // Gyrodyne
    event.shaped(
        Item.of('immersive_aircraft:gyrodyne'),
        [
            'A A',
            'BCB',
            'ADA'
        ],
        {
            A: 'immersive_aircraft:propeller',
            B: 'immersive_aircraft:hull',
            C: 'create:precision_mechanism',
            D: 'create:red_seat'
        }
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

    // Dyeing Sleeping Bags
    event.shapeless(
        Item.of('comforts:sleeping_bag_white'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:white_dye'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_orange'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:orange_dye'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_magenta'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:magenta_dye'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_light_blue'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:light_blue_dye'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_yellow'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:yellow_dye'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_lime'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:lime_dye'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_pink'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:pink_dye'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_gray'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:gray_dye'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_light_gray'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:light_gray_dye'
        ]
    )

    event.shapeless(
        Item.of('comforts:sleeping_bag_cyan'),
        [ 
            '#comforts:sleeping_bags',
            'minecraft:cyan_dye'
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

    // Mixed Ore Chunk Uses Tags
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
    )

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




  })

  
