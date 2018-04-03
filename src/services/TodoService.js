/**
 * Created by Muhammad Enamul Huq Sarkar on 4/2/18
 */

import ServiceConfig from './ServiceConfig';

export default class TodoService extends ServiceConfig {

    todos = (xAuth, thenFn, catchFn) => {
        this.get('todos', xAuth, thenFn, catchFn);
    };

    updateTodo = (id, xAuth, body, thenFn, catchFn) => {
        this.patch(`todos/${id}`, xAuth, body, thenFn, catchFn);
    };

    deleteTodo = (id, xAuth, thenFn, catchFn) => {
        this.delete(`todos/${id}`, xAuth, thenFn, catchFn);
    };

    createTodo = (xAuth, body, thenFn, catchFn) => {
        this.post('todos', xAuth, body, thenFn, catchFn);
    };


}