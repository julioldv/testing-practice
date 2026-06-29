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

test("works with an already capitalize string",()=>{
    expect(capitalize("Already capitalized")).toBe("Already capitalized");
});