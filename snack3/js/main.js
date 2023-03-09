'use strict';

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
const heightsList = bikes.map(bike => bike.height);
const lighterHeight = Math.min(...heightsList);

/* ALTERNATIVE
bikes.forEach(bike => {
    const {height} = bike;
    if(height === lighterHeight) {
        console.log({bike});
    }
});
*/
const lighterBike = bikes.filter(bike => {
    const {height} = bike;
    return (height === lighterHeight);
})
console.log(lighterBike);