// The below object (the stuff between the curly braces) can be edited to add
// more egg drops.
// format:
// "mod:mob_id": "mod:spawn_egg_id"

// note: some of the alex's mobs have mobs that are implemented as multiple different entities.
// we use the head part for the drop here wherever possible.
const EGG_DROPS = {
    "alexsmobs:bunfungus": "alexsmobs:spawn_egg_bunfungus",
    "alexsmobs:cachalot_whale": "alexsmobs:spawn_egg_cachalot_whale",
    "alexsmobs:capuchin_monkey": "alexsmobs:spawn_egg_capuchin_monkey",
    "alexsmobs:catfish": "alexsmobs:spawn_egg_catfish",
    "alexsmobs:centipede_head": "alexsmobs:spawn_egg_centitpede",
    "alexsmobs:cockroach": "alexsmobs:spawn_egg_cockroach",
    "alexsmobs:comb_jelly": "alexsmobs:spawn_egg_comb_jelly",
    "alexsmobs:cosmaw": "alexsmobs:spawn_egg_cosmaw",
    "alexsmobs:cosmic_cod": "alexsmobs:spawn_egg_cosmic_cod",
    "alexsmobs:crimson_mosquito": "alexsmobs:spawn_egg_crimson_mosquito",
    "alexsmobs:crocodile": "alexsmobs:spawn_egg_crocodile",
    "alexsmobs:crow": "alexsmobs:spawn_egg_crow",
    "alexsmobs:devils_hole_pupfish": "alexsmobs:spawn_egg_devils_hole_pupfish",
    "alexsmobs:dropbear": "alexsmobs:spawn_egg_dropbear",
    "alexsmobs:elephant": "alexsmobs:spawn_egg_elephant",
    "alexsmobs:emu": "alexsmobs:spawn_egg_emu",
    "alexsmobs:endergrade": "alexsmobs:spawn_egg_endergrade",
    "alexsmobs:enderiophage": "alexsmobs:spawn_egg_enderiophage",
    "alexsmobs:alligator_snapping_turtle": "alexsmobs:spawn_egg_alligator_snapping_turtle",
    "alexsmobs:anaconda": "alexsmobs:spawn_egg_anaconda",
    "alexsmobs:bald_eagle": "alexsmobs:spawn_egg_bald_eagle",
    "alexsmobs:banana_slug": "alexsmobs:spawn_egg_banana_slug",
    "alexsmobs:anteater": "alexsmobs:spawn_egg_anteater",
    "alexsmobs:bison": "alexsmobs:spawn_egg_bison",
    "alexsmobs:blobfish": "alexsmobs:spawn_egg_blobfish",
    "alexsmobs:bone_serpent": "alexsmobs:spawn_egg_bone_serpent",
    "alexsmobs:blue_jay": "alexsmobs:spawn_egg_blue_jay",
    "alexsmobs:farseer": "alexsmobs:spawn_egg_farseer",
    "alexsmobs:giant_squid": "alexsmobs:spawn_egg_giant_squid",
    "alexsmobs:gorilla": "alexsmobs:spawn_egg_gorilla",
    "alexsmobs:grizzly_bear": "alexsmobs:spawn_egg_grizzly_bear",
    "alexsmobs:guster": "alexsmobs:spawn_egg_guster",
    "alexsmobs:hammerhead_shark": "alexsmobs:spawn_egg_hammerhead_shark",
    "alexsmobs:hummingbird": "alexsmobs:spawn_egg_hummingbird",
    "alexsmobs:jerboa": "alexsmobs:spawn_egg_jerboa",
    "alexsmobs:kangaroo": "alexsmobs:spawn_egg_kangaroo",
    "alexsmobs:komodo_dragon": "alexsmobs:spawn_egg_komodo_dragon",
    "alexsmobs:laviathan": "alexsmobs:spawn_egg_laviathan",
    "alexsmobs:leafcutter_ant": "alexsmobs:spawn_egg_leafcutter_ant",
    "alexsmobs:lobster": "alexsmobs:spawn_egg_lobster",
    "alexsmobs:maned_wolf": "alexsmobs:spawn_egg_maned_wolf",
    "alexsmobs:mantis_shrimp": "alexsmobs:spawn_egg_mantis_shrimp",
    "alexsmobs:mimic_octopus": "alexsmobs:spawn_egg_mimic_octopus",
    "alexsmobs:mimicube": "alexsmobs:spawn_egg_mimicube",
    "alexsmobs:moose": "alexsmobs:spawn_egg_moose",
    "alexsmobs:mudskipper": "alexsmobs:spawn_egg_mudskipper",
    "alexsmobs:mungus": "alexsmobs:spawn_egg_mungus",
    "alexsmobs:flutter": "alexsmobs:spawn_egg_flutter",
    "alexsmobs:fly": "alexsmobs:spawn_egg_fly",
    "alexsmobs:flying_fish": "alexsmobs:spawn_egg_flying_fish",
    "alexsmobs:froststalker": "alexsmobs:spawn_egg_froststalker",
    "alexsmobs:frilled_shark": "alexsmobs:spawn_egg_frilled_shark",
    "alexsmobs:gazelle": "alexsmobs:spawn_egg_gazelle",
    "alexsmobs:gelada_monkey": "alexsmobs:spawn_egg_gelada_monkey",
    "alexsmobs:murmur": "alexsmobs:spawn_egg_murmur",
    "alexsmobs:rhinoceros": "alexsmobs:spawn_egg_rhinoceros",
    "alexsmobs:roadrunner": "alexsmobs:spawn_egg_roadrunner",
    "alexsmobs:rocky_roller": "alexsmobs:spawn_egg_rocky_roller",
    "alexsmobs:seagull": "alexsmobs:spawn_egg_seagull",
    "alexsmobs:seal": "alexsmobs:spawn_egg_seal",
    "alexsmobs:shoebill": "alexsmobs:spawn_egg_shoebill",
    "alexsmobs:skelewag": "alexsmobs:spawn_egg_skelewag",
    "alexsmobs:skreecher": "alexsmobs:spawn_egg_skreecher",
    "alexsmobs:skunk": "alexsmobs:spawn_egg_skunk",
    "alexsmobs:snow_leopard": "alexsmobs:spawn_egg_snow_leopard",
    "alexsmobs:soul_vulture": "alexsmobs:spawn_egg_soul_vulture",
    "alexsmobs:spectre": "alexsmobs:spawn_egg_spectre",
    "alexsmobs:straddler": "alexsmobs:spawn_egg_straddler",
    "alexsmobs:stradpole": "alexsmobs:spawn_egg_stradpole",
    "alexsmobs:sugar_glider": "alexsmobs:spawn_egg_sugar_glider",
    "alexsmobs:sunbird": "alexsmobs:spawn_egg_sunbird",
    "alexsmobs:tarantula_hawk": "alexsmobs:spawn_egg_tarantula_hawk",
    "alexsmobs:tasmanian_devil": "alexsmobs:spawn_egg_tasmanian_devil",
    "alexsmobs:terrapin": "alexsmobs:spawn_egg_terrapin",
    "alexsmobs:tiger": "alexsmobs:spawn_egg_tiger",
    "alexsmobs:toucan": "alexsmobs:spawn_egg_toucan",
    "alexsmobs:tusklin": "alexsmobs:spawn_egg_tusklin",
    "alexsmobs:underminer": "alexsmobs:spawn_egg_underminer",
    "alexsmobs:void_worm": "alexsmobs:spawn_egg_void_worm",
    "alexsmobs:warped_mosco": "alexsmobs:spawn_egg_warped_mosco",
    "alexsmobs:warped_toad": "alexsmobs:spawn_egg_warped_toad",
    "alexsmobs:orca": "alexsmobs:spawn_egg_orca",
    "alexsmobs:platypus": "alexsmobs:spawn_egg_platypus",
    "alexsmobs:potoo": "alexsmobs:spawn_egg_potoo",
    "alexsmobs:raccoon": "alexsmobs:spawn_egg_raccoon",
    "alexsmobs:rain_frog": "alexsmobs:spawn_egg_rain_frog",
    "alexsmobs:rattlesnake": "alexsmobs:spawn_egg_rattlesnake"
}

// the chance of a mob dropping a spawn egg
// decimal value where 1.0 is a 100% chance and 0.01 is a 1% chance
const EGG_DROP_CHANCE = 0.01;

LootJS.modifiers((event) => {
    for (const mob in EGG_DROPS) {
        event
            .addEntityLootModifier(mob)
            .randomChance(EGG_DROP_CHANCE)
            .killedByPlayer()
            .addLoot(EGG_DROPS[mob]);
    }
});
