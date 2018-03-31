/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React from 'react'
import PropTypes from 'prop-types';
import { Text } from 'react-native'
import styles from './styles';

const Label = (props) => {
    return (
        <Text style={[styles.textStyle, props.style]}>
            {props.title}
        </Text>
    );
};

Label.propTypes = {
    title: PropTypes.string,
};

Label.defaultProps = {
    title: 'Text title',
};

export default Label;