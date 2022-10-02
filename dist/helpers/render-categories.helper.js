export const renderCategories = (categories, categoriesContainerElement, selectedCategory) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const radioLabelElement = document.createElement("label");
        radioLabelElement.setAttribute("for", `category-${category}`);
        radioLabelElement.textContent = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(radioLabelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
