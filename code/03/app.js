// Väljasta arvud 5 kuni 15

/* let i = 5;
while (i <15) {
    console.log(i);
    i++;
}

console.log(i); */

/* let a = 10;
for (let i = 5; i < 15; i++) {
    console.log(a);
}

console.log(i); */

/* for (let i = 0; i < 0; i++) {
    console.log('hello');
}

let i = 6;
do {
    console.log(i);
    i++;
} while (i <= 5); */

/* function triangleArea(base, height) {
    if (base < 0 || height < 0) {
        return 'Arvud peavad olema positiivsed';
    } else if (height <= 0) {
        return 'Kõik peavad olema positiivsed';
    }
        const area = (base * height) / 2;
        return area;
} */

/* function triangleArea(base, height) {
    if (base < 0 || height < 0) {
        return 'Arvud peavad olema positiivsed';
    }
        const area = (base * height) / 2;
        return area;
} */

/* function triangleArea(base, height) {
    if (base < 0 || height < 0) {
        return 'Arvud peavad olema positiivsed';
    }
        const area = (base * height) / 2;
        return area;
    }
    

console.log(triangleArea(5, 10));
console.log(triangleArea(8, 4));
console.log(triangleArea(-5, 10));
console.log(triangleArea(5, -10)); */

function greeting(name) {
    const message = 'Tere ' + name;                          
    console.log(message);
    return;
}

const result = greeting('John');

console.log(result);

