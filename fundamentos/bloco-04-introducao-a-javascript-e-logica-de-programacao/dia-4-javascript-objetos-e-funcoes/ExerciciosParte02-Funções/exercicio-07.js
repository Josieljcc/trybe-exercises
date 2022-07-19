// 7 - Crie uma função que receba uma string word e outra string ending.
// Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.

function isTheEnd(word, ending) {
  let reverseWord = word.split("").reverse().join("");
  let reverseEnd = ending.split("").reverse().join("");
  let isTheEnd = true;
  for (let i = reverseEnd.length - 1; i > 0; i--) {
    if (reverseEnd[i] != reverseWord[i]) {
      isTheEnd = false;
    }
  }
  return isTheEnd;
}

console.log(isTheEnd("trybe", "be"));
