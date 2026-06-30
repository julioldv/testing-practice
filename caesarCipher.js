function caesarCipher(string, shift) {
  return string
    .split("")
    .map((character) => shiftCharacter(character, shift))
    .join("");
}

function shiftCharacter(character, shift) {
  const code = character.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    return shiftWithinAlphabet(character, shift, 65);
  }

  if (code >= 97 && code <= 122) {
    return shiftWithinAlphabet(character, shift, 97);
  }

  return character;
}

function shiftWithinAlphabet(character, shift, alphabetStart) {
  const alphabetSize = 26;
  const originalPosition = character.charCodeAt(0) - alphabetStart;
  const newPosition = (originalPosition + shift) % alphabetSize;

  return String.fromCharCode(alphabetStart + newPosition);
}

export { caesarCipher };