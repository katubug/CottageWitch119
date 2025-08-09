/**
 * Shulker  boxes can cause inventory loss when upgraded, so the
 * application is prevented and the player warned
 */
BlockEvents.rightClicked("minecraft:shulker_box", (e) => {
	if (!e.item.hasTag("cw:shulker_upgrade_banned")) return;
	_WarnPlayer(e, "Upgraded shulkers can cause inventory loss.");
	spawnRunes(e, e.block.pos);
	e.cancel();
});

/**
 * Generic event for spawning runes around a forbidden interaction
 * @param {Internal.BlockPlacedEventJS|Internal.BlockRightClickedEventJS|Internal.ItemEntityInteractedEventJS} event
 * @param {Internal.BlockPos$MutableBlockPos} pos
 */
function spawnRunes(event, pos) {
	console.log(event, pos);
	var { x, y, z } = pos;
	x += 0.5;
	y += 0.7;
	z += 0.5;
	event.level.spawnParticles(
		"twilightforest:leaf_rune",
		true,
		x,
		y,
		z,
		0.5,
		0.5,
		0.5,
		20,
		0
	);
}
