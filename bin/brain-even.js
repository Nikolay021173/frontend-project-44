#!/usr/bin/env node

import * as readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dialogWithTheUser = () => {
  console.log('brain-even');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(0, 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if ((num % 2 === 0 && answer === 'no')) {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log(`Let's try again, ${name}!`);
      return;
    } else if ((num % 2 !== 0 && answer === 'yes')) {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${name}!`);
      return;
    } else {
      console.log("input error!!!!\nAs an answer, you have to enter 'yes' or 'no'.");
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

dialogWithTheUser();
