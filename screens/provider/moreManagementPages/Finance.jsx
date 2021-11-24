import React, { Component } from 'react'
import {View, Text, Image} from 'react-native'


// icons
import { Feather } from '@expo/vector-icons';

export default class Finance extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                    marginHorizontal: 30,
                    borderRadius: 20,
                    paddingHorizontal: 30,
                    backgroundColor: '#1EBC8D'
                }}>
                    <Text style={{fontSize: 20, color: 'white'}}>Total income today</Text>
                    <View style={{flexDirection: 'row', marginLeft: 90}}>
                        <Feather style={{marginTop: 5}} name="arrow-up" size={35} color="#F24726" />
                        <Feather style={{marginTop: 5}} name="dollar-sign" size={35} color="white" />
                        <Text style={{fontSize: 30, color: 'white'}}>1226.45</Text>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20}}>
                    <Text style={{flex: 4, marginTop: 10, fontSize: 15}}>Number of Income order</Text>
                    <Text style={{flex: 1, marginTop: 20, fontSize: 40}}>13</Text>
                    <Text style={{flex: 1.2, marginTop: 40, fontSize: 25}}>orders</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20}}>
                    <Text style={{flex: 4, marginTop: 10, fontSize: 15}}>Current released item(include Group purchase)</Text>
                    <Text style={{flex: 1, marginTop: 20, fontSize: 40}}>69</Text>
                    <Text style={{flex: 1.2, marginTop: 40, fontSize: 25}}>items</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20}}>
                    <Text style={{flex: 4, marginTop: 10, fontSize: 15}}>Number of returning items</Text>
                    <Text style={{flex: 1, marginTop: 20, fontSize: 40}}>4</Text>
                    <Text style={{flex: 1.2, marginTop: 40, fontSize: 25}}>items</Text>
                </View>


                <View style={{flex: 1.5, justifyContent: 'space-evenly', alignItems: 'center', marginHorizontal: 30, backgroundColor: '#1EBC8D', borderRadius: 30}}>
                    <Text style={{fontSize: 20, color: 'white'}}>Total Income</Text>
                    <Image style={{width: 200, height: 100}} source={require('./../../../assets/images/graph.png')} />
                </View>
            </View>
        )
    }
}