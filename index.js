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
                render();
                saveTodos();


                todoInput.value = "";

            }

        });

        todoClearButton.addEventListener("click", function () {
            todoList = [];
            todoTable.innerHTML = "";
            render();
            saveTodos();
            alert("Liste temizlendi!");
        });
        todoTable.addEventListener("click", function (e) {
            if (e.target.classList.contains("deleteBtn")) {
                const id = parseInt(e.target.getAttribute("data-id"));
                todoList = todoList.filter(todo => todo.id !== id);
                render();
                saveTodos();
            }
        });



    }

    const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todoList));

    const loadTodos = () => {
        const data = localStorage.getItem("todos");
        if (data) {
            todoList = JSON.parse(data);
            render();
        }

    }
    const render = () => {
        todoTable.innerHTML = "";
        for (let todo of todoList) {
            todoTable.innerHTML += `
                        <li>
                ${todo.id})  
                ${todo.title}
                <button class="deleteBtn" data-id="${todo.id}" >Sil</button>
                

                </li>`
        }
    }

    todotask();
    loadTodos();

