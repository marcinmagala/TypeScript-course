// let age: number = 24;
// age = 25;

// let ageAsString: string = "dwadziescia cztery";
// console.log(`${age}`);

// const add = (v1: number, v2: number) => v1 + v2;

// console.log(add(1, 8));

// Basic types in practice

// const input1: HTMLInputElement = document.querySelector("#input1");
// const input2: HTMLInputElement = document.querySelector("#input2");
// const addButtonElement = document.querySelector("button");

// const add = (v1: number, v2: number) => v1 + v2;

// addButtonElement.addEventListener("click", () => {
//   const sum = add(Number(input1.value), Number(input2.value));
//   console.log(sum);
// });

// Union types

// const logAge = (age: number | string) => {
//   console.log(`Mam ${age} lata.`);
// };

// logAge(24);
// logAge("dwadziescia cztery");

// Boolean type

// const buttonElement = document.querySelector("button");

// const calculatePrice = (orginalPrice: number, hasDiscount: boolean) => {
//   return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
// };

// buttonElement.addEventListener("click", () => {
//   const orginalPrice: number = 50;
//   const hasDiscount: boolean =
//     new URLSearchParams(window.location.search).get("discount") === "true";

//   console.log(calculatePrice(orginalPrice, hasDiscount));
// });

// Starting Project

// <li>
// <label for="task-1">Wyrzuciś śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
// </li>

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const addTaskButton: HTMLButtonElement = document.querySelector("button");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");

const tasks: string[] = ["Wyrzucić śmieci", "Pójść na siłkę", "Nakarmić koty"];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addTaskButton.addEventListener("click", (e: Event) => {
  e.preventDefault();
  addTask(taskNameInputElement.value);
  render();
  taskNameInputElement.value = "";
});

render();
