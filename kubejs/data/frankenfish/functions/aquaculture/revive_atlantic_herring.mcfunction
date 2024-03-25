
execute as @e[type=item,distance=..2,nbt={Item: {id: "aquaculture:atlantic_herring"}}] at @s run summon aquaculture:atlantic_herring ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
