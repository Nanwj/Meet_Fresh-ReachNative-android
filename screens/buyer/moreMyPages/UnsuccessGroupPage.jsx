import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

// icons
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default class ShippingGroupPage extends Component {

    constructor(props) {
        super(props);
        const {unsuccessfulGroupInfo} = this.props;
        this.state = {
            unsuccessfulGroupInfo: unsuccessfulGroupInfo,
        }
    }

    render() {

        const {unsuccessfulGroupInfo} = this.state;

        return (
            <View style={{flex: 1,backgroundColor:'white'}}>

                {/* list of products in carter */}
                <View style={{ flex: 1, backgroundColor:'white'}}>
                    <ScrollView>
                        <View style={styles.itemList}>
                            {
                                unsuccessfulGroupInfo.map((item, i) => {
                                    return (
                                        <View style={[styles.itemContainer, {backgroundColor: i % 2 == 0 ? 'white' : '#F2F9ED'}]} key={item.id}>
                                            <Image style={styles.img} source={item.urls} />

                                            <View style={styles.infoContainer}>
                                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#69827B'}}>{item.text}</Text>
                                                <View style={styles.groupContainer}>
                                                    <View style={styles.time}>
                                                        <FontAwesome name="clock-o" style={{marginVertical: 2}} size={14} color="#69827B" />
                                                        <Text style={styles.texts}>05:20</Text>
                                                    </View>
                                                    <View style={styles.people}>
                                                        <Ionicons name="people-sharp" size={14} color="#69827B" />
                                                        <Text style={styles.texts}>25/30</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.farmerContainer}>
                                                    <FontAwesome5 name="truck-monster" size={14} color="#69827B" />
                                                    <Text style={styles.texts}>Farm: xxxxxxx farm</Text>
                                                </View>
                                            </View>

                                            <TouchableOpacity style={styles.delete}>
                                                <FontAwesome style={{marginHorizontal: 20}} name="trash" size={28} color="#1EBC8D" />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>

                    {/* total cost and pay button */}
                    <TouchableOpacity style={styles.beckButton} onPress={
                        () => {
                            this.props.navigation.pop()
                        }
                    }>
                        <Text style = {{color: "#fff", fontSize: 20}}>Back</Text>
                    </TouchableOpacity>

                </View>
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
    delete: {
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
    beckButton: {
        marginVertical:15,
        marginHorizontal: 130,
        paddingVertical: 18,
        backgroundColor:"#ed5829",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15
    },
})