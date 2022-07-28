const button = document.querySelector("button");
const countText = document.querySelector(".contador");
countText.innerText = 0;
let clickCount = 0;
button.addEventListener("click", () => {
  clickCount += 1;
  countText.innerText = clickCount;
});
