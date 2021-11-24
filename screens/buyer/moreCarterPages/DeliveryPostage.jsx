import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

// check box
import CheckBox from '@react-native-community/checkbox';

// down-list
import ModalDropdown from 'react-native-modal-dropdown';

// icons
import { FontAwesome5, Feather, FontAwesome } from '@expo/vector-icons';

export default class DeliveryPostage extends Component {

    constructor(props) {
        super(props);
        const {products, UserID, Type, address, total} = this.props.route.params;
        this.state = {
            products: products,
            UserID: UserID,
            Type: Type,
            address: address,
            total: total,
            defaultAddress: true,
            otherAddress: false
        }
    }

    onChangeDefaultAddress() {
        const {defaultAddress, otherAddress} = this.state;
        if (!defaultAddress && otherAddress) {
            this.setState({
                defaultAddress: !defaultAddress,
                otherAddress: !otherAddress
            })
        } else {
            this.setState({defaultAddress: !defaultAddress})
        }
    }

    onChangetOtherAddress() {
        const {defaultAddress, otherAddress} = this.state;
        if (!otherAddress && defaultAddress) {
            this.setState({
                defaultAddress: !defaultAddress,
                otherAddress: !otherAddress
            })
        } else {
            this.setState({otherAddress: !otherAddress})
        }
    }

    render() {

        const {products, UserID, Type, address, total, defaultAddress, otherAddress} = this.state;

        return (
            <View style={{backgroundColor: 'white'}}>
                {/* type of delivery */}
                <View style={styles.modeContainer}>
                    <View style={styles.titles}>
                        <View style={[styles.icon, {marginRight: 30}]}>
                            <FontAwesome5 name="car" size={20} color="#0CA789" />
                        </View>
                        <Text style={styles.title}>Post to your home</Text>
                    </View>
                    
                    <Text style={styles.description}>Standard post method shipping fee applies</Text>
                    
                    <Feather style={styles.arrow} name="arrow-up" size={24} color="#0CA789" />
                </View>

                {/* form */}
                <ScrollView>
                    <View style={styles.formContainer}>
                        {/* default address */}
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.subtitle}>Select the address</Text>
                        </View>
                        <Text style={styles.normalText}>Default address:</Text>
                        <TouchableOpacity style={styles.optionContainer} onPress={() => this.onChangeDefaultAddress()}>
                            <CheckBox
                            style={styles.checkbox} 
                            value={defaultAddress} 
                            onValueChange={() => this.onChangeDefaultAddress()}
                            />
                            <Text style={styles.optionText}>XXXXXXXXXXXXXXXXXXXXXXXXXX QLD</Text>
                        </TouchableOpacity>

                        {/* other address */}
                        <Text style={styles.normalText}>Other address:</Text>
                        <TouchableOpacity style={styles.optionContainer} onPress={() => this.onChangetOtherAddress()}>
                            <CheckBox
                            style={[styles.checkbox, {marginTop: 18}]} 
                            value={otherAddress} 
                            onValueChange={() => this.onChangetOtherAddress()}
                            />
                            <ModalDropdown 
                            style={styles.dropdown}
                            textStyle={styles.dropdownText}
                            dropdownStyle={styles.dropdownList}
                            defaultValue='Brisbane North Area'
                            options={[
                                'Brisbane North Area',
                                'South Brisbane', 
                                'St Lucia', 
                                'Garden City', 
                            ]}
                            />
                        </TouchableOpacity>
                        
                        {/* add another address */}
                        <TouchableOpacity style={styles.addAddressContainer}>
                            <Text style={styles.addAddressText}>Add a new address</Text>
                            <FontAwesome style={{marginHorizontal: 50, marginTop: 20}} name="plus-circle" size={44} color="#06A34E" />
                        </TouchableOpacity>

                    </View>
                </ScrollView>

                {/* back and pay button */}
                <View style={styles.paymentContainer}>
                    <TouchableOpacity style={styles.backButton}
                      onPress={
                        () => {
                            this.props.navigation.pop()
                        }
                      }
                    >
                        <Text style={styles.backPayText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentButton}
                      onPress={
                        () => {
                            this.props.navigation.navigate(
                                'Confirm',
                                {
                                    products: products,
                                    UserID: UserID,
                                    Type: Type,
                                    address, 
                                    total,
                                    iconType: "car",
                                    mode: "Post to your home",
                                    date: "",
                                    time: "",
                                    pickUpPoint: 'null',
                                    pickUpType: "Postage"
                                }
                            )
                        }
                      }
                    >
                        <Text style={styles.backPayText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modeContainer: {
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
        fontSize: 14,
        marginVertical: 5,
    },
    arrow: {
        marginHorizontal: 148, 
        marginTop: 10
    },
    formContainer: {
        height: 400,
        flexDirection: 'column',
    },
    subtitle: {
        fontSize: 28,
        fontWeight: '900',
    },
    normalText: {
        marginHorizontal: 32,
        marginVertical: 5,
        fontSize: 14,
    },
    optionContainer:{
        flexDirection: 'row',
        paddingVertical: 15,
        marginHorizontal: 25,
    },
    optionText: {
        fontSize: 16,
        marginTop: 5,
    },
    dropdown: {
        width: 180,
        marginVertical: 10, 
        marginLeft: 40,
        padding: 10,
        borderColor: '#666',
        borderWidth: 2,
        borderRadius: 10
    },
    dropdownText: {
        fontSize: 16
    },
    dropdownList: {
        width: 150,
        fontSize: 16,
    },
    addAddressContainer: {
        marginHorizontal: 20,
        paddingHorizontal: 110
    },
    addAddressText: {
        fontSize: 16,
        fontWeight: '900'
    },
    paymentContainer:{
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingVertical: 5,
        borderColor:"#ddd",
        backgroundColor:'white',
        borderTopWidth:2,
    },
    paymentButton:{
        paddingHorizontal: 25,
        paddingVertical: 8,
        backgroundColor:"#1EBC8D",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:20,
        marginVertical:5,
        borderRadius:8
    },
    backButton: {
        paddingHorizontal: 25,
        paddingVertical: 8,
        backgroundColor:"#ed5829",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:5,
        borderRadius:8
    },
    backPayText: {
        color: "#fff",
        fontSize: 17
    }
})