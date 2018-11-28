const ALL = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const solve = (allA, allB, allC, answer, func) => {
  console.log(`Solving ${func} for ${answer} with ${allA}, ${allB}, ${allC}`);
  allA.forEach(a => allB.forEach(b => allC.forEach((c) => {
    if (a === b || b === c || a === c) {
      return false
    }
    if (func(a, b, c) === answer) {
      console.log(a, b, c);
    }
  })))
}

const func = (a, b, c) => (a + b) * c

console.log('Expected?')

solve(
  [2, 4, 5, 8],
  [1, 2, 3],
  [2, 3, 4, 6, 8],
  24,
  func
)

console.log('Broader search')

solve(
  [2, 4, 5, 8],
  ALL,
  ALL,
  24,
  func
)

solve(
  ALL, ALL, [5], 80, (a, b, c) => (a+b)*c
)

solve([7, 9], [7, 8, 9], ALL, 102, (a, b, c) => (a + b) * c)