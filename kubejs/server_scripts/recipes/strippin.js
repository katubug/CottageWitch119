//MARK: Imbued logs

// make imbued logs give experience nugget when stripped
BlockEvents.rightClicked("byg:imbued_blue_enchanted_log", (event) => {
	if (event.item.hasTag("forge:axes")) {
		event.block.popItemFromFace("create:experience_nugget", event.facing);
	}
});
BlockEvents.rightClicked("byg:imbued_green_enchanted_log", (event) => {
	if (event.item.hasTag("forge:axes")) {
		event.block.popItemFromFace("create:experience_nugget", event.facing);
	}
});
ServerEvents.recipes((event) => {
	let unimbueLog = (output, input) => {
		event.recipes.create.cutting([output, Item.of("create:experience_nugget")], input);
	};
	unimbueLog("byg:green_enchanted_log", "byg:imbued_green_enchanted_log");
	unimbueLog("byg:blue_enchanted_log", "byg:imbued_blue_enchanted_log");
});

//MARK: Bark from stripping
BlockEvents.rightClicked(
	Array.from(Block.getTaggedIds("minecraft:logs").toArray()),
	(event) => {
		const { player, item, hand, block, facing, server } = event;
		if (block.hasTag("cw:bark_strip_disabled")) return;
		if (!item.hasTag("forge:axes")) return;
		if (hand == "off_hand") return; //in case the player holds an axe in both hands

		block.popItemFromFace(Item.of("farmersdelight:tree_bark"), facing);

		// cluttered logs aren't strippable... until now
		if (block.id.split(":")[0] == "luphieclutteredmod") {
			// cluttered stuff has some weird names
			const weirdNamedLogs = {
				// "pinklog"
				"luphieclutteredmod:luphie_flowering_pink_log":
					"luphieclutteredmod:stripped_luphie_flowering_pinklog",

				// yellow logs lose yellow when stripped
				"luphieclutteredmod:luphie_flowering_yellow_log":
					"luphieclutteredmod:stripped_luphie_flowering_log",
				"luphieclutteredmod:luphie_flowering_yellow_wood":
					"luphieclutteredmod:stripped_luphie_flowering_wood",
			};

			if (weirdNamedLogs[block.id]) {
				block.set(weirdNamedLogs[block.id], block.properties); //replace block with non stripped version
				server.runCommandSilent(
					// make noise
					`playsound minecraft:item.axe.strip block @a ${block.x} ${block.y} ${block.z} 1 1`
				);
				player.swing();
				if (!player.creative) item.damageValue++;
			} else {
				block.set(block.id.replace(":", ":stripped_"), block.properties); //replace block with non stripped version
				server.runCommandSilent(
					// make noise
					`playsound minecraft:item.axe.strip block @a ${block.x} ${block.y} ${block.z} 1 1`
				);
				player.swing();
				if (!player.creative) item.damageValue++;
			}
		}
	}
);

//MARK: Allow 'unstripping'

BlockEvents.rightClicked(
	Array.from(Block.getTaggedIds("forge:stripped_wood").toArray()),
	(event) => {
		const { player, item, hand, block, server } = event;

		if (block.hasTag("cw:bark_unstrip_disabled")) return;
		if (item.id != "farmersdelight:tree_bark") return;
		if (hand == "off_hand") return; // only main hand

		// cluttered stuff has some weird names
		const weirdNamedStrippedLogs = {
			// "pinklog"
			"luphieclutteredmod:stripped_luphie_flowering_pinklog":
				"luphieclutteredmod:luphie_flowering_pink_log",

			// yellow logs lose yellow when stripped
			"luphieclutteredmod:stripped_luphie_flowering_log":
				"luphieclutteredmod:luphie_flowering_yellow_log",
			"luphieclutteredmod:stripped_luphie_flowering_wood":
				"luphieclutteredmod:luphie_flowering_yellow_wood",

			//extendedmushrooms adds stripped to the end instead
			"extendedmushrooms:honey_fungus_stem_stripped":
				"extendedmushrooms:honey_fungus_stem",
			"extendedmushrooms:poisonous_mushroom_stem_stripped":
				"extendedmushrooms:poisonous_mushroom_stem",
			"extendedmushrooms:glowshroom_stem_stripped": "extendedmushrooms:glowshroom_stem",
			"extendedmushrooms:stripped_mushroom_stem": "minecraft:mushroom_stem",

			//imparius stem is apparently a stripped fungal one
			"byg:imparius_stem": "byg:fungal_imparius_stem",
		};

		if (weirdNamedStrippedLogs[block.id]) {
			block.set(weirdNamedStrippedLogs[block.id], block.properties); //replace block with non stripped version
			server.runCommandSilent(
				// make noise
				`playsound minecraft:block.hanging_roots.break block @a ${block.x} ${block.y} ${block.z} 1 1`
			);

			player.swing(); //swing hand
			if (!player.creative) item.count--; //take bark
		} else {
			block.set(block.id.replace("stripped_", ""), block.properties); //replace block with non stripped version
			server.runCommandSilent(
				// make noise
				`playsound minecraft:block.hanging_roots.break block @a ${block.x} ${block.y} ${block.z} 1 1`
			);

			player.swing(); //swing hand
			if (!player.creative) item.count--; //take bark
		}
	}
);
