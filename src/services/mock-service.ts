import { ToDoData } from '../components/types'

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
        return this._mockTodos;
    };

}