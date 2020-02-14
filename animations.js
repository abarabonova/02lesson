function reset() {
  window.location.reload()
}

let box = document.querySelector(".box")

function paintItBlack() {
  box.style.backgroundColor = "black"
}

function makeCircle() {
  box.style.borderRadius = "50%"
}

function move() {
  box.style.transform = "translate(100px)"
}

function makeBlinking() {
  box.style.animation = "blinking 1s linear infinite"
}

function functionName(addText) {

}

function changeColor() {
  box.style.backgroundColor = document.querySelector("colorInput")

}
