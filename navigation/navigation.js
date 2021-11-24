import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './../screens/login/login';
import BuyerSignup from '../screens/signup/buyerSignup';
import ProviderSignup1 from '../screens/signup/providerSignup1';
import ProviderSignup2 from '../screens/signup/providerSignup2';
import Verify from './../screens/signup/verify';


// set some styles of Tab, HomeStack and header
const HomeStack = createNativeStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
})

export default class LogSign extends Component {

  login = ({navigation}) => {
    return (
      <Login navigation={navigation} navi={this.props.navigation}/>
    )
  }

  buyerSignup = props => {
    return (
      <BuyerSignup {...props} navi={this.props.navigation}/>
    )
  }

  providerSignup1 = props => {
    return (
      <ProviderSignup1 {...props}/>
    )
  }

  providerSignup2 = props => {
    return (
      <ProviderSignup2 {...props}/>
    )
  }

  verification = props => {
    return (
      <Verify {...props} navi={this.props.navigation}/>
    )
  }

  render() {

    return (
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen name="Log" component={this.login} options={navOptionHandler} />
          <HomeStack.Screen name="BSin" component={this.buyerSignup} options={navOptionHandler} />
          <HomeStack.Screen name="PSin1" component={this.providerSignup1} options={navOptionHandler} />
          <HomeStack.Screen name="PSin2" component={this.providerSignup2} options={navOptionHandler} />
          <HomeStack.Screen name="Ver" component={this.verification} options={navOptionHandler} />
        </HomeStack.Navigator>
      </NavigationContainer>
    );
  }
}