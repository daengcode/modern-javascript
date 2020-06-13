const form = document.querySelector("#task-form");
const inputTask = document.querySelector("#task");
const inputFilter = document.querySelector("#filter");
const listTask = document.querySelector(".collection");
const btnClear = document.querySelector(".clear-tasks");

// Load all event listener
loadEventListener();

function loadEventListener() {
  // Add task event
  form.addEventListener("submit", addTask);
}

function addTask(e) {
  if (inputTask.value === "") {
    // alert("test");
  }

  // Create li
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create text node and append li
  li.appendChild(document.createTextNode(inputTask.value));

  // Create link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append link to li
  li.appendChild(link);

  // Append li to ul
  listTask.appendChild(li);

  // Clear input tasks
  inputTask.value = "";

  e.preventDefault();
}
