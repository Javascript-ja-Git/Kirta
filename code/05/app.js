// Ül 1 - pin check

/* const pin = (prompt('Palun sisesta PIN-kood: '));
const pinAsNumber = Number(pin);

if (pinAsNumber) {
    alert('Sisend on korrektne.')
} else {
    alert('Sisend on vale.')
}

console.log(pinAsNumber);*/

// Ül 2 - username and password check

/* const correctUsername = "admin";
const correctPassword = "1234";

const username = prompt("Sisesta kasutajanimi:");

if (username !== correctUsername) {
    alert("Vale kasutajanimi. Proovi uuesti.");
} else {
    const password = prompt("Sisesta parool:");
    
    if (password === correctPassword) {
        alert("Tere tulemast! Sisselogimine õnnestus.");
    } else {
        alert("Vale parool. Proovi uuesti.");
    }
} */

// 

// Ül 3 - kontrolli kas number on vahemikus 1 kuni 100

/* const number = prompt('Sisesta number:');

const numberAsNumber = Number(number);

if (numberAsNumber >= 1 && numberAsNumber <= 100) {
    alert('Number on vahemikus 1 kuni 100. ✓');
} else {
    alert('Number ei ole vahemikus 1 kuni 100. ✗');
}

console.log(`Sisestatud number: ${numberAsNumber}`); */

// Ül 4 - tegevused stringidega

/* const firstName = prompt('Sisesta eesnimi:');
// console.log(firstName.length);
for (let i = 0; i < firstName.length; i++) {
    console.log(firstName[i]);
} */

/* const allowedCarNumber = ["123EKL", "234EKL", "123ABC", "234BCD"];

/* alert(carNumber.toUpperCase());
alert(carNumber); */

/* const carNumber = prompt("Sisesta auto number:");
if (allowedCarNumber.includes(carNumber.toUpperCase())) {
    alert('Läbipääs lubatud.')
} else {
    alert('Läbipääs keelatud.')
} */

// Ül 5 - kontrolli kas sisestatud string on email

/* const email = prompt('Sisesta emaili aadress:');

if (email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.')) {
    alert('See on korrektne emaili aadress. ✓');
} else {
    alert('See ei ole korrektne emaili aadress. ✗');
}
*/

/* const numbers = [1, 4, 5, 7, 8, 2, 9];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2===(0)) {
        console.log('See on paarisarv.');
    } else {
        console.log('See on paaritu.');
    }
} */

// Küsi kasutajalt tema nimi ja kuva konsooli tähed ükshaaval nii, et iga teine täht on suurtäht (paarituarvulised ndeksid)

/* function kuvaNimiVahelduvaltSuurtetahtedega() {
    const nimi = prompt('Sisesta oma nimi:');
    
    for (let i = 0; i < nimi.length; i++) {
        if (i % 2 === 1) {
            console.log(nimi[i].toUpperCase());
        } else {
            console.log(nimi[i].toLowerCase());
        }
    }
}

kuvaNimiVahelduvaltSuurtetahtedega(); */

/* function randomNum() {
    const number = Math.floor(Math.random() * 6); // arvud vahemikus 0 - 5
    return number;
}

const counter = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 10000; i++) {
    const num = randomNum();
    counter[num]++;
}

console.log(counter); */
