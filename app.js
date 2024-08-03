document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form')
    const input = document.querySelector('#task-input')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const taskGroup = document.querySelector('#task-container')
        const task = document.createElement('li')
        const check = document.createElement('input')
        check.type = 'checkbox' 
        
        
        const anchor = document.createElement('button')
        const deleteBtn = document.createElement('button')
        //funcion para añadir los iconos
        function addIcon(i){
            const icon = document.createElement('img')
            icon.src = i;
            return icon;
        }
        anchor.append(addIcon('ss'))
        deleteBtn.append(addIcon('as'))

        taskGroup.appendChild(task)
        task.innerText = input.value
        task.append(check)
        task.append(anchor)
        task.append(deleteBtn)

        input.value = ''
    })
})