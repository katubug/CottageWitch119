
execute as @e[type=item,distance=..2,nbt={Item: {id: "aquaculture:pollock"}}] at @s run summon aquaculture:pollock ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
