// 6 - Crie uma função que receba um número natural (número inteiro não negativo)
// N e retorne o somatório de todos os números de 1 até N.

function retornaSomatorio(n) {
  let somatorio = 0;
  for (let i = 0; i <= n; i++) {
    somatorio += i;
  }
  return somatorio;
}

console.log(retornaSomatorio(5));
