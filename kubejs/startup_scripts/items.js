StartupEvents.registry('item', event => {
event.create('lunar_coin').maxStackSize(64).displayName("Lunar Coin")
event.create('solar_coin').maxStackSize(64).displayName("Solar Coin")
event.create('arcane_coin').maxStackSize(64).displayName("Arcane Coin")
event.create('lunarcoin').texture('kubejs:item/lunar_coin').maxStackSize(64).displayName("Lunar Coin")
event.create('solarcoin').texture('kubejs:item/solar_coin').maxStackSize(64).displayName("Solar Coin")
event.create('arcanecoin').texture('kubejs:item/arcane_coin').maxStackSize(64).displayName("Arcane Coin")
event.create('ticket')
event.create('pink_moon').texture('kubejs:item/pink_moon').displayName("Pink Moon")
event.create('flower_moon').texture('kubejs:item/flower_moon').displayName("Flower Moon")
event.create('strawberry_moon').texture('kubejs:item/strawberry_moon').displayName("Strawberry Moon")
event.create('antler_moon').texture('kubejs:item/antler_moon').displayName("Antler Moon")
event.create('harvest_moon').texture('kubejs:item/harvest_moon').displayName("Harvest Moon")
event.create('corn_moon').texture('kubejs:item/corn_moon').displayName("Corn Moon")
event.create('oak_moon').texture('kubejs:item/oak_moon').displayName("Oak Moon")

})
ItemEvents.modification(event => {
    event.modify('alexsmobs:emu_egg', item => {
      item.maxStackSize = 16
  })
    event.modify('minecraft:egg', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:turtle_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('alexsmobs:crocodile_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('alexsmobs:terrapin_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('duckling:duck_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('alexsmobs:crocodile_egg', item => {
      item.maxStackSize = 64
    })
    event.modify('enviornmental:duck_egg', item => {
      item.maxStackSize = 64
    })

})



StartupEvents.registry('block', event => {

  //Emmu Blocks
  event.create('bat_wallpaper', 'cardinal')
  .model('kubejs:block/bat_wallpaper')
  .soundType('wood')
  .hardness(2)
  .displayName('Bat Wallpaper') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('skull_wallpaper', 'cardinal')
  .model('kubejs:block/skull_wallpaper')
  .soundType('wood')
  .hardness(2)
  .displayName('Skull Wallpaper') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('witch_cat_plushie', 'cardinal')
  .model('kubejs:block/witch_cat_plushie')
  .soundType('wool')
  .fullBlock(false)
  .defaultCutout()
  .hardness(1.5)
  .displayName('Witch Cat Plushie')  

  event.create('mayor_gaylord', 'cardinal')
  .model('kubejs:block/gaylord')
  .soundType('wool')
  .fullBlock(false)
  .defaultCutout()
  .hardness(1.5)
  .displayName('Mayor Gaylord')  
})