import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.ItemDefinition;
import crafttweaker.api.predicate.ItemPredicate;
import stdlib.List;
import crafttweaker.api.recipe.BlastFurnaceRecipeManager;
import crafttweaker.api.recipe.FurnaceRecipeManager;
import crafttweaker.api.recipe.SmithingRecipeManager;
import crafttweaker.api.item.enchantment.Enchantment;
import crafttweaker.api.ingredient.transform.type.TransformDamage;
import crafttweaker.api.food.FoodProperties;
import crafttweaker.api.block.Block;
import mods.create.CompactingManager;
import mods.jeitweaker.Jei;

var air = <item:minecraft:air>;

// Adds a recipe for the Mimicarnation
craftingTable.addShapeless("mimicarnacream", <item:alexsmobs:mimicream>, [<item:nethersdelight:mimicarnation>, <item:nethersdelight:mimicarnation>, <item:nethersdelight:mimicarnation>, <item:nethersdelight:mimicarnation>]);

// Adds tags to Brooms
<tag:items:crafttweaker:brooms>.add(<item:hexerei:mahogany_broom>, <item:hexerei:witch_hazel_broom>, <item:hexerei:willow_broom>);

// Adds compostable tag to make things able to be made into Compost

<tag:items:crafttweaker:compostable>.add(
<item:hexerei:mugwort_flowers>,
<item:hexerei:mugwort_leaves>,
<item:hexerei:yellow_dock_flowers>,
<item:hexerei:yellow_dock_leaves>,
<item:hexerei:belladonna_flowers>,
<item:hexerei:belladonna_berries>,
<item:hexerei:mandrake_root>,
<item:hexerei:mandrake_flowers>,
<item:hexerei:dried_sage>,
<item:hexerei:dried_belladonna_flowers>,
<item:hexerei:dried_mandrake_flowers>,
<item:hexerei:dried_mugwort_flowers>,
<item:hexerei:dried_mugwort_leaves>,
<item:hexerei:dried_yellow_dock_flowers>,
<item:hexerei:dried_yellow_dock_leaves>,
<item:farmersdelight:tree_bark>,
<item:minecraft:rotten_flesh>
);

// Adds dirt tag to a bunch of dirt
<tag:items:crafttweaker:dirts>.add(
<item:minecraft:dirt>,
<item:minecraft:coarse_dirt>,
<item:minecraft:rooted_dirt>,
<item:byg:lush_dirt>,
<item:twilightforest:uberous_soil>,
<item:minecraft:podzol>
);

// Change Compost recipe
craftingTable.remove(<item:farmersdelight:organic_compost>);
craftingTable.addShapeless("witchycompost", <item:farmersdelight:organic_compost> * 2, [<tag:items:crafttweaker:dirts>, <tag:items:supplementaries:straw>, <tag:items:supplementaries:straw>, <item:minecraft:bone_meal>, <item:minecraft:bone_meal>, <tag:items:crafttweaker:compostable>, <tag:items:crafttweaker:compostable>, <tag:items:crafttweaker:compostable>, <tag:items:crafttweaker:compostable>]);

// Add rope tags
<tag:items:supplementaries:ropes>.add(<item:farmersdelight:rope>);

// Add milk tags just in case
<tag:items:forge:cheese_or_milk>.add(<item:hexerei:milk_bottle>);
<tag:items:forge:milk>.add(<item:hexerei:milk_bottle>);
<tag:items:forge:milk/milk_bottle>.add(<item:hexerei:milk_bottle>);



// Hides powerless building gadgets

var removeGadgets = [
<item:buildinggadgets:gadget_building>,
<item:buildinggadgets:gadget_exchanging>,
<item:buildinggadgets:gadget_copy_paste>,
<item:buildinggadgets:gadget_destruction>
] as IItemStack[];

for rgadget in removeGadgets {
craftingTable.remove(rgadget);
Jei.hideIngredient(rgadget);
}

// Makes Building Gadgets Accessible without power

var bgMain = <item:buildinggadgets:gadget_building>.withTag({state: {serializer: "buildinggadgets:dummy_serializer" as string, state: {Name: "minecraft:air" as string}, data: {}}, energy: 500000.0 as double});

var exgMain = <item:buildinggadgets:gadget_exchanging>.withTag({state: {serializer: "buildinggadgets:dummy_serializer" as string, state: {Name: "minecraft:air" as string}, data: {}}, energy: 500000.0 as double});

var copasMain = <item:buildinggadgets:gadget_copy_paste>.withTag({mode: 0 as byte, template_id: [700466076, -453686443, -2126732122, 1992073322], energy: 500000.0 as double});

var desMain = <item:buildinggadgets:gadget_destruction>.withTag({overlay: 1 as byte, fuzzy: 1 as byte, energy: 1000000.0 as double});

craftingTable.addShaped("fullbuildinggadget", bgMain, [[<item:minecraft:iron_ingot>, <item:minecraft:redstone>, <item:minecraft:iron_ingot>], [<item:minecraft:diamond>, <item:minecraft:redstone>, <item:minecraft:diamond>], [<item:minecraft:iron_ingot>, <item:minecraft:lapis_lazuli>, <item:minecraft:iron_ingot>]]);

craftingTable.addShaped("fullexchanging", exgMain, [[<item:minecraft:iron_ingot>, <item:minecraft:redstone>, <item:minecraft:iron_ingot>], [<item:minecraft:diamond>, <item:minecraft:lapis_lazuli>, <item:minecraft:diamond>], [<item:minecraft:iron_ingot>, <item:minecraft:lapis_lazuli>, <item:minecraft:iron_ingot>]]);

craftingTable.addShaped("fullcopypaste", copasMain, [[<item:minecraft:iron_ingot>, <item:minecraft:redstone>, <item:minecraft:iron_ingot>], [<item:minecraft:emerald>, <item:minecraft:redstone>, <item:minecraft:emerald>], [<item:minecraft:iron_ingot>, <item:minecraft:lapis_lazuli>, <item:minecraft:iron_ingot>]]);

craftingTable.addShaped("fulldestruction", desMain, [[<item:minecraft:iron_ingot>, <item:minecraft:redstone>, <item:minecraft:iron_ingot>], [<item:minecraft:ender_pearl>, <item:minecraft:redstone>, <item:minecraft:ender_pearl>], [<item:minecraft:iron_ingot>, <item:minecraft:lapis_lazuli>, <item:minecraft:iron_ingot>]]);


var addGadgets = [
    bgMain,
    exgMain,
    copasMain,
    desMain
] as IItemStack[];

for agadget in addGadgets {
Jei.addIngredient(agadget);
}

// Akashic Tome Stuff
var aTomeFull = <item:akashictome:tome>.withTag({"akashictome:data": {sculktransporting: {Count: 1, id: "patchouli:guide_book", tag: {"patchouli:book": "sculktransporting:guide"}}, byg: {Count: 1, id: "byg:biomepedia"}, create_central_kitchen: {ForgeCaps: {Parent: {}}, id: "create_central_kitchen:cooking_guide", Count: 1}, ars_nouveau: {Count: 1, id: "ars_nouveau:worn_notebook"}, babyfat: {Count: 1, id: "patchouli:guide_book", tag: {"patchouli:book": "babyfat:the_book_of_baby_fat"}}, ftbquests: {Count: 1, id: "ftbquests:book"}, alexsmobs: {Count: 1, id: "alexsmobs:animal_dictionary"}, solsweetpotato: {Count: 1, id: "solsweetpotato:food_book"}, deeperdarker: {id: "patchouli:guide_book", Count: 1, tag: {"patchouli:book": "deeperdarker:wanderers_notebook"}}, caupona: {Count: 1, id: "patchouli:guide_book", tag: {"patchouli:book": "caupona:book"}}}});

craftingTable.addShapeless("akashicfull", aTomeFull, [<item:minecraft:book>, <item:minecraft:stick>]);

// Remove Smelting Recipes

var removeSmelting = [
    <item:delightful:animal_fat>,
    <item:delightful:animal_oil_bottle>
] as IItemStack[];
for item in removeSmelting {
blastFurnace.remove(item);
furnace.remove(item);
}

// Remove Crafting Table Recipes & Hide from JEI

var removeNope = [
    <item:enigmaticgraves:grave_finder>,
    <item:ftbquests:missing_item>,
    <item:ftbquests:custom_icon>,
    <item:ftbquests:barrier>,
    <item:ftbquests:stage_barrier>,
    <item:sophisticatedstorage:feeding_upgrade>,
    <item:sophisticatedstorage:advanced_feeding_upgrade>,
    <item:sophisticatedstorage:xp_pump_upgrade>,
    <item:sophisticatedstorage:advanced_pump_upgrade>,
    <item:sophisticatedstorage:pump_upgrade>,
    //<item:prefab:block_compressed_quartz_crete>,
    //<item:prefab:block_double_compressed_quartz_crete>,
    //<item:prefab:block_quartz_crete>,
    //<item:prefab:block_quartz_crete_wall>,
    //<item:prefab:item_string_of_lanterns>,
    //<item:prefab:block_quartz_crete_chiseled>,
    //<item:prefab:block_quartz_crete_pillar>,
    //<item:prefab:block_quartz_crete_stairs>,
    //<item:prefab:block_quartz_crete_slab>,
    //<item:prefab:block_quartz_crete_smooth>,
    //<item:prefab:block_quartz_crete_smooth_wall>,
    //<item:prefab:block_quartz_crete_smooth_stairs>,
    //<item:prefab:block_quartz_crete_smooth_slab>,
    <item:prefab:item_swift_blade_wood>,
    <item:prefab:item_swift_blade_gold>,
    <item:prefab:item_sickle_wood>,
    <item:prefab:item_sickle_stone>,
    <item:prefab:item_sickle_gold>,
    <item:prefab:item_sickle_iron>,
    <item:prefab:item_sickle_diamond>,
    <item:prefab:item_sickle_netherite>,
    <item:prefab:item_clutch_of_eggs>,
    //<item:prefab:block_glass_slab>,
    //<item:prefab:block_glass_stairs>,
    //<item:prefab:block_paper_lantern>,
    <item:prefab:block_boundary>,
    <item:prefab:item_crate_of_beets>,
    <item:prefab:item_bunch_of_beets>,
    <item:prefab:item_bunch_of_carrots>,
    <item:prefab:item_bunch_of_potatoes>,
    <item:prefab:item_wooden_crate>,
    //<item:prefab:block_quartz_crete_bricks>,
    //<item:prefab:item_coil_of_lanterns>,
    <item:prefab:item_crate_of_potatoes>,
    <item:prefab:item_crate_of_carrots>,
    <item:prefab:item_swift_blade_netherite>,
    <item:prefab:item_swift_blade_diamond>,
    <item:prefab:item_swift_blade_steel>,
    <item:prefab:item_swift_blade_obsidian>,
    <item:prefab:item_swift_blade_osmium>,
    <item:prefab:item_swift_blade_iron>,
    <item:prefab:item_swift_blade_bronze>,
    <item:prefab:item_swift_blade_stone>,
    <item:prefab:item_swift_blade_copper>,
    //<item:alexsmobs:blood_sac>,
    //<item:alexsmobs:mosquito_proboscis>,
    //<item:alexsmobs:blood_sprayer>,
    <item:quark:beetroot_crate>,
    <item:quark:potato_crate>,
    <item:quark:carrot_crate>,
    <item:supplementaries:rope>,
    <item:hexerei:milk_bottle>,
    <item:delightful:animal_fat>,
    <item:delightful:animal_oil_bottle>,
    <item:alexsmobs:komodo_spit>,
    <item:alexsmobs:komodo_spit_bottle>,
    //<item:alexsmobs:cockroach_wing>,
    //<item:alexsmobs:cockroach_ootheca>,
    //<item:alexsmobs:cockroach_wing_fragment>,
    //<item:alexsmobs:maraca>,
    <item:pipez:fluid_pipe>,
    <item:pipez:energy_pipe>,
    <item:pipez:gas_pipe>,
    <item:pipez:universal_pipe>,
    <item:contact:green_postbox>,
    <item:contact:red_postbox>,
    <item:contact:center_mailbox>,
    <item:contact:black_mailbox>,
    <item:contact:red_mailbox>,
    <item:contact:green_mailbox>,
    <item:contact:brown_mailbox>,
    <item:contact:blue_mailbox>,
    <item:contact:purple_mailbox>,
    <item:contact:orange_mailbox>,
    <item:contact:magenta_mailbox>,
    <item:contact:light_blue_mailbox>,
    <item:contact:yellow_mailbox>,
    <item:contact:lime_mailbox>,
    <item:contact:pink_mailbox>,
    <item:contact:gray_mailbox>,
    <item:contact:light_gray_mailbox>,
    <item:contact:cyan_mailbox>,
    <item:contact:white_mailbox>,
    <item:minecraft:splash_potion>.withTag({Potion: "davespotioneering:milk"}),
    <item:minecraft:lingering_potion>.withTag({Potion: "davespotioneering:milk"}),
    <item:artifacts:flippers>,
    <item:artifacts:golden_hook>,
    <item:artifacts:feral_claws>,
    <item:artifacts:helium_flamingo>,
    <item:artifacts:everlasting_beef>,
    <item:artifacts:eternal_steak>,
    <item:artifacts:snorkel>,
    <item:artifacts:umbrella>,
    <item:functionalstorage:armory_cabinet>,
    <item:caupona:stock_aspic>,
    <item:caupona:stock>,
    <item:quark:feeding_trough>,
    <item:toms_storage:ts.polymorphic_item_filter>,
     <item:sophisticatedstorage:shulker_box>,
    <item:sophisticatedstorage:iron_shulker_box>,
    <item:sophisticatedstorage:gold_shulker_box>,
    <item:sophisticatedstorage:diamond_shulker_box>,
    <item:sophisticatedstorage:netherite_shulker_box>,
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:crittersandcompanions:diamond_dragonfly_armor>,
    <item:crittersandcompanions:gold_dragonfly_armor>,
    <item:crittersandcompanions:iron_dragonfly_armor>
] as IItemStack[];

