function calculaLucro(custo, venda) {
  if (custo < 0 || venda < 0) {
    return "valores inválidos";
  }
  let imposto = (custo * 20) / 100;
  let custoTotal = custo + imposto;
  let lucro = venda - custoTotal;
  return lucro * 1000;
}

console.log(calculaLucro(5, 6));
