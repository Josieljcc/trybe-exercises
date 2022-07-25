const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", handleClick);
function handleClick(event) {}

const validation = new JustValidate("#form");

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 10,
      errorMessage: "o campo deve conter no minimo 10 caracteres",
    },
    {
      rule: "maxLength",
      value: 40,
      errorMessage: "o campo deve conter no máximo 40 caracteres",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email é obrigatório",
    },
    {
      rule: "email",
      errorMessage: "Email inválido!",
    },
  ]);
