//função que adiciona tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#tarefa").value;

 if(taskTitle){
     //clonar template
     const template = document.querySelector(".template");
     const newTask = template.cloneNode(true);
    //Adicionar titulo
    newTask.querySelector(".tar-title").textContent = taskTitle;
    // Remover as classes desnecessárias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    //adiciona tarefa na lista
    const list = document.querySelector("#lista-tar");

    list.appendChild(newTask);

    // Adicionar o evento de remover

    const removeBtn = newTask.querySelector(".fech-btn").addEventListener("click", function(){
        removeTask(this);
    });

    //Adicinar evento de completar tarefa

    const doneBtn = newTask.querySelector(".add-btn").addEventListener("click", function(){
        completeTask(this);
    });

    //limpar texto
    document.querySelector("#tarefa").value = "";
 }

}

//funcão de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}
//funcão de completar tarefa

function completeTask(task){
    const taskComplete = task.parentNode;

taskComplete.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#botao");

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();
});