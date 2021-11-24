import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

// icons
import {Entypo, MaterialIcons , FontAwesome5, FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons';

import {} from 'react-native';


export default class Management extends Component {
    
    constructor(props) {
        super(props)
        const { userName, email } = this.props
        this.state = {
            userName: userName,
            email: email
        }
    }

    render() {
        const sellerstate = {
            quickOrderNum : 10,
            groupOrderNum : 10,
            deliveringGroupOrderNum : 10,
            deliveringQuickOrderNum : 10,
            notDeliverGroupNum : 10,
            notDeliverQuickNum : 10,
        }
        const { userName, email } = this.state
        
        return (
            <View style={styles.styledContainer}>
                {/* seller information */}
                <View  style={styles.sellerInfo}> 
                    <View style={{flex: 1}}>
                        <Image
                            style={styles.tinyLogo}
                            source = {require('./../../../assets/images/male.jpg')}/>
                    </View>
                    <View style={{flex: 1.5}}>
                        <Text style={styles.sellerName}>
                            {'Welcome \n' + userName}
                        </Text>
                        <Text style={styles.sellerID}>
                            {'Email: ' + email}
                        </Text>
                    </View>
                </View>
                
                {/* seller state */}
                <View style={styles.sellerState}>
                    <View style = {{flex:1}}>
                        <Text style={styles.sellerStateInfo}>
                            {'Today Order (Quick): ' + sellerstate.quickOrderNum + '\n'}
                            {'Delivering: ' + sellerstate.deliveringQuickOrderNum + '\n'}
                            {'Not Deliveried: ' + sellerstate.notDeliverQuickNum + '\n'}
                        </Text>

                    </View>
                    <View style = {{flex:1}}>
                        <Text style={styles.sellerStateInfo}>
                            {'Today Order (Group): ' + sellerstate.groupOrderNum + '\n'}
                            {'Delivering: ' + sellerstate.deliveringGroupOrderNum + '\n'}
                            {'Not Deliveried: ' + sellerstate.notDeliverGroupNum + '\n'}
                        </Text>
                    </View>
                </View>
                
                <View style={{ flex: 4}}>
                    {/* inventory management */}
                    <View style={styles.appContainer}> 
                        <Text style={styles.appTitil}>
                            Inventory management
                        </Text>

                        <View style={styles.appList}>
                            <TouchableOpacity style={styles.appIconContainer}
                              onPress={ () => this.props.navigation.navigate('ItemRelease')}
                            >
                                <View style={styles.appIcon}>
                                    <Entypo name="new-message" size={24} color= "#1EBC8D" />
                                </View>
                                <Text style={styles.appIconText}>New item release</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.appIconContainer}
                              onPress={ () => this.props.navigation.navigate('InventoryControl')}
                            >
                                <View style={styles.appIcon}>
                                    <MaterialIcons name="inventory" size={24} color= "#1EBC8D" />
                                </View>
                                <Text style={styles.appIconText}>Inventory control</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.appIconContainer}
                              onPress={ () => this.props.navigation.navigate('ManageOrder')}
                            >
                                <View style={styles.appIcon}>
                                    <FontAwesome5 name="clipboard-list" size={24} color="#1EBC8D" />
                                </View>
                                <Text style={styles.appIconText}>Order Management</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Postage and finance */}
                    <View style={styles.appContainer2} > 
                        <Text style={styles.appTitil}>
                            Postage and Finance
                        </Text>
                        <View style = {styles.appList2}>
                            <TouchableOpacity style={styles.appIconContainer}
                              onPress={ () => this.props.navigation.navigate('ParcelPostage')}
                            >
                                <View style={styles.appIcon2}>
                                    <FontAwesome name="inbox" size={24} color= "#f48485" />
                            
                                </View>
                                <Text style={styles.appIconText}>Parcel Postage</Text>
                            </TouchableOpacity>
                            <View style={styles.appIconContainer}>
                                <View style={styles.appIcon2}>
                                    <MaterialCommunityIcons name="truck-delivery" size={24} color= "#f48485" />
                                </View>
                                <Text style={styles.appIconText}>Logisitics Management</Text>
                            </View>
                            <TouchableOpacity style={styles.appIconContainer}
                              onPress={ () => this.props.navigation.navigate('Finance')}
                            >
                                <View style={styles.appIcon2}>
                                    <MaterialCommunityIcons name="finance" size={24} color= "#f48485" />
                                </View>
                                <Text style={styles.appIconText}>Finance</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    styledContainer:{
        flex: 1,
        paddingHorizontal:25,
        paddingBottom:25,
        backgroundColor: 'white',
    },

    sellerInfo:{
        flex: 1.1,
        flexDirection: 'row',
        borderRadius: 30, 
        marginVertical: 20, 
    },

    sellerIcon:{
        flex: 1.8,
        flexDirection: 'row',
        backgroundColor: 'red',
        borderRadius: 30, 
        marginTop:20, 
        marginBottom:20,  
    },

    sellerState:{
        flex: 1,
        marginTop: 5,
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#EFF4ED',
    },

    appContainer:{
        flex: 1,
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: "#1EBC8D",
        textAlign: 'center',
        alignItems: 'center',
    },

    appContainer2:{
        flex: 1,
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: '#F78687',
        textAlign: 'center',
        alignItems: 'center',
    },

    appList:{
        flex:1,
        marginTop: 5,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: "#1EBC8D",
    },

    appList2:{
        flex:1,
        marginTop: 5,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#F78687',
    },

    tinyLogo: {
        margin: 30,
        width: 80,
        height: 80,
        borderRadius: 40
    },

    sellerName: {
        marginTop: 30,
        marginLeft:10,
        fontSize: 25,
        color: '#69827B',
    },

    sellerID: {
        fontSize: 14,
        marginLeft:10,
        color: '#1EBC8D',
        fontWeight:'bold',

    },

    sellerStateInfo: {
        marginTop: 10,
        marginLeft:15,
        lineHeight: 25,
        color: '#69827B',
        fontSize:10,
        fontWeight:'bold',
    },

    appTitil:{
        marginTop:5,
        color: 'white',
        fontWeight:'bold',
        alignItems:'center',
        
    },

    appIconContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    appTextContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },

    appIcon:{
        width: 50,
        height:50,
        borderRadius:25,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#ccece4'
    },

    appIcon2:{
        width: 50,
        height:50,
        borderRadius:25,
        justifyContent: 'center',
        backgroundColor:'#fbe5eb',
        alignItems:'center',
    },

    appIconText:{
        height:30,
        color: "#808080",
        fontWeight: "600",
        fontSize:8,
        marginTop:10,
    }
})
