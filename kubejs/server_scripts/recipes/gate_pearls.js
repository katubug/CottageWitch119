ServerEvents.recipes(event => {

	// Gate Pearl Recipes
	// Murmur Gate
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:murmur_gate"}'),
		[
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'minecraft:note_block',
			B: 'quark:paper_lantern_sakura',
			C: 'hexerei:cloth',
			D: 'minecraft:ender_eye'
		}
	)

	// Mimicube
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:mimicube_gate"}'),
		[
			'ABA',
			'CDC',
			'AEA'
		], {
			A: 'minecraft:dragon_breath',
			B: 'ars_nouveau:mimic_scroll',
			C: 'alexsmobs:mimicream',
			D: 'minecraft:ender_eye',
			E: 'minecraft:slime_block'
		}
	)

	// Sculk
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:sculk_gate"}'),
		[
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'minecraft:sculk',
			B: 'deeperdarker:reinforced_echo_shard',
			C: 'minecraft:ender_eye'
		}
	)

	// Nether
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:nether_gate"}'),
		[
			'ABA',
			'CDC',
			'AEA'
		], {
			A: 'minecraft:blaze_rod',
			B: 'minecraft:warped_fungus',
			C: 'alexsmobs:maggot',
			D: 'minecraft:ender_eye',
			E: 'minecraft:crimson_fungus'
		}
	)

	// Insectoid
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:insectoid_gate"}'),
		[
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'overweight_farming:vegetable_peels',
			B: 'minecraft:honey_bottle',
			C: 'minecraft:ender_eye'
		}
	)

	//Gateway to Eternity Gate Pearl Recipes

	// Hoglin Gate
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:hoglin_gate"}'),
		[
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'minecraft:crimson_fungus',
			B: 'nethersdelight:hoglin_loin',
			C: 'minecraft:ender_eye'
		}
	)

	// Hoglin Gate Small
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:hoglin_gate_small"}'),
		[
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'minecraft:crimson_fungus',
			B: 'minecraft:porkchop',
			C: 'minecraft:ender_eye'
		}
	)

	// Wraith Gate
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:wraith_gate"}'),
		[
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'quark:soul_bead',
			B: 'minecraft:ender_eye'
		}
	)

	// Guardian Gate
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:elder_guardian_gate"}'),
		[
			' A ',
			'ABA',
			' A '
		], {
			A: 'minecraft:prismarine_shard',
			B: 'minecraft:ender_eye'
		}
	)

	// Reptile Gate
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:reptile_gate"}'),
		[
			' A ',
			'ABA',
			' A '
		], {
			A: 'alexsmobs:crocodile_scute',
			B: 'minecraft:ender_eye'
		}
	)

	// Farseer Stuff
	// Gateway recipe
	event.shaped(
		Item.of('gateways:gate_pearl', '{gateway:"gateways:farseer_gate"}'),
		[
			'ABA',
			'CDC',
			'AEA'
		], {
			A: 'create:sturdy_sheet',
			B: 'minecraft:diamond',
			C: 'deeperdarker:soul_crystal',
			D: 'alexsmobs:shattered_dimensional_carver',
			E: 'quark:soul_bead'
		}
	)

})