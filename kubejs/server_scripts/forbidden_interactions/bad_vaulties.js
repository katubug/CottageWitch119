BlockEvents.rightClicked("block.right_click", (event) => {
	if (!isAdjacentClicked(event, "pipez:item_pipe", "create:item_vault", "*")) return;
	WarnPlayer(event, "Please do not connecto Pipez to Vaults. It's very laggy.");
	event.cancel();
});
