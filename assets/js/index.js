window.todos = [];
const todoText = document.getElementById("todoText");
const todoSubmit = document.getElementById("todoSubmit");
const todoList = document.getElementById("todoList");

function addTodo() {
  window.todos.push(todoText.value);
  todoText.value = "";
  renderTodo();
}

function renderTodo() {
  todoList.innerHTML = "";
  window.todos.forEach(function (todo) {
    todoList.innerHTML += `
        <div class="card">
            <div class="container">
                <div class="card-title">
                  - &nbsp; ${todo}
                </div>
            </div>
        </div>
    `;
  });
}

function deleteTodo(index) {
  window.todos.splice(index, 1);
  renderTodo();
}

todoSubmit.addEventListener("click", addTodo);
