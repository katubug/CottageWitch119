BlockEvents.rightClicked("minecraft:shulker_box", (e) => {
	if (!e.item.hasTag("forge:shulker_upgrade_banned")) return;
	WarnPlayer(e, "Upgraded shulkers can cause inventory loss.");
	e.cancel();
});
