const form = document.querySelector('form')
const taskContainer = document.querySelector('#task-container')
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  //tarea
  const taskInput = document.querySelector('#task-input')
  const newTask = document.createElement('li')
  newTask.innerHTML = `<p class="task-text">${taskInput.value}</p>
                    <input type="checkbox" name="complete" class="complete-task">
                    <button class="anchor">
                        <label for="anchor">
                            <img src="assets/icons/anchor.svg" alt="anchor">
                        </label>
                        <input type="checkbox" name="anchor" class="anchor-task" style="display: none;">
                    </button>
                    <button class="delete-task">
                        <img src="assets/icons/delete.svg" alt="">
                    </button>`;
  taskContainer.appendChild(newTask)
  taskInput.value = ''
  //botones
  //poner newTask.query para que se seleccione los correspondientes a la tarea creada y no los primeros del documento
  const complete = newTask.querySelector('.complete-task')
  const important = newTask.querySelector('.anchor-task')
  const deleteTask = newTask.querySelector('.delete-task')

  //complete
  complete.addEventListener('change', ()=>{
    if(complete.checked){
      newTask.classList.add('complete')
    } else {
      newTask.classList.remove('complete')
    }
  })

  //important
  const anchorButton = newTask.querySelector('.anchor');
  anchorButton.addEventListener('click', () => {
    important.checked = !important.checked; // Alternar el estado del checkbox
    if (important.checked) {
      newTask.classList.add('important');
    } else {
      newTask.classList.remove('important');
    }
  });
  important.addEventListener('change', ()=>{
    if(important.checked){
      newTask.classList.add('important')
    } else {
      newTask.classList.remove('important')
    }
  })

  //delete
  deleteTask.addEventListener('click', ()=>{
    newTask.remove();
  })

  //deleteAll
  const deleteAll = document.querySelector('#deleteAll')
  deleteAll.addEventListener('click', ()=>{
    taskContainer.innerHTML = ''
  })
})