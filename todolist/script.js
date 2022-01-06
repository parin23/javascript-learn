console.log("SCript is Imported");

let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodos(todo);
}

const form = document.querySelector(".js-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector(".js-todo-input");
  const text = input.value.trim();

  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});

function renderTodos(todo) {
  const list = document.querySelector(".js-todo-list");
  const node = document.createElement("li");

  const item = document.querySelector(`[data-key='${todo.id}']`);

  node.setAttribute("class", `todo-item `);
  node.setAttribute("data-key", todo.id);
  let done = todo.checked ? "Completed" : "Remaining";

  node.innerHTML = `
   <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text} is ${done}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>    <label label
    `;

  if (item) list.replaceChild(node, item);
  else list.append(node);
}

let todolist = document.querySelector(".js-todo-list");

todolist.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-tick")) {
    const itemkey = event.target.parentElement.dataset.key;
    toggleDone(itemkey);
  }

  if (event.target.classList.contains("delete-todo")) {
    const itemkey = event.target.parentElement.dataset.key;
    deleteTodo(itemkey);
    event.target.parentElement.remove();
  }
});

function toggleDone(key) {
  const index = todoItems.findIndex((e) => e.id == key);
  todoItems[index].checked = !todoItems[index].checked;

  renderTodos(todoItems[index]);
}

function deleteTodo(key) {
  const index = todoItems.findIndex((e) => e.id === Number(key));
  todoItems = todoItems.filter((e) => e.id !== Number(key));

}
