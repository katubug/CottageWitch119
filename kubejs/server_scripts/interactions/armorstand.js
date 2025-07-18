PlayerEvents.tick((event) => {
	if (event.player.age % 60 != 0) return;

	let player = event.player;
	let world = player.getLevel();
	// Draw box around player
	let boundingBox = player.getBoundingBox().inflate(20.0, 10.0, 20.0);
	// Find armor stands in box
	world.getEntities(player, boundingBox).forEach((entity) => {
		if (!(entity.type == "minecraft:armor_stand")) return;
		let holding_manipulation_essence =
			entity.handSlots[0].id == "ars_nouveau:manipulation_essence";
		let is_invisible = entity.isInvisible();

		console.log();

		// if visible and not holding essence return
		if (!is_invisible && !holding_manipulation_essence) return;

		if (holding_manipulation_essence) {
			AnnounceToPlayer(event, `Armor stand visible: ${is_invisible}`);
			entity.setInvisible(!is_invisible);
			entity.setGlowing(!is_invisible);
			entity.setItemSlot("mainhand", "minecraft:air");
		} else if (is_invisible) {
			let has_inv = false;
			entity.allSlots.forEach((item) => {
				if (item.isEmpty()) return;
				has_inv = true;
			});
			let has_name = entity.customName?.contents;
			console.log(has_name);

			if (entity.customName || has_inv) {
				if (entity.glowing) entity.setGlowing(false);
				if (entity.customName && !entity.isCustomNameVisible())
					entity.setCustomNameVisible(true);
			} else {
				if (!entity.glowing) entity.setGlowing(true);
			}
		}
	});
});
