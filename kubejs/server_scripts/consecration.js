BlockEvents.rightClicked(event => {
	const {
		block,
		item
	} = event;
    if (!block.hasTag("minecraft:candles")) return;
	console.log(block)
    console.log(block.properties.get('lit'))
    if (!block.properties.get('lit')) return;
	if (item.id == 'ae2:certus_quartz_crystal') {
		item.count--
		block.popItem('ae2:charged_certus_quartz_crystal')
	}
});