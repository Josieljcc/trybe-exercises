// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

function retornaPrimo(number) {
  let primo = true;
  for (let i = 3; i < number; i++) {
    primo = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        primo = false;
      }
    }
  }
  return primo;
}
console.log(retornaPrimo(61));
