// This controls the drop chance of mob heads.
// NOT A PERCENT, this is a multiplier. 
// This means 1.0 is 100%, and 0.01 is 1%
let HEAD_DROP_CHANCE = 0.01;

// This controls which mobs drop which heads.
// It is a mapping of entity id onto the corresponding "Setblock" command as shown on minecraft-heads.com
// Some mobs are omitted from this mapping because they are special cases:
//   * Creepers, Skeletons, Wither Skeletons, Zombies, Endermen, and The Ender Dragon all drop their actual head items instead of custom player heads.
//   * Striders can drop one of two custom player heads depending on whether they are cold or not.
// The special cases are implemented below with the rest of the technical implementation details.
let HEADS = {
    "minecraft:guardian": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;4531841,2051491027,-1346310897,-19319372],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMThkMmE3ZmVhN2YyZTBkOTE2YzdjNmQ3OTE0OTM3YmI4ZGQzZmJmZDdmOTQ4M2E0YTM5MTJmNWEwZmM2M2QzIn19fQ=="}]}}} replace`,
    "minecraft:silverfish": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;816106844,1465142712,-1990191102,712270461],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZGE5MWRhYjgzOTFhZjVmZGE1NGFjZDJjMGIxOGZiZDgxOWI4NjVlMWE4ZjFkNjIzODEzZmE3NjFlOTI0NTQwIn19fQ=="}]}}} replace`,
    "minecraft:shulker": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-517402183,466505379,-1134553285,-33974691],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNWIwZTk3NGE2ZGRjMzliMmFiNzhmNjg2YzAxY2JhN2U5ODczNDgzNGIwZDk0ZWRkZjQyOGIwNzBmNzEyYTAifX19"}]}}} replace`,
    "minecraft:spider": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;924026232,198264679,-1687572293,1513739562],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzg3YTk2YThjMjNiODNiMzJhNzNkZjA1MWY2Yjg0YzJlZjI0ZDI1YmE0MTkwZGJlNzRmMTExMzg2MjliNWFlZiJ9fX0="}]}}} replace`,
    "minecraft:cave_spider": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;2125985145,1698252419,-1436689442,-603879045],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjUxYzI0MTkzMzVjMjFkY2ZmZDIzNzUyMGY2OGYwZDgwYmExOGZhMDFiYjc3NWRiMTFjOWIzZDY2ZGIyYWQ4In19fQ=="}]}}} replace`,
    "minecraft:phantom": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-899131844,-1140113241,-1737191005,1607106852],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzQ2ODMwZGE1ZjgzYTNhYWVkODM4YTk5MTU2YWQ3ODFhNzg5Y2ZjZjEzZTI1YmVlZjdmNTRhODZlNGZhNCJ9fX0="}]}}} replace`,
    "minecraft:wither": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;338825254,-1207875601,-1991448209,1955652830],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWUyODBjZWZlOTQ2OTExZWE5MGU4N2RlZDFiM2UxODMzMGM2M2EyM2FmNTEyOWRmY2ZlOWE4ZTE2NjU4ODA0MSJ9fX0="}]}}} replace`,
    "minecraft:slime": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-545354393,178867502,-1353517755,1303899592],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvN2Y1ODM1NTk4OWQxZWFhZDk4ZjgzOWZkZjc5MWJlOGZhOGQ4OTJiZGVmOWQzMDg1NTVmYjdhZmYwZGM5ZWZiNyJ9fX0="}]}}} replace`,
    "minecraft:ghast": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;1624443913,-1394521278,-1150589186,-1189112778],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvN2E4YjcxNGQzMmQ3ZjZjZjhiMzdlMjIxYjc1OGI5YzU5OWZmNzY2NjdjN2NkNDViYmM0OWM1ZWYxOTg1ODY0NiJ9fX0="}]}}} replace`,
    "twilightforest:ur_ghast": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;934098603,-1898430377,-1124100615,600640657],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmJlNTY2M2UyNmJjYTc1ZmZjYThiNWQ0MzdkYzFkZmIyZTEwODAwZmZjODZiZWNlM2I4ZWE1ZjI1YjUxYzM1OSJ9fX0="}]}}} replace`,
    "minecraft:zombified_piglin": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;1325481211,-2064102016,-2060901102,2137813230],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvN2VhYmFlY2M1ZmFlNWE4YTQ5Yzg4NjNmZjQ4MzFhYWEyODQxOThmMWEyMzk4ODkwYzc2NWUwYThkZTE4ZGE4YyJ9fX0="}]}}} replace`,
    "minecraft:ravager": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-988784499,1538476442,-1335897902,1631763943],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvY2QyMGJmNTJlYzM5MGEwNzk5Mjk5MTg0ZmM2NzhiZjg0Y2Y3MzJiYjFiZDc4ZmQxYzRiNDQxODU4ZjAyMzVhOCJ9fX0="}]}}} replace`,
    "artifacts:mimic": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-3225478,-1364964395,-1799857461,-491146182],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzZkOGVmOWFkYTQyYzMzYzljZWM5NDhmMDNjYzQzYzhmYmE2MTUyNDk4Nzg5YzU2NDU2MjZhYjVlNzE5NjRkMyJ9fX0="}]}}} replace`,
    "minecraft:blaze": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-545139939,-2011543045,-1075025684,1554734973],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjIwNjU3ZTI0YjU2ZTFiMmY4ZmMyMTlkYTFkZTc4OGMwYzI0ZjM2Mzg4YjFhNDA5ZDBjZDJkOGRiYTQ0YWEzYiJ9fX0="}]}}} replace`,
    "minecraft:allay": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-2084970832,-2125968283,-1122789707,113239069],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjI0YjMyYWUwNjY2M2I4NjczNTk1NDMyNTU4NWViNDA4YWMwMzg5Y2E0MGM1MTc3MDFlZDFlNjVhOTJlNjNmZSJ9fX0="}]}}} replace`,
    "minecraft:warden": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-1918583904,-572830881,-1403743616,-437458947],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODM0Mzg4ZjBiZjY2MzI5NTRhMTlkYjg2MDczMmRmNTU3NTg5YWEyOTdjYjI5MzYzYjg4YTI1YjhjMWQ5NmI2MCJ9fX0="}]}}} replace`,
    "alexsmobs:murmur": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-1428923870,748111642,-2029960081,1128988018],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMmUxMDFiOGEwY2E3MWZhMDg1Nzc1MzZiYjk4MjQ3YTA1ZGZmMzliZTRkYjViNTdiZTI2ZTQ1NTg3ODYzNmI3NyJ9fX0="}]}}} replace`,
    "friendsandfoes:glare": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;886593146,-1607841114,-1938523502,1865746546],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvM2MwYThmNzNkOTY0NjExNjg2MGVkNWUzNjVjYWM3ZDU3NDdiNDc1ODQxMTY1Yjg5ZjBhZmQ0M2ViNzQ2ZmI0ZCJ9fX0="}]}}} replace`,
    "minecraft:zoglin": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;1016623846,1968392332,-1772753275,-1662033268],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjdkNjI5YThjYzNmZjUzNDNkNWU2YTdjMzE3YThhZGYwZTMxYjE5MDE4YWY3ZTY2ZWRlZGFlZDllZmZmMWQwNSJ9fX0="}]}}} replace`,
    "minecraft:elder_guardian": `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-1647703341,-78099849,-1601399648,860602819],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzBmODY4Y2FmMTljZjIxMjRmMGZlZjk4ZTZiODc3M2QyN2ZiZjQyZDkzYWFiMDZiMjJlZTAzM2IyYWVlNjQ0NyJ9fX0="}]}}} replace`

};


