// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que,
// dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos
// de lado de tamanho n. Por exemplo:
function imprimeAsteriscos(n) {
  for (let coluna = 0; coluna < n; coluna++) {
    let asteriscos = "";
    for (let linha = 0; linha < n; linha++) {
      asteriscos += "*";
    }
    console.log(asteriscos);
  }
}

imprimeAsteriscos(5);
