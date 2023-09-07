document.addEventListener("DOMContentLoaded", function () {
    const taskDescriptionInput = document.getElementById("taskDescription");
    const assigneeInput = document.getElementById("assignee");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskDescription = taskDescriptionInput.value.trim();
        const assignee = assigneeInput.value.trim();

        if (taskDescription === "" || assignee === "") {
            alert("Please enter both task description and assignee.");
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskDescription}</span>
            <span>Assignee: ${assignee}</span>
            <button class="delete-task">Delete</button>
        `;

        taskList.appendChild(taskItem);

        // Clear input fields
        taskDescriptionInput.value = "";
        assigneeInput.value = "";

        // Add a click event listener to delete the task
        const deleteButton = taskItem.querySelector(".delete-task");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });
    });
});
    