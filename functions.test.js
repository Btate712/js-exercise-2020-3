const functions = require("./functions");

test("multiMultiply() should multiply multiple arguments together", () => {
  expect(functions.multiMultiply(2,3,4,5)).toBe(120);
});