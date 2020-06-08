const card = document.querySelector(".card");
const heading = document.querySelector("h5");
const btnClear = document.querySelector(".clear-tasks");

// Click
// btnClear.addEventListener("click", runEvent);
// DobleClick
// btnClear.addEventListener("dblclick", runEvent);
// Mousedown
// btnClear.addEventListener("mousedown", runEvent);
// Mouseup
// btnClear.addEventListener("mouseup", runEvent);
// Mouseenter
// card.addEventListener("mouseenter", runEvent);
// Mouseleave
// card.addEventListener("mouseleave", runEvent);
// Mouseover
// card.addEventListener("mouseover", runEvent);
// Mouseout
// card.addEventListener("mouseout", runEvent);
// Mousemove
card.addEventListener("mousemove", runEvent);

// Event handler
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}
