import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert} from 'react-native';

const HaveCRScreen = props => {

  const [enteredValue,setenteredValue] =useState();
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {

  }, []);

  let Number;


var otpn;
var valid;
var patientName;
var crno;
var patientMobileNo;
var patientdetails;

  const checkTextInput = async() => {
    if (!enteredValue || enteredValue.length < 10) {
      alert('Please enter Mobile Number');
      return;
    } else{
      userAuth();
    }
  };

  const userAuth = async() =>  {
    const URL = "https://nimsts.edu.in/HISServices/service/login/otp?hCode=33101&mobileNo="+enteredValue+"";
    try {
      const content = await fetch(URL)
      const jsonDATA = await content.json()
      //console.log(jsonDATA);
      //setotpn(jsonDATA.OTP);
      otpn = jsonDATA.OTP;
      valid = jsonDATA.patientdetails.length;
      patientdetails = jsonDATA;
      patientName=jsonDATA.patientdetails[0].patName
      crno=jsonDATA.patientdetails[0].crno
      patientMobileNo=jsonDATA.patientdetails[0].mobileNo
      console.log(otpn,'otp');
      setLoading(false);
    }  catch (e){
      console.log(e)
    }    
    change(valid);
   }

  function change(valid) {
    if(valid >= 1) {
      {props.navigation.navigate('OTP', {
        otpKey: otpn,
        enteredValueKey: enteredValue,
        validKey: valid,
        patientNameKey: patientName,
        crnoKey: crno,
        patientdetailsKey: patientdetails,
      })}
    } else {
      Alert.alert("Not a user!")
    }
  }

    return (
      <View style={styles.container}>
      <StatusBar style="auto" backgroundColor= "#368cb3"  />

      <Text style={{fontSize: 20, marginTop: 70, color: '#427f95' }}>Nizam's Institute of Medical Sciences</Text>
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
      margin: 20,}} 
      keyboardType='number-pad'
      maxLength= {10}
      onChangeText={inputText => setenteredValue(inputText)}
      value={enteredValue}
      //onSubmitEditing = {()=> confirmInputHandler()}
      placeholder="Mobile No"/>

      <TouchableOpacity style={styles.appButtonContainer} 
      onPress={() => {  checkTextInput();  }}
      >
      <Text style={styles.appButtonText}>Get OTP</Text>
      </TouchableOpacity>
      <Image style={{height: 65, width: 170, bottom: -120}} source={require('../../../assets/toolbarlogo1.png')} />
    
    </View>
        )
    } 
export default HaveCRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eef2f7',
    alignItems: 'center',
  },
  appButtonContainer: {
    marginTop: 8,
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
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});

