//priority: 100

function AnnounceToPlayer(event, message, color) {
	color = color || "yellow";
	let cmd = `title ${event.player.username} actionbar {"text":"${message}", "italic":true, "color":"${color}"}`;
	console.log(cmd);
	event.server.runCommandSilent(cmd);
}

function WarnPlayer(event, message) {
	let cmd = `title ${event.player.username} actionbar {"text":"WARNING: ${message}", "italic":true, "color":"red"}`;
	console.log(cmd);
	event.server.runCommandSilent(cmd);
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
