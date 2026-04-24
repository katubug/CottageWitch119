//priority: 0
ServerEvents.recipes((event) => {
	// All Recipe Removal
	let toRemove = [{ output: "#cw:unobtainable" }, { input: "#cw:unobtainable" }];

	for (const remove of toRemove) {
		event.remove(remove);
	}
});
