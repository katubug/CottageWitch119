/**
 * Pipez connected to vaults can cause lag,
 * so the placement is prevented and the player warned
 */
BlockEvents.rightClicked("block.right_click", (event) => {
	if (event.item != "pipez:item_pipe") return;
	if (!IsAdjacentClicked(event, "pipez:item_pipe", "create:item_vault", "*")) return;
	WarnPlayer(event, "Please do not connect Pipez to Vaults. It's very laggy.");
	spawnRunes(event, event.block[event.facing].pos);
	event.cancel();
});

// placed gets around the edge cases - dispenser/ars
BlockEvents.placed("pipez:item_pipe", (event) => {
	if (event.block != "pipez:item_pipe") return;
	if (!IsAdjacentPlaced(event, "pipez:item_pipe", "create:item_vault", "*")) return;
	WarnPlayer(event, "Please do not connect Pipez to Vaults. It's very laggy.");
	spawnRunes(event, event.block.pos);
	event.cancel();
});
