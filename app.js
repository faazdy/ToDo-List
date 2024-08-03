document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form')
    const input = document.querySelector('#task-input')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const taskGroup = document.querySelector('#task-container')
        const task = document.createElement('li') 
        taskGroup.appendChild(task)
        task.innerText = input.value
    })
})