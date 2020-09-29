// We import (require) the function that we want to test.
const convertToString = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(convertToString([1, 2, 3, 4, 5])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);
  // add more tests here...
  expect(convertToString(["Peter", "Lois", "Chris", "Meg", "Stewie", "Brian"])).toStrictEqual([
    "Peter",
    "Lois",
    "Chris",
    "Meg",
    "Stewie",
    "Brian"
  ]);
  expect(convertToString([4, "Jack", 8, "Kate", 15, "John"])).toStrictEqual([
    "4",
    "Jack",
    "8",
    "Kate",
    "15",
    "John"
  ]);
  expect(convertToString([true, false, null, undefined, 88])).toStrictEqual([
    "true",
    "false",
    "",
    "",
    "88"
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
