BlockEvents.rightClicked("block.right_click", (event) => {
	//main hand only
	const { block, item, player } = event;

	//check for banned plants being placed
	if (!item.hasTag("forge:overgrowth_banned")) return;
	console.log("Hexerei plant placed.");

	//create area (5 block distance)
	const area = AABB.ofBlock(block.up).inflate(5);

	//check area for braziers
	const blocksInArea = player.level.getBlockStates(area);
	let iterator = 0;
	//iterate through blockstates
	blocksInArea.forEach((b) => {
		iterator++;
		if (b.block.id != "ars_nouveau:ritual_brazier") return;
		console.log(`Brazier found after ${iterator} blocks! Preventing placement`);
		console.log(`Braizer NBT: ${b.block.blockStates}`);
		//let player know
		_WarnPlayer(
			event,
			"Hexerei plants can cause crashes when placed near an overgrowth ritual."
		);
		//cancel placing
		event.cancel();
	});
});

BlockEvents.rightClicked("block.right_click", (event) => {
	const { block, item, player } = event;

	if (!item.hasTag("forge:overgrowth_banned")) return;
	if (
		!(
			IsAdjacentClicked(
				event,
				event.item,
				"farmersdelight:rich_soil_farmland",
				"down"
			) ||
			IsAdjacentClicked(event, event.item, "farmersdelight:rich_soil", "down")
		)
	)
		return;
	_WarnPlayer(
		event,
		"Hexerei plants can cause crashes when placed on rich soil."
	);
	event.cancel();
});
