ItemEvents.rightClicked("twilightforest:moon_dial", event => {
    let moonPhase = event.level.moonPhase;
    if (moonPhase == 0 ){
        let moonString = "Full"
        event.player.tell(`The moon phase is currently ${moonString}.`)
    } else if (moonPhase == 1){
        let moonString = "Waning Gibbous"
        event.player.tell(`The moon phase is currently ${moonString}. There are 7 days remaining until the Full Moon.`)
    } else if (moonPhase == 2){
        let moonString = "Last Quarter"
        event.player.tell(`The moon phase is currently ${moonString}. There are 6 days remaining until the Full Moon.`)
    } else if (moonPhase == 3){
        let moonString = "Waning Crescent"
        event.player.tell(`The moon phase is currently ${moonString}. There are 5 days remaining until the Full Moon.`)
    } else if (moonPhase == 4){
        let moonString = "New Moon"
        event.player.tell(`The moon phase is currently ${moonString}. There are 4 days remaining until the Full Moon.`)
    } else if (moonPhase == 5){
        let moonString = "Waxing Crescent"
        event.player.tell(`The moon phase is currently ${moonString}. There are 3 days remaining until the Full Moon.`)
    } else if (moonPhase == 6){
        let moonString = "First Quarter"
        event.player.tell(`The moon phase is currently ${moonString}. There are 2 days remaining until the Full Moon.`)
    } else if (moonPhase == 7){
        let moonString = "Waxing Gibbous"
        event.player.tell(`The moon phase is currently ${moonString}. There is 1 day remaining until the Full Moon.`)
    }
})