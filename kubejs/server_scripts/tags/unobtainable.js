/**
 * Mark Items as unobtainable - this tag is used for every part onwards:
 * - Make uncraftable
 * - Remove from loot
 * - Hide from JEI
 * - Add tooltip
 */
ServerEvents.tags("item", (event) => {
	event.add(
		"cw:unobtainable",
		global.ae2_disabled_items, //
		global.disabled_items
	);
	event.add(
		"cw:hidden",
		global.hidden_items //
	);
});

ServerEvents.tags("block", (event) => {
	event.add(
		"cw:unobtainable",
		global.ae2_disabled_items, //
		global.disabled_items
	);
	event.add(
		"cw:hidden",
		global.hidden_items //
	);
});
