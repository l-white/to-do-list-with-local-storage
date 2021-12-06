console.log('JS is connected');
const form = document.querySelector('form');
const list = document.querySelector('ol');
const input = document.querySelector('#form-content');
// get all list items
//const todos = [];

// retrieve items from local storage
const loadedTodos = JSON.parse(localStorage.getItem('tasks')) || [];
for (let i = 0; i < loadedTodos.length; i++){
    const newTodo = document.createElement('li');
    newTodo.innerText = loadedTodos[i].task;
    list.appendChild(newTodo);
}

/*
if (loadedTodos.length > 0){
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    list.appendChild(newTodo);
}*/

// submit
// when submitted append to list -- last item
// save to local storage
form.addEventListener('submit', function(e){
  e.preventDefault();
  const newTodo = document.createElement('li');
  newTodo.innerText = input.value;
  list.appendChild(newTodo);
  loadedTodos.push({task: newTodo.innerText});
  localStorage.setItem('tasks', JSON.stringify(loadedTodos));
});

localStorage.removeItem(loadedTodos);
localStorage.clear();
//localStorage.removeItem("list");


// add event listener to listen for click
// when clicked, remove from list
