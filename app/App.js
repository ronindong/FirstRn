/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.ignoredYellowBox = ['Remote debugger'];

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import MovieList from '../app/Component/MovieList'
import TabNavigator from 'react-native-tab-navigator'
import styles from './Styles/Main'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

const {screenWidth, screenHeight} = Dimensions.get('window');
const basePx = 375

function px2dp(px) {
    return px * screenWidth / basePx
}

class App extends Component {

    state = {
        selTAB: 'home',
    };

    render() {
        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    selected={this.state.selTAB === 'home'}
                    title='Home'
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
                    badgeText={"1"}
                    onPress={() => {
                        this.setState({
                            selTAB: 'home',
                        })
                    }}>
                    <MovieList/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selTAB === 'movie'}
                    title='movie'
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name='rocket' size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name='rocket' size={px2dp(22)} color="#3496f0"/>}
                    onPress={() => {
                        this.setState({
                            selTAB: 'movie',
                        })
                    }}>
                    <MovieList/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selTAB === 'my'}
                    title='my'
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="shower" size={40} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="shower" size={40} color="#3496f0"/>}
                    onPress={() => {
                        this.setState({
                            selTAB: 'my',
                        })
                    }}>
                    <MovieList/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}


AppRegistry.registerComponent('FirstRn', () => App);