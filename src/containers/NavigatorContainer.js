/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigator from '../navigator';
import { addListener } from '../navigator/navigationHelper';

class NavigatorContainer extends Component {

    render() {
        const { dispatch, navigation } = this.props;
        return (
            <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation, addListener })} />
        )
    }
}

const mapStateToProps = state => ({
    navigation: state.navigation
});

export default NavigatorContainer = connect(mapStateToProps)(NavigatorContainer);