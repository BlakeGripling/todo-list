// Get elements
const addBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const addSound = new Audio('resources/sounds/add.mp3');
const deleteSound = new Audio('resources/sounds/delete.mp3');

// Handle adding a task
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  // Task text span
  const task = document.createElement("span");
  task.textContent = taskText;
  task.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.classList.add("delete-btn");
  delBtn.addEventListener("click", () => {
    deleteSound.play();
    li.remove();
  });

  li.appendChild(task);
  li.appendChild(delBtn);
  list.appendChild(li);
  addSound.play();

  input.value = "";
  input.focus();
});
