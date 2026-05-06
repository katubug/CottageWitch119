ServerEvents.recipes((event) => {
    let toRemove = [{id: "copperandtuffbackport:copper_grate_from_copper_block_stonecutting"}];

    for (const remove of toRemove) {
		event.remove(remove);
	}
});

ServerEvents.recipes((event) => { 
    event.stonecutting("copperandtuffbackport:copper_grate", "minecraft:copper_block");
})