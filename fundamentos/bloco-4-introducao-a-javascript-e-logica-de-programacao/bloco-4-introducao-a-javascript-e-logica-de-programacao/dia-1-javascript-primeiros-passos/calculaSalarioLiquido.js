function alicotaInss(salario) {
  if (salario <= 1556.94) {
    return (salario * 8) / 100;
  }
  if (salario <= 2594.92) {
    return (salario * 9) / 100;
  }
  if (salario <= 5189.82) {
    return (salario * 11) / 100;
  }
  if (salario > 5189.82) {
    return 570, 88;
  }
}

function calculaIr(salarioBase) {
  if (salarioBase < 1556.94) {
    return salarioBase;
  }
  if (salarioBase <= 2826.65) {
    return (salarioBase * 7.5) / 100 - 142.8;
  }
  if (salarioBase <= 3751.05) {
    return (salarioBase * 15) / 100 - 354.8;
  }
  if (salarioBase <= 4664.68) {
    return (salarioBase * 22.5) / 100 - 636.13;
  }
  if (salarioBase > 2826.65) {
    return (salarioBase * 27.5) / 100 - 869.36;
  }
}

function calculaSalarioLiquido(salario) {
  let salarioBase = salario - alicotaInss(salario);
  let salarioLiquido = salarioBase - calculaIr(salarioBase);
  return salarioLiquido;
}

console.log(calculaSalarioLiquido(3000));
