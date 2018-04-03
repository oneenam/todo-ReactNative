/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import { StyleSheet, Dimensions } from 'react-native';

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
    },
    dialogContainer:{
        flex: 1, 
        justifyContent: 'center'
    },
    dialogSubContainer: {
        backgroundColor: 'white',
        height: 200, 
        alignItems: 'center'
    },
    dialogTitle:{
        fontFamily: 'verdana', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'black', 
        alignSelf: 'flex-start', 
        margin: 20
    },
    dialogMessageContainer:{
        height: 72, 
        alignSelf: 'flex-start', 
        justifyContent: 'center', 
        marginLeft: 20, 
        marginRight: 20
    },
    dialogMessageText:{
        fontFamily: 'verdana', 
        fontSize: 16, 
        color: 'black'
    },
    dialogButtonContainer:{
        alignSelf: 'flex-end', 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 20
    },
    dialogButtonStyle:{
        width: 72, alignItems: 'center'
    },
    dialogButtonText:{
        fontFamily: 'verdana', fontSize: 16, fontWeight: 'bold', color: 'black'
    }
    
});