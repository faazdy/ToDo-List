document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#task-input");

    const template = document.querySelector("template");
    const taskContainer = document.querySelector("#task-container");

    const templateContent = template.content.cloneNode(true);
    const taskText = templateContent.querySelector(".task-text");

    taskContainer.appendChild(templateContent);
    taskText.innerText = input.value;
    input.value = "";
  });

  //styles
  const taskCard = document.querySelector("#task-card");

  function taskComplete() {
    const completeCheck = document.querySelector("#complete");
    completeCheck.addEventListener("change", () => {
      if (completeCheck.checked) {
        taskCard.className = "complete";
      } else {
        taskCard.className = "";
      }
    });
  } taskComplete();

  function importantTask(){
    const importantCheck = document.querySelector('#anchor');
    importantCheck.addEventListener('change', ()=>{
        if(!importantCheck.checked){
            taskCard.className = ''
            return;
        }
        taskCard.className = 'important'
    })
  } importantTask();

  function deleteTask(){
    const btn = document.querySelector('.delete-task')
    btn.addEventListener('click', ()=>{
        taskCard.remove()
    })
  } deleteTask();
});
