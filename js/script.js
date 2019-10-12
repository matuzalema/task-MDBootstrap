// buttons
const buttonAdd = document.querySelector(".btn-add");
const buttonRemove = document.querySelector(".btn-remove");
const buttonClear = document.querySelector(".btn-clear");

//elements
const li = document.getElementsByTagName("li");
const toDoList = document.querySelector(".task-list");
const trashArray = document.querySelector(".fas");

//variables
let taskNumber = 0;
let taskNumbersArray = [];

// add task list
buttonAdd.addEventListener('click', () => {
    const task = document.createElement('li');
    toDoList.appendChild(task);
    taskNumber++;
    task.innerHTML = `Task number ${taskNumber}`;  
});

//remove last task
buttonRemove.addEventListener('click', () => {
    toDoList.lastElementChild.remove();
    taskNumbersArray.pop();
    taskNumber--;
});

//clear list
buttonClear.addEventListener('click', () => {
    const liArray = [...li];
    liArray.forEach(function(e){
        e.remove();
    });
    taskNumber=0;
});

// add task from input
let input = document.querySelector(".input-add-task");
const btnAddTask = document.querySelector(".btn-add-task");

btnAddTask.addEventListener('click', (e) => {
    e.preventDefault();
    const liFromInput = document.createElement('li');
    toDoList.appendChild(liFromInput);
    liFromInput.innerHTML = input.value;
    input.value= "";
})