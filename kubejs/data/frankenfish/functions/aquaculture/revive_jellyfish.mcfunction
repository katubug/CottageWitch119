
execute as @e[type=item,distance=..2,nbt={Item: {id: "aquaculture:jellyfish"}}] at @s run summon aquaculture:jellyfish ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
