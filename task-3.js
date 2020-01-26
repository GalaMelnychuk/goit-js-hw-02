"use strict";

const findLongestWord = function (string) {
    const newArray = string.split(" ");
    const longestWord = newArray[0];

    for (let word of newArray) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'   