const vipList = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

console.log({vipList});

const guestsList = vipList.map((vip, index) => { 
    return {
        tableName: 'Tavolo Vip',
        guestName: vip,
        nPlace: index + 1
    }
});

console.log(guestsList);