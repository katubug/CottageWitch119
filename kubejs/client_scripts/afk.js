/**
 * Receives the network packet sent by the server /afk command and sets the player to idle
 */
NetworkEvents.dataReceived("cwAFK", (e) => {
	console.log("Ping! Setting " + e.player + " as AFK");
	const $StatusManagerClient = $WatutMod.getPlayerStatusManagerClient();
	const $Status = $StatusManagerClient.getStatusLocal();

	$Status.setTicksSinceLastAction(12000);
	$StatusManagerClient.sendIdle($Status);
});

const $WatutMod = Java.loadClass("com.corosus.watut.WatutMod");
