/***
 * DOCUMENT OBJECT MODEL
 */

// let val;

// // Accessing different parts of the document
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// // Selecting within the document without selectors
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute("src");

// let scripts = document.scripts;
// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(function(script) {
//   console.log(script.getAttribute("src"));
// });

// console.log(val);

/***
 * DOM selectors for single elements
 */
// Document.getElementById

// console.log(document.getElementById("task-title"));

// // Get things from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");

// // Change Styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";

// // Change content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Tasks";
// taskTitle.innerHTML = "<span style='color: red;'>Task List</span>";

// document.querySelector

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "red";
// document.querySelector(" ul li").style.color = "blue";

// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(3)").style.color = "yellow";
// document.querySelector("li:nth-child(4)").textContent = "Hello World";
// document.querySelector("li:nth-child(odd)").style.background = "#ccc";

/***
 * DOM selectors for multiple elements
 *
 */
// document.getElementsByClassName
// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// console.log(listItems);

// // document.getElementByTagName
// let lis = document.getElementsByTagName("li");
// console.log(lis);

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index}: Reversed list with JS`;
// });

// console.log(lis);

// querySelectorAll  //returns a nodelist

let items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach((item, index) => {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(li => {
  li.style.background = "#ccc";
});

liEven.forEach(li => {
  li.style.background = "#ff0000";
});

for (i = 0; i < liEven.length; i++) {
  liEven[i].style.color = "white";
}

for (i = 0; i < liOdd.length; i++) {
  liOdd[i].style.color = "dodgerblue";
}

console.log(items);
