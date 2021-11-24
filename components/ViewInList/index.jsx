import React, { Component } from 'react'
import { StyleSheet, Text, Image, View} from 'react-native';

// icons
import { Feather, Ionicons } from '@expo/vector-icons';

export default class extends Component {
    render() {

        return (
            <View style={styles.clickable_box}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1}}></Text>
                    <Feather name="more-horizontal" size={18} color="black" />
                </View>
                
                <Image source={this.props.info.urls[0]} style={{width: 130, height: 130}}/>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, flexDirection:'column'}}>
                        <Text style={{fontSize: 16}}>{this.props.info.text}</Text>
                        <Text style={{fontSize: 9}}>{this.props.info.price}</Text>
                    </View>
                    <Ionicons style={{marginTop: 10}} name="add-circle" size={24} color="#1ebc8d" />
                </View>
            </View>
            
        )
    }
}


const styles = StyleSheet.create({
    clickable_box: {
        marginTop: 15,
        paddingTop: 6,
        paddingHorizontal: 6,
        paddingBottom: 3,
        borderWidth: 2,
        borderColor: '#aaa',
        borderStyle: 'solid',
        borderRadius: 5,
    },
})