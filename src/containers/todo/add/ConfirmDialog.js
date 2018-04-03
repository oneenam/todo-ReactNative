/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React from 'react'
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';


const ConfirmDialog = (props) => {
    return (
        <Modal isVisible={props.isVisible}>
            <View style={styles.dialogContainer}>
                <View style={styles.dialogSubContainer}>
                    <Text style={styles.dialogTitle}>Add item</Text>
                    <View style={styles.dialogMessageContainer}>
                        <Text style={styles.dialogMessageText}>Do you want to add more?</Text>
                    </View>
                    <View style={styles.dialogButtonContainer}>
                        <TouchableOpacity style={{ margin: 4 }} onPress={() => props.noPress()}>
                            <View style={styles.dialogButtonStyle}>
                                <Text style={styles.dialogButtonText}>NO</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ margin: 4 }} onPress={() => props.yesPress()}>
                            <View style={styles.dialogButtonStyle}>
                                <Text style={styles.dialogButtonText}>YES</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

ConfirmDialog.propTypes = {
    isVisible: PropTypes.bool,
};

ConfirmDialog.defaultProps = {
    isVisible: false,
};

export default ConfirmDialog;