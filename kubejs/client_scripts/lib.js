//priority: 100
function AnnounceToPlayer(event, message, color) {
    // empty as server handles commands
}

function WarnPlayer(event, message) {
    // empty as server handles commands
}

function isAdjacentClicked(e, clickedwith, target, direction) { // when using blockevents.rightclicked (better)
	if (e.item!=clickedwith) return false
    let checkBlock = [];
	if (direction == "*") {
		["north", "east", "south", "west", "up", "down"].forEach((dir) =>
			checkBlock.push(e.block[e.facing][dir].id)
		);
	} else checkBlock = [e.block[direction].id];
	console.log(checkBlock)
	return checkBlock.includes(target);
}
