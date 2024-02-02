//Напишите функцию findLongestWord, которая принимает массив строк и возвращает самую длинную строку в массиве.
//console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
//console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
//console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

const findLongestWord = (array) => {
    let longestWord = '';
    for (const word of array) {
        if (word.length > longestWord.length) {
            longestWordWord = word;
        }
    }
    return longestWord;
};