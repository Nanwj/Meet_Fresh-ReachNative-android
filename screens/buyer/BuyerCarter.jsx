import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BuyerQuickCart from './moreCarterPages/BuyerQuickCart'
import BuyerQuickSummery from './moreCarterPages/BuyerQuickSummery'
import BuyerGroupCart from './moreCarterPages/BuyerGroupCart'
import BuyerGroupSummery from './moreCarterPages/BuyerGroupSummery'
import DeliverySelection from './moreCarterPages/DeliverySelection'
import DeliverySelfPickup from './moreCarterPages/DeliverySelfPickup'
import DeliveryPickupPoint from './moreCarterPages/DeliveryPickupPoint'
import DeliveryPostage from './moreCarterPages/DeliveryPostage'
import BuyerPaymentConfirm from './moreCarterPages/DeliveryInformationFill'


const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator()

const navOptionHandler = () => ({
    headerShown: false
})

// request data at here
const dataQuick = [
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
const dataGroup = [
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
const quickAddress = '1000 Harbour Road St Lusia Postcose: 4016'
const ads = [
    require("./../../assets/images/tomato.jpg"),
    require("./../../assets/images/water-fruit.jpg"),
    require("./../../assets/images/carrot.jpg"),
]


// exported class represents carter page
export default class BuyerCarter extends Component {

    constructor(props) {
        super(props)
        const { 
            params,
            address, 
            quickCarter, 
            groupCarter, 
            updateQuickCarter, 
            updateGroupCarter,
            handleDeleteQuickProduct,
            handleDeleteGroupProduct } = this.props
        this.state = {
            params: params,
            address: address,
            quickCarter: quickCarter,
            groupCarter: groupCarter,
            updateQuickCarter: updateQuickCarter,
            updateGroupCarter: updateGroupCarter,
            handleDeleteQuickProduct: handleDeleteQuickProduct,
            handleDeleteGroupProduct: handleDeleteGroupProduct
        }
    }
    
    // stack navigation of QUICK buy cart, including payment page and delivery selection page
    Quickcart = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="QuickCart" component={this.buyerQuickCart} options={navOptionHandler}/>
                <Stack.Screen name="QuickSummery" component={this.buyerQuickSummery} options={navOptionHandler}/>
                <Stack.Screen name="DeliveryMode" component={this.quickDeliverySelect} options={navOptionHandler}/>
                <Stack.Screen name="DeliveryMode1" component={this.quickDeliveryMode1} options={navOptionHandler}/>
                <Stack.Screen name="DeliveryMode2" component={this.quickDeliveryMode2} options={navOptionHandler}/>
                <Stack.Screen name="DeliveryMode3" component={this.quickDeliveryMode3} options={navOptionHandler}/>
                <Stack.Screen name="Confirm" component={this.quickPaymentConfirm} options={navOptionHandler}/>            
            </Stack.Navigator>
        );
    }

    // stack navigation of GROUP buy cart, including payment page and delivery selection page
    Groupcart = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="GroupCart" component={this.buyerGroupCart} options={navOptionHandler}/>
                <Stack.Screen name="GroupSummery" component={this.buyerGroupSummery} options={navOptionHandler}/>
                <Stack.Screen name="DeliveryMode" component={this.groupDeliverySelect} options={navOptionHandler}/>
                <Stack.Screen name="DeliveryMode1" component={this.groupDeliveryMode1} options={navOptionHandler}/>
                <Stack.Screen name="DeliveryMode2" component={this.groupDeliveryMode2} options={navOptionHandler}/>
                <Stack.Screen name="DeliveryMode3" component={this.groupDeliveryMode3} options={navOptionHandler}/>
                <Stack.Screen name="Confirm" component={this.groupPaymentConfirm} options={navOptionHandler}/>            
            </Stack.Navigator>
        );
    }


    // quick buy mode
    buyerQuickCart = ({navigation}) => {
        return (
            <BuyerQuickCart 
              params={this.state.params}
              data={this.state.quickCarter} 
              ads={ads} 
              address={this.state.address} 
              updateQuickCarter={this.state.updateQuickCarter}
              handleDeleteQuickProduct={this.state.handleDeleteQuickProduct}
              navigation={navigation}
            />
        )
    }
    buyerQuickSummery = props => {
        return (
            <BuyerQuickSummery {...props}/>
        )
    }
    quickDeliverySelect = props => {
        return (
            <DeliverySelection {...props}/>
        )
    }
    quickDeliveryMode1 = props => {
        return (
            <DeliverySelfPickup {...props}/>
        )
    }
    quickDeliveryMode2 = props => {
        return (
            <DeliveryPickupPoint {...props}/>
        )
    }
    quickDeliveryMode3 = props => {
        return (
            <DeliveryPostage {...props}/>
        )
    }
    quickPaymentConfirm = props => {
        return (
            <BuyerPaymentConfirm {...props}/>
        )
    }

    // group buy mode
    buyerGroupCart = ({navigation}) => {
        return (
            <BuyerGroupCart 
              params={this.state.params}
              data={this.state.groupCarter} 
              ads={ads} 
              address={this.state.address} 
              updateGroupCarter={this.state.updateGroupCarter}
              handleDeleteGroupProduct={this.state.handleDeleteGroupProduct}
              navigation={navigation}
            />
        )
    }
    buyerGroupSummery = props => {
        return (
            <BuyerGroupSummery {...props}/>
        )
    }
    groupDeliverySelect = props => {
        return (
            <DeliverySelection {...props}/>
        )
    }
    groupDeliveryMode1 = props => {
        return (
            <DeliverySelfPickup {...props}/>
        )
    }
    groupDeliveryMode2 = props => {
        return (
            <DeliveryPickupPoint {...props}/>
        )
    }
    groupDeliveryMode3 = props => {
        return (
            <DeliveryPostage {...props}/>
        )
    }
    groupPaymentConfirm = props => {
        return (
            <BuyerPaymentConfirm {...props}/>
        )
    }

    render() {
        return (
            <Tab.Navigator
              screenOptions = {{
              tabBarActiveTintColor: '#1EBC8D',
              tabBarInactiveTintColor: '#808080',
              tabBarStyle: { backgroundColor: '#F2F9ED' },
              tabBarPressColor:'#1EBC8D',
              }}
            >
                <Tab.Screen name="Quick" component={this.Quickcart} options = {{tabBarActiveBackgroundColor: 'white',}}/>
                <Tab.Screen name="Group" component={this.Groupcart} />
            </Tab.Navigator>
        )
    }
}
