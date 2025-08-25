ServerEvents.commandRegistry((event) => {
	let { commands: Commands, arguments: Arguments } = event;

	event.register(
		Commands.literal("applecrate_search")
			.requires((s) => s.hasPermission(2))
			.then(
				Commands.argument("range", Arguments.INTEGER.create(event)).executes((c) => {
					const range = Arguments.INTEGER.getResult(c, "range");
					const {
						red,
						aqua,
						gray,
						green,
						gold,
						dark_green,
						dark_aqua,
						reset,
						yellow,
						glitch,
					} = global.formatcodes;
					const { player } = c.source;

					if (range > 60) {
						player.tell(red + "Range must be less than 60");
						return 0;
					}

					const center = c.source.player.block;

					const box = AABB.ofBlock(center).inflate(range);

					const crates = getBlocksFromAaBb(c.source, box, ["applecrates:"]);
					player.tell(green + "ooooooooooOOO000 CrateSearch 000OOOoooooooooo\n");

					let cratesNbt = crates.map((crate) => {
						let nbt = crate.entityData;
						if (!nbt?.pricensale?.Items[1]) return { name: null };
						let price = nbt.pricensale?.Items[0];
						let priceItem;
						if (price?.tag) {
							priceItem = Item.of(price?.id, price?.Count, price?.tag);
						} else {
							priceItem = Item.of(price?.id, price?.Count);
						}
						let sale = nbt.pricensale?.Items[1];
						let saleItem;
						if (sale?.tag) {
							saleItem = Item.of(sale?.id, sale?.Count, sale?.tag);
						} else {
							saleItem = Item.of(sale?.id, sale?.Count);
						}
						let pos = crate.pos;
						let distance = Math.sqrt(pos.distToCenterSqr(player.pos));
						let stock = 0;
						nbt.cratestock?.Items.forEach((item) => {
							if (item?.id == sale?.id) stock += item?.Count;
						});
						console.log(price, sale, pos, distance, stock);

						let crateObject = {
							name: Text.translate("block." + crate.id.replace(":", ".")),
							price: priceItem,
							priceString: Component.of(`${priceItem.count}x `).append(
								priceItem.displayName
							),
							sale: saleItem,
							saleString: Component.of(`${saleItem.count}x `).append(
								saleItem.displayName
							),
							pos: pos,
							posString: Component.of(`${aqua}${pos.x}, ${pos.y}, ${pos.z} `)
								.clickRunCommand(
									`/particle findme:particle ${pos.x} ${pos.y} ${pos.z} 0.3 0.3 0.3 0 10`
								)
								.hover(aqua + "Click to show in the world"),
							distance: distance,
							distanceString: Component.of(` ${dark_aqua}(${distance.toFixed(2)}m)`),
							stockString: Component.of(
								`${stock} items (${gray}${(stock / saleItem.maxStackSize).toFixed(
									1
								)} stacks${reset})`
							),
						};
						console.log(crateObject);
						return crateObject;
					});

					let saleList = cratesNbt
						.map((f) => {
							return f.sale.displayName
								.getString()
								.replace("[", "")
								.replace("]", "")
								.trim();
						})
						.join(",\n");

					console.log(saleList);

					cratesNbt.sort((a, b) => {
						a.distance - b.distance;
					});

					console.log(
						`Player ${player.username} ran an apple crate search`,
						"preview: " + cratesNbt
					);

					cratesNbt.forEach((crate) => {
						if (crate.saleItem == "minecraft:air") return;
						player.tell(
							Component.of(green + "\n---< ")
								.append(crate.name.darkGreen())
								.append(crate.distanceString)
								.append(green + " >---")
						);
						player.tell(Component.of(gold + "Selling:  ").append(crate.saleString));
						player.tell(Component.of(dark_green + "\nFor:  ").append(crate.priceString));
						player.tell(
							Component.of(yellow + "Stock remaining: ").append(crate.stockString)
						);
						player.tell(
							Component.of(green + "---< ")
								.append(crate.posString)
								.append(green + " >---\n")
						);
					});
					if (crates.length > 0) {
						player.tell(green + "ooooooooooOOO000 < Success! > 000OOOoooooooooo\n");

						player.tell(`${gold}-- Found ${crates.length} apple crates! --\n`);
						player.tell(`${gold}-- Scroll up for details --\n`);
						player.tell(
							Component.of("-- [Full list (click to copy)] --\n")
								.hover(saleList)
								.clickCopy(saleList)
						);
						player.tell(
							green +
								"ooooooooooOOO000" +
								gold +
								glitch +
								" CrateSearch" +
								green +
								" 000OOOoooooooooo\n"
						);
					} else {
						player.tell(red + "------=====(||| < No Crates Found! > |||)=====------\n");
						player.tell(
							green +
								"ooooooooooOOO000" +
								red +
								glitch +
								" CrateSearch" +
								green +
								" 000OOOoooooooooo\n"
						);
					}

					return 1;
				})
			)
	);
});

/**
 *
 * @param {Internal.CommandSourceStack} event
 * @param {Internal.AABB} bb
 * @param {[str]} filter
 * @returns {Array<Internal.BlockContainerJS>}
 */
function getBlocksFromAaBb(event, bb, filter) {
	let minX = Math.floor(bb.minX);
	let minY = Math.floor(bb.minY);
	let minZ = Math.floor(bb.minZ);
	let maxX = Math.ceil(bb.maxX) - 1;
	let maxY = Math.ceil(bb.maxY) - 1;
	let maxZ = Math.ceil(bb.maxZ) - 1;
	let list = Array.of();
	for (let x = minX; x <= maxX; x++) {
		for (let y = minY; y <= maxY; y++) {
			for (let z = minZ; z <= maxZ; z++) {
				let blockPos = BlockPos(x, y, z);
				let block = event.level.getBlock(blockPos);
				if (
					!filter.some((str) => {
						return block.id.includes(str);
					})
				)
					continue;
				list.push(block);
			}
		}
	}
	return list;
}
