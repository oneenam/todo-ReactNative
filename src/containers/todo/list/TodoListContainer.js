/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Platform, TouchableOpacity, Text, FlatList } from "react-native";
import { NavigationActions } from 'react-navigation'
import Label from '../../../components/label';
import styles from './styles';
import { serviceUpdateTodo, serviceDeleteTodo } from '../../../actions/TodoAction';

class TodoListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: []
        };
    }

    componentWillMount() {
        this.populateList(this.props.todos);
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


    populateList = (data) => {
        var arr = [];
        data.map((obj, index) => {
            if (obj.createdAt) {
                i = index;
                arr.push({ createdAt: obj.createdAt });
            }
            if (obj.todos) {
                obj.todos.map((o, index) => {
                    arr.push(o);
                });
            }
        });
        this.setState({ dataSource: arr });
    }

    handleTodoComplete = (index, item) => {
        //TODO: show alert for confirmation to delete
        this.props.todoUpdateAction(item._id, this.props.xauth, { text: item.text, completed: !item.completed });
    }

    handleTodoDelete = (index, item) => {
        //todo: show alert for confirmation to delete        
        this.props.todoDeleteAction(item._id, this.props.xauth);
    }

    renderListItem = (index, item) => {
        if (item && item.text) {
            return (
                <View style={styles.rowStyle}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {
                            (item.completed) ?
                                <TouchableOpacity onPress={this.handleTodoComplete.bind(this, index, item)}>
                                    <View style={[styles.radioButtonStyle, { backgroundColor: 'black' }]} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={this.handleTodoComplete.bind(this, index, item)}>
                                    <View style={[styles.radioButtonStyle, { borderColor: '#C0C0C0', borderWidth: 1 }]} />
                                </TouchableOpacity>
                        }

                        <Text style={[styles.todoTextStyle, { textDecorationLine: (item.completed) ? "line-through" : "none" }]}>
                            {item.text}
                        </Text>
                        <TouchableOpacity onPress={this.handleTodoDelete.bind(this, index, item)}>
                            <Text style={styles.xTextStyle}>
                                X
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.rowBottomLine} />
                </View>
            );
        } else {
            return (
                <Text style={styles.rowsSectionStyle}>{(item && item.createdAt) && item.createdAt}</Text>
            );
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Label title="todo" />
                    <View style={styles.headerButtonStyle}>
                        <View style={styles.lineStylel} />
                        <TouchableOpacity onPress={this.handleAddItem} style={{ marginRight: 30 }}>
                            <View elevation={5} style={styles.addItemButton}>
                                <Text style={[{ fontSize: 18, color: 'white' }]}>
                                    +
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {
                    (this.state.dataSource) &&
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={
                            ({ index, item }) => this.renderListItem(index, item)
                        }
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state}
                    />

                }
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.todo.isLoading,
    error: state.todo.error,
    todos: state.todo.todos,
    xauth: state.auth.xauth
});

const mapDispatchToProps = (dispatch) => ({
    todoUpdateAction: (id, xAuth, body) => dispatch(serviceUpdateTodo(id, xAuth, body)),
    todoDeleteAction: (id, xAuth) => dispatch(serviceDeleteTodo(id, xAuth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