for item in removeNope {
craftingTable.remove(item);
Jei.hideIngredient(item);
}

// Cloud Crafting

<item:quark:bottled_cloud>.transformReplace(<item:minecraft:glass_bottle>);

craftingTable.addShapeless("bottletocloud", <item:twilightforest:wispy_cloud>, [<item:quark:bottled_cloud>.transformReplace(<item:minecraft:glass_bottle>), <item:quark:bottled_cloud>.transformReplace(<item:minecraft:glass_bottle>), <item:quark:bottled_cloud>.transformReplace(<item:minecraft:glass_bottle>)]);
craftingTable.addShapeless("cloudtocloud", <item:twilightforest:fluffy_cloud>, [<item:twilightforest:wispy_cloud>, <item:twilightforest:wispy_cloud>, <item:twilightforest:wispy_cloud>, <item:twilightforest:wispy_cloud>]);
craftingTable.addShapeless("cloudtobottle", <item:quark:bottled_cloud> * 3, [<item:minecraft:glass_bottle>, <item:minecraft:glass_bottle>, <item:minecraft:glass_bottle>, <item:twilightforest:wispy_cloud>]);

// Time in a Bottle

craftingTable.remove(<item:tiab:time_in_a_bottle>);
craftingTable.addShaped("timeinabottle", <item:tiab:time_in_a_bottle>, [[<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>], [<item:minecraft:diamond>, <item:minecraft:clock>, <item:minecraft:diamond>], [<item:minecraft:lapis_lazuli>, <item:quark:bottled_cloud>, <item:minecraft:lapis_lazuli>]]);

// Ars Nouveau Novice Spellbook

craftingTable.addShaped("novicebook", <item:ars_nouveau:novice_spell_book>, 
[[air, <item:minecraft:gold_ingot>, air],
[<item:minecraft:gold_ingot>, <item:ars_nouveau:worn_notebook>, <item:minecraft:gold_ingot>],
[air, <item:minecraft:gold_ingot>, air]]);


// Eggs Carton

craftingTable.remove(<item:prefab:item_carton_of_eggs>);

craftingTable.addShapeless("eggcarton", <item:prefab:item_carton_of_eggs>, [<item:minecraft:egg>, <item:minecraft:egg>, <item:minecraft:egg>, <item:minecraft:egg>, <item:minecraft:egg>, <item:minecraft:egg>, <item:minecraft:egg>, <item:minecraft:egg>, <item:minecraft:egg>]);

// Pearl Necklace Balancing

var pearlnecklaces = [
    <item:crittersandcompanions:pearl_necklace_2>,
    <item:crittersandcompanions:pearl_necklace_3>
] as IItemStack[];

for item in pearlnecklaces {
craftingTable.remove(item);
}

craftingTable.addShapeless("pearl2", <item:crittersandcompanions:pearl_necklace_2>, [<item:crittersandcompanions:pearl_necklace_1>, <item:minecraft:ender_pearl>]);

craftingTable.addShapeless("pearl3", <item:crittersandcompanions:pearl_necklace_3>, [<item:crittersandcompanions:pearl_necklace_2>, <item:mermod:glowing_pearl_modifier>]);

// Making Mysterious Worm craftable

<tag:items:crafttweaker:worms>.add(
<item:twilightforest:moonworm>
);

craftingTable.addShaped("mysteryworm", <item:alexsmobs:mysterious_worm>, [[<tag:items:crafttweaker:worms>, <tag:items:crafttweaker:worms>, <tag:items:crafttweaker:worms>], [<tag:items:crafttweaker:worms>, <item:ars_nouveau:void_jar>, <tag:items:crafttweaker:worms>], [<tag:items:crafttweaker:worms>, <tag:items:crafttweaker:worms>, <tag:items:crafttweaker:worms>]]);

// Alex's Potions Re-Recipes

var lpoi = <item:minecraft:potion>.withTag({Potion: "alexsmobs:long_poison_resistance" as string});
var poi = <item:minecraft:potion>.withTag({Potion: "alexsmobs:poison_resistance" as string});

var lbugp = <item:minecraft:potion>.withTag({Potion: "alexsmobs:long_bug_pheromones" as string});
var bugp = <item:minecraft:potion>.withTag({Potion: "alexsmobs:bug_pheromones" as string});

var awk = <item:minecraft:potion>.withTag({Potion: "minecraft:awkward" as string});

// Brewing.addRecipe(output as IItemStack, reagent as IIngredient, input as IIngredient)

brewing.removeRecipeByReagent(<item:alexsmobs:centipede_leg>);
brewing.removeRecipeByReagent(<item:alexsmobs:cockroach_wing>);
brewing.removeRecipeByReagent(<item:alexsmobs:komodo_spit>);

brewing.addRecipe(bugp, <item:alexsmobs:leafcutter_ant_pupa>, awk);
brewing.addRecipe(poi, <item:minecraft:poisonous_potato>, awk);

brewing.addRecipe(lpoi, <item:minecraft:redstone>, poi);

// Burger recipes

var burgers = [
<item:farmersdelight:hamburger>,
<item:delightful:cheeseburger>,
<item:delightful:deluxe_cheeseburger>
] as IItemStack[];

for item in burgers {
    craftingTable.remove(item);
}


craftingTable.addShapeless("burger", <item:farmersdelight:hamburger>, [
    <item:minecraft:bread>,
    <tag:items:forge:salad_ingredients>,
    <item:farmersdelight:onion>,
    <item:farmersdelight:tomato>,
    <tag:items:forge:cooked_beef>
]);

craftingTable.addShapeless("cheeseburgercon", <item:delightful:cheeseburger>, [
    <item:farmersdelight:hamburger>,
    <tag:items:forge:cheese>
]);

craftingTable.addShapeless("cheeseburger", <item:delightful:cheeseburger>, [
    <item:minecraft:bread>,
    <tag:items:forge:salad_ingredients>,
    <item:farmersdelight:onion>,
    <item:farmersdelight:tomato>,
    <tag:items:forge:cooked_beef>,
    <tag:items:forge:cheese>
]);

craftingTable.addShapeless("ultraburger", <item:delightful:deluxe_cheeseburger>, [
    <item:minecraft:bread>,
    <tag:items:forge:salad_ingredients>,
    <item:farmersdelight:onion>,
    <item:farmersdelight:tomato>,
    <tag:items:forge:cooked_beef>,
    <tag:items:forge:cooked_beef>,
    <tag:items:forge:cheese>,
    <tag:items:forge:cheese>,
    <item:farmersdelight:cooked_bacon>
]);

craftingTable.addShapeless("ultraburgercon", <item:delightful:deluxe_cheeseburger>, [
    <item:delightful:cheeseburger>,
    <tag:items:forge:cooked_beef>,
    <tag:items:forge:cheese>,
    <item:farmersdelight:cooked_bacon>
]);

// Tom's Tags

<tag:items:crafttweaker:invcable>.add(
    <item:toms_storage:ts.inventory_cable>,
    <item:toms_storage:ts.inventory_cable_framed>
);

<tag:items:crafttweaker:connector>.add(
    <item:toms_storage:ts.inventory_cable_connector_filtered>,
    <item:toms_storage:ts.inventory_cable_connector>,
    <item:toms_storage:ts.inventory_cable_connector_framed>
);


// Nature's Compass recipe

craftingTable.remove(<item:naturescompass:naturescompass>);

craftingTable.addShaped("naturescompass", <item:naturescompass:naturescompass>, [[<tag:items:minecraft:saplings>, <tag:items:minecraft:logs>, <tag:items:minecraft:saplings>], [<tag:items:minecraft:logs>, <item:hexerei:dowsing_rod>, <tag:items:minecraft:logs>], [<tag:items:minecraft:saplings>, <tag:items:minecraft:logs>, <tag:items:minecraft:saplings>]]);

// Chest recipe?!

craftingTable.addShaped("chestwtf", <item:minecraft:chest>, [[<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>], [<tag:items:minecraft:planks>, air, <tag:items:minecraft:planks>], [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>]]);

// ladder recipe?!

craftingTable.addShaped("ladderwtf", <item:minecraft:ladder> * 4, [
    [<item:minecraft:stick>, air, <item:minecraft:stick>], 
    [<item:minecraft:stick>, <tag:items:minecraft:planks>, <item:minecraft:stick>], 
    [<item:minecraft:stick>, air, <item:minecraft:stick>]]);

//making more heat sources work with farmer's delight

// Inventory Remotes

//<tag:items:crafttweaker:remotes>.add(
//    <item:storagenetwork:crafting_remote>,
//    <item:storagenetwork:inventory_remote>
//);


craftingTable.addShapeless("windsweptsandstone", <item:byg:windswept_sandstone>, [<item:byg:windswept_sand>, <item:byg:windswept_sand>, <item:byg:windswept_sand>, <item:byg:windswept_sand>]);

// Eyes
<tag:items:crafttweaker:eyes>.add(
    <item:endrem:evil_eye>,
    <item:endrem:cursed_eye>,
    <item:endrem:rogue_eye>,
    <item:endrem:old_eye>,
    <item:endrem:nether_eye>,
    <item:endrem:lost_eye>,
    <item:endrem:corrupted_eye>,
    <item:endrem:cold_eye>,
    <item:endrem:black_eye>,
    <item:endrem:guardian_eye>,
    <item:endrem:magical_eye>,
    <item:endrem:wither_eye>,
    <item:endrem:witch_eye>,
    <item:endrem:undead_eye>,
    <item:endrem:exotic_eye>
);

