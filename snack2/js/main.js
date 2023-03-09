'use strict';

// Creo un array di oggetti 
const studentsList = [
    {
        id: 213,
        studentName: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        studentName: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        studentName: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        studentName: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        studentName: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 105,
        studentName: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        studentName: 'Francesca da Polenta',
        grades: 84
    }
];
console.log(studentsList);

// Creo un array con i nomi degli studenti scritti in maiuscolo
const upperCaseStudents = studentsList.map((student) => {  //OPPURE: const upperCaseStudents = studentsList.map(student => student.studentName.toUpperCase());
    return student.studentName.toUpperCase();
});
console.log({upperCaseStudents});

// Creo un array degli studenti con grades > 70
const highRate = studentsList.filter((student) => { // (Si può usare anche forEach)
    return student.grades > 70;
})
console.log({highRate});

// Creo un array degli studenti con grades > 70 && id > 120
const highRateAndId = studentsList.filter((student) => {
    return student.grades > 70 && student.id > 120;
})
console.log({highRateAndId});