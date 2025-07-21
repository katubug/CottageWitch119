//MARK: RightClicked
BlockEvents.rightClicked("block.right_click", (event) => {
	//main hand only
	const {
		block,
		block: { pos },
		item,
		player,
	} = event;

	//check for banned plants being placed
	if (!item.hasTag("forge:overgrowth_banned")) return;

	//create area (5 block distance)
	const area = AABB.ofBlock(block.up).inflate(5);

	//check area for braziers
	const blocksInArea = player.level.getBlockStates(area);
	let iterator = 0;
	//iterate through blockstates
	blocksInArea.forEach((b) => {
		iterator++;
		if (b.block.id != "ars_nouveau:ritual_brazier") return;
		console.log(
			`Hexerei plant placed by ${player.username}. Brazier found after ${iterator} blocks! Preventing placement.`
		);
		//let player know
		WarnPlayer(
			event,
			"Hexerei plants can cause crashes when placed near an overgrowth ritual."
		);
		spawnPoof(event, pos, 1.5, 2);

		//cancel placing
		event.cancel();
	});
});

BlockEvents.rightClicked("block.right_click", (event) => {
	const {
		block,
		block: { pos },
		item,
		player,
	} = event;

	if (!item.hasTag("forge:overgrowth_banned")) return;
	if (
		!(
			IsAdjacentClicked(event, item, "farmersdelight:rich_soil_farmland", "down") ||
			IsAdjacentClicked(event, item, "farmersdelight:rich_soil", "down") ||
			IsAdjacentClicked(event, item, "nethersdelight:rich_soul_soil", "down")
		)
	)
		return;
	console.log(
		`Hexerei plant placed by ${player.username} on ${
			block[event.facing].down.id
		}! Preventing placement.`
	);
	WarnPlayer(event, "Hexerei plants can cause crashes when placed on rich soil.");
	spawnPoof(event, pos, 1.5, 2);

	event.cancel();
});

//MARK:placed
// in case they get around it

BlockEvents.placed((event) => {
	//main hand only
	const {
		block,
		block: { pos },
		player,
	} = event;

	//check for banned plants being placed
	if (!block.item.hasTag("forge:overgrowth_banned")) return;

	//create area (5 block distance)
	const area = AABB.ofBlock(block).inflate(5);

	//check area for braziers
	const blocksInArea = player.level.getBlockStates(area);
	let iterator = 0;
	//iterate through blockstates
	blocksInArea.forEach((b) => {
		iterator++;
		if (b.block.id != "ars_nouveau:ritual_brazier") return;
		console.log(
			`Hexerei plant placed by ${player.username}. Brazier found after ${iterator} blocks! Preventing placement.`
		);
		//let player know
		WarnPlayer(
			event,
			"Hexerei plants can cause crashes when placed near an overgrowth ritual."
		);
		spawnPoof(event, pos, 0.5, 2);

		//cancel placing
		event.cancel();
	});
});

BlockEvents.placed((event) => {
	const {
		block,
		block: { pos },
		player,
	} = event;

	if (!block.hasTag("forge:overgrowth_banned")) return;
	if (
		!(
			IsAdjacentPlaced(event, block, "farmersdelight:rich_soil_farmland", "down") ||
			IsAdjacentPlaced(event, block, "farmersdelight:rich_soil", "down") ||
			IsAdjacentPlaced(event, block, "nethersdelight:rich_soul_soil", "down")
		)
	)
		return;
	console.log(
		`Hexerei plant placed by ${player.username} on ${block.down.id}! Preventing placement.`
	);
	WarnPlayer(event, "Hexerei plants can cause crashes when placed on rich soil.");
	spawnPoof(event, pos, 0.5, 2);
	event.cancel();
});

//Function
/**
 *
 * @param {Internal.BlockPlacedEventJS|Internal.BlockRightClickedEventJS} event
 * @param {Internal.BlockPos$MutableBlockPos} pos
 * @param {number} y_offset
 * @param {number} y_stretch
 */
function spawnPoof(event, pos, y_offset, y_stretch) {
	event.level.spawnParticles(
		"chimes:leaf",
		true,
		pos.x + 0.5,
		pos.y + 0.5 + y_offset,
		pos.z + 0.5,
		0.2,
		y_stretch / 4,
		0.2,
		20,
		0.02
	);
}
