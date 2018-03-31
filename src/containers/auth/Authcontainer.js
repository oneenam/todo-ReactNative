/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from "react-native";
import moment from 'moment'
import Button from '../../components/button';
import TextField from '../../components/textfield';
import Label from '../../components/label';
import styles from './styles';

class Authcontainer extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }

    handleLogin = () => {
        console.warn("login");
    }

    handleRegistration = () => {
        console.warn("registration");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.subContainer, { flex: 0.3, alignItems: 'center' }]}>
                    <Label title="todo" />
                    <Label title={moment(new Date()).format('dddd DD MMM YYYY')} style={{ fontSize: 14, fontWeight: 'normal', color: 'gray', marginTop: 10 }} />
                </View>
                <View style={[styles.subContainer, { flex: 0.6 }]}>
                    <TextField placeholder="Email" keyboardType="email-address" />
                    <TextField placeholder="Password" secureTextEntry={true} />
                    <Button title="LOGIN" onPress={this.handleLogin} style={{ marginTop: 20 }} />
                </View>
                <View style={[styles.subContainer, { flex: 0.1 }]}>
                    <Button title="REGISTRATION" onPress={this.handleRegistration} />
                </View>
            </View>
        )
    }
}


export default Authcontainer;
