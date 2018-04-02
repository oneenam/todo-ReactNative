/**
 * Created by Muhammad Enamul Huq Sarkar on 4/2/18
 */
import { Platform, AlertIOS, ToastAndroid } from "react-native";

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

