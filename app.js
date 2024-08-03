document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form')
    const input = document.querySelector('#task-input')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const taskGroup = document.querySelector('#task-container')
        const task = document.createElement('li')

        const textTask = document.createElement('p')

        //checkbox 
        const check = document.createElement('input')
        check.type = 'checkbox' 

        check.addEventListener('change', ()=>{
            if(!check.checked){
                task.className = ''
                return;
            }
            task.className = 'complete'
        })

        //buttons
        const anchor = document.createElement('button')
        const deleteBtn = document.createElement('button')
        const deleteAll = document.querySelector('#deleteAll')
        //funcion para añadir los iconos
        function addIcon(i){
            const icon = document.createElement('img')
            icon.src = i;
            return icon;
        }
        anchor.append(addIcon('assets/icons/anchor.svg'))
        deleteBtn.append(addIcon('assets/icons/delete.svg'))


        //anchor btn
        anchor.addEventListener('click', ()=>{
            task.className = 'important'
        })
        anchor.addEventListener('dblclick', ()=>{
            task.className = ''
        })
        deleteBtn.addEventListener('click', ()=>{
            task.remove()
        })
        //add the task
        taskGroup.appendChild(task)
        task.appendChild(textTask)
        textTask.innerText = input.value
        task.append(check)
        task.append(anchor)
        task.append(deleteBtn)

        input.value = ''

        //remove all
        function removeAllTask(){
            const allTask = document.querySelectorAll('li')
            allTask.forEach(e=>{
                e.remove()
            })
        }
        deleteAll.addEventListener('click', ()=>{
            removeAllTask()
        })
    })
})