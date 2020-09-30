// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  expect(repeat(["word", 3])).toBe("wordwordword");
  expect(repeat([3, 3])).toBe("undefined");
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
