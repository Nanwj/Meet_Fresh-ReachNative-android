import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native'

// icons
import { FontAwesome5 } from '@expo/vector-icons';


// change the state of GROUP order into posted
const alreadyPostedOrder = (order) => {
    // console.log("Confirm upload: ", order);
}

export default class GroupParcelPostage extends Component {

    constructor(props) {
        super(props);
        const {groupParcelList} = this.props;
        this.state = {
            groupParcelList: groupParcelList
        }
    }

    askConfirm = (item) => {
        Alert.alert(
            "Change order state",
            "Do you want to set the parcel state to POSTED",
            [
                {text: 'cancel'},
                {text: 'confirm', onPress: () => alreadyPostedOrder(item)},
            ]
        )
    }

    render() {
        const {groupParcelList} = this.state

        return (
            <View style={{ flex: 1, backgroundColor:'white'}}>
                <ScrollView>
                    <View style={styles.itemList}>
                        {
                            groupParcelList.map((item, i) => {
                                return (
                                    <TouchableOpacity style={[styles.itemContainer, {backgroundColor: i % 2 == 0 ? 'white' : '#F2F9ED'}]} key={item.id}>
                                        <Image style={styles.img} source={item.urls} />

                                        <View style={styles.infoContainer}>
                                            <Text style={[styles.texts, {fontSize: 20, fontWeight: 'bold', color: '#69827B'}]}>{item.text}</Text>
                                            <Text style={styles.texts}>{item.price}</Text>
                                            <Text style={styles.texts}>Payment finish date: 21:00 30/07</Text>
                                        </View>

                                        <TouchableOpacity style={styles.upload}
                                          onPress={() => this.askConfirm(item)}
                                        >
                                            <FontAwesome5 style={{marginHorizontal: 20}} name="upload" size={28} color="#808080" />
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
    upload: {
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