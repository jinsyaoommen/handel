const Handel = input => ({
  map: f => Handel(f(input)),
  fold: f => f(input),
  inspect: () => `Handel(${input})`
});

module.exports = Handel;
