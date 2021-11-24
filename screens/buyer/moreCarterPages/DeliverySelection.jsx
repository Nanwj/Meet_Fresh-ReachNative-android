import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';

// icons
import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons';

export default class SelectDelivery extends Component {

    constructor(props) {
        super(props);
        const {address, data, UserID, Type} = this.props.route.params;
        this.state = {
            address: address,
            products: data,
            UserID: UserID,
            Type: Type
        }
    }

    render() {

        const {products, address, total, UserID, Type} = this.state;

        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.titleText}>Select your post method</Text>
                
                <TouchableOpacity style={styles.modeContainer}
                  onPress={
                    () => {
                        this.props.navigation.navigate(
                            "DeliveryMode1",
                            {
                                address, 
                                total,
                                products,
                                UserID,
                                Type
                            }
                        )
                    }
                  }
                >
                    <View style={styles.titles}>
                        <View style={styles.icon}>
                            <FontAwesome5 name="car" size={20} color="#0CA789" />
                        </View>
                        <Text style={styles.title}>Self Pick Up</Text>
                    </View>
                    
                    <Text style={styles.description}>No delivery fee charged pick your pick up time</Text>
                    
                    <Feather style={styles.arrow} name="arrow-down" size={24} color="#0CA789" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.modeContainer}
                  onPress={
                    () => {
                        this.props.navigation.navigate(
                            "DeliveryMode2",
                            {

                                address, 
                                total,
                                products,
                                UserID,
                                Type
                            }
                        )
                    }
                  }
                >
                    <View style={styles.titles}>
                        <View style={[styles.icon, {marginRight: 20}]}>
                            <Entypo name="lock" size={20} color="#0CA789" />
                        </View>
                        <Text style={styles.title}>Pick up at pickup point</Text>
                    </View>
                    
                    <Text style={styles.description}>Pick up at the pickup point with lower postage</Text>
                    
                    <Feather style={styles.arrow} name="arrow-down" size={24} color="#0CA789" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.modeContainer}
                  onPress={
                    () => {
                        this.props.navigation.navigate(
                            "DeliveryMode3",
                            {
                                address,
                                total,
                                products,
                                UserID,
                                Type
                            }
                        )
                    }
                  }
                >
                    <View style={styles.titles}>
                        <View style={[styles.icon, {marginRight: 30}]}>
                            <FontAwesome5 name="car" size={20} color="#0CA789" />
                        </View>
                        <Text style={styles.title}>Post to your home</Text>
                    </View>

                    <View>
                        <Text style={{fontSize: 14}}>Standard post method shipping fee applies</Text>
                    </View>                
                    <Feather style={styles.arrow} name="arrow-down" size={24} color="#0CA789" />
                </TouchableOpacity>

                {/* back button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.backButton}
                      onPress={
                      () => {
                          this.props.navigation.pop()
                      }}
                    >
                        <Text style={styles.backPayText}>Back</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modeContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#1EBC8D',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    titleText: {
        marginHorizontal: 80, 
        marginVertical: 20, 
        fontSize: 20
    },
    titles: {
        flexDirection: 'row',
    },
    icon: {
        width: 50,
        height: 50,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginLeft: 20,
        marginRight: 55,
        backgroundColor: "#ceede7",
        borderRadius: 25
    },
    title: {
        marginVertical: 10, 
        fontSize: 20, 
        fontWeight: '900'
    },
    description: {
        marginVertical: 5,
    },
    arrow: {
        marginHorizontal: 148, 
        marginTop: 10
    },
    buttonContainer: {
        flex: 1.5,
    },
    backButton: {
        paddingHorizontal: 25,
        paddingVertical: 8,
        backgroundColor:"#ed5829",
        alignItems:"center",
        marginTop: 20,
        marginHorizontal: 150,
        borderRadius:8
    },
    backPayText: {
        color: "#fff",
        fontSize: 17
    }
})