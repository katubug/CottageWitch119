JEIEvents.information((e) => {
	const color = global.formatcodes;

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
			`Obtained by killing ${color.dark_red + mob + color.reset} with a knife.`
		);
	}

	e.addItem("sophisticatedbackpacks:backpack", [
		"These are not craftable in this modpack.",
		"",
		color.dark_purple + "Find them in End City loot!",
	]);

	e.addItem("alexsmobs:warped_muscle", [
		color.dark_red + "Obtained from the Nether Dimension Gate.",
	]);

	e.addItem("alexsmobs:hemolymph_sac", [
		color.dark_red + "Obtained from the Nether Dimension Gate.",
	]);

	e.addItem("minecraft:firework_star", [
		"Firework Stars are crafted using gunpowder and dye, and some special items.",
		"There are",
		color.dark_red + "29,617,272,422,916,505,236",
		color.black + "firework combinations.",
		"Sadly they didn't all fit in JEI.",
		"",
		Text.of("https://minecraft.wiki/w/Firework_Star").blue().underlined(),
	]);

	e.addItem("ars_nouveau:drygmy_charm", [
		"Drygmies can be used to generate drop loot from jarred mobs. Visit ars.guide for more info:",
		"",
		Text.of("https://ars.guide/docs/drygmy/guide/").blue().underlined(),
	]);

	event.addItem("ae2:charged_certus_quartz_crystal", [
		"Consecrate a regular Certus Quartz Crystal by right clicking it onto a lit candle.\n",
		"Hexerei candles won't extinguish when you right click on them, but basic ones will.",
	]);
});
