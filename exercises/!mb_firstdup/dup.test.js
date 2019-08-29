const  return_first_dup = require("./index");

test("return_first_dup() returns ''", () => {
  expect(return_first_dup()).toEqual('');
});

test("return_first_dup('') returns ''", () => {
  expect(return_first_dup('')).toEqual('');
});

test("return_first_dup('abca') returns a", () => {
  expect(return_first_dup('abca')).toEqual('a');
});

test("return_first_dup('abcdefgb') returns b", () => {
  expect(return_first_dup('abcdefgb')).toEqual('b');
});

test("return_first_dup('a') returns ''", () => {
  expect(return_first_dup('a')).toEqual('');
});
