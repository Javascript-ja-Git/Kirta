// Tervituse programm

/* const name = prompt('Sisesta oma nimi');

alert('Tere ' + name); */

// Vanuse programm

/* const dateOfBirth = prompt('Sisesta oma sünniaasta');

const currentYear = 2025;

const age = currentYear - dateOfBirth;

alert('Sinu vanus on ' + (age) + ' aastat'); */

/* const pikkus = prompt('Sisesta pikkus: ');
const laius = prompt('Sisesta laius: ');

const pindala = pikkus * laius;

alert('Ristküliku pindala on ' + pindala + ' ruutmeetrit'); */

/* const celsiusTemp = prompt('Sisesta temperatuur Celsius kraadides: ');

const fahrenheitTemp = celsiusTemp * 1.8 + 32;

alert(celsiusTemp + ' Celsiuse kraadi on ' + fahrenheitTemp + ' Fahrenheiti kraadi'); */

// Teine versioon

/* const C = prompt('Sisesta temperatuur Celsius kraadides: ');

const F = C * 1.8 + 32;

alert('Temperatuur Fahrenheit skaalal on: ' + F); */

// Tingimuslaused

// const color = prompt('Mis värvi on foori tuli?');

/* if (color === 'roheline') {
    alert('Liigu!');
} else (color === 'punane'); {
    alert('Ära liigu!');
} */

/* if (color === 'roheline') {
    alert('Võid üle tee minna!');   
} else if (color === 'kollane') {
    alert('Pead veel tükk aega ootama!');   
} else if (color === 'punane') {
    alert('Oota veel pisut!');
} else {
    alert('See ei ole foori tule värv!');
} */

// Parooli küsimine ja kontrollimine

/* const password = prompt('Sisesta parool: ');

const existingPassword = '123456';

if (password !== existingPassword) {
    alert('Parool on vale!');
} else {
    alert('Parool on õige!');
} */    

// Vanuse kontroll

/* const age = prompt('Sisesta oma vanus: ');

if (age >= 18) {
    alert('Oled täisealine!');
} else {
    alert('Oled alaealine!');
}
*/

// Tüübiteisendus / type casting

/* const age = Number(prompt('Sisesta oma vanus: '));  

alert(typeof age); */

// Kalkulaator

/* const arv1 = Number(prompt('Sisesta esimene arv: '));
const arv2 = Number(prompt('Sisesta teine arv: '));

const operator = prompt('Sisesta tehe: +, -, *, /'); */

/* if (operator === '+') {
    alert(arv1 + arv2);
} else if (operator === '-') {
    alert(arv1 - arv2);
} else if (operator === '*') {
    alert(arv1 * arv2);
} else if (operator === '/') {
    alert(arv1 / arv2);
} else {
    alert('See ei ole kehtiv tehe!');
} */

// Tsüklid

// i = 10; i < 10; i++ (i väärtus suureneb  võrra)

/*for (let i = 0; i < 10; i++) {
    console.log(i);
}   

for (let index = 0; index < 11; index++) {
    console.log(index);
} */

/* const count = 11;

for (let index = 1; index < count; index = index + 1) {
    console.log('1 * ', index, '=', 1 * index);
} */

// Korrutustabel

const count = 11;

for (let index = 1; index < count; index = index + 1) { 
    for (let j = 1; j < count; j = j + 1) {
        console.log(index + ' * ' + j + ' = ' + index * j);
    }
}
    