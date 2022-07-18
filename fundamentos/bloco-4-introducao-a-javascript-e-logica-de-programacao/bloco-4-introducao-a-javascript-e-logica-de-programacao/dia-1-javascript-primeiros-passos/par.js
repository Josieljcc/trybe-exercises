function par(a, b, c) {
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return true;
  }
  return false;
}

console.log(par(3, 3, 3));
