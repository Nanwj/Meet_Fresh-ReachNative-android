import React, { Component, Fragment } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik';

import axios from 'axios';

import { WebIP } from './../../../constants/Web'

// icons
import { Ionicons } from '@expo/vector-icons';


// release a new item in quick purchase
// return true represent release successfully
const releaseNewQuickItem = (values) => {
    // console.log(values);
    return values.name !== '' ? true : false
}

export default class QuickItem extends Component {

    constructor(props) {
        super(props);
        const { UserID, farmName } = this.props
        this.state = {
            name: '',
            price: '',
            amount: '',
            desc: '',
            UserID: UserID,
            farmName: farmName
        }
    }

    // update the item in quick purchase
    insertQuickProduct = async (values, UserID, farmName) => {
        // Update into user table
        await axios.post('http://' + WebIP + ':6667/insertQuickProduct/extra?QuickProviderID='+UserID+'&QuickName='+ values.name+'&QuickPrice='+values.price+'&QuickQuantity="'+values.amount+'"&QuickDescription='+values.desc)
        .catch(err => console.log("Error in update quick product", err))
    }

    render() {

        const { UserID, farmName } = this.state

        return (

            <Formik
              initialValues={{ name: '', price: '', amount: '', desc: '' }}
              onSubmit={ async values => {
                await this.insertQuickProduct(values, UserID, farmName)
                this.props.navigation.pop()
              }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
                        <View style={{flex: 1, backgroundColor:'white',}}>
                            {/* product image */}
                            <View style={styles.modeContainer}>
                                <Image style={styles.img} source={require('./../../../assets/images/list-corn.jpg')}/>
                                <TouchableOpacity style={styles.uploadImage}>
                                    <Ionicons name="cloud-upload-outline" size={24} color="white" />
                                    <Text style={{color: 'white', marginLeft: 8}}>Upload Image</Text>
                                </TouchableOpacity>
                            </View>

                            {/* form */}
                            <View style={styles.formContainer}>
                                <TextInput
                                  style={styles.input}
                                  placeholder="Item Name"
                                  onChangeText={handleChange('name')}
                                  onBlur={handleBlur('name')}
                                  value={values.name}
                                />
                                
                                <TextInput
                                  style={styles.input}
                                  placeholder="Price: $/kg or $/each"
                                  onChangeText={handleChange('price')}
                                  onBlur={handleBlur('price')}
                                  value={values.price.toString()}
                                />
                                
                                <TextInput
                                  style={styles.input}
                                  placeholder="Quantity: kg or number"
                                  onChangeText={handleChange('amount')}
                                  onBlur={handleBlur('amount')}
                                  value={values.amount.toString()}
                                />
                                
                                <TextInput
                                  style={styles.input}
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
    input: {
        flex: 1,
        width: 200,
        paddingLeft: 10,
        marginVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        borderWidth: 2,
        borderColor: '#808080',
        borderRadius: 5
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