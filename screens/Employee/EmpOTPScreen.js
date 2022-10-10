import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect ,useCallback} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { connect, useDispatch } from "react-redux"
import * as user_Action from '../../ServiceURL/actions/URL';
import urlReducer from '../../ServiceURL/reducers/URL';


const EmpOTPScreen = props => {

//   const mobileNumber = navigation.getParam('paramKey');
//   const patientName = navigation.getParam('patientKey');
//   const crno = navigation.getParam('crKey'); 
//   const systemMobileNumber = navigation.getParam('mobileKey');
//   const patientHasWallet = navigation.getParam('walletKey');
  const empid = props.navigation.getParam('empid');
  const userdisplayname = props.navigation.getParam('userdisplayname');
  const OTP = props.navigation.getParam('OTPKey');
  console.log(OTP,'optscreen')
  const crno = props.navigation.getParam('crno');
  const epfflag = props.navigation.getParam('epfflagKey');
  const dispatch = useDispatch();
  const [enteredOTP,setEnteredOTP] =useState();

  //const [OTP, setOTP] = useState();
  //var OTP;
  const otpInputHandler = inputText => {
    setEnteredOTP(inputText);
  };

  //331010008122
  
  // if(empid.length==4) {
  //   empid='33101000'+empid;
  // } else if(empid.length==5) {
  //   empid='3310100'+empid;
  // }

  //console.log(empid,'id')
  // const URL="https://nimsts.edu.in/NIMSNC_MobileServices/service/login/generateotp?user="+empid+"&hcode=33101"; 

  // useEffect(() => {
  //   async () => {
  //     console.log(URL)
  //     try {
  //       const content = await fetch(URL);
  //       const jsonDATA = await content.json()
  //       //console.log("hi")
  //       console.log(jsonDATA, 'json');
  //       //setOTP(jsonDATA);
  //       OTP=jsonDATA;
  //       //console.log(OTP, 'otp');
  //     }  catch (e){
  //       console.log(e)
  //     }
  //   };
  // }, []);
  console.log(empid)
  //console.log(enteredOTP);

  // useEffect(()=>{
  //   userAuth();
  // },[userAuth])



//   const userAuth =useCallback(async() =>  {
//     if(empid.length==4) {
//       empid='33101000'+empid;
//     } else if(empid.length==5) {
//       empid='3310100'+empid;
//     }
//     const URL="https://nimsts.edu.in/NIMSNC_MobileServices/service/login/generateotp?user="+empid+"&hcode=33101"; 
//     try {
//       const content = await fetch(URL)
//       const jsonDATA = await content.json()
//       OTP = jsonDATA.OTP;
//       console.log(OTP,'otp');
//       console.log(2)
//     }  catch (e){
//       console.log(e)
//     }  
//     // otpAuth();
//    },[OTP]);
 
const otpAuth = () => {
  console.log(3)
  if(enteredOTP !== OTP) {
   alert("Wrong OTP, please try again.");  
  } else {
      {props.navigation.navigate('EmployeeHome', 
      {
        empid: empid,
        userdisplayname: userdisplayname,
        crno: crno,
        epfflagKey: epfflag,
      }
      )
      }}
      dispatch(
        user_Action.userDATA(
          crno, 
          userdisplayname,
          empid,
        )
        )
  }
  
   
      return (
        <View style={styles.container}>
        <StatusBar style="auto" backgroundColor= "#368cb3"/>
        <Text style={{fontSize: 20, marginTop: 80 , color: '#427f95' }}>Nizam's Institute of Medical Sciences</Text>
        <Text style={{fontSize: 13, color: '#427f95'  }}>(A University Established Under State Act)</Text>
        <Text style={{fontSize: 17, color: '#427f95'  }}>Hyderbad 500082 Telangana, India</Text>
        <Image style={{height: 160, width: 140, margin: 20, marginBottom: 20}} source={require('../../assets/nimslogo_liteblue.png')} />
             
      <Text style={{ fontSize: 15, color: "black", paddingLeft: 15,}}>Please enter the OTP</Text>
      
      <TextInput  
      style={{height: 40,
      fontSize: 20, 
      width: 260,
      borderColor:'#368cb3',
      borderBottomWidth: 2,
      paddingLeft: 7,
      margin: 20}}
      maxLength= {6}
      keyboardType= 'number-pad'
      onChangeText={otpInputHandler}
      value={enteredOTP}
      placeholder="Enter OTP"/>

      <TouchableOpacity style={styles.appButtonContainer}
        onPress={() =>  { otpAuth() }  } >
        <Text style={styles.appButtonText}>Submit</Text>
      </TouchableOpacity>
      
      <Image style={{height: 65, width: 170, bottom: -50}} source={require('../../assets/toolbarlogo1.png')} />
      
    </View>
        )
   }
  

export default EmpOTPScreen;

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    flexDirection: 'column',
    backgroundColor: '#eef2f7',
    alignItems: 'center',
  },
  appButtonContainer: {
    marginTop: 8,
    backgroundColor: "#368cb3",
    borderRadius: 25,
    width: 180,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  
});

