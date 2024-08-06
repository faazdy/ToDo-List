document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const input = document.querySelector('#task-input')


        const template = document.querySelector('template')
        const taskContainer = document.querySelector('#task-container')

        const templateContent = template.content.cloneNode(true)
        const taskText = templateContent.querySelector('.task-text')

        taskContainer.appendChild(templateContent)
        taskText.innerText = input.value
        input.value = ''
    })
})