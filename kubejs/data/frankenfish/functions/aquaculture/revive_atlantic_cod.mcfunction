
execute as @e[type=item,distance=..2,nbt={Item: {id: "aquaculture:atlantic_cod"}}] at @s run summon aquaculture:atlantic_cod ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
