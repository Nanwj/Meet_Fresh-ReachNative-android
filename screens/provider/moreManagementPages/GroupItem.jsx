import React, { Component, Fragment } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik';

// axios to send request to server
import axios from 'axios';
// web IP
import { WebIP } from './../../../constants/Web'

// icons
import { Ionicons } from '@expo/vector-icons';


export default class QuickItemEdit extends Component {

    constructor(props) {
        super(props);
        const { UserID, farmName } = this.props
        this.state = {
            name: '',
            price: '',
            amount: '',
            desc: '',
            requirePeople: '',
            time: '',
            UserID: UserID,
            farmName: farmName
        }
    }

    // update the item in quick purchase
    insertGroupProduct = async (values, UserID, farmName) => {
        // Update into user table
        await axios.post('http://' + WebIP + ':6667/insertGroupProduct/extra?GroupProviderID='+UserID+'&GroupName='+ values.name+'&GroupPrice='+values.price+'&GroupQuantity='+values.amount+'&GroupDescription='+values.desc+'&FarmName='+farmName+'&NumOfPerson='+values.requirePeople+'&TimeLimit='+values.time)
        .catch(err => console.log("Error in update quick product", err))
    }

    render() {

        const { UserID, farmName } = this.state

        return (

            <Formik
              initialValues={{ 
                  name: '', 
                  price: '', 
                  amount: '', 
                  desc: '', 
                  requirePeople: '', 
                  time: ''
                }}
              onSubmit={ async values => {
                await this.insertGroupProduct(values, UserID, farmName)
                this.props.navigation.pop()
              }}
            >
                {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
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
                                style={styles.largeInput}
                                placeholder="Item Name"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                />

                                <View style={styles.inputContainer}>
                                    <TextInput
                                    style={styles.halfInput}
                                    placeholder="Price"
                                    onChangeText={handleChange('price')}
                                    onBlur={handleBlur('price')}
                                    value={values.price.toString()}
                                    />
                                    
                                    <TextInput
                                    style={styles.halfInput}
                                    placeholder="Quantity"
                                    onChangeText={handleChange('amount')}
                                    onBlur={handleBlur('amount')}
                                    value={values.amount.toString()}
                                />
                                </View>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                    style={styles.halfInput}
                                    placeholder="Num Of People"
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
                                    
                                    {/* <ModalDropdown 
                                      style={styles.dropdown}
                                      textStyle={styles.dropdownText}
                                      dropdownStyle={styles.dropdownList}
                                      defaultValue='10:00'
                                      options={[
                                          '10:00', 
                                          '12:00', 
                                          '14:00', 
                                          '16:00', 
                                          '17:00', 
                                          '18:00', 
                                          '19:00', 
                                      ]}
                                      onSelect={(idx, value) => setFieldValue('time', value)}
                                      value='10:00'
                                    /> */}
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