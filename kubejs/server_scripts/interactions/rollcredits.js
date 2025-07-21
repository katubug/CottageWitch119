ServerEvents.commandRegistry((event) => {
	const { commands: Commands } = event;

	event.register(
		Commands.literal("run_intro_requence") // The name of the command
			.requires((s) => s.hasPermission(2)) // Check if the player has operator privileges
			.executes((c) => RunTitleSequence(c.source, "Your story continues..."))
	);
});

/**
 * Plays the cottage witch opening sequence
 * @param {Internal.commands} event The event
 * @param {string} starterText The text to display at the start of the sequence
 */
function RunTitleSequence(event, starterText) {
	// start with title and begin music
	event.server.runCommandSilent(`/title ${event.player.username} times 10 60 10`);
	event.server.runCommandSilent(
		`/title ${event.player.username} subtitle {"text":"${starterText}", "italic":true, "color":"#ce9b2e"}`
	);
	event.server.runCommandSilent(`/title ${event.player.username} title ""}`);
	event.server.runCommandSilent(
		`/execute at ${event.player.username} run playsound twilightforest:music_disc.twilightforest.motion master ${event.player.username} ~ ~1 ~ 1000 1 1`
	);

	//wait until right part to unveil title (24 seconds)
	event.server.scheduleInTicks(480, (_) => {
		event.server.runCommandSilent(
			`/title ${event.player.username} subtitle {"text":"--==< ☪ >==--", "bold":true, "color":"#758a68"}`
		);

		event.server.runCommandSilent(
			`/title ${event.player.username} title {"text":"Cottage Witch", "bold":true, "italic":true, "color":"#758a68"}`
		);

		// wait 6 more seconds to show credit
		event.server.scheduleInTicks(120, (_) => {
			event.server.runCommandSilent(
				`/title ${event.player.username} subtitle {"text":"by Katubug", "italic":true, "color":"#ffffff"}`
			);
			event.server.runCommandSilent(
				`/title ${event.player.username} title {"text":"Created with love", "italic":true, "color":"#ffffff"}`
			);
			event.server.scheduleInTicks(240, (_) => {
				event.server.runCommandSilent(`/title ${event.player.username} times 10 120 100`);
				event.server.runCommandSilent(
					`/title ${event.player.username} subtitle {"text":"Welcome home.", "italic":true, "color":"#88a079"}`
				);
				event.server.runCommandSilent(`/title ${event.player.username} title ""}`);
			});
		});
	});
}
