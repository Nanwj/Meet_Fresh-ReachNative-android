import React, { Component } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik';

// axios to send request to server
import axios from 'axios';
// Web IP
import { WebIP } from './../../../constants/Web'
// constants images
import { imagePaths } from './../../../assets/ImagePaths' 

// icons
import { Ionicons } from '@expo/vector-icons';


export default class QuickItemEdit extends Component {

    constructor(props) {
        super(props);
        const {name, price, amount, desc, requirePeople, time, productID} = this.props.route.params;
        this.state = {
            name: name,
            price: price,
            amount: amount,
            desc: desc,
            requirePeople: requirePeople,
            time: time.split(".")[0].split("T")[0],
            id: productID
        }
    }

    // update the item in group purchase
    updateGroupItem = async (values, id) => {
        // Update into user table
        await axios.post('http://' + WebIP + ':6667/updateGroupProduct/extra?GroupProdID='+id+'&GroupName='+ values.name+'&GroupPrice='+values.price+'&GroupQuantity="'+values.amount+'"&GroupDescription='+values.desc+'&NumOfPerson='+values.requirePeople+'&TimeLimit='+values.time)
        .catch(err => console.log("Error in update group product", err))
    }

    render() {

        const {name, price, amount, desc, requirePeople, time, id} = this.state

        return (

            <Formik
              initialValues={{ 
                  name: name, 
                  price: price, 
                  amount: amount, 
                  desc: desc, 
                  requirePeople: requirePeople, 
                  time: time 
                }}
              onSubmit={ async values => 
                {
                    await this.updateGroupItem(values, id)
                    this.props.navigation.pop()
                }
            }
            >
                {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
                    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
                        <View style={{flex: 1, backgroundColor:'white',}}>
                            {/* product image */}
                            <View style={styles.modeContainer}>
                                <Image style={styles.img} source={imagePaths[name][0]}/>
                                <TouchableOpacity style={styles.uploadImage}>
                                    <Ionicons name="cloud-upload-outline" size={24} color="white" />
                                    <Text style={{color: 'white', marginLeft: 8}}>Upload Image</Text>
                                </TouchableOpacity>
                            </View>

                            {/* form */}
                            <View style={styles.formContainer}>
                                <TextInput
                                style={styles.largeInput}
                                placeholder="Item Name"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                />

                                <View style={styles.inputContainer}>
                                    <TextInput
                                    style={styles.halfInput}
                                    placeholder="Price: $/kg or $/each"
                                    onChangeText={handleChange('price')}
                                    onBlur={handleBlur('price')}
                                    value={values.price.toString()}
                                    />
                                    
                                    <TextInput
                                    style={styles.halfInput}
                                    placeholder="Quantity: kg or number"
                                    onChangeText={handleChange('amount')}
                                    onBlur={handleBlur('amount')}
                                    value={values.amount.toString()}
                                />
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                    style={styles.halfInput}
                                    placeholder="Item Name"
                                    onChangeText={handleChange('requirePeople')}
                                    onBlur={handleBlur('requirePeople')}
                                    value={values.requirePeople.toString()}
                                    />
                                    
                                    <TextInput
                                    style={styles.halfInput}
                                    placeholder="Time Limit"
                                    onChangeText={handleChange('time')}
                                    onBlur={handleBlur('time')}
                                    value={values.time.toString()}
                                    />
                                </View>
                                
                                <TextInput
                                  style={styles.largeInput}
                                  placeholder="Item Description"
                                  onChangeText={handleChange('desc')}
                                  onBlur={handleBlur('desc')}
                                  value={values.desc.toString()}
                                />
                            </View>
                        
                            {/* back and submit button */}
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.backButton}
                                onPress={
                                    () => {
                                        this.props.navigation.pop()
                                    }
                                }
                                >
                                    <Text style={styles.backSubmitText}>Preview</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                                    <Text style={styles.backSubmitText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                
                )}
            </Formik>
            
            
        )
    }
}

const styles = StyleSheet.create({
    modeContainer: {
        flex: .5,
        marginHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F9ED'
    },
    img: {
        width: 130,
        height: 130,
    },
    uploadImage: {
        flexDirection: 'row',
        marginTop: 15,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#1EBC8D'
    },
    formContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        paddingHorizontal: 40,
    },
    largeInput: {
        flex: 1,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: '#808080',
        borderRadius: 5
    },
    halfInput: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15,
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: '#808080',
        borderRadius: 5
    },
    dropdown: {
        flex: 1,
        padding: 10,
        borderColor: '#808080',
        borderWidth: 2,
        borderRadius: 10
    },
    dropdownText: {
        fontSize: 16
    },
    dropdownList: {
        width: 150,
        fontSize: 16,
    },
    buttonContainer:{
        flex: .2,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingVertical: 5,
        borderColor:"#ddd",
        borderTopWidth:2,
    },
    submitButton:{
        paddingHorizontal: 25,
        paddingVertical: 8,
        backgroundColor:"#1EBC8D",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:20,
        marginVertical:5,
        borderRadius:8
    },
    backButton: {
        paddingHorizontal: 25,
        paddingVertical: 8,
        backgroundColor:"#ed5829",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:5,
        borderRadius:8
    },
    backSubmitText: {
        color: "#fff",
        fontSize: 17
    }
})