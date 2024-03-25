
execute as @e[type=item,distance=..2,nbt={Item: {id: "aquaculture:minnow"}}] at @s run summon aquaculture:minnow ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
