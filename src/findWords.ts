// src/findWords.ts
const WORDS: string[] = ["good", "god", "dog", "goo", "do", "go"];

function findWords(input: string): string[] {
  return WORDS.filter(word => {
    const wordChars = word.split("");
    const inputChars = input.split("");
    return wordChars.every(char => inputChars.includes(char));
  });
}

export default findWords;
