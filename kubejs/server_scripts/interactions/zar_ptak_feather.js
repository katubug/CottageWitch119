/**
 * When a Zar-Ptak is fed a golden apple, it will give a
 * feather matching it's coat with a 10% chance.
 * Enchanted golden apple raises this to 100%
 * It then enters a 90s cooldown.
 */
ItemEvents.entityInteracted((event) => {
	const { item, target } = event;

	// Checking valid
	if (target.type != "mythicmounts:firebird") return;
	if (
		!(
			item.id == "minecraft:golden_apple" || item.id == "minecraft:enchanted_golden_apple"
		)
	)
		return;

	// Creating constants
	const timeStamp = new Date(); // current time
	const lastFeatherAt = target.persistentData?.lastFeather || 0; // timestamp of last feather, or 0
	const timeSince = timeStamp.valueOf() / 1000 - lastFeatherAt; // time since last feather
	const cooldown = 90; // cooldown in s

	const dropProbability = {
		// probability based on item
		"minecraft:golden_apple": 0.1,
		"minecraft:enchanted_golden_apple": 1,
	};

	const featherColour = {
		// map variants to feathers
		"firebird_mount.png": "mythicmounts:firebird_feather", //tan-green
		"firebird_mount2.png": "mythicmounts:firebird_feather2", //tan-red
		"firebird_mount3.png": "mythicmounts:firebird_feather3", //orange-red
		"firebird_mount4.png": "mythicmounts:firebird_feather4", //white-blue
	};

	// check against cooldown
	if (timeSince < cooldown) {
		AnnounceToPlayer(
			event,
			`The Zar-Ptak can shed another feather after ${global.formatcodes.red}${Math.round(
				cooldown - timeSince
			)} ${global.formatcodes.reset}seconds.`,
			"gold"
		);
		return;
	}

	//small feather poof
	global.particleBurst(
		event,
		target.pos,
		target.bbHeight * 0.8,
		target.bbWidth * 0.8,
		"supplementaries:feather",
		2,
		0.2
	);

	// check probability
	if (Math.random() < dropProbability[item.id]) {
		// pop matching feather
		target.block.popItem(Item.of(featherColour[target.nbt.Variant]));

		// poof feathers
		global.particleBurst(
			event,
			target.pos,
			target.bbHeight * 0.8,
			target.bbWidth * 0.8,
			"supplementaries:feather",
			20,
			0.1
		);
		item.count--;
		// set timestamp of last feather
		target.persistentData.lastFeather = timeStamp.valueOf() / 1000;
		event.cancel();
	}
});
