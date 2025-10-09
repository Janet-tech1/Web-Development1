let taskForm = document.getElementById("myTasks");
let taskList = document.getElementById("taskList");
let filterButtons = document.querySelectorAll(".filters button");

let tasks = JSON.parse(localStorage.getItem("tasks"));
if (!tasks) {
    tasks = [];
}
// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "all") {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    if (filter === "completed" && !task.completed) return;
    if (filter === "pending" && task.completed) return;

    let li = document.createElement("li");
    li.className = `${task.priority.toLowerCase()} ${task.completed ? "completed" : ""}`;

    li.innerHTML = `
      <span>${task.name} (Due: ${task.dueDate})</span>
      <div class="actions">
        <button onclick="toggleTask(${index})"><i class="fa-solid fa-check"></i></button>
        <button onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// Add task
taskForm.addEventListener("submit", e => {
  e.preventDefault();
  let name = document.getElementById("taskName").value;
  let priority = document.getElementById("priority").value;
  let dueDate = document.getElementById("dueDate").value;

  tasks.push({ name, priority, dueDate, completed: false });
  saveTasks();
  renderTasks();
  taskForm.reset();
});

// Toggle task complete
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => renderTasks(btn.dataset.filter));
});

// Initial render
renderTasks();
