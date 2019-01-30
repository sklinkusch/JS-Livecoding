/*****************************************************************
 * EVENTS
 ****************************************************************/

// Commonly used form events:  submit
// Commonly used input events: keydown, keyup, focus, blur
// Commonly used mouse events: click, scroll, mouseover, mousemove, mouseout

// You can read about all events here:
// https://developer.mozilla.org/en-US/docs/Web/Events

// SETTING UP NEEDED ELEMENTS (TO REDUCE CODE)

const todoForm = document.querySelector("#todo-list-form");
const todoInput = document.querySelector("#todo-text");
const todoList = document.querySelector("#todo-list-items");
const keyCodeBox = document.querySelector("#keycode");

// SETTING UP THE FUNCTIONS TO HANDLE OUR EVENTS

// An event listener is always a named or anonymous function, that is called when
// the event is triggered by the browser. The first argument of that function
// is always the event object, which stores many details about the event.

/**
 * Logs the event object, when the form is submitted
 *
 * {object} e  the triggered event object
 */
function formHandler(e) {
  console.log("Event Listener 1: submit:");
  console.log(e);
}

/**
 * Adds a new item to the list, reading the value of the input in the
 * form above the list.
 */
function addTodoItem() {
  // Creating a new element
  const newItem = document.createElement("li");

  // Adding all needed CSS classes
  newItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  // Adding the content
  const text = todoInput.value.trim();

  newItem.innerHTML = `
    ${text}
    <button class="btn btn-remove btn-secondary btn-sm">x</button>
  `;

  // Appending the new item
  todoList.appendChild(newItem);

  // Clear the input
  todoInput.value = "";

  console.log(`Added new item "${text}" to the list.`);
}

/**
 * Removes an item from the list.
 */
function removeTodoItem(e) {
  console.log("Event Listener 3: click:");
  console.log(e);

  // The property "target" of the event references the element that triggered
  // the event. In our case this is any element that we click inside of
  // a list item.
  console.log("target:");
  console.log(e.target);

  // The property "currentTarget" references the element that catches the
  // event (where we added the event listener) instead.
  console.log("currentTarget:");
  console.log(e.currentTarget);

  // We check if the event was triggered by a button to remove an element
  if (e.target.classList.contains("btn-remove")) {
    console.log("Remove button pressed!");

    // As we now that the remove button was clicked => let's remove that item
    const todoItem = e.target.closest(".list-group-item");
    todoList.removeChild(todoItem);
  }
}

/**
 * Shows the code of the last pressed key in a small box.
 */
function showKeyCode(e) {
  console.log("Event Listener 4: keyup:");
  console.log(`keyCode: ${e.keyCode}`);

  keyCodeBox.textContent = e.keyCode;
}

// ADDING AND REMOVING EVENT LISTENERS

// Adding an event listener
todoForm.addEventListener("submit", formHandler);

// Removing an event listener (only possible, if you don't use an anonymous function)
todoForm.removeEventListener("submit", formHandler);

// Preventing the default behaviour (in this case sending the form)
todoForm.addEventListener("submit", e => {
  e.preventDefault();

  console.log("Event Listener 2: submit:");
  console.log(e);
});

// Adding a second listener to the same element
todoForm.addEventListener("submit", addTodoItem);

// Adding a event listener to the body, to catch all pressed keys
document.body.addEventListener("keyup", showKeyCode);

// EVENT BUBBLING

// If we add an event listener for the "click" event to a an element, this listener
// will be triggered on all child elements, too. Events bubble up from it's target
// element to all parent elements, which is very important. This way we don't
// need to add an event to all items of a list and all elements that will be
// created dynamically later are also triggering the event.

todoList.addEventListener("click", removeTodoItem);
