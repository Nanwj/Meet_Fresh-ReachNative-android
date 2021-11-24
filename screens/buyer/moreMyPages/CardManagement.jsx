import React, { Component } from 'react'
import { View, Image, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

// icons
import { FontAwesome } from '@expo/vector-icons';

export default class CardManagement extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingHorizontal: 30}}>
                {/* payment selection */}
                <View style={styles.cardList}>
                    <ScrollView>
                        <TouchableOpacity style={styles.cardContainer}>
                            <CheckBox value={false} />
                            <Image style={styles.cardImg} source={require('./../../../assets/images/master_logo.png')} />
                            <View style={styles.cardText}>
                                <Text>CommonWealth Bank</Text>
                                <Text>No. 1234 xxxx xxxx 4321</Text>
                                <Text>N. Yang</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardContainer}>
                            <CheckBox value={false} />
                            <Image style={styles.cardImg} source={require('./../../../assets/images/visa_logo.png')} />
                            <View style={styles.cardText}>
                                <Text>China Bank</Text>
                                <Text>No. 9987 xxxx xxxx 7899</Text>
                                <Text>N. Yang</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.addAddressContainer}>
                    <Text style={styles.addAddressText}>Add a new address</Text>
                    <FontAwesome style={{marginHorizontal: 50, marginTop: 20}} name="plus-circle" size={44} color="#06A34E" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        flexDirection: 'column',
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    cardImg: {
        width: 100,
        height: 62,
        marginVertical: 4,
        marginHorizontal: 5
    },
    cardText: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    addAddressContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addAddressText: {
        fontSize: 16,
        fontWeight: '900'
    }
})