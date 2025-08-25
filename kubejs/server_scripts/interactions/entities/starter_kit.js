/**
 * Gives player a starter kit upon first joining.
 * Also gives them the intro sequence
 */
PlayerEvents.loggedIn((event) => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has("starting_items")) {
		// Add the stage
		event.player.stages.add("starting_items");
		// Give some items to player
		event.player.give("ftbquests:book");
		event.player.give(Item.of("farmersdelight:flint_knife", "{Damage:0}"));
		event.player.give("5x delightful:nut_butter_and_jelly_sandwich");
		event.player.give(
			Item.of(
				"ars_nouveau:caster_tome",
				'{Enchantments:[{}], "ars_nouveau:caster":{current_slot:0,flavor:"",hidden_recipe:"",is_hidden:0b,spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_projectile",part1:"ars_nouveau:glyph_accelerate",part2:"ars_nouveau:glyph_break",size:3},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}}}}}'
			)
		);
	}
	if (!event.player.stages.has("intro_music")) {
		event.player.stages.add("intro_music");
		event.server.scheduleInTicks(500, (_) => {
			RunTitleSequence(event, "A new story begins...");
		});
	}
});
