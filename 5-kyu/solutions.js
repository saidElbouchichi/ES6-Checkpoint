// Solutions CodeWars — niveau 5 kyu (JavaScript ES6)
// Profil : https://www.codewars.com/users/saidElbouchichi

// ------------------------------------------------------------
// Kata : Extract the domain name from a URL (5 kyu)
// https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = (url) =>
  url.replace(/^(https?:\/\/)?(www\.)?/, '').split('.')[0];

// ------------------------------------------------------------
// Kata : Human Readable Time (5 kyu)
// https://www.codewars.com/kata/52685f7382004e774f0001f7
const humanReadable = (seconds) => {
  const pad = (n) => String(n).padStart(2, '0');
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor((seconds % 3600) / 60);
  const ss = seconds % 60;
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
};

// ------------------------------------------------------------
// Kata : Maximum subarray sum (5 kyu)
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
const maxSequence = (arr) => {
  let best = 0;
  let current = 0;
  for (const n of arr) {
    current = Math.max(0, current + n);
    best = Math.max(best, current);
  }
  return best;
};

// ------------------------------------------------------------
// Kata : Moving Zeros To The End (5 kyu)
// https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = (arr) => [
  ...arr.filter((x) => x !== 0),
  ...arr.filter((x) => x === 0),
];

// ------------------------------------------------------------
// Kata : RGB To Hex Conversion (5 kyu)
// https://www.codewars.com/kata/513e08acc600c94f01000001
const rgb = (...values) =>
  values
    .map((v) => Math.min(255, Math.max(0, Math.round(v))))
    .map((v) => v.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();

// ------------------------------------------------------------
// Kata : Simple Pig Latin (5 kyu)
// https://www.codewars.com/kata/520b9d2ad5c005041100000f
const pigIt = (str) =>
  str
    .split(' ')
    .map((word) => (/^[a-z]+$/i.test(word) ? `${word.slice(1)}${word[0]}ay` : word))
    .join(' ');

// ------------------------------------------------------------
// Kata : The Hashtag Generator (5 kyu)
// https://www.codewars.com/kata/52449b062fb80683ec000024
const generateHashtag = (str) => {
  const words = str.split(' ').filter(Boolean);
  if (words.length === 0) return false;
  const tag = '#' + words.map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join('');
  return tag.length > 140 ? false : tag;
};
