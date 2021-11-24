import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import { Formik } from 'formik';
import axios from 'axios';

import { WebIP } from './../../constants/Web'

// icons
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

export default class ProviderSignup2 extends Component {

  state = {
    count: 2222,
    userInfo: null
  }

  // call this hook after sign up button clicked
  signupButtonClicked = async (values) => {
    // initialise user id
    await fetch(`http://${WebIP}:6667/getNumOfUsers`)
    .then( response => response.json())
    .then(responseJson => {
      this.setState({count: (this.state.count + responseJson[0].Num)})
    })
    .catch(err => {
        console.log("error in get user name", err);
    });
    const phone = '0402012345';

    // insert User into user table
    await axios.post('http://' + WebIP + ':6667/registUser/extra?UserID='+this.state.count+'&Phone='+ values.contactNum+'&Email='+values.email+'&UserName="'+values.userName+'"&Password='+values.password+'&Dob=1997-04-14&Type="Provider"')
    .catch(err => console.log("Error in insert user", err))

    // insert Provider into Provider table
    await axios.post('http://' + WebIP + ':6667/registProvider/extra?ProviderID='+this.state.count+'&EmergencyContact='+ values.emergencyContact)
    .catch(err => console.log("Error in insert Provider", err))

    // insert Card into ProviderCreditCard table
    await axios.post('http://' + WebIP + ':6667/registProviderCard/extra?ProID='+this.state.count+'&CardNum='+ values.cardNum + '&ExpireDate=' + values.expireDate + '&BankName=' + values.bank)
    .catch(err => console.log("Error in insert ProviderCreditCard", err))

    // insert Store information into shop table
    await axios.post('http://' + WebIP + ':6667/registShop/extra?FarmerID='+this.state.count+'&StoreName='+ values.storeName+'&FarmName='+ values.farmName+'&FarmAddress='+ values.farmAddress)
    .catch(err => console.log("Error in insert BuyerCreditCard", err))
    
    // get user info and set it in state
    await fetch('http://' + WebIP + ':6667/requestLogin/otherInfo?UserName=' + values.email + '&Password=' + values.password)
    .then( response => response.json())
    .then(responseJson => {
        this.setState({userInfo: responseJson[0]})
    })
    .catch(err => {
        console.log("error in get user name", err);
    })
  }

