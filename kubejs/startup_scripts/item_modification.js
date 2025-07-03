//MARK: Stack Size
ItemEvents.modification((event) => {
	//MARK: Stack Size
	const setStackSizeTo64 = [
		"usefulslime:slippery_slime_block",
		"byg:ametrine_horse_armor",
		"byg:pendorite_horse_armor",
		"minecraft:leather_horse_armor",
		"minecraft:iron_horse_armor",
		"minecraft:golden_horse_armor",
		"minecraft:diamond_horse_armor",
		"minecraft:egg",
		"minecraft:turtle_egg",
		"alexsmobs:crocodile_egg",
		"alexsmobs:terrapin_egg",
		"duckling:duck_egg",
		"environmental:duck_egg",
	];

	const setStackSizeTo16 = ["alexsmobs:emu_egg"];

	event.modify(setStackSizeTo64, (item) => {
		item.maxStackSize = 64;
	});
	event.modify(setStackSizeTo16, (item) => {
		item.maxStackSize = 16;
	});

	//MARK: Fire Resistance
	event.modify("ae2:singularity", (item) => {
		item.fireResistant = true;
	});
});
