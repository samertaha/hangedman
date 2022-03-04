https://github.com/zoro12/hangedman.git

1. npm install
2. node hangedman.js

this project will run on the command line console...
![Screenshot](Screenshot1.png)

How the app is working ?
first on line 8 "figlet...."
this library will draw the flash intro Asci text
then on line 71 setTimeout.. is used to run the
recursion function recursiveAsyncReadLine after
waiting 3 seconds, then the recursion will not stop
asking the user for input "Guessing the character"
till one of two conditions is true on line 58 if (guessed == randomWord)
means the user succeeded and guessed the word, the second condition
the app will exit also when the user fail to guess and consumed
the 10 max tries he owned before finding the word.

the infect function on line 34 is used to reveal only the correctly guessed
character that the user guessed in the password like displayed string,
also on line 25 i added a method to the String object prototype called it
replaceAt, this function can replace only one specified character giving its index
in the string and it was used on the infect function wich use it to replaced all the
occurrences of the guessed character found in the word.

THANKS.
