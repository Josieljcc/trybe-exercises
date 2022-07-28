let maiorPalavra = (string) => {
  return string
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .reverse()[0];
};

console.log(maiorPalavra("oi josiel costa carvalho"));
