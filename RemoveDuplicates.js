// Given a string, remove the duplicates character but not the first occurance

function removeDuplicates(str) {
  let result = "";

  for (let i = 0; i < str.length - 1; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

console.log("--");
console.log(removeDuplicates("aayyuusshh"));
console.log(removeDuplicates("fuyfteyy"));
