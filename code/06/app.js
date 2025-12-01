// Massiivi mingi objekti kirjeldamiseks

/* const tvs = [
    [86, 'Android', 100, 40],
    [52, 'Apple', 89, 30],
    [62, 'Sasung', 120, 35]
];

for(let i = 0; i < tvs.length; i++) {
    console.log(tvs[i]);
} */

/* const tv = {
    diagonal: 52,
    brand: "Apple",
    powerConsumtion: 100,
    weight: 40
};

const user = {
    email: "test@test.ee",
    firstName: "Kirta",
    lastName: "Karits",
    yearOfBirth: 1989
};

console.log(tv.brand); */

/* const tvs = [
    {
        diagonal: 52,
        brand: "Apple",
        powerConsumtion: 100,
        weight: 40
    },
    {
        diagonal: 62,
        brand: "Sasung",
        powerConsumtion: 120,
        weight: 35
    },
    {
        diagonal: 86,
        brand: "Android",
        powerConsumtion: 100,
        weight: 40
    }
];

for(let i = 0; i < tvs.length; i++) {
    console.log(tvs[i]);
}

console.log(tvs[0].weight) */

function changeTitle() {
    let text = document.getElementById('title-input').value.trim();
    if (text === '') {
        text = 'Kuues loeng';
    }
    const title = document.getElementById('title');
    title.style.color = 'red';  // Set color before changing the innerHTML
    title.innerHTML = text;
}

function changeSubTitle() {
    console.log(document.getElementById('sub-title').innerHTML = 'Uus alam pealkiri');
}


