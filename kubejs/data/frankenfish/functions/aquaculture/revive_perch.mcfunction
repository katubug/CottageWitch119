
execute as @e[type=item,distance=..2,nbt={Item: {id: "aquaculture:perch"}}] at @s run summon aquaculture:perch ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
