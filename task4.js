//Напишите функцию hasProperty, которая принимает объект и строку (имя свойства) в качестве аргументов и возвращает true, если объект содержит свойство с данным именем, иначе false.
//console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
//console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
//console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true

const hasProperty = (obj, sameParametr) => {
return obj.hasOwnProperty(sameParametr);
};

//Вроде так
