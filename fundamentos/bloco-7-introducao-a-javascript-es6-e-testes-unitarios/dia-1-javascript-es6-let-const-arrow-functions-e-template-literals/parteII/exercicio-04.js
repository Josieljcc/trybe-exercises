let substituiOx = (name) => {
  const phrase = "Tryber x aqui!";
  const words = phrase.split(" ");
  return `${words[0]} ${name} ${words[2]}`;
};

let montaAString = (substituiOx) => {
  const skills = ["html", "css", "javaScript"];
  return `${substituiOx}
  Minhas três principais habilidades são:
  • ${skills[0]}
  • ${skills[1]}
  • ${skills[2]}
  `;
};

console.log(montaAString(substituiOx("josiel")));
