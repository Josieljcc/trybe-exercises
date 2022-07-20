// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function retornaIndice(n, array) {
  let indice = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      indice = i;
    }
  }
  return indice;
}

function retornaMenorValor(array) {
  let menorValor = array[0];
  for (let i = 0; i < array.length; i++) {
    if (menorValor > array[i]) {
      menorValor = array[i];
    }
  }
  return retornaIndice(menorValor, array);
}

function retornaMaiorValor(array) {
  let maiorValor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (maiorValor < array[i]) {
      maiorValor = array[i];
    }
  }
  return retornaIndice(maiorValor, array);
}

console.log(retornaMaiorValor([2, 3, 6, 7, 10, 1]));
