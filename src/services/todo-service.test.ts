import { todoService } from "./todo-service";

const testTodo = {
    label: "test",
    important: false,
    done: false,
    hidden: false,
    id: 1
}

describe("todoService", () => {
    it('should created random list with todo', () => {
        expect(todoService.createRandomTodos().length).toBe(5);
    });

    it('should return todo item', () => {
        expect(todoService.createTodoItem("test", 1)).toEqual(testTodo);
    });
});