import React, { Component } from 'react'
import { StyleSheet, 
    ScrollView, 
    Text, 
    View, 
    TouchableOpacity, 
    Image} from 'react-native';

// swiper
import Swiper from 'react-native-swiper/src'
// check box
import CheckBox from '@react-native-community/checkbox';

// icons
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default class BuyerGroupCart extends Component {

    constructor(props) {
        super(props);
        const {params, data, ads, address, updateGroupCarter, handleDeleteGroupProduct} = this.props;
        this.state = {
            params: params,
            data: data,
            ads: ads,
            address: address,
            updateGroupCarter: updateGroupCarter,
            handleDeleteGroupProduct: handleDeleteGroupProduct
        }
    }

    UNSAFE_componentWillMount() {
        const total = this.state.data.reduce((pre, item) => {return pre + (item.checked ? (item.money * item.amount) : 0)}, 0);
        this.state.total = total;
    }

    onChecked(id) {
        const data = this.state.data;
        const index = data.findIndex(x => x.id === id) ;
        data[index].checked = !data[index].checked;

        const newTotal = data.reduce((pre, item) => {return pre + (item.checked ? (item.money * item.amount) : 0)}, 0);

        this.setState(data);
        this.setState({total: newTotal})
    }
    
    deleteProduct = (id) => {
        const newData = this.state.data.filter((item) => {
            return item.id !== id;
        })
        this.setState({data: newData});
        const newTotal = newData.reduce((pre, item) => {return pre + (item.checked ? (item.money * item.amount) : 0)}, 0);
        this.setState({total: newTotal})
        this.state.handleDeleteGroupProduct(id)
    }

    render() {

        const {data, total, ads, address} = this.state;

        return (
            <View style={styles.styledContainer}>
                {/* advertisement carousel */}
                <View style={{ flex: 0.8, backgroundColor:'#ddd'}}>
                    <Swiper autoplay={true} loop={true} 
                      dot={<View style={{
                        width: 0,
                        height: 0
                      }}></View>} 
                      activeDot={<View style={{
                        width: 0,
                        height: 0
                      }}></View>}
                    >
                        {
                            ads.map((item, i) => {
                                return (
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#bbb'
                                    }} key={i}>
                                        <Image source={item} style={{width: 150, height: 100}} key={1} />
                                    </View>
                                )
                            })
                        }
                    </Swiper>
                </View>

                {/* address blcok */}
                <View style={styles.addressContainer}>
                    <View style = {styles.addressTop}>
                        <Text style = {styles.addressTitle}>ADDRESS</Text>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style = {{color:"#fff"}}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style = {styles.postAddressContainer}>
                        <Entypo name="location-pin" size={28} color="#1EBC8D" />
                        {address}
                    </Text>
                </View>
                
                {/* list of products in carter */}
                <View style={{ flex: 3.5, backgroundColor:'white'}}>
                    <ScrollView> 
                        <View style={styles.products_list}>
                            {
                                data.map((item, i) => {
                                    return (
                                        <TouchableOpacity style={styles.product_container} key={i} onPress={() => {this.onChecked(item.id)}}>
                                            <CheckBox style={styles.checkbox} value={item.checked} onValueChange={() => {this.onChecked(item.id)}}/>
                                            <Image style={styles.img} source={item.urls} />
                                            <View style={styles.info_container}>
                                                <Text numberOfLines={1} style={{fontSize: 20, fontWeight: 'bold'}}>{item.text}</Text>
                                                <Text style={{marginTop: 5, fontSize: 15, fontWeight: '700'}}>$ {item.money}</Text>
                                            </View>
                                            <View style={styles.amount_container}>
                                                <Text style={{color: '#fff'}}>x{item.amount}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.delete} onPress={() => {this.deleteProduct(item.id)}}>
                                                <FontAwesome style={{marginHorizontal: 20}} name="trash" size={28} color="#666" />
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
                
                {/* total cost and pay button */}
                <View style={styles.paymentContainer}>
                    <TouchableOpacity style={[styles.paymentButton, {backgroundColor: "#ed5829"}]}
                      onPress={
                        () => {
                            const uploadedGroupCart = this.state.updateGroupCarter()
                            this.setState({data: uploadedGroupCart})
                        }
                      }
                    >
                        <Text style = {{color:"#fff",fontSize:17}}>
                            <FontAwesome name="refresh" size={24} color="white" />
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.totalValue}>Total: $ {total}</Text>
                    <TouchableOpacity style={styles.paymentButton}
                      onPress={
                        () => {
                            this.props.navigation.navigate(
                                "GroupSummery",
                                {
                                    UserID: this.state.params.UserID, 
                                    data, 
                                    address, 
                                    total
                                }
                            )
                        }
                      }
                    >
                        <Text style = {{color:"#fff",fontSize:17}}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    styledContainer:{
        flex: 1,
        paddingHorizontal:25,
        backgroundColor: 'white',
    },
    addressContainer:{
        flex: 1, 
        borderColor: "#808080",
        borderWidth: 3,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    addressTop:{
      flex: 1,
      flexDirection: "row",
      marginVertical: 10,
    },
    addressTitle:{
      fontWeight: "bold",
      flex: 1,
      marginLeft: 20,
      marginTop: 2,
      fontSize: 16,
    },
    editButton:{
        flex: 0.3,
        marginTop: 7,
        marginRight: 30,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1EBC8D",
        borderRadius: 8,
    },
    postAddressContainer:{
      flex: 2,
      marginHorizontal: 15,
    },
    paymentContainer:{
      flex: 0.8,
      flexDirection: "row",
      borderColor: "#ddd",
      backgroundColor: 'white',
      marginTop: 15,
      borderTopWidth: 2,
    },
    paymentButton:{
      flex: 1,
      backgroundColor: "#1EBC8D",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 15,
      marginHorizontal: 10,
      borderRadius: 15
    },
    totalValue:{
      flex: 2,
      fontSize: 18,
      marginBottom: 18,
      marginTop: 22,
      marginLeft: 15,
      color: "#555"
    },
    products_list: {
        flexDirection: 'column',
    },
    checkbox: {
        flex: .5,
        marginHorizontal: 10,
    },
    img: {
        width: 70,
        height: 70,
    },
    product_container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#999'
    },
    info_container: {
        flex: 1.5,
        flexDirection: 'column',
        marginHorizontal: 15,
        marginTop: 15,
    },
    amount_container: {
        flex: .5,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ebc8d',
        borderRadius: 8,
    },
    delete: {
        flex: 1,
    },
})