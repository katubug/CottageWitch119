
execute as @e[type=item,distance=..2,nbt={Item: {id: "minecraft:tropical_fish"}}] at @s run summon minecraft:tropical_fish ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
