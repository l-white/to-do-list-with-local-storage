console.log('JS is connected');

const list = document.getElementById('week-two');
const completed = document.getElementById('completed-items');
const allLis = document.querySelectorAll('li');

let todos = [];
for (let i = 0; i < allLis.length; i++){
  todos.push({"task": allLis[i].innerText});
}
let completedItems = [];



list.addEventListener('click', function(e){
  if (e.target.tagName === 'LI'){
    //e.target.parentElement.remove();
    e.target.remove();
    completed.append(e.target);
    let completedLi = e.target;
    completedLi.classList.toggle('completed');
    completedItems.push({"task": completedLi.innerText});
    for (let i = 0; i < todos.length; i++){
      if (todos[i].classList.toggle('completed')){
        todos.splice(todos[i], 1);
      }
    }
    
    /*for (let i = 0; i < todos.length; i++){
      if (todos[i].innerText === completedLi.innerText && completedLi.classList.toggle('completed')){
        todos.splice(todos[i], 1);
      }
    }*/
    //console.log(todos.indexOf({"task": completedLi.innerText}));
    localStorage.getItem("completed-todos");
    localStorage.setItem("completed-todos", JSON.stringify(completedItems));
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