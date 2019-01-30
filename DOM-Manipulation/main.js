/*****************************************************************
 * DOM MANIPULATION
 ****************************************************************/

// SELECTING ELEMENTS

// Get an element by its ID
const todoForm = document.getElementById("todo-list-form");

console.log("The form element:");
console.log(todoForm);

// Get an element by any CSS selector
const todoInput = document.querySelector("#todo-text");

console.log("The input for a new todo item:");
console.log(todoInput);

// Get all elements, that match a CSS selector
const todoItems = document.querySelectorAll("#todo-list-items li");

console.log("The todo items:");
console.log(todoItems);

// Important:
// document.querySelectorAll() returns a NodeList and not an array, so that you
// cannot use all of the array methods with it. What works are the .forEach()
// method as well as accessing a single result by using square brackets[].

console.log("Using .forEach() to work with all todo items:");

todoItems.forEach(item => {
  console.log(item);
});

// Get all childNodes of an element
const todoList = document.querySelector("#todo-list-items");
const todoListChilds = todoList.childNodes;

console.log("Todo items selected using childNodes:");
console.log(todoListChilds);

// Important:
// This also includes all the TextNodes, which is not what you want, in most cases
// It is very common to use the previously shown querySelectorAll() instead.


// TRAVERSING THE DOM

// Select the parent element
console.log("The parent of the input field for a new todo item:");
console.log(todoInput.parentNode);

// Select the parent of the parent, etc...
console.log("The parent of that parent:");
console.log(todoInput.parentNode.parentNode);

// Select the closest ancestor of an element that matches a CSS selector
const card = todoInput.closest(".card");
console.log(
  "The card element, selected by using closest() on the input element:"
);
console.log(card);


// CHANGING STYLES

// With the {element}.style syntax you can change most of the CSS properties, using plain
// JavaScript. For all properties with a dash, like border-radius, you have to convert
// them to camelCase to modify them.

todoForm.style.border = "1px solid rgba(0,0,0,.125)";
todoForm.style.borderRadius = "0.25rem";
todoForm.style.padding = "1rem";
todoForm.style.marginBottom = "1rem";

// BUT You should avoid to change styles directly and move on to the better way of
// adding and removing CSS classes instead. Using classes keeps the styling
// in CSS and doesn't put it into your JavaScript.

// Reseting inline styles
todoForm.style = "";

// Adding a CSS class
todoForm.classList.add("todo-form");

// Removing or toggling a CSS class
todoForm.classList.remove("reset-todo-form");
todoForm.classList.toggle("reset-todo-form");

// Checking if a CSS class is used
console.log("Is the .todo-form CSS class used?");
console.log(todoForm.classList.contains("todo-form"));

// You can read more about the {element}.classList feature here:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList


// CHANGING CONTENTS

// Updating the text of an item
const todoFormHeadline = todoForm.querySelector("h4");
todoFormHeadline.textContent = "Add a new item";

// Updating the content of an item, using rendered HTML
todoFormHeadline.innerHTML = "Add a <strong>new</strong> item";

// Important:
// When using {element}.innerHTML the browser renders the element again, so this
// should NOT be used, when you want to update some text only.


// CHANGING ELEMENT ATTRIBUTES

// Adding or updating an attribute
const todoButton = document.querySelector("#todo-button");
todoButton.setAttribute("disabled", "disabled");

todoInput.setAttribute("disabled", "disabled");
todoInput.setAttribute("placeholder", "Learning Web Development ...");

// Removing an attribute
// todoButton.removeAttribute("disabled");
// todoInput.removeAttribute("placeholder");


// ADDING AND REMOVING ELEMENTS

// Creating a new element for the todo list
const newItem = document.createElement("li");

// Adding all needed CSS classes
newItem.classList.add(
  "list-group-item",
  "d-flex",
  "justify-content-between",
  "align-items-center"
);

// Adding the content
newItem.innerHTML = `
Taking a break
<button class="btn btn-remove btn-secondary btn-sm">x</button>
`;

// Appending the new item to the <ul> element
todoList.appendChild(newItem);

// Removing our new element from its parent
let lastTodoItem = todoList.querySelector(".list-group-item:last-child");
todoList.removeChild(lastTodoItem);

// Inserting our new element before the first one in the list
firstTodoItem = todoList.querySelector(".list-group-item:first-child");
todoList.insertBefore(newItem, firstTodoItem);

// Moving an elements position to the end inside of its parent element
firstTodoItem = todoList.querySelector(".list-group-item:first-child");
todoList.appendChild(firstTodoItem);
