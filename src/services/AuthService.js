/**
 * Created by Muhammad Enamul Huq Sarkar on 4/2/18
 */

import ServiceConfig from './ServiceConfig';

export default class AuthService extends ServiceConfig {

    login = (body, thenFn, catchFn) => {
        this.post('users/login', '', body, thenFn, catchFn);
    };

    registration = (body, thenFn, catchFn) => {
        this.post('users/registration', '', body, thenFn, catchFn);
    };

}