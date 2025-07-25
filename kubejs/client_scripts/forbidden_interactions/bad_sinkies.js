BlockEvents.rightClicked((event) => {
	const { block, item, player } = event;
	if (item.id != "minecraft:bowl") return;
	if (item.id != "minecraft:glass_bottle") return;
	if (!block.hasTag("cw:refurb_water_storage")) return;
	item.count--;
	player.giveInHand(Item.of("caupona:water", '{type:"minecraft:water"}'));
	event.cancel();
});
