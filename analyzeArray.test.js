import { analyzeArray } from "./analyzeArray";

test("analyzes an array of positive integers", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result.average).toBe(4);
  expect(result.min).toBe(1);
  expect(result.max).toBe(8);
  expect(result.length).toBe(6);
});

test("analyzes an array with a single element", () => {
  const result = analyzeArray([5]);

  expect(result.average).toBe(5);
  expect(result.min).toBe(5);
  expect(result.max).toBe(5);
  expect(result.length).toBe(1);
});

test("analyzes an array of negative numbers", () => {
  const result = analyzeArray([-5, -2, -9]);

  expect(result.average).toBeCloseTo(-16 / 3);
  expect(result.min).toBe(-9);
  expect(result.max).toBe(-2);
  expect(result.length).toBe(3);
});

test("analyzes an array of decimal numbers", () => {
  const result = analyzeArray([1.5, 2.5, 3]);

  expect(result.average).toBeCloseTo(7 / 3);
  expect(result.min).toBe(1.5);
  expect(result.max).toBe(3);
  expect(result.length).toBe(3);
});

test("analyzes an array with positive and negative numbers", () => {
  const result = analyzeArray([-2, 8, 4]);

  expect(result.average).toBeCloseTo(10 / 3);
  expect(result.min).toBe(-2);
  expect(result.max).toBe(8);
  expect(result.length).toBe(3);
});