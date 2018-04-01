/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles';

const TextField = (props) => (
    <View style={[styles.textField, props.style]}>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            underlineColorAndroid='transparent'
            autoFocus={false}
            multiline={false}
            autoCorrect={false}
            {...props} />
    </View>
)

export default TextField;