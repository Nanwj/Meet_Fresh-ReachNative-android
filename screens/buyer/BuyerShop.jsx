import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';

import Carousel from '../../components/Carousel';
import ViewInList from './../../components/ViewInList';


export default class BuyerShop extends Component {

    render() {
        
        const { products, advertise, callBack } = this.props;

        return (
            <View>
                <Carousel data={advertise}/>

                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.total_container}>
                            {
                                products.map((item, i) => {
                                    return (
                                        <View style={styles.box}  key={i}>
                                            <TouchableOpacity onPress={() => {
                                                this.props.navigation.navigate(
                                                    'QuickDetail',
                                                    {item, callBack: callBack}
                                                )
                                            }}>
                                                <ViewInList info={item}/>
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
        marginBottom: 400,
        paddingBottom: 20,
        backgroundColor: "#fff",
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        backgroundColor: 'transparent',
    }
})