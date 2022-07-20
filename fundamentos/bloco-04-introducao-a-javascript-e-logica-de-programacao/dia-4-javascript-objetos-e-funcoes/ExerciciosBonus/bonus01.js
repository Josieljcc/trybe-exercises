// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos
//      e retorne o número que a string representa.
//     Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional

const valor = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function converteRomanosParaDecimal(romano) {
  let romanoSplit = romano.toUpperCase().split("");
  let convertido = 0;
  for (let i = 0; i < romanoSplit.length; i++) {
    //caso do i vir antes do V ou X
    if (
      romanoSplit[i] == "I" &&
      (romanoSplit[i + 1] == "V" || romanoSplit[i + 1] == "X")
    ) {
      convertido--;
    } else if (
      //caso do X antes do L ou antes do C
      romanoSplit[i] == "X" &&
      (romanoSplit[i + 1] == "L" || romanoSplit[i + 1] == "C")
    ) {
      convertido -= valor[romanoSplit[i]];
    } else if (
      //caso do X antes do L ou antes do C
      romanoSplit[i] == "C" &&
      (romanoSplit[i + 1] == "D" || romanoSplit[i + 1] == "M")
    ) {
      convertido -= valor[romanoSplit[i]];
    } else {
      convertido += valor[romanoSplit[i]];
    }
  }
  return convertido;
}

console.log(converteRomanosParaDecimal("cmxcix"));
