const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const task = taskInput.value.trim();
    const date = taskDate.value;
    const time = taskTime.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.className = "task-info";
    taskInfo.innerHTML = `
        <strong>${task}</strong><br>
        📅 ${date || "No Date"} &nbsp; ⏰ ${time || "No Time"}
    `;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.className = "complete-btn";

    completeBtn.onclick = function () {
        taskInfo.classList.toggle("completed");
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.className = "edit-btn";

    editBtn.onclick = function () {
        const newTask = prompt("Edit Task:", task);
        if (newTask !== null && newTask.trim() !== "") {
            taskInfo.innerHTML = `
                <strong>${newTask}</strong><br>
                📅 ${date || "No Date"} &nbsp; ⏰ ${time || "No Time"}
            `;
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";
}