// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores,
//  ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne
//  o maior número primo entre 2 e 50.
function retornaMaiorPrimo(number) {
  let primo = true;
  let maiorPrimo = 0;
  for (let i = 3; i < number; i++) {
    primo = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        primo = false;
      }
    }
    if (primo) {
      maiorPrimo = i;
    }
  }
  return maiorPrimo;
}
console.log(retornaMaiorPrimo(50));
