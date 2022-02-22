var figlet = require('figlet');
const { resourceLimits } = require('worker_threads');

figlet('Hanged Man', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
  }
  console.log(data);
});

var readline = require('readline');
const { isGeneratorFunction } = require('util/types');
var log = console.log;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

String.prototype.replaceAt = function (index, char) {
  var a = this.split('');
  a[index] = char;
  return a.join('');
};
const words = ['france', 'china', 'england', 'italy', 'unitedstates', 'spain'];
let randomWord = words[Math.floor(Math.random() * words.length)];

var recursiveAsyncReadLine = function (randomWord, guesses, guessed) {
  var infect = function (randomWord, guessed, answer) {
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === answer) {
        guessed = guessed.replaceAt(i, answer);
      }
    }
    return guessed;
  };
  console.log(`You have ${guesses} guesses`);
  console.log('The word is:');
  console.log(guessed);

  rl.question('What is your guess:', function (answer) {
    answer = answer.toLowerCase();
    console.log('\x1b[36m%s\x1b[0m', answer);
    if (answer.length > 1 || !/[a-zA-Z]/.test(answer))
      console.log(
        '\x1b[31m%s\x1b[0m',
        'Please enter only one alphabetic character'
      );
    else if (randomWord.includes(answer) && !guessed.includes(answer))
      guessed = infect(randomWord, guessed, answer);
    else guesses--;

    if (guessed == randomWord) {
      console.log('\x1b[32m%s\x1b[0m', randomWord);
      console.log('\x1b[32m%s\x1b[0m', 'Wow You are good!!!');
      return rl.close();
    } else if (guesses == 0) {
      console.log('\x1b[35m%s\x1b[0m', 'GAME OVER !!!');
      console.log('                ');
      return rl.close();
    }
    recursiveAsyncReadLine(randomWord, guesses, guessed);
  });
};

const myTimeout = setTimeout(() => {
  recursiveAsyncReadLine(randomWord, 10, randomWord.replace(/./g, '*'));
  clearTimeout(myTimeout);
}, 3000);
