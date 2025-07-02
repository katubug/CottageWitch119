ItemEvents.entityInteracted("#moblassos:lassos", (event) => {
	if (
		!event.target.entityType.tags.anyMatch(
			(tag) => tag.location() == "forge:lasso_banned"
		)
	)
		return;
	WarnPlayer(event, "This mob cannot be contained.");
	event.cancel();
});

ServerEvents.tags("entity_type", (event) => {
	event.add(
		"forge:lasso_banned",
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
