//MARK: Reaper Repair
/**
 * Function for 'meat the reaper' repair
 * @param {Internal.AnvilUpdateEvent} event
 */
global.reaperMeatRepair = (event) => {
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

//MARK: Teleport FX
/**
 *
 * @param {Internal.EntityTeleportEvent} event
 */
global.teleportFX = (event) => {
	const { entity, prev, target } = event;
	const height = entity.bbHeight;
	const width = entity.bbWidth;
	if (entity.type == "minecraft:enderman") return;
	if (entity.living) {
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
	}
};

/**
 * Spawns particles at pos
 * @param {Internal.EntityEvent} event
 * @param {Vec3} pos
 * @param {number} height
 * @param {number} width
 * @param {Special.ParticleType} particleId
 * @param {number} count
 * @param {number} speed
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
