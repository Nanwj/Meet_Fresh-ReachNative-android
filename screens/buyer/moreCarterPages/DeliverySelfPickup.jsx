import React, { Component, Fragment } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

// calender
import {Calendar} from 'react-native-calendars';
// down-list
import ModalDropdown from 'react-native-modal-dropdown';

// icons
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';

export default class DeliverySelfPickup extends Component {

    constructor(props) {
        super(props);
        const {products, UserID, Type, address, total} = this.props.route.params;
        this.state = {
            products: products,
            UserID: UserID,
            Type: Type,
            address: address,
            total: total,
            date: '2021-10-12',
            time: '10:00'
        }
    }

    render() {

        const {products, UserID, Type, total, address, date, time} = this.state;

        return (
            <View style={{backgroundColor: 'white'}}>
                {/* type of delivery */}
                <View style={styles.modeContainer}>
                    <View style={styles.titles}>
                        <View style={styles.icon}>
                            <FontAwesome5 name="car" size={20} color="#0CA789" />
                        </View>
                        <Text style={styles.title}>Self Pick Up</Text>
                    </View>
                    
                    <Text style={styles.description}>No delivery fee charged pick your pick up time</Text>
                    
                    <Feather style={styles.arrow} name="arrow-up" size={24} color="#0CA789" />
                </View>

                {/* form */}
                <ScrollView style={styles.formContainer}>
                    <Text style={styles.subtitle}>Step 1</Text>
                    <Text style={styles.normalText}>Select the pickup date</Text>
                    <View style={{flexDirection: 'row', marginLeft: 20, marginVertical: 10}}>
                        <MaterialIcons name="location-on" size={38} color="#0CA789" />
                        <View style={{flexDirection: 'column', marginLeft: -10}}>
                            <Text style={styles.normalText}>Farm location: </Text>
                            <Text style={styles.normalText}>XXXXXXXXXXXXXXXXX QLD</Text>
                        </View>
                    </View>
                    
                    <Fragment>
                        <Calendar
                          // Initially visible month. Default = Date()
                          current={'2021-10-12'}
                          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                          minDate={'2021-10-01'}
                          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                          maxDate={'2022-06-15'}
                          style={styles.calendar}
                          // Handler which gets executed on day press. Default = undefined
                          onDayPress={(day) => this.setState({date: day.dateString})}
                        />
                    </Fragment>
                    
                    <Text style={styles.subtitle}>Step 2</Text>
                    <Text style={styles.normalText}>Select the pickup time</Text>

                    <ModalDropdown 
                      style={styles.dropdown}
                      textStyle={styles.dropdownText}
                      dropdownStyle={styles.dropdownList}
                      defaultValue='10:00 AM'
                      options={[
                          '10:00', 
                          '11:00', 
                          '12:00', 
                          '13:00', 
                          '14:00', 
                          '15:00', 
                          '16:00', 
                          '17:00']}
                      onSelect={(index, value) => {
                          this.setState({time: value})
                      }}
                    />
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
                                    mode: "Self Pick Up",
                                    date,
                                    time,
                                    pickUpPoint: 'null',
                                    pickUpType: "Self pick up"
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
        marginHorizontal: 32,
        marginVertical: 10,
        fontSize: 28,
        fontWeight: '900',
    },
    normalText: {
        marginHorizontal: 32,
        marginVertical: 2,
        fontSize: 14,
    },
    calendar: {
        marginHorizontal: 40,
        marginVertical: 10,
        borderColor: '#1EBC8D',
        borderWidth: 2,
        borderRadius: 10
    },
    dropdown: {
        width: 180,
        marginVertical: 10, 
        marginLeft: 40,
        marginRight: 180,
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
    },
})