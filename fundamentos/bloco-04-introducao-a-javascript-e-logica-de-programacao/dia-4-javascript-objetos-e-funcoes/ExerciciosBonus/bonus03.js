// 🚀 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome
//     da fruta como chave e a quantidade de vezes que ela aparece no array como valor.
//     Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá
//     retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
//     Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato:
//     Sua cesta possui: x Melancias, x Abacates...
const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

function retornaContagemDeFrutas(basket) {
  let frutasContadas = {};
  for (let i = 0; i < basket.length; i++) {
    let contagem = 0;
    for (let j = 0; j < basket.length; j++) {
      if (basket[i] == basket[j]) {
        contagem++;
      }
    }
    frutasContadas[basket[i]] = contagem;
  }
  return frutasContadas;
}
frutasContadas = retornaContagemDeFrutas(basket);
console.log("Sua cesta possui: ");
for (const key in frutasContadas) {
  console.log(frutasContadas[key] + " " + key + "s");
}
