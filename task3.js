//Напишите функцию mergeArrays, которая принимает произвольное количество массивов чисел и возвращает новый массив, содержащий все элементы переданных массивов, но без дубликатов.

//console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

const mergeArrays = (...arrays) => {
    return arrays.reduce((result, currentArray) => {
        currentArray.forEach(item => {
          if (!result.includes(item)) {
            result.push(item);
          }
        });
        return result;
    }, []);
}

console.log(mergeArrays([1, 2, 3], [3, 5, 7], [7, 1, 8], [9, 2, 4]));