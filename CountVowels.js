// Given a string, count the number of vowels in that string

function countVowels(str) {
  let n = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      n++;
    }
  }
  return n;
}

console.log("Checking");
console.log(countVowels("Ayush"));

function countVowelsUsingSet(str) {
  let count = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  str = str.toLowerCase();

  for (let ch of str) {
    if (vowels.has(ch)) {
      count++;
    }
  }
  return count;
}
