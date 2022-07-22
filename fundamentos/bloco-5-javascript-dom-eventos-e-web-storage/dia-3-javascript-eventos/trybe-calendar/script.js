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
const buttonFriday = document.querySelector("button").nextSibling;
buttonFriday.addEventListener("click", sextou);
function sextou() {
  buttonFriday.classList.toggle("highlight-friday");
  const days = document.querySelectorAll(".day");
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
