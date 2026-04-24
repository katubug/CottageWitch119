JEIEvents.hideItems((event) => {
	event.hide("#cw:unobtainable");
	event.hide("#cw:hidden");

	// hide soph storage chests
	Ingredient.of(/sophisticatedstorage:.*(barrel|chest).*/).stacks.forEach((item) => {
		event.hide(item);
	});
});

JEIEvents.addItems((event) => {
	// except for the oak ones
	Ingredient.of(/sophisticatedstorage:.*(barrel|chest).*/).stacks.forEach((item) => {
		if (item.nbt?.accentColor | item.nbt?.mainColor) return;
		event.add(item.withNBT({ woodType: "oak" }).strongNBT());
	});
});
