// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function retornaNumeroQueMaisRepete(array) {
  let maisRepete = 0;
  let repete = 0;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
    }
    if (count > repete) {
      maisRepete = array[i];
      repete = count;
    }
  }
  return maisRepete;
}

console.log(retornaNumeroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]));
