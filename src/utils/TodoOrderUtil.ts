import OrderEnum from "@/emums/order-enum";
import { ToDoData } from "@/types";


export function orderTodos(todos: Array<ToDoData>, order: OrderEnum): Array<ToDoData> {

    if (todos == undefined) return new Array();

    const todosCopy = [...todos];

    switch (order) {
        case OrderEnum.ASC:
            return todosCopy.sort((a, b) => (a.label > b.label ? 1 : -1));
        case OrderEnum.DESC:
            return todosCopy.sort((a, b) => (a.label > b.label ? -1 : 1));
        case OrderEnum.IMPORTANT:
            return todosCopy.sort((a, b) => (a.important === b.important) ? 0 : a.important ? -1 : 1);
        default:
            return todosCopy.sort();
    }
}
