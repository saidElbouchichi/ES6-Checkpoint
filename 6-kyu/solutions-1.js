// Solutions CodeWars — niveau 6 kyu, partie 1/2 (JavaScript ES6)
// Profil : https://www.codewars.com/users/saidElbouchichi

// ------------------------------------------------------------
// Kata : Array.diff (6 kyu)
// https://www.codewars.com/kata/523f5d21c841566fde000009
const arrayDiff = (a, b) => a.filter((x) => !b.includes(x));

// ------------------------------------------------------------
// Kata : Bit Counting (6 kyu)
// https://www.codewars.com/kata/526571aae218b8ee490006f4
const countBits = (n) => [...n.toString(2)].filter((bit) => bit === '1').length;

// ------------------------------------------------------------
// Kata : Convert string to camel case (6 kyu)
// https://www.codewars.com/kata/517abf86da9663f1d2000003
const toCamelCase = (str) =>
  str.replace(/[-_](\w)/g, (_, letter) => letter.toUpperCase());

// ------------------------------------------------------------
// Kata : Counting Duplicates (6 kyu)
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
const duplicateCount = (text) => {
  const counts = {};
  for (const ch of text.toLowerCase()) counts[ch] = (counts[ch] || 0) + 1;
  return Object.values(counts).filter((c) => c > 1).length;
};

// ------------------------------------------------------------
// Kata : Create Phone Number (6 kyu)
// https://www.codewars.com/kata/525f50e3b73515a6db000b83
// Transforme un tableau de 10 chiffres en "(123) 456-7890".
const createPhoneNumber = (numbers) => {
  const n = numbers.join('');
  return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6)}`;
};

// ------------------------------------------------------------
// Kata : Detect Pangram (6 kyu)
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
const isPangram = (string) => {
  const letters = new Set(string.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
};

// ------------------------------------------------------------
// Kata : Sum of Digits / Digital Root (6 kyu)
// https://www.codewars.com/kata/541c8630095125aba6000c00
const digitalRoot = (n) =>
  n < 10 ? n : digitalRoot([...String(n)].reduce((sum, d) => sum + Number(d), 0));

// ------------------------------------------------------------
// Kata : Duplicate Encoder (6 kyu)
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
const duplicateEncode = (word) => {
  const lower = word.toLowerCase();
  return [...lower]
    .map((ch) => (lower.indexOf(ch) === lower.lastIndexOf(ch) ? '(' : ')'))
    .join('');
};

// ------------------------------------------------------------
// Kata : Find the odd int (6 kyu)
// https://www.codewars.com/kata/54da5a58ea159efa38000836
const findOdd = (A) => A.reduce((acc, n) => acc ^ n, 0);

// ------------------------------------------------------------
// Kata : Find The Parity Outlier (6 kyu)
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
const findOutlier = (integers) => {
  const evens = integers.filter((n) => n % 2 === 0);
  const odds = integers.filter((n) => n % 2 !== 0);
  return evens.length === 1 ? evens[0] : odds[0];
};
