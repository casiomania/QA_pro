function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
      result *= x;
    }
    return result;
  }

console.log( pow(2, 3) )