  render() {

    const {params} = this.props.route

    return (
      <Formik
      initialValues={{ 
        userName: params.userName, 
        password: params.password, 
        contactNum: params.contactNum, 
        email: params.email, 
        address: params.address, 
        emergencyContact: params.emergencyContact,
        storeName: "Sky Story",
        farmName: 'Sky Billion Farm',
        farmAddress: '19 Winner Rd, QLD',
        cardNum: '1499876654',
        expireDate: '2025-07-30',
        pin: '123',
        bank: 'Commonwealth Bank'
      }}
      onSubmit={ async values => {
        await this.signupButtonClicked(values);
        this.props.navigation.navigate('Ver', 
        {
          UserID: this.state.count,
          type: 'Provider',
          email: values.email,
          userName: values.userName,
          password: values.password,
          contactNum: values.contactNum,
          address: values.address,
          emergencyContact: values.emergencyContact,
          storeName: values.storeName,
          farmName: values.farmName,
          farmAddress: values.farmAddress,
          cardNum: values.cardNum,
          expireDate: values.expireDate,
          pin: values.pin,
          bank: values.bank
        })
      }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            {/* step 2 */}
            <Text style={styles.promptInformation}>
                Step 2: Additional Information
                <Entypo style={{
                    marginLeft: 5,
                }} name="star" size={10} color="red" />
            </Text>
    
            {/* store name input */}
            <View style={styles.inputView} >
              <TextInput 
                style={styles.input}
                placeholder="Store name"
                onChangeText={handleChange('storeName')}
                onBlur={handleBlur('storeName')}
                value={values.storeName}
              />
            </View>
    
            {/* farm name input */}
            <View style={styles.inputView} >
              <TextInput 
                style={styles.input}
                placeholder="Farm name"
                onChangeText={handleChange('farmName')}
                onBlur={handleBlur('farmName')}
                value={values.farmName}
              />
            </View>
    
            {/* farm address input */}
            <View style={styles.inputView} >
              <TextInput 
                style={styles.input}
                placeholder="Farm Address"
                onChangeText={handleChange('farmAddress')}
                onBlur={handleBlur('farmAddress')}
                value={values.farmAddress}
              />
            </View>
    
            {/* business Licence */}
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                marginVertical: 15,
            }}>
                Business Licence
            </Text>
    
            {/* upload licence */}
            <TouchableOpacity style={{
                width: "80%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
                backgroundColor: "#1EBC8D",
                borderRadius: 10,
                marginVertical: 12,
            }}>
                <Ionicons style={{
                    color: "#ffffff"
                }} name="cloud-upload-outline" size={30} />
                <Text style={{
                  color: "#ffffff", 
                  fontSize: 20, 
                  paddingLeft: 10,
                }}>
                    Upload
                </Text>
            </TouchableOpacity>
    
            {/* step 3 */}
            <Text style={styles.promptInformation}>
                Step 3: Payment Information
                <Entypo style={{
                    marginLeft: 5,
                }} name="star" size={10} color="red" />
            </Text>
    
            {/* card number input */}
            <View style={styles.inputView} >
              <TextInput 
                style={styles.input}
                placeholder="Card Number"
                onChangeText={handleChange('cardNum')}
                onBlur={handleBlur('cardNum')}
                value={values.cardNum}
              />
            </View>
    
            {/* card information */}
            <View style={{
                width: "80%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                {/* expire date input */}
                <View style={{
                    width: "60%",
                    height: 55,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: "#1EBC8D",
                    marginVertical: 10,
                }} >
                    <FontAwesome5 style={{
                        color: "#1EBC8D",
                        paddingLeft: 8,
                    }} name="calendar-alt" size={30} color="black" />
                    <TextInput 
                        style={styles.input}
                        placeholder="Expire date"
                        onChangeText={handleChange('expireDate')}
                        onBlur={handleBlur('expireDate')}
                        value={values.expireDate}
                    />
                </View>
    
                {/* pin number input */}
                <View style={{
                    width: "30%",
                    height: 55,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: "#1EBC8D",
                    marginVertical: 10,
                }} >
                    <TextInput 
                        style={styles.input}
                        placeholder="Pin"
                        onChangeText={handleChange('pin')}
                        onBlur={handleBlur('pin')}
                        value={values.pin}
                    />
                </View>
            </View>
    
            {/* bank name input */}
            <View style={styles.inputView} >
              <TextInput 
                style={styles.input}
                placeholder="Bank Name"
                onChangeText={handleChange('bank')}
                onBlur={handleBlur('bank')}
                value={values.bank}
              />
            </View>
    
            {/* previous and signup button */}
            <View style={styles.faceAndGoogle}>
              {/* previous */}
              <TouchableOpacity style={{
                  flexDirection: "row",
                  backgroundColor: "#1EBC8D",
                  paddingVertical: 15,
                  paddingHorizontal: 18,
                  borderRadius: 10,
                  alignItems: "center",
              }} onPress={() => this.props.navigation.navigate('PSin1')}>
                <Text style={styles.backNextText}>Previous</Text>
              </TouchableOpacity>
    
              {/* sign up */}
              <TouchableOpacity style={{
                  flexDirection: "row",
                  backgroundColor: "#FF4500",
                  paddingVertical: 15,
                  paddingHorizontal: 18,
                  borderRadius: 10,
                  alignItems: "center",
              }} onPress={handleSubmit}>
                <Text style={styles.backNextText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  promptInformation: {
    fontWeight: "bold",
    marginVertical: 8,
  },
  inputView: {
    width: "80%",
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#1EBC8D",
    marginVertical: 10,
  },
  icons: {
    color: '#1EBC8D',
    paddingLeft: 5,
    zIndex: 1,
  },
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  faceAndGoogle: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  backNextView: {
    flexDirection: "row",
    backgroundColor: "#1EBC8D",
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  backNextText: {
    fontSize: 20,
    color: "#ffffff", 
    paddingHorizontal: 15,
  }
})