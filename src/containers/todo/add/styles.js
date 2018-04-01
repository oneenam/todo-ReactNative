/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */
import { Dimensions } from "react-native";
import { StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    topView: {
        width: width,
        height: height / 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        width: width,
        height: height / 2,
        backgroundColor: 'rgba(192,192,192,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateLabel: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'gray',
        marginTop: 10
    },
    inputView: {
        width: 300,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'white',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlViews: {
        position: 'absolute',
        zIndex: 9999,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textField: {
        fontFamily: 'verdana',
        fontSize: 18,
        alignSelf: 'stretch',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 4,
        marginRight: 40
    },
    noteLabel: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'black'
    },
    plusButton: {
        width: 48, 
        height: 48, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});