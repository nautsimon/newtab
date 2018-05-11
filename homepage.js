var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{ //stores the stuff in local storage
  todo: [], //initializes the todo list array
  completed: [] //creates the completed arry
};
//data.todo is simply the array being called from that part of the computer
// Remove and complete icons in SVG format
renderTodoList(); //renders the to do list

// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById('addtoday').addEventListener('click', function() { //listens to button click
  var value = document.getElementById('item').value; //sets a new variable to the value in the input which is identified by the id item
  document.getElementById('item').value = '';
  if (value) { //checks to see if anything is inside the input
    addItem(value);
     //calls method addItem and inputs the value
  }
});

document.getElementById('addlater').addEventListener('click', function() { //same as a above but listens to the to do later button
  var value = document.getElementById('item').value;
  document.getElementById('item').value = '';
  if (value) {
    addItem(value);
  }
});

function addItem (value) { //the additem method
  addItemToDOM(value); //invokes the additem to dom meethod with value as the input

   //resets the input to a blank slate
  data.todo.push(value); 
  dataObjectUpdated(); 
}

function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return; //if the lengths of both lists are zero then return

  for (var i = 0; i < data.todo.length; i++) { //for loop that goes through the entire todo array
    var value = data.todo[i];  //makes a new variable that is at the value at the current index
    addItemToDOM(value);  //adds the value to the the front page
  }

  for (var j = 0; j < data.completed.length; j++) { //does the same as the top except is for the completed array
    var value = data.completed[j];
    addItemToDOM(value, true);
  }
}

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;

  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
  }
  dataObjectUpdated();

  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;

  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
    data.completed.push(value);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
    data.todo.push(value);
  }
  dataObjectUpdated();

  // Check if the item should be added to the completed list or to re-added to the todo list
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

// Adds a new item to the todo list
function addItemToDOM(text, completed) { //completed is boolean to see if it is completed
  var list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

  var item = document.createElement('li'); //make new list element
  item.innerText = text;


  var buttons = document.createElement('div'); //creates new button for removal
  buttons.classList.add('buttons');  //adds css

  var remove = document.createElement('button'); //new removal button
  remove.classList.add('remove'); //adds css



  // Add click event for removing the item
  remove.addEventListener('click', removeItem); 

  var complete = document.createElement('button');
  complete.classList.add('complete'); //adds css

  document.getElementById('item').value = '';
  complete.addEventListener('click', completeItem); // Add click event for completing the item

  buttons.appendChild(remove); //puts the removal button into the buttons div
  buttons.appendChild(complete); //puts the complete button into the buttons div
  item.appendChild(buttons); //puts the buttons div within the li 

  list.insertBefore(item, list.childNodes[0]);
}