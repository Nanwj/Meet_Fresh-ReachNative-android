import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

// icons
import {Entypo, MaterialIcons , FontAwesome5, FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons';


export default class MyPage extends Component {

    constructor(props) {
        super(props);
        const { userName, email } = this.props;
        this.state = {
            userName: userName,
            email: email
        }
    }

    render() {

        const { userName, email } = this.state

        return (
            <View style={styles.styledContainer}>
                    <View  style={styles.userInfo}> 
                        <View style={{flex: 1}}>
                            <Image
                                style={styles.tinyLogo}
                                source = {require('./../../../assets/images/male.jpg')}/>
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={styles.userName}>
                                {'Welcome \n'+ userName}
                            </Text>
                            <Text style={styles.userID}>
                                {'Email: ' + email}
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 4}}>
                        <View style={styles.appContainer}> 
                            <Text style={styles.appTitil}>
                                Your Order
                            </Text>

                            <View style={styles.appList}>
                                <TouchableOpacity style={styles.appIconContainer}>
                                    <View style={styles.appIcon}>
                                        <Entypo name="credit-card" size={24} color= "#1EBC8D" />
                                    </View>
                                    <Text style={styles.appIconText}>Incomplete Payment</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.appIconContainer}
                                  onPress={
                                    () => {
                                        this.props.navigation.navigate(
                                            'UnshippedPages'
                                        )
                                    }
                                  }
                                >
                                    <View style={styles.appIcon}>
                                        <Entypo name="home" size={24} color= "#1EBC8D" />
                                    </View>
                                    <Text style={styles.appIconText}>Not yet shipped</Text>
                                </TouchableOpacity>

                                
                                <TouchableOpacity style={styles.appIconContainer}
                                  onPress={
                                    () => {
                                        this.props.navigation.navigate(
                                            'ShippingPages'
                                        )
                                    }
                                  }
                                >
                                    <View style={styles.appIcon}>
                                        <FontAwesome5 name="truck" size={24} color="#1EBC8D" />
                                    </View>
                                    <Text style={styles.appIconText}>Shipping</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.subAppList}>
                                <TouchableOpacity style={styles.appIconContainer}
                                  onPress={
                                    () => {
                                        this.props.navigation.navigate(
                                            'UnsuccessGroup'
                                        )
                                    }
                                  }
                                >
                                    <View style={styles.appIcon}>
                                        <MaterialIcons  name="dangerous" size={24} color= "#1EBC8D" />
                                    </View>
                                    <Text style={styles.appIconText}>Unsuceess Group order</Text>
                                </TouchableOpacity>

                                    
                                <TouchableOpacity style={styles.appIconContainer}>
                                    <View></View>
                                </TouchableOpacity>

                                
                                <TouchableOpacity style={styles.appIconContainer}>
                                    <View></View>
                                </TouchableOpacity>                        
                            </View>
                        </View>

                        <View style={styles.appContainer2} > 
                            <Text style={styles.appTitil}>
                                Information manamgement
                            </Text>
                            <View style = {styles.appList2}>
                                <TouchableOpacity style={styles.appIconContainer}
                                  onPress={
                                    () => {
                                        this.props.navigation.navigate(
                                            'Shipping address'
                                        )
                                    }
                                  }
                                >
                                    <View style={styles.appIcon2}>
                                        <Entypo name="location-pin" size={24} color= "#f48485" />
                                
                                    </View>
                                    <Text style={styles.appIconText}>Shipping address</Text>
                                </TouchableOpacity>
                                <View style={styles.appIconContainer}>
                                    <View style={styles.appIcon2}>
                                        <MaterialCommunityIcons name="account-details" size={24} color= "#f48485" />
                                    </View>
                                    <Text style={styles.appIconText}>Personal information</Text>
                                </View>
                                <TouchableOpacity style={styles.appIconContainer}
                                  onPress={
                                    () => {
                                        this.props.navigation.navigate(
                                            'Card management'
                                        )
                                    }
                                  }
                                >
                                    <View style={styles.appIcon2}>
                                        <FontAwesome name="credit-card" size={24} color= "#f48485" />
                                    </View>
                                    <Text style={styles.appIconText}>Card management</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    styledContainer:{
        flex: 1,
        paddingHorizontal:25,
        paddingBottom:25,
        backgroundColor: 'white',
    },

    userInfo:{
        flex: 1.1,
        flexDirection: 'row',
        borderRadius: 30, 
        marginTop:20, 
    },

    userIcon:{
        flex: 1.8,
        flexDirection: 'row',
        backgroundColor: 'red',
        borderRadius: 30, 
        marginTop:20, 
        marginBottom:20,  
    },

    userState:{
        flex: 1,
        marginTop: 5,
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#EFF4ED',
    },

    appContainer:{
        flex: 1.6,
        borderRadius: 20,
        backgroundColor: "#1EBC8D",
        textAlign: 'center',
        shadowColor:'#00A678',
        shadowRadius:8,
        shadowOpacity:0.8,
        alignItems:'center',
    },

    appContainer2:{
        flex: 1,
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: '#F78687',
        textAlign: 'center',
        shadowColor:'#F78687',
        shadowRadius:8,
        shadowOpacity:0.8,
        alignItems:'center',
    },

    appList:{
        flex: 1,
        width: '100%',
        marginTop: 5,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderTopWidth:2,
        borderTopEndRadius:20,
        borderTopLeftRadius:20,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: "#1EBC8D",
    },

    subAppList:{
        flex:1,
        width: '100%',
        borderLeftWidth:2,
        borderRightWidth:2,
        borderBottomWidth:2,
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: "#1EBC8D",
    },

    appList2:{
        flex:1,
        width: '100%',
        marginTop: 5,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#F78687',
    },

    tinyLogo: {
        marginTop: 30,
        marginHorizontal: 10,
        width: 80,
        height: 80,
        borderRadius: 40
    },

    userName: {
        marginTop: 30,
        marginLeft:10,
        fontSize: 25,
        color: '#69827B',
    },

    userID: {
        fontSize: 14,
        marginLeft:10,
        color: '#1EBC8D',
        fontWeight:'bold',

    },

    userStateInfo: {
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
    },

    appIcon:{
        width: 50,
        height:50,
        borderRadius:25,
        justifyContent: 'center',
        backgroundColor:'#ccece4',
        alignItems:'center',

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
        height:10,
        color: "#808080",
        fontWeight: "600",
        fontSize:8,
        marginTop:10,
    }
})