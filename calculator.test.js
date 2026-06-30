import { calculator } from "./calculator";

//
// ADD
//

test("adds two positive numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("adds zero", () => {
  expect(calculator.add(0, 5)).toBe(5);
});

test("adds two negative numbers", () => {
  expect(calculator.add(-2, -3)).toBe(-5);
});

test("adds a positive and a negative number", () => {
  expect(calculator.add(5, -2)).toBe(3);
});

test("adds decimal numbers", () => {
  expect(calculator.add(1.5, 2.6)).toBe(4.1);
});

//
// SUBTRACT
//

test("subtracts two positive numbers", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("returns a negative result when subtracting a larger number", () => {
  expect(calculator.subtract(2, 5)).toBe(-3);
});

test("subtracting from zero returns a negative value", () => {
  expect(calculator.subtract(0, 5)).toBe(-5);
});

test("subtracts two negative numbers", () => {
  expect(calculator.subtract(-5, -2)).toBe(-3);
});

test("subtracts a negative number from a positive number", () => {
  expect(calculator.subtract(5, -2)).toBe(7);
});

test("subtracts a positive number from a negative number", () => {
  expect(calculator.subtract(-5, 2)).toBe(-7);
});

test("subtracts decimal numbers", () => {
  expect(calculator.subtract(5.5, 2.2)).toBeCloseTo(3.3);
});

//
// MULTIPLY
//

test("multiplies two positive numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("returns zero when multiplying by zero", () => {
  expect(calculator.multiply(2, 0)).toBe(0);
});

test("multiplies two negative numbers", () => {
  expect(calculator.multiply(-1, -1)).toBe(1);
});

test("multiplies a positive number by a negative number", () => {
  expect(calculator.multiply(5, -2)).toBe(-10);
});

test("multiplies decimal numbers", () => {
  expect(calculator.multiply(1.5, 2)).toBe(3);
});

//
// DIVIDE
//

test("divides two positive numbers", () => {
  expect(calculator.divide(2, 1)).toBe(2);
});

test("returns a decimal result when division is not exact", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test("divides two negative numbers", () => {
  expect(calculator.divide(-2, -1)).toBe(2);
});

test("divides a positive number by a negative number", () => {
  expect(calculator.divide(10, -2)).toBe(-5);
});

test("divides a negative number by a positive number", () => {
  expect(calculator.divide(-10, 2)).toBe(-5);
});

test("returns zero when zero is divided by a non-zero value", () => {
  expect(calculator.divide(0, 1)).toBe(0);
});

test("divides decimal numbers", () => {
  expect(calculator.divide(7.5, 2.5)).toBe(3);
});

test("returns Infinity when dividing by zero", () => {
  expect(calculator.divide(2, 0)).toBe(Infinity);
});