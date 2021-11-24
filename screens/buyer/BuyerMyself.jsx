import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyPage from './moreMyPages/MyPage'
import UnshippedQuickPage from './moreMyPages/UnshippedQuickPage'
import UnshippedGroupPage from './moreMyPages/UnshippedGroupPage'
import ShippingQuickPage from './moreMyPages/ShippingQuickPage'
import ShippingGroupPage from './moreMyPages/ShippingGroupPage'
import UsuccessGroupPage from './moreMyPages/UnsuccessGroupPage'
import CardManagement from './moreMyPages/CardManagement'
import ShippingAddress from './moreMyPages/ShippingAddress'

const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator()

const navOptionHandler = () => ({
    headerShown: false
})

// request data at here
const unsuccessfulGroupInfo = [
    {
        id: 1,
        urls: require("./../../assets/images/list-carrot.jpg"),
        text: 'carrot',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 3,
        checked: true,
    },
    {
        id: 2,
        urls: require("./../../assets/images/list-corn.jpg"),
        text: 'corn',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: true,
    },
    {
        id: 3,
        urls: require("./../../assets/images/list-cucumber.jpg"),
        text: 'cucumber',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 2,
        checked: false,
    },
    {
        id: 4,
        urls: require("./../../assets/images/list-eggplant.jpg"),
        text: 'eggplant',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 10,
        checked: true,
    },
    {
        id: 5,
        urls: require("./../../assets/images/list-ginger.jpg"),
        text: 'ginger',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
    {
        id: 6,
        urls: require("./../../assets/images/list-lettuce.jpg"),
        text: 'lettuce',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
]
const unshippedQuickInfo = [
    {
        id: 1,
        urls: require("./../../assets/images/list-carrot.jpg"),
        text: 'carrot',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 3,
        checked: true,
    },
    {
        id: 2,
        urls: require("./../../assets/images/list-corn.jpg"),
        text: 'corn',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: true,
    },
    {
        id: 3,
        urls: require("./../../assets/images/list-cucumber.jpg"),
        text: 'cucumber',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 2,
        checked: false,
    },
    {
        id: 4,
        urls: require("./../../assets/images/list-eggplant.jpg"),
        text: 'eggplant',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 10,
        checked: true,
    },
    {
        id: 5,
        urls: require("./../../assets/images/list-ginger.jpg"),
        text: 'ginger',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
    {
        id: 6,
        urls: require("./../../assets/images/list-lettuce.jpg"),
        text: 'lettuce',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
]
const unshippedGroupInfo = [
    {
        id: 1,
        urls: require("./../../assets/images/list-carrot.jpg"),
        text: 'carrot',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 3,
        checked: true,
    },
    {
        id: 2,
        urls: require("./../../assets/images/list-corn.jpg"),
        text: 'corn',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: true,
    },
    {
        id: 3,
        urls: require("./../../assets/images/list-cucumber.jpg"),
        text: 'cucumber',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 2,
        checked: false,
    },
    {
        id: 4,
        urls: require("./../../assets/images/list-eggplant.jpg"),
        text: 'eggplant',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 10,
        checked: true,
    },
    {
        id: 5,
        urls: require("./../../assets/images/list-ginger.jpg"),
        text: 'ginger',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
    {
        id: 6,
        urls: require("./../../assets/images/list-lettuce.jpg"),
        text: 'lettuce',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
]
const shippingQuickInfo = [
    {
        id: 1,
        urls: require("./../../assets/images/list-carrot.jpg"),
        text: 'carrot',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 3,
        checked: true,
    },
    {
        id: 2,
        urls: require("./../../assets/images/list-corn.jpg"),
        text: 'corn',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: true,
    },
    {
        id: 3,
        urls: require("./../../assets/images/list-cucumber.jpg"),
        text: 'cucumber',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 2,
        checked: false,
    },
    {
        id: 4,
        urls: require("./../../assets/images/list-eggplant.jpg"),
        text: 'eggplant',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 10,
        checked: true,
    },
    {
        id: 5,
        urls: require("./../../assets/images/list-ginger.jpg"),
        text: 'ginger',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
    {
        id: 6,
        urls: require("./../../assets/images/list-lettuce.jpg"),
        text: 'lettuce',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
]
const shippingGroupInfo = [
    {
        id: 1,
        urls: require("./../../assets/images/list-carrot.jpg"),
        text: 'carrot',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 3,
        checked: true,
    },
    {
        id: 2,
        urls: require("./../../assets/images/list-corn.jpg"),
        text: 'corn',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: true,
    },
    {
        id: 3,
        urls: require("./../../assets/images/list-cucumber.jpg"),
        text: 'cucumber',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 2,
        checked: false,
    },
    {
        id: 4,
        urls: require("./../../assets/images/list-eggplant.jpg"),
        text: 'eggplant',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 10,
        checked: true,
    },
    {
        id: 5,
        urls: require("./../../assets/images/list-ginger.jpg"),
        text: 'ginger',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
    {
        id: 6,
        urls: require("./../../assets/images/list-lettuce.jpg"),
        text: 'lettuce',
        price: '$ 2.5 /kg',
        money: 2.5,
        amount: 1,
        checked: false,
    },
]



// exported class represents my page
export default class BuyerCarter extends Component {

    constructor(props) {
        super(props)
        const { buyerInfo } = this.props
        if (buyerInfo !== undefined) {
            this.state = {
                userName: buyerInfo.userName,
                email: buyerInfo.email
            }
        } else {
            this.state = {
                userName: 'Mate',
                email: "------"
            }
        }
    }

    // unshipped quick buy screen
    unshippedQuick = ({navigation}) => {
        return (
            <UnshippedQuickPage unshippedQuickInfo={unshippedQuickInfo} navigation={navigation}/>
        )
    }

    // unshipped group buy screen
    unshippedGroup = ({navigation}) => {
        return (
            <UnshippedGroupPage unshippedGroupInfo={unshippedGroupInfo} navigation={navigation}/>
        )
    }

    // shipping quick buy screen
    shippingQuick = ({navigation}) => {
        return (
            <ShippingQuickPage shippingQuickInfo={shippingQuickInfo} navigation={navigation}/>
        )
    }

    // shipping group buy screen
    shippingGroup = ({navigation}) => {
        return (
            <ShippingGroupPage shippingGroupInfo={shippingGroupInfo} navigation={navigation}/>
        )
    }

    // my home page
    myPage = ({navigation}) => {
        return (
            <MyPage userName={this.state.userName} email={this.state.email} navigation={navigation}/>
        );
    }

    // top navigation of unshipped pages, including quick and group modes
    unshippedPages = () => {
        return (
            <Tab.Navigator
            screenOptions = {{
            tabBarActiveTintColor: '#1EBC8D',
            tabBarInactiveTintColor: '#808080',
            tabBarStyle: { backgroundColor: '#F2F9ED' },
            tabBarPressColor:'#1EBC8D',
            }}
            >
                <Tab.Screen name="UnshippedQuick" component={this.unshippedQuick} options = {{tabBarActiveBackgroundColor: 'white',}}/>
                <Tab.Screen name="UnshippedGroup" component={this.unshippedGroup} />
            </Tab.Navigator>
        );
    }

    // top navigation of shipping pages, including quick and group modes
    shippingPages = () => {
        return (
            <Tab.Navigator
            screenOptions = {{
            tabBarActiveTintColor: '#1EBC8D',
            tabBarInactiveTintColor: '#808080',
            tabBarStyle: { backgroundColor: '#F2F9ED' },
            tabBarPressColor:'#1EBC8D',
            }}
            >
                <Tab.Screen name="ShippingQuick" component={this.shippingQuick} options = {{tabBarActiveBackgroundColor: 'white',}}/>
                <Tab.Screen name="ShippingGroup" component={this.shippingGroup} />
            </Tab.Navigator>
        );
    }

    // unsuccessful group buy screen
    unsuccessGroupPage = ({navigation, props}) => {
        return (
            <UsuccessGroupPage unsuccessfulGroupInfo={unsuccessfulGroupInfo} {...props} navigation={navigation}/>
        );
    }

    // unsuccessful group buy screen
    shippingAddress = props => {
        return (
            <ShippingAddress {...props}/>
        );
    }

    // unsuccessful group buy screen
    cardManagement = props => {
        return (
            <CardManagement {...props}/>
        );
    }

    

    render() {

        return (
            <Stack.Navigator
              screenOptions = {{
                  tabBarActiveTintColor: '#1EBC8D',
                  tabBarInactiveTintColor: '#808080',
                  tabBarStyle: { backgroundColor: '#F2F9ED' },
                  tabBarPressColor:'#1EBC8D',
              }}
            >
                <Stack.Screen name="MyPage" component={this.myPage} options={navOptionHandler}/>
                <Stack.Screen name="UnshippedPages" component={this.unshippedPages} options={navOptionHandler}/>
                <Stack.Screen name="ShippingPages" component={this.shippingPages} options={navOptionHandler}/>
                <Stack.Screen name="UnsuccessGroup" component={this.unsuccessGroupPage} options={navOptionHandler}/>
                <Stack.Screen name="Shipping address" component={this.shippingAddress} options={navOptionHandler}/>
                <Stack.Screen name="Card management" component={this.cardManagement} options={navOptionHandler}/>
            </Stack.Navigator>
        )
    }
}
