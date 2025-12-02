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
    const titleInput = document.getElementById('text-title-input');
    const colorPicker = document.getElementById('color-picker');
    const title = document.getElementById('title');
    
    const newText = titleInput.value.trim() || 'Kuues loeng';
    
    title.textContent = newText;
    title.style.color = colorPicker.value;
}

function changeSubTitle() {
    let text = document.getElementById('text-sub-title-input').value;
    if (text === '') {
        text = 'Teine pealkiri';
    }
    document.getElementById('sub-title').textContent = text;
}

function login() {
    const pinInput = document.getElementById('pin');
    const status = document.getElementById('staatus');
    
    if (/^\d{4}$/.test(pinInput.value)) {
        if (pinInput.value === '1234') {
            status.textContent = 'Sisse logitud';
            status.style.color = 'green';
        } else {
            status.textContent = 'Vale PIN';
            status.style.color = 'red';
            pinInput.value = '';
            pinInput.focus();
        }
    } else {
        status.textContent = 'Palun sisesta 4-kohaline number';
        status.style.color = 'orange';
        pinInput.value = '';
        pinInput.focus();
    }
}
