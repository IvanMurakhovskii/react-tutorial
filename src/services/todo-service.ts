import { ToDoData } from '../types';

class TodoService {
    faker = require('faker/locale/ru');

    createRandomTodos(): ToDoData[] {
        let randomTodos = [];

        for (let i = 0; i < 5; i++) {
            const randomTodo = this.getRandomTodo(i);
            randomTodos.push(randomTodo);
        }

        return randomTodos;
    }

    getRandomTodo(lastId: number): ToDoData {
        return {
            label: this.faker.hacker.phrase(),
            important: this.faker.random.boolean(),
            done: this.faker.random.boolean(),
            hidden: false,
            id: lastId += 1
        }
    }

    getAllTodos = async (): Promise<Array<ToDoData>> => {
        const todos = localStorage.getItem('todos');
        return (todos !== null && todos !== 'undefined') ? JSON.parse(todos) : this.createRandomTodos();
    };

    saveTodos(todos: Array<ToDoData>) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    getNextId = (todos: Array<ToDoData>): Function => {

        let maxId = (todos == undefined) ? 0 : Math.max(...todos.map(item => item.id), 0);

        return function nextId() {
            return maxId += 1;
        }
    }

    createTodoItem(label: string, id: number): ToDoData {
        return {
            label,
            important: false,
            done: false,
            hidden: false,
            id
        }
    }
}

export const todoService = new TodoService();