craftingTable.addShapeless("endeyestopearl", <item:minecraft:ender_pearl> * 4, [<tag:items:crafttweaker:eyes>]);

// Also make Eyes not uncraftable

//<tag:items:twilightforest:banned_uncrafting_ingredients>.add(<item:minecraft:ender_pearl>);

// Make warped toads tameable
craftingTable.addShapeless("mosquitolarva", <item:alexsmobs:mosquito_larva>, [<item:alexsmobs:maggot>, <item:minecraft:crimson_fungus>]);

// Add uses for Hexerei herbs

//var mindful = <item:minecraft:potion>.withTag({Potion: "minecraft:long_regeneration" as string, CustomPotionEffects: [{CurativeItems: [{id: "minecraft:milk_bucket" as string, Count: 1 as byte}], Duration: 2400 as int, ShowIcon: 1 as byte, Ambient: 0 as byte, ShowParticles: 1 as byte, Id: 36 as byte, "forge:id": "mysticalworld:serendipity" as string, Amplifier: 2 as byte}]});

//brewing.addRecipe(mindful, <item:hexerei:mindful_trance_blend>, awk);

// Add uses for Selenite

brewing.addRecipe(<item:farmersdelight:milk_bottle>, <item:hexerei:selenite_shard>, <item:minecraft:glass_bottle>);

craftingTable.addShaped("seleniteglass", <item:minecraft:glass> * 8, [[<tag:items:forge:stained_glass>, <tag:items:forge:stained_glass>, <tag:items:forge:stained_glass>], [<tag:items:forge:stained_glass>, <item:hexerei:selenite_shard>, <tag:items:forge:stained_glass>], [<tag:items:forge:stained_glass>, <tag:items:forge:stained_glass>, <tag:items:forge:stained_glass>]]);

// Mandrake as Poppet

craftingTable.addShaped("mandraketotem", <item:minecraft:totem_of_undying>, [
[<item:twilightforest:red_thread>, 
<item:endrem:evil_eye>, 
<item:twilightforest:red_thread>], 
[<item:create:crushed_raw_gold>, 
<item:hexerei:mandrake_root>, 
<item:create:powdered_obsidian>], 
[<item:twilightforest:red_thread>, 
<item:twilightforest:charm_of_life_1>, 
<item:twilightforest:red_thread>]
]);

// Change Ring of Enderchest Recipe

craftingTable.remove(<item:ring_of_enderchest:ring_of_enderchest>);

craftingTable.addShaped("ringofenderchest", <item:ring_of_enderchest:ring_of_enderchest>, [
[<item:minecraft:iron_ingot>, <item:minecraft:ender_pearl>, <item:minecraft:iron_ingot>],
[<item:minecraft:iron_ingot>, <item:minecraft:ender_chest>, <item:minecraft:iron_ingot>],
[<item:minecraft:iron_ingot>, <item:minecraft:ender_pearl>, <item:minecraft:iron_ingot>]
]);


// Making Knives compatible across mods

<tag:items:forge:fillet_knife>.add(
    <item:delightful:copper_knife>,
    <item:delightful:tin_knife>,
    <item:delightful:silver_knife>,
    <item:delightful:lead_knife>,
    <item:delightful:fiery_knife>,
    <item:delightful:ironwood_knife>,
    <item:delightful:knightmetal_knife>,
    <item:delightful:steeleaf_knife>,
    <item:farmersdelight:flint_knife>,
    <item:farmersdelight:iron_knife>,
    <item:farmersdelight:diamond_knife>,
    <item:farmersdelight:netherite_knife>,
    <item:farmersdelight:golden_knife>
);


// Pet Beds

<tag:items:crafttweaker:petbeds>.add(
    <item:domesticationinnovation:pet_bed_white>,
    <item:domesticationinnovation:pet_bed_orange>,
    <item:domesticationinnovation:pet_bed_magenta>,
    <item:domesticationinnovation:pet_bed_light_blue>,
    <item:domesticationinnovation:pet_bed_yellow>,
    <item:domesticationinnovation:pet_bed_green>,
    <item:domesticationinnovation:pet_bed_brown>,
    <item:domesticationinnovation:pet_bed_blue>,
    <item:domesticationinnovation:pet_bed_purple>,
    <item:domesticationinnovation:pet_bed_cyan>,
    <item:domesticationinnovation:pet_bed_light_gray>,
    <item:domesticationinnovation:pet_bed_gray>,
    <item:domesticationinnovation:pet_bed_pink>,
    <item:domesticationinnovation:pet_bed_lime>,
    <item:domesticationinnovation:pet_bed_red>,
    <item:domesticationinnovation:pet_bed_black>
);

//Craft Water Lettuce

craftingTable.addShapeless("waterlettuce", <item:babyfat:water_lettuce> * 2, [<item:farmersdelight:cabbage>, <item:farmersdelight:rice_panicle>]);

// Upgrade your Ars Nouveau armors

//Novice to Mage
/*
craftingTable.addShaped("novicetoappboots", <item:ars_nouveau:apprentice_boots>, [
    [air, <item:ars_nouveau:blaze_fiber>, air],
    [<item:ars_nouveau:blaze_fiber>, <item:ars_nouveau:novice_boots>, <item:ars_nouveau:blaze_fiber>],
    [air, <item:ars_nouveau:blaze_fiber>, air]
]);

craftingTable.addShaped("novicetoapplegs", <item:ars_nouveau:apprentice_leggings>, [
    [air, <item:ars_nouveau:blaze_fiber>, air],
    [<item:ars_nouveau:blaze_fiber>, <item:ars_nouveau:novice_leggings>, <item:ars_nouveau:blaze_fiber>],
    [air, <item:ars_nouveau:blaze_fiber>, air]
]);

craftingTable.addShaped("novicetoappchest", <item:ars_nouveau:apprentice_robes>, [
    [air, <item:ars_nouveau:blaze_fiber>, air],
    [<item:ars_nouveau:blaze_fiber>, <item:ars_nouveau:novice_robes>, <item:ars_nouveau:blaze_fiber>],
    [air, <item:ars_nouveau:blaze_fiber>, air]
]);

craftingTable.addShaped("novicetoapphead", <item:ars_nouveau:apprentice_hood>, [
    [air, <item:ars_nouveau:blaze_fiber>, air],
    [<item:ars_nouveau:blaze_fiber>, <item:ars_nouveau:novice_hood>, <item:ars_nouveau:blaze_fiber>],
    [air, <item:ars_nouveau:blaze_fiber>, air]
]);

// Mage to Archmage

craftingTable.addShaped("apptoarchboots", <item:ars_nouveau:archmage_boots>, [
    [air, <item:ars_nouveau:end_fiber>, air],
    [<item:ars_nouveau:end_fiber>, <item:ars_nouveau:apprentice_boots>, <item:ars_nouveau:end_fiber>],
    [air, <item:ars_nouveau:end_fiber>, air]
]);

craftingTable.addShaped("apptoarchlegs", <item:ars_nouveau:archmage_leggings>, [
    [air, <item:ars_nouveau:end_fiber>, air],
    [<item:ars_nouveau:end_fiber>, <item:ars_nouveau:apprentice_leggings>, <item:ars_nouveau:end_fiber>],
    [air, <item:ars_nouveau:end_fiber>, air]
]);

craftingTable.addShaped("apptoarchchest", <item:ars_nouveau:archmage_robes>, [
    [air, <item:ars_nouveau:end_fiber>, air],
    [<item:ars_nouveau:end_fiber>, <item:ars_nouveau:apprentice_robes>, <item:ars_nouveau:end_fiber>],
    [air, <item:ars_nouveau:end_fiber>, air]
]);

craftingTable.addShaped("apptoarchhead", <item:ars_nouveau:archmage_hood>, [
    [air, <item:ars_nouveau:end_fiber>, air],
    [<item:ars_nouveau:end_fiber>, <item:ars_nouveau:apprentice_hood>, <item:ars_nouveau:end_fiber>],
    [air, <item:ars_nouveau:end_fiber>, air]
]);
*/
// egg carton to eggs

craftingTable.addShapeless("cartontoegg", <item:minecraft:egg> * 9, [<item:prefab:item_carton_of_eggs>]);

//Fish oil craftable by raw fish

craftingTable.addShapeless("fishoil", <item:alexsmobs:fish_oil>, [<tag:items:forge:raw_fishes>, <tag:items:forge:raw_fishes>, <tag:items:forge:raw_fishes>, <tag:items:forge:raw_fishes>, <item:minecraft:glass_bottle>]);

// Remove all recipes in MC Story Mode Armors
craftingTable.removeByModid("mcsa");

<tag:items:crafttweaker:diaknife>.add(<item:farmersdelight:diamond_knife>);

//Make patties more useful

<tag:items:forge:cooked_beef>.add(<item:alexsdelight:bison_patty>);

// Teeth

<tag:items:crafttweaker:teeth>.add(
    <item:alexsmobs:shark_tooth>,
    <item:alexsmobs:bone_serpent_tooth>,
    <item:alexsmobs:cachalot_whale_tooth>,
    <item:alexsmobs:serrated_shark_tooth>
);


craftingTable.remove(<item:supplementaries:pancake>);

craftingTable.addShapeless("pancake", <item:supplementaries:pancake>, [<tag:items:forge:flour>, <tag:items:forge:sugar>, <tag:items:forge:eggs>, <tag:items:forge:milk>]);

// Uncompress honeycomb

craftingTable.addShapeless("honeytocomb", <item:minecraft:honeycomb> * 4, [<item:minecraft:honeycomb_block>]);

// Add tags to Mushroom Colonies for quest purposes
<tag:items:crafttweaker:mushcolony>.add(<item:farmersdelight:red_mushroom_colony>);
<tag:items:crafttweaker:mushcolony>.add(<item:farmersdelight:brown_mushroom_colony>);
<tag:items:crafttweaker:mushcolony>.add(<item:collectorsreap:portobello_colony>);

<tag:items:crafttweaker:netmushcolony>.add(<item:nethersdelight:crimson_fungus_colony>);
<tag:items:crafttweaker:netmushcolony>.add(<item:nethersdelight:warped_fungus_colony>);

// Add Eye tags
<tag:items:crafttweaker:end_eyes>.add(
    <item:minecraft:ender_eye>,
    <item:endrem:black_eye>,
    <item:endrem:cold_eye>,
    <item:endrem:corrupted_eye>,
    <item:endrem:lost_eye>,
    <item:endrem:nether_eye>,
    <item:endrem:old_eye>,
    <item:endrem:rogue_eye>,
    <item:endrem:cursed_eye>,
    <item:endrem:evil_eye>,
    <item:endrem:guardian_eye>,
    <item:endrem:magical_eye>,
    <item:endrem:wither_eye>,
    <item:endrem:undead_eye>,
    <item:endrem:witch_pupil>
);

//Overweight crops tags
<tag:items:crafttweaker:overcrops>.add(
    <item:overweight_farming:overweight_cabbage_block>,
    <item:overweight_farming:overweight_onion_block>,
    <item:overweight_farming:overweight_apple_block>,
    <item:overweight_farming:overweight_poisonous_potato_block>,
    <item:overweight_farming:overweight_nether_wart_block>,
    <item:overweight_farming:overweight_potato_block>,
    <item:overweight_farming:overweight_cocoa_block>,
    <item:overweight_farming:overweight_carrot_block>,
    <item:overweight_farming:overweight_beetroot_block>
);

