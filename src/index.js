import * as readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n !== 1;
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

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

const calcAnArrayElement = (arr) => {
  const index = arr.indexOf('..');
  if (index === 0) {
    // eslint-disable-next-line no-param-reassign
    arr[index] = arr[index + 1] - ((arr[index + 2] - arr[index + 1]));
  } else if (index === arr.length - 1) {
    // eslint-disable-next-line no-param-reassign
    arr[index] = arr[index - 1] + ((arr[index - 1] - arr[index - 2]));
  } else {
    // eslint-disable-next-line no-param-reassign
    arr[index] = arr[index - 1] + ((arr[index + 1] - arr[index - 1]) / 2);
  }
  return arr[index];
};

export const greeting = (nameGame) => {
  console.log(nameGame);
  console.log('Welcome to the Brain Games!');
};

// eslint-disable-next-line consistent-return
const even = (name) => {
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

// eslint-disable-next-line consistent-return
const calc = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(0, 100);
    const num2 = getRandomInt(0, 100);
    let result;
    const operators = ['+', '-', '*', '/'];
    const op = operators[Math.floor(Math.random() * operators.length)];
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
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

// eslint-disable-next-line consistent-return
const prime = (name) => {
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

// eslint-disable-next-line consistent-return
const progression = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const a = arrGenerator();
    console.log(`Question: ${a.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    const result = calcAnArrayElement(a);
    if (result === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

// eslint-disable-next-line consistent-return
const gcDivider = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(0, 100);
    const num2 = getRandomInt(0, 100);
    const result = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const brainGames = (ruleOfTheGame, game) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(ruleOfTheGame);
  // eslint-disable-next-line no-undef, default-case
  switch (game) {
    case 'brainEven':
      even(name);
      break;
    case 'brainCalc':
      calc(name);
      break;
    case 'brainPrime':
      prime(name);
      break;
    case 'brainProgression':
      progression(name);
      break;
    case 'brainGcd':
      gcDivider(name);
      break;
  }
};
