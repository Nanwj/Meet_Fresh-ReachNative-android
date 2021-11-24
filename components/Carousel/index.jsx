import React, { Component } from 'react'
import { Image, View} from 'react-native';

import Swiper from 'react-native-swiper/src'

export default class extends Component {
    render() {

        const {data} = this.props;

        return (
            <View style={{height: 200, borderBottomWidth: 8, borderBottomColor: '#fff'}}>
                <Swiper autoplay={true} loop={true} 
                  dot={<View style={{
                    backgroundColor: 'rgba(0,0,0,.2)',
                    width: 4,
                    height: 4,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: -10,
                    marginBottom: 3
                  }}></View>} 
                  activeDot={<View style={{
                    backgroundColor: '#fff',
                    width: 5,
                    height: 5,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: -10,
                    marginBottom: 3
                  }}></View>}
                >
                    {
                        data.map((item, i) => {
                            return (
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#bbb'
                                }} key={i}>
                                    <Image source={item} style={{width: 300, height: 200}} key={1} />
                                </View>
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }
}
