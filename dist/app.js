// let age: number = 24;
// age = 25;
// let ageAsString: string = "dwadziescia cztery";
// console.log(`${age}`);
// const add = (v1: number, v2: number) => v1 + v2;
// console.log(add(1, 8));
// Basic types in practice
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const addButtonElement = document.querySelector("button");
const add = (v1, v2) => v1 + v2;
addButtonElement.addEventListener("click", () => {
    const sum = add(Number(input1.value), Number(input2.value));
    console.log(sum);
});
