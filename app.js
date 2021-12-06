console.log('JS is connected');
const form = document.querySelector('form');
const list = document.querySelector('ol');
const input = document.querySelector('#form-content');
// get all list items
const todos = [];

// retrieve items from local storage
const loadedTodos = JSON.parse(localStorage.getItem('tasks')) || [];


// submit
// when submitted append to list -- last item
// save to local storage
form.addEventListener('submit', function(e){
  e.preventDefault();
  const newTodo = document.createElement('li');
  newTodo.innerText = input.value;
  list.appendChild(newTodo);
  todos.push({task: newTodo.innerText});
  localStorage.setItem('tasks', JSON.stringify(todos));
});

//localStorage.removeItem("completed-todos");
//localStorage.removeItem("list");


// add event listener to listen for click
// when clicked, remove from list
