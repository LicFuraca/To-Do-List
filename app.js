window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listElement = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task) {
            alert('Please fill out the task');
            return;
        }
        // DIV TASK ELEMENT
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        // DIV CONTEN TELEMENT
        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('content');
        
        // INPUT USERINPUT
        const userInput = document.createElement('input');
        userInput.classList.add('text');
        userInput.type = 'text';
        userInput.setAttribute('readonly', 'readonly');
        userInput.value = task;
        
        taskContentElement.appendChild(userInput);
        taskElement.appendChild(taskContentElement);
        listElement.appendChild(taskElement);

        // ACTIONS DIV
        const taskActions = document.createElement('div');
        taskActions.classList.add('actions');

        taskElement.appendChild(taskActions);

        // BUTTONS
        const taskEditBtn = document.createElement('button');
        taskEditBtn.classList.add('edit');
        taskEditBtn.innerHTML = 'Editar';

        const taskDeleteBtn = document.createElement('button');
        taskDeleteBtn.classList.add('delete');
        taskDeleteBtn.innerHTML = 'Eliminar';
        
        taskActions.appendChild(taskEditBtn);
        taskActions.appendChild(taskDeleteBtn);

        // BUTTONS CONFIG
        taskEditBtn.addEventListener('click', () => {
            if(taskEditBtn.innerText.toLowerCase() === 'editar') {
                userInput.removeAttribute('readonly');
                userInput.focus();
                taskEditBtn.innerText = 'Guardar';
            } else {
                userInput.setAttribute('readonly', 'readonly');
                taskEditBtn.innerText = 'Editar';
            }
        });

        taskDeleteBtn.addEventListener('click', () => {
            taskElement.remove();
        });
        
        input.value = ""
    })
}); // FINAL DE WINDOW EVENT 