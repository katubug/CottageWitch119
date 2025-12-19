/**
 * Hexerei two-tall plants can cause crashes when being bone mealed by automated
 * things such as rich soil/overgrowth rituals. This prevents them being placed
 * where they can be affected by it
 */
//MARK: RightClicked
BlockEvents.rightClicked((event) => {
	//main hand only
	const {
		block,
		block: { pos },
		item,
		player,
	} = event;

	let stop = true;

	//check for banned plants being placed
	if (item.hasTag("cw:growth_banned")) {
		/**@param {Internal.BlockState} b */
		testBlock = (b) => {
			b.block.id == "ars_nouveau:ritual_brazier";
		};
		stop = false;
	} else if (item.id == "ars_nouveau:ritual_brazier") {
		/**@param {Internal.BlockState} b */
		testBlock = (b) => {
			Item.of(b.block.id).hasTag("cw:growth_banned");
		};
		stop = false;
	}
	if (stop) return;

	//create area (5 block distance)
	const area = AABB.ofBlock(block.up).inflate(5);

	//check area for braziers
	const blocksInArea = player.level.getBlockStates(area);

	//iterate through blockstates

	if (blocksInArea.anyMatch(testBlock)) {
		console.log(
			`Hexerei plant/brazier placed nearby by ${player.username}. Preventing placement.`
		);
		_WarnPlayer(
			event,
			"Hexerei plants can cause crashes when near an overgrowth ritual."
		);
		spawnPoof(event, pos, 1.5, 2);

		event.cancel();
	}
});

BlockEvents.rightClicked((event) => {
	const {
		block,
		block: { pos },
		item,
		player,
	} = event;

	if (!item.hasTag("cw:growth_banned")) return;
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
	_WarnPlayer(event, "Hexerei plants can cause crashes when placed on rich soil.");
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

	let stop = true;
	//check for banned plants being placed
	if (block.item.hasTag("cw:growth_banned")) {
		/**@param {Internal.BlockState} b */
		testBlock = (b) => {
			b.block.id == "ars_nouveau:ritual_brazier";
		};
		stop = false;
	} else if (block.item.id == "ars_nouveau:ritual_brazier") {
		/**@param {Internal.BlockState} b */
		testBlock = (b) => {
			Item.of(b.block.id).hasTag("cw:growth_banned");
		};
		stop = false;
	}
	if (stop) return;

	//create area (5 block distance)
	const area = AABB.ofBlock(block).inflate(5);

	//check area for braziers
	const blocksInArea = player.level.getBlockStates(area);

	//iterate through blockstates
	if (blocksInArea.anyMatch(testBlock)) {
		console.log(
			`Hexerei plant/brazier placed nearby by ${player.username}. Preventing placement.`
		);
		_WarnPlayer(
			event,
			"Hexerei plants can cause crashes when near an overgrowth ritual."
		);
		spawnPoof(event, pos, 1.5, 2);

		event.cancel();
	}
});

BlockEvents.placed((event) => {
	const {
		block,
		block: { pos },
		player,
	} = event;

	if (!block.hasTag("cw:growth_banned")) return;
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
	_WarnPlayer(event, "Hexerei plants can cause crashes when placed on rich soil.");
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
