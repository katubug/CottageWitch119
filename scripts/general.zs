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



// Adds a recipe for the Mimicarnation
craftingTable.addShapeless("mimicarnacream", <item:alexsmobs:mimicream>, [<item:nethersdelight:mimicarnation>, <item:nethersdelight:mimicarnation>, <item:nethersdelight:mimicarnation>, <item:nethersdelight:mimicarnation>]);

// Adds tags to Brooms
<tag:items:crafttweaker:brooms>.add(<item:hexerei:mahogany_broom>);
<tag:items:crafttweaker:brooms>.add(<item:hexerei:willow_broom>);

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
//JEI.hideIngredient(rgadget);
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
//JEI.addIngredient(agadget);
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
    <item:prefab:block_compressed_quartz_crete>,
    <item:prefab:block_double_compressed_quartz_crete>,
    <item:prefab:block_quartz_crete>,
    <item:prefab:block_quartz_crete_wall>,
    <item:prefab:item_string_of_lanterns>,
    <item:prefab:block_quartz_crete_chiseled>,
    <item:prefab:block_quartz_crete_pillar>,
    <item:prefab:block_quartz_crete_stairs>,
    <item:prefab:block_quartz_crete_slab>,
    <item:prefab:block_quartz_crete_smooth>,
    <item:prefab:block_quartz_crete_smooth_wall>,
    <item:prefab:block_quartz_crete_smooth_stairs>,
    <item:prefab:block_quartz_crete_smooth_slab>,
    <item:prefab:item_swift_blade_wood>,
    <item:prefab:item_swift_blade_gold>,
    <item:prefab:item_sickle_wood>,
    <item:prefab:item_sickle_stone>,
    <item:prefab:item_sickle_gold>,
    <item:prefab:item_sickle_iron>,
    <item:prefab:item_sickle_diamond>,
    <item:prefab:item_sickle_netherite>,
    <item:prefab:item_clutch_of_eggs>,
    <item:prefab:block_glass_slab>,
    <item:prefab:block_glass_stairs>,
    <item:prefab:block_paper_lantern>,
    <item:prefab:block_boundary>,
    <item:prefab:item_crate_of_beets>,
    <item:prefab:item_bunch_of_beets>,
    <item:prefab:item_bunch_of_carrots>,
    <item:prefab:item_bunch_of_potatoes>,
    <item:prefab:item_wooden_crate>,
    <item:prefab:block_quartz_crete_bricks>,
    <item:prefab:item_coil_of_lanterns>,
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
    <item:alexsmobs:blood_sac>,
    <item:alexsmobs:mosquito_proboscis>,
    <item:alexsmobs:blood_sprayer>,
    <item:quark:beetroot_crate>,
    <item:quark:potato_crate>,
    <item:quark:carrot_crate>,
    <item:supplementaries:rope>,
    <item:hexerei:milk_bottle>,
    <item:delightful:animal_fat>,
    <item:delightful:animal_oil_bottle>,
    <item:alexsmobs:komodo_spit>,
    <item:alexsmobs:komodo_spit_bottle>,
    <item:alexsmobs:cockroach_wing>,
    <item:alexsmobs:cockroach_ootheca>,
    <item:alexsmobs:centipede_leg>,
    <item:alexsmobs:centipede_leggings>,
//    <item:alexsmobs:mosquito_larva>,
    <item:alexsmobs:cockroach_wing_fragment>,
    <item:alexsmobs:sombrero>,
    <item:alexsmobs:maraca>,
    <item:alexsmobs:warped_muscle>,
    <item:alexsmobs:hemolymph_sac>,
    <item:alexsmobs:hemolymph_blaster>,
    <item:alexsmobs:tarantula_hawk_wing_fragment>,
    <item:alexsmobs:tarantula_hawk_wing>,
    <item:alexsmobs:tarantula_hawk_elytra>,
    <item:pipez:fluid_pipe>,
    <item:pipez:energy_pipe>,
    <item:pipez:gas_pipe>,
    <item:pipez:universal_pipe>
] as IItemStack[];

for item in removeNope {
craftingTable.remove(item);
//JEI.hideIngredient(item);
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
[[<item:minecraft:air>, <item:minecraft:gold_ingot>, <item:minecraft:air>],
[<item:minecraft:gold_ingot>, <item:ars_nouveau:worn_notebook>, <item:minecraft:gold_ingot>],
[<item:minecraft:air>, <item:minecraft:gold_ingot>, <item:minecraft:air>]]);


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

craftingTable.addShapeless("pearl2", <item:crittersandcompanions:pearl_necklace_2>, [<item:crittersandcompanions:pearl_necklace_2>, <item:minecraft:ender_pearl>]);

