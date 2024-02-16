document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList').getElementsByTagName('tbody')[0];

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('deleteBtn')) {
            event.target.parentElement.parentElement.remove();
        } else if (event.target.tagName === 'TR') {
            event.target.classList.toggle('complete');
        }
    });

    function addTask(taskText) {
        const newRow = taskList.insertRow();
        
        const taskCell = newRow.insertCell(0);
        taskCell.textContent = taskText;
        taskCell.classList.add('taskItem');
        
        const deleteCell = newRow.insertCell(1);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        
        deleteCell.appendChild(deleteBtn);
    }
});
