BlockEvents.rightClicked("block.right_click", (event) => {
	if (event.item != "pipez:item_pipe") return;
	if (!IsAdjacentClicked(event, "pipez:item_pipe", "create:item_vault", "*"))
		return;
	WarnPlayer(event, "Please do not connect Pipez to Vaults. It's very laggy.");
	event.cancel();
});
