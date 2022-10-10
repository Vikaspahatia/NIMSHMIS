import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Linking, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const TodoScreen = ({navigation}, {props}) => {
  
  const [text,setText] =useState(''); //email
  const InputHandler = inputText => {
    setText(inputText);
  };
    useEffect(() => {
      getData();
    },[]);
    // click = async() => {
    //     console.log("click");
        storeData = async () => {
            try {
              await AsyncStorage.setItem('text', text);
            } catch (e){
              console.log(e)
            }
          }
 
      getData = async () => {
        try  {
            const value = await AsyncStorage.getItem('text')
            if(value !== null) {
              setText(value);
              console.log("T value = " + value);
            }
        } catch (e) {
          console.log(e)
        }
      }

    return (
        <View style={styles.container}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>
        
    <View style={{
        width: '100%',
        height: 80,
        backgroundColor: '#368cb3',
        paddingTop: 38,
        marginTop: -40,
        marginBottom: 22,
    }}>
    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
    <View style={{flexDirection: 'row', marginLeft: 12}}>
    <Ionicons name="reorder-three" size={35} color="white" 
      onPress={() => {navigation.toggleDrawer();}} />
    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Todo</Text>
    </View>
    <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
    <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
    <MaterialIcons name="home" size={24} color="white" 
    onPress={()=> navigation.navigate('EmployeeHome')}/>
    </View>
    </View>
    </View>
    <View sty={{alignSelf: 'center'}}></View>
    <TextInput  
    style={{
    backgroundColor: 'white', 
    fontSize: 19, 
    color: 'grey', marginTop: 200
    }} 
    onChangeText={val => setText(val)}
    value={text}
    placeholder="Enter Something to Remember!"/>



    <Text style={{fontSize: 14.5, color: 'grey', marginTop: 160}}>All data will be lost on uninstalling the App</Text>
    <TouchableOpacity style={styles.appButtonContainer}
    onPress = {()=> storeData()}>
        <Text style={styles.appButtonText}>Save</Text>
    </TouchableOpacity>


    </View>
    );
}
export default TodoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: 'white',
    },
    container1: {
        alignSelf: 'center',
        backgroundColor: '#f1f5f9',
        height: 130,
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e4e6e8',
        margin: 8,
        },
    boxText: {
        fontSize: 14,
        color: '#368cb3',
    },
    container4: {
      flex: 1,
      //margin: 5,
      //padding: 10
    },
    appButtonContainer: {
      marginTop: 10,
      backgroundColor: "#368cb3",
      borderRadius: 25,
      height: 45,
      width: "85%",
      paddingVertical: 10,
      paddingHorizontal: 1,
    },
    appButtonText: {
      marginTop: -2,
      //height: 16,
      fontSize: 18,
      color: "#fff",
      alignSelf: "center",
      textTransform: "uppercase",
      
    },
    title: {
        fontSize: 14,
        color: '#368cb3',
    },
});