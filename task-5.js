"use strict";

const checkForSpam = function(message) {
   const lowerMessage = message.toLowerCase();
   const forbiddenWord1 = 'spam';
   const forbiddenWord2 = 'sale';
    return (lowerMessage.includes(forbiddenWord1) || lowerMessage.includes(forbiddenWord2));
}


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true