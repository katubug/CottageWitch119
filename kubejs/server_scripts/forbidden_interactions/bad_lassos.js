ItemEvents.entityInteracted((event) => {
	// check lasso used and entity tag
	if (!event.item.hasTag("moblassos:lassos")) return;
	if (
		!event.target.entityType.tags.anyMatch((tag) => tag.location() == "cw:lasso_banned")
	)
		return;
	WarnPlayer(event, `${event.target.displayName.getString()} cannot be contained.`);
	spawnRunes(event, event.target.blockPosition());
	event.cancel();
});
