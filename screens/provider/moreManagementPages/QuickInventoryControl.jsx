import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

// icons
import { Ionicons } from '@expo/vector-icons';

export default class QuickInventoryControl extends Component {

    constructor(props) {
        super(props);
        const {quickInventoryList} = this.props;
        this.state = {
            quickInventoryList: quickInventoryList
        }
    }

    render() {

        const {quickInventoryList} = this.state

        return (
            <View style={{ flex: 1, backgroundColor:'white'}}>
                <ScrollView>
                    <View style={styles.itemList}>
                        {
                            quickInventoryList.map((item, i) => {
                                return (
                                    <TouchableOpacity style={[styles.itemContainer, {backgroundColor: i % 2 == 0 ? 'white' : '#F2F9ED'}]} key={item.id}
                                        onPress={() => this.props.navigation.navigate('QuickItemEdit',
                                        {
                                            name: item.text,
                                            price: item.money,
                                            amount: item.amount,
                                            desc: item.desc,
                                            productID: item.id
                                        })}
                                    >
                                        <Image style={styles.img} source={item.urls} />

                                        <View style={styles.infoContainer}>
                                            <Text style={[styles.texts, {fontSize: 20, fontWeight: 'bold', color: '#69827B'}]}>{item.text}</Text>
                                            <Text style={styles.texts}>{item.price}</Text>
                                            <Text style={styles.texts}>Payment finish date: 21:00 30/07</Text>
                                        </View>

                                        <View style={{
                                            flex: .6, 
                                            justifyContent: 'center', 
                                            alignItems: 'center', 
                                            backgroundColor: item.amount < 5 ? "#F24727" : "#0ca78a",
                                            borderWidth: 4,
                                            borderColor: item.amount < 5 ? "#ffcdce" : "#1fbc8d",
                                            borderRadius: 4
                                        }}>
                                            <View><Text style={{color: 'white', fontWeight: 'bold'}}>x{item.amount}</Text></View>
                                        </View>

                                        <TouchableOpacity style={styles.setting}>
                                            <Ionicons style={{marginHorizontal: 20}} name="settings" size={28} color="#808080" />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>

                {/* back button */}
                <TouchableOpacity style={styles.backButton} onPress={
                    () => {
                        this.props.navigation.pop()
                    }
                }>
                    <Text style = {{color: "#fff", fontSize: 20}}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemList: {
        flexDirection: 'column',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#999',
    },
    img: {
        flex: 1,
        width: 70,
        height: 70,
        marginHorizontal: 15,
    },
    infoContainer: {
        flex: 3,
        flexDirection: 'column',
    },
    groupContainer: {
        flexDirection: 'row',
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    people: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    farmerContainer: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    setting: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    texts: {
        marginHorizontal: 8,
        marginVertical: 2,
        fontSize: 10,
        color: '#69827B',
    },
    backButton: {
        marginVertical: 10,
        marginHorizontal: 150,
        paddingVertical: 10,
        backgroundColor:"#ed5829",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15
    },
})