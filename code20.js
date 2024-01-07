const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
// console.log(todoInput);

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const newTodoText = todoInput.value;
    // console.log(newTodoText);
    const newLi = document.createElement("li");
    const newLiInnerHtml =
                        `<span class="text">${newTodoText}</span>
                        <div class="todo-buttons">
                         <button class="todo-btn done">Done</button>
                         <button class="todo-btn remove">Remove</button>
                        </div>`

     newLi.innerHTML = newLiInnerHtml;
    //  console.log(newLi);

    todoList.append(newLi);
    todoInput.value= "";


});


//event delegation used

todoList.addEventListener("click",(e)=>{

    // console.log(e.target);
    // console.log(e.target.classList);

    // check if user clicked on done button

    if(e.target.classList.contains("remove")){
        // console.log("want to remove something");
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();

    }
    if(e.target.classList.contains("done")){
        // console.log("greate");
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-through";

    }
    
});

