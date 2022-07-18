function par(a, b, c) {
  if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
    return true;
  }
  return false;
}

console.log(par(2, 2, 2));
