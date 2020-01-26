"use strict";

let input;
let numbers = [];
let total = 0;

do {
    input = prompt('Пожалуйста, введите число!');
    numbers.push(Number(input));
    console.log(numbers);
} while (input !== null);

const add = function (array) {

    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total;
}

if (numbers = [0]) {
    console.log(`число!!!!`)
} else {
    console.log(`Общая сумма чисел равна ${add(total)}`)
}