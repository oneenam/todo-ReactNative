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
        alignItems: 'center'
    }
});