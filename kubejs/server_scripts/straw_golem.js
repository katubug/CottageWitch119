/**
 * Summons a pumpkin warden (or in our case, a 'straw golem') when
 * placing a pumpkin next to a hay block
 */
BlockEvents.placed((event) => {
	const {
		block: { x, y, z },
		block,
		server,
		level,
		item,
	} = event;

	// Check for carved pumpy next to haybale
	if (item != "minecraft:carved_pumpkin") return;
	if (!IsAdjacentPlaced(event, "minecraft:carved_pumpkin", "minecraft:hay_block", "down"))
		return;

	// Break blocks
	level.destroyBlock(block.down.pos, false);
	level.destroyBlock(block.pos, false);

	// Create pumpkin warden
	let warden = block.createEntity("byg:pumpkin_warden");
	warden.setPos(x, y, z);
	warden.spawn();

	// Spawn particle and sound
	level.spawnParticles("heart", true, x, y + 0.5, z, 0.3, 0.6, 0.3, 10, 0);
	server.runCommandSilent(
		`playsound artifacts:generic.pop block @a ${x} ${y + 1} ${z} 1`
	);
});
