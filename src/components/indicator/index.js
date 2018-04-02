import React, { Component } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
const { height } = Dimensions.get('window');

export default IndicatorComponent = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerLoader}>
                <ActivityIndicator animating={props.animating} style={styles.loader} size="large" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999999,
        backgroundColor: 'transparent',
    },
    containerLoader: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#00000090',
        flexDirection: 'row',
        borderRadius: 15
    },
    loader: {
        margin: 10,
        transform: [{ scale: 1.3 }]
    }
});