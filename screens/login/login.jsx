import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  ScrollView } from 'react-native';
import { Formik } from 'formik';

// const images
import { imagePaths } from './../../assets/ImagePaths'
// web IP
import { WebIP } from './../../constants/Web'

// icons
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';


export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userInfo: null,
      quickProducts: null,
      groupProducts: null,
      quickCarter: null,
      groupCarter: null,
      providerQuickProducts: null,
      providerGroupProducts: null
    }
  }

  // request all quick products in database
  requestQuickProduct = async () => {
    await fetch(`http://${WebIP}:6667/requestQuickProduct`)
    .then( response => response.json())
    .then(responseJson => {
        const quickProducts = [];
        responseJson.map((item, i) => {
            var obj = {};
            var key = item.Name;
            obj.id = item.ID;
            obj.urls = imagePaths[key];
            obj.text = item.Name;
            obj.price = "$ " + item.Price + " /kg";
            obj.desc = item.Description;
            quickProducts[i] = obj
        })
        this.setState({quickProducts: quickProducts})
    })
    .catch(err => {
        console.log("error in request quick products", err);
    });
  }

  // request all group products in database
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
            obj.desc = item.Description;
            obj.farm = item.FarmName;
            groupProducts[i] = obj
        })
        this.setState({groupProducts: groupProducts})
    })
    .catch(err => {
        console.log("error in request group products", err);
    });
  }

  // request quick cart information of customer
  requestQuickCarter = async (UserID) => {
    await fetch(`http://${WebIP}:6667/requestQuickCarter/extra?id=${UserID}`)
    .then( response => response.json())
    .then(responseJson => {
        const quickCarter = [];
        responseJson.map((item, i) => {
          // console.log(item);
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

  // request group cart information of customer
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

  // request quick product information of provider
  requestQuickProductOfProvider = async (providerID) => {
    await fetch(`http://${WebIP}:6667/requestQuickProductOfProvider/extra?providerID=${providerID}`)
    .then( response => response.json())
    .then(responseJson => {
        const providerQuickProducts = [];
        responseJson.map((item, i) => {
            var obj = {}
            var key = item.Name;
            obj.id = item.ID;
            obj.urls = imagePaths[key][0];
            obj.text = item.Name;
            obj.price = "$ " + item.Price + " /kg";
            obj.money = item.Price;
            obj.amount = item.Quantity;
            obj.time = item.TimeLimit;
            obj.participate = Math.ceil(item.NumOfPerson / 8);
            obj.requirePeople = item.NumOfPerson;
            obj.desc = item.Description;
            obj.farm = item.FarmName;
            providerQuickProducts[i] = obj
        })
        this.setState({providerQuickProducts: providerQuickProducts})
    })
    .catch(err => {
        console.log("error in request provider's quick products", err);
    });
  }

  // request group product information of provider
  requestGroupProductOfProvider = async (providerID) => {
    await fetch(`http://${WebIP}:6667/requestGroupProductOfProvider/extra?providerID=${providerID}`)
    .then( response => response.json())
    .then(responseJson => {
        const providerGroupProducts = [];
        responseJson.map((item, i) => {
            var obj = {};
            var key = item.Name;
            obj.id = item.ID;
            obj.urls = imagePaths[key][0];
            obj.text = item.Name;
            obj.price = "$ " + item.Price + " /kg";
            obj.money = item.Price;
            obj.amount = item.Quantity;
            obj.time = item.TimeLimit;
            obj.participate = Math.ceil(item.NumOfPerson / 8);
            obj.requirePeople = item.NumOfPerson;
            obj.desc = item.Description;
            obj.farm = item.FarmName;
            providerGroupProducts[i] = obj
        })
        this.setState({providerGroupProducts: providerGroupProducts})
    })
    .catch(err => {
        console.log("error in request provider's group products", err);
    });
  }

  // call this hook after login button clicked  
  loginClicked = async (values) => {
    await fetch('http://' + WebIP + ':6667/requestLogin/otherInfo?UserName=' + values.email + '&Password=' + values.password)
    .then( response => response.json())
    .then(responseJson => {
      this.setState({userInfo: responseJson})
    })
    .catch(err => {
      console.log("error in get user name", err);
    })
  }


  render() {
    return (
      <Formik
        initialValues={{ email: 'Zack2021@email.com', password: 'abcd1234' }} 
        // chris2001@email.com  123789      without product in cart
        // Zack2021@email.com   abcd1234    has product in cart
        // rongzhao@email.com   654321      provider with product
        // france@email.com     qwe987      provider without product
        onSubmit={ async (values) => {
          await this.loginClicked(values)
          if (this.state.userInfo.length !== 0 
            && this.state.userInfo[0].Type === "Customer") {
              // jump to buyer page
              await this.requestQuickProduct();
              await this.requestGroupProduct();
              await this.requestQuickCarter(this.state.userInfo[0].UserID);
              await this.requestGroupCarter(this.state.userInfo[0].UserID);
              this.props.navi.navigate('BuyerBottomNavigator', 
              {
                UserID: this.state.userInfo[0].UserID,
                type: 'Customer',
                email: this.state.userInfo[0].Email,
                userName: this.state.userInfo[0].UserName,
                password: this.state.userInfo[0].Password,
                dob: this.state.userInfo[0].Password,
                quickProducts: this.state.quickProducts,
                groupProducts: this.state.groupProducts,
                quickCarter: this.state.quickCarter,
                groupCarter: this.state.groupCarter
              }
            )
          } else if (this.state.userInfo.length !== 0 
            && this.state.userInfo[0].Type === "Provider") {
              // jump to provider
              await this.requestQuickProductOfProvider(this.state.userInfo[0].UserID);
              await this.requestGroupProductOfProvider(this.state.userInfo[0].UserID);
              this.props.navi.navigate('ProviderBottomNavigator', 
              {
                UserID: this.state.userInfo[0].UserID,
                type: 'Provider',
                email: this.state.userInfo[0].Email,
                userName: this.state.userInfo[0].UserName,
                password: this.state.userInfo[0].Password,
                providerQuickProducts: this.state.providerQuickProducts,
                providerGroupProducts: this.state.providerGroupProducts
              }
            )
          } else {
            alert("Email or Password is not correct")
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <ScrollView>
              <View style={styles.container}>
                {/* page logo */}
                <Image style={styles.logo} source={require('./../../assets/images/logo.png')}/>

                {/* email input */}
                <View style={styles.inputView} >
                  <Ionicons style={styles.icons} name="person" size={30} />
                  <TextInput 
                    style={styles.input}
                    placeholder="nanyang@email.com"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
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

                {/* log in button */}
                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                  <Text style={{
                    color: "#ffffff", 
                    fontSize: 20, 
                    fontWeight: "bold",
                  }}>
                    Log in
                  </Text>
                </TouchableOpacity>

                {/* user sign up */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BSin')}>
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      color: "#9CA3AF",
                      marginVertical: 10,
                    }}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>

                {/* facebook and google log in */}
                <View style={styles.faceAndGoogle}>
                  {/* facebook */}
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#1E90FF",
                      paddingVertical: 15,
                      paddingHorizontal: 18,
                      borderRadius: 10,
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome5 
                      style={{
                        color: "#ffffff",
                      }}
                    name="facebook" size={20} color="black" />
                    <Text style={{
                      fontSize: 20,
                      color: "#ffffff", 
                      paddingLeft: 5
                    }}>Facebook</Text>
                  </TouchableOpacity>

                  {/* google */}
                  <TouchableOpacity 
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#FF4500",
                      paddingVertical: 15,
                      paddingHorizontal: 18,
                      borderRadius: 10,
                      alignItems: "center",
                    }}
                  >
                    <Ionicons style={{
                      color: "#ffffff"
                    }} name="logo-google" size={18} />
                    <Text style={{
                      fontSize: 20,
                      color: "#ffffff", 
                      paddingLeft: 8, 
                      paddingRight: 8
                    }}>Google</Text>
                  </TouchableOpacity>
                </View>

                {/* forget password */}
                <TouchableOpacity>
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      color: "#9CA3AF",
                      marginVertical: 10,
                    }}
                  >
                    Forget your password?
                  </Text>
                </TouchableOpacity>

                {/* regist as a provider */}
                <View style={{
                  flexDirection: "row",
                  marginVertical: 10,
                }}>
                  <Text style={{color: "#9CA3AF"}}>Regist as a </Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('PSin1')}>
                  <Text
                    style={{
                      paddingLeft: 3,
                      textDecorationLine: "underline",
                      color: "#9CA3AF"
                    }}
                  >
                    Provider
                  </Text>
                </TouchableOpacity>
                </View>
                
              </View>
            </ScrollView>
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
    width: 200,
    height: 200,
    marginTop: 70,
    marginBottom: 20,
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
    marginVertical: 18,
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
  loginButton: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#1EBC8D",
    borderRadius: 10,
    marginVertical: 12,
  },
  faceAndGoogle: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  }
})