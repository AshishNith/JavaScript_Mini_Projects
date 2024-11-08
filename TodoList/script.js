const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')
const deleteBtns = document.querySelectorAll('.delete-btn')
const clearCompletedBtn = document.getElementById('clear-completed')
const taskCount = document.getElementById('task-count')

updateTaskCount();

function addTask() {
    if(taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskInput.value}</span>
        <span class="delete-btn">x</span>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
    updateTaskCount();
}

function clearCompleted() { 
    let completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        task.remove();
    });
    updateTaskCount();
}

taskList.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        updateTaskCount();
    } else if(e.target.classList.contains('task-text')) {
        e.target.parentElement.classList.toggle('completed');
        updateTaskCount();
    }
});

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask()
    }

})

clearCompletedBtn.addEventListener('click', clearCompleted);

function updateTaskCount() {
    let remainingTasks = document.querySelectorAll('#task-list li:not(.completed)').length;
    taskCount.textContent = `${remainingTasks} tasks left`;
}