// Add tome tags

<tag:items:crafttweaker:tomes>.add(<item:quark:ancient_tome>);

// Tags for Ritual Tablets

<tag:items:crafttweaker:ritualtablets>.add(
    <item:ars_nouveau:ritual_flight>,
    <item:ars_nouveau:ritual_sunrise>,
    <item:ars_nouveau:ritual_overgrowth>,
    <item:ars_nouveau:ritual_moonfall>,
    <item:ars_nouveau:ritual_fertility>,
    <item:ars_nouveau:ritual_binding>,
    <item:ars_nouveau:ritual_wilden_summon>,
    <item:ars_nouveau:ritual_scrying>,
    <item:ars_nouveau:ritual_awakening>,
    <item:ars_nouveau:ritual_burrowing>,
    <item:ars_nouveau:ritual_challenge>,
    <item:ars_nouveau:ritual_cloudshaping>,
    <item:ars_nouveau:ritual_disintegration>,
    <item:ars_nouveau:ritual_warping>,
    <item:ars_nouveau:ritual_restoration>
);

// Tags for Lilies

<tag:items:crafttweaker:lilies>.add(
    <item:cnb:pink_waterlily>,
    <item:cnb:light_pink_waterlily>,
    <item:cnb:yellow_waterlily>,
    <item:cnb:pink_minipad_flower>,
    <item:cnb:light_pink_minipad_flower>,
    <item:cnb:yellow_minipad_flower>,
    <item:cnb:pink_minipad_flower_glow>,
    <item:cnb:light_pink_minipad_flower_glow>,
    <item:cnb:yellow_minipad_flower_glow>
);

var hotBlocks = [
    <block:byg:magmatic_stone>,
    <block:byg:cryptic_magma_block>,
    <block:create:blaze_burner>,
    <block:byg:boric_campfire>,
    <block:decorative_blocks:brazier>,
    <block:decorative_blocks:soul_brazier>,
    <block:byg:cryptic_campfire>,
//    <block:vinery:stove>,
    <block:caupona:brick_hypocaust_firebox>,
    <block:caupona:opus_incertum_hypocaust_firebox>,
    <block:caupona:opus_latericium_hypocaust_firebox>,
    <block:caupona:stone_brick_hypocaust_firebox>,
    <block:caupona:mud_kitchen_stove>,
    <block:caupona:brick_kitchen_stove>,
    <block:caupona:opus_incertum_kitchen_stove>,
    <block:caupona:opus_latericium_kitchen_stove>,
    <block:caupona:stone_brick_kitchen_stove>,
    <block:farmersdelight:stove>
] as Block[];

for item in hotBlocks {
    <tag:blocks:farmersdelight:heat_sources>.add(item);
    <tag:blocks:brewinandchewin:hot_blocks>.add(item);
    <tag:blocks:alexsmobs:froststalker_fears>.add(item);
    <tag:blocks:caupona:stoves>.add(item);
//    <tag:blocks:vinery:allows_cooking_pot_on>.add(item);
}

<tag:items:forge:seeds>.add(<item:farmersrespite:tea_seeds>,
<item:culturaldelights:eggplant_seeds>,
<item:culturaldelights:corn_kernels>,
<item:culturaldelights:cucumber_seeds>);

craftingTable.remove(<item:pipez:item_pipe>);

craftingTable.addShaped("itempipe", <item:pipez:item_pipe> * 16, [
    [<item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>],
    [<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>],
    [<item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>]]);

<tag:items:forge:wrenches>.add(<item:supplementaries:wrench>);

<tag:items:crafttweaker:postboxes>.add(<item:contact:red_postbox>, <item:contact:green_postbox>);

//Sculk crafting
craftingTable.addShaped("sculkcatalyst", <item:minecraft:sculk_catalyst>, [[<item:minecraft:echo_shard>, <item:minecraft:echo_shard>, <item:minecraft:echo_shard>],[<item:minecraft:echo_shard>, <item:minecraft:end_stone>, <item:minecraft:echo_shard>], [<item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>]]);

// Adding tag to glass casings
var glassCasings =
[
    <item:create_crystal_clear:andesite_glass_casing>,
    <item:create_crystal_clear:brass_glass_casing>,
    <item:create_crystal_clear:copper_glass_casing>,
    <item:create_crystal_clear:train_glass_casing>,
    <item:create_crystal_clear:andesite_clear_glass_casing>,
    <item:create_crystal_clear:brass_clear_glass_casing>,
    <item:create_crystal_clear:copper_clear_glass_casing>,
    <item:create_crystal_clear:train_clear_glass_casing>
] as IItemStack[];

for casing in glassCasings{
<tag:items:crafttweaker:glasscasings>.add(casing);
}

// balance tarot deck curio
craftingTable.remove(<item:tarotcards:tarot_deck>);

craftingTable.addShaped("tarotdeck", <item:tarotcards:tarot_deck>,
[
    [<item:create:golden_sheet>, <item:minecraft:dragon_egg>, <item:create:golden_sheet>],
    [<item:create:golden_sheet>, <item:minecraft:nether_star>, <item:create:golden_sheet>],
    [<item:create:golden_sheet>, <item:tarotcards:justice>, <item:create:golden_sheet>]
]);

// Umbrella tags

var umbrellas = [
    <item:davespotioneering:cyan_umbrella>,
    <item:davespotioneering:purple_umbrella>,
    <item:davespotioneering:blue_umbrella>,
    <item:davespotioneering:brown_umbrella>,
    <item:davespotioneering:green_umbrella>,
    <item:davespotioneering:red_umbrella>,
    <item:davespotioneering:black_umbrella>,
    <item:davespotioneering:gilded_umbrella>,
    <item:davespotioneering:aged_umbrella>,
    <item:davespotioneering:orange_umbrella>,
    <item:davespotioneering:white_umbrella>,
    <item:davespotioneering:lime_umbrella>,
    <item:davespotioneering:yellow_umbrella>,
    <item:davespotioneering:light_blue_umbrella>,
    <item:davespotioneering:magenta_umbrella>,
    <item:davespotioneering:pink_umbrella>,
    <item:davespotioneering:gray_umbrella>,
    <item:davespotioneering:light_gray_umbrella>
] as IItemStack[];

for umbrella in umbrellas{
    <tag:items:crafttweaker:umbrellas>.add(umbrella);
}

// Fishing Rod Tags

<tag:items:forge:fishing_rods>.add(
    <item:better_fishing_rods:slimy_fishing_rod>,
    <item:better_fishing_rods:wheaty_fishing_rod>,
    <item:better_fishing_rods:coraly_fishing_rod>,
    <item:better_fishing_rods:villager_fishing_rod>,
    <item:better_fishing_rods:golden_fishing_rod>,
    <item:better_fishing_rods:meaty_fishing_rod>,
    <item:better_fishing_rods:orely_fishing_rod>,
    <item:minecraft:fishing_rod>
);

// Dried Sage Recipe

craftingTable.addShaped("driedsagebundle", <item:hexerei:dried_sage_bundle>, [
    [<item:hexerei:dried_sage>, <item:hexerei:dried_sage>, <item:hexerei:dried_sage>],
    [<item:hexerei:dried_sage>, <item:minecraft:string>, <item:hexerei:dried_sage>],
    [<item:hexerei:dried_sage>, <item:hexerei:dried_sage>, <item:hexerei:dried_sage>]
]);

// Add recipe Warp scroll < Warp Stone

craftingTable.addShaped("scrolltostone", <item:waystones:warp_stone>,
[[air, <item:waystones:warp_scroll>, air],
[<item:waystones:warp_scroll>, <item:minecraft:emerald>, <item:waystones:warp_scroll>],
[air, <item:waystones:warp_scroll>, air]]);

// Convert Waystones to Sharestones

craftingTable.addShapeless("waystonetosharestone", <item:waystones:sharestone>,
[<item:waystones:waystone>]);

craftingTable.addShapeless("sharestonetowaystone", <item:waystones:waystone>,
[<item:waystones:sharestone>]);

craftingTable.addShapeless("mossywaystonetosharestone", <item:waystones:sharestone>,
[<item:waystones:mossy_waystone>]);


craftingTable.addShapeless("sandywaystonetosharestone", <item:waystones:sharestone>,
[<item:waystones:sandy_waystone>]);


//Sleeping Bags not Overlap Sheets
/*
var sleepingbags = [
    <item:comforts:sleeping_bag_purple>,
    <item:comforts:sleeping_bag_blue>,
    <item:comforts:sleeping_bag_brown>,
    <item:comforts:sleeping_bag_green>,
    <item:comforts:sleeping_bag_red>,
    <item:comforts:sleeping_bag_black>,
    <item:comforts:sleeping_bag_white>,
    <item:comforts:sleeping_bag_orange>,
    <item:comforts:sleeping_bag_magenta>,
    <item:comforts:sleeping_bag_light_blue>,
    <item:comforts:sleeping_bag_yellow>,
    <item:comforts:sleeping_bag_lime>,
    <item:comforts:sleeping_bag_pink>,
    <item:comforts:sleeping_bag_gray>,
    <item:comforts:sleeping_bag_light_gray>,
    <item:comforts:sleeping_bag_cyan>
] as IItemStack[];

for bag in sleepingbags {
    craftingTable.remove(bag);
}
*/

var leather = <item:minecraft:leather>;

craftingTable.addShaped("sleepingbag_cyan", <item:comforts:sleeping_bag_cyan>, 
[
    [leather, air, leather],
    [<item:minecraft:cyan_wool>, <item:minecraft:cyan_wool>, <item:minecraft:cyan_wool>]
]);

craftingTable.addShaped("sleepingbag_purple", <item:comforts:sleeping_bag_purple>, 
[
    [leather, air, leather],
    [<item:minecraft:purple_wool>, <item:minecraft:purple_wool>, <item:minecraft:purple_wool>]
]);

craftingTable.addShaped("sleepingbag_blue", <item:comforts:sleeping_bag_blue>, 
[
    [leather, air, leather],
    [<item:minecraft:blue_wool>, <item:minecraft:blue_wool>, <item:minecraft:blue_wool>]
]);

craftingTable.addShaped("sleepingbag_brown", <item:comforts:sleeping_bag_brown>, 
[
    [leather, air, leather],
    [<item:minecraft:brown_wool>, <item:minecraft:brown_wool>, <item:minecraft:brown_wool>]
]);

craftingTable.addShaped("sleepingbag_green", <item:comforts:sleeping_bag_green>, 
[
    [leather, air, leather],
    [<item:minecraft:green_wool>, <item:minecraft:green_wool>, <item:minecraft:green_wool>]
]);

craftingTable.addShaped("sleepingbag_red", <item:comforts:sleeping_bag_red>, 
[
    [leather, air, leather],
    [<item:minecraft:red_wool>, <item:minecraft:red_wool>, <item:minecraft:red_wool>]
]);

craftingTable.addShaped("sleepingbag_black", <item:comforts:sleeping_bag_black>, 
[
    [leather, air, leather],
    [<item:minecraft:black_wool>, <item:minecraft:black_wool>, <item:minecraft:black_wool>]
]);

craftingTable.addShaped("sleepingbag_white", <item:comforts:sleeping_bag_white>, 
[
    [leather, air, leather],
    [<item:minecraft:white_wool>, <item:minecraft:white_wool>, <item:minecraft:white_wool>]
]);

craftingTable.addShaped("sleepingbag_orange", <item:comforts:sleeping_bag_orange>, 
[
    [leather, air, leather],
    [<item:minecraft:orange_wool>, <item:minecraft:orange_wool>, <item:minecraft:orange_wool>]
]);

