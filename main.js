let one = document.querySelector(".one");
let text = document.querySelector(".text");
let icon = document.querySelector(".icon");

one.onclick = () => {
  text.classList.toggle("hide");
  icon.classList.toggle("rotate");
};
