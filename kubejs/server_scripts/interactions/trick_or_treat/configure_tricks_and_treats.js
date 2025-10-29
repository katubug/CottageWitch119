/**
 * This file is to configure the tricks and treats used in the event
 * Each list item is a lambda using the ItemEntityInteractedEventJS event,
 * and rolls a random function from the list to run for the player
 */

// The colour of trick/treat messages
const TRICK_TEXT_COLOUR = "light_purple";
const TREAT_TEXT_COLOUR = "gold";

/**
 * @type {function(Internal.ItemEntityInteractedEventJS)[]} A list of event callbacks to run
 */
const treats = [
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's some candy!",
			"delightful:rock_candy"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's some chocolate!",
			"create:bar_of_chocolate"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a gummy!",
			"collectorsreap:lime_gummy"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's some candy!",
			"supplementaries:candy"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a cookie!",
			"farmersdelight:honey_cookie"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a cookie!",
			"farmersdelight:sweet_berry_cookie"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a cookie!",
			"abnormals_delight:cherry_cookie"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a gummy!",
			"delightful:salmonberry_gummy"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a gummy!",
			"collectorsreap:melon_gummy"
		);
	},
	(event) => {
		tellAndGiveEffect(
			event,
			"treat",
			"...treat! You're glowing with Good Vibes.",
			"twilightdelight:aurora_glowing",
			"30"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's some caramel popcorn!",
			"extradelight:caramel_popcorn"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's some popcorn!",
			"culturaldelights:popcorn"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a marshmallow on a stick.",
			"delightful:marshmallow_stick"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a honey-glazed walnut.",
			"delightful:honey_glazed_walnut"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat", //
			"...treat! Here's some jerky.",
			"extradelight:jerky"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's some sliced apple.",
			"extradelight:sliced_apple"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a caramel candy!",
			"extradelight:caramel_candy"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a candy apple.",
			"extradelight:candy_apple"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a candied ginger.",
			"extradelight:candied_ginger"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a candied lime.",
			"collectorsreap:candied_lime"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's a slice of pumpkin roll.",
			"extradelight:pumpkin_roll "
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat",
			"...treat! Here's some chocolate berries.",
			"create:chocolate_glazed_berries"
		);
	},
	(event) => {
		tellAndGiveItem(
			event,
			"treat", //
			"...treat! Here's a stuffed rice cake.",
			"ends_delight:stuffed_rice_cake"
		);
	},
	(event) => {
		tellAndGiveEffect(
			event,
			"treat",
			"...treat! Gosh, suddenly you feel stuffed.",
			"minecraft:saturation",
			"20"
		);
	},
];

/**
 * @type {function(Internal.ItemEntityInteractedEventJS)[]} A list of event callbacks to run
 */
