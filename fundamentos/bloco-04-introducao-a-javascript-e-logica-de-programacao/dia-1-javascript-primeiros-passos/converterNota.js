function converterNota(nota) {
  if (nota >= 90) {
    return "A";
  }
  if (nota >= 80) {
    return "B";
  }
  if (nota >= 70) {
    return "C";
  }
  if (nota >= 60) {
    return "E";
  }
  if (nota >= 50) {
    return "E";
  }
  if (nota < 50) {
    return "F";
  }
}

console.log(converterNota(29));