craftingTable.addShaped("sleepingbag_light_blue", <item:comforts:sleeping_bag_light_blue>, 
[
    [leather, air, leather],
    [<item:minecraft:light_blue_wool>, <item:minecraft:light_blue_wool>, <item:minecraft:light_blue_wool>]
]);

craftingTable.addShaped("sleepingbag_yellow", <item:comforts:sleeping_bag_yellow>, 
[
    [leather, air, leather],
    [<item:minecraft:yellow_wool>, <item:minecraft:yellow_wool>, <item:minecraft:yellow_wool>]
]);

craftingTable.addShaped("sleepingbag_lime", <item:comforts:sleeping_bag_lime>, 
[
    [leather, air, leather],
    [<item:minecraft:lime_wool>, <item:minecraft:lime_wool>, <item:minecraft:lime_wool>]
]);

craftingTable.addShaped("sleepingbag_pink", <item:comforts:sleeping_bag_pink>, 
[
    [leather, air, leather],
    [<item:minecraft:pink_wool>, <item:minecraft:pink_wool>, <item:minecraft:pink_wool>]
]);

craftingTable.addShaped("sleepingbag_gray", <item:comforts:sleeping_bag_gray>, 
[
    [leather, air, leather],
    [<item:minecraft:gray_wool>, <item:minecraft:gray_wool>, <item:minecraft:gray_wool>]
]);

craftingTable.addShaped("sleepingbag_light_gray", <item:comforts:sleeping_bag_light_gray>, 
[
    [leather, air, leather],
    [<item:minecraft:light_gray_wool>, <item:minecraft:light_gray_wool>, <item:minecraft:light_gray_wool>]
]);

// Dyeing Sleeping Bags


craftingTable.addShapeless("white_sleepingbag", <item:comforts:sleeping_bag_white>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:white_dye>]);

craftingTable.addShapeless("orange_sleepingbag", <item:comforts:sleeping_bag_orange>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:orange_dye>]);

craftingTable.addShapeless("magenta_sleepingbag", <item:comforts:sleeping_bag_magenta>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:magenta_dye>]);

craftingTable.addShapeless("light_blue_sleepingbag", <item:comforts:sleeping_bag_light_blue>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:light_blue_dye>]);

craftingTable.addShapeless("yellow_sleepingbag", <item:comforts:sleeping_bag_yellow>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:yellow_dye>]);

craftingTable.addShapeless("lime_sleepingbag", <item:comforts:sleeping_bag_lime>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:lime_dye>]);

craftingTable.addShapeless("pink_sleepingbag", <item:comforts:sleeping_bag_pink>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:pink_dye>]);

craftingTable.addShapeless("gray_sleepingbag", <item:comforts:sleeping_bag_gray>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:gray_dye>]);

craftingTable.addShapeless("light_gray_sleepingbag", <item:comforts:sleeping_bag_light_gray>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:light_gray_dye>]);

craftingTable.addShapeless("cyan_sleepingbag", <item:comforts:sleeping_bag_cyan>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:cyan_dye>]);

craftingTable.addShapeless("purple_sleepingbag", <item:comforts:sleeping_bag_purple>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:purple_dye>]);

craftingTable.addShapeless("blue_sleepingbag", <item:comforts:sleeping_bag_blue>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:blue_dye>]);

craftingTable.addShapeless("brown_sleepingbag", <item:comforts:sleeping_bag_brown>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:brown_dye>]);

craftingTable.addShapeless("green_sleepingbag", <item:comforts:sleeping_bag_green>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:green_dye>]);

craftingTable.addShapeless("red_sleepingbag", <item:comforts:sleeping_bag_red>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:red_dye>]);

craftingTable.addShapeless("black_sleepingbag", <item:comforts:sleeping_bag_black>, 
[<tag:items:comforts:sleeping_bags>, <item:minecraft:black_dye>]);

//Quark Azalea Wood Recipes

<tag:items:crafttweaker:azalea_logs>.add(<item:ecologics:flowering_azalea_log>,
<item:ecologics:azalea_log>);

<tag:items:crafttweaker:azalea_wood>.add(<item:ecologics:azalea_wood>, 
<item:ecologics:flowering_azalea_wood>);

<tag:items:crafttweaker:azalea_planks>.add(<item:ecologics:azalea_planks>, 
<item:ecologics:flowering_azalea_planks>);

craftingTable.addShapeless("quarkazalog", <item:quark:azalea_log>, [<item:minecraft:moss_block>, <tag:items:crafttweaker:azalea_logs>]);

craftingTable.addShapeless("quarkazawood", <item:quark:azalea_wood>, [<item:minecraft:moss_block>, <tag:items:crafttweaker:azalea_wood>]);

craftingTable.addShapeless("quarkazaplanks", <item:quark:azalea_planks>, [<item:minecraft:moss_block>, <tag:items:crafttweaker:azalea_planks>]);

craftingTable.addShapeless("quarkazastriplog", <item:quark:stripped_azalea_log>, [<item:minecraft:moss_block>, <item:ecologics:stripped_azalea_log>]);

craftingTable.addShapeless("quarkazastripwood", <item:quark:stripped_azalea_wood>, [<item:minecraft:moss_block>, <item:ecologics:stripped_azalea_wood>]);

// Walnut tagging and recipes

<tag:items:forge:nuts>.add(<item:caupona:walnut>);
<tag:items:forge:nuts/walnut>.add(<item:caupona:walnut>);

craftingTable.remove(<item:delightful:honey_glazed_walnut>);

craftingTable.addShapeless("honey_walnut", <item:delightful:honey_glazed_walnut> * 3, [<tag:items:forge:nuts/walnut>, <tag:items:forge:nuts/walnut>, <tag:items:forge:nuts/walnut>, <item:minecraft:honey_bottle>]);

// Mermod Crafting Changes

craftingTable.remove(<item:mermod:sea_crystal>);

craftingTable.addShapeless("seacrystal", <item:mermod:sea_crystal> * 4, [<item:endrem:guardian_eye>, <item:minecraft:heart_of_the_sea>]);

// Apple crate tags

<tag:items:crafttweaker:crates>.add(
    <item:applecrates:oak_crate>,
    <item:applecrates:birch_crate>,
    <item:applecrates:spruce_crate>,
    <item:applecrates:acacia_crate>,
    <item:applecrates:jungle_crate>,
    <item:applecrates:dark_oak_crate>,
    <item:applecrates:crimson_crate>,
    <item:applecrates:warped_crate>
);

// Add Create support for Cheeses

// HauntingManager.addRecipe(name as string, outputs as Percentaged<IItemStack>[], input as IIngredient, duration as int) as void

<recipetype:create:haunting>.addRecipe("hauntedflaxencheese", [<item:brewinandchewin:flaxen_cheese_wheel> % 100], <item:brewinandchewin:unripe_flaxen_cheese_wheel>, 200);

<recipetype:create:haunting>.addRecipe("hauntedscarletcheese", [<item:brewinandchewin:scarlet_cheese_wheel> % 100], <item:brewinandchewin:unripe_scarlet_cheese_wheel>, 200);

//Make Cheese Compactable

// CompactingManager.addRecipe(name as string, heat as HeatCondition, outputs as Percentaged<IItemStack>[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int) as void

<recipetype:create:compacting>.addRecipe("compactedflaxencheese", <constant:create:heat_condition:heated>, [<item:brewinandchewin:unripe_flaxen_cheese_wheel> % 100], [<item:minecraft:brown_mushroom> * 2, <item:minecraft:sugar>], [<fluid:minecraft:milk> * 1000], 4000);

<recipetype:create:compacting>.addRecipe("compactedscarletcheese", <constant:create:heat_condition:heated>, [<item:brewinandchewin:unripe_scarlet_cheese_wheel> % 100], [<item:minecraft:crimson_fungus> * 2, <item:minecraft:sugar>], [<fluid:minecraft:milk> * 1000], 4000);


// Add Cheese Wheel Tags

<tag:items:crafttweaker:cheeses>.add(
    <item:brewinandchewin:unripe_flaxen_cheese_wheel>,
    <item:brewinandchewin:unripe_scarlet_cheese_wheel>
);

// Soul Beads and other Soul Stuff

craftingTable.remove(<item:deeperdarker:soul_elytra>);
craftingTable.addShaped("soulelytra", <item:deeperdarker:soul_elytra>, [
    [<item:deeperdarker:sculk_bone>,<item:alexsmobs:skreecher_soul>, <item:deeperdarker:sculk_bone>],
    [<item:deeperdarker:soul_dust>, <item:minecraft:elytra>, <item:deeperdarker:soul_dust>],
    [<item:quark:soul_bead>, <item:deeperdarker:soul_crystal>, <item:quark:soul_bead>]
]);

//Hide some unwanted categories

//Jei.hideCategory(<resource:caupona:bowl_filling>);
Jei.hideCategory(<resource:caupona:bowl_draining>);
Jei.hideCategory(<resource:extendedmushrooms:fairy_ring>);

//Dough tags

<tag:items:minecraft:dough>.add(<item:culturaldelights:corn_dough>);
//<tag:items:forge:dough>.add(<item:culturaldelights:corn_dough>, <item:vinery:dough>);
/*
// Rustic Dough Recipe

craftingTable.remove(<item:vinery:dough>);
craftingTable.addShapeless("rusticdough", <item:vinery:dough> * 2, 
[<item:create:wheat_flour>,
<item:create:wheat_flour>, 
<item:spelunkery:salt>, 
<item:minecraft:water_bucket>]);

// Grape tags

<tag:items:crafttweaker:grapes>.add(<item:vinery:red_grape>, <item:vinery:white_grape>);
<tag:items:forge:fruits>.add(<item:vinery:red_grape>, <item:vinery:white_grape>);

// Jelly Tags

var jams = [
<item:vinery:cherry_jam>,
<item:vinery:apple_jam>,
<item:vinery:sweetberry_jam>,
<item:vinery:grape_jam>
] as IItemStack[];

for jam in jams{
    <tag:items:forge:jams>.add(jam);
    <tag:items:forge:jam>.add(jam);
    <tag:items:forge:jellies>.add(jam);
    <tag:items:forge:jelly>.add(jam);    
}
*/
// Milk

craftingTable.addShapeless("milktomilk", <item:farmersdelight:milk_bottle>, [<item:minecraft:potion>.withTag({Potion: "davespotioneering:milk"})]);

brewing.removeRecipeByInputPotion(<potion:davespotioneering:milk>);

// Tagging Figs

<tag:items:forge:fruits>.add(<item:caupona:fig>);

// Cheese tags

<tag:items:forge:cheese>.add(<item:brewinandchewin:scarlet_cheese_wedge>, <item:brewinandchewin:flaxen_cheese_wedge>);

// Fried Egg Recipe

furnace.addRecipe("friedduckegg", <item:farmersdelight:fried_egg>, <tag:items:forge:eggs>, 1.0, 60);

// tag apple

<tag:items:forge:fruits/sweet>.add(<item:byg:green_apple>); 

// Mixed ore chunk uses tags

craftingTable.remove(<item:better_fishing_rods:mixed_ore_chunk>);
craftingTable.addShapeless("mixedore", <item:better_fishing_rods:mixed_ore_chunk>, [
    <tag:items:forge:ores/coal>,
    <tag:items:forge:ores/iron>,
    <tag:items:forge:ores/redstone>,
    <tag:items:forge:ores/gold>,
    <tag:items:forge:ores/lapis>,
    <tag:items:forge:ores/diamond>,
    <tag:items:forge:ores/emerald>
]);

// Glowstick recipe

