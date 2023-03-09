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
//Creo un array di oggetti con proprietà nome e falli subiti
const newTeams = teams.map(team => {
    let {teamName, score, fouls} = team;
    score = randomNumber(1, 10);
    fouls = randomNumber(1, 10);
    return {
        teamName,
        fouls
    }
});
// Stampo in console
console.log(newTeams);