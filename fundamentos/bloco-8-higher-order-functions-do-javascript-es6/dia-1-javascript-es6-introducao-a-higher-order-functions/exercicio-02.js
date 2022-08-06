const numberChecker = (number, random) => number === random;

const raffle = (number, numberChecker) => {
  const random = Math.floor(Math.random() * 5 + 1);
  //   if (number === random) {
  //     return "Parabéns você ganhou";
  //   }
  return numberChecker(number, random)
    ? "Parabéns você ganhou"
    : "tente novamente";
};

console.log(raffle(3, numberChecker));