<tag:items:crafttweaker:glowstick_ingredient>.add(<item:minecraft:glow_berries>,
<item:minecraft:glow_ink_sac>,
<item:spelunkery:phosphor_fungus>,
<item:spelunkery:mushgloom>,
<item:extendedmushrooms:glowshroom>,
<item:twilightforest:torchberries>);

craftingTable.remove(<item:spelunkery:glowstick>);
craftingTable.addShaped("glowsticktags", <item:spelunkery:glowstick> * 4,[
    [air, <tag:items:forge:slimeballs>, air],
    [air, <tag:items:crafttweaker:glowstick_ingredient>, air],
    [air, <item:minecraft:stick>, air]
]);

// Coal to compacting drawers

craftingTable.remove(<item:spelunkery:coal_lump>);
craftingTable.remove(<item:minecraft:coal>);
craftingTable.addShapeless("coallumps", <item:spelunkery:coal_lump> * 9, [<item:minecraft:coal>]);
craftingTable.addShapeless("coalfromlump", <item:minecraft:coal>, [
    <item:spelunkery:coal_lump>,
    <item:spelunkery:coal_lump>,
    <item:spelunkery:coal_lump>,
    <item:spelunkery:coal_lump>,
    <item:spelunkery:coal_lump>,
    <item:spelunkery:coal_lump>,
    <item:spelunkery:coal_lump>,
    <item:spelunkery:coal_lump>,
    <item:spelunkery:coal_lump>
]);

craftingTable.addShapeless("coalfromblock", <item:minecraft:coal> * 9, [<item:minecraft:coal_block>]);

//reaper scythe tags

<tag:items:crafttweaker:scythe>.add(<item:reaping:diamond_reaping_tool>,
<item:reaping:gold_reaping_tool>,
<item:reaping:iron_reaping_tool>,
<item:reaping:netherite_reaping_tool>);

// BYG Sandstone

<tag:items:c:sand/purple>.add(<item:byg:purple_sand>);
<tag:items:c:sand/pink>.add(<item:byg:pink_sand>);
<tag:items:c:sand/blue>.add(<item:byg:blue_sand>);
<tag:items:c:sand/white>.add(<item:byg:white_sand>);
<tag:items:c:sand/black>.add(<item:byg:black_sand>);

// Plushie Cloning

var plushies = [
    <item:plushies:turtle>,
    <item:plushies:sheep>,
    <item:plushies:warden>,
    <item:plushies:goat>,
    <item:plushies:frog>,
    <item:plushies:white_fox>,
    <item:plushies:llama>,
    <item:plushies:mooshroom>,
    <item:plushies:parrot>,
    <item:plushies:enderman>,
    <item:plushies:dragon>,
    <item:plushies:dolphin>,
    <item:plushies:cow>,
    <item:plushies:cat>,
    <item:plushies:bee>,
    <item:plushies:axolotl>,
    <item:plushies:snow_golem>
] as IItemStack[];

for plush in plushies{
    craftingTable.remove(plush);
    plush.addTooltip("Quest Reward");
}

