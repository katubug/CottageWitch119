ItemEvents.entityInteracted((e) => {
	if (e.hand.name() != "MAIN_HAND") return;
	if (e.target.type != "mythicmounts:colelytra") return;
	if (!e.item.id.endsWith("_dye")) return;

	global.dye_colors.forEach((colour) => {
		let name = `minecraft:${colour}_dye`;
		if (e.item.id != name) return;
		e.target.mergeNbt({ Variant: `colelytra_mount_${colour}.png` });
	});
});
