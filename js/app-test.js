'use strict';

let userName = prompt('What\'s your name?');

let counter = 0;

let fakeStudents = ['Alex', 'Dajon', 'Dasha', 'Nicholas', 'Reece', 'Ryans'];

for (let i = 0; i < 6; i++) {

  let answerSeven = prompt('Which ones of the classmates in the list are actually staffs, pretending to be students? .... Alex, Dajon, Dasha, Nicholas, Reece, Ryans, Laurence.').toLowerCase();

  for (let j = 0; j < fakeStudents.length; j++) {
    if (answerSeven === fakeStudents[j]) {
      alert('Obviously, eh? Who else?');

      break;
    }
  }
}
alert('Alex, Dajon, Dasha, Nicholas, Reece, or Ryans is correct');

alert(`Thank for visiting my site ${userName}. You got ${counter} idol points with the questions.`);


// let answerSeven = [];
// answerSeven.push(prompt('Which ones of the classmates in the list are actually staffs, pretending to be students? .... Alex, Dajon, Dasha, Nicholas, Reece, Ryan, Laurence.').toLowerCase());

// let userGuess = 5;
// while (1 <= userGuess) {
//   userGuess--;
//   answerSeven.push(prompt('Type another name.').toLowerCase());
//   console.log('guess', answerSeven);
// }
// for (let i = 0; i < answerSeven.length; i++) {
//   if (answerSeven[i] === 'Alex' || answerSeven[i] === 'dajon' || answerSeven[i] === 'dasha' || answerSeven[i] === 'nicholas' || answerSeven[i] === 'reece' || answerSeven[i] === 'ryan') {
//     alert('Alex, Dajon, Dasha, Nicholas, Reece, or Ryans is correct.');
//     counter++;
//   } else if (answerSeven[i] !== randoStrNum) {
//     alert('Your guess of ${answerSeven[i] was not right.');
//   }
// }



// alert(`Thank for visiting my site ${userName}. You got ${counter} idol points with the questions.`);
