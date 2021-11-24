import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';

// Web IP
import { WebIP } from './../../../constants/Web'

// icons
import { FontAwesome5 } from '@expo/vector-icons';

export default class FillDeliveryInformation extends Component {

    constructor(props) {
        super(props);
        const {products, UserID, Type, address, total, iconType, mode, pickUpPoint, pickUpType, date, time} = this.props.route.params;
        this.state = {
            products: products,
            UserID: UserID,
            Type: Type,
            address: address,
            total: total,
            iconType: iconType,
            mode: mode,
            date: date,
            time: time,
            pickUpPoint: pickUpPoint,
            pickUpType: pickUpType
        }
    }

    addProductIntoDelivery = async (products, UserID, Type, pickUpPoint, pickUpType) => {
        const pickUpID = pickUpPoint === 'null' ? 1 
        : pickUpPoint === 'South Brisbane' ? 2 
        : pickUpPoint === 'Hamilton' ? 3 
        : pickUpPoint === 'Garden City' ? 4 : 5;
        products.map(product => {
            // insert information into delivery table
            axios.post('http://' + WebIP + ':6667/addProductIntoDelivery/extra?ProductID='+product.productID+'&CustomerID='+ UserID+'&Quantity='+product.amount+'&DeliveryType='+pickUpType+'&PickUpID='+pickUpID+'&Type='+Type)
            .then(alert("Your order has been prepared!"))
            .catch(err => console.log("Error in insert user", err))
        })
    }

    render() {

        const {products, UserID, Type, total, address, iconType, mode, date, time, pickUpPoint, pickUpType} = this.state;

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                {/* delivery type */}
                <View style={styles.modeContainer}>
                    <View style={styles.titles}>
                        <View style={[styles.icon, {marginRight: mode == "Self Pick Up" ? 55 : mode == "Pick up at pickup point" ? 20 : 30}]}>
                            <FontAwesome5 name={iconType} size={20} color="#0CA789" />
                        </View>
                        <Text style={styles.title}>{mode}</Text>
                    </View>
                </View>

                {/* address blcok */}
                <View style={styles.addressContainer}>
                    <View style = {styles.addressTextContainer}>
                        <Text style = {{fontWeight: "bold", fontSize: 18}}>ADDRESS</Text>
                        <Text style = {{fontSize: 15}}>{address}</Text>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style = {{color:"#fff"}}>Edit</Text>
                    </TouchableOpacity>
                </View>

                {/* time block */}
                <View style={[styles.timeContainer, {borderColor: date==="" ? 'white' : '#1EBC8D'}]}>
                    <Text>{date === "" ? "" : "Pick up time: " + date + " " + time}</Text>
                </View>

                {/* payment selection */}
                <View style={styles.cardList}>
                    <ScrollView>
                        <TouchableOpacity style={styles.cardContainer}>
                            <CheckBox value={true} />
                            <Image style={styles.cardImg} source={require('./../../../assets/images/master_logo.png')} />
                            <View style={styles.cardText}>
                                <Text>CommonWealth Bank</Text>
                                <Text>No. 1234 xxxx xxxx 4321</Text>
                                <Text>N. Yang</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardContainer}>
                            <CheckBox value={false} />
                            <Image style={styles.cardImg} source={require('./../../../assets/images/visa_logo.png')} />
                            <View style={styles.cardText}>
                                <Text>China Bank</Text>
                                <Text>No. 9987 xxxx xxxx 7899</Text>
                                <Text>N. Yang</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* total cost */}
                <Text style={styles.totalValue}>Total: $ {total}</Text>

                {/* total cost and pay button */}
                <View style={styles.paymentContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={
                            () => {
                                this.props.navigation.pop()
                            }
                        }>
                            <Text style = {{color:"#fff",fontSize:17}}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.paymentButton} onPress={
                            () => {
                                this.addProductIntoDelivery(products, UserID, Type, pickUpPoint, pickUpType)
                            }
                        }>
                            <Text style = {{color:"#fff",fontSize:17}}>Pay</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modeContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#1EBC8D',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 20,
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
    addressContainer:{
        flex: 1, 
        flexDirection: 'row',
        padding: 10
    },
    addressTextContainer:{
      flex: 4,
      paddingLeft: 10,
      paddingVertical: 25,
      flexDirection: "column",
    },
    editButton:{
        flex:0.5,
        marginVertical: 25,
        marginRight: 20,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#1EBC8D",
        borderRadius:8,
    },
    description: {
        fontSize: 14,
        marginVertical: 5,
    },
    arrow: {
        marginHorizontal: 148, 
        marginTop: 10
    },
    timeContainer: {
        flex: .2,
        paddingVertical: 20,
        marginBottom: 5,
        marginHorizontal: 20,
        paddingHorizontal: 40,
        borderColor: '#1EBC8D',
        borderWidth: 2,
        borderRadius: 10
    },
    cardList: {
        flex: 2,
        flexDirection: 'column',
        paddingHorizontal: 25,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    cardImg: {
        width: 100,
        height: 60,
        marginVertical: 4,
        marginHorizontal: 10
    },
    cardText: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    totalValue:{
        flex: .5,
        fontSize: 22,
        marginHorizontal: 130,
        color: "#555"
      },
    paymentContainer:{
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        borderColor: "#ddd",
        backgroundColor: 'white',
        borderTopWidth: 2,
      },
    paymentButton:{
      flex: 1,
      paddingVertical: 8,
      backgroundColor: "#1EBC8D",
      alignItems: "center",
      justifyContent:"center",
      marginHorizontal: 40,
      marginVertical: 8,
      borderRadius: 15
    },
    backButton: {
      flex: 1,
      paddingVertical: 8,
      backgroundColor: "#ed5829",
      alignItems:"center",
      justifyContent: "center",
      marginHorizontal: 40,
      marginVertical: 8,
      borderRadius: 15
    },
    
})