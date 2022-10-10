import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const DATScreen = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35}}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
        </View>  
    <View style={styles.contain}>

    <WebView source={{ uri: 'https://nims.edu.in/appointment' }} />

    </View>
    </View>
  );
}

export default DATScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#ebebeb',
    //alignItems: 'center',
    //
  }
});

