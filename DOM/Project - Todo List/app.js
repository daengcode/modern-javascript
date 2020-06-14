const form = document.querySelector("#task-form");
const inputTask = document.querySelector("#task");
const inputFilter = document.querySelector("#filter");
const listTask = document.querySelector(".collection");
const btnClear = document.querySelector(".clear-tasks");

// Load all event listener
loadEventListener();

function loadEventListener() {
  // DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove task event
  listTask.addEventListener("click", removeTask);
  // Clear task event
  btnClear.addEventListener("click", clearTasks);
  // Filter task event
  inputFilter.addEventListener("keyup", filterTasks);
}

// Get task
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    // Create li
    const li = document.createElement("li");
    // Add class
    li.className = "collection-item";
    // Create text node and append li
    li.appendChild(document.createTextNode(task));

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
  });
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

  // Store task in LS
  storeTaskInLocalStorage(inputTask.value);

  // Clear input tasks
  inputTask.value = "";

  e.preventDefault();
}

// Store task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure??")) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
  e.preventDefault();
}

// Remove from LS
function removeFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1); // at position for index and remove one item
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear tasks
function clearTasks() {
  listTask.innerHTML = "";
  // Faster
  // while (listTask.firstChild) {
  //   listTask.removeChild(listTask.firstChild);
  // }

  // Clear from LS
  clearFromLocalStorage();
}

// Clear from LS
function clearFromLocalStorage() {
  localStorage.clear();
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
