StartupEvents.registry('item', event => {
event.create('lunar_coin').maxStackSize(64).displayName("Lunar Coin")
event.create('solar_coin').maxStackSize(64).displayName("Solar Coin")
event.create('arcane_coin').maxStackSize(64).displayName("Arcane Coin")
event.create('lunarcoin').texture('kubejs:item/lunar_coin').maxStackSize(64).displayName("Lunar Coin")
event.create('solarcoin').texture('kubejs:item/solar_coin').maxStackSize(64).displayName("Solar Coin")
event.create('arcanecoin').texture('kubejs:item/arcane_coin').maxStackSize(64).displayName("Arcane Coin")
event.create('ticket')
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
})