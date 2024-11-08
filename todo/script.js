let todos = [];

function addTodo() {
  let input = document.getElementById("inputtext").value;
  if (input.trim() !== "") { // Ensure no empty strings are added
    todos.push(input);
    render();
  }
  document.getElementById("inputtext").value = ""; // Clear input after adding
}

function editTodo(index) {
  let newValue = document.createElement("input");
  newValue.setAttribute("type", "text");
  
  if (newValue !== null && newValue.trim() !== "") {
    todos[index] = newValue;
    render();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function render() {
  let list = document.getElementById("todolist");
  list.innerHTML = ""; // Clear the current list
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.innerText = todos[i];

    let edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.addEventListener("click", function() {
      editTodo(i);
    });

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.addEventListener("click", function() {
      deleteTodo(i);
    });

    li.appendChild(edit);
    li.appendChild(deletebtn);
    list.appendChild(li);
  }
}

document.getElementById("addbtn").addEventListener("click", addTodo);