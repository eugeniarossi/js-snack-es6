'use strict';

// Definisco un array di oggetti
const bikes = [
    {
        bikeName: 'Triban',
        height: 9.4
    },
    {
        bikeName: 'Trek',
        height: 9.1
    },
    {
        bikeName: 'Van Rysel',
        height: 10.8
    },
    {
        bikeName: 'Hiland',
        height: 7.80
    },
    {
        bikeName: 'Bulls',
        height: 8.7
    }
];
/* ALTERNATIVE
const heightsList = bikes.map(bike => bike.height);
console.log(heightsList);

const lighterHeight = Math.min(...heightsList);
console.log({lighterHeight});
*/

//Definisco un array con la lista degli elementi peso 
const heightsList = bikes.map(bike => bike.height);
// Definisco il valore minore
const lighterHeight = Math.min(...heightsList);


// Stampo in console il nome della bici con peso minore
bikes.forEach(bike => {
    const {height} = bike;
    if(height === lighterHeight) {
        const {bikeName, height} = bike;
        console.log(`La bici più leggera è la ${bikeName} (peso: ${height})`);
    }
});
/*  ALTERNATIVE
const lighterBike = bikes.filter(bike => {
    const {height} = bike;
    return (height === lighterHeight);
})
const {bikeName, height} = lighterBike[0];
console.log(`La bici più leggera è la ${bikeName} (peso: ${height})`);
*/