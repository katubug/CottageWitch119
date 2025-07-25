/**
 * Trash cans can crash when broken while accessing its inventory.
 * Changed to unbreakable and breaks when punched but only after
 * closing surrounding player's inventories
 */
BlockEvents.leftClicked((e) => {
	// check tag
	if (!e.block.hasTag("cw:special_break")) return;
	// if has tag get players within 5 blocks
	let canAABB = AABB.ofBlock(e.block).inflate(5);
	e.level.getEntitiesWithin(canAABB).forEach((entity) => {
		if (entity == null) return;
		if (!entity.player) return;
		// close inventories of players to prevent crash
		entity.closeMenu();
	});
	// then destroy the block
	e.level.destroyBlock(e.block.pos, true, e.player);
});
