createDaysOfTheWeek();
createDays();
createButton("Feriados");
document.querySelector("button").id = "btn-holiday";
createButton("Sexta-Feira");
document.querySelector("button").nextSibling.id = "btn-friday";

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
// 🚀 Exercício 1:
// Crie um calendário dinamicamente.
function createDays() {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const daysList = document.querySelector("#days");
  for (let i = 0; i < decemberDaysList.length; i++) {
    const day = decemberDaysList[i];
    const dayListElement = document.createElement("li");
    dayListElement.className = "day";
    dayListElement.innerText = day;
    if (day == 24 || day == 25 || day == 31) {
      dayListElement.className += " holiday";
    }
    if (day == 4 || day == 11 || day == 18 || day == 25) {
      dayListElement.className += " friday";
    }
    daysList.appendChild(dayListElement);
  }
}
// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
function createButton(string) {
  const buttonsContainer = document.querySelector(".buttons-container");
  const buttonElement = document.createElement("button");
  buttonElement.innerText = string;
  buttonsContainer.appendChild(buttonElement);
}

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
const buttonHoliday = document.querySelector("#btn-holiday");

buttonHoliday.addEventListener("click", showHolidays);

function showHolidays() {
  const holidays = document.querySelectorAll(".holiday");
  for (let i = 0; i < holidays.length; i++) {
    const holiday = holidays[i];
    holiday.classList.toggle("highlight");
    buttonHoliday.classList.toggle("highlight");
  }
}

// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
//  Sua função deve receber como parâmetro a string "Sexta-feira".
// criado na linha 6 - 7

// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira.
// Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos
// dias que são sextas-feiras.
const buttonFriday = document.querySelector("button").nextSibling;
buttonFriday.addEventListener("click", sextou);
const days = document.querySelectorAll(".day");

function sextou() {
  buttonFriday.classList.toggle("highlight-friday");
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    if (
      day.innerText == 4 ||
      day.innerText == 11 ||
      day.innerText == 18 ||
      day.innerText == 25 ||
      day.innerText == "Sextou! 0/"
    ) {
      if (buttonFriday.className.includes("highlight-friday")) {
        day.innerText = "Sextou! 0/";
        day.classList.toggle("highlight-friday");
      } else {
        day.innerText = i - 1;
        day.classList.toggle("highlight-friday");
      }
    }
  }
}

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse
// em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do
// mouse sair do dia, o texto deve retornar ao tamanho original.
for (const day of days) {
  day.addEventListener("mouseover", aplyZoomInDays);
  day.addEventListener("mouseleave", removeZoomInDays);
}
function aplyZoomInDays(event) {
  event.target.style.fontWeight = "bold";
  event.target.style.fontSize = "25px";
}

function removeZoomInDays(event) {
  event.target.style.fontWeight = "normal";
  event.target.style.fontSize = "20px";
}

// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar")
// e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
const addButton = document.querySelector("#btn-add");
addButton.addEventListener("click", addTask);
const taskList = document.querySelector(".my-tasks");
const imput = document.querySelector("#task-input");
function addTask(event) {
  let taskElement = document.createElement("span");
  taskElement.innerText = imput.value;
  taskElement.style.display = "block";
  imput.value = "";
  console.log(taskElement);
  taskList.appendChild(taskElement);
}
