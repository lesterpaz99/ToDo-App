const saveTask = (event) => {
  let title = document.getElementById("title");
  let description = document.getElementById("description");

  if (
    (title.value === "" && description.value === "") ||
     title.value === "" || description.value === "") {
    alert("Oops! You have empty values.");
  } else {
    const task = {
      title: title.value.trim(),
      description: description.value.trim(),
    };

    if (localStorage.getItem("Tasks") === null) {
      let tasksToDo = [];
      tasksToDo.push(task);
      localStorage.setItem("Tasks", JSON.stringify(tasksToDo));
    } else {
      let tasksToDo = JSON.parse(localStorage.getItem("Tasks"));
      tasksToDo.push(task);
      localStorage.setItem("Tasks", JSON.stringify(tasksToDo));
    }
  }

  document.getElementById("formTask").reset();
  getTasks();
  event.preventDefault();
};

//the submit event is only for entire forms, not for just a button.
document.getElementById("formTask").addEventListener("submit", saveTask);

const getTasks = () => {
  let tasks = JSON.parse(localStorage.getItem("Tasks"));
  let taskView = document.getElementById("task");

  taskView.innerHTML = "";
  for (element of tasks) {
    let title = element.title;
    let description = element.description;
    taskView.innerHTML += `<div class="task-container">
            <div><p><span class="taskTitle">${title}</span> - ${description}</p></div>
            <div><button class="deleteTask" id="deleteTask" onClick="deleteTask('${title}')">Delete</button></div>
        </div>
        `;
  }
};

const deleteTask = (title) => {
  let tasks = JSON.parse(localStorage.getItem("Tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem("Tasks", JSON.stringify(tasks));
  getTasks();
};

getTasks();