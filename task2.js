//Напишите функцию sumUniqueNumbers, которая принимает массив чисел и возвращает сумму всех уникальных чисел в массиве. Уникальные числа - те, что встречаются в массиве всего один раз. 
//console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
//console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
//console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

const sumUniqueNumbers = (array) => {
    let uniqueNumber = [];
    let sum = 0;
    for (let numbers of array) {
        if (!uniqueNumber.includes(numbers)) {
            uniqueNumber.push(numbers);
            sum += numbers;
        }
    }
    return sum;
}

console.log(sumUniqueNumbers([1, 6, 1, 8, 12]));