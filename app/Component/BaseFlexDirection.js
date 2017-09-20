import React, {Component} from 'react'
import {
    View
} from 'react-native'
class BaseFlexDirection extends Component {
    render() {

        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1, backgroundColor: '#94af46'}}/>
                <View style={{flex: 1, backgroundColor: '#15aCFF'}}/>
                <View style={{flex: 1, backgroundColor: '#ac5153'}}/>

                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <View style={{flex: 1, backgroundColor: '#afa075'}}/>
                    <View style={{flex: 1, backgroundColor: '#eb64ff'}}/>
                    <View style={{flex: 2, backgroundColor: '#3fac74'}}/>
                </View>
            </View>
        );
    }
}

export default BaseFlexDirection