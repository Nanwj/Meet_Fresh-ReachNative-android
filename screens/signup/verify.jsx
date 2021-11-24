import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Verify extends Component {

  render() {

    const {params} = this.props.route
    
    return (
      <View style={styles.container}>

        {/* page logo */}
        <Image style={styles.logo} source={require('./../../assets/images/thanks.png')}/>

        <Text style={{
            width: "70%",
            fontSize: 25,
        }}>
            Your information has been uploaded, please wait for conformation!
        </Text>

        {/* next button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navi.navigate('ProviderBottomNavigator', 
        {
          type: 'provider',
          UserID: params.UserID,
          userName: params.userName,
          password: params.password,
          contactNum: params.contactNum,
          email: params.email,
          address: params.address,
          emergencyContact: params.emergencyContact,
          storeName: params.storeName,
          farmName: params.farmName,
          farmAddress: params.farmAddress,
          cardNum: params.cardNum,
          expireDate: params.expireDate,
          pin: params.pin,
          bank: params.bank
        }
        )}>
          <Text style={{
            color: "#ffffff", 
            fontSize: 20, 
            fontWeight: "bold",
          }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 200,
    marginBottom: 60,
  },
  loginButton: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#1EBC8D",
    borderRadius: 10,
    marginVertical: 12,
    marginVertical: 40,
  },
})