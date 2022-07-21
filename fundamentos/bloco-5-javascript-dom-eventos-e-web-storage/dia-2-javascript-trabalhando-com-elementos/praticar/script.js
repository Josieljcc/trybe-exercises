//p1 1 - let elemento = document.querySelector("#elementoOndeVoceEsta");
//p1 2 - let elemento = document.querySelector("#elementoOndeVoceEsta").parentElement;
//p1 2 - elemento.style.backgroundColor = "#aaaa";
//p1 3 - let elemento = document.querySelector("#elementoOndeVoceEsta").firstElementChild.firstElementChild;
//p1 3 - elemento.innerText = "oi oi oi";
//p1 4 - let elemento = document.querySelector("#pai").firstElementChild;
//p1 5 - let elemento = document.querySelector("#primeiroFilho").nextElementSibling;
//p1 6 - let elemento = document.querySelector("#elementoOndeVoceEsta").nextSibling;
//p1 7 - let elemento = document.querySelector("#elementoOndeVoceEsta").nextElementSibling;
//p1 8 - let elemento = document.querySelector("#pai").lastElementChild.previousElementSibling;
//p2 1 - let elemento = document.querySelector("#pai");
//p2 1 - let objeto = document.createElement("p");
//p2 1 - objeto.innerText = "Oi eu fui criado no Javascript ;)";
//p2 1 - elemento.appendChild(objeto);
//p2 2 - let elemento = document.querySelector("#elementoOndeVoceEsta");
//p2 2 - let objeto = document.createElement("p");
//p2 2 - objeto.innerText = "oi sou filho do elementoOndeVoceEsta";
//p2 2 - elemento.appendChild(objeto);
//p2 3 - let elemento = document.querySelector("#primeiroFilho");
//p2 3 - let objeto = document.createElement("p");
//p2 3 - objeto.innerText = "oi sou filho do primeiroFilho";
//p2 3 - elemento.appendChild(objeto);
//p2 4 - let elemento = document.querySelector("#primeiroFilho");
//p2 4 - let objeto = document.createElement("p");
//p2 4 - objeto.innerText = "oi sou filho do primeiroFilho";
//p2 4 - elemento.appendChild(objeto);
//p2 4 - let elemento2 = elemento.firstChild.parentElement.parentElement.lastElementChild
// //p2 4 - .previousElementSibling;

const elementoPai = document.querySelector("#pai");
// const todosElementosFilhos = document.querySelector("#pai").children;
// console.log(todosElementosFilhos[1].lastElementChild);
// elementoPai.removeChild(todosElementosFilhos[3]);
// elementoPai.removeChild(todosElementosFilhos[2]);
// elementoPai.removeChild(todosElementosFilhos[1].nextSibling);
// elementoPai.removeChild(todosElementosFilhos[0]);
// todosElementosFilhos[1].removeChild(todosElementosFilhos[1].lastElementChild);

elementoPai.appendChild((document.createElement("p").className = "oi"));

console.log(elementoPai);
