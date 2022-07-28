const array = [13, 3, 4, 10, 7, 2];

function oddsAndEvens(array) {
  let arraySorted = array.sort(function (a, b) {
    return a - b;
  });
  let printString = "";
  for (const number of arraySorted) {
    printString += `${number}, `;
  }
  return `Os números ${printString} se encontram ordenados de forma crescente!`;
}

console.log(oddsAndEvens(array)); // será necessário alterar essa linha 😉
