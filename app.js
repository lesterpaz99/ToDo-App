const saveTask = (event) => {
    let title = document.getElementById('title');
    let description = document.getElementById('description');

    const task = {
        title: title.value, 
        description: description.value 
    };

    title.value = description.value = '';
    
    if(localStorage.getItem('Tasks') === null) {
        let tasksToDo = [];
        tasksToDo.push(task);
        localStorage.setItem('Tasks', JSON.stringify(tasksToDo));
    } else {
        let tasksToDo = JSON.parse(localStorage.getItem('Tasks'));
        tasksToDo.push(task);
        localStorage.setItem('Tasks', JSON.stringify(tasksToDo));
    }
    event.preventDefault();
}

//the submit event is only for entire forms, not for just a button.
document.getElementById('formTask').addEventListener('submit', saveTask);

const getTasks = () => {
    let tasks = JSON.parse(localStorage.getItem('Tasks'));
    let taskView = document.getElementById('task');

    taskView.innerHTML = '';
    for (element of tasks) {
        let title = element.title;
        let description = element.description;
        taskView.innerHTML += `<div class="task-container">
            <div>
            <div><p>${title} - ${description}</p></div>
            <div><button>Delete</button></div>
            </div>
        </div>
        `
    }
}

getTasks();