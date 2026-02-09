const todoaddButton = document.getElementById("addBtn");
const todoClearButton = document.getElementById("clearBtn");
const todoInput = document.getElementById("taskInput");
const todoTable = document.getElementById("list");

class Todo {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

let todoList = [];
function todotask() {
    todoaddButton.addEventListener("click", function () {
        if (todoInput.value.trim() === "") {
            alert("Metin giriniz!");
            return;
        }
        else {
            const newTodo = new Todo(todoList.length + 1, todoInput.value);
            todoList.unshift(newTodo);

            todoTable.innerHTML = "";
            for (let i = 0; i < todoList.length; i++) {
                let temp = `
            <li>
            ${todoList[i].id})  
            ${todoList[i].title}
            <button class="deleteBtn" data-id="${todoList[i].id}" >Sil</button>
            

            </li>
            
            
            `
                todoTable.innerHTML += temp;
            }

            todoInput.value = "";

        }

    });

    todoClearButton.addEventListener("click", function () {
        todoList = [];
        todoTable.innerHTML = "";
        alert("Liste temizlendi!");
    });
    todoTable.addEventListener("click", function (e) {
        if (e.target.classList.contains("deleteBtn")) {
            const id = parseInt(e.target.getAttribute("data-id"));
            todoList = todoList.filter(todo => todo.id !== id);
            e.target.parentElement.remove();
        }
    });




}


todotask();