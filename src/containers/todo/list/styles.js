/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */
import { StyleSheet, Platform, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        flexDirection: 'column',
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerButtonStyle: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    lineStylel: {
        width: width,
        height: 1,
        backgroundColor: '#C0C0C0',
        position: 'absolute',
        alignSelf: 'center'
    },
    addItemButton: {
        height: 48,
        width: 48,
        borderRadius: 24,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    rowStyle: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column'
    },
    rowsSectionStyle: {
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'verdana',
        fontSize: 18,
        color: 'gray'
    },
    radioButtonStyle: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    todoTextStyle: {
        marginLeft: 20,
        flex: 1,
        fontFamily: 'verdana',
        fontSize: 18,
        color: 'black'
    },    
    xTextStyle: {
        width: 32,
        height: 32,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'verdana',
        fontSize: 18,
        color: 'black'
    },
    rowBottomLine: {
        marginLeft: 30,
        marginTop: 20,
        backgroundColor: '#C0C0C0',
        height: 1
    }
});