const tricks = [
	//
	/**
	 *
	 * @param {Internal.CommandSourceStack} event
	 */
	(event) => {
		let { x, y, z } = event.player;

		tellAndPlaySound(
			event,
			"trick",
			"...trick! Watch out for that Creeper!!",
			"minecraft:entity.creeper.primed",
			0,
			0,
			0
		);
		event.server.runCommandSilent(
			`summon sheep ${x} ${y} ${z} {Color:13,CustomName:'[{"text":"Dinnerbone"}]',Silent:1b}`
		);
	},
	//
	(event) => {
		let beeNumRange = [3, 6]; // spawn 3-6 bees
		let beeCount = Math.floor(Math.random() * beeNumRange[1]) + beeNumRange[0];
		let { x, y, z } = event.player;

		AnnounceToPlayer(event, "...trick! Enjoy ANGRY BEES!", TRICK_TEXT_COLOUR);
		for (let i = 0; i < beeCount; i++) {
			event.server.runCommandSilent(
				`summon minecraft:bee ${x} ${y} ${z} {AngerTime:999}`
			);
		}
		event.server.runCommandSilent(
			`execute as @e[type=minecraft:bee,limit=4,sort=nearest] at @s run data modify entity @s AngryAt set from entity @p UUID`
		);
	},
	//
	(event) => {
		tellAndGiveEffect(
			event,
			"trick",
			"...trick! Enjoy your flight!",
			"minecraft:levitation",
			10
		);
	},
	//
	(event) => {
		let { x, y, z } = event.player;
		tellAndPlaySound(
			event,
			"trick",
			"...trick! Enjoy fighting the Warden!",
			"minecraft:entity.warden.emerge",
			5,
			0,
			0
		);
		event.server.scheduleInTicks(3.5 * 20, (_) => {
			AnnounceToPlayer(event, "Hah! Just kidding. We wouldn't do that to you.");
		});
	},
	//
	(event) => {
		tellAndGiveItem(
			event,
			"trick", //
			"...trick! Enjoy your new dirt!",
			"minecraft:dirt"
		);
	},
	//
	(event) => {
		tellAndGiveItem(
			event,
			"trick",

			"...trick. Enjoy your new rock!",
			Item.of("minecraft:stone_button", {
				display: {
					Lore: ['["",{"text":"Aww, I got a rock...","color":"yellow"}]'],
				},
			}).withName("Rock")
		);
	},
	//
	(event) => {
		let { x, y, z } = event.player;

		tellAndPlaySound(
			event,
			"trick",
			"...trick! Look up!",
			"another_furniture:block.service_bell.use",
			0,
			8,
			0
		);
		event.server.runCommandSilent(
			`summon falling_block ${x} ${
				y + 8
			} ${z} {BlockState:{Name:"minecraft:damaged_anvil",Properties:{facing:"north"}},NoGravity:1b,Glowing:1b,Time:1,DropItem:0b,HurtEntities:0b,Motion:[0.0,-0.3,0.0]}`
		);
	},
	//
	(event) => {
		let { x, y, z } = event.player;

		tellAndPlaySound(
			event,
			"trick",
			"...trick! AAAAAAAGH get them away from me!",
			"minecraft:block.beehive.work",
			0,
			0,
			3
		);
		event.server.runCommandSilent(
			`summon twilightforest:mosquito_swarm ${x} ${y} ${
				z + 3
			} {CustomName:'[{"text":"MOSQUITOS"}]'}`
		);
	},
	//
	(event) => {
		tellAndGiveEffect(
			event,
			"trick",
			"...trick! What did they put in that candy?",
			"brewinandchewin:tipsy",
			"600",
			Math.floor(Math.random() * 5) + 1
		);
	},
	//
	(event) => {
		tellAndGiveEffect(
			event,
			"trick",
			"...trick! You experience a wave of fear and are rooted to the spot.",
			"alexsmobs:fear",
			"10"
		);
	},
	//
	(event) => {
		tellAndGiveEffect(
			event,
			"trick",
			"...trick! You remembered your adult responsibilities.",
			"twilightdelight:temporal_sadness",
			"20"
		);
	},
	//
	(event) => {
		tellAndGiveEffect(
			event,
			"trick",
			"...trick! It's an earthquake!",
			"alexsmobs:earthquake",
			"10"
		);
	},
	//
	(event) => {
		tellAndGiveEffect(
			event,
			"trick",
			"...trick! It's- oh. Uh oh did you do that?",
			"alexsmobs:power_down",
			"30"
		);
	},
	//
	(event) => {
		const { x, y, z } = event.player;
		tellAndGiveEffect(
			event,
			"trick",
			"...trick! You stepped in... something.",
			"ecologics:slippery",
			"10"
		);
		event.level.spawnParticles(
			"swampier_swamps:swamp_gas",
			true,
			x + 0.5,
			y + 0.5,
			z + 0.5,
			0.5,
			0.5,
			0.5,
			5,
			0.1
		);
	},
	//
	(event) => {
		tellAndGiveEffect(
			event,
			"trick",
			"...trick! You feel extremely heavy.",
			"ars_nouveau:gravity",
			"20",
			3
		);
	},
	//
	(event) => {
		tellAndGiveItem(
			event,
			"trick",
			"...trick! I don't think you're supposed to eat the green potatoes.",
			"minecraft:poisonous_potato"
		);
	},
	//
	(event) => {
		tellAndGiveItem(
			event,
			"trick",
			"...trick! Ew, a rotten tomato. 1/10.",
			"farmersdelight:rotten_tomato"
		);
	},
	//
	(event) => {
		tellAndGiveItem(
			event,
			"trick",
			"...trick! I think they saved this from last year...",
			"extradelight:bad_food"
		);
	},
	//
	(event) => {
		tellAndGiveItem(
			event,
			"trick",
			"...trick! Is that a MAGGOT?", //
			"alexsmobs:maggot"
		);
	},
	//
	(event) => {
		tellAndGiveItem(
			event,
			"trick",
			"...trick! It's a rotten apple. At least the worm is cute!",
			"domesticationinnovation:rotten_apple"
		);
	},
	//
	(event) => {
		tellAndGiveItem(
			event,
			"trick",
			"...trick! Not only is it health food, it's laughing at you.",
			"domesticationinnovation:sinister_carrot"
		);
	},
	//
	(event) => {
		tellAndGiveItem(
			event,
			"trick",
			"...trick! It's an avocado. Thaaanks.",
			"culturaldelights:avocado"
		);
	},
];

/**
 * sends the player an action bar message and gives them an item
 * @param {Internal.ItemEntityInteractedEventJS} event
 * @param {string} trickOrTreat
 * @param {string} message
 * @param {Internal.ItemStack} item
 */
function tellAndGiveItem(event, trickOrTreat, message, item) {
	let colour = getTextColour(trickOrTreat);
	AnnounceToPlayer(event, message, colour);
	event.player.give(item);
}

/**
 * sends the player an action bar message and gives them an effect
 * @param {Internal.ItemEntityInteractedEventJS} event
 * @param {string} trickOrTreat
 * @param {string} message
 * @param {string} effect
 * @param {number} time
 * @param {number} [strength=1]
 */
function tellAndGiveEffect(event, trickOrTreat, message, effect, time, strength) {
	strength = strength ?? 1;
	let colour = getTextColour(trickOrTreat);
	AnnounceToPlayer(event, message, colour);
	event.server.runCommandSilent(
		`effect give ${event.player.username} ${effect} ${time} ${strength}`
	);
}

/**
 * sends the player an action bar message and plays a sound
 * @param {Internal.ItemEntityInteractedEventJS} event
 * @param {string} trickOrTreat
 * @param {string} message
 * @param {string} sound
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} zOffset
 */
function tellAndPlaySound(
	event,
	trickOrTreat,
	message,
	sound,
	xOffset,
	yOffset,
	zOffset
) {
	const { x, y, z } = event.player;
	const colour = getTextColour(trickOrTreat);
	AnnounceToPlayer(event, message, colour);
	event.server.runCommandSilent(
		`playsound ${sound} master ${event.player.username} ${x + xOffset} ${y + yOffset} ${
			z + zOffset
		} 10`
	);
}

/**
 * gets text colour dependent on trick or treat
 * @param {string} trickOrTreat
 * @returns {string}
 */
function getTextColour(trickOrTreat) {
	const isTrick = trickOrTreat == "trick",
		isTreat = trickOrTreat == "treat";

	return isTrick ? TRICK_TEXT_COLOUR : isTreat ? TREAT_TEXT_COLOUR : null;
}
