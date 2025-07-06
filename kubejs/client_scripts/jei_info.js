JEIEvents.information((e) => {
	const text = global.formatcodes;

	e.addItem(Object.values(global.allowed_eggs), [
		"Killing this mob with a reaping tool has a chance to drop its spawn egg!",
	]);

	e.addItem("ends_delight:enderman_gristle", [
		"Obtained by killing an Enderman with a knife.",
		text.dark_purple + "Tastes... Endery.",
	]);

	e.addItem("sophisticatedbackpacks:backpack", [
		"These are not craftable in this modpack.",
		text.light_purple + "Find them in End City loot!",
	]);

	e.add("alexsmobs:warped_muscle", [
		text.red + "Obtained from the Nether Dimension Gate.",
	]);

	e.add("alexsmobs:hemolymph_sac", [
		text.red + "Obtained from the Nether Dimension Gate.",
	]);
});
