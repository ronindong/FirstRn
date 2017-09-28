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
} from 'react-native';


export default class FirstRn extends Component {

    constructor(props) {
        super(props);
        let movies = [
            {title: 'ask来绞股蓝'},
            {title: '危机扩散'},
            {title: '爱上女奥尔'},
            {title: '女没你事'},
            {title: '女没你事'},
            {title: '女没你事'},
            {title: '女没你事'},
            {title: '爱上公开拉垃圾'},
            {title: '爱上公开拉垃圾'},
        ];

        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 != row2
        });

        this.state = {
            movies: dataSource.cloneWithRows(movies)
        };
    }

    renderMovieList(movie) {

        return (
            <View style={[styles.item]}>
                <View>
                    <Image style={styles.itemImage}
                           source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}/>
                </View>
                <View>
                    <Text style={styles.itemText}>
                        {movie.title}
                    </Text>
                </View>
            </View>);
    }


    render() {

        return (
            <View style={styles.container}>

                <ListView dataSource={this.state.movies}
                          renderRow={this.renderMovieList}/>

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
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6435c9',
        margin: 6,
        padding: 10,
    },
    itemOne: {},
    itemTwo: {
        // alignSelf:'center',
        // flex: 1,
    },
    itemThree: {},
    itemText: {
        fontSize: 23,
        fontWeight: '300',
        color: '#6435c9',
        paddingTop: 20,
        paddingBottom: 20,
    },

    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        backgroundColor: '#a5aCFF',
        // padding: 3,
        marginTop: 20,
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
