
execute as @e[type=item,distance=..2,nbt={Item: {id: "aquaculture:rainbow_trout"}}] at @s run summon aquaculture:rainbow_trout ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
