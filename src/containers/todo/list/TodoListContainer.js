/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Platform, TouchableOpacity, Text } from "react-native";
import { NavigationActions } from 'react-navigation'
import Label from '../../../components/label';
import styles from './styles';

class TodoListContainer extends Component {

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
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }

    handleAddItem = () => {
        this.props.navigation.dispatch(NavigationActions.reset(
            {
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'TodoAdd', params: { addItem: true } })]
            }
        ));
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Label title="todo" />
                    <View style={styles.headerButtonStyle}>
                        <View style={styles.lineStylel} />
                        <TouchableOpacity onPress={this.handleAddItem} style={{ marginRight: 30 }}>
                            <View style={styles.addItemButton}>
                                <Text style={[{ fontSize: 18, color: 'white' }]}>
                                    +
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}


export default TodoListContainer;
