import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

class TextComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text style={styles.title} numberOfLines={3} selectable={true} onPress={() => {
                    alert('click')
                }}>阿里开根据 Donghl</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
        title: {
            color: 'red',
            fontSize: 30,
            lineHeight: 30,
            padding: 6,
            // fontStyle: 'italic',
            fontWeight: ('bold', '800'),
            textShadowOffset: {width: 4, height: 4},
            textShadowColor: 'blue',
            textShadowRadius: 3,
            letterSpacing: 5,
            textAlign: 'center',
            textDecorationLine: 'line-through',

        },
    }
    );
export {TextComponent as default}