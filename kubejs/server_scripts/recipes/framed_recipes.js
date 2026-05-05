ServerEvents.recipes((event) => {
		event.shapeless(Item.of("framedblocks:framed_double_slab"), [
			"framedblocks:framed_slab",
			"framedblocks:framed_slab",
		]);
        event.shapeless(Item.of("framedblocks:framed_double_panel"), [
			"framedblocks:framed_panel",
			"framedblocks:framed_panel",
		]);
});
