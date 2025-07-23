//MARK: Bad shulkies
ServerEvents.tags("item", (event) => {
	event.add(
		"cw:shulker_upgrade_banned",
		//
		"sophisticatedstorage:basic_tier_upgrade",
		"sophisticatedstorage:basic_to_copper_tier_upgrade",
		"sophisticatedstorage:basic_to_iron_tier_upgrade",
		"sophisticatedstorage:basic_to_gold_tier_upgrade",
		"sophisticatedstorage:basic_to_diamond_tier_upgrade",
		"sophisticatedstorage:basic_to_netherite_tier_upgrade"
	);
});

//MARK: Bad overgrowth
ServerEvents.tags("item", (event) => {
	event.add(
		"cw:growth_banned",
		//
		"hexerei:yellow_dock_bush",
		"hexerei:mugwort_bush"
	);
});

//MARK: Bad lassos
ServerEvents.tags("entity_type", (event) => {
	event.add(
		"cw:lasso_banned",
		//
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

//MARK: Bad trashies
ServerEvents.tags("block", (event) => {
	const invBreakCrashers = ["@trashcans", "@itemcollectors", "@applecrates"];

	event.add("cw:special_break", invBreakCrashers);
});

//MARK: Bad cages
ServerEvents.tags("entity_type", (event) => {
	event.add(
		"cw:cage_banned",
		//
		"enigmaticgraves:grave",
		"lootr:lootr_minecart",
		"minecraft:item_frame",
		"minecraft:glow_item_frame",
		"quark:glass_item_frame",
		"quark:dyed_item_frame",
		"xercapaint:canvas",
		"artifacts:mimic"
	);
});

//MARK: Bad sinkies
ServerEvents.tags("block", (event) => {
	event.add(
		"cw:refurb_water_storage",
		//
		/refurb.*_kitchen_sink/,
		/refurb.*_basin/,
		/refurb.*_bath/,
		/refurb.*_toilet/
	);
});
