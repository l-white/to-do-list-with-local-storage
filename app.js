console.log('JS is connected');

const list = document.getElementById('week-two');
const completed = document.getElementById('completed-items');

list.addEventListener('click', function(e){
  if (e.target.tagName === 'BUTTON'){
    //addListItem(e.target);
    e.target.parentElement.remove();
    completed.append(e.target.parentElement);
    e.target.remove();
  }
});

let listItems = [];
listItems.push({"1": "Complete todo list assignment", "2": "Build memory game"})

const addListItem = function(listItem){
  listItems = JSON.parse(localStorage.getItem(list)) || [];
  listItems.push({"listItem": listItem});
  localStorage.setItem('list', JSON.stringify(list));
}


const myName = "Laura";
localStorage.setItem('myName', myName);
//localStorage.setItem('list', JSON.stringify(list));
//localStorage.removeItem("todo-list");
//localStorage.setItem('todo-list', JSON.stringify(listItems));