craftingTable.addShaped("snow_golemplushie", <item:plushies:snow_golem> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:snow_golem>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("axolotlplushie", <item:plushies:axolotl> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:axolotl>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("beeplushie", <item:plushies:bee> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:bee>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("catplushie", <item:plushies:cat> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:cat>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("cowplushie", <item:plushies:cow> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:cow>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("dolphinplushie", <item:plushies:dolphin> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:dolphin>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("dragonplushie", <item:plushies:dragon> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:dragon>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("endermanplushie", <item:plushies:enderman> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:enderman>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("parrotplushie", <item:plushies:parrot> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:parrot>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("mooshroomplushie", <item:plushies:mooshroom> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:mooshroom>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);
/*
craftingTable.addShaped("magma_cubeplushie", <item:plushies:magma_cube>, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:magma_cube>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("red_foxplushie", <item:plushies:red_fox>, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:red_fox>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("pandaplushie", <item:plushies:panda>, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:panda>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("slimeplushie", <item:plushies:slime>, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:slime>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);
*/

craftingTable.addShaped("llamaplushie", <item:plushies:llama> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:llama>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("white_foxplushie", <item:plushies:white_fox> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:white_fox>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("frogplushie", <item:plushies:frog> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:frog>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("goatplushie", <item:plushies:goat> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:goat>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("wardenplushie", <item:plushies:warden> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:warden>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("sheepplushie", <item:plushies:sheep> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:sheep>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("turtleplushie", <item:plushies:turtle> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:turtle>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("dragonplushie2", <item:plushies:dragon>, [
    [air, <item:minecraft:dragon_head>, air],
    [<item:ars_nouveau:wilden_wing>, <item:minecraft:dragon_egg>, <item:ars_nouveau:wilden_wing>],
    [air, <item:alexsmobs:raccoon_tail>, air]
]);

// Backpacks

craftingTable.addShaped("packtopack", <item:backpacked:backpack>, [
    [air, <item:minecraft:bone_meal>, air],
    [<item:minecraft:leather>, <item:quark:backpack>, <item:minecraft:leather>],
    [air, <item:minecraft:bone_meal>, air]
]);

// Duck Meats

<tag:items:forge:raw_duck>.add(<item:duckling:raw_duck>);

// Dragon Egg Shell
/*
craftingTable.addShapeless("glueeggshell", <item:ends_delight:larger_dragon_egg_shell>, [
    <item:ends_delight:dragon_egg_shell>,
    <item:ends_delight:dragon_egg_shell>,
    <item:ends_delight:dragon_egg_shell>,
    <item:create:super_glue>.anyDamage().transformDamage(1)
    ]);
*/
<tag:items:twilightforest:banned_uncraftables>.add(<item:ends_delight:non_hatchable_dragon_egg>);

// Cart tagging

<tag:items:crafttweaker:carts>.add(<item:astikorcarts:supply_cart>, 
<item:astikorcarts:animal_cart>);

// Torch Tagging

<tag:items:crafttweaker:magnumtorches>.add(<item:magnumtorch:diamond_magnum_torch>,
<item:magnumtorch:emerald_magnum_torch>,
<item:magnumtorch:amethyst_magnum_torch>);

// stock hiding

Jei.hideIngredient(<fluid:caupona:stock>);

// frying pan tags

<tag:items:crafttweaker:cookingpans>.add(<item:caupona:stone_griddle>,
<item:caupona:copper_frying_pan>,
<item:caupona:iron_frying_pan>);

// walnut tagging pt 2

<tag:items:caupona:walnut>.add(<item:ecologics:walnut>);

// Dolium tagging

<tag:items:crafttweaker:dolium>.add(<item:caupona:brick_counter_with_dolium>,
    <item:caupona:opus_incertum_counter_with_dolium>,
    <item:caupona:opus_latericium_counter_with_dolium>,
    <item:caupona:mud_counter_with_dolium>,
    <item:caupona:stone_brick_counter_with_dolium>);

// alliums are onions

<tag:items:forge:vegetables/onion>.add(
    <item:minecraft:allium>,
    <item:byg:pink_allium>
);

// mushroom stew

<tag:items:crafttweaker:bowls>.add(<item:minecraft:bowl>,
<item:ecologics:coconut_husk>);

craftingTable.remove(<item:minecraft:mushroom_stew>);

craftingTable.addShapeless("mushroomstew", <item:minecraft:mushroom_stew>, [<item:minecraft:brown_mushroom>,
<item:minecraft:red_mushroom>, <tag:items:crafttweaker:bowls>]);

// Immersive Aircraft recipes

craftingTable.remove(<item:immersive_aircraft:improved_landing_gear>);
craftingTable.addShaped("advlanding", <item:immersive_aircraft:improved_landing_gear>, [
    [air, <item:create:gearbox>, air],
    [<item:create:shaft>, air, <item:create:shaft>],
    [<item:astikorcarts:wheel>, air, <item:astikorcarts:wheel>]
]);

craftingTable.remove(<item:immersive_aircraft:industrial_gears>);
craftingTable.addShaped("indgears", <item:immersive_aircraft:industrial_gears>, [
    [<item:create:copper_sheet>, <item:create:cogwheel>, <item:create:copper_sheet>],
    [air, air, air],
    [<item:create:iron_sheet>, <item:create:cogwheel>, <item:create:iron_sheet>]
]);

craftingTable.remove(<item:immersive_aircraft:hull_reinforcement>);
craftingTable.addShaped("reinhull", <item:immersive_aircraft:hull_reinforcement>, [
    [<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>],
    [<item:immersive_aircraft:hull>, <item:immersive_aircraft:hull>, <item:immersive_aircraft:hull>],
    [<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>]
]);

craftingTable.remove(<item:immersive_aircraft:boiler>);
craftingTable.addShaped("boiler", <item:immersive_aircraft:boiler>, [
    [air, <item:create:copper_valve_handle>, air],
    [<item:create:fluid_pipe>, <item:create:steam_engine>, <item:create:fluid_pipe>],
    [air, <item:minecraft:blaze_powder>, air]
]);

craftingTable.remove(<item:immersive_aircraft:hull>);
craftingTable.addShaped("hull", <item:immersive_aircraft:hull>, [
    [air, air, air],
    [<item:create:andesite_casing>, <item:minecraft:iron_ingot>, <item:create:andesite_casing>],
    [<item:create:andesite_casing>, <item:minecraft:iron_ingot>, <item:create:andesite_casing>]
]);

craftingTable.remove(<item:immersive_aircraft:engine>);
craftingTable.addShaped("engine", <item:immersive_aircraft:engine>, [
    [<item:create:hand_crank>, <item:create:encased_chain_drive>, <item:create:hand_crank>],
    [<item:create:mechanical_piston>, <item:immersive_aircraft:boiler>, <item:create:mechanical_piston>],
    [<item:minecraft:cobbled_deepslate>, <item:minecraft:cobbled_deepslate>, <item:minecraft:cobbled_deepslate>]
]);

craftingTable.remove(<item:immersive_aircraft:steel_boiler>);
craftingTable.addShaped("steelboiler", <item:immersive_aircraft:steel_boiler>, [
    [<item:create:iron_sheet>, <item:create:propeller>, <item:create:iron_sheet>],
    [<item:create:precision_mechanism>, <item:immersive_aircraft:boiler>, <item:create:precision_mechanism>],
    [<item:minecraft:coal_block>, <item:create:blaze_burner>, <item:minecraft:coal_block>]
]);

craftingTable.remove(<item:immersive_aircraft:propeller>);
craftingTable.addShaped("propeller", <item:immersive_aircraft:propeller>, [
    [air, <item:create:propeller>, air],
    [air, <item:create:shaft>, air],
    [air, <item:create:propeller>, air]
]);

craftingTable.remove(<item:immersive_aircraft:enhanced_propeller>);
craftingTable.addShaped("enhancedprop", <item:immersive_aircraft:enhanced_propeller>, [
    [air, <item:minecraft:copper_ingot>, air],
    [<item:minecraft:copper_ingot>, <item:immersive_aircraft:propeller>, <item:minecraft:copper_ingot>],
    [air, <item:minecraft:copper_ingot>, air]
]);

craftingTable.remove(<item:immersive_aircraft:sail>);
craftingTable.addShaped("sail", <item:immersive_aircraft:sail>, [
    [air, air, air],
    [<item:create:white_sail>, <item:create:white_sail>, <item:create:white_sail>],
    [<item:create:white_sail>, <item:create:white_sail>, <item:create:white_sail>]
]);

craftingTable.remove(<item:immersive_aircraft:sturdy_pipes>);
craftingTable.addShaped("sturdypipes", <item:immersive_aircraft:sturdy_pipes>, [
    [air, <item:create:iron_sheet>, <item:create:fluid_pipe>],
    [<item:create:iron_sheet>, <item:create:fluid_pipe>, <item:create:iron_sheet>],
    [<item:create:fluid_pipe>, <item:create:iron_sheet>, air]
]);

craftingTable.remove(<item:immersive_aircraft:airship>);
craftingTable.addShaped("airship", <item:immersive_aircraft:airship>, [
    [<item:immersive_aircraft:sail>, <item:immersive_aircraft:sail>, <item:immersive_aircraft:sail>],
    [<item:immersive_aircraft:sail>, <item:create:red_seat>, <item:immersive_aircraft:propeller>],
    [<item:immersive_aircraft:hull>, <item:immersive_aircraft:engine>, <item:immersive_aircraft:hull>]
]);

craftingTable.remove(<item:immersive_aircraft:biplane>);
craftingTable.addShaped("biplane", <item:immersive_aircraft:biplane>, [
    [air, <item:immersive_aircraft:propeller>, air],
    [<item:immersive_aircraft:sail>, <item:immersive_aircraft:engine>, <item:immersive_aircraft:sail>],
    [<item:immersive_aircraft:hull>, <item:create:red_seat>, <item:immersive_aircraft:hull>]
]);

craftingTable.remove(<item:immersive_aircraft:gyrodyne>);
craftingTable.addShaped("gyrodyne", <item:immersive_aircraft:gyrodyne>, [
    [<item:immersive_aircraft:propeller>, air, <item:immersive_aircraft:propeller>],
    [<item:immersive_aircraft:hull>, <item:create:precision_mechanism>, <item:immersive_aircraft:hull>],
    [<item:immersive_aircraft:propeller>, <item:create:red_seat>, <item:immersive_aircraft:propeller>]
]);

// Tagging Foods

<tag:items:forge:vegetables>.add(
    <item:culturaldelights:cut_cucumber>,
    <item:culturaldelights:cucumber>,
    <item:culturaldelights:cut_avocado>,
    <item:culturaldelights:avocado>,
    <item:culturaldelights:eggplant>,
    <item:culturaldelights:cut_eggplant>,
    <item:culturaldelights:white_eggplant>,
    <item:culturaldelights:corn_cob>,
    <item:delightful:cactus_flesh>,
    <item:farmersdelight:pumpkin_slice>
);

<tag:items:forge:fruits>.add(
    <item:ars_nouveau:frostaya_pod>,
    <item:ecologics:coconut_slice>,
    <item:collectorsreap:pomegranate_slice>,
    <item:collectorsreap:lime>,
    <item:collectorsreap:lime_slice>,
    <item:collectorsreap:pomegranate>,
    <item:ends_delight:chorus_succulent>,
    <item:ends_delight:chorus_fruit_grain>,
    <item:ends_delight:ender_pearl_grain>,
    <item:ars_nouveau:mendosteen_pod>,
    <item:ars_nouveau:bastion_pod>,
    <item:ars_nouveau:bombegranate_pod>
);


// Caupona Tags

<tag:items:caupona:mushroom>.add(
    <item:spelunkery:button_mushroom>,
    <item:collectorsreap:portobello>,
    <item:spelunkery:portabella>,
    <item:spelunkery:crimini>,
    <item:byg:white_puffball_cap>,
    <item:byg:cooked_white_puffball_cap>,
    <item:environmental:truffle>
);

<tag:items:forge:mushrooms>.add(
    <item:spelunkery:button_mushroom>,
    <item:collectorsreap:portobello>,
    <item:spelunkery:portabella>,
    <item:spelunkery:crimini>,
    <item:byg:white_puffball_cap>,
    <item:byg:cooked_white_puffball_cap>,
    <item:environmental:truffle>
);

<tag:items:caupona:meats>.add(
    <item:alexsdelight:kangaroo_shank>,
    <item:twilightforest:cooked_meef>,
    <item:twilightforest:raw_meef>,
    <item:delightful:venison_chops>,
    <item:delightful:cooked_venison_chops>,
    <item:delightful:raw_goat>,
    <item:delightful:cooked_goat>,
    <item:twilightforest:cooked_venison>,
    <item:twilightforest:raw_venison>,
    <item:alexsmobs:cooked_kangaroo_meat>,
    <item:alexsmobs:kangaroo_meat>,
    <item:alexsmobs:cooked_moose_ribs>,
    <item:alexsmobs:moose_ribs>,
    <item:alexsdelight:bison_patty>,
    <item:alexsdelight:cooked_bison>,
    <item:alexsdelight:raw_bison>,
    <item:alexsdelight:bison_mince>,
    <item:alexsdelight:cooked_loose_moose_rib>,
    <item:alexsdelight:loose_moose_rib>,
    <item:alexsdelight:cooked_kangaroo_shank>,
    <item:nethersdelight:ground_strider>,
    <item:ends_delight:raw_dragon_meat_cuts>,
    <item:ends_delight:raw_dragon_meat>,
    <item:ends_delight:raw_ender_mite_meat>,
    <item:ends_delight:dragon_leg>,
    <item:nethersdelight:strider_slice>,
    <item:environmental:venison>,
    <item:abnormals_delight:venison_shanks>
);

<tag:items:caupona:meats/meat>.add(
    <item:alexsdelight:kangaroo_shank>,
    <item:twilightforest:cooked_meef>,
    <item:twilightforest:raw_meef>,
    <item:delightful:venison_chops>,
    <item:delightful:cooked_venison_chops>,
    <item:delightful:raw_goat>,
    <item:delightful:cooked_goat>,
    <item:twilightforest:cooked_venison>,
    <item:twilightforest:raw_venison>,
    <item:alexsmobs:cooked_kangaroo_meat>,
    <item:alexsmobs:kangaroo_meat>,
    <item:alexsmobs:cooked_moose_ribs>,
    <item:alexsmobs:moose_ribs>,
    <item:alexsdelight:bison_patty>,
    <item:alexsdelight:cooked_bison>,
    <item:alexsdelight:raw_bison>,
    <item:alexsdelight:bison_mince>,
    <item:alexsdelight:cooked_loose_moose_rib>,
    <item:alexsdelight:loose_moose_rib>,
    <item:alexsdelight:cooked_kangaroo_shank>,
    <item:nethersdelight:ground_strider>,
    <item:ends_delight:raw_dragon_meat_cuts>,
    <item:ends_delight:raw_dragon_meat>,
    <item:ends_delight:dragon_leg>,
    <item:nethersdelight:strider_slice>,
    <item:environmental:venison>,
    <item:abnormals_delight:venison_shanks>
);

<tag:items:caupona:meats/poultry>.add(
    <item:duckling:cooked_duck>,
    <item:duckling:raw_duck>,
    <item:alexsdelight:cooked_bunfungus>,
    <item:alexsdelight:raw_bunfungus>,
    <item:alexsdelight:cooked_bunfungus_drumstick>,
    <item:alexsdelight:raw_bunfungus_drumstick>,
    <item:farmersdelight:chicken_cuts>,
    <item:abnormals_delight:duck_fillet>,
    <item:environmental:duck>,
    <item:environmental:cooked_duck>
);

<tag:items:forge:cooked_duck>.add(
    <item:duckling:cooked_duck>
);

<tag:items:caupona:meats>.add(
    <item:duckling:cooked_duck>,
    <item:duckling:raw_duck>,
    <item:alexsdelight:cooked_bunfungus>,
    <item:alexsdelight:raw_bunfungus>,
    <item:alexsdelight:cooked_bunfungus_drumstick>,
    <item:alexsdelight:raw_bunfungus_drumstick>,
    <item:farmersdelight:chicken_cuts>,
    <item:abnormals_delight:duck_fillet>,
    <item:environmental:duck>,
    <item:environmental:cooked_duck>
);

<tag:items:caupona:seafood/fish>.add(
    <item:alexsmobs:raw_catfish>,
    <item:alexsmobs:cooked_catfish>,
    <item:alexsdelight:cooked_catfish_slice>,
    <item:alexsdelight:raw_catfish_slice>,
    <item:netherdepthsupgrade:soulsucker_slice>,
    <item:netherdepthsupgrade:glowdine_slice>,
    <item:netherdepthsupgrade:magmacubefish_slice>,
    <item:netherdepthsupgrade:blazefish_slice>,
    <item:netherdepthsupgrade:searing_cod_slice>,
    <item:netherdepthsupgrade:obsidianfish_slice>,
    <item:netherdepthsupgrade:lava_pufferfish_slice>
);

<tag:items:minecraft:fishes>.add(
    <item:alexsmobs:raw_catfish>,
    <item:alexsmobs:cooked_catfish>,
    <item:alexsdelight:cooked_catfish_slice>,
    <item:alexsdelight:raw_catfish_slice>,
    <item:netherdepthsupgrade:soulsucker_slice>,
    <item:netherdepthsupgrade:glowdine_slice>,
    <item:netherdepthsupgrade:magmacubefish_slice>,
    <item:netherdepthsupgrade:blazefish_slice>,
    <item:netherdepthsupgrade:searing_cod_slice>,
    <item:netherdepthsupgrade:obsidianfish_slice>,
    <item:netherdepthsupgrade:lava_pufferfish_slice>
);

<tag:items:caupona:seafood>.add(
    <item:quark:crab_leg>,
    <item:quark:cooked_crab_leg>,
    <item:alexsmobs:lobster_tail>,
    <item:alexsmobs:cooked_lobster_tail>,
    <item:ecologics:crab_meat>,
    <item:culturaldelights:squid>,
    <item:culturaldelights:raw_calamari>,
    <item:culturaldelights:glow_squid>,
    <item:ends_delight:shulker_meat_slice>,
    <item:ends_delight:shulker_meat>
);

<tag:items:forge:seafood>.add(
    <item:quark:crab_leg>,
    <item:quark:cooked_crab_leg>,
    <item:alexsmobs:lobster_tail>,
    <item:alexsmobs:cooked_lobster_tail>,
    <item:ecologics:crab_meat>,
    <item:culturaldelights:squid>,
    <item:culturaldelights:raw_calamari>,
    <item:culturaldelights:glow_squid>,
    <item:ends_delight:shulker_meat_slice>,
    <item:ends_delight:shulker_meat>
);

<tag:items:caupona:eggs>.add(
    <item:duckling:duck_egg>,
    <item:alexsmobs:terrapin_egg>,
    <item:cnb:lizard_egg>,
    <item:quark:egg_parrot_red_blue>,
    <item:quark:egg_parrot_blue>,
    <item:alexsmobs:emu_egg>,
    <item:quark:egg_parrot_green>,
    <item:quark:egg_parrot_yellow_blue>,
    <item:alexsmobs:crocodile_egg>,
    <item:quark:egg_parrot_grey>,
    <item:environmental:duck_egg>
);

<tag:items:forge:meats>.add(
    <item:alexsmobs:moose_ribs>,
    <item:farmersdelight:bacon>,
    <item:farmersdelight:mutton_chops>,
    <item:twilightforest:raw_meef>,
    <item:farmersdelight:minced_beef>,
    <item:alexsdelight:loose_moose_rib>,
    <item:nethersdelight:hoglin_loin>,
    <item:farmersdelight:ham>,
    <item:alexsmobs:kangaroo_meat>,
    <item:alexsdelight:bison_mince>,
    <item:alexsdelight:kangaroo_shank>,
    <item:alexsdelight:raw_bison>,
    <item:nethersdelight:ground_strider>,
    <item:ends_delight:raw_dragon_meat_cuts>,
    <item:ends_delight:raw_dragon_meat>,
    <item:ends_delight:raw_ender_mite_meat>,
    <item:ends_delight:dragon_leg>,
    <item:nethersdelight:strider_slice>,
    <item:alexsdelight:raw_bunfungus>,
    <item:alexsdelight:raw_bunfungus_drumstick>
);

<tag:items:caupona:cereals>.add(
<item:create:dough>,
<item:culturaldelights:corn_dough>,
<item:create:wheat_flour>,
<item:culturaldelights:tortilla>
);

<tag:items:caupona:cereals/baked>.add(
<item:culturaldelights:tortilla>
);

// Venison

craftingTable.addShapeless("eventotven", <item:twilightforest:cooked_venison>, [<item:environmental:cooked_venison>]);
craftingTable.addShapeless("tventoeven", <item:environmental:cooked_venison>, [<item:twilightforest:cooked_venison>]);

craftingTable.addShapeless("ashanktodshank", <item:delightful:venison_chops>, [<item:abnormals_delight:venison_shanks>]);
craftingTable.addShapeless("dshanktoashank", <item:abnormals_delight:venison_shanks>, [<item:delightful:venison_chops>]);

craftingTable.addShapeless("erawtotraw", <item:twilightforest:raw_venison>, [<item:environmental:venison>]);
craftingTable.addShapeless("trawtoeraw", <item:environmental:venison>, [<item:twilightforest:raw_venison>]);

// Farseer fixing

craftingTable.addShaped("farseergateway", <item:gateways:gate_pearl>.withTag({gateway: "gateways:farseer_gate"}), [
    [<item:create:sturdy_sheet>, <item:gateways:gate_pearl>.withTag({gateway: "gateways:enderman_gate_large"}), <item:create:sturdy_sheet>],
    [<item:deeperdarker:soul_crystal>, <item:alexsmobs:shattered_dimensional_carver>, <item:deeperdarker:soul_crystal>],
    [<item:create:sturdy_sheet>, <item:quark:soul_bead>, <item:create:sturdy_sheet>]
]);

craftingTable.remove(<item:alexsmobs:transmutation_table>);
craftingTable.addShaped("transmutationtable", <item:alexsmobs:transmutation_table>, [
    [<item:minecraft:netherite_ingot>, <item:minecraft:nether_star>, <item:minecraft:netherite_ingot>],
    [<item:alexsmobs:farseer_arm>, <item:minecraft:dragon_egg>, <item:alexsmobs:farseer_arm>],
    [<item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>]
]);

// New Egg Recipe

craftingTable.addShaped("nourishingegg", <item:ends_delight:non_hatchable_dragon_egg>, [
    [<tag:items:forge:roasted_dragon_meat>, <item:minecraft:bone_meal>, <tag:items:forge:roasted_dragon_meat>],
    [<item:minecraft:milk_bucket>, <item:minecraft:dragon_egg>, <item:minecraft:milk_bucket>],
    [<tag:items:forge:roasted_dragon_meat>, <item:minecraft:bone_meal>, <tag:items:forge:roasted_dragon_meat>]
]);

// Gate Pearl Recipes

craftingTable.addShaped("hoglin_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:hoglin_gate"}),
[
    [<item:minecraft:crimson_fungus>,<item:nethersdelight:hoglin_loin> , <item:minecraft:crimson_fungus>],
    [<item:nethersdelight:hoglin_loin>, <item:minecraft:ender_eye>, <item:nethersdelight:hoglin_loin>],
    [<item:minecraft:crimson_fungus>,<item:nethersdelight:hoglin_loin> , <item:minecraft:crimson_fungus>]
]);

craftingTable.addShaped("hoglin_gate_sm", <item:gateways:gate_pearl>.withTag({gateway: "gateways:hoglin_gate_small"}),
[
    [<item:minecraft:crimson_fungus>,<item:nethersdelight:hoglin_loin> , <item:minecraft:crimson_fungus>],
    [<item:nethersdelight:hoglin_loin>, <item:minecraft:ender_pearl>, <item:nethersdelight:hoglin_loin>],
    [<item:minecraft:crimson_fungus>,<item:nethersdelight:hoglin_loin> , <item:minecraft:crimson_fungus>]
]);

craftingTable.addShaped("wraith_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:wraith_gate"}),
[
    [<item:quark:soul_bead>, <item:quark:soul_bead>, <item:quark:soul_bead>],
    [<item:quark:soul_bead>, <item:minecraft:ender_eye>, <item:quark:soul_bead>],
    [<item:quark:soul_bead>, <item:quark:soul_bead>, <item:quark:soul_bead>]
]);

craftingTable.addShaped("murmur_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:murmur_gate"}),
[
    [<item:minecraft:note_block>, <item:quark:paper_lantern_sakura>, <item:minecraft:note_block>],
    [<item:hexerei:cloth>, <item:minecraft:ender_eye>, <item:hexerei:cloth>],
    [<item:minecraft:note_block>, <item:hexerei:cloth>, <item:minecraft:note_block>]
]);

craftingTable.addShaped("mimicube_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:mimicube_gate"}),
[
    [<item:minecraft:dragon_breath>, <item:ars_nouveau:mimic_scroll>, <item:minecraft:dragon_breath>],
    [<item:alexsmobs:mimicream>, <item:minecraft:ender_eye>, <item:alexsmobs:mimicream>],
    [<item:minecraft:dragon_breath>, <item:minecraft:slime_block>, <item:minecraft:dragon_breath>]
]);

craftingTable.addShaped("sculk_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:sculk_gate"}),
[
    [<item:minecraft:sculk>, <item:deeperdarker:reinforced_echo_shard>, <item:minecraft:sculk>],
    [<item:deeperdarker:reinforced_echo_shard>, <item:minecraft:ender_eye>, <item:deeperdarker:reinforced_echo_shard>],
    [<item:minecraft:sculk>, <item:deeperdarker:reinforced_echo_shard>, <item:minecraft:sculk>]
]);

craftingTable.addShaped("nether_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:nether_gate"}),
[
    [<item:minecraft:blaze_rod>, <item:minecraft:warped_fungus>, <item:minecraft:blaze_rod>],
    [<item:alexsmobs:maggot>, <item:minecraft:ender_eye>, <item:alexsmobs:maggot>],
    [<item:minecraft:blaze_rod>, <item:minecraft:crimson_fungus>, <item:minecraft:blaze_rod>]
]);

craftingTable.addShaped("insectoid_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:insectoid_gate"}),
[
    [<item:overweight_farming:vegetable_peels>, <item:minecraft:honey_bottle>, <item:overweight_farming:vegetable_peels>],
    [<item:minecraft:honey_bottle>, <item:minecraft:ender_eye>, <item:minecraft:honey_bottle>],
    [<item:overweight_farming:vegetable_peels>, <item:minecraft:honey_bottle>, <item:overweight_farming:vegetable_peels>]
]);

craftingTable.addShaped("elder_guardian_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:elder_guardian_gate"}),
[
    [<item:minecraft:prismarine_shard>, air, <item:minecraft:prismarine_shard>],
    [air, <item:minecraft:ender_eye>, air],
    [<item:minecraft:prismarine_shard>, air, <item:minecraft:prismarine_shard>]
]);

