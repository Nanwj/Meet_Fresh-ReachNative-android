import React, { Component } from 'react'
import {StyleSheet, View, TextInput, Text} from 'react-native'

// icon
import { FontAwesome } from '@expo/vector-icons';

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} ></TextInput>
                <FontAwesome name="search" size={24} color="#73b62c" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: "#73b62c",
        borderRadius: 5,
        borderStyle: 'solid',
        padding: 5,
    },
    input: {
        flex: 1,
        marginRight: 5,
        borderWidth: 0,
        borderColor: '#73b62c',
        borderRadius: 4,
    },
})