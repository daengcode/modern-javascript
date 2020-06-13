// Set localstorage
// localStorage.setItem("name", "Zulkifli");
// localStorage.setItem("age", "20");

// Remove localStorage
// localStorage.removeItem("name");

// Get localStorage
// const name = localStorage.getItem("name");
// alert(name);

// Clear localStorage
// localStorage.clear();

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  // set localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Convert it into a String. ex: '['eat', 'drink', 'run']'

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks")); // Convert text into a Javascript Object
tasks.forEach(function (task) {
  console.log(task);
});
