/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React from 'react'
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity } from 'react-native'

//TODO: move styles to styles.js

const InfoDialog = (props) => {
    return (
        <Modal isVisible={props.isVisible}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'white', height: 200, alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'verdana', fontSize: 20, fontWeight: 'bold', color: 'black', alignSelf: 'flex-start', margin: 20 }}>{props.title}</Text>
                    <View style={{ height: 72, alignSelf: 'flex-start', justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ fontFamily: 'verdana', fontSize: 16, color: 'black' }}>{props.message}</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity style={{ margin: 4 }} onPress={() => props.yesPress()}>
                            <View style={{ width: 72, alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'verdana', fontSize: 16, fontWeight: 'bold', color: 'black' }}>OK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

InfoDialog.propTypes = {
    isVisible: PropTypes.bool,
};

InfoDialog.defaultProps = {
    isVisible: false,
};

export default InfoDialog;