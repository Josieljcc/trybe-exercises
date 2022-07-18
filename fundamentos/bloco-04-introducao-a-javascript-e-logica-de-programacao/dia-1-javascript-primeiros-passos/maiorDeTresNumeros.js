function maiorDeDoisNumeros(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (c > a && c > b) {
    return c;
  }
  return b;
}

console.log(maiorDeDoisNumeros(5, 25, 55));
