import OrderEnum from "@/emums/order-enum";
import { ToDoData } from "@/types";

export class TodoOrderUtil {
    static orderTodos(todos: Array<ToDoData>, order: OrderEnum): Array<ToDoData> {
        switch (order) {
            case OrderEnum.ASC:
                return todos.sort((a, b) => (a.label > b.label ? 1 : -1));
            case OrderEnum.DESC:
                return todos.sort((a, b) => (a.label > b.label ? -1 : 1));
            case OrderEnum.IMPORTANT:
                return todos.sort((a, b) => (a.important === b.important) ? 0 : a.important ? -1 : 1);
            default:
                return todos.sort();
        }
    }
}