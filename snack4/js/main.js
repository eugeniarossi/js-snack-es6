'use strict';

/***********
 * Functions
 */

function randomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}

/***********
 * Main
 */

// Creo un array di oggetti di squadre di calcio
const teams = [
    {
        teamName: 'Borussia Dortmund',
        score: 0,
        fouls: 0
    },
    {
        teamName: 'Chelsea',
        score: 0,
        fouls: 0
    },
    {
        teamName: 'Inter',
        score: 0,
        fouls: 0
    },
    {
        teamName: 'Manchester United',
        score: 0,
        fouls: 0
    },
    {
        teamName: 'Roma',
        score: 0,
        fouls: 0
    },
    {
        teamName: 'Bayern Monaco',
        score: 0,
        fouls: 0
    },
    {
        teamName: 'Liverpool',
        score: 0,
        fouls: 0
    },
    {
        teamName: 'Arsenal',
        score: 0,
        fouls: 0
    }
];
// Definisco un array per gli elementi fouls
let foulsList = [];
//Creo un array di oggetti con proprietà nome e falli subiti
const newTeams = teams.map(team => {
    let {teamName, score, fouls} = team;
    score = randomNumber(1, 10);
    fouls = randomNumber(1, 10);
    foulsList.push(fouls);
    return {
        teamName,
        fouls
    }
});
// Stampo in console
console.log(newTeams);
// Stabilisco quale squadra ha subito più falli
const maxFouls = Math.max(...foulsList);
const maxFoulsTeam = newTeams.filter(team => {
    return team.fouls === maxFouls;
});
// Stampo in console la squadra che ha subito più falli
maxFoulsTeam.forEach(element => {
    console.log(`${element.teamName} è la squadra che ha subito più falli (${element.fouls})`);
});