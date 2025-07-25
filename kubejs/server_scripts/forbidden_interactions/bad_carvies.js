/**
 * Shattered dimensional carver teleports
 * you to the end of the world - bad idea
 */
ItemEvents.rightClicked("alexsmobs:shattered_dimensional_carver", (e) => {
	if (e.level.time % 20) {
		// don't spam the console
		WarnPlayer(
			e,
			"Don't use. To summon the Farseer, craft a Farseer Gate Pearl using this item."
		);
	}
	e.cancel();
});
