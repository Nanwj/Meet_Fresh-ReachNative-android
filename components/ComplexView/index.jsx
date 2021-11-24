import React, { Component } from 'react'
import { StyleSheet, Text, Image, View} from 'react-native';

// icons
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';

export default class extends Component {
    render() {

        const { urls, text, price, farm, timeLimit, numOfPerson } = this.props.info

        return (
            <View style={styles.clickable_box}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
                        <AntDesign name="clockcircleo" size={12} color="black" />
                        <Text style={{fontSize: 8, marginLeft: 6}}>{timeLimit.split("T")[0]}</Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, marginLeft: 6}}>
                        <Ionicons name="people" size={12} color="black" />
                        <Text style={{fontSize: 8, marginLeft: 6}}>{Math.ceil(numOfPerson / 9)}/{numOfPerson}</Text>
                    </View>
                    <Feather name="more-horizontal" size={18} color="black" />
                </View>
                
                <Image source={urls[0]} style={{width: 130, height: 130}}/>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1,flexDirection:'column'}}>
                        <Text style={{fontSize: 16}}>{text}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 9}}>{price}</Text>
                            <Text style={{fontSize: 9, marginRight: 8}}>{farm}</Text>
                        </View>
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