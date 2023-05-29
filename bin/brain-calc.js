#!/usr/bin/env node

import * as readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dialogWithTheUser = () => {
  console.log('brain-calc');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(0, 100);
    const num2 = getRandomInt(0, 100);
    const operators = ['+', '-', '*', '/'];
    const op = operators[Math.floor(Math.random() * operators.length)];
    let result;
    if (op === '/') {
      // eslint-disable-next-line no-eval
      result = eval(`${num1}${op}${num2}`).toFixed(2);
    } else {
    // eslint-disable-next-line no-eval
      result = eval(`${num1}${op}${num2}`);
    }
    console.log(`Question: ${num1} ${op} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === Number(answer) || result === Number(answer).toFixed(2)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

dialogWithTheUser();
