//priority: 100

//TODO: Move server and client into global and add clientside checks

/**
 * Client version of the function, does nothing!
 */
function _AnnounceToPlayer(event, message, color) {
	// empty as server handles commands
}

/**
 * Client version of the function, does nothing!
 */
function _WarnPlayer(event, message) {
	// empty as server handles commands
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

NetworkEvents.dataReceived("displayItemActivation", (event) => {
	let itemStack = Item.of(event.data.item);
	if (!itemStack.isEmpty()) {
		Client.gameRenderer.displayItemActivation(itemStack);
	}
});
