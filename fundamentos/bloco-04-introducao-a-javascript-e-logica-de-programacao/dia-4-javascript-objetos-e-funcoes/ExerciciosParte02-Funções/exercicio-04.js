// 4 - Crie uma função que receba um array de nomes e retorne o nome com
//  a maior quantidade de caracteres.

function retornaMaiorNome(array) {
  let maiorNome = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maiorNome.length) {
      maiorNome = array[i];
    }
  }
  return maiorNome;
}

console.log(
  retornaMaiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
