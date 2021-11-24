import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Web IP
import { WebIP } from './../../constants/Web'

import Management from './moreManagementPages/Management'
import QuickItem from './moreManagementPages/QuickItem'
import GroupItem from './moreManagementPages/GroupItem'
import QuickInventoryControl from './moreManagementPages/QuickInventoryControl'
import GroupInventoryControl from './moreManagementPages/GroupInventoryControl'
import QuickItemEdit from './moreManagementPages/QuickItemEdit'
import GroupItemEdit from './moreManagementPages/GroupItemEdit'
import QuickOrders from './moreManagementPages/QuickOrders'
import GroupOrders from './moreManagementPages/GroupOrders'
import QuickParcelPostage from './moreManagementPages/QuickParcelPostage'
import GroupParcelPostage from './moreManagementPages/GroupParcelPostage'
import Finance from './moreManagementPages/Finance'


const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator()

const navOptionHandler = () => ({
    headerShown: false
})


export default class ProviderManagement extends Component {

    constructor(props) {
        super(props)
        const { providerInfo } = this.props
        if (providerInfo !== undefined) {
            this.state = {
                userName: providerInfo.userName,
                email: providerInfo.email,
                userID: providerInfo.UserID,
            }
        }

        if (providerInfo.farmName === undefined) {
            this.requestFarmName(providerInfo)
        }
    }

    // get farm name of provider
    requestFarmName = async providerInfo => {
        await fetch(`http://${WebIP}:6667/requestFarmName/extra?Farmerid=${providerInfo.UserID}`)
        .then( response => response.json())
        .then(responseJson => {
            this.setState({farmName: responseJson[0].FarmName})
        })
        .catch(err => {
            console.log("error in request farm name", err);
        });
    }

    management = ({navigation}) => {
        return (
            <Management 
              userName={this.state.userName} 
              email={this.state.email} 
              navigation={navigation} 
            />
        )
    }

    // top navigation of release item pages, including quick and group modes
    itemRelease = () => {
        return (
            <Tab.Navigator
            screenOptions = {{
            tabBarActiveTintColor: '#1EBC8D',
            tabBarInactiveTintColor: '#808080',
            tabBarStyle: { backgroundColor: '#F2F9ED' },
            tabBarPressColor:'#1EBC8D',
            }}
            >
                <Tab.Screen name="Quick Item" component={this.quickItem} options = {{tabBarActiveBackgroundColor: 'white',}}/>
                <Tab.Screen name="Group Item" component={this.groupItem} />
            </Tab.Navigator>
        );
    }

    quickItem = ({navigation}) => {
        return (
            <QuickItem 
              navigation={navigation} 
              UserID={this.state.userID} 
              farmName={this.state.farmName}
            />
        )
    }

    groupItem = ({navigation}) => {
        return (
            <GroupItem 
              navigation={navigation}
              UserID={this.state.userID} 
              farmName={this.state.farmName}
            />
        )
    }

    // top navigation of controlling inventory pages, including quick and group modes
    inventoryControl = () => {
        return (
            <Tab.Navigator
            screenOptions = {{
            tabBarActiveTintColor: '#1EBC8D',
            tabBarInactiveTintColor: '#808080',
            tabBarStyle: { backgroundColor: '#F2F9ED' },
            tabBarPressColor:'#1EBC8D',
            }}
            >
                <Tab.Screen name="Quick Item" component={this.quickInventoryStack} options = {{tabBarActiveBackgroundColor: 'white',}}/>
                <Tab.Screen name="Group Item" component={this.groupInventoryStack} />
            </Tab.Navigator>
        );
    }

    quickInventoryStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="QuickInventory" component={this.quickInventory} options={navOptionHandler}/>
                <Stack.Screen name="QuickItemEdit" component={this.quickItemEdit} options={navOptionHandler}/>
            </Stack.Navigator>
        );
    }

    quickInventory = ({navigation}) => {
        return (
            <QuickInventoryControl quickInventoryList={this.props.providerQuickProducts} navigation={navigation} />
        )
    }

    quickItemEdit = props => {
        return (
            <QuickItemEdit {...props}/>
        )
    }

    groupInventoryStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="GroupInventory" component={this.groupInventory} options={navOptionHandler}/>
                <Stack.Screen name="GroupItemEdit" component={this.groupItemEdit} options={navOptionHandler}/>
            </Stack.Navigator>
        );
    }

    groupInventory = ({navigation}) => {
        return (
            <GroupInventoryControl groupInventoryList={this.props.providerGroupProducts} navigation={navigation} />
        )
    }

    groupItemEdit = props => {
        return (
            <GroupItemEdit {...props}/>
        )
    }

    // top navigation of managing orders pages, including quick and group modes
    manageOrder = () => {
        return (
            <Tab.Navigator
            screenOptions = {{
            tabBarActiveTintColor: '#1EBC8D',
            tabBarInactiveTintColor: '#808080',
            tabBarStyle: { backgroundColor: '#F2F9ED' },
            tabBarPressColor:'#1EBC8D',
            }}
            >
                <Tab.Screen name="Quick Order" component={this.quickOrderManagement} options = {{tabBarActiveBackgroundColor: 'white',}}/>
                <Tab.Screen name="Group Order" component={this.groupOrderManagement} />
            </Tab.Navigator>
        );
    }

    quickOrderManagement = ({navigation}) => {
        return (
            <QuickOrders quickOrderList={this.props.providerQuickProducts} navigation={navigation} />
        )
    }

    groupOrderManagement = ({navigation}) => {
        return (
            <GroupOrders groupOrderList={this.props.providerGroupProducts} navigation={navigation} />
        )
    }

    // top navigation of managing parcel pages, including quick and group modes
    parcelPostage = () => {
        return (
            <Tab.Navigator
            screenOptions = {{
            tabBarActiveTintColor: '#1EBC8D',
            tabBarInactiveTintColor: '#808080',
            tabBarStyle: { backgroundColor: '#F2F9ED' },
            tabBarPressColor:'#1EBC8D',
            }}
            >
                <Tab.Screen name="Quick Post" component={this.quickParcel} options = {{tabBarActiveBackgroundColor: 'white',}}/>
                <Tab.Screen name="Group Post" component={this.groupParcel} />
            </Tab.Navigator>
        );
    }

    quickParcel = ({navigation}) => {
        return (
            <QuickParcelPostage quickParcelList={this.props.providerQuickProducts} navigation={navigation} />
        )
    }

    groupParcel = ({navigation}) => {
        return (
            <GroupParcelPostage groupParcelList={this.props.providerGroupProducts} navigation={navigation} />
        )
    }

    finance = ({navigation}) => {
        return (
            <Finance navigation={navigation} />
        )
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
                <Stack.Screen name="Management" component={this.management} options={navOptionHandler}/>
                <Stack.Screen name="ItemRelease" component={this.itemRelease} options={navOptionHandler}/>
                <Stack.Screen name="InventoryControl" component={this.inventoryControl} options={navOptionHandler}/>
                <Stack.Screen name="ManageOrder" component={this.manageOrder} options={navOptionHandler}/>
                <Stack.Screen name="ParcelPostage" component={this.parcelPostage} options={navOptionHandler}/>
                <Stack.Screen name="Finance" component={this.finance} options={navOptionHandler}/>
            </Stack.Navigator>
        )
    }
}