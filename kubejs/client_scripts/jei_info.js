JEIEvents.information((e) => {
	e.addItem(Object.values(global.allowed_eggs), [
		"Killing this mob with a reaping tool has a chance to drop its spawn egg!",
	]);

	e.addItem("ends_delight:enderman_gristle", [
		"Obtained by killing an Enderman with a knife.",
		`\n\u00A75` + "Tastes... Endery.",
	]);
});
