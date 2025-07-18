//priority: 100

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

function IsAdjacentClicked(e, clickedwith, target, direction) {
	if (e.item != clickedwith) return false;
	let checkBlock = [];
	if (direction == "*") {
		["north", "east", "south", "west", "up", "down"].forEach((dir) =>
			checkBlock.push(e.block[e.facing][dir].id)
		);
	} else checkBlock = [e.block[direction].id];
	console.log(checkBlock);
	return checkBlock.includes(target);
}
