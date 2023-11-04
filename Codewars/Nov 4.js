function areYouPlayingBanjo(name) {
    
     return (`${name} ${name.startsWith('r') || name.startsWith('R') ? 'plays banjo' : 'does not play banjo'}`)
     }