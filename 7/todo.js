var tasks = [];


/**
 * updateOutput - Updates the output field when tasks are added or edited.
 */
function updateOutput() {
  var total = tasks.length;
  var checked = 0;
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    if (task.checked == true) {
      checked++;
    }
  }

  if (total > 0) {
    var empty = document.getElementById("empty-text");
    empty.style.display = "none";
    var output = document.getElementById("output");
    output.value = checked + "/" + total + " completed";
  }
}


/**
 * addTask - Adds a new task to the todo list.
 *
 * @param  {event} event The event that triggered this function.
 */
function addTask(event) {
  event.preventDefault();

  var ul = document.getElementById("todo-list");
  var task = document.getElementById("task");
  if (ul == null || task == null) return;

  // Create task object
  var d = new Date();
  var id = d.getTime();
  var taskObject = {
    timeStamp: id,
    task: task.value,
    checked: false,
  };

  // Add checkbox
  var checkboxId = "checkbox" + id;
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", checkboxId);

  // Add label with task description to checkbox
  var label = document.createElement("label");
  label.setAttribute("for", checkboxId)
  label.innerHTML = task.value;
  task.value = "";

  // Add list item to list
  var li = document.createElement("li");
  li.setAttribute("id", id);
  li.appendChild(checkbox);
  li.appendChild(label);
  ul.insertBefore(li, ul.childNodes[0]);

  // Add task object to list of tasks
  tasks.push(taskObject);
  console.log(taskObject);

  // Add event listener for checkbox click
  checkbox.addEventListener("click", function() {
    handleCheckbox(checkbox, taskObject);
    updateOutput();
  });

  updateOutput();
}


/**
 * handleCheckbox - Handles the checked/unchecked states of tasks.
 *
 * @param  {Object} checkbox   The checkbox that was clicked.
 * @param  {Object} taskObject The task javascript object connected to the checkbox.
 */
function handleCheckbox(checkbox, taskObject) {
  var li = checkbox.parentNode;
  var label = li.getElementsByTagName("label")[0];;
  var ul = li.parentNode;
  var lastLi = ul.lastElementChild;

  if (checkbox.checked) {
    // Set task object to checked
    taskObject.checked = true;
    if (li == lastLi) return;

    // Get the first checked list item (task)
    var nextLi = li.nextElementSibling;
    var nextCheckbox = nextLi.getElementsByTagName("input")[0];
    while (nextLi !== lastLi && nextCheckbox.checked === false) {
      nextLi = nextLi.nextElementSibling;
      nextCheckbox = nextLi.getElementsByTagName("input")[0];
    }

    // Check if there was a checked list item, and if true: Add "li" before this item.
    // If false; Append "li" after the last list item.
    var hasCheckedItems = nextCheckbox.checked == true;
    if (!hasCheckedItems) {
      ul.appendChild(li);
    } else {
      ul.insertBefore(li, nextLi);
    }
  } else {
    // Set task object to unchecked
    taskObject.checked = false;
    var firstLi = ul.firstElementChild;
    if (li == firstLi) return;

    // Insert "li" in the correct order of unchecked items, based on timestamp (id).
    var nextLi = firstLi;
    var nextCheckbox = nextLi.getElementsByTagName("input")[0];
    while (nextLi !== lastLi && nextCheckbox.checked === false && li.id < nextLi.id) {
      nextLi = nextLi.nextElementSibling;
      nextCheckbox = nextLi.getElementsByTagName("input")[0];
    }

    ul.insertBefore(li, nextLi);
  }

  return false;
}
