'use strict';

// get username, prompt
let userName = prompt ('Hey, what\'s your name?');
alert('Please keep calm, ' + userName + '.');



// 5  yes/no questions with alert if correct or incorrect

let answerOne = prompt ('Did you know I can read minds? yes/no').toLowerCase();
// console.log(answerOne);
if (answerOne === 'yes' || answerOne === 'y'){
  alert ('You\'re right!');
} else alert('Uh, you\'d be wrong... coz I can.' );

let answerTwo = prompt ('Do you wish you\'re awesome? y/n').toLowerCase();
// console.log(answerOne);
if (answerTwo === 'yes' || answerTwo === 'y'){
  alert ('Of course, you do.');
} else alert('I can read your mind. No, you wish you\'re awesome.');

let answerThree = prompt ('Do you want to be like me? y/n').toLowerCase();
// console.log(answerOne);
if (answerThree === 'yes' || answerThree === 'y'){
  alert ('You\'re smart.');
} else alert('Don\'t be condescending of my greatness.');

let answerFour = prompt ('Are you a big fan of mine? y/n').toLowerCase();
// console.log(answerOne);
if (answerFour === 'yes' || answerFour === 'y'){
  alert ('Yeah, I know.');
} else alert('No, you are. I can read "Laurence Fan" on your forehead.');

let answerFive = prompt ('Am I your favorite idol of all? y/n').toLowerCase();
// console.log(answerOne);
if (answerFive === 'yes' || answerFive === 'y'){
  alert (`Yeah you have taste, ${userName}.`);
} else alert(`"No way, I\'m in Laurence\'s site..." ${userName}! Wow, you\'re so star-struck.`);



// alert final message with username

