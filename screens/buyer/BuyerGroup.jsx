import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import CarouselInGroup from '../../components/CarouselInGroup';
import ComplexView from './../../components/ComplexView';

// icon
import { Ionicons } from '@expo/vector-icons';



export default class BuyerGroup extends Component {

    render() {

        const {products, advertise, callBack} = this.props;

        return (
            <View>
                <View style={{width: '100%', height: 25, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#d9f6bc'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 6}}>
                        <Ionicons name="ios-alarm-outline" size={20} color="#666" />
                        <Text style={{marginLeft: 5, color: "#666"}}>4:05:21</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 6}}>
                        <Ionicons name="people-sharp" size={20} color="#666" />   
                        <Text style={{marginLeft: 5, color: "#666"}}>88/100</Text>
                    </View>
                </View>
                
                <CarouselInGroup data={advertise}/>

                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.total_container}>
                            {
                                products.map((item, i) => {
                                    return (
                                        <View style={styles.box} key={i}>
                                            <TouchableOpacity onPress={() => {
                                                this.props.navigation.navigate(
                                                    'GroupDetail',
                                                    {item, callBack: callBack}
                                                )
                                            }}>
                                                <ComplexView  info={item}/>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    total_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 450,
        paddingBottom: 20,
        backgroundColor: "#fff",
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        backgroundColor: 'transparent',
    },
})