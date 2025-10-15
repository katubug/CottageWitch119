// priority: 0

//MARK: Hello!
console.info(
	"Hello, World! (You will only see this line once in console, during startup)"
);

// Renamed kjs to Cottage Witch
Platform.mods.kubejs.name = "Cottage Witch";
Platform.mods.ae2.name = "Arcane Enigmatics 2";
Platform.mods.minecraft.name = "Minceraft";

/**
 *
 * MARK: -ITEMS
 *
 */

StartupEvents.registry("item", (event) => {
	/**
	 * Registers a basic item. Texture path is optional
	 * @param {string} id item ID
	 * @param {string} name Display Name
	 * @param {int} stackSize Max Stack Size
	 * @param {string} texture Path to Texture
	 * @returns {Internal.BasicItemJS$Builder} Item Builder
	 */
	function createBasicItem(id, name, stackSize, rarity, texture) {
		if (texture) {
			return event
				.create(id)
				.displayName(name)
				.maxStackSize(stackSize)
				.texture(texture)
				.rarity(rarity);
		} else {
			return event.create(id).displayName(name).maxStackSize(stackSize).rarity(rarity);
		}
	}

	/**
	 * MARK: Register Coins
	 */

	const coins = global.hex_coins;

	for (let Coin in coins) {
		let coin = Coin.toLowerCase();
		//New coins
		createBasicItem(
			`${coin}coin`,
			`${Coin} Coin`,
			64,
			coins[Coin],
			`kubejs:item/${coin}_coin`
		);
		//Old coins
		createBasicItem(`${coin}_coin`, `${Coin} Coin`, 64, "COMMON");
	}

	/**
	 * MARK: Register Moons
	 */

	const moons = Object.keys(global.hex_moons);

	moons.forEach((Moon) => {
		const moon = Moon.toLowerCase();
		createBasicItem(
			`${moon}_moon`,
			`${Moon} Moon`,
			16,
			"EPIC",
			`kubejs:item/${moon}_moon`
		);
	});

	/**
	 * MARK: Other Items
	 */

	createBasicItem("ticket", "Ticket", 64, "UNCOMMON");

	createBasicItem(
		"kubejs:mimic_dust",
		"Powdered Mimicarnation",
		64,
		"RARE",
		"kubejs:item/mimic_dust"
	)
		.food((f) => {
			f.alwaysEdible().effect("twilightdelight:aurora_glowing", 80, 0, 1).build();
		})
		.glow(true);
});

/**
 *
 * MARK: -BLOCKS
 *
 */

StartupEvents.registry("block", (event) => {
	/**
	 * MARK: Emmu Blocks
	 */

	/**
	 * @param {string} id the block id, if `mod:` not specified then it will be `kubejs:`
	 * @param {BlockType} type the type of the block
	 * @param {Special.BakedModel|Special.Texture} model the path for the model/texture of the block
	 * @param {SoundType__} soundType the sound the block makes
	 * @param {number} hardness the hardness - how long the block takes to break
	 * @param {string} displayName the display name of the block
	 * @param {Special.BlockTag} [tagBlock] optional - tags to add to the block
	 */
	function createBasicBlock(id, type, model, soundType, hardness, displayName, tagBlock) {
		let builder = event
			.create(id, type)
			.model(model)
			.soundType(soundType)
			.hardness(hardness)
			.displayName(displayName);

		return tagBlock ? builder.tagBlock(tagBlock) : builder;
	}

	createBasicBlock(
		"bat_wallpaper",
		"cardinal",
		"kubejs:block/bat_wallpaper",
		"WOOD",
		2,
		"Bat Wallpaper",
		"minecraft:mineable/axe"
	);

	createBasicBlock(
		"skull_wallpaper",
		"cardinal",
		"kubejs:block/skull_wallpaper",
		"WOOD",
		2,
		"Skull Wallpaper",
		"minecraft:mineable/axe"
	);

	createBasicBlock(
		"witch_cat_plushie",
		"cardinal",
		"kubejs:block/witch_cat_plushie",
		"WOOL",
		1.5,
		"Witch Cat Plushie"
	)
		.fullBlock(false)
		.defaultCutout();

	createBasicBlock(
		"mayor_gaylord",
		"cardinal",
		"kubejs:block/gaylord",
		"WOOL",
		1.5,
		"Mayor Gaylord"
	)
		.fullBlock(false)
		.defaultCutout();
});

/**
 * @typedef BlockType
 * @type {"basic"|"detector"|"slab"|"stairs"|"fence"|"fence_gate"|"wall"|"wooden_pressure_plate"|"stone_pressure_plate"|"wooden_button"|"stone_button"|"falling"|"crop"|"cardinal"|"carpet"}
 */

/**
 * @typedef SoundType__
 * @type {"HONEY_BLOCK"|"SAND"|"NETHER_BRICKS"|"TUFF"|"GRAVEL"|"SHROOMLIGHT"|"GILDED_BLACKSTONE"|"HARD_CROP"|"SCULK_CATALYST"|"DEEPSLATE_TILES"|"MOSS"|"PACKED_MUD"|"number"|"GRASS"|"SCULK"|"SOUL_SOIL"|"VINE"|"WEEPING_VINES"|"ANCIENT_DEBRIS"|"SCULK_SENSOR"|"BAMBOO"|"GLASS"|"DRIPSTONE_BLOCK"|"POINTED_DRIPSTONE"|"ROOTED_DIRT"|"FROGSPAWN"|"NETHER_ORE"|"COPPER"|"LANTERN"|"CALCITE"|"MUD_BRICKS"|"STEM"|"BONE_BLOCK"|"FROGLIGHT"|"SOUL_SAND"|"MUD"|"SNOW"|"SCULK_VEIN"|"BIG_DRIPLEAF"|"TWISTING_VINES"|"NETHERRACK"|"AMETHYST_CLUSTER"|"POLISHED_DEEPSLATE"|"SLIME_BLOCK"|"SCULK_SHRIEKER"|"NYLIUM"|"DEEPSLATE"|"CHAIN"|"SPORE_BLOSSOM"|"WOOD"|"BASALT"|"AZALEA"|"MANGROVE_ROOTS"|"NETHER_GOLD_ORE"|"SMALL_AMETHYST_BUD"|"CANDLE"|"FLOWERING_AZALEA"|"ANVIL"|"SCAFFOLDING"|"AMETHYST"|"CAVE_VINES"|"DEEPSLATE_BRICKS"|"LODESTONE"|"FUNGUS"|"CORAL_BLOCK"|"SMALL_DRIPLEAF"|"HANGING_ROOTS"|"BAMBOO_SAPLING"|"SWEET_BERRY_BUSH"|"LILY_PAD"|"NETHER_WART"|"STONE"|"MOSS_CARPET"|"LADDER"|"WET_GRASS"|"NETHERITE_BLOCK"|"LARGE_AMETHYST_BUD"|"GLOW_LICHEN"|"MEDIUM_AMETHYST_BUD"|"MUDDY_MANGROVE_ROOTS"|"WOOL"|"CROP"|"ROOTS"|"WART_BLOCK"|"NETHER_SPROUTS"|"AZALEA_LEAVES"|"POWDER_SNOW"|"METAL"}
 */
