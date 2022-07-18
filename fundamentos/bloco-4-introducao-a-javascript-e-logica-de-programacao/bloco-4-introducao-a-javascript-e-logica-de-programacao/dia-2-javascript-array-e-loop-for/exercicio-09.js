// Utilizando o array criado no exercício anterior imprima o
// resultado da divisão de cada um dos elementos por 2.

let numeros = [];

for (let index = 1; index <= 25; index++) {
  numeros.push(index);
}

for (const numero of numeros) {
  console.log(numero / 2);
}
