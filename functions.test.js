const functions = require("./functions");

test("multiMultiply() should multiply multiple parameters together", () => {
  expect(functions.multiMultiply(2,3,4,5)).toBe(120);
  expect(functions.multiMultiply(5,10,20)).toBe(1000);
});

test("multiMultiply() should return the passed parameter if only one parameter is passed", () => {
  expect(functions.multiMultiply(5)).toBe(5);
})

test("multiMultiply() should return false if any non-numeric parameter is passed", () => {
  expect(functions.multiMultiply(1,2,3,"four")).toBeFalsy();
  expect(functions.multiMultiply(1,2,3,"four")).toBe(false);
});

test("multiMultiply() should return the number 1 if no parameters are passed", () => {
  expect(functions.multiMultiply()).toBe(1);
});

test("findAny() should return true if no search parameter is passed", () => {
  expect(functions.findAny([1,2,3,4,5])).toBe(true);
});

test("findAny() should return true for a single search parameter if that parameter is in the passed array", () => {
  expect(functions.findAny([1,2,3,4,5], 4)).toBe(true);
});

test("findAny() should return false for a single search parameter if that parameter is in the passed array", () => {
  expect(functions.findAny([1,2,3,4,5], 9)).toBe(false);
});

test("findAny() should return true for multiple search parameters if any of those parameters are found", () => {
  expect(functions.findAny([1,2,3,4,5], 7,8,9,3)).toBe(true);
});

test("findAny() should return false for multiple search parameters if none of those parameters are found", () => {
  expect(functions.findAny([1,2,3,4,5], 7,8,9)).toBe(false);
});

test("findAll() should return true if no search parameter is passed", () => {
  expect(functions.findAll([1,2,3,4,5])).toBe(true);
});

test("findAll() should return true for a single search parameter if that parameter is in the passed array", () => {
  expect(functions.findAll([1,2,3,4,5], 4)).toBe(true);
});

test("findAll() should return false for a single search parameter if that parameter is in the passed array", () => {
  expect(functions.findAll([1,2,3,4,5], 9)).toBe(false);
});

test("findAll() should return true for multiple search parameters if all of those parameters are found", () => {
  expect(functions.findAll([1,2,3,4,5], 2,4,1)).toBe(true);
});

test("findAll() should return false for multiple search parameters if any of those parameters are not found", () => {
  expect(functions.findAll([1,2,3,4,5], 1,2,9)).toBe(false);
});
