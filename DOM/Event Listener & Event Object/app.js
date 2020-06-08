// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log("Berhasil");
//     e.preventDefault();
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  // console.log("Berhasil");
  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;
  // e.target.innerText = "Hapus";

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Relative to window
  val = e.clientX;
  val = e.clientY;

  // Relative to element
  val = e.offsetX;
  val = e.offsetY;

  console.log(val);
}
