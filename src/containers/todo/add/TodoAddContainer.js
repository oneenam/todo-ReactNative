/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, TextInput } from "react-native";
import moment from 'moment'
import Label from '../../../components/label';
import Button from '../../../components/button';
import TextField from '../../../components/textfield';
import styles from './styles';

const { height, width } = Dimensions.get('window');

class TodoAddContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addItem: false,
            todoText: '',
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

    showAddItem = () => {
        this.setState({ addItem: !this.state.addItem });
    }

    render() {
        return (

            <ScrollView >
                <View style={styles.topView}>
                    <Label title="todo" />
                    <Label title={moment(new Date()).format('dddd DD MMM YYYY')} style={styles.dateLabel} />
                </View>

                <View style={styles.controlViews}>
                    {
                        (this.state.addItem) ?
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.textField}
                                    autoCapitalize="none"
                                    underlineColorAndroid='transparent'
                                    autoFocus={true}
                                    multiline={false}
                                    autoCorrect={false}
                                />

                                <TouchableOpacity onPress={this.showAddItem} style={{ position: 'absolute', right: 10 }}>
                                    <View style={styles.plusButton}>
                                        <Text style={[styles.noteLabel, { fontSize: 18 }]}>
                                            +
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            :
                            <Button title="+ Add item" onPress={this.showAddItem} style={{ width: 200 }} />
                    }
                </View>

                <View style={styles.bottomView}>
                    <Label title="What do you want to do today?" style={styles.noteLabel} />
                    <Label title="Start adding items to your to-do list." style={styles.noteLabel} />
                </View>
            </ScrollView>

        )
    }
}


export default TodoAddContainer;
