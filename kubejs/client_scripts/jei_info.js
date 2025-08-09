JEIEvents.information((e) => {
	const text = global.formatcodes;

	e.addItem(Object.values(global.allowed_eggs), [
		"Killing this mob with a reaping tool has a chance to drop its spawn egg!",
	]);

	const endDelight = {
		"an Enderman": "ends_delight:enderman_gristle",
		"the Ender Dragon": [
			"ends_delight:dragon_tooth",
			"ends_delight:dragon_leg",
			"ends_delight:raw_dragon_meat",
		],
		"a Shulker": "ends_delight:shulker_meat",
		"an Endermite": "ends_delight:raw_ender_mite_meat",
		"a Strider": "nethersdelight:strider_slice",
		"a Hoglin": "nethersdelight:hoglin_hide",
	};

	for (let mob in endDelight) {
		e.addItem(
			endDelight[mob],
			`Obtained by killing ${text.dark_red + mob + text.reset} with a knife.`
		);
	}

	e.addItem("sophisticatedbackpacks:backpack", [
		"These are not craftable in this modpack.",
		"",
		text.dark_purple + "Find them in End City loot!",
	]);

	e.addItem("alexsmobs:warped_muscle", [
		text.dark_red + "Obtained from the Nether Dimension Gate.",
	]);

	e.addItem("alexsmobs:hemolymph_sac", [
		text.dark_red + "Obtained from the Nether Dimension Gate.",
	]);
});
