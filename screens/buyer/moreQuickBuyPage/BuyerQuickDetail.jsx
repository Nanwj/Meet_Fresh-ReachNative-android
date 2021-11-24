import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
// swiper component
import Swiper from 'react-native-swiper/src'

// icon
import { Ionicons, FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';

export default class BuyerQuickDetail extends Component {

    state = {amount: 1}

    handleAddOne = () => {
        const newAmount = this.state.amount + 1;
        this.setState({amount: newAmount});
    }

    handleMinusOne = () => {
        const newAmount = this.state.amount - 1;
        if (newAmount < 0) return;
        this.setState({amount: newAmount});
    }

    render() {

        const {item, callBack} = this.props.route.params
        const {amount} = this.state

        return (
            <View>
                <View style={styles.image_container}>
                    <Swiper style={{height: 200}} autoplay={true} loop={true} 
                      dot={<View style={{
                          backgroundColor: 'rgba(0,0,0,.2)',
                          width: 4,
                          height: 4,
                          borderRadius: 4,
                          marginLeft: 3,
                          marginRight: 3,
                          marginTop: -10,
                          marginBottom: 3
                      }}></View>} 
                      activeDot={<View style={{
                          backgroundColor: '#fff',
                          width: 5,
                          height: 5,
                          borderRadius: 4,
                          marginLeft: 3,
                          marginRight: 3,
                          marginTop: -10,
                          marginBottom: 3
                      }}></View>}
                    >
                        {
                            item.urls.map((img, i) => {
                                return (
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#fff'
                                    }} key={i}>
                                        <Image source={img} style={{width: 300, height: 200}} key={1} />
                                    </View>
                                )
                            })
                        }
                    </Swiper>
                </View>
                
                <View style={styles.description_container}>
                    <View style={styles.text_container}>
                        <Text style={{fontSize: 20, fontWeight: '900'}}>{item.price}</Text>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>{item.text}</Text>
                    </View>
                    
                    <View style={styles.amount_container}>
                        <TouchableOpacity onPress={this.handleAddOne}>
                            <AntDesign name="pluscircle" size={24} color="#1ebc8d" />
                        </TouchableOpacity>
                        <Text style={{marginHorizontal: 8, fontSize: 30}}>{this.state.amount}</Text>
                        <TouchableOpacity onPress={this.handleMinusOne}>
                            <AntDesign name="minuscircle" size={24} color="#1ebc8d" />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.info_container}>
                    <Text>Farm Location</Text>
                    <View style={styles.other_container}>
                        <Ionicons name="location" size={16} color="black" />
                        <Text style={{marginLeft: 5}}>Westend</Text>
                    </View>
                    <View style={styles.other_container}>
                        <FontAwesome5 style={{marginTop: 2}} name="truck" size={14} color="black" />
                        <Text style={{marginLeft: 5}}>$10(20km)</Text>
                    </View>
                </View>

                <View style={styles.more_container}>
                    <Text style={{marginHorizontal: 20}}>{item.desc}</Text>
                </View>

                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.back_button} onPress={() => {
                        this.props.navigation.pop()
                    }}>
                        <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.add_carter} onPress={
                        () => {
                            callBack(item, amount);
                            this.props.navigation.pop()
                        }
                    }>
                        <AntDesign style={{marginTop: 6, marginRight: 5}} name="plussquareo" size={16} color="#fff" />
                        <FontAwesome name="shopping-cart" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#aaa',
        borderRadius: 5,
        margin: 4,
    },
    img: {
        width: 250,
        height: 200
    },
    description_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    text_container: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    amount_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    info_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#aaa',
        padding: 6,
    },
    other_container: {
        flexDirection: 'row',
    },
    more_container: {
        height: Dimensions.get('window').height - 490,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_container: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        borderTopWidth: 2,
        borderTopColor: '#aaa',
    },
    back_button: {
        marginLeft: 40,
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: '#ed5829', 
        borderRadius: 10,
    },
    add_carter: {
        flexDirection: 'row',
        marginRight: 40,
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: '#1ebc8d',
        borderRadius: 10,
    },
})