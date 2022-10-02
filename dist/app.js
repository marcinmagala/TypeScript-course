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
const tasksContainerElement = document.querySelector(".tasks");
const addTaskButton = document.querySelector("button");
const taskNameInputElement = document.querySelector("#name");
const categoriesContainerElement = document.querySelector(".categories");
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: "hobby",
    },
    {
        name: "Pójść na siłkę",
        done: true,
        category: "gym",
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: "work",
    },
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const labelElement = document.createElement("label");
        const id = `task-${index}`;
        labelElement.setAttribute("for", id);
        labelElement.innerText = task.name;
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        const radioLabelElement = document.createElement("label");
        radioLabelElement.setAttribute("for", `category-${category}`);
        radioLabelElement.textContent = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(radioLabelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
renderCategories();
// <li>
//           <input
//             type="radio"
//             name="category"
//             value="hobby"
//             id="category-hobby"
//           />
//           <label for="category-hobby">hobby</label>
//         </li>
const addTask = (task) => {
    tasks.push(task);
};
addTaskButton.addEventListener("click", (e) => {
    const selectionRadioElement = document.querySelector("input[type='radio']:checked");
    const selectedCategory = selectionRadioElement.value;
    e.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render();
    taskNameInputElement.value = "";
});
render();
