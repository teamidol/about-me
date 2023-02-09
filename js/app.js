'use strict';
let counter = 0
// vvvvvvvvvvvvvvvvvv ( class 02 ) vvvvvvvvvvvvvvvvvv
// get username, prompt
let userName = prompt ('Hey, what\'s your name?');
alert('Please keep calm, ' + userName + '.');



// 5  yes/no questions with alert if correct or incorrect

let answerOne = prompt ('Did you know I can read minds? yes/no').toLowerCase();
// console.log(answerOne);
if (answerOne === 'yes' || answerOne === 'y'){
  alert ('You\'re right!');
  counter++;
} else alert('Uh, you\'d be wrong... coz I can.' );

let answerTwo = prompt ('Do you wish you\'re awesome? y/n').toLowerCase();
// console.log(answerOne);
if (answerTwo === 'yes' || answerTwo === 'y'){
  alert ('Of course, you do.');
  counter++;
} else alert('I can read your mind. No, you wish you\'re awesome.');

let answerThree = prompt ('Do you want to be like me? y/n').toLowerCase();
// console.log(answerOne);
if (answerThree === 'yes' || answerThree === 'y'){
  alert ('You\'re smart.');
  counter++;
} else alert('Don\'t be condescending of my greatness.');

let answerFour = prompt ('Are you a big fan of mine? y/n').toLowerCase();
// console.log(answerOne);
if (answerFour === 'yes' || answerFour === 'y'){
  alert ('Yeah, I know.');
  counter++;
} else alert('No, you are. I can read "Laurence Fan" on your forehead.');

let answerFive = prompt ('Am I your favorite idol of all? y/n').toLowerCase();
// console.log(answerOne);
if (answerFive === 'yes' || answerFive === 'y'){
  alert (`Yeah you have taste, ${userName}.`);
  counter++;
} else alert(`"No way, I\'m in Laurence\'s site..." ${userName}! Wow, you\'re like star-struck.`);

//alert final message with username

// ^^^^^^^^^^^^^  ( class02 )  ^^^^^^^^^^^^

//vvvvvvvvvvvv  ( class03 instr 2) vvvvvvvvvvvvvvv



// questionSix() needs debugging as it won't proceed after correct answer


function questionSix() {
  let maxNumberOfAnswer = 0;
  while (maxNumberOfAnswer < 4) {
    let answerSix = prompt('Of 9 children what number am I?');
    let answerSixB = parseInt(answerSix);
    console.log(answerSixB);


    if (answerSixB < 2) {
      alert('It\'s higher. You have a total of 4 tries.');
    } else if (answerSixB > 2) {
      alert('It\'s lower. You have a total of 4 tries.');
    } else {
      alert('You\'re such a big fan of mine.');
      counter++;
      break;
    }
    maxNumberOfAnswer++;
  
  }
  // if statment here
  if ( maxNumberOfAnswer === 4){
    alert('You\'re gibberish, star-struck fan. Answer is 2.');

  }

}

questionSix();




// vvvvvvvvvvvvvvvv (my class 3 instr 3) vvvvvvvvvvvvvv

// let fakeStudents = [nicholas, dasha, reece, ryan, dajon, laurence];

// let actualStaffs = ['nicholas', 'dasha', 'reece', 'ryan', 'dajon'];

// for( let i = 0; i < 6; i++ ){
//   if(answerSeven == actualStaffs){
//     alert('So obvious.');
//   } else {
//     alert('Try again.');
//   }
// }
//                              ( start )
let answerSeven = [];
answerSeven.push(prompt('Which ones of the classmates in the list are actually staffs, pretending to be students? .... Dajon, Dasha, Nicholas, Reece, Ryan, Laurence.').toLowerCase());

let userGuess = 5;
while (1 <= userGuess) {
  userGuess--;
  answerSeven.push(prompt('Type another name.').toLowerCase());
  console.log('guess', answerSeven);
}
for (let i = 0; i < answerSeven.length; i++) {
  if (answerSeven[i] === 'dajon' || answerSeven[i] === 'dasha' || answerSeven[i] === 'nicholas' || answerSeven[i] === 'reece' || answerSeven[i] === 'ryan') {
    alert('Dajon, Dasha, Nicholas, Reece, or Ryans is correct.');
    counter++;
  } else if (answerSeven[i] !== randoStrNum) {
    alert('Your guess of ${answerSeven[i] was not right.');
  }
}



alert(`Thank for visiting my site ${userName}. You got ${counter} idol points with the questions.`);

//                                ( end )

// ^^^^^^^^^^^^^^^^^^^ (my class3 instr 3) ^^^^^^^^^^^^^

//vvvvvvvvvvvvv ( cam code class 3 instr 3) vvvvvvvvvvvvvvvvv

// // Guess words from user array loop
// let userGuessArray2 = [];
// userGuessArray2.push(prompt('Guess two names I go by other than Cameron Griffin, you get 6 guesses. Then I will let you know if any were right!').toLowerCase());
// //The number of guesses given to the user

// let numOfGuess2 = 5;
// // 1st attempt at While loop to iterate through the guesses
// while(1 <= numOfGuess2){
//   numOfGuess2--;

//   userGuessArray2.push(prompt(`Keep guesing, you have ${numOfGuess2} guesses left, guess again.`).toLowerCase());
//   console.log('guess:', userGuessArray2);
// }
// //Alert For user feedback
//                                     //   (tmp bkmk)
// for(let i = 0; i < userGuessArray2.length; i++) {
//   if (userGuessArray2[i] === 'cam'){
//     alert (`Cam Was a correct one`);
//     count++;
//   }else if(userGuessArray2[i] === 'grif'){
//     alert (`Grif Was a correct one`);
//   }else if(userGuessArray2[i] !== randoStrNum) {
//     alert(`Your guess of ${userGuessArray2[i]} was wrong`);
//   }
// }

//^^^^^^^^^^^^^^ (cam code class 3 instr 3) ^^^^^^^^^^^^^





// vvvvvvvvvvv (dajon code class 3 instr 3)vvvvvvvvvvvvvv
// let answer7 = ['yellow','orange'];
// let score = 0;
// for(let i = 0; i < 6; i++){

//   let guess7 = prompt('What color is the 3rd and 5th fret button on a guitar hero controller? Green? Yellow? Red? Blue? White? or Orange?').toLowerCase();
//   for(let j = 0; j < answer7.length; j++){
//     if (answer7[j] === guess7){
//       alert('You are correct');
//       score++;
//       i = 6;
//       break;
//     }
//   }
//   score++;

// }
// alert(`It took you ${score} times to answer. The correct answers were ${answer7}. `);

// alert('Thanks for playing ' + userName + ' your overall score was ' + counter + ' out of 7');

//^^^^^^^^^^^^^^ (dajon code class 3 instr 3) ^^^^^^^^^^^^^^

