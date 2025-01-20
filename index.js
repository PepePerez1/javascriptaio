const ball = document.getElementById("ball");
const caja = document.getElementById("caja");

let position_horizontal = 0;
let position_vertical = 0;

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
  let desplazamiento = "";

  if (e.code === "ArrowLeft") {
    position_horizontal = position_horizontal - 10;
    desplazamiento = "horizontal";
  }
  if (e.code === "ArrowRight") {
    position_horizontal = position_horizontal + 10;
    desplazamiento = "horizontal";
  }
  if (e.code === "ArrowUp") {
    position_vertical = position_vertical - 10;
    desplazamiento = "vertical";
  }
  if (e.code === "ArrowDown") {
    position_vertical = position_vertical + 10;
    desplazamiento = "vertical";
  }
  if (position_horizontal < 0) {
    position_horizontal = 0;
  }
  if (position_vertical < 0) {
    position_vertical = 0;
  }

  refresh(desplazamiento);
}
function refresh(desplazamiento) {
  if (desplazamiento === "horizontal") {
    ball.style.left = position_horizontal + "px";
    caja.value = ball.style.left;
  }
  if (desplazamiento === "vertical") {
    ball.style.top = position_vertical + "px";
    caja.value = ball.style.top;
  }
}

function v1() {}
