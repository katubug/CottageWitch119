//priority: 100

/**
 * Makes a message appear above the hotbar.
 *
 * Message is yellow (#FFFF55) unless color specified.
 * @param {Internal.PlayerEventJS} event The...event?
 * @param {string} message The message to give the player.
 * @param {String} [color=yellow] The colour of the message, as either colour string or hex code. (default = "yellow")
 */
function AnnounceToPlayer(event, message, color) {
	color = color || "yellow";
	let cmd = `title ${event.player.username} actionbar {"text":"${message}", "italic":true, "color":"${color}"}`;
	console.log(cmd);
	event.server.runCommandSilent(cmd);
}

/**
 * Makes a message appear above the hotbar.
 *
 * Message is red and prefixed with *WARNING:*
 * @param {Internal.PlayerEventJS} event The...event?
 * @param {string} message The message to give the player.
 */
function WarnPlayer(event, message) {
	let cmd = `title ${event.player.username} actionbar {"text":"WARNING: ${message}", "italic":true, "color":"red"}`;
	console.log(cmd);
	event.server.runCommandSilent(cmd);
	//event.player.sendData("displayItemActivation", { item: "minecraft:barrier" });
}

/**
 * Returns true if `clickedWith` is targeting a block adjacent to `target`
 * @param {Internal.BlockRightClickedEventJS} event The event
 * @param {Special.Item} clickedWith the item id that was used to click
 * @param {Special.Block} target the block id to check for in adjacent blocks
 * @param {string} direction
 * @returns {boolean}
 */
function IsAdjacentClicked(event, clickedWith, target, direction) {
	if (event.item != clickedWith) return false;
	let checkBlock = [];
	if (direction == "*") {
		["north", "east", "south", "west", "up", "down"].forEach((dir) =>
			checkBlock.push(event.block[event.facing][dir].id)
		);
	} else checkBlock = [event.block[event.facing][direction].id];
	return checkBlock.includes(target);
}

/**
 * Returns true if `clickedWith` is targeting a block adjacent to `target`
 * @param {Internal.BlockPlacedEventJS} event The event
 * @param {Special.Item} clickedWith the item id that was used to click
 * @param {Special.Block} target the block id to check for in adjacent blocks
 * @param {string} direction
 * @returns {boolean}
 */
function IsAdjacentPlaced(event, placed, target, direction) {
	if (event.block != placed) return false;
	let checkBlock = [];
	if (direction == "*") {
		["north", "east", "south", "west", "up", "down"].forEach((dir) =>
			checkBlock.push(event.block[dir].id)
		);
	} else checkBlock = [event.block[direction].id];
	return checkBlock.includes(target);
}
