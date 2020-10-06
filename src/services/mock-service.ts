import { ToDoData } from '../types'

export default class MockService {
    _mockTodos: ToDoData[] = [
        {
            label: 'z task',
            important: false,
            done: false,
            hidden: false,
            id: 1
        },
        {
            label: 'a task',
            important: true,
            done: false,
            hidden: false,
            id: 2
        },
        {
            label: 'other task',
            important: false,
            done: true,
            hidden: false,
            id: 3
        }
    ];


    getAllTodos = async () => {
        const todos = localStorage.getItem('todos');
        return todos !== null ? JSON.parse(todos) : this._mockTodos;;
    };

    saveTodos(todos: ToDoData[]) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}