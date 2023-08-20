// Password generator button

let button = document.querySelector('button');

// div to display password

let pass1 = document.querySelector('.pass-1');
let pass2 = document.querySelector('.pass-2');

const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

// function to generate password

// 15 random characters;
// while characters.length < 15; random[i].push

function randomGenerator() {
  let password1 = [];
  let password2 = [];

  // while loop to generate the password

  while (password1.length < 15) {
    let random = Math.floor(Math.random() * characters.length);
    password1.push(characters[random]);
  }
  while (password2.length < 15) {
    let random = Math.floor(Math.random() * characters.length);
    password2.push(characters[random]);
  }

  // putting the password in html
  // using the join method to convert the array to string

  pass1.textContent = password1.join('');
  pass2.textContent = password2.join('');
}
