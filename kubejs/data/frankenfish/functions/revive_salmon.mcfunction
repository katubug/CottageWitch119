
execute as @e[type=item,distance=..2,nbt={Item: {id: "minecraft:salmon"}}] at @s run summon minecraft:salmon ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
