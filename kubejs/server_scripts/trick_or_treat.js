(()=>{

//This script allows players to go Trick or Treating around Halloween, by right-clicking entities with a Bundle in their main hand. They will randomly receive a trick or a treat from a specified list of events. As written, it requires external mods like Delightful, Farmer's Delight, etc. But those can easily be changed for your personal modpack.

//Thanks to Lexxie and Hof for helping with the date portion of things!
//Date info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//Thanks to Rad for helping with the removal of the stages after the dates pass!
/*
ItemEvents.rightClicked('minecraft:netherite_hoe', e => {
	const stage_id = e.player.stages.getAll().find(s => s.startsWith('entity'))
	e.server.tell(stage_id);
})

ItemEvents.rightClicked('minecraft:wooden_axe', e => {
	const stage_id = e.player.stages.getAll().find(s => s.startsWith('entity'))
	if(stage_id == null) return;
	e.player.stages.remove(stage_id)
	e.server.tell(e.player.stages.has(stage_id))
})*/

let ObjectiveCriteria = Java.loadClass("net.minecraft.world.scores.criteria.ObjectiveCriteria");

let SCOREBOARD_OBJECTIVE_NAME = "cottage_witch.trick_or_treat";

function isTrickOrTreatTime(date) {
    return (date.getMonth() == 9) && (date.getDate() >= 29);
}

function getPlayerTrickOrTreatScoreReference(player) {
    let level = player.getLevel();
    let scoreboard = level.getScoreboard();
    let objective = scoreboard.getObjective(SCOREBOARD_OBJECTIVE_NAME);
    if (!objective) {
        scoreboard.addObjective(SCOREBOARD_OBJECTIVE_NAME, ObjectiveCriteria.DUMMY, Component.of(SCOREBOARD_OBJECTIVE_NAME), ObjectiveCriteria.DUMMY.getDefaultRenderType());
    }
    return scoreboard.getOrCreatePlayerScore(player.username, objective);
}

function resetPlayerTrickOrTreat(player) {
    let stages = player.stages.getAll().clone();
    for (let stage of stages) {
        if (stage.startsWith("entity.")) {
            player.stages.remove(stage);
        }
    }
    let score = getPlayerTrickOrTreatScoreReference(player);
    score.setScore(0);
}

PlayerEvents.loggedIn(event =>{
    let player = event.player;
    let currentTime = new Date();
    if (isTrickOrTreatTime(currentTime)) {
        if (player.persistentData.lastTrickOrTreatYear != currentTime.getFullYear()) {
            player.stages.remove('bundle')
            resetPlayerTrickOrTreat(player);
            player.persistentData.lastTrickOrTreatYear = currentTime.getFullYear();
        }
        if (!player.stage.has('bundle')) {
            player.give(Item.of('minecraft:bundle', "{display:{Lore:['[\"\",{\"text\":\"A cute little Halloween pail for Trick or Treating. However, any Bundle will do in a pinch.\",\"italic\":false,\"color\":\"gold\"}]'],Name:'[\"\",{\"text\":\"Trick or Treat Pail\",\"italic\":false}]'}}"))
            player.stages.add('bundle')
        }
    }
});

ItemEvents.entityInteracted('minecraft:bundle', event => {
	const {
		player,
		player: {
			x,
			y,
			z
		},
		target,
	} = event;
    
	let currentTime = new Date()

	//Check whether the date is October 29th to the 31st. January is 0, so October is 9.
	if (isTrickOrTreatTime(currentTime)) {
        if (player.persistentData.lastTrickOrTreatYear != currentTime.getFullYear()) {
            resetPlayerTrickOrTreat(player);
            player.persistentData.lastTrickOrTreatYear = currentTime.getFullYear();
        }

        //Set a variable for the interacted entity, and check whether the player has a stage with that entity type name
        let clicked = target.entityType
        if (player.stages.has(clicked)) {
            player.tell(`You have already received a Trick or Treat from this creature type.`)
            return
        }
        let score = getPlayerTrickOrTreatScoreReference(player);
        score.increment();
        //If player has not clicked that entity yet, execute the Trick or Treat script.
        player.tell("Hmmm, you can have a...")
        //Add a stage matching the entity type so that players can't ToT more than once per entity.
        player.stages.add(clicked)
        event.server.scheduleInTicks(1.5 * 20, callback => {
            //Set two RNG variables: One for Trick vs Treat, and one for WHICH Trick or Treat
            let rng = Math.random()
            let subRng = Math.random()
            //Treats
            if (rng >= 0.26 && rng <= 1.00) {
                if (subRng <= 0.10) {
                    player.tell("...treat! Here's some candy!")
                    player.give('delightful:rock_candy')
                    return
                }
                if (subRng > 0.10 && subRng <= 0.20) {
                    player.tell("...treat! Here's some candy!")
                    player.give('supplementaries:candy')
                    return
                }
                if (subRng > 0.20 && subRng <= 0.30) {
                    player.tell("...treat! Here's a cookie!")
                    player.give('farmersdelight:honey_cookie')
                    return
                }
                if (subRng > 0.30 && subRng <= 0.40) {
                    player.tell("...treat! Here's a cookie!")
                    player.give('farmersdelight:sweet_berry_cookie')
                    return
                }
                if (subRng > 0.40 && subRng <= 0.50) {
                    player.tell("...treat! Here's a cookie!")
                    player.give('abnormals_delight:cherry_cookie')
                    return
                }
                if (subRng > 0.50 && subRng <= 0.60) {
                    player.tell("...treat! Here's a gummy!")
                    player.give('delightful:salmonberry_gummy')
                    return
                }
                if (subRng > 0.60 && subRng <= 0.70) {
                    player.tell("...treat! Here's a gummy!")
                    player.give('collectorsreap:melon_gummy')
                    return
                }
                if (subRng > 0.70 && subRng <= 0.80) {
                    player.tell("...treat! Here's a gummy!")
                    player.give('collectorsreap:lime_gummy')
                    return
                }
                if (subRng > 0.80 && subRng <= 0.90) {
                    player.tell("...treat! Here's some chocolate!")
                    player.give('create:bar_of_chocolate')
                    return
                }
                if (subRng > 0.90 && subRng <= 1.00) {
                    player.tell("...treat! Here's some candy!")
                    player.give('supplementaries:candy')
                    return
                }
            }
            //Tricks
            if (rng <= 0.25 && rng >= 0.00) {
                if (subRng <= 0.20) {
                    player.tell("...trick. Enjoy your new rock!")
                    player.give(Item.of('minecraft:stone_button', "{display:{Lore:['[\"\",{\"text\":\"Aww, I got a rock...\",\"italic\":false,\"color\":\"yellow\"}]'],Name:'[\"\",{\"text\":\"Rock\",\"italic\":false}]'}}"))
                    return
                }
                if (subRng > 0.20 && subRng <= 0.40) {
                    player.tell("...trick! Enjoy your new dirt!")
                    player.give("minecraft:dirt")
                    return
                }
                if (subRng > 0.40 && subRng <= 0.60) {
                    player.tell("...trick! Enjoy fighting the Warden!")
                    event.server.runCommandSilent(`playsound minecraft:entity.warden.emerge player ${event.player.name.string} ${x} ${y} ${z} 10`)
                    event.server.scheduleInTicks(3.5 * 20, callback => {
                        player.tell("Hah! Just kidding. We wouldn't do that to you.")
                        return
                    })
                }
                if (subRng > 0.60 && subRng <= 0.80) {
                    player.tell("...trick! Enjoy your flight!")
                    event.server.runCommandSilent(`effect give ${event.player.name.string} minecraft:levitation 10 1`)
                    return
                }
                if (subRng > 0.80 && subRng <= 0.90) {
                    player.tell("...trick! Enjoy ANGRY BEES!")
                    event.server.runCommandSilent(`summon minecraft:bee ${x} ${y} ${z} {AngerTime:999}`)
                    event.server.runCommandSilent(`summon minecraft:bee ${x} ${y} ${z} {AngerTime:999}`)
                    event.server.runCommandSilent(`summon minecraft:bee ${x} ${y} ${z} {AngerTime:999}`)
                    event.server.runCommandSilent(`summon minecraft:bee ${x} ${y} ${z} {AngerTime:999}`)
                    event.server.runCommandSilent(`execute as @e[type=minecraft:bee,limit=4,sort=nearest] at @s run data modify entity @s AngryAt set from entity @p UUID`)
                    return
                }
                if (subRng > 0.90 && subRng <= 1.00) {
                    player.tell("...trick! Watch out for that Creeper!!")
                    event.server.runCommandSilent(`playsound minecraft:entity.creeper.primed player ${event.player.name.string} ${x} ${y} ${z} 10`)
                    event.server.runCommandSilent(`summon sheep ${player.x} ${player.y} ${player.z} {Color:13,CustomName:'[{"text":"Dinnerbone"}]',Silent:1b}`)
                    return
                }
            }
        })
	}
})

})();
