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
    View,
    ListView,
    TouchableHighlight,
} from 'react-native';

console.ignoredYellowBox = ['Remote debugger'];
export default class FirstRn extends Component {

    constructor(props) {
        super(props);
        let url = "http://api.douban.com/v2/movie/top250";
        let ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            infoList: ds.cloneWithRows([]),
        };
        FirstRn.get(url, (ret) => {
            this.setState({
                infoList: ds.cloneWithRows(ret.subjects),
            });
        });
    }

    static get(url, callback) {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                callback(json);
            })
            .catch(err => {
                console.log(err);
            }).done();
    }

    static _onPress() {
        console.log('')
    }


    renderMovieList(info) {
        return (
            <TouchableHighlight
                activeOpacity={0.9}
                onPress={() => this._onPress}>
                <View style={[styles.item]}>
                    <View>
                        <Image style={styles.itemImage}
                               source={{uri: info.images.large}}/>
                    </View>
                    <View>
                        <Text style={styles.itemText}>
                            {info.title}
                        </Text>
                        <Text style={styles.itemText}>{info.year}</Text>
                    </View>
                    {() => this.getTextView(info)}
                </View>
            </TouchableHighlight>
        );
    }

    getTextView(info) {
        let texts = [];
        for (let i = 0; i < 2; i++) {
            texts.push(
                <View>
                    <Text style={styles.itemText}>{info.title}</Text>
                    {/*<Text style={styles.itemText}>{info.year}</Text>*/}
                </View>
            );
        }
        return texts
    }


    render() {

        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.infoList}
                          renderRow={this.renderMovieList}
                          enableEmptySections={true}/>

            </View>
        );
    }

}

const styles = StyleSheet.create({

    itemImage: {
        width: 100,
        height: 120,
    },
    item: {
        flex:1,
        flexDirection:'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6435c9',
        margin: 6,
        padding: 10,
    },
    itemText: {
        fontSize: 20,
        fontWeight: '300',
        color: '#6435c9',
        paddingTop: 10,
        paddingBottom: 10,
    },

    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        backgroundColor: '#a5aCFF',
        // padding: 3,
        // marginTop: 20,
        borderWidth: 1,
        // borderColor: '#eae311',
        // borderRadius: 15,
        shadowColor: '#23a921',
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            height: 1, width: 0
        }


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
