//Напишите функцию getPropertyValue, которая принимает объект и строку (имя свойства) и возвращает значение этого свойства из объекта. Если свойства нет, функция должна возвращать undefined
//console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
//console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
//console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell".

const getPropertyValue = (obj, sameParametr) => {
    return obj[sameParametr];
};