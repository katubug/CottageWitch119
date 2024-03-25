
execute as @e[type=item,distance=..2,nbt={Item: {id: "aquaculture:carp"}}] at @s run summon aquaculture:carp ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
