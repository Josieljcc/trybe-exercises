// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
// Considere o número de caracteres de cada palavra.
let array = ["java", "javascript", "python", "html", "css"];
function menorPalavraMaiorPalavra(palavras) {
  let menorPalavra = array[0];
  let maiorPalavra = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maiorPalavra.length) {
      maiorPalavra = array[i];
    }
    if (array[i].length < menorPalavra.length) {
      menorPalavra = array[i];
    }
  }
  console.log(maiorPalavra);
  console.log(menorPalavra);
}

menorPalavraMaiorPalavra(array);
