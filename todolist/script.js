console.log("SCript is Imported");

let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
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

  node.setAttribute("class", `todo-item `);
  node.setAttribute("data-key", todo.id);

  node.innerHTML = `
   <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>    <label label
    `;

    list.append(node);
}
