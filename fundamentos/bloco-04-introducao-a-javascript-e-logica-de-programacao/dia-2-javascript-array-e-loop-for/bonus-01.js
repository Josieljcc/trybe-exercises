// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let atual = 0; atual < numbers.length; atual++) {
  for (let proximo = 0; proximo < numbers.length; proximo++) {
    if (numbers[atual] < numbers[proximo]) {
      let position = numbers[atual];
      numbers[atual] = numbers[proximo];
      numbers[proximo] = position;
    }
  }
}

console.log(numbers);