// Technical implementation details below.

// This removes the actual head nbt from the setblock command on the website.
// The reason we keep the setblock command is because it's easier to copy paste into this file :)
function parseSetBlockCommand(commandString) {
    let regex = /^\/setblock ~ ~1 ~ minecraft:player_head\[rotation=0\](.*) replace?$/;
    let matches = regex.exec(commandString);
    if (matches === null) {
        throw new Error("setblock command has invalid format");
    } else {
        return matches[1];
    }
}

// By using the translation key we don't need to type in the mob name when adding heads.
function langKeyForMob(mobId) {
    let split = mobId.split(":");
    if (split.length !== 2) {
        throw new Error("Mob Id has invalid format");
    }
    let namespace = split[0];
    let id = split[1];
    return "entity." + namespace + "." + id;
}

function applyHeadDropLootConditions(lootPool) {
    lootPool.killedByPlayer();
    lootPool.randomChance(HEAD_DROP_CHANCE);
    lootPool.matchMainHand(Ingredient.of("#forge:scythe"));
}

function applyCustomHeadNbt(lootPool, mobId, headNbt) {
    lootPool.addNbt(headNbt);
    lootPool.addNbt({
        display: {
            Name: JSON.stringify([{translate: langKeyForMob(mobId)}, " Head"])
        }
    });
}

