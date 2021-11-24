import React, { Component } from 'react'
import { Image, View, Text } from 'react-native';

import Swiper from 'react-native-swiper/src'
import { color } from 'react-native-reanimated';

// icon
import { Ionicons } from '@expo/vector-icons';

export default class extends Component {
    render() {

        const {data} = this.props;

        return (
            <View style={{height: 200}}>
                <Swiper autoplay={true} loop={true} 
                  dot={<View style={{
                    width: 0,
                    height: 0,
                  }}></View>} 
                  activeDot={<View style={{
                    width: 0,
                    height: 0,
                  }}
                  ></View>}>
                    {
                        data.map((item, i) => {
                            return (
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#ddd',
                                }} key={i}>
                                    <Image source={item} style={{width: 200, height: 120}} key={1} />
                                    <View style={{flexDirection: 'row', width: 200, height: 50, backgroundColor: '#fff', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                        <View style={{alignItems: 'center'}}>
                                            <Text>Broccoli</Text>
                                            <Text style={{fontSize: 10, color: '#666'}}>$22/5kg</Text>
                                        </View>
                                        <View style={{alignItems: 'center'}}>
                                            <Text>Green Farm</Text>
                                            <View style={{flexDirection: 'row'}}>
                                                <Ionicons name="location" size={14} color="#666" />
                                                <Text style={{fontSize: 10, color: '#666'}}>Gabba</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }
}
