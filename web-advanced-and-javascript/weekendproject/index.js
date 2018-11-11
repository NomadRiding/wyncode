let readlineSync = require('readline-sync');
let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function getUserChoice(values){
  userChoice = readLineSync.question('guess a letter...');
  userChoice = userChoice.toLowerCase();

//User will choose letters of the alphabet

while (!values.includes(alpha)){
  console.log(`${userChoice} doesn't seem to be a LETTER... learn your alphabet and try again! `)
  userChoice = readLineSync.question('guess a letter...');
}
console.log(userChoice);
return userChoice;
}

function selectingWords(words){
  let wordBankIndex = Math.floor(Math.random() * words.length);
  let word = words[wordBankIndex];

  return word;
}

let wordsBank = ["hang", "man", "today"];

let randomWord = selectingWords(wordsBank)

let wordArray = randomWord.split('')
