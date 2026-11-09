// Solutions CodeWars — niveau 6 kyu, partie 2/2 (JavaScript ES6)
// Profil : https://www.codewars.com/users/saidElbouchichi

// ------------------------------------------------------------
// Kata : Multiples of 3 or 5 (6 kyu)
// https://www.codewars.com/kata/514b92a657cdc65150000006
const solution = (number) => {
  if (number < 0) return 0;
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
};

// ------------------------------------------------------------
// Kata : Does my number look big in this? (6 kyu)
// https://www.codewars.com/kata/5287e858c6b5a9678200083c
const narcissistic = (value) => {
  const digits = [...String(value)];
  const sum = digits.reduce((acc, d) => acc + Number(d) ** digits.length, 0);
  return sum === value;
};

// ------------------------------------------------------------
// Kata : Persistent Bugger. (6 kyu)
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
const persistence = (num) => {
  let steps = 0;
  while (num >= 10) {
    num = [...String(num)].reduce((prod, d) => prod * Number(d), 1);
    steps++;
  }
  return steps;
};

// ------------------------------------------------------------
// Kata : Replace With Alphabet Position (6 kyu)
// https://www.codewars.com/kata/546f922b54af40e1e90001da
const alphabetPosition = (text) =>
  [...text.toLowerCase()]
    .filter((ch) => ch >= 'a' && ch <= 'z')
    .map((ch) => ch.charCodeAt(0) - 96)
    .join(' ');

// ------------------------------------------------------------
// Kata : Stop gninnipS My sdroW! (6 kyu)
// https://www.codewars.com/kata/5264d2b162488dc400000001
const spinWords = (string) =>
  string
    .split(' ')
    .map((word) => (word.length >= 5 ? [...word].reverse().join('') : word))
    .join(' ');

// ------------------------------------------------------------
// Kata : Take a Ten Minutes Walk (6 kyu)
// https://www.codewars.com/kata/54da539698b8a2ad76000228
const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;
  const count = (dir) => walk.filter((d) => d === dir).length;
  return count('n') === count('s') && count('e') === count('w');
};

// ------------------------------------------------------------
// Kata : Tribonacci Sequence (6 kyu)
// https://www.codewars.com/kata/556deca17c58da83c00002db
const tribonacci = (signature, n) => {
  const result = signature.slice(0, n);
  while (result.length < n) {
    const [a, b, c] = result.slice(-3);
    result.push(a + b + c);
  }
  return result;
};

// ------------------------------------------------------------
// Kata : Unique In Order (6 kyu)
// https://www.codewars.com/kata/54e6533c92449cc251001667
const uniqueInOrder = (iterable) =>
  [...iterable].filter((item, i, arr) => item !== arr[i - 1]);

// ------------------------------------------------------------
// Kata : Who likes it? (6 kyu)
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
const likes = (names) => {
  const [a, b, c] = names;
  switch (names.length) {
    case 0: return 'no one likes this';
    case 1: return `${a} likes this`;
    case 2: return `${a} and ${b} like this`;
    case 3: return `${a}, ${b} and ${c} like this`;
    default: return `${a}, ${b} and ${names.length - 2} others like this`;
  }
};

// ------------------------------------------------------------
// Kata : Your order, please (6 kyu)
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
const order = (words) =>
  words
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ');
