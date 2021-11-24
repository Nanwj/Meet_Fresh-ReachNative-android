import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

// icons
import { FontAwesome } from '@expo/vector-icons';

export default class GroupOrders extends Component {

    constructor(props) {
        super(props);
        const {groupOrderList} = this.props;
        this.state = {
            groupOrderList: groupOrderList
        }
    }

    render() {

        const {groupOrderList} = this.state

        return (
            <View style={{ flex: 1, backgroundColor:'white'}}>
                <ScrollView>
                    <View style={styles.itemList}>
                        {
                            groupOrderList.map((item, i) => {
                                return (
                                    <TouchableOpacity style={[styles.itemContainer, {backgroundColor: i % 2 == 0 ? 'white' : '#F2F9ED'}]} key={item.id}>
                                        <Image style={styles.img} source={item.urls} />

                                        <View style={styles.infoContainer}>
                                            <Text style={[styles.texts, {fontSize: 20, fontWeight: 'bold', color: '#69827B'}]}>{item.text}</Text>
                                            <Text style={styles.texts}>{item.price}</Text>
                                            <Text style={styles.texts}>Payment finish date: 21:00 30/07</Text>
                                        </View>

                                        <TouchableOpacity style={styles.setting}>
                                            <FontAwesome style={{marginHorizontal: 20}} name="wechat" size={28} color="#1EBC8D" />
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