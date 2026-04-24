(() => {
	//This script allows players to go Trick or Treating around Halloween, by right-clicking entities with a Bundle in their main hand. They will randomly receive a trick or a treat from a specified list of events. As written, it requires external mods like Delightful, Farmer's Delight, etc. But those can easily be changed for your personal modpack.

	//Thanks to Lexxie and Hof for helping with the date portion of things!
	//Date info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

	const ObjectiveCriteria = Java.loadClass(
		"net.minecraft.world.scores.criteria.ObjectiveCriteria"
	);

	const SCOREBOARD_OBJECTIVE_NAME = "cottage_witch.trick_or_treat";

	const TRICK_CHANCE = 0.25; // 25% for a trick

	// START
	// UTC 29 October 2025 00:30
	const START_DATE = new Date("29 October 2025 00:30");

	// END
	// UTC 1 November 2025 05:00
	const END_DATE = new Date("1 November 2025 05:00");

	//////////////////////////////
	// MARK: Checking & Setting //
	//////////////////////////////

	/**
	 * checks that the month is october and the date is the 29th or later
	 *
	 * month is 0-indexed but date isn't, so month 9 is October and day 29 is the 29th
	 * @param {Date} date
	 * @returns {boolean}
	 */
	function isTrickOrTreatTime(date) {
		return date > START_DATE && date < END_DATE;
	}

	/**
	 * gets the objective for trick or treat, creating one for the player if needed
	 * @param {Internal.Player} player
	 * @returns {Internal.Score}
	 */
	function getPlayerTrickOrTreatScoreReference(player) {
		let level = player.getLevel();
		let scoreboard = level.getScoreboard();
		let objective = scoreboard.getObjective(SCOREBOARD_OBJECTIVE_NAME);
		if (!objective) {
			scoreboard.addObjective(
				SCOREBOARD_OBJECTIVE_NAME,
				ObjectiveCriteria.DUMMY,
				Component.of(SCOREBOARD_OBJECTIVE_NAME),
				ObjectiveCriteria.DUMMY.getDefaultRenderType()
			);
		}
		return scoreboard.getOrCreatePlayerScore(player.username, objective);
	}

	/**
	 * resets the player's trick or treat status by getting
	 * all player stages starting with `entity.` and removing them,
	 * and then setting the player's scoreboard score to 0
	 * @param {Internal.Player} player
	 */
	function resetPlayerTrickOrTreat(player) {
		while (true) {
			// get first stage matching `entity.`
			let stage = player.stages
				.getAll()
				.toArray()
				.find((s) => s.startsWith("entity."));
			// if there is something then remove it
			if (stage) {
				player.stages.remove(stage);
				// otherwise break out of the loop
			} else {
				break;
			}
		}
		let score = getPlayerTrickOrTreatScoreReference(player);
		score.setScore(0);
		console.log(`Reset trick-or-treats for ${player.username}`);
	}

	/**
	 * checks the time, returning true if it's trick or treat time and resetting the player's trick or treat data if needed
	 * @param {Internal.SimplePlayerEventJS} event
	 */
	function checkIfTimeAndResetScore(event) {
		const { player } = event;
		const now = new Date();
		if (isTrickOrTreatTime(now)) {
			if (player.persistentData.lastTrickOrTreatYear != now.getFullYear()) {
				resetPlayerTrickOrTreat(player);
				player.persistentData.lastTrickOrTreatYear = now.getFullYear();
				player.tell(
					Text.of(
						"It's Halloween! Use a bundle to trick-or-treat mobs, but don't be surprised if you get tricked! Each unique mob type can be interacted with once."
					).lightPurple()
				);
			}
			return true;
		}
		return false;
	}

	/**
	 * MARK: Reset on login
	 * When player logs in, check if it's time (resetting score if needed) and if so give a bundle
	 */
	PlayerEvents.loggedIn((event) => {
		const { player } = event;
		if (checkIfTimeAndResetScore(event)) {
			if (!player.stages.has("bundle")) {
				player.give(
					Item.of(
						"minecraft:bundle",
						'{display:{Lore:[\'["",{"text":"A cute little Halloween pail for Trick or Treating. However, any Bundle will do in a pinch.","italic":false,"color":"gold"}]\'],Name:\'["",{"text":"Trick or Treat Pail","italic":false}]\'}}'
					)
				);
				player.stages.add("bundle");
			}
		}
	});

	///////////////////////////////
	// MARK: Rolling Trick/Treat //
	///////////////////////////////

	/**
	 *
	 * @param {Internal.ItemEntityInteractedEventJS} event
	 */
	function rollForTrickOrTreat(event) {
		// roll on if trick is hit
		const isTrick = Math.random() < TRICK_CHANCE;
		// if trick, set pool to tricks, otherwise set to treats
		const rewardPool = isTrick ? tricks : treats;
		const poolSize = rewardPool.length;
		// gets index of reward to pick - if 10 tricks, number is full between 1 and 10
		const rewardIndex = Math.floor(Math.random() * poolSize);
		// runs the trick/treat based on which one was picked
		rewardPool[rewardIndex](event);
	}

	/**
	 *
	 * @param {Internal.ItemEntityInteractedEventJS} event
	 * @returns
	 */
	function addEntityToList(event) {
		const { player, target } = event;
		//Set a variable for the interacted entity, and check whether the player has a stage with that entity type name
		let clicked = target.entityType;
		if (clicked == "entity.minecraft.player") {
		}
		if (player.stages.has(clicked)) {
			AnnounceToPlayer(
				event,
				`You have already received a Trick or Treat from a ${target.displayName.string}.`
			);
			return false;
		}
		//If player has not clicked that entity yet, execute the Trick or Treat script.
		let score = getPlayerTrickOrTreatScoreReference(player);
		score.increment();
		//Add a stage matching the entity type so that players can't ToT more than once per entity.
		player.stages.add(clicked);
		return true;
	}

	ItemEvents.entityInteracted("minecraft:bundle", (event) => {
		//Check whether the date is October 29th to the 31st.
		if (checkIfTimeAndResetScore(event)) {
			// break if entity has already been clicked
			if (!addEntityToList(event)) return;
			AnnounceToPlayer(event, "Hmmm, you can have a...", "white");
			event.server.scheduleInTicks(1.5 * 20, (_) => {
				rollForTrickOrTreat(event);
			});
		}
	});

	ServerEvents.commandRegistry((event) => {
		const { commands: Commands, arguments: Arguments } = event;
		event.register(
			Commands.literal("debug_tot")
				.requires((s) => s.hasPermission(2))
				.then(
					Commands.argument("trick_or_treat", Arguments.STRING.create(event)).then(
						Commands.argument("index", Arguments.INTEGER.create(event)).executes((c) => {
							let event = c.source;
							let tot = Arguments.STRING.getResult(c, "trick_or_treat");
							let index = Arguments.INTEGER.getResult(c, "index");

							let pool = tot == "tricks" ? tricks : tot == "treats" ? treats : null;

							pool[index](event);
							return 1;
						})
					)
				)
		);
	});
})();
