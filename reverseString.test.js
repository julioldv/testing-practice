import { reverseString } from "./reverseString";

test("reverses a word",()=>{
    expect(reverseString("hello")).toBe("olleh");
});

test("reverses a single-letter string",()=>{
    expect(reverseString("a")).toBe("a");
});

test("reverses an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverses a phrase including spaces",()=>{
    expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("keeps capitalization in its reversed position",()=>{
    expect(reverseString("Hello")).toBe("olleH");
});

test("reverses numbers and symbols as characters",()=>{
    expect(reverseString("abc123!")).toBe("!321cba");
});