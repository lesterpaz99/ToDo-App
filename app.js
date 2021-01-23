let button = (document.getElementById('formTask'));
let toDoTitle = (document.getElementById('title'));
let description = (document.getElementById('description'));

const saveTask = () => {
    if(toDoTitle.value !== '' && description.value !== '') {
        alert(`${toDoTitle.value}: ${description.value}`);
    } else {
        alert('La carta esta vaciá')
    }
}

//Arreglar el formulario, para que funcione con el evento submit
//Recuerda prevenir el comportamiento por defecto del evento submit
button.addEventListener('click', saveTask)