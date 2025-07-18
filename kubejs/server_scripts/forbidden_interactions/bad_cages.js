ItemEvents.entityInteracted("supplementaries:cage", (event) => {
	if (
		!event.target.entityType.tags.anyMatch(
			(tag) => tag.location() == "forge:cage_banned"
		)
	)
		return;
	WarnPlayer(
		event,
		`${event.target.displayName.getString()} cannot be contained.`
	);
	event.cancel();
});
