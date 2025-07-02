BlockEvents.rightClicked("minecraft:shulker_box", (e) => {
	if (!e.item.hasTag("forge:shulker_upgrade_banned")) return;
	WarnPlayer(e, "Upgraded shulkers can cause inventory loss.");
	e.cancel();
});

ServerEvents.tags("item", (event) => {
	event.add(
		"forge:shulker_upgrade_banned",
		"sophisticatedstorage:basic_tier_upgrade",
		"sophisticatedstorage:basic_to_copper_tier_upgrade",
		"sophisticatedstorage:basic_to_iron_tier_upgrade",
		"sophisticatedstorage:basic_to_gold_tier_upgrade",
		"sophisticatedstorage:basic_to_diamond_tier_upgrade",
		"sophisticatedstorage:basic_to_netherite_tier_upgrade"
	);
});
