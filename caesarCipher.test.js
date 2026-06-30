test("shifts the word by shift value", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wraps the alphabet", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves uppercase", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("leaves punctuation alone", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("shifts by zero", () => {
  expect(caesarCipher("hello", 0)).toBe("hello");
});

test("shifting by 26 returns the original string", () => {
  expect(caesarCipher("hello", 26)).toBe("hello");
});

test("shifting by 27 acts like shifting by 1", () => {
  expect(caesarCipher("hello", 27)).toBe("ifmmp");
});

test("wraps uppercase letters while preserving case", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});