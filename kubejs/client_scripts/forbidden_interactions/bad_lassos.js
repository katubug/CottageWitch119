ItemEvents.entityInteracted("#moblassos:lassos", (event) => {
	if (
		!event.target.entityType.tags.anyMatch(
			(tag) => tag.location() == "forge:lasso_banned"
		)
	)
		return;
	WarnPlayer(event, "This mob cannot be contained.");
	event.cancel();
});
