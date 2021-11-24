import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

// icons
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default class GroupInventoryControl extends Component {

    constructor(props) {
        super(props);
        const {groupInventoryList} = this.props;
        this.state = {
            groupInventoryList: groupInventoryList,
        }
        
    }

    render() {

        const {groupInventoryList} = this.state;

        return (
            <View style={{flex: 1,backgroundColor:'white'}}>
                <View style={{ flex: 1, backgroundColor:'white'}}>
                    {/* inventory list */}
                    <ScrollView>
                        <View style={styles.itemList}>
                            {
                                groupInventoryList.map((item, i) => {
                                    return (
                                        <TouchableOpacity style={[styles.itemContainer, {backgroundColor: i % 2 == 0 ? 'white' : '#F2F9ED'}]} key={item.id}
                                          onPress={() => this.props.navigation.navigate('GroupItemEdit',
                                          {
                                              name: item.text,
                                              price: item.money,
                                              amount: item.amount,
                                              desc: item.desc,
                                              requirePeople: item.requirePeople,
                                              time: item.time,
                                              productID: item.id
                                          })}
                                        >
                                            <Image style={styles.img} source={item.urls} />

                                            <View style={styles.infoContainer}>
                                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#69827B'}}>{item.text}</Text>
                                                <View style={styles.groupContainer}>
                                                    <View style={styles.time}>
                                                        <FontAwesome name="clock-o" style={{marginVertical: 2}} size={14} color="#69827B" />
                                                        <Text style={styles.texts}>{item.time.split(".")[0].replace("T", " ")}</Text>
                                                    </View>
                                                    <View style={styles.people}>
                                                        <Ionicons name="people-sharp" size={14} color="#69827B" />
                                                        <Text style={styles.texts}>{item.participate}/{item.requirePeople}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.farmerContainer}>
                                                    <FontAwesome5 name="truck-monster" size={14} color="#69827B" />
                                                    <Text style={styles.texts}>Farm: {item.farm}</Text>
                                                </View>
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