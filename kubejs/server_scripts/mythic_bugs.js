//packmode: dev

//WIP - attempting to fix the ladybug dying/colourations

EntityEvents.checkSpawn("mythicmounts:colelytra", (e) => {
	let rand = Math.ceil(Math.random() * 4);
	e.target.nbt.Variant = `colelytra_mount${rand}.png`;
});

ItemEvents.entityInteracted((e) => {
	e.player.tell("interact");
	e.player.tell(e.item.id);
	if (e.hand.name() != "MAIN_HAND") return;
	if (e.target.type != "mythicmounts:colelytra") return e.player.tell("not bug");
	if (e.item.id != "minecraft:dirt") return e.player.tell("not dirt");
	let rand = Math.ceil(Math.random() * 4);
	e.player.tell("yay");
	e.player.tell(e.target.nbt.Variant + ": " + rand);
	e.target.mergeNbt({ Variant: `colelytra_mount${rand}.png` });
	e.player.tell(e.target.nbt.Variant);
});

ItemEvents.entityInteracted((e) => {
	if (e.hand.name() != "MAIN_HAND") return;
	if (e.target.type != "mythicmounts:colelytra") return e.player.tell("not bug");
	if (!e.item.id.endsWith("_dye")) return e.player.tell("not dye");

	global.dye_colors.forEach((colour) => {
		let name = `minecraft:${colour}_dye`;
		if (e.item.id != name) return console.log(e.item.id, name);
		e.target.mergeNbt({ Variant: `colelytra_mount_${colour}.png` });
	});

	e.player.tell(e.target.nbt.Variant);
});
