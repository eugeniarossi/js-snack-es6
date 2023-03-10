'use strict';

/***********
 * Functions
 */
// Definisco una funzione per generare numeri random
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
// Assegno ai valori 0 dei numeri random
teams.forEach(team => {
    team.score = randomNumber(1, 10);
    team.fouls = randomNumber(1, 10);
})
console.log({teams});
//Creo un array di oggetti con proprietà nome e falli subiti
const newTeams = teams.map(({fouls, teamName}) => {
    foulsList.push(fouls);
    return {teamName, fouls}
});
// Stampo in console
console.log({newTeams});
// Stabilisco quale squadra ha subito più falli
const maxFouls = Math.max(...foulsList);
const maxFoulsTeam = newTeams.filter(team => {
    return team.fouls === maxFouls;
});
// Stampo in console la squadra che ha subito più falli
maxFoulsTeam.forEach(element => {
    console.log(`${element.teamName} è la squadra che ha subito più falli (${element.fouls})`);
});