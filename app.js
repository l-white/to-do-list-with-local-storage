console.log('JS is connected');

const list = document.getElementById('week-two');
const completed = document.getElementById('completed-items');
const allLis = document.querySelectorAll('li');

let todos = [];
let completedItems = [];

// savedTodos.push({ task: newTodo.innerText, isCompleted: false });

list.addEventListener('click', function(e){
  if (e.target.tagName === 'BUTTON'){
    e.target.parentElement.remove();
    completed.append(e.target.parentElement);
    let completedLi = e.target.parentElement;
    completedLi.classList.toggle('completed');
    completedItems.push({"task": completedLi.innerText});
    localStorage.setItem("completed-todos", JSON.stringify(completedItems));
    /*if (this.classList.toggle('completed') === true){
      completedItems.push(completedLi.innerText);
    }*/
    e.target.remove();
  }
});




//listItems.push({"1": "Complete todo list assignment", "2": "Build memory game"})
/*
const addListItem = function(listItem){
  listItems = JSON.parse(localStorage.getItem(list)) || [];
  listItems.push({"listItem": listItem});
  localStorage.setItem('list', JSON.stringify(list));
}
*/

//const myName = "Laura";
//localStorage.setItem('myName', myName);

localStorage.removeItem("myName");
//localStorage.removeItem("completed-todos");
//localStorage.setItem('completed-todos', JSON.stringify(completedItems));
//localStorage.setItem('list', JSON.stringify(list));
//localStorage.removeItem("todo-list");
//localStorage.setItem('todo-list', JSON.stringify(listItems));
//const local = localStorage.setItem("completedTodos", JSON.stringify(completedItems));
//localStorage.removeItem("completed-todos");
//localStorage.removeItem("completedTodos");