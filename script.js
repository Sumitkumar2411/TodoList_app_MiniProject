const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

function addTodo() {
  const task = input.value.trim(); // extra spaces hata do

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  // create li
  const li = document.createElement("li");

  // create span for text
  const span = document.createElement("span");
  span.textContent = task;

  // click on span => complete
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  // add all inside li
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  // add li to list
  todoList.appendChild(li);

  // clear input
  input.value = "";
}

// Step 3: Button click event
addBtn.addEventListener("click", addTodo);

// Enter key press also works
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});