craftingTable.addShapeless("pearl3", <item:crittersandcompanions:pearl_necklace_3>, [<item:crittersandcompanions:pearl_necklace_2>, <item:minecraft:heart_of_the_sea>]);

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
    <item:delightful:deluxe_cheeseburger>,
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

craftingTable.addShaped("chestwtf", <item:minecraft:chest>, [[<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>], [<tag:items:minecraft:planks>, <item:minecraft:air>, <tag:items:minecraft:planks>], [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>]]);

// ladder recipe?!

craftingTable.addShaped("ladderwtf", <item:minecraft:ladder> * 4, [
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:stick>], 
    [<item:minecraft:stick>, <tag:items:minecraft:planks>, <item:minecraft:stick>], 
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:stick>]]);

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

// Make frogs tameable
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
[<item:create:crushed_gold_ore>, 
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

// Mob Catcher
<item:mobcatcher:net>.addTooltip("Catch mobs! Multiple uses.");


// Upgrade your Ars Nouveau armors

//Novice to Mage
/*
craftingTable.addShaped("novicetoappboots", <item:ars_nouveau:apprentice_boots>, [
    [<item:minecraft:air>, <item:ars_nouveau:blaze_fiber>, <item:minecraft:air>],
    [<item:ars_nouveau:blaze_fiber>, <item:ars_nouveau:novice_boots>, <item:ars_nouveau:blaze_fiber>],
    [<item:minecraft:air>, <item:ars_nouveau:blaze_fiber>, <item:minecraft:air>]
]);

craftingTable.addShaped("novicetoapplegs", <item:ars_nouveau:apprentice_leggings>, [
    [<item:minecraft:air>, <item:ars_nouveau:blaze_fiber>, <item:minecraft:air>],
    [<item:ars_nouveau:blaze_fiber>, <item:ars_nouveau:novice_leggings>, <item:ars_nouveau:blaze_fiber>],
    [<item:minecraft:air>, <item:ars_nouveau:blaze_fiber>, <item:minecraft:air>]
]);

craftingTable.addShaped("novicetoappchest", <item:ars_nouveau:apprentice_robes>, [
    [<item:minecraft:air>, <item:ars_nouveau:blaze_fiber>, <item:minecraft:air>],
    [<item:ars_nouveau:blaze_fiber>, <item:ars_nouveau:novice_robes>, <item:ars_nouveau:blaze_fiber>],
    [<item:minecraft:air>, <item:ars_nouveau:blaze_fiber>, <item:minecraft:air>]
]);

craftingTable.addShaped("novicetoapphead", <item:ars_nouveau:apprentice_hood>, [
    [<item:minecraft:air>, <item:ars_nouveau:blaze_fiber>, <item:minecraft:air>],
    [<item:ars_nouveau:blaze_fiber>, <item:ars_nouveau:novice_hood>, <item:ars_nouveau:blaze_fiber>],
    [<item:minecraft:air>, <item:ars_nouveau:blaze_fiber>, <item:minecraft:air>]
]);

// Mage to Archmage

craftingTable.addShaped("apptoarchboots", <item:ars_nouveau:archmage_boots>, [
    [<item:minecraft:air>, <item:ars_nouveau:end_fiber>, <item:minecraft:air>],
    [<item:ars_nouveau:end_fiber>, <item:ars_nouveau:apprentice_boots>, <item:ars_nouveau:end_fiber>],
    [<item:minecraft:air>, <item:ars_nouveau:end_fiber>, <item:minecraft:air>]
]);

craftingTable.addShaped("apptoarchlegs", <item:ars_nouveau:archmage_leggings>, [
    [<item:minecraft:air>, <item:ars_nouveau:end_fiber>, <item:minecraft:air>],
    [<item:ars_nouveau:end_fiber>, <item:ars_nouveau:apprentice_leggings>, <item:ars_nouveau:end_fiber>],
    [<item:minecraft:air>, <item:ars_nouveau:end_fiber>, <item:minecraft:air>]
]);

craftingTable.addShaped("apptoarchchest", <item:ars_nouveau:archmage_robes>, [
    [<item:minecraft:air>, <item:ars_nouveau:end_fiber>, <item:minecraft:air>],
    [<item:ars_nouveau:end_fiber>, <item:ars_nouveau:apprentice_robes>, <item:ars_nouveau:end_fiber>],
    [<item:minecraft:air>, <item:ars_nouveau:end_fiber>, <item:minecraft:air>]
]);

craftingTable.addShaped("apptoarchhead", <item:ars_nouveau:archmage_hood>, [
    [<item:minecraft:air>, <item:ars_nouveau:end_fiber>, <item:minecraft:air>],
    [<item:ars_nouveau:end_fiber>, <item:ars_nouveau:apprentice_hood>, <item:ars_nouveau:end_fiber>],
    [<item:minecraft:air>, <item:ars_nouveau:end_fiber>, <item:minecraft:air>]
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
    <block:byg:cryptic_campfire>
] as Block[];

for item in hotBlocks {
    <tag:blocks:farmersdelight:heat_sources>.add(item);
    <tag:blocks:alexsmobs:froststalker_fears>.add(item);
}

<tag:items:forge:seeds>.add(<item:farmersrespite:tea_seeds>);

craftingTable.remove(<item:pipez:item_pipe>);

craftingTable.addShaped("itempipe", <item:pipez:item_pipe> * 16, [
    [<item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>],
    [<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>],
    [<item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>]]);

<tag:items:forge:wrenches>.add(<item:supplementaries:wrench>);

<tag:items:crafttweaker:postboxes>.add(<item:contact:red_postbox>, <item:contact:green_postbox>);

// Change Heart Stone Recipe

craftingTable.remove(<item:heartstone:heartstone>);

craftingTable.addShaped("heartstone", <item:heartstone:heartstone> * 2, 
[[<item:minecraft:air>,
<item:create:polished_rose_quartz>,
<item:minecraft:air>],
[<item:create:polished_rose_quartz>,
<item:minecraft:heart_of_the_sea>,
<item:create:polished_rose_quartz>],
[<item:minecraft:air>,
<item:create:polished_rose_quartz>,
<item:minecraft:air>]]);

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

// Removing Hibernal Herbs crafting recipes so I can add them to the Mortar and Pestle instead

var blends = 
[
    <item:hibernalherbs:blend_speed>,
    <item:hibernalherbs:blend_regeneration>,
    <item:hibernalherbs:blend_poison>,
    <item:hibernalherbs:blend_slowness>,
    <item:hibernalherbs:blend_mining_fatigue>,
    <item:hibernalherbs:blend_haste>,
    <item:hibernalherbs:blend_fire>,
    <item:hibernalherbs:blend_wither>,
    <item:hibernalherbs:blend_night_vision>,
    <item:hibernalherbs:blend_weakness>,
    <item:hibernalherbs:blend_blindness>,
    <item:hibernalherbs:blend_regen_speed_weak>,
    <item:hibernalherbs:blend_glowing>,
    <item:hibernalherbs:blend_regen_slow>
] as IItemStack[];

for blend in blends{
craftingTable.remove(blend);
}

// balance tarot deck curio
craftingTable.remove(<item:tarotcards:tarot_deck>);

craftingTable.addShaped("tarotdeck", <item:tarotcards:tarot_deck>,
[
    [<item:create:golden_sheet>, <item:contact:ender_wrapping_paper>, <item:create:golden_sheet>],
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

// Compacting recipes for pounding herbs

<recipetype:create:compacting>.addRecipe("compactedtarragon", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_tarragon> * 2) % 100], [<item:hibernalherbs:tarragon> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedchamomile", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_chamomile> * 2) % 100], [<item:hibernalherbs:chamomile> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedchives", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_chives> * 2) % 100], [<item:hibernalherbs:chives> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedbloforia", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_bloforia> * 2) % 100], [<item:hibernalherbs:bloforia> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedessitte", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_essitte> * 2) % 100], [<item:hibernalherbs:essitte> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedpunuel", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_punuel> * 2) % 100], [<item:hibernalherbs:punuel> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedceillis", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_ceillis> * 2) % 100], [<item:hibernalherbs:ceillis> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedthyocielle", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_thyocielle> * 2) % 100], [<item:hibernalherbs:thyocielle> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedfennkystral", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_fennkystral> * 2) % 100], [<item:hibernalherbs:fennkystral> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedverbena", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_verbena> * 2) % 100], [<item:hibernalherbs:verbena> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedsorrel", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_sorrel> * 2) % 100], [<item:hibernalherbs:sorrel> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedmarjoram", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_marjoram> * 2) % 100], [<item:hibernalherbs:marjoram> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedrosemary", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_rosemary> * 2) % 100], [<item:hibernalherbs:rosemary> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedthyme", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_thyme> * 2) % 100], [<item:hibernalherbs:thyme> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedfennsel", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_fennsel> * 2) % 100], [<item:hibernalherbs:fennsel> * 1], [], 200);

<recipetype:create:compacting>.addRecipe("compactedchervil", <constant:create:heat_condition:none>, [ (<item:hibernalherbs:pounded_chervil> * 2) % 100], [<item:hibernalherbs:chervil> * 1], [], 200);