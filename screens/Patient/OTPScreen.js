import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { connect, useDispatch } from "react-redux"
import * as user_Action from '../../ServiceURL/actions/URL';

const OTPScreen = props => {
 
  const patientdetails = props.navigation.getParam('patientdetailsKey');
  const mobileNumber = props.navigation.getParam('enteredValueKey');
  const valid = props.navigation.getParam('validKey');
  const patientName = props.navigation.getParam('patientNameKey');
  const crno = props.navigation.getParam('crnoKey');
  const OTP = props.navigation.getParam('otpKey');
  console.log(OTP,'otpSCREEN');
  // const [name, setname] = useState('');
  // setname(patientdetails.patName)
  console.log(patientName,'  NAME')
  //console.log(patientdetails)
  const dispatch = useDispatch();


  //link for otp
  // const URL = https://nimsts.edu.in/HISServices/service/login/otp?hCode=33101&mobileNo=7988185383
  // useEffect(() => {
  //   (async () => {
  //   content = await fetch(URL)
  //   jsonDATA = await content.json()
  //   setOtpn(jsonDATA.OTP)
  //   setpatientName(jsonDATA.patientdetails[0].patName)
  //   setcrno(jsonDATA.patientdetails[0].crno)
  //   setmobileNo(jsonDATA.patientdetails[0].mobileNo)
  //   setpatientHasWallet(jsonDATA.patientdetails[0].patientHasWallet)
  //   setLoading(false);
  //   }
  //   )();
  // }, []);

  //last for digits of the mobileNumber
  var lastFourDigits = mobileNumber.substring(6);

  const [enteredValue,setenteredValue] =useState('');





  
  //counter try
  // const [count, setCount] = useState(3)

  // useEffect(() => {
  //   let interval = setInterVal(() => {
  //      setCount(prev => {
  //         if(prev === 1) clearInterval(interval)
  //         return prev - 1
  //      })
  //   })
  //   // interval cleanup on component unmount
  //   return () => clearInterval(interval)
  // }, []);










  // const confirmInputHandler = () => 
  // {
  //   const choosenNumber = enteredValue;
  //   setselectedOTP(choosenNumber);
  //       setenteredValue('');
  // };


  //OTP Check
  const otpAuth = () => {
    if(enteredValue != OTP) {
     alert("Wrong OTP, please try again.");  
    } else {
      dispatch(
        user_Action.PatDetailsDATA(
          patientdetails, 
        )
        )
      if(valid==1) {
        {props.navigation.navigate('Home', {
          patKey: patientName,
          crnoKey: crno
          })}

          dispatch(
            user_Action.CRpatientDATA(
              patientName, 
              crno,
              mobileNumber
            )
            )
      } 
      else {
         {props.navigation.navigate('MultipleUser', {
          patientdetailsKey: patientdetails,
          mobileNumberKey: mobileNumber
          })}
      }
      //navigation.navigate('MultipleUser');
    }
  }
   
  
      return (
        <View style={styles.container}>
        <StatusBar style="auto" backgroundColor= "#368cb3"  />
        <Text style={{fontSize: 20, marginTop: 70 , color: '#427f95' }}>Nizam's Institute of Medical Sciences</Text>
        <Text style={{fontSize: 13, color: '#427f95'  }}>(A University Established Under State Act)</Text>
        <Text style={{fontSize: 17, color: '#427f95'  }}>Hyderbad 500082 Telangana, India</Text>
        <Image style={{height: 160, width: 140, margin: 20, marginBottom: 30}} source={require('../../assets/nimslogo_liteblue.png')} />
             

        

      <Text style={{ fontSize: 15, color: "#427f95", paddingLeft: 15,}}>Please enter the 6-digit One-Time Password(OTP) received on the registered mobile number ending with XXXXXX{lastFourDigits}</Text>
      
      <TextInput  
      style={{height: 40,
      fontSize: 20, 
      width: 260,
      borderColor:'#368cb3',
      borderBottomWidth: 2,
      paddingLeft: 7,
      margin: 15}}
      maxLength= {6}
      keyboardType= 'number-pad'
      onChangeText={inputText => setenteredValue(inputText)}
      value={enteredValue}
      placeholder="Enter OTP"/>


      <TouchableOpacity style={styles.appButtonContainer}
      onPress={() => { otpAuth(); }}>
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>
      
      <Image style={{height: 65, width: 170, bottom: -120}} source={require('../../assets/toolbarlogo1.png')} />
      
    </View>
        )
   }
  

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: '#eef2f7',
    alignItems: 'center',
  },
  appButtonContainer: {
    marginTop: 5,
    backgroundColor: "#368cb3",
    borderRadius: 25,
    width: 180,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  
});

