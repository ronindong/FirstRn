/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import BaseFlexDirection from './app/Component/BaseFlexDirection.js'
import TextComponent from './app/Component/TextComponent.js'

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }

}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true}

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText}
            });
        }, 3000)
    }


    onPressClick() {
        this.props.text = 'click text'
    }

    render() {
        let display = this.state.showText ? this.props.text : ' '
        return (
            <Text onPress={() => this.onPressClick()}>{display}</Text>
        );
    }


}

export default class FirstRn extends Component {

    constructor() {
        super();
        this.state = {cText: "Learning React Native!"}
    }

    pressClick() {
        this.state.cText = "click";
        alert('click')

    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        let platform = require('Platform');

        //平台名字name
        let osName;
        if (platform.OS === 'android') {
            osName = 'android';
        } else {
            osName = 'ios';
        }

        let display = this.state.cText;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={() => this.pressClick()}>
                    hello {display}
                </Text>
                <Blink text='go go go ...'/>
                <Greeting name={osName}/>
                <Image source={pic} style={{width: 193, height: 110}}/>
                {/*<BaseFlexDirection/>*/}
                <TextComponent>alskjl</TextComponent>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a5aCFF',
        padding: 3,
        margin: 4,

    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('FirstRn', () => FirstRn);
