const Handel = require('./Handel')();

const greeting1 = Handel.compose(['hello', 'world'])
  .map(s => (s.map(i => (i.toUpperCase()))))
  .map(s => (s.toString()))
  .fold(s => (s.replace(',',  ' ')));

console.log(greeting1);

const greeting2 = Handel.compose('hello world')
  .map(s => (s.toUpperCase()));

console.log(greeting2);

const greeting3 = Handel.compose('hello world')
  .fold(s => (s.toUpperCase()));

console.log(greeting3);
