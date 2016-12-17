function Handel() {
  function compose(input) {
    return {
      map: f => compose(f(input)),
      fold: f => f(input),
      inspect: () => `Handel(${input})`
    }
  }

  return {
    compose
  }
}

module.exports = Handel;
