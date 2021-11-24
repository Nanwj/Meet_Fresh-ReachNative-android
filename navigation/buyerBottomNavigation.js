import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// axios for send request to service
import axios from 'axios'

// web IP
import { WebIP } from './../constants/Web'

import BuyerShop from '../screens/buyer/BuyerShop';
import BuyerCarter from '../screens/buyer/BuyerCarter';
import BuyerChat from '../screens/buyer/BuyerChat';
import BuyerGroup from '../screens/buyer/BuyerGroup';
import BuyerMyself from '../screens/buyer/BuyerMyself';
import BuyerQuickDetail from '../screens/buyer/moreQuickBuyPage/BuyerQuickDetail';
import BuyerGroupDetail from '../screens/buyer/moreGroupBuyPage/BuyerGroupDetail';

// icon
import { Ionicons, FontAwesome } from '@expo/vector-icons';


// request data here:
const buyerImages = [
    require("./../assets/images/tomato.jpg"),
    require("./../assets/images/water-fruit.jpg"),
    require("./../assets/images/carrot.jpg"),
];


// set some styles of Tab, HomeStack and header
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
})

export default class App extends React.Component {

    constructor(props) {
        super(props)
        const {params} = this.props.navigation.state
        this.state = {
            params: params,
            quickCarter: params.quickCarter,
            groupCarter: params.groupCarter
        }
        
        if (params.address === undefined) {
            this.requestAddress(params)
        }
    }

    // request customer address from dataset
    requestAddress = async params => {
        await fetch(`http://${WebIP}:6667/requestAddress/extra?Identify=${params.UserID}`)
        .then( response => response.json())
        .then(responseJson => {
            var { params } = this.state;
            params.address = responseJson[0].Address;
            this.setState({params: params})
        })
        .catch(err => {
            console.log("error in request address", err);
        });
    }

    // update the amount of product in cart after 
    // adding an exist product into quick cart
    updateQuickProductAmount = async (item, count) => {
        // update product amount
        await axios.post('http://' + WebIP + ':6667/updateQuickProductAmount/extra?CustomerID='+this.state.params.UserID+'&ProductID='+ item.id+'&ProductAmount='+count)
        .catch(err => console.log("Error in update product quantity in quick carter", err))
    }

    // insert a product into quick carter
    insertQuickProductIntoCart = async (item, count) => {
        // insert product into quick carter
        await axios.post('http://' + WebIP + ':6667/insertQuickProductIntoCart/extra?CustomerID='+this.state.params.UserID+'&ProductID='+ item.id+'&ProductPrice='+(item.price.split(" ")[1])+'&ProductName='+item.text+'&ProductQuantity='+count)
        .catch(err => console.log("Error in insert product into quick carter", err))
    }

    // delete product in quick cart
    handleDeleteQuickProduct = (id) => {
        const newData = this.state.quickCarter.filter((item) => {
            return item.id !== id;
        })
        this.setState({quickCarter: newData});
    }

    // update the amount of pruduct in  cart after 
    // adding an exist product into group cart
    updateGroupProductAmount = async (item, count) => {
        // update product amount
        await axios.post('http://' + WebIP + ':6667/updateGroupProductAmount/extra?CustomerID='+this.state.params.UserID+'&ProductID='+ item.id+'&ProductAmount='+count)
        .catch(err => console.log("Error in update product quantity in group carter", err))
    }

    // insert a product into group cater
    insertGroupProductIntoCart = async (item, count) => {
        // insert product into group carter
        await axios.post('http://' + WebIP + ':6667/insertGroupProductIntoCart/extra?CustomerID='+this.state.params.UserID+'&ProductID='+ item.id+'&ProductPrice='+(item.price.split(" ")[1])+'&ProductName='+item.text+'&ProductQuantity='+count)
        .catch(err => console.log("Error in insert product into group carter", err))
    }

    // delete product in group cart
    handleDeleteGroupProduct = (id) => {
        const newData = this.state.groupCarter.filter((item) => {
            return item.id !== id;
        })
        this.setState({groupCarter: newData});
    }

    // call back function after add a product into quick cart
    addToQuickCarter = async (item, count) => {
        var hasProduct = false
        var carter = this.state.quickCarter
        carter.map(product => {
            if (product.text === item.text && product.productID ===item.id) {
                hasProduct = true
                product.amount = product.amount + count
                this.updateQuickProductAmount(item, product.amount)
            }
        })

        // check whether already have product in cart
        if (!hasProduct) {
            const obj = {}
            obj.id = carter.length + 1;
            obj.productID = item.id;
            obj.urls = item.urls[0];
            obj.text = item.text;
            obj.price = item.price;
            obj.money = parseInt(item.price.split(" ")[1])
            obj.amount = count;
            obj.checked = true;
            this.setState({quickCarter: [obj,...carter]});
            this.insertQuickProductIntoCart(item, count)
        }
    }

