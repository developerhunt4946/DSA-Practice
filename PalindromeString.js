// Given a string, check if its a palindrome or not.

function checkPalindrome(str) {
  let n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - 1 - i]) {
      return false;
    }
  }

  return true;
}
console.log("Cheking");
console.log(checkPalindrome("madam"));
