let readlineSync = require('readline-sync');

let alpha = /[a-z]/

function beginGame(){
  console.log("You wake up...");
  console.log("There's a crowd looking at you, there's a man next to you speaking...");
  console.log("You notice the noose around your neck as he says.");
  console.log("WELCOME TO HANGMAN! Guess the word to save your life...");

  let choices = ['cat 1', 'cat 2', 'cat 3'];
  let chances = 10;
  let continuePlaying = true;
  let userSelection;
  let userChoice;

  while (continuePlaying === true) {

    userSelection = categoryChoice(choice);

    //need to add if/else for win or lose chances
  }

}

function categoryChoice(value){
  userSelection = readLineSync.question('Your choice is? : ');
  userSelection = userSelection.toLowerCase();

  while(!value.inclues(userSelection)){
    console.log(`${userSelection} is not a valid answer...`)
    userSelection = readlineSync.question('Your choice is? : ')
  }
  console.log(userSelection);
  return userSelection;
}

beginGame()

function getUserChoice(){

  userChoice = readLineSync.question('guess a letter...: ');

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
function searchList(guessWords, wordArray, userChoice){
for (let i = 0; i < guessWords.length; i++){
  if(userChoice === wordArray[i]) {
    guessWords[i] = userChoice;
    console.log(guessWords[i]);
  }
}console.log(guessWords);

}

searchList(guessWords,wordArray,);


getUserChoice();

let wordsBank = ["hang", "man", "today"];

let randomWord = selectingWords(wordsBank)

let wordArray = randomWord.split('')
let guessWords = wordArray.map( x => '_');
