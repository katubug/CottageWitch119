summon minecraft:husk ~ ~-1 ~ {PersistenceRequired:1,CanBreakDoors:1b,HandItems:[{Count:1,id:"twilightforest:knightmetal_sword",tag:{Enchantments:[{id:unbreaking,lvl:9}]}},{}],ArmorItems:[{Count:1,id:netherite_boots,tag:{Enchantments:[{id:soul_speed,lvl:3},{id:feather_falling,lvl:9},{id:blast_protection,lvl:1},{id:depth_strider,lvl:3},{id:unbreaking,lvl:9},{id:vanishing_curse,lvl:1}]}},{Count:1,id:netherite_leggings,tag:{Enchantments:[{id:projectile_protection,lvl:1},{id:unbreaking,lvl:9},{id:vanishing_curse,lvl:1}]}},{Count:1,id:netherite_chestplate,tag:{Enchantments:[{id:fire_protection,lvl:1},{id:thorns,lvl:1},{id:unbreaking,lvl:9},{id:vanishing_curse,lvl:1}]}},{Count:1,id:"twilightforest:keepsake_casket"}],CustomName:"\"Elder Lich\"",HandDropChances:[0.0f,0.0f],ArmorDropChances:[0.0f,0.0f,0.0f,1.0f]}
effect give @e[type= minecraft:husk, sort= nearest, limit= 1] minecraft:fire_resistance 999999 1 true
effect give @e[type= minecraft:husk, sort= nearest, limit= 1] minecraft:invisibility 999999 1 true
effect give @e[type= minecraft:husk, sort= nearest, limit= 1] minecraft:absorption 999999 44 true
effect give @e[type= minecraft:husk, sort= nearest, limit= 1] minecraft:strength 999999 4 true
effect give @e[type= minecraft:husk, sort= nearest, limit= 1] minecraft:speed 999999 2 true
execute positioned as @p run summon twilightforest:death_tome ~1.2 ~1 ~1.2 {PersistenceRequired:1,CustomName:"\"Book of Flow\"",CustomNameVisible:0b}
execute positioned as @p run summon twilightforest:death_tome ~1.2 ~1 ~-1.2 {PersistenceRequired:1,CustomName:"\"Book of Form\"",CustomNameVisible:0b}
execute positioned as @p run summon twilightforest:death_tome ~-1.2 ~1 ~-1.2 {PersistenceRequired:1,CustomName:"\"Book of Stone\"",CustomNameVisible:0b}
execute positioned as @p run summon twilightforest:death_tome ~-1.2 ~1 ~1.2 {PersistenceRequired:1,CustomName:"\"Book of Order\"",CustomNameVisible:0b}
effect give @e[type= twilightforest:death_tome, sort= nearest, limit= 4] minecraft:absorption 999999 7 true
effect give @e[type= twilightforest:death_tome, sort= nearest, limit= 4] minecraft:strength 999999 1 true
effect give @e[type= twilightforest:death_tome, sort= nearest, limit= 4] minecraft:speed 999999 5 true
summon minecraft:lightning_bolt ~ ~6 ~
effect give @p minecraft:blindness 5