    // call back function after add a product into group cart
    addToGroupCarter = async (item, count) => {
        var hasProduct = false
        var carter = this.state.groupCarter
        carter.map(product => {
            if (product.text === item.text && product.productID ===item.id) {
                hasProduct = true
                product.amount = product.amount + count
                this.updateGroupProductAmount(item, product.amount)
            }
        })

        // check whether already exist product in group cart
        if (!hasProduct) {
            const obj = {}
            obj.id = carter.length + 1;
            obj.productID = item.id;
            obj.urls = item.urls[0];
            obj.text = item.text;
            obj.price = item.price;
            obj.money = parseInt(item.price.split(" ")[1])
            obj.amount = count;
            obj.checked = true;
            this.setState({groupCarter: [obj,...carter]});
            this.insertGroupProductIntoCart(item, count)
        }
    }

    // call back function to get uploaded quick cart with products
    sendUpdatedQuickCarter = () => {
        return this.state.quickCarter
    }

    // call back function to get uploaded group cart with products
    sendUpdatedGroupCarter = () => {
        return this.state.groupCarter
    }
    


    // chat page in bottom navigation
    chatScreen = () => {
        return (
            <BuyerChat/>
        );
    }

    // stack navigation of group purchase
    groupStack = () => {
        return (
            <HomeStack.Navigator>
                <HomeStack.Screen name="Group" component={this.buyerGroupScreen} options={navOptionHandler}/>
                <HomeStack.Screen name="GroupDetail" component={this.groupDetailScreen} options={navOptionHandler} />
            </HomeStack.Navigator>
        );
    }

    // group buy page in bottom navigation
    buyerGroupScreen = ({navigation}, props) => {
        return (
            <BuyerGroup 
              products={this.state.params.groupProducts} 
              advertise={buyerImages} 
              callBack={this.addToGroupCarter}
              navigation={navigation}
              {...props}
            />
        )
    }

    // detail of group purchase
    groupDetailScreen = props => {
        return <BuyerGroupDetail {...props}/>
    }

    // stack navigation of quick purchase
    shopStack = () => {
        return (
            <HomeStack.Navigator>
                <HomeStack.Screen name="Shop" component={this.buyerQuickScreen} options={navOptionHandler} />
                <HomeStack.Screen name="QuickDetail" component={this.quickDetailScreen} options={navOptionHandler} />
            </HomeStack.Navigator>
        );
    }

    // quick buy page in bottom navigation
    buyerQuickScreen = ({navigation}, props) => {
        return (
            <BuyerShop 
              products={this.state.params.quickProducts} 
              advertise={buyerImages} 
              navigation={navigation} 
              callBack={this.addToQuickCarter}
              {...props}
            />
        )
    }

    // detail of quick purchase
    quickDetailScreen = props => {
        return <BuyerQuickDetail {...props}/>
    }

    // carter screen in bottom navigation
    cartScreen = () => {
        return (
            <BuyerCarter 
              params={this.state.params}
              address={this.state.params.address} 
              quickCarter={this.state.quickCarter} 
              groupCarter={this.state.groupCarter}
              updateQuickCarter={this.sendUpdatedQuickCarter}
              updateGroupCarter={this.sendUpdatedGroupCarter}
              handleDeleteQuickProduct={this.handleDeleteQuickProduct}
              handleDeleteGroupProduct={this.handleDeleteGroupProduct}
            />
        );
    }

    // my screen in bottom navigation
    myScreen = () => {
        return (
            <BuyerMyself buyerInfo={this.state.params}/>
        );
    }

    render() {

        return (
            <NavigationContainer>
                <Tab.Navigator initialRouteName="shop">
                    <Tab.Screen name="chat" component={this.chatScreen} 
                    options={{
                    tabBarLabel: 'Chat',
                    tabBarActiveTintColor: "#1ebc8d",
                    tabBarInactiveTintColor: "#aaa",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="chatbubble-ellipses" size={30} color={focused ? "#1ebc8d" : "#aaa"} /> 
                    ),
                    }} />
                    <Tab.Screen name="group" component={this.groupStack} 
                    options={{
                        tabBarLabel: 'Group',
                        tabBarActiveTintColor: "#1ebc8d",
                        tabBarInactiveTintColor: "#aaa",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="people" size={30} color={focused ? "#1ebc8d" : "#aaa"} />
                        ),
                    }} />
                    <Tab.Screen name="shop" component={this.shopStack} 
                    options={{
                        tabBarLabel: 'Shop',
                        tabBarActiveTintColor: "#1ebc8d",
                        tabBarInactiveTintColor: "#aaa",
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome name="home" size={30} color={focused ? "#1ebc8d" : "#aaa"} />
                        ),
                    }} />
                    <Tab.Screen name="cart" component={this.cartScreen}
                      options={{
                          tabBarLabel: 'Cart',
                          tabBarActiveTintColor: "#1ebc8d",
                          tabBarInactiveTintColor: "#aaa",
                          tabBarIcon: ({ focused }) => (
                              <FontAwesome name="shopping-cart" size={30} color={focused ? "#1ebc8d" : "#aaa"} />
                          ),
                    }} />
                    <Tab.Screen name="me" component={this.myScreen}
                    options={{
                        tabBarLabel: 'Me',
                        tabBarActiveTintColor: "#1ebc8d",
                        tabBarInactiveTintColor: "#aaa",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="person-circle" size={30} color={focused ? "#1ebc8d" : "#aaa"} />
                        ),
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}