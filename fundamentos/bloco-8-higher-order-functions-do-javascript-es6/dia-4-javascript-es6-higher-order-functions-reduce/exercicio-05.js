const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA(arr) {
  return arr.reduce((acc, curr) => {
    return (acc += curr.split("a" || "A").length);
  }, 0);
}
console.log(containsA(names));
