/**
 * When given a manipulation essence, an armor stand will turn invisible.
 * If not holding anything while invis, it will start glowing.
 * When handed something, given armor or a name, it will stop glowing.
 * Giving a manipulation essence while glowing will make it visible again.
 */
PlayerEvents.tick((event) => {
	if (event.player.age % 60 != 0) return;

	let player = event.player;
	let world = player.getLevel();
	// Draw box around player
	let boundingBox = player.getBoundingBox().inflate(20.0, 10.0, 20.0);
	// Find armor stands in box
	world.getEntities(player, boundingBox).forEach((entity) => {
		if (!(entity.type == "minecraft:armor_stand")) return;

		// checks
		let holding_manipulation_essence =
			entity.handSlots[0].id == "ars_nouveau:manipulation_essence";
		let is_invisible = entity.isInvisible();

		// if visible and not holding essence return
		if (!is_invisible && !holding_manipulation_essence) return;

		if (holding_manipulation_essence) {
			//tell player
			AnnounceToPlayer(event, `Armor stand visible: ${is_invisible}`);

			// toggle invisible
			entity.setInvisible(!is_invisible);
			entity.setGlowing(!is_invisible);

			//remove essence
			entity.setItemSlot("mainhand", "minecraft:air");
		} else if (is_invisible) {
			let has_inv = false;
			//check for holding anything
			entity.allSlots.forEach((item) => {
				if (item.isEmpty()) return;
				has_inv = true;
			});

			//if not holding or named, make glow
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
