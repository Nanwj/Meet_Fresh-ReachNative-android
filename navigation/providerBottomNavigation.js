import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProviderManagement from '../screens/provider/ProviderManagement';
import ProviderChat from '../screens/provider/ProviderChat';

// icon
import { Ionicons, FontAwesome } from '@expo/vector-icons';


// set some styles of Tab, HomeStack and header
const Tab = createBottomTabNavigator();


export default class App extends React.Component {
    constructor(props) {
        super(props) 
        const { params } = this.props.navigation.state
        this.state = {
            params: params
        }
    }

    // carter screen in bottom navigation
    managementScreen = () => {

        const {providerQuickProducts, providerGroupProducts} = this.state.params

        return (
            <ProviderManagement 
              providerInfo={this.state.params} 
              providerQuickProducts={providerQuickProducts} 
              providerGroupProducts={providerGroupProducts}
            />
        );
    }

    // chat page in bottom navigation
    chatScreen = () => {
        return (
            <ProviderChat/>
        );
    }

    render() {

        return (
            <NavigationContainer>
                <Tab.Navigator initialRouteName="cart">
                    <Tab.Screen name="management" component={this.managementScreen}
                        options={{
                        tabBarLabel: 'Cart',
                        tabBarActiveTintColor: "#1ebc8d",
                        tabBarInactiveTintColor: "#aaa",
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome name="shopping-cart" size={30} color={focused ? "#1ebc8d" : "#aaa"} />
                        )
                    }} />
                    <Tab.Screen name="chat" component={this.chatScreen} 
                    options={{
                        tabBarLabel: 'Chat',
                        tabBarActiveTintColor: "#1ebc8d",
                        tabBarInactiveTintColor: "#aaa",
                        tabBarIcon: ({ focused }) => (
                        <Ionicons name="chatbubble-ellipses" size={30} color={focused ? "#1ebc8d" : "#aaa"} /> 
                        ),
                    }} /> 
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
  
}