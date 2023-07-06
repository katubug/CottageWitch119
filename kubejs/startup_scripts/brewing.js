// priority: 0
MoreJSEvents.registerPotionBrewing((event) => {

    event.addCustomBrewing("hexerei:selenite_shard", "minecraft:glass_bottle", "hexerei:milk_bottle");

    event.addCustomBrewing("hexerei:moon_dust", 
    Ingredient.customNBT("minecraft:potion", (nbt) => {
        return nbt.contains("Potion") && nbt.Potion == "minecraft:awkward";
    }), 
    Item.of('minecraft:potion', '{Potion:"goblintraders:levitation"}'));
});