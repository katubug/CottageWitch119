/**
 * Shattered dimensional carver teleports
 * you to the end of the world - bad idea
 */
ItemEvents.rightClicked((event) => {
	if (event.item.id != "alexsmobs:shattered_dimensional_carver") return;

	if (event.level.time % 20 == 0) {
		WarnPlayer(
			event,
			"Don't use. To summon the Farseer, craft a Farseer Gate Pearl using this item."
		);
	}

	event.cancel();
});
