// Snack 1

// Creare un array di oggetti:

// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

// Stampare a schermo la bici con peso minore.

var biciCorsaLista = [
    {
        nome: "trekEmonda",
        peso: 8
    },
    {
        nome: "tarmac",
        peso: 7
    },
    {
        nome: "giantTcr",
        peso: 9
    },
    {
        nome: "orbea",
        peso: 6
    },
    {
        nome: "marin",
        peso: 10
    }
];

// Stampare a schermo la bici con peso minore:

var biciSuperLeggera = biciCorsaLista[0];

for (var i = 0; i < biciCorsaLista.length; i++) {

    var bici = biciCorsaLista[i];
    
    if (bici["peso"] < biciSuperLeggera["peso"]) {
        biciSuperLeggera = bici;
    }
    
};

console.log("La bici più leggera è: ", biciSuperLeggera);

