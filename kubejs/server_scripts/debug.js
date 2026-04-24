//packmode: dev

ServerEvents.commandRegistry((event) => {
	let { commands: Commands, arguments: Arguments } = event;

	let resetBlocks = (c) => {
		let xPlace = 0;
		let zPlace = 0;
		let yPlace = 64;
		c.source.player.tell("Resetting");
		for (let i = 0; i < 10000; i++) {
			let spot = c.source.player.level.getBlock(xPlace * 2, yPlace, zPlace * 2);
			if (spot.down.id == "environmental:dirt_tiles") {
				spot.set("air");
				spot.down.set("air");
			} else {
				c.source.player.tell("Reset " + i + " blocks");
				break;
			}
			xPlace++;
			if (xPlace == 21) {
				xPlace = 0;
				zPlace++;
			}
		}
	};

	event.register(
		Commands.literal("block_debug")
			.requires((s) => s.hasPermission(2))
			.executes((c) => {
				// RESET
				resetBlocks(c);
				return 1;
			})
			.then(
				Commands.argument("tag", Arguments.STRING.create(event)).executes((c) => {
					let tagPlace = Arguments.STRING.getResult(c, "tag");

					// RESET
					resetBlocks(c);

					let blocks = Array.from(Block.getTaggedIds(tagPlace).toArray()).sort();

					if (!blocks[0]) return 1;

					c.source.player.tell("Placing all " + tagPlace);
					let xPlace = 0;
					let zPlace = 0;
					let yPlace = 64;

					blocks.forEach((block) => {
						let spot = c.source.player.level.getBlock(xPlace * 2, yPlace, zPlace * 2);

						spot.set(block);
						spot.down.set("environmental:dirt_tiles");

						xPlace++;
						if (xPlace == 21) {
							xPlace = 0;
							zPlace++;
						}
					});

					return 1;
				})
			)
	);
});
