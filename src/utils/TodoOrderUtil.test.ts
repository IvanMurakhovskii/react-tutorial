import OrderEnum from "@/emums/order-enum";
import { orderTodos } from "./TodoOrderUtil";

const todos = [
    {
        label: "test1",
        important: false,
        done: false,
        hidden: false,
        id: 1
    },
    {
        label: "test2",
        important: true,
        done: false,
        hidden: false,
        id: 2
    }
]

describe("todoService", () => {
    it('should ordered list by important', () => {
        expect(orderTodos(todos, OrderEnum.IMPORTANT)[0].important).toBeTruthy();
    });

    it('should return todo item', () => {
        expect(orderTodos(todos, OrderEnum.DESC)[0].label).toEqual("test2");
    });
});