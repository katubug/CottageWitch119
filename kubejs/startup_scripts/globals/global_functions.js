/**
 * MARK: -Global functions
 * ----------------------------------------------------------------------------
 * Useful functions that can be used in  any script
 */

/**
 * MARK: Particle burst FX
 *
 * Spawns particles at position inside a defined box
 * @param {Internal.EntityEvent} event
 * @param {Vec3} pos pos at bottom of particle box
 * @param {number} height height of the box to spawn particles in
 * @param {number} width width of the box to spawn particles in
 * @param {Special.ParticleType} particleId the particles to spawn
 * @param {number} count number of particles
 * @param {number} speed speed of particles
 */
global.particleBurst = (event, pos, height, width, particleId, count, speed) => {
	event.entity.level.spawnParticles(
		particleId,
		true,
		pos.x(),
		pos.y() + height / 2,
		pos.z(),
		width / 3,
		height / 3,
		width / 3,
		count,
		speed
	);
};

/**
 * MARK: -ForgeEvent functions
 * ----------------------------------------------------------------------------
 * putting these in global allows you to reload without
 * restarting your game, as forge events need to be in
 * startup scripts
 */

/**
 * MARK: Reaper Repair
 *
 * Allows reapers to be repaired with 'meat' foods.
 * Is repaired more by higher nutrition foods.
 * @param {Internal.AnvilUpdateEvent} event
 */
global.fe.reaperMeatRepair = (event) => {
	const { left, right } = event;

	if (!right.item.edible) return;
	if (left.id.includes("reaping_tool") && right.item.foodProperties.meat) {
		let output = left.copy();
		let currentDamage = output.getDamageValue();
		let maxDamage = output.getMaxDamage();
		let repairAmount = Math.floor(maxDamage * (1 / 32));
		let repairMult = Math.ceil(right.item.foodProperties.nutrition / 2);
		let newDamage = Math.max(currentDamage - repairAmount * repairMult * right.count, 0);
		output.setDamageValue(newDamage);
		event.setOutput(output);
	}
};

/**
 * MARK: Teleport FX
 *
 * Creates particle effects and sound upon entity teleport
 * @param {Internal.EntityTeleportEvent} event
 */
global.fe.teleportFX = (event) => {
	const { entity, prev, target } = event;
	const height = entity.bbHeight;
	const width = entity.bbWidth;
	if (entity.type == "minecraft:enderman") {
		global.particleBurst(
			event,
			prev,
			height,
			width,
			"minecraft:falling_obsidian_tear",
			50 * Math.max(height, width),
			0
		);
		global.particleBurst(
			event,
			prev,
			height,
			width * 2,
			"twilightforest:leaf_rune",
			5 * Math.max(height, width),
			0
		);
		return;
	}
	if (entity.peacefulCreature) {
		// rune cascade at origin
		global.particleBurst(
			event,
			prev,
			height,
			width,
			"twilightforest:leaf_rune",
			50 * Math.max(height, width),
			0
		);

		// poof burst at target
		global.particleBurst(
			event,
			target,
			height,
			width / 2,
			"end_rod",
			20 * Math.max(height, width),
			0.05
		);

		//pop sound at both
		event.entity.server.runCommandSilent(
			`playsound artifacts:generic.pop ambient @a ${target.x()} ${target.y()} ${target.z()}`
		);
		event.entity.server.runCommandSilent(
			`playsound artifacts:generic.pop ambient @a ${prev.x()} ${prev.y()} ${prev.z()}`
		);
	} else {
		global.particleBurst(
			event,
			prev,
			height,
			width,
			"falling_dust",
			50 * Math.max(height, width),
			0
		);
		global.particleBurst(
			event,
			target,
			height,
			width,
			"campfire_cosy_smoke",
			20 * Math.max(height, width),
			0.01
		);
		event.entity.server.runCommandSilent(
			`playsound create:fwoomp ambient @a ${target.x()} ${target.y()} ${target.z()}`
		);
		event.entity.server.runCommandSilent(
			`playsound create:fwoomp ambient @a ${prev.x()} ${prev.y()} ${prev.z()}`
		);
	}
};
