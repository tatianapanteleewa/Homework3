// задание 1

let password = 'пароль';
let userPassword = prompt('Введите пароль');

let message;

message = (userPassword === password) ? 'Пароль введен верно' : 'Пароль введен неправильно';

alert(message);

// задание 2

let c = Number(prompt('Введите число'));

if (c > 0 && c < 10) {
    console.log('Верно');

} else {
    console.log('Неверно');
}

// задание 3

let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 4

let a = '2';
let b = '3';

let sum = Number(a) + Number(b);

alert(sum);

// задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1:
        alert('Сезон - зима');
        break;
    case 2:
        alert('Сезон - зима');
        break;
    case 3:
        alert('Сезон - весна');
        break;
    case 4:
        alert('Сезон - весна');
        break;
    case 5:
        alert('Сезон - весна');
        break;
    case 6:
        alert('Сезон - лето');
        break;
    case 7:
        alert('Сезон - лето');
        break;
    case 8:
        alert('Сезон - лето');
        break;
    case 9:
        alert('Сезон - осень');
        break;
    case 10:
        alert('Сезон - осень');
        break;
    case 11:
        alert('Сезон - осень');
        break;
    case 12:
        alert('Сезон - зима');
        break;
    default: alert('Введено неверное значение')
        break;
}

// задание 7

let userNumber = prompt('Пожалуйста, введите любое число');

let check = isNaN(userNumber);

if (check === false) {
    if (userNumber % 2 === 0) {
        alert('Число чётное');
    } else {
        alert('Число нечётное');
    }
} else {
    alert('Введено неверное значение');
}

// задание 8,9 

let clientOS = Number(prompt('Введите 0, если Ваша операционная система iOS и 1, если Android'));
let clientDeviceYear = Number(prompt('Укажите год выпуска телефона'));

switch (clientOS) {
    case 0 && clientDeviceYear < 2015:
        console.log('«Установите облегченную версию приложения для iOS по ссылке»');
        break;
    case 1 && clientDeviceYear < 2015:
        console.log('«Установите облегченную версию приложения для Android по ссылке»');
        break;
    case 0:
        console.log('«Установите версию приложения для iOS по ссылке»');
        break;
    case 1:
        console.log('«Установите версию приложения для Android по ссылке»');
        break;
    default:
        console.log('«Введено неверное значение»');
        break;
}


