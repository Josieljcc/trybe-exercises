// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function palindromo(string) {
  return string.split("").reverse().join("") === string ? true : false;
}

console.log(palindromo("ana"));
