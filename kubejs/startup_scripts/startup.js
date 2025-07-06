// priority: 0

//MARK: Hello!
console.info(
	"Hello, World! (You will only see this line once in console, during startup)"
);

Platform.mods.kubejs.name = "Cottage Witch";

/**
 *
 * MARK: ITEMS
 *
 */

StartupEvents.registry("item", (event) => {
	/**
	 * Registers a basic item. Texture path is optional
	 * @param {string} id item ID
	 * @param {string} name Display Name
	 * @param {int} stackSize Max Stack Size
	 * @param {string} texture Path to Texture
	 */
	function createBasicItem(id, name, stackSize, texture) {
		if (texture) {
			event
				.create(id)
				.displayName(name)
				.maxStackSize(stackSize)
				.texture(texture);
		} else {
			event.create(id).displayName(name).maxStackSize(stackSize);
		}
	}

	/**
	 * MARK: Register Coins
	 */

	const coins = global.hex_coins;

	coins.forEach((Coin) => {
		const coin = Coin.toLowerCase();
		//New coins
		createBasicItem(
			`${coin}coin`,
			`${Coin} Coin`,
			64,
			`kubejs:item/${coin}_coin`
		);
		//Old coins
		createBasicItem(`${coin}_coin`, `${Coin} Coin`, 64);
	});

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
			`kubejs:item/${moon}_moon`
		);
	});

	/**
	 * MARK: Other Items
	 */

	createBasicItem("ticket", "Ticket", 64);
});

/**
 *
 * MARK: BLOCKS
 *
 */

StartupEvents.registry("block", (event) => {
	/**
	 * MARK: Emmu Blocks
	 */

	event
		.create("bat_wallpaper", "cardinal")
		.model("kubejs:block/bat_wallpaper")
		.soundType("wood")
		.hardness(2)
		.displayName("Bat Wallpaper")
		.tagBlock("minecraft:mineable/axe");

	event
		.create("skull_wallpaper", "cardinal")
		.model("kubejs:block/skull_wallpaper")
		.soundType("wood")
		.hardness(2)
		.displayName("Skull Wallpaper")
		.tagBlock("minecraft:mineable/axe");

	event
		.create("witch_cat_plushie", "cardinal")
		.model("kubejs:block/witch_cat_plushie")
		.soundType("wool")
		.fullBlock(false)
		.defaultCutout()
		.hardness(1.5)
		.displayName("Witch Cat Plushie");

	event
		.create("mayor_gaylord", "cardinal")
		.model("kubejs:block/gaylord")
		.soundType("wool")
		.fullBlock(false)
		.defaultCutout()
		.hardness(1.5)
		.displayName("Mayor Gaylord");
});
