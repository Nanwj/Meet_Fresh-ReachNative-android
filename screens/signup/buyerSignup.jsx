import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import axios from 'axios';

// constant images
import { imagePaths } from './../../assets/ImagePaths'
// Web IP
import { WebIP } from './../../constants/Web'

// icons
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

export default class ProviderSignup1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 2222,
      userInfo: null, 
      quickProducts: null,
      groupProducts: null,
      quickCarter: null,
      groupCarter: null
    }
  }

  requestQuickProduct = async () => {
    await fetch(`http://${WebIP}:6667/requestQuickProduct`)
    .then( response => response.json())
    .then(responseJson => {
        const quickProducts = [];
        responseJson.map((item, i) => {
            var obj = {}
            var key = item.Name
            obj.id = item.ID;
            obj.urls = imagePaths[key]
            obj.text = item.Name;
            obj.price = "$ " + item.Price + " /kg";
            quickProducts[i] = obj
        })
        this.setState({quickProducts: quickProducts})
    })
    .catch(err => {
        console.log("error in request quick products", err);
    });
  }

  requestGroupProduct = async () => {
    await fetch(`http://${WebIP}:6667/requestGroupProduct`)
    .then( response => response.json())
    .then(responseJson => {
        const groupProducts = [];
        responseJson.map((item, i) => {
            var obj = {};
            var key = item.Name;
            obj.id = item.ID;
            obj.urls = imagePaths[key];
            obj.text = item.Name;
            obj.price = "$ " + item.Price + " /kg";
            obj.timeLimit = item.TimeLimit;
            obj.numOfPerson = item.NumOfPerson;
            obj.farm = item.FarmName
            groupProducts[i] = obj
        })
        this.setState({groupProducts: groupProducts})
    })
    .catch(err => {
        console.log("error in request group products", err);
    });
  }

  requestQuickCarter = async (UserID) => {
    await fetch(`http://${WebIP}:6667/requestQuickCarter/extra?id=${UserID}`)
    .then( response => response.json())
    .then(responseJson => {
        const quickCarter = [];
        responseJson.map((item, i) => {
            var obj = {};
            var key = item.ProductName;
            obj.id = i;
            obj.productID = item.ProductID;
            obj.urls = imagePaths[key][0];
            obj.text = item.ProductName;
            obj.price = "$ " + item.ProductPrice + " /kg";
            obj.money = item.ProductPrice;
            obj.amount = item.ProductQuantity;
            obj.checked = true
            quickCarter[i] = obj
        })
        this.setState({quickCarter: quickCarter})
    })
    .catch(err => {
        console.log("error in request quick carter", err);
    });
  }

  requestGroupCarter = async (UserID) => {
    await fetch(`http://${WebIP}:6667/requestGroupCarter/extra?id=${UserID}`)
    .then( response => response.json())
    .then(responseJson => {
      const groupCarter = [];
      responseJson.map((item, i) => {
          var obj = {};
          var key = item.ProductName;
          obj.id = i;
          obj.productID = item.ProductID;
          obj.urls = imagePaths[key][0];
          obj.text = item.ProductName;
          obj.price = "$ " + item.ProductPrice + " /kg";
          obj.money = item.ProductPrice;
          obj.amount = item.ProductQuantity;
          obj.checked = true
          groupCarter[i] = obj
      })
      this.setState({groupCarter: groupCarter})
    })
    .catch(err => {
        console.log("error in request group carter", err);
    });
  }

  // call this hook after login button clicked  
  nextButtonClicked = async (values) => {
    // initialise user id
    await fetch(`http://${WebIP}:6667/getNumOfUsers`)
    .then( response => response.json())
    .then(responseJson => {
      this.setState({count: (this.state.count + responseJson[0].Num)})
    })
    .catch(err => {
        console.log("error in get user name", err);
    });
    const phone = '0409087654';

    // insert User into user table
    await axios.post('http://' + WebIP + ':6667/registUser/extra?UserID='+this.state.count+'&Phone='+ phone+'&Email='+values.email+'&UserName="'+values.userName+'"&Password='+values.password+'&Dob='+values.dob+'&Type="Customer"')
    .catch(err => console.log("Error in insert user", err))

    // insert Customer into customer table
    await axios.post('http://' + WebIP + ':6667/registCustomer/extra?UserID='+this.state.count+'&Address='+ values.address)
    .catch(err => console.log("Error in insert Customer", err))

    // insert Card into BuyerCreditCard table
    await axios.post('http://' + WebIP + ':6667/registBuyerCard/extra?UserID='+this.state.count+'&CardNum='+ values.cardNum + '&ExpireDate="2025-07-07"')
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
    return (
      <Formik
        initialValues={{ 
          email: 'Arron1997@email.com', 
          userName: 'Arron Yan', 
          password: '123321', 
          confirmPassword: '123321', 
          address: 'Student One, City', 
          cardNum: '1123465578', 
          dob: '1997-9-29'  
        }}
        onSubmit={ async values => {
          await this.nextButtonClicked(values);
          await this.requestQuickProduct();
          await this.requestGroupProduct();
          await this.requestQuickCarter(this.state.count);
          await this.requestGroupCarter(this.state.count);
          this.props.navi.navigate('BuyerBottomNavigator', {
            UserID: this.state.count,
            type: 'Customer',
            email: this.state.userInfo.Email,
            userName: this.state.userInfo.UserName,
            password: this.state.userInfo.Password,
            dob: this.state.userInfo.Password,
            address: values.address,
            cardNum: values.cardNum,
            quickProducts: this.state.quickProducts,
            groupProducts: this.state.groupProducts,
            quickCarter: this.state.quickCarter,
            groupCarter: this.state.groupCarter
          })
        }}
      >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
              {/* page logo */}
              <Image style={styles.logo} source={require('./../../assets/images/female.jpg')}/>
              
              {/* step 1 */}
              <Text style={styles.promptInformation}>
                  Step 1: Personal Information
                  <Entypo style={{
                      marginLeft: 5,
                  }} name="star" size={10} color="red" />
              </Text>

              {/* email input */}
              <View style={styles.inputView} >
                <Ionicons style={styles.icons} name="mail" size={30} />
                <TextInput 
                  style={styles.input}
                  placeholder="nanyang@email.com"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>

              {/* user name input */}
              <View style={styles.inputView} >
                <Ionicons style={styles.icons} name="person" size={30} />
                <TextInput 
                  style={styles.input}
                  placeholder="Nan Yang"
                  onChangeText={handleChange('userName')}
                  onBlur={handleBlur('userName')}
                  value={values.userName}
                />
              </View>

              {/* password input */}
              <View style={styles.inputView} >
                <Entypo style={styles.icons} name="lock" size={30} />
                <TextInput 
                  style={styles.input}
                  placeholder="* * * *"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>

              {/* confirm password input */}
              <View style={styles.inputView} >
                <Entypo style={styles.icons} name="lock" size={30} />
                <TextInput 
                  style={styles.input}
                  placeholder="* * * *"
                  secureTextEntry={true}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
              </View>

              {/* step 2 */}
              <Text style={styles.promptInformation}>
                  Step 2: Additional Information
              </Text>

              {/* address input */}
              <View style={styles.inputView} >
                <Ionicons style={styles.icons} name="md-location-sharp" size={30} />
                <TextInput 
                  style={styles.input}
                  placeholder="12/34 ABC Ave, South Bank, QLD"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                />
              </View>

              {/* card information */}
              <View style={{
                  width: "80%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
              }}>
                  {/* Card Number */}
                  <View style={{
                      width: "55%",
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
                          placeholder="Card Number"
                          onChangeText={handleChange('cardNum')}
                          onBlur={handleBlur('cardNum')}
                          value={values.cardNum}
                      />
                  </View>

                  {/* DoB */}
                  <View style={{
                      width: "35%",
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
                          placeholder="DoB"
                          onChangeText={handleChange('dob')}
                          onBlur={handleBlur('dob')}
                          value={values.dob}
                      />
                  </View>
              </View>

              {/* back and next button */}
              <View style={styles.backNextContainer}>
                {/* facebook */}
                <TouchableOpacity style={styles.backNextView} onPress={() => this.props.navigation.navigate('Log')}>
                  <Text style={styles.backNextText}>Back</Text>
                </TouchableOpacity>

                {/* google */}
                <TouchableOpacity style={styles.backNextView} onPress={handleSubmit}>
                  <Text style={styles.backNextText}>Next</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30,
    borderRadius: 50,
  },
  promptInformation: {
      fontWeight: "bold",
    marginVertical: 15,
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
  backNextContainer: {
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