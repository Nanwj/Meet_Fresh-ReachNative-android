import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

// icons
import { Ionicons } from '@expo/vector-icons';

export default class ShippingAddress extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingHorizontal: 40}}>
                {/* upload image */}
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                        <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>Change user image</Text>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', padding: 6, borderRadius: 10, backgroundColor: '#1EBC8D'}}>
                            <Ionicons name="cloud-upload-outline" size={24} color="white" />
                            <Text style={{marginLeft: 15, color: 'white'}}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={{width: 80, height: 80, marginLeft: 20, marginVertical: 10, borderRadius: 40}} source={require('./../../../assets/images/male.jpg')}/>
                </View>

                {/* change password */}
                <View style={{flex: 1}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>Change password</Text>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', padding: 10, borderRadius: 10, backgroundColor: '#1EBC8D'}}>
                        <Text style={{marginLeft: 15, color: 'white'}}>Press to send password reset email</Text>
                    </TouchableOpacity>
                </View>

                {/* edit address */}
                <View style={{flex: 4}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>Change address</Text>
                    
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressTitle}>Default Address</Text>
                        <View style={styles.addressCard}>
                            <Text style={styles.addressText}>xxxxx xxxxxx xxxx</Text>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.addressContainer}>
                        <Text style={styles.addressTitle}>Address 1</Text>
                        <View style={styles.addressCard}>
                            <Text style={styles.addressText}>xxxxx xxxxxx xxxx</Text>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.addressContainer}>
                        <Text style={styles.addressTitle}>Address 2</Text>
                        <View style={styles.addressCard}>
                            <Text style={styles.addressText}>xxxxx xxxxxx xxxx</Text>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addressContainer: {
        flex: 1, 
        alignItems: 'center',
        marginVertical: 10,
        paddingBottom: 3,
        borderRadius: 10, 
        backgroundColor: '#1EBC8D'
    },
    addressTitle: {
        fontSize: 14,
        color: 'white',
        marginVertical: 5
    },
    addressCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 325,
        backgroundColor: 'white',
        borderRadius: 10
    },
    addressText: {
        fontSize: 18,
        marginBottom: 8,
    },
    editButton: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginLeft: 200,
        borderRadius: 8,
        backgroundColor: '#1EBC8D'
    },
    editText: {
        color: 'white'
    }
})