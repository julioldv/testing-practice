import { capitalize } from "./capitalize";

test("capitalizes the first letter of a word", () =>{
    expect(capitalize("word")).toBe("Word");
});

test("capitalizes the first letter of a phrase", () =>{
    expect(capitalize("hello there")).toBe("Hello there");
});

test("if the string is empy it returns an empty string",()=>{
    expect(capitalize("")).toBe("");
})

test("keeps the rest of the word unchanged", () => {
  expect(capitalize("wORD")).toBe("WORD");
});

test("works with a single-letter string", () => {
  expect(capitalize("a")).toBe("A");
});

test("does not change an already capitalized word", () => {
  expect(capitalize("Word")).toBe("Word");
});