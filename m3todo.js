const API_URL = "https://jsonplaceholder.typicode.com/todos";
const STORAGE_KEY = "todos";

// 1️⃣ Fetch Todos (FIRST 20 only)
async function fetchTodos() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const first20 = data.slice(0, 20);

    saveTodos(first20);
    renderTodos();
}

// 2️⃣ Save to Local Storage
function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 3️⃣ Get Todos from Local Storage
function getTodos() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// 4️⃣ Render UI
function renderTodos() {
    const list = getTodos();
    const container = document.getElementById("todoList");

    if (list.length === 0) {
        container.innerHTML = `<p class="empty-msg">No Todos Available</p>`;
        return;
    }

    container.innerHTML = list
        .map(todo => `
            <div class="todo-item">
                <div class="todo-title">
                    <strong>${todo.title}</strong><br>
                    <small>Status: ${todo.completed ? "✔ Completed" : "❌ Not Completed"}</small>
                </div>

                <div class="actions">
                    <button class="toggle-btn" onclick="toggleStatus(${todo.id})">Toggle</button>
                    <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
                </div>
            </div>
        `)
        .join("");
}

// 5️⃣ Delete Todo
function deleteTodo(id) {
    let todos = getTodos();
    todos = todos.filter(todo => todo.id !== id);
    saveTodos(todos);
    renderTodos();
}

// 6️⃣ Toggle Completed Status
function toggleStatus(id) {
    let todos = getTodos();
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(todos);
    renderTodos();
}

// Load button click event
document.getElementById("loadBtn").addEventListener("click", fetchTodos);

// Initial render
renderTodos();
