// Snack 2

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var squadre = [
    {
        nome: "milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "parma",
        punti: 0,
        falli: 0
    },
    {
        nome: "roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "lazio",
        punti: 0,
        falli: 0
    },
    {
        nome: "inter",
        punti: 0,
        falli: 0
    },
];

var puntiFalli = [];

for (var i = 0; i < squadre.length; i++) {

    squadre[i]["punti"] = Math.floor((Math.random() * 50) + 1);
    squadre[i]["falli"] = Math.floor((Math.random() * 50) + 1);
    puntiFalli.push(squadre[i]["nome"], squadre[i]["falli"])
};

console.log(puntiFalli);

console.log(squadre);
