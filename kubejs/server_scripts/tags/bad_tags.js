ServerEvents.tags("item", (event) => {
	event.add(
		"forge:shulker_upgrade_banned",
		// bad shulkies
		"sophisticatedstorage:basic_tier_upgrade",
		"sophisticatedstorage:basic_to_copper_tier_upgrade",
		"sophisticatedstorage:basic_to_iron_tier_upgrade",
		"sophisticatedstorage:basic_to_gold_tier_upgrade",
		"sophisticatedstorage:basic_to_diamond_tier_upgrade",
		"sophisticatedstorage:basic_to_netherite_tier_upgrade"
	);
});

ServerEvents.tags("item", (event) => {
	event.add(
		"forge:overgrowth_banned",
		// bad overgrowth
		"hexerei:yellow_dock_bush",
		"hexerei:mugwort_bush"
	);
});

ServerEvents.tags("entity_type", (event) => {
	event.add(
		"forge:lasso_banned",
		// bad lassos
		"alexsmobs:void_worm",
		"minecraft:ender_dragon",
		"minecraft:wither",
		"ars_nouveau:wilden_boss",
		"#forge:bosses",
		"twilightforest:naga",
		"twilightforest:lich",
		"twilightforest:minoshroom",
		"twilightforest:hydra",
		"twilightforest:knight_phantom",
		"twilightforest:ur_ghast",
		"twilightforest:alpha_yeti",
		"twilightforest:snow_queen",
		"twilightforest:plateau_boss",
		"minecraft:warden",
		"artifacts:mimic"
	);
});

ServerEvents.tags("block", (event) => {
	event.add("forge:trash_can_ban", "@trashcans");
	event.add("create:wrench_pickup", "@trashcans");
});
