ServerEvents.command("home", (event) => {
	delayPoof(event, "chimes:block.copper.chime", "twilightforest:fallen_leaf 50 70 0");
});

ServerEvents.command("back", (event) => {
	delayPoof(event, "chimes:block.amethyst.shimmer", "findme:particle");
});

ServerEvents.command("warp", (event) => {
	delayPoof(event, "cnb:item.heal_spell_book.player_heal", "twilightforest:annihilate");
});
/**
 * Poofs delayed at player
 * @param {Internal.CommandEventJS} e
 * @param {Special.SoundEvent} soundTarget
 * @param {Special.ParticleType} particleTarget
 */
function delayPoof(e, soundTarget, particleTarget) {
	const { player, level, server } = e.parseResults?.context?.source;
	let height = player.bbHeight;
	let width = player.bbWidth;

	// rune cascade at origin
	global.particleBurst(
		level,
		player.pos,
		height,
		width,
		"twilightforest:leaf_rune",
		50 * Math.max(height, width),
		0
	);
	server.runCommandSilent(
		`playsound artifacts:generic.pop ambient @a ${player.x} ${player.y} ${player.z}`
	);

	server.scheduleInTicks(2, (_) => {
		// poof burst at target
		global.particleBurst(
			level,
			player.pos,
			height,
			width,
			particleTarget,
			20 * Math.max(height, width),
			0.05
		);
		//pop sound at both
		server.runCommandSilent(
			`playsound ${soundTarget} ambient @a ${player.x} ${player.y} ${player.z}`
		);
	});
}
