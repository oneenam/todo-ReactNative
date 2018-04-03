/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, TextInput, Keyboard } from "react-native";
import moment from 'moment'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import Label from '../../../components/label';
import Button from '../../../components/button';
import TextField from '../../../components/textfield';
import styles from './styles';
import ConfirmDialog from './ConfirmDialog';
import Indicator from '../../../components/indicator';
import InfoDialog from '../../../components/infoDialog';
import { serviceCreateTodo, todoCreateReset, serviceTodos } from '../../../actions/TodoAction';
import { showToast } from '../../../utility'
const { height, width } = Dimensions.get('window');

class TodoAddContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addItem: false,
            todoText: '',
            addMore: false
        }
    }

    componentDidMount() {
        if (this.props.navigation.state.params) {
            this.setState({ addItem: this.props.navigation.state.params.addItem });
        }
        //this.props.createResetAction();
    }
    

    handleNewTodo = () => {
        if (!this.state.todoText) {
            showToast("Please put todo title.");
        } else {
            Keyboard.dismiss();
            this.props.todoCreateAction(this.props.xauth, { text: this.state.todoText });
        }
    }

    wantToAddMore = () => {
        this.setState({ addMore: !this.state.addItem });
    }

    showAddItem = () => {

        this.setState({ addItem: !this.state.addItem });

    }

    yesPress = () => {
        this.props.createResetAction();
        this.setState({ addMore: true, todoText: '' });
    }

    noPress = () => {
        this.props.createResetAction();
        this.setState({ addMore: false });
        this.props.todosAction(this.props.xauth);
    }

    resetPress = () => {
        this.props.createResetAction();
    }

    gotoList = () => {
        Keyboard.dismiss();
        this.props.todosAction(this.props.xauth);
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
                                    value={this.state.todoText}
                                    onChangeText={(text) =>
                                        this.setState({ todoText: text })
                                    }
                                />

                                <TouchableOpacity onPress={this.handleNewTodo} style={{ position: 'absolute', right: 10 }}>
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
                    {
                        (this.props.navigation.state.params && this.props.navigation.state.params.addItem) &&
                        <View style={{ marginTop: 10 }}>
                            <Button title="My to-do list" onPress={this.gotoList} style={{ width: 200 }} />
                        </View>
                    }

                </View>

                <View style={styles.bottomView}>
                    <Label title="What do you want to do today?" style={styles.noteLabel} />
                    <Label title="Start adding items to your to-do list." style={styles.noteLabel} />
                </View>

                {
                    (this.props.newTodo) &&
                    <ConfirmDialog isVisible={(this.props.newTodo) ? true : false} yesPress={this.yesPress.bind()} noPress={this.noPress.bind()} />
                }

                {
                    (this.props.isLoading) &&
                    <Indicator animating={this.props.isLoading} />
                }
                {
                    (this.props.error) && <InfoDialog title="todo" message={this.props.error} isVisible={true} yesPress={this.resetPress.bind()} />
                }

            </ScrollView>

        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.todo.isLoading,
    error: state.todo.error,
    newTodo: state.todo.newTodo,
    xauth: state.auth.xauth
});

const mapDispatchToProps = (dispatch) => ({
    todoCreateAction: (xAuth, body) => dispatch(serviceCreateTodo(xAuth, body)),
    createResetAction: () => dispatch(todoCreateReset()),
    todosAction: (xAuth) => dispatch(serviceTodos(xAuth))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddContainer);
