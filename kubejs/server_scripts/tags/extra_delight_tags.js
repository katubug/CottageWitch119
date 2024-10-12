ServerEvents.tags('item', event => {

    event.add('forge:sausage/cooked',
        'ends_delight:ender_sausage',
        'farmersdelight:beef_patty'
    )

    event.add('forge:rabbit/cooked',
        'minecraft:cooked_rabbit'
    )

    event.add('forge:offal',
        'twilightdelight:experiment_113',
        'twilightdelight:experiment_110'
    )

    event.add('forge:chicken/scrap',
        'farmersdelight:chicken_cuts',
        'extradelight:chicken_patty'
    )

    event.add('forge:chicken/ground/raw',
        'extradelight:chicken_patty'
    )

    event.add('forge:ground_meat/cooked',
        'farmersdelight:beef_patty', 
        'alexsdelight:bison_patty', 
        'extradelight:cooked_chicken_patty'
    )

    event.add('forge:chicken_raw',
        'extradelight:chicken_patty'
    )

    event.add('forge:meat/ribs/raw',
        'minecraft:porkchop', 
        'delightful:venison_chops', 
        'farmersdelight:mutton_chops'
    )

})


//['ends_delight:raw_ender_sausage', , 'nethersdelight:ground_strider', 'farmersdelight:minced_beef', ]