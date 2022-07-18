// O fatorial é a multiplicação de um número natural pelos seus antecessores,
// exceto o zero. Por exemplo:
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

function fatorial(number) {
  let fatorial = 1;
  for (let i = 1; i <= number; i++) {
    fatorial *= i;
  }
  return fatorial;
}

console.log(fatorial(10));
