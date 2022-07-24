const allButtons = document.querySelectorAll(".aside-menu-item");
const fontButton = allButtons[0];
const darkModeButton = allButtons[1];
const lineheightDown = allButtons[2];
const lineheightUp = allButtons[3];

//Inicialização
function initialRenderization() {
  const mainFont = localStorage.getItem("mainFont");
  const secondaryColor = localStorage.getItem("secondaryColor");
  const lineHeight = localStorage.getItem("lineHeight");
  const primaryColor = localStorage.getItem("mainColor");
  document.documentElement.style.setProperty("--color-white", primaryColor);
  document.documentElement.style.setProperty("--color-black", secondaryColor);
  document.documentElement.style.setProperty("--main-font", mainFont);
  document.documentElement.style.setProperty("--line-height", lineHeight);
}

// Dack mode On/Of
darkModeButton.addEventListener("click", toggleDarkMode);
function toggleDarkMode() {
  let primaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--color-white");
  if (primaryColor == "#ffff") {
    document.documentElement.style.setProperty(
      "--color-white",
      "rgb(31, 33, 48)"
    );
    document.documentElement.style.setProperty("--color-black", "#ffff");
  } else {
    document.documentElement.style.setProperty("--color-white", "#ffff");
    document.documentElement.style.setProperty(
      "--color-black",
      "rgb(31, 33, 48)"
    );
  }
  const mainColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-white"
  );
  const secondaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--color-black");
  localStorage.setItem("mainColor", mainColor);
  localStorage.setItem("secondaryColor", secondaryColor);
}

//fontChange
const fonts = [
  "'DM Sans', sans-serif",
  "'Edu VIC WA NT Beginner', cursive",
  "'Poppins', sans-serif",
  "'Dancing Script', cursive",
  "'Edu TAS Beginner', cursive",
  "'Edu VIC WA NT Beginner', cursive",
  "'Josefin Sans', sans-serif",
  "'Roboto', sans-serif",
];

fontButton.addEventListener("click", handleFontChange);
function handleFontChange() {
  document.documentElement.style.setProperty(
    "--main-font",
    fonts[Math.floor(Math.random() * fonts.length - 1)]
  );
  console.log(Math.floor(Math.random() * fonts.length));
  const mainFont = getComputedStyle(document.documentElement).getPropertyValue(
    "--main-font"
  );
  localStorage.setItem("mainFont", mainFont);
}

//LineHeight up
lineheightUp.addEventListener("click", upLineheightUp);
function upLineheightUp() {
  let lineheight = getComputedStyle(document.documentElement).getPropertyValue(
    "--line-height"
  );
  let lineheightUp = parseInt(lineheight) + 1;
  document.documentElement.style.setProperty(
    "--line-height",
    lineheightUp.toString()
  );
  localStorage.setItem("lineHeight", lineheightUp.toString());
}

//LineHeight down
lineheightDown.addEventListener("click", upLineheightDown);
function upLineheightDown() {
  let lineheight = getComputedStyle(document.documentElement).getPropertyValue(
    "--line-height"
  );
  let lineheightDown = parseInt(lineheight) - 1;
  if (lineheight <= 1) {
    return;
  }
  document.documentElement.style.setProperty(
    "--line-height",
    lineheightDown.toString()
  );
  localStorage.setItem("lineHeight", lineheightDown.toString());
}

window.onload = function () {
  initialRenderization();
};
