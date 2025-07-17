ItemEvents.rightClicked("twilightforest:moon_dial", (event) => {
	let moonPhase = event.level.moonPhase;
	if (moonPhase == 0) {
		let moonString = "Full";
		AnnounceToPlayer(
			event,
			`The moon phase is currently ${moonString}.`,
			"gold"
		);
	} else if (moonPhase == 1) {
		let moonString = "Waning Gibbous";
		AnnounceToPlayer(
			event,
			`The moon phase is currently ${moonString}. There are 7 days remaining until the Full Moon.`,
			"yellow"
		);
	} else if (moonPhase == 2) {
		let moonString = "Last Quarter";
		AnnounceToPlayer(
			event,
			`The moon phase is currently ${moonString}. There are 6 days remaining until the Full Moon.`,
			"white"
		);
	} else if (moonPhase == 3) {
		let moonString = "Waning Crescent";
		AnnounceToPlayer(
			event,
			`The moon phase is currently ${moonString}. There are 5 days remaining until the Full Moon.`,
			"gray"
		);
	} else if (moonPhase == 4) {
		let moonString = "New Moon";
		AnnounceToPlayer(
			event,
			`The moon phase is currently ${moonString}. There are 4 days remaining until the Full Moon.`,
			"dark_gray"
		);
	} else if (moonPhase == 5) {
		let moonString = "Waxing Crescent";
		AnnounceToPlayer(
			event,
			`The moon phase is currently ${moonString}. There are 3 days remaining until the Full Moon.`,
			"gray"
		);
	} else if (moonPhase == 6) {
		let moonString = "First Quarter";
		AnnounceToPlayer(
			event,
			`The moon phase is currently ${moonString}. There are 2 days remaining until the Full Moon.`,
			"white"
		);
	} else if (moonPhase == 7) {
		let moonString = "Waxing Gibbous";
		AnnounceToPlayer(
			event,
			`The moon phase is currently ${moonString}. There is 1 day remaining until the Full Moon.`,
			"yellow"
		);
	}
});
