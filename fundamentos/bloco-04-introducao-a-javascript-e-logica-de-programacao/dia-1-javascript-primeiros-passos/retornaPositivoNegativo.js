function retornaPositivoNegativoZero(number) {
  if (number > 0) {
    return "positive";
  }
  if (number < 0) {
    return "negative";
  }
  return "zero";
}

console.log(retornaPositivoNegativoZero(-1));
