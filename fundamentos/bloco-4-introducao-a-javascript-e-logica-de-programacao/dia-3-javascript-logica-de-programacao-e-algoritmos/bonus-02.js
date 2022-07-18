// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo
// com 5 asteriscos de base. Por exemplo:

function imprimeAsteriscos(n) {
  for (let coluna = 0; coluna < n; coluna++) {
    let asteriscos = "";
    for (let linha = 0; linha <= coluna; linha++) {
      asteriscos += "*";
    }
    console.log(asteriscos);
  }
}

imprimeAsteriscos(5);
