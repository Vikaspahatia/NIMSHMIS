import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ActivityIndicator, KeyboardAvoidingView, Alert} from 'react-native';
import { connect, useDispatch } from "react-redux"
import * as user_Action from '../../../ServiceURL/actions/URL';

const DontHaveCRScreen = ({navigation}) => {

    const [enteredName,setenteredName] =useState('');
    const dispatch = useDispatch();
    const [enteredNumber,setenteredNumber] =useState('');


    const checkTextInput = async() => {
      console.log(enteredName)
      console.log(enteredNumber)
      if (!enteredName.trim()) {
        alert('Please enter Name');
        return;
      }
      if (!enteredNumber || enteredNumber.length < 10) {
        alert('Please enter Mobile Number');
        return;
      }
      else{
        navigation.navigate('DontHaveCRHome', {
          nameKey: enteredName,
          numberKey: enteredNumber,
        });

        dispatch(
          user_Action.patientDATA(
            enteredName, 
            enteredNumber,
          )
          )


      }
    };
 
  return (
    <View style={styles.container}>
    <StatusBar style="auto" backgroundColor= "#368cb3"  />


    {/* for progress icon */}
    {/* <View style={[styles.horizontal]}>
      <ActivityIndicator size="large" color="#368cb3" />
    </View> */}



      <Text style={{fontSize: 20, marginTop: 70 , color: '#427f95' }}>Nizam's Institute of Medical Sciences</Text>
      <Text style={{fontSize: 13, color: '#427f95'  }}>(A University Established Under State Act)</Text>
      <Text style={{fontSize: 17, color: '#427f95'  }}>Hyderbad 500082 Telangana, India</Text>
      <Image style={{height: 160, width: 140, margin: 20,}} source={require('../../../assets/nimslogo_liteblue.png')} />
             
      <Text style={{ fontSize: 20, color: "black", alignSelf: "center",}}>Enter Mobile No.</Text>
      
      <TextInput  
      style={{height: 36,
      backgroundColor: 'white', 
      fontSize: 20, width: '69%',
      borderRadius: 10,
      borderColor:'#368cb3',
      borderWidth: 2,
      paddingLeft: 10,
      margin: 15}} 
      onChangeText={inputText => setenteredName(inputText)}
      value={enteredName}
      placeholder="Name"/>

      <TextInput  
      style={{height: 36,
      backgroundColor: 'white', 
      fontSize: 20, width: '69%',
      borderRadius: 10,
      borderColor:'#368cb3',
      borderWidth: 2,
      paddingLeft: 10,
      margin: 3}} 
      //keyboardType='phone-pad'
      maxLength= {10}
      keyboardType= 'number-pad'
      onChangeText={inputText => setenteredNumber(inputText)}
      value={enteredNumber}
      placeholder="Mobile No"/>


      <TouchableOpacity style={styles.appButtonContainer}
      // onPress={() => { 
      //   navigation.navigate('DontHaveCRHome', {
      //     nameKey: selectedName,
      //     numberKey: selectedNumber,
      //   }); }} 
        onPress={() => {  checkTextInput() } }>
        <Text style={styles.appButtonText}>Sign Up</Text>
        </TouchableOpacity>
      
      <Image style={{height: 65, width: 170, bottom: -100}} source={require('../../../assets/toolbarlogo1.png')} />
      
    </View>
        )
    }

export default DontHaveCRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eef2f7',
    alignItems: 'center',
  },
  appButtonContainer: {
    marginTop: 15,
    backgroundColor: "#368cb3",
    borderRadius: 25,
    width: 140,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    },

});

