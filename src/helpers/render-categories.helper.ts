import { Category } from "../types/types";

export const renderCategories = (
  categories: Category[],
  categoriesContainerElement: HTMLElement,
  selectedCategory: Category
) => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;

    radioInputElement.addEventListener("change", () => {
      selectedCategory = category;
    });

    const radioLabelElement: HTMLLabelElement = document.createElement("label");
    radioLabelElement.setAttribute("for", `category-${category}`);
    radioLabelElement.textContent = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(radioLabelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};
