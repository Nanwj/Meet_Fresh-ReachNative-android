import React, { Component } from 'react'
import { 
    StyleSheet, 
    ScrollView, 
    Text, 
    View, 
    TouchableOpacity,
    Image} from 'react-native';

// icons
import { FontAwesome } from '@expo/vector-icons';

export default class BuyerGroupPayPage1 extends Component {

    constructor(props) {
        super(props);
        const {data, ads, address, UserID} = this.props.route.params;
        this.state = {
            UserID: UserID,
            data: data,
            ads: ads,
            address: address,
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
    }

    render() {

        const {data, total, ads, address, UserID} = this.state;

        return (
            <View style={styles.styledContainer}>

                {/* address blcok */}
                <View style={styles.addressContainer}>
                    <View style = {styles.addressTop}>
                        <Text style = {styles.addressTitle}>ADDRESS</Text>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style = {{color:"#fff"}}>Edit</Text>
                        </TouchableOpacity>
                    </View>
        
                    <Text 
                      style = {styles.postAddressContainer}
                    >
                        {address}
                    </Text>
                </View>

                {/* list of products in carter */}
                <View style={{ flex: 3.5, backgroundColor:'white'}}>
                    <ScrollView> 
                        <View style={styles.products_list}>
                            {
                                data.map((item, i) => {
                                    if (item.checked) return (
                                        <View style={styles.product_container} key={i}>
                                            <Image style={styles.img} source={item.urls} />
                                            <View style={styles.info_container}>
                                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.text}</Text>
                                                <Text style={{marginTop: 5, fontSize: 15, fontWeight: '700'}}>$ {item.money}</Text>
                                            </View>
                                            <View style={styles.amount_container}>
                                                <Text style={{color: '#fff'}}>x{item.amount}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.delete} onPress={() => {this.deleteProduct(item.id)}}>
                                                <FontAwesome style={{marginHorizontal: 20}} name="trash" size={28} color="#666" />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
        
                {/* total cost and pay button */}
                <View style={styles.paymentContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={
                        () => {
                            this.props.navigation.pop()
                        }
                    }>
                        <Text style = {{color:"#fff",fontSize:17}}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.totalValue}>Total: $ {total}</Text>
                    <TouchableOpacity style={styles.paymentButton} onPress={
                        () => {
                            this.props.navigation.navigate(
                                'DeliveryMode',
                                {
                                    address, data, UserID, Type: 'Group'
                                }
                            )
                        }
                    }>
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
      marginVertical: 15,
    },
    addressTitle:{
      fontWeight: "bold",
      flex: 1,
      marginLeft: 20,
      marginTop: 10,
      fontSize: 16,
    },
    editButton:{
        flex: 0.5,
        marginTop: 7,
        marginHorizontal: 10,
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
      flex: 0.6,
      alignItems: 'center',
      flexDirection: "row",
      borderColor: "#ddd",
      backgroundColor: 'white',
      borderTopWidth: 2,
    },
    paymentButton:{
      flex:1,
      paddingVertical: 8,
      backgroundColor: "#1EBC8D",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 20,
      marginVertical: 8,
      borderRadius: 15
    },
    backButton: {
      flex: 1,
      paddingVertical: 8,
      backgroundColor: "#ed5829",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 8,
      borderRadius: 15
    },
    totalValue:{
      flex: 2,
      fontSize: 20,
      marginVertical: 18,
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