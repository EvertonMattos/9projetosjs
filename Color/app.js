const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colors = document.querySelector(".color");
btn.addEventListener("click", () => {
  let colorsHex = "#";
  for (let i = 0; i < 6; i++) {
    colorsHex += hexColor[getColors()];
    console.log(colorsHex);
  }
  colors.textContent = colorsHex;
  document.body.style.backgroundColor = colorsHex;
});
const getColors = () => {
  return Math.floor(Math.random() * hexColor.length);
};
