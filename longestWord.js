const findLongestWord = (sentence) => {
  let longestWord = "";
  let initialWord = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      initialWord = "";
      continue;
    }
    if (
      (sentence[i] >= "a" && sentence[i] <= "z") ||
      (sentence[i] >= "A" && sentence[i] <= "Z") ||
      (sentence[i] >= "0" && sentence[i] <= "9")
    ) {
      initialWord += sentence[i];
      if (initialWord.length > longestWord.length) {
        longestWord = initialWord;
      }
    }
  }
  console.log(longestWord);
};

findLongestWord("Hello there, I'm learningssss Javascripts.");
