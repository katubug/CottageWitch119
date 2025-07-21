BlockEvents.rightClicked((event) => {
	const { block, item, hand, player, server } = event;
	// check for main hand
	if (hand.name() != "MAIN_HAND") return;
	// check for candle
	if (!block.hasTag("minecraft:candles")) return;
	// check candle is lit
	if (
		block.properties.get("lit") === false ||
		block.properties.get("lighting") === "none" ||
		block.properties.get("on") === false
	)
		return;
	// check holding certus
	if (item.id == "ae2:certus_quartz_crystal") {
		//get item count in hand
		let startCount = item.count;
		let totalCount = player.inventory.count("ae2:certus_quartz_crystal");
		console.log(totalCount);
		// take all items from hand
		if (!player.creative) item.count = 0;

		if (player.fake || player.shiftKeyDown) {
			summonSmallFlameParticlesBurst(block);
			summonLightningZapParticlesAbove(block);
			playGlorpNoise(block, server, 2);
			player.giveInHand(Item.of(`${startCount}x ae2:charged_certus_quartz_crystal`));
			event.cancel();
		} else {
			removeAllItemsByName(player, "ae2:certus_quartz_crystal");
			// summon particles and sound
			summonBigFlameParticlesBurst(block);
			summonEnchantParticlesAbove(block);
			playFlameNoise(block, server);
			// 2 second delay
			server.scheduleInTicks(40, (_) => {
				// pop number of items equal to input
				block.up.popItem(`${totalCount}x ae2:charged_certus_quartz_crystal`);
				// summon particles and sound
				summonLightningZapParticlesAbove(block);
				playGlorpNoise(block, server, 0.75);
			});
		}
	}
});

//MARK: Functions

/**
 * Summons enchanting table particles a few blocks above the block
 * @param {Internal.BlockContainerJS} block
 */
function summonEnchantParticlesAbove(block) {
	block.level.spawnParticles(
		// spawn ZAP
		"minecraft:enchant",
		true,
		block.x + 0.5,
		block.y + 3,
		block.z + 0.5,
		0,
		0,
		0,
		20,
		2
	);
}

/**
 * Summons a burst of big flames around the block
 * @param {Internal.BlockContainerJS} block
 */
function summonBigFlameParticlesBurst(block) {
	block.level.spawnParticles(
		// spawn ZAP
		"twilightforest:large_flame",
		true,
		block.x + 0.5,
		block.y + 1.5,
		block.z + 0.5,
		0.5,
		1,
		0.5,
		15,
		0
	);
}

/**
 * Summons a burst of small flames around the block
 * @param {Internal.BlockContainerJS} block
 */
function summonSmallFlameParticlesBurst(block) {
	block.level.spawnParticles(
		// spawn ZAP
		"minecraft:flame",
		true,
		block.x + 0.5,
		block.y + 1.5,
		block.z + 0.5,
		0.2,
		1,
		0.2,
		15,
		0
	);
}

/**
 * Summons a burst of lightning particles in the block above
 * @param {Internal.BlockContainerJS} block
 */
function summonLightningZapParticlesAbove(block) {
	block.level.spawnParticles(
		// spawn ZAP
		"ae2:lightning_fx",
		true,
		block.x + 0.5,
		block.y + 1.5,
		block.z + 0.5,
		0.1,
		0.1,
		0.1,
		20,
		1
	);
}

/**
 * Plays fire charge noise above the block
 * @param {Internal.BlockContainerJS} block
 * @param {Internal.MinecraftServer} server
 */
function playFlameNoise(block, server) {
	server.runCommandSilent(
		`/playsound minecraft:item.firecharge.use block @a ${block.x} ${block.y + 1} ${
			block.z
		} 0.5 0.3`
	);
}

/**
 * Plays glorpy noise above the block
 * @param {Internal.BlockContainerJS} block
 * @param {Internal.MinecraftServer} server
 * @param {number} pitch pitch of the sound. 1 is normal
 */
function playGlorpNoise(block, server, pitch) {
	server.runCommandSilent(
		`/playsound gateways:gate_end block @a ${block.x} ${block.y + 1} ${
			block.z
		} 0.5 ${pitch}`
	);
}

/**
 * Removes all of one item type from the player's inventory
 * @param {Internal.Player} player
 * @param {string} itemName Name of item to remove
 */
function removeAllItemsByName(player, itemName) {
	for (var i = 0; i < 36; i++) {
		var item = player.inventory.getStackInSlot(i);
		if (item == itemName) item.count = 0;
	}
}
