// Given a string, return the string reversed.
// Input -- "hello"
// Output -- "olleh"

// Using Loop
function reversedString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reversedString("Ayush"));
