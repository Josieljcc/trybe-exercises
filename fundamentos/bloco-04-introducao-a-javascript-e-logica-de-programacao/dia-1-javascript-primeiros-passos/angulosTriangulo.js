function angulosTriangulo(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return "número inválido";
  }
  if (a + b + c == 180) {
    return true;
  }
  return false;
}

console.log(angulosTriangulo(-1, 60, 60));
