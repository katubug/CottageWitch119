
execute as @e[type=item,distance=..2,nbt={Item: {id: "aquaculture:catfish"}}] at @s run summon aquaculture:catfish ~ ~ ~ { ActiveEffects: [{Id: 11, Duration: 300, Amplifier: 5, ShowParticles: 1b}] }
