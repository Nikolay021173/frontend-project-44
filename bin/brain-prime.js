#!/usr/bin/env node

import * as readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n !== 1;
};

const dialogWithTheUser = () => {
  console.log('brain-prime');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(2, 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && isPrime(num)) || (answer === 'no' && !isPrime(num))) {
      console.log('Correct!');
    } else if (answer === 'no' && isPrime(num)) {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log(`Let's try again, ${name}!`);
      return;
    } else if (answer === 'yes' && !isPrime(num)) {
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
