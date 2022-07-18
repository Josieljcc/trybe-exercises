// Agora inverta o lado do triângulo
// Atenção! Note que esse exercício é bem mais complexo que o anterior!
// Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica
// para imprimir espaços também.

function imprimeAsteriscos(n) {
  for (let coluna = 0; coluna < n; coluna++) {
    let asteriscos = "";
    for (let linha = n; linha >= 0; linha--) {
      if (linha <= coluna) {
        asteriscos += "*";
      } else {
        asteriscos += " ";
      }
    }
    console.log(asteriscos);
  }
}

imprimeAsteriscos(5);
