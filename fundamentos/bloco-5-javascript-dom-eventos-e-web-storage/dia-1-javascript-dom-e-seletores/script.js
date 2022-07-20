/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de 
como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie e execute uma função que mude a cor do quadrado vermelho para branco.
Crie e execute uma função que corrija o texto da tag <h1>.
Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/
document.getElementsByTagName("p")[1].innerText =
  "Trabalhando em grande empresa de tecnologia";
document.getElementsByClassName("main-content")[0].style.background =
  "rgb(76,164,109)";

document.getElementsByClassName("center-content")[0].style.background = "#ffff";

document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
let todasAsTagsP = document.getElementsByTagName("p");
for (let i = 0; i < todasAsTagsP.length; i++) {
  console.log(todasAsTagsP[i].innerText);
  todasAsTagsP[i].innerText = todasAsTagsP[i].innerText.toUpperCase();
}
