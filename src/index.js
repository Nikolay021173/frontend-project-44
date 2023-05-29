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

export const greeting = () => {
  console.log('brain-even');
  console.log('Welcome to the Brain Games!');
};

export const brainEven = () => {
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

export const brainCalc = () => {
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

export const brainPrime = () => {
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

export const brainProgression = () => {
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

export const brainGcd = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
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