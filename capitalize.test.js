import { capitalize } from "./capitalize";

test("capitalizes the first letter", () =>{
    expect(capitalize("word")).toBe("Word");
});

test("capitalizes the first letter", () =>{
    expect(capitalize("phrase")).toBe("Phrase");
});