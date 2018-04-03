/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Keyboard } from "react-native";
import moment from 'moment'
import { connect } from 'react-redux';
import Button from '../../components/button';
import TextField from '../../components/textfield';
import Label from '../../components/label';
import styles from './styles';
import { serviceLogin, serviceRegistration, resetAuthService } from '../../actions/AuthAction';
import { serviceTodos } from '../../actions/TodoAction';
import Indicator from '../../components/indicator';
import { emailValidate, showToast } from '../../utility'
import InfoDialog from '../../components/infoDialog';

class AuthContainer extends Component {

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

        Keyboard.dismiss();

        if (!this.state.email) {
            showToast("Please put your email");
        } else if (!emailValidate(this.state.email)) {
            showToast("Invalid email");
        } else if (!this.state.password) {
            showToast("Please put your password");
        }
        else {
            if (this.state.isLogin) {
                this.props.loginAction({ email: this.state.email, password: this.state.password });
            } else {
                this.props.registrationAction({ email: this.state.email, password: this.state.password });
            }
        }

    }

    handleAuthMode = () => {
        this.setState({ isLogin: !this.state.isLogin });
    }

    yesPress = () => {
        this.props.resetAuth();
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    (this.props.isLoading) &&
                    <Indicator animating={this.props.isLoading} />
                }
                {
                    (this.props.error) && <InfoDialog title="Auth" message={this.props.error} isVisible={true} yesPress={this.yesPress.bind()} />
                }

                <View style={[styles.subContainer, { flex: 0.3, alignItems: 'center' }]}>
                    <Label title="todo" />
                    <Label title={moment(new Date()).format('dddd DD MMM YYYY')} style={{ fontSize: 14, fontWeight: 'normal', color: 'gray', marginTop: 10 }} />
                </View>
                <View style={[styles.subContainer, { flex: 0.6 }]}>
                    <TextField placeholder="Email" keyboardType="email-address"
                        value={this.state.email}
                        onChangeText={(text) =>
                            this.setState({ email: text })
                        }
                    />
                    <TextField placeholder="Password" value={this.state.password} secureTextEntry={true}
                        onChangeText={(text) =>
                            this.setState({ password: text })
                        } />
                    <Button title={(this.state.isLogin) ? "LOGIN" : "REGISTRATION"} onPress={this.handleAuthentication} style={{ marginTop: 20 }} />
                </View>
                <View style={[styles.subContainer, { flex: 0.1 }]}>
                    <Button title={(this.state.isLogin) ? "REGISTRATION" : "LOGIN"} onPress={this.handleAuthMode} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    error: state.auth.error,
    xauth: state.auth.xauth
});

const mapDispatchToProps = (dispatch) => ({
    loginAction: (params) => dispatch(serviceLogin(params)),
    registrationAction: (params) => dispatch(serviceRegistration(params)),
    resetAuth: () => dispatch(resetAuthService())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
