// Depois, faça uma pirâmide com n asteriscos de base:
function imprimeAsteriscos(n) {
  for (let coluna = 0; coluna < n; coluna++) {
    let asteriscos = "";
    if (coluna % 2 == 1) {
    } else {
      for (let i = n - coluna / 2; i >= 0; i--) {
        asteriscos += " ";
      }
      for (let linha = 0; linha <= coluna; linha++) {
        asteriscos += "*";
      }
      console.log(asteriscos);
    }
  }
}

imprimeAsteriscos(8);
