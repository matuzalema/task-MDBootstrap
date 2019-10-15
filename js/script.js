// ============= JavaScript====================
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
    taskNumber++;
    addTask(`Task number ${taskNumber}`);
});

//remove last task
buttonRemove.addEventListener('click', () => {
    toDoList.lastElementChild.remove();
    taskNumbersArray.pop();
    if (taskNumber > 0) {
        taskNumber--;
    }
});

//clear list
buttonClear.addEventListener('click', () => {
    const liArray = [...li];
    liArray.forEach(function (e) {
        e.remove();
    });
    taskNumber = 0;
});

function addTask(task) {
    //add HTML part to new task
    const li = document.createElement('li');
    toDoList.appendChild(li);

    //add input
    const input = document.createElement('input');
    li.insertAdjacentHTML('afterbegin', '<input type="text" class="task-input" disabled></input>');
    
    const inputFields = document.getElementsByClassName("task-input");
    const inputList = inputFields[inputFields.length - 1];
    inputList.setAttribute("value", task);

    
    //edit
    li.insertAdjacentHTML('afterbegin', '<i class="fas fa-user-edit"></i>');
    
    const edit = document.querySelectorAll('.fa-user-edit');

    edit[edit.length-1].addEventListener('click', function(){
        inputList.removeAttribute("disabled");
        inputList.setAttribute("style", "background-color: #fff; color: #2d3436;");
    })

    //save edit button
    li.insertAdjacentHTML('afterbegin', '<button type="submit" class="save-btn">save</button>');
    const saveBtn = document.getElementsByClassName("save-btn");
    const saveBtnList = saveBtn[saveBtn.length-1];

    saveBtnList.addEventListener('click', function () {
        inputList.setAttribute("disabled", true);
        inputList.setAttribute("style", "background-color: transparent; color: #fff;");
    })

    li.insertAdjacentHTML('beforeend', '<i class="fas fa-trash"></i>');

    //add eventListener to trash
    const trash = document.querySelectorAll(".fa-trash");
    trash[trash.length - 1].addEventListener('click', function () {
        this.parentNode.remove();
        taskNumber = 0;
    });
}

// add task from input
let input = document.querySelector(".input-add-task");
const btnAddTask = document.querySelector(".btn-add-task");
btnAddTask.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(input.value);
    input.value = "";
});


// ============= jQuery ====================
// let taskNumber = 1;

// //add task
// $('.btn-add').click(() => {
//     $(".task-list").append("<li>Task number " + taskNumber + "</li>");
//     taskNumber ++;
//     $(".task-list li:last-child").append("<i class='fas fa-trash'></i>");

//     $(".fa-trash").click((event) => {
//         $(event.target).parent().empty();
//     });
// })

// //remove last task
// $('.btn-remove').click(() =>{
//     $("li").last().remove();
//     if(taskNumber>1){
//         taskNumber--;
//     }
// })

// //clear list
// $('.btn-clear').click(() =>{
//     $(".task-list").empty();
//     taskNumber = 1;
// })

// //add input task
// $('.btn-add-task').click((event) =>{
//     event.preventDefault();
//     $(".task-list").append("<li>" + $('.input-add-task').val() + "</li>"); 
//     $(".input-add-task").val("").prop('autofocus');

//     //trash
//     $(".task-list li:last-child").append("<i class='fas fa-trash'></i>");

//     $(".fa-trash").click((event) => {
//         $(event.target).parent().empty();
//     });
// });


