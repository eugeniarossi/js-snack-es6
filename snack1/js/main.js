'use strict';

// Definisco un array con la lista vip
const vipList = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
console.log({vipList});

// Creo un nuovo array usando la funzione map
const guestsList = vipList.map((vip, index) => {  // oppure: const guestsList = vipList.map(function(vip, index){
    return {
        tableName: 'Tavolo Vip',
        guestName: vip,
        nPlace: index + 1
    }
});
// Stampo il nuovo array in console
console.log({guestsList});

/* ALTRE SOLUZIONI MENO RAPIDE: 
forEach
for normale
*/