//MARK: Unbreakable
BlockEvents.modification((event) => {
	event.modify(/trashcans:.*/, (block) => {
		block.setExplosionResistance(2048);
		block.setDestroySpeed(-1);
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
