// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio.
// Assuma que o valor de n será sempre ímpar:

function imprimeAsteriscos(n) {
  for (let coluna = 0; coluna < n; coluna++) {
    let asteriscos = "";
    if (coluna % 2 == 1) {
    } else {
      for (let i = n - coluna / 2; i >= 0; i--) {
        asteriscos += " ";
      }
      for (let linha = 0; linha <= coluna; linha++) {
        if (coluna == n - 2 || coluna == linha || linha == 0) {
          asteriscos += "*";
        } else {
          asteriscos += " ";
        }
      }
      console.log(asteriscos);
    }
  }
}

imprimeAsteriscos(7);
