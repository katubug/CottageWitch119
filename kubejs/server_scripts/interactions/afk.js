/**
 * Sets player to AFK with watut snooziness
 */
ServerEvents.commandRegistry((event) => {
	let { commands: Commands, arguments: Arguments } = event;
	event.register(
		Commands.literal("afk")
			.requires((s) => s.hasPermission(0))
			.executes((c) => {
				AnnounceToPlayer(c.source, "Going AFK...", "green");
				makeAFK(c.source.server, c.source.player);

				return 1;
			})
			.then(
				Commands.argument("message", Arguments.STRING.create(event)).executes((c) => {
					AnnounceToPlayer(c.source, "Going AFK...", "green");
					makeAFK(
						c.source.server,
						c.source.player,
						Arguments.STRING.getResult(c, "message")
					);
					return 1;
				})
			)
	);
});

/**
 * Sets player to AFK
 * @param {Internal.MinecraftServer} server
 * @param {Internal.ServerPlayer} player
 */
function makeAFK(server, player, message) {
	server.scheduleInTicks(5, (_) => {
		player.sendData("cwAFK");
	});
	if (message) {
		server.tell(
			global.formatcodes.gold +
				player.username +
				global.formatcodes.gray +
				" is now AFK: " +
				message
		);
	} else {
		server.tell(
			global.formatcodes.gold +
				player.username +
				global.formatcodes.glitch +
				global.formatcodes.gray +
				" is now AFK."
		);
	}
}
