/* const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Holiday"];

/* console.log(weekdays[0]);
console.log(weekdays[1]);
console.log(weekdays[2]);
console.log(weekdays[3]);
console.log(weekdays[4]);
console.log(weekdays[5]);
console.log(weekdays[6]); */

/* for (let i = 0; i < weekdays.length; i++) {
    console.log(weekdays[i]);
} */
/* const temperature = [12, 15, 18, 20, 22, 25, 28];

/* for (let i = 1; i < 5; i++) {
    const temp = Number(prompt('Mitu kraadi on hetkel temperatuur?'))
    temperature.push(temp)
} */

/* let sum = 0;

/* for (let i = 0; i < temperature.length; i++) {
    sum = sum + temperature[i]
    console.log(sum)
}

const average = sum / temperature.length;

console.log(average)
console.log(temperature[temperature.length - 1]) */






// Väljasta kõik hinnad koos käibemaksuga

/* const prices = [10, 20, 30, 40, 50];
const VAT = 0.20;

for (let i = 0; i < prices.length; i++) {
    console.log(prices[i] + prices[i] * VAT);
}
*/

// Kirjuta JS kood, mis loob massiivi, mis sisaldab 10 arvu. Kuva konsooli massiivi iga element, üksteise järel.

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
} */

// Väljasta kõik hinnad koos käibemaksuga

/* const prices = [10, 19, 35, 46, 52, 63, 78, 89, 90, 100];

for (let i = 0; i < prices.length; i = i + 2) {
    console.log(prices[i] * 1.24);
} */

/* let k = 'wednesday'

k = 'wednesday';

console.log(k); */

/* const k = 'wednesday';

k = 'thursday';

console.log(k);

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Holiday"];

console.log(weekdays[2]); */

// ---

// Math objekt

// console.log(Math.PI);

/* const sales = [10, 5, 15, 20];

const randomNumber = Math.ceil(Math.random() * 4) - 1;

console.log(sales[randomNumber]); */

// Funktsioon, mis tagastab arvud vahemikus 1 - 6

/* const number = 6;

function dice() {
    const randomNumber = Math.ceil(Math.random() * number);
    return randomNumber
}

// const maxNumber = Number(prompt('Palun sisesta maksimaalne juhuarv'));

// console.log(dice(maxNumber));

const names = ['Kati', 'Mati', 'Kalle', 'Juhan', 'Koju'];

const randomNumber = dice(names.length);

console.log(names[randomNumber - 1]); */

/* const nimed = ['Kati', 'Mati', 'Kalle', 'Juhan', 'Kaja'];

for (let i = 0; i < nimed.length; i++) {
    console.log(nimed[i]);
} */

function logElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return array.length;
}

const names = ['Kirta', 'Laura', 'Robin', 'Java', 'Luna'];
const numbers = [1, 2, 3, 4, 5, 6];

logElements(names);
const result = logElements(numbers);
console.log(result);