furnace.remove(<item:alexsmobs:boiled_emu_egg>);

// Golden Core

craftingTable.addShaped("goldencore", <item:gildednetherite:golden_core>, [
[<item:minecraft:gold_ingot>, air, <item:minecraft:gold_ingot>],
[<item:minecraft:gold_ingot>, <item:create:precision_mechanism>, <item:minecraft:gold_ingot>],
[<item:minecraft:gold_ingot>, air, <item:minecraft:gold_ingot>]
]);


craftingTable.remove(<item:luphieclutteredmod:luphie_sewing_table_clutter>);
craftingTable.addShaped("sewingkit", <item:luphieclutteredmod:luphie_sewing_table_clutter>, [
    [<tag:items:forge:string>, <tag:items:minecraft:wool_carpets>, <tag:items:minecraft:wool>],
]);

//Squid

<tag:items:crafttweaker:squid>.add(
    <item:culturaldelights:squid>,
    <item:culturaldelights:cooked_squid>,
    <item:culturaldelights:glow_squid>,
    <item:miners_delight:squid>,
    <item:miners_delight:glow_squid>,
    <item:miners_delight:baked_squid>
);

craftingTable.addShapeless("ctom_squid", <item:miners_delight:squid>, [<item:culturaldelights:squid>]);
craftingTable.addShapeless("ctom_glow_squid", <item:miners_delight:glow_squid>, [<item:culturaldelights:glow_squid>]);
craftingTable.addShapeless("ctom_cooked_squid", <item:miners_delight:baked_squid>, [<item:culturaldelights:cooked_squid>]);

craftingTable.addShapeless("mtoc_squid", <item:culturaldelights:squid>, [<item:miners_delight:squid>]);
craftingTable.addShapeless("mtoc_glow_squid", <item:culturaldelights:glow_squid>, [<item:miners_delight:glow_squid>]);
craftingTable.addShapeless("mtoc_cooked_squid", <item:culturaldelights:cooked_squid>, [<item:miners_delight:baked_squid>]);


//Horse Armors

var horseArmors = [
    <item:byg:ametrine_horse_armor>,
    <item:byg:pendorite_horse_armor>,
    <item:minecraft:leather_horse_armor>,
    <item:minecraft:iron_horse_armor>,
    <item:minecraft:golden_horse_armor>,
    <item:minecraft:diamond_horse_armor>
] as IItemStack[];

for armor in horseArmors {
    armor.maxStackSize = 32;
}

<tag:items:tarotcards:golden>.add(<item:reaping:gold_reaping_tool>,
<item:better_fishing_rods:golden_fishing_rod>,
<item:better_fishing_rods:lucky_golden_fishing_rod>,
<item:twilightforest:gold_minotaur_axe>,
<item:nethersdelight:golden_machete>,
<item:farmersdelight:golden_knife>);

craftingTable.addShaped("hogshoes", <item:alexsmobs:pigshoes>, [
    [<item:minecraft:iron_nugget>, air, <item:minecraft:iron_nugget>],
    [<item:minecraft:iron_ingot>, air, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_nugget>, <item:twilightforest:ironwood_ingot>, <item:minecraft:iron_nugget>]
]);

craftingTable.addShapeless("blackstonefurnace1", <item:nethersdelight:blackstone_furnace>, [<item:quark:blackstone_furnace>]);
craftingTable.addShapeless("blackstonefurnace2", <item:quark:blackstone_furnace>, [<item:nethersdelight:blackstone_furnace>]);

<tag:items:crafttweaker:blackstonefurnaces>.add(<item:nethersdelight:blackstone_furnace>, <item:quark:blackstone_furnace>);

craftingTable.remove(<item:nethersdelight:blackstone_blast_furnace>);
craftingTable.addShaped("blackstoneblastfurnace", <item:nethersdelight:blackstone_blast_furnace>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <tag:items:crafttweaker:blackstonefurnaces>, <item:minecraft:iron_ingot>],
    [<item:minecraft:polished_blackstone>, <item:minecraft:polished_blackstone>, <item:minecraft:polished_blackstone>]
]);



//portable jukebox recipe
craftingTable.addShapeless("portable_jukebox", <item:portablejukebox:portable_jukebox>,
[<item:minecraft:jukebox>, <item:portablejukebox:portable_note_block>]);



 <item:usefulslime:slippery_slime_block>.maxStackSize = 64;

 
 <tag:items:crafttweaker:stackupgrades>.add(
 <item:sophisticatedstorage:stack_upgrade_tier_1>,
<item:sophisticatedstorage:stack_upgrade_tier_2>,
<item:sophisticatedstorage:stack_upgrade_tier_3>,
<item:sophisticatedstorage:stack_upgrade_tier_4>);