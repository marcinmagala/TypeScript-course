export class Task {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
    }
}
// export interface Task {
//   name: string;
//   done: boolean;
//   category?: Category;
// }
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
