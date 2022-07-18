// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
// Por exemplo, a palavra "banana" seria invertida para "ananab".
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo
// está funcionando corretamente.

function invert(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

console.log(invert("Tryber"));
