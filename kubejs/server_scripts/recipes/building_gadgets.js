ServerEvents.recipes(event => {
	// Building Gadgets

	//Building Gadget
	event.shaped(
		Item.of('buildinggadgets:gadget_building', '{energy:500000.0d,state:{data:{},serializer:"buildinggadgets:dummy_serializer",state:{Name:"minecraft:air"}}}'),
		[
			'ABA',
			'CBC',
			'ADA'
		], {
			A: 'create:brass_ingot',
			B: 'minecraft:redstone',
			C: 'minecraft:diamond',
			D: 'minecraft:lapis_lazuli'
		}
	)

	//Exchanging Gadget
	event.shaped(
		Item.of('buildinggadgets:gadget_exchanging', '{energy:500000.0d,state:{data:{},serializer:"buildinggadgets:dummy_serializer",state:{Name:"minecraft:air"}}}'), [
			'ABA',
			'CDC',
			'ADA'
		], {
			A: 'create:brass_ingot',
			B: 'minecraft:redstone',
			C: 'minecraft:diamond',
			D: 'minecraft:lapis_lazuli'
		}
	)

	//Copy Paste Gadget
	event.shaped(
		Item.of('buildinggadgets:gadget_copy_paste', '{energy:500000.0d,mode:0b,template_id:[I;-1758435112,-1217443030,-1679697278,2082124584]}'),
		[
			'ABA',
			'CBC',
			'ADA'
		], {
			A: 'create:brass_ingot',
			B: 'minecraft:redstone',
			C: 'minecraft:emerald',
			D: 'minecraft:lapis_lazuli'
		}
	)

	//Destruction Gadget
	event.shaped(
		Item.of('buildinggadgets:gadget_destruction', '{energy:1000000.0d,fuzzy:1b,overlay:1b}'),
		[
			'ABA',
			'CBC',
			'ADA'
		], {
			A: 'create:brass_ingot',
			B: 'minecraft:redstone',
			C: 'minecraft:ender_pearl',
			D: 'minecraft:lapis_lazuli'
		}
	)

	// BG Charging Gadget
	event.shaped(
		Item.of('charginggadgets:charging_station'),
		[
			'ABA',
			'DBD',
			'ACA'
		], {
			A: 'create:brass_ingot',
			B: 'minecraft:redstone',
			C: 'minecraft:coal_block',
			D: 'minecraft:lapis_lazuli'
		}
	)

	// BG Template Manager
	event.shaped(
		Item.of('buildinggadgets:template_manager'),
		[
			'ABA',
			'BCB',
			'ADA'
		], {
			A: 'create:brass_ingot',
			B: 'minecraft:redstone',
			C: 'minecraft:emerald',
			D: 'minecraft:lapis_lazuli'
		}
	)

})