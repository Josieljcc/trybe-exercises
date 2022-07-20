document.getElementById("header-container").style.backgroundColor = "#00b069";
const emergencyTask = document.querySelector(".emergency-tasks");
const emergencyTaskTitle = document.querySelectorAll(".emergency-tasks h3");
const noEmergencyTaskTitle = document.querySelectorAll(
  ".no-emergency-tasks h3"
);
const noEmergencyTask = document.querySelector(".no-emergency-tasks");

console.log(emergencyTaskTitle);
emergencyTask.style.backgroundColor = "#ff9f84";
for (let i = 0; i < noEmergencyTaskTitle.length; i++) {
  noEmergencyTaskTitle[i].style.backgroundColor = "#232525";
}

for (let i = 0; i < emergencyTaskTitle.length; i++) {
  emergencyTaskTitle[i].style.backgroundColor = "#a500f3";
}

noEmergencyTask.style.backgroundColor = "#f9db5e";
