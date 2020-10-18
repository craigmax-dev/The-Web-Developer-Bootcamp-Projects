// Variables

var tasks = [];
var input = "";

// Main code

window.setTimeout(function() {
  // Give page time to load before prompt
  while(input !== "quit"){
    var input = prompt("What would you like to do?");
  
    if(input === "list"){
      listTasks();
    }
    else if(input === "new"){
      addTask();
    }
    else if(input === "delete"){
      deleteTask();
    }
  }
  console.log("Quit app");
}, 500);

// Functions

function listTasks(){
  console.log("----------");
  tasks.forEach(function(task, i){
    console.log(i + ": " + task);
  });
  console.log("----------");
}

function addTask(){
  // Prompt new task
  var newTask = prompt("Enter new task");
  // Add to array
  tasks.push(newTask);
  // Confirm addition
  console.log("Added task");
}

function deleteTask(){
  // Ask for index of task to be deleted
  var index = prompt("Enter the index of task to delete");
  // Delete task
  tasks.splice(index, 1);
  // Confirm deletion
  console.log("Deleted task");
}