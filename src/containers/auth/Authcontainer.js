/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from "react-native";
import moment from 'moment'
import { NavigationActions } from 'react-navigation'
import Button from '../../components/button';
import TextField from '../../components/textfield';
import Label from '../../components/label';
import styles from './styles';

class Authcontainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogin: true,
            email: '',
            password: ''
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }

    handleAuthentication = () => {
        //console.log(this.props);
        if (this.state.isLogin) {
            this.props.navigation.dispatch(NavigationActions.reset(
                {
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'TodoAdd' })]
                }
            ));
        } else {

        }
    }

    handleAuthMode = () => {
        this.setState({ isLogin: !this.state.isLogin });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.subContainer, { flex: 0.3, alignItems: 'center' }]}>
                    <Label title="todo" />
                    <Label title={moment(new Date()).format('dddd DD MMM YYYY')} style={{ fontSize: 14, fontWeight: 'normal', color: 'gray', marginTop: 10 }} />
                </View>
                <View style={[styles.subContainer, { flex: 0.6 }]}>
                    <TextField placeholder="Email" keyboardType="email-address"
                        value={this.state.email}
                        onChangeText={(text) =>
                            this.emailValidate(text)
                        }
                    />
                    <TextField placeholder="Password" secureTextEntry={true} />
                    <Button title={(this.state.isLogin) ? "LOGIN" : "REGISTRATION"} onPress={this.handleAuthentication} style={{ marginTop: 20 }} />
                </View>
                <View style={[styles.subContainer, { flex: 0.1 }]}>
                    <Button title={(this.state.isLogin) ? "REGISTRATION" : "LOGIN"} onPress={this.handleAuthMode} />
                </View>
            </View>
        )
    }
}


export default Authcontainer;
