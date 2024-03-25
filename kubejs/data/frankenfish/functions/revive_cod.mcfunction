
execute as @e[type=item,distance=..2,nbt={Item: {id: "minecraft:cod"}}] at @s run summon minecraft:cod ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
