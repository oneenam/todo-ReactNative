/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';

const Button = (props) => {
    const { title, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[props.style]}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
};

Button.defaultProps = {
    title: 'Button Text',
    //eslint-disable-next-line no-console
    onPress: () => console.log('Button Pressed')
};

export default Button;