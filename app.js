let button = (document.getElementById('formTask'));

const saveTask = (event) => {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const tasks = {
        title, //title: title
        description //description: description
    };
    console.table(tasks)
}

//Arreglar el formulario, para que funcione con el evento submit
//Recuerda prevenir el comportamiento por defecto del evento submit
button.addEventListener('click', saveTask)

let list = document.getElementById('tasks');