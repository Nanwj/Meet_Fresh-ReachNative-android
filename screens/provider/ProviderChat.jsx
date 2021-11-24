import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from 'react-native'
import {Header} from 'react-native-elements'

import SearchBar from '../../components/SearchBar'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const information = [
    {
        name: 'name 1',
        gender: false,
        image: require('./../../assets/images/male.jpg'),
        content: 'See you soon~',
        time: '24/09',
    },
    {
        name: 'name 2',
        gender: true,
        image: require('./../../assets/images/female.jpg'),
        content: 'Have a nice day!',
        time: '21/09',
    },
    {
        name: 'name 3',
        gender: false,
        image: require('./../../assets/images/male.jpg'),
        content: 'Sticker',
        time: '19/09',
    },
    {
        name: 'name 4',
        gender: true,
        image: require('./../../assets/images/female.jpg'),
        content: 'Bye honey.',
        time: '16/09',
    },
    {
        name: 'name 1',
        gender: false,
        image: require('./../../assets/images/male.jpg'),
        content: 'See you soon~',
        time: '24/09',
    },
    {
        name: 'name 2',
        gender: true,
        image: require('./../../assets/images/female.jpg'),
        content: 'Have a nice day!',
        time: '21/09',
    },
    {
        name: 'name 5',
        gender: true,
        image: require('./../../assets/images/female.jpg'),
        content: '0.o',
        time: '15/09',
    },
    {
        name: 'name 4',
        gender: true,
        image: require('./../../assets/images/female.jpg'),
        content: 'Bye honey.',
        time: '16/09',
    },
    {
        name: 'name 1',
        gender: false,
        image: require('./../../assets/images/male.jpg'),
        content: 'See you soon~',
        time: '24/09',
    },
    {
        name: 'name 2',
        gender: true,
        image: require('./../../assets/images/female.jpg'),
        content: 'Have a nice day!',
        time: '21/09',
    },
    {
        name: 'name 5',
        gender: true,
        image: require('./../../assets/images/female.jpg'),
        content: '0.o',
        time: '15/09',
    },
]

export default class ProviderChat extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <Header
                  backgroundColor={'transparent'}
                  leftComponent={{}}
                  centerComponent={<SearchBar/>}
                  rightComponent={{}}
                />
                <View style={styles.chat_container}>
                    <SafeAreaView>
                        <ScrollView>
                            {
                                information.map((item, i) => {
                                    return (
                                        <TouchableOpacity key={i}>
                                            <View style={[styles.chat, {borderColor: item.gender ? '#EF4444' : '#73b62c'}]}>
                                                <Image style={styles.img} source={item.image}/>
                                                <View style={styles.text_container}>
                                                    <Text>Farm: {item.name}</Text>
                                                    <View style={styles.time_content}>
                                                        <Text style={{flex: 1}}>{item.content}</Text>
                                                        <Text>{item.time}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    chat_container: {
        marginTop: 8,
        marginBottom: 80,
        marginHorizontal: 15,
        flexDirection: 'column',
    },
    chat: {
        flexDirection: 'row',
        alignContent: 'center',
        margin: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#73b62c',
        borderRadius: 8,
        padding: 8,
    },
    img: {
        marginHorizontal: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    text_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    time_content: {
        flexDirection: 'row',
    }
})