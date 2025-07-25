/**
 * When the player respawns, play a
 * small poof of green particles around them
 */
PlayerEvents.respawned((e) => {
	global.particleBurst(
		e,
		e.player.pos,
		e.player.bbHeight,
		e.player.bbWidth,
		"cnb:heal",
		20,
		0
	);
});
