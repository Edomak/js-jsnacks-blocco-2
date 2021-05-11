// Snack 3:

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 

// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numArray);

var middleArray = middleNumbers(numArray, 1, 7);
console.log(middleArray);

function middleNumbers (array, num1, num2) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (i > num1 && i < num2) {
            newArray.push(array[i - 1]);
        }
    }

    return newArray;
}

// newArray.push(array.slice(num1, num2)); // Soluzione con .slice()
