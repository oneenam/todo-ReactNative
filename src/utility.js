/**
 * Created by Muhammad Enamul Huq Sarkar on 4/2/18
 */
import { Platform, AlertIOS, ToastAndroid } from "react-native";

export const fetchConfig = (method = 'GET', xAuth = '', body = {}) => {
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
                body: JSON.stringify(body)
            };
            break;
        case 'DELETE':
            return {
                method: 'DELETE',
                headers: headers
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

export const emailValidate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
        return false;
    }
    else {
        return true;
    }
}

export const showToast = (msg) => {
    return (
        Platform.select({
            ios: () => AlertIOS.alert('todo', msg),
            android: () => ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.BOTTOM)
        })()
    );
}

