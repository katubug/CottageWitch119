//MARK: Unbreakable
BlockEvents.modification((event) => {
	const unbreakableBlocks = [
		/trashcans:.*/, //
		/itemcollectors:.*/,
	];

	event.modify(unbreakableBlocks, (block) => {
		block.setExplosionResistance(2048); //can't be blown up
		block.setDestroySpeed(-1); // can't be broken by any other means
	});
});

//MARK: Destroy Speed
BlockEvents.modification((e) => {
	e.modify(/.*deepslate.*/, (block) => {
		if (block.name != "reinforced_deepslate") {
			block.setDestroySpeed(1);
		}
	});
});
