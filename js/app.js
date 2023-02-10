'use strict';

let counter = 0

let userName = prompt('Hey, what\'s your name?');
alert('Please keep calm, ' + userName + '.');



let answerOne = prompt('Did you know I can read minds? yes/no').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  alert('You\'re right!');
  counter++;
} else alert('Uh, you\'d be wrong... coz I can.');

let answerTwo = prompt('Do you wish you\'re awesome? y/n').toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('Of course, you do.');
  counter++;
} else alert('I can read your mind. No, you wish you\'re awesome.');

let answerThree = prompt('Do you want to be like me? y/n').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  alert('You\'re smart.');
  counter++;
} else alert('Don\'t be condescending to yourself and rationalize because of my greatness.');

let answerFour = prompt('Are you a big fan of mine? y/n').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  alert('Yeah, I know.');
  counter++;
} else alert('Nah, you actually are. I can read "Laurence Fan" on your forehead.');

let answerFive = prompt('Am I your favorite idol of all? y/n').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  alert(`Yeah you have taste, ${userName}.`);
  counter++;
} else alert(`"No... way, I\'m in Laurence\'s site... " ${userName}! Wow, you\'re like star-struck.`);



function secondChild() {
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

  if (maxNumberOfAnswer === 4) {
    alert('You\'re gibberish, star-struck fan. Answer is 2.');

  }

}

secondChild();



let fakeStudents = ['alex', 'dajon', 'dasha', 'nicholas', 'reece', 'ryans'];

for(let i = 0; i < 6; i++) {

  let answerSeven = prompt('Which ones of the classmates in the list are actually staffs, pretending to be students? .... Alex, Dajon, Dasha, Nicholas, Reece, Ryans, Laurence.').toLowerCase();

  for(let j = 0; j < fakeStudents.length; j++){
    if(answerSeven === fakeStudents[j]) {
      alert('Yup... obviously bad acting.');
      counter++;
    }
  }
}

alert('Alex, Dajon, Dasha, Nicholas, Reece, or Ryans is correct');

alert(`Thank for visiting my site  ${userName}. You got ${counter} idol points for your answers.`);

