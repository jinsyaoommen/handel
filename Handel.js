function Handel() {
  function compose(input) {
    return {
      map: f => compose(f(input)),
      fold: f => f(input),
      inspect: () => `compose(${input})`
    }
  }

  function right(input) {
    return {
      map: f => right(f(input)),
      fold: (f, g) => g(input),
      inspect: () => `right(${input})`
    }
  }

  function left(input) {
    return {
      map: f => left(input),
      fold: (f, g) => f(input),
      inspect: () => `left(${input})`
    }
  }

  function fromNullable(input) {
    return input != null ? right(input) : left(null);
  }

  return {
    compose,
    right,
    left,
    fromNullable
  }
}

module.exports = Handel;
