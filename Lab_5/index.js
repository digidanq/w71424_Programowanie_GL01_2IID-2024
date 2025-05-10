// Zadanie 1

// function checkAge(){
//     const age = Number(prompt("Enter your age: "));
//     console.log(age >= 18 ? "Jest pełnoletni." : "Jest niepełnoletni.");
// }
// checkAge()


// Zadanie 2

// function konwersja(){
//     const cel = parceInt(promt("Podaj stopni Celsjusza: "));
//     console.log("Stopnie Fahrenheita: " + ((cel * 1,8) + 32));
// }
// konwersja()


// Zadanie 3
// 3.1
let numbers = [5, 12, 7, 20, 8, 3];

//3.2
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Suma: ", sum);

//3.3
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Liczby parzyste: ", evenNumbers);

//3.4
let tripled = numbers.map(num => num * 3);
console.log("Pomnożone razy: ", tripled);

//3.5
let albumNumber = 71424;
numbers.push(albumNumber);
let albumIndex = numbers.indexOf(albumNumber);
console.log("Nowa tablica: ", numbers);
console.log("Index numer albumu: ", albumIndex);

//3.6
let average = numbers.reduce((acc, val) => acc + val, 0);
console.log("Średnia arytmetyczna: ", average);

//3.7
let max = Math.max(...numbers);
console.log("Największa liczba: ", max);

//3.8
let valueToCount = 12;
let count = numbers.filter(num => num === valueToCount).length;
console.log(`Liczba wystąpień ${valueToCount}: `, count);


// Zadanie 4

// const fib = [0, 1];

// for(let i = 2; i <= 100; i++) {
//     fib.push(fib[i - 2] + fib[i - 1]);
// };

// console.log(fib);