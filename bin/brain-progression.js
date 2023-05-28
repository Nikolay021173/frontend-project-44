#!/usr/bin/env node

import * as readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dialogWithTheUser = () => {
  console.log('brain-progression');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arrGenerator = () => {
      const arr = [];
      let num = getRandomInt(0, 100);
      const n = getRandomInt(5, 10);
      const d = getRandomInt(1, 10);
      for (let j = 0; j < n - 1; j += 1) {
        if (j === 0) arr.push(num);
        arr.push(num += d);
      }
      arr[getRandomInt(0, n)] = '..';
      return arr;
    };

    const a = arrGenerator();
    const index = a.indexOf('..');

    const calcAnArrayElement = () => {
      if (index === 0) a[index] = a[index + 1] - ((a[index + 2] - a[index + 1]));
      else if (index === a.length - 1) a[index] = a[index - 1] + ((a[index - 1] - a[index - 2]));
      else a[index] = a[index - 1] + ((a[index + 1] - a[index - 1]) / 2);
      return a[index];
    };
    console.log(`Question: ${a}`);
    const answer = readlineSync.question('Your answer: ');
    if (calcAnArrayElement(a) === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${calcAnArrayElement(a)}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

dialogWithTheUser();
