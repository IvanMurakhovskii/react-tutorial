import { ToDoData } from '../types';

export default class TodoService {
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

    getAllTodos = async (): Promise<ToDoData[]> => {
        const todos = localStorage.getItem('todos');
        return todos !== null ? JSON.parse(todos) : this.createRandomTodos();
    };

    saveTodos(todos: ToDoData[]) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    getNextId = (todos: ToDoData[]): Function => {
        let maxId = Math.max(...todos.map(item => item.id), 0);

        return function nextId() {
            console.log(maxId);
            return maxId += 1;
        }
    }
}