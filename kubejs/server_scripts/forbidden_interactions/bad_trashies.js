BlockEvents.leftClicked((e) => {
	if (!e.block.hasTag("forge:trash_can_ban")) return;
	WarnPlayer(e, "Trash cans can be picked up using a Wrench.");
});
