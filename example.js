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

function findSlogan(name) {
  const states = {
    oregon: 'We Love Dreamers',
    washington: 'The Evergreen State',
    california: 'The Golden State'
  };
  return Handel.fromNullable(states[name]);
}

const slogan = findSlogan('oregon')
  .fold(e => 'undefined', c => c.toUpperCase());

console.log(slogan);
