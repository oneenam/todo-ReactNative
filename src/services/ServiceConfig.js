/**
 * Created by Muhammad Enamul Huq Sarkar on 4/2/18
 */


const SERVICE_URI = 'https://todo-nodejs-app.herokuapp.com';

export default class ServiceConfig {

    setConfig = (method = 'GET', xAuth = '', body = {}) => {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'xauth': xAuth
        };

        switch (method) {
            case 'POST':
                return {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(body)
                };
                break;
            case 'PATCH':
                return {
                    method: 'PATCH',
                    headers: headers,
                    body: body
                };
                break;
            case 'DELETE':
                return {
                    method: 'PATCH',
                    headers: headers,
                    body: body
                };
                break;

            case 'GET':
                return {
                    method: 'GET',
                    headers: headers
                };
                break;
            default:
                return {};
                break;
        }
    };

    post = (endServiceUri, xAuth, body, thenFn, catchFn) => {

        fetch(`${SERVICE_URI}/${endServiceUri}`, this.setConfig('POST', xAuth, body)).then(response => {
            return response;
        }).then((resp) => {
            thenFn(resp);
        }).catch((err) => {
            catchFn(err);
        })

    };

    get = (endServiceUri, xAuth, thenFn, catchFn) => {

        fetch(`${SERVICE_URI}/${endServiceUri}`, this.setConfig('GET', xAuth)).then(response => {
            return response.json();
        }).then((resp) => {
            thenFn(resp);
        }).catch((err) => {
            catchFn(err);
        })

    };

}