// let age: number = 24;
// age = 25;
import renderTasks from "./helpers/render-tasks.helper.js";
import { Category, Task } from "./types/types.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";
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
const tasksContainerElement = document.querySelector(".tasks");
const addTaskButton = document.querySelector("button");
const taskNameInputElement = document.querySelector("#name");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.GYM,
    Category.HOBBY,
    Category.WORK,
];
const tasks = [
    new Task("Wyrzucić śmieci", false, Category.HOBBY),
    new Task("Pójść na siłkę", true, Category.GYM),
    new Task("Nakarmić koty", false, Category.WORK),
    // {
    //   name: "Wyrzucić śmieci",
    //   done: false,
    //   category: Category.HOBBY,
    // },
    // {
    //   name: "Pójść na siłkę",
    //   done: true,
    //   category: Category.GYM,
    // },
    // {
    //   name: "Nakarmić koty",
    //   done: false,
    //   category: Category.WORK,
    // },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(new Task(taskNameInputElement.value, false, selectedCategory));
    renderTasks(tasks, tasksContainerElement);
    taskNameInputElement.value = "";
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const taskClass = new TaskClass();
