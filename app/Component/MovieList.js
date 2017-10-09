import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    ListView,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';

import styles from '../Styles/Main'

console.ignoredYellowBox = ['Remote debugger'];

class MovieList extends Component {

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
        let ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        let url = "http://api.douban.com/v2/movie/top250";
        MovieList.get(url, (ret) => {
            this.setState({
                infoList: ds.cloneWithRows(ret.subjects),
                loading: true,
            });
        });
    }


    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            infoList: ds.cloneWithRows([]),
            loading: false,
        };

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
                </View>
            </TouchableHighlight>
        );
    }


    render() {
        if (!this.state.loading) {
            return (
                <View style={[styles.container, {flexDirection: 'row', justifyContent: 'center'}]}>
                    <ActivityIndicator style={{alignItems: 'center'}}
                                       size={70}/>

                    <Text style={{alignSelf: 'center'}}> 加载中。。。</Text>
                </View>);
        }
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.infoList}
                          renderRow={this.renderMovieList}
                          enableEmptySections={true}/>

            </View>
        );
    }

}

export {MovieList as default}