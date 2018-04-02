/**
 * Created by Muhammad Enamul Huq Sarkar on 4/2/18
 */

import ServiceConfig from './ServiceConfig';

export default class TodoService extends ServiceConfig {

    todos = (xAuth, thenFn, catchFn) => {
        this.get('todos', xAuth, thenFn, catchFn);
    };


}