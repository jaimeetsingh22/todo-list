const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
// console.log(todoInput);

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();// ye page ko refresh karne se rokega // ye bht use karte hai
    // console.log("form submitted");
    // console.log(todoInput.value);// ye input field me jo v input likha hua hai use console me print karega

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
    todoInput.value= "";// isse jo v hum input likhenge enter click karne par ya add todo pe click krne par wo input field clear ho jayegi


});


//event delegation used

todoList.addEventListener("click",(e)=>{

    // console.log(e.target);
    // console.log(e.target.classList);// ye mujhe sara class list dega

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

