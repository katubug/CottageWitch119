BlockEvents.rightClicked("block.right_click", (event) => {
	//main hand only
	const { block, hand, item, world, player } = event;

	//check for banned plants being placed
	if (!item.hasTag("forge:overgrowth_banned")) return;
	console.log("Hexerei plant placed.");

	//create area (5 block distance)
	const area = AABB.ofBlock(block).inflate(5);

	//check area for braziers
	const blocks = player.level.getBlockStates(area);
	const iterator = 0;
	//iterate through blockstates
	blocks.forEach((e) => {
		iterator++;
		if (e.block.id != "ars_nouveau:ritual_brazier") return;
		console.log(`Brazier found after ${iterator} blocks! Preventing placement`);
		//let player know
		WarnPlayer(
			event,
			"Hexerei plants can crash when near an overgrowth ritual."
		);
		//cancel placing
		event.cancel();
	});
});
