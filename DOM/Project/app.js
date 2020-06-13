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
  // Remove task event
  listTask.addEventListener("click", removeTask);
  // Clear task event
  btnClear.addEventListener("click", clearTasks);
  // Filter task event
  inputFilter.addEventListener("keyup", filterTasks);
}

// Add task
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

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure??")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault();
}

// Clear tasks
function clearTasks() {
  listTask.innerHTML = "";
  // Faster
  while (listTask.firstChild) {
    listTask.removeChild(listTask.firstChild);
  }
}

// Filter tasks
function filterTasks(e) {
  const filter = e.target.value.toLowerCase();

  // Get all list item
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(filter) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
