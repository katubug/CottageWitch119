ItemEvents.entityInteracted("supplementaries:cage", (event) => {
	if (
		!event.target.entityType.tags.anyMatch(
			(tag) => tag.location() == "forge:cage_banned"
		)
	)
		return;
	WarnPlayer(event, "This entity cannot be contained.");
	event.cancel();
});

ServerEvents.tags("entity_type", (event) => {
	event.add(
		"forge:cage_banned",
		"enigmaticgraves:grave",
		"lootr:lootr_minecart",
		"minecraft:item_frame",
		"minecraft:glow_item_frame",
		"quark:glass_item_frame",
		"quark:dyed_item_frame",
		"xercapaint:canvas"
	);
});
