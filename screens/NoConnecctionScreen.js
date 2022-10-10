import React from 'react';
import {View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NoConnectionScreen = props =>{
    return(
        <View style={{flex: 1}}>
            <MaterialIcons style={{alignSelf: 'center', marginTop: '60%'}} name="wifi-off" size={60} color="#222831" />
            <Text style={{alignSelf: 'center', marginTop: '7%', fontSize: 20, color: '#903749'}}>No Internet Connection</Text>
            <Text style={{alignSelf: 'center', marginTop: '7%', fontSize: 15, color:'#162447'}}>Please check your connection and try again.</Text>
        </View>
    )
};


export default NoConnectionScreen;