function addHeadDrop(event, mobId, headNbt) {
    event
        .addEntityLootModifier(mobId)
        .pool((pool) => {
            applyHeadDropLootConditions(pool);
            pool.addLoot("minecraft:player_head");
            applyCustomHeadNbt(pool, mobId, headNbt);
        });
}

// Head items for mobs that have actual items and therfore don't need custom player heads.
let REAL_HEADS = {
    "minecraft:creeper": "minecraft:creeper_head",
    "minecraft:skeleton": "minecraft:skeleton_skull",
    "minecraft:wither_skeleton": "minecraft:wither_skeleton_skull",
    "minecraft:zombie": "minecraft:zombie_head",
    "minecraft:enderman": "supplementaries:enderman_head",
    "minecraft:ender_dragon": "minecraft:dragon_head"
}

function addRealHeadDrop(event, mobId, headItem) {
    event
        .addEntityLootModifier(mobId)
        .pool((pool) => {
            applyHeadDropLootConditions(pool);
            pool.addLoot(headItem);
        });
}

let HOT_STRIDER_HEAD = `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;1540698924,-955495724,-1441155172,-1921625949],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTI1ODUxYTg2ZWUxYzU0Yzk0ZmM1YmVkMDE3ODIzZGZiM2JhMDhlZGRiY2FiMmE5MTRlZjQ1YjU5NmMxNjAzIn19fQ=="}]}}} replace`;
let COLD_STRIDER_HEAD = `/setblock ~ ~1 ~ minecraft:player_head[rotation=0]{SkullOwner:{Id:[I;-933421238,220545825,-1966569204,861769564],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDdlNGViMGZiNDg5ZDZmMjUwYzYwN2QyOGQ2NzJmMTI3ZWJhZWRlOGUwMDdmYTZjZDM0ZTJiYmMwYzJmYzMzYSJ9fX0="}]}}} replace`;

function addStriderHeadDrops(event) {
    // only the hot head needs a special condition because it is checked first
    let hotHeadEntry = LootEntry.of("minecraft:player_head").when((conditions) => {
        // either strider is standing on lava, or strider is riding a different strider which is standing on lava
        conditions.customCondition(
            {
              "condition": "minecraft:alternative",
              "terms": [
                {
                  "condition": "minecraft:entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type": "minecraft:strider",
                    "stepping_on": {
                      "block": {
                        "tag": "minecraft:strider_warm_blocks"
                      }
                    }
                  }
                },
                {
                  "condition": "minecraft:entity_properties",
                  "entity": "this",
                  "predicate": {
                    "vehicle": {
                      "type": "minecraft:strider",
                      "stepping_on": {
                        "block": {
                          "tag": "minecraft:strider_warm_blocks"
                        }
                      }
                    }
                  }
                }
              ]
            }
        );
    });
    applyCustomHeadNbt(hotHeadEntry, "minecraft:strider", parseSetBlockCommand(HOT_STRIDER_HEAD));

    let coldHeadEntry = LootEntry.of("minecraft:player_head");
    applyCustomHeadNbt(coldHeadEntry, "minecraft:strider", parseSetBlockCommand(COLD_STRIDER_HEAD));

    event
        .addEntityLootModifier("minecraft:strider")
        .pool((pool) => {
            applyHeadDropLootConditions(pool);
            pool.addAlternativesLoot(hotHeadEntry, coldHeadEntry);
        });
}

LootJS.modifiers((event) => {
    event.enableLogging();
    for (let mobId in HEADS) {
        let headNbt = parseSetBlockCommand(HEADS[mobId]);
        addHeadDrop(event, mobId, headNbt);
    }
    for (let mobId in REAL_HEADS) {
        addRealHeadDrop(event, mobId, REAL_HEADS[mobId]);
    }
    addStriderHeadDrops(event);
});


