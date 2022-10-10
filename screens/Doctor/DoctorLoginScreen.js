import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert} from 'react-native';
import * as Crypto from 'expo-crypto';
import AsyncStorage from '@react-native-community/async-storage';
import { connect, useDispatch } from "react-redux"
import * as user_Action from '../../ServiceURL/actions/URL';
import urlReducer from '../../ServiceURL/reducers/URL';

const DoctorLoginScreen = ({navigation}) => {
  
  const [email,setEmail] = useState(''); //email
  const [password,setPassword] = useState(''); //password
  var OTP;
  const dispatch = useDispatch();
  // const [username, setusername] = useState();
  // const [userdisplayname, setuserdisplayname] = useState();
  // const [empid, setempid] = useState();
  // const [mobileno, setmobileno] = useState();
  // const [crno, setcrno] = useState();
  // const [valid, setvalid] = useState();
  // const [epfflag, setepfflag] = useState();
  // const [gpfflag, setgpfflag] = useState();

  var username;
  var userdisplayname;
  var empid;
  var mobileno;
  var crno;
  var valid;
  var epfflag;
  var gpfflag;



  // const emailInputHandler = inputText => {
  //   setEmail(inputText);
  // };

  // const passwordInputHandler = inputText => {
  //   setPassword(inputText);
  // };

  const [pass, setPass] = useState();
  const [pass1, setPass1] = useState();

  useEffect(() => {
    //getData();
    (async () => {
      const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA1,
        password+email
      );
      setPass(digest);
      const digest1 = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA1,
        pass+"[B@1ef774d"
      );
      setPass1(digest1);
    })();
  }, [password, email, pass]);

  
  const checkTextInput = async() => {
    if (!email) {
      alert('Please enter Employee id.');
      return;
    }
    if (!password) {
      alert('Please enter password.');
      return;
    }
    else{
      userAuth();
    }
  };
  
  const userAuth = async() =>  {
    //const URL="https://nimsts.edu.in/HISServices/service/login/salt?user="+email+"&pass="+pass1+"&salt=&hcode=33101"
    const URL="https://nimsts.edu.in/NIMSNC_MobileServices/service/login/check?user="+email+"&pass="+pass1+"&salt=[B@1ef774d&hcode=33101"; 
    console.log(URL);
    try {
      const content = await fetch(URL);
      const jsonDATA = await content.json()

      //console.log(jsonDATA)
      // setDATA(jsonDATA);
      // setusername(jsonDATA.username);
      // setuserdisplayname(jsonDATA.userdisplayname);
      // setempid(jsonDATA.empid);
      // setmobileno(jsonDATA.mobileno);
      // setcrno(jsonDATA.crno);
      // setvalid(jsonDATA.valid);
      // setepfflag(jsonDATA.epfflag);
      // setgpfflag(jsonDATA.gpfflag);


       //dharm_cl
      username=jsonDATA.username;
      userdisplayname=jsonDATA.userdisplayname;
      empid=jsonDATA.empid;
      mobileno=jsonDATA.mobileno;
      crno=jsonDATA.crno;
      valid=jsonDATA.valid;
      console.log(valid,'valid')
      epfflag=jsonDATA.epfflag;
      gpfflag=jsonDATA.gpfflag;

    }  catch (e){
      console.log(e)
    }
    //otpPASS();
    change(valid);

    //storeData();
    // dispatch(
    //   user_Action.userDATA(
    //     crno, 
    //     userdisplayname,
    //     empid,
    //     username,
    //     mobileno,
    //     valid,
    //     epfflag,
    //     gpfflag,
    //   )
    //   )
   }  



   function change(valid) {
    if(valid == 1) {
      navigation.navigate('AfterLogin', {
        empid: empid,
        userdisplayname: userdisplayname,
        crno: crno,
        epfflagKey: epfflag,
        OTPKey: OTP,
      })
    } else {
      Alert.alert("Invalid Username or Password")
    }
  }
 

  // console.log(username)
  // console.log(userdisplayname)
  // console.log(empid)
  // console.log(mobileno)
  // console.log(crno)
  // console.log(valid)
  // console.log(epfflag)
  // console.log(gpfflag)

  // console.log("email", email);
  // console.log("password", password);

  // storeData = async () => {
  //   try {
  //     await AsyncStorage.multiSet([
  //       ['username', username], 
  //       ['userdisplayname', userdisplayname],
  //       ['empid', empid],
  //       ['mobileno', mobileno],
  //       ['crno', crno],
  //       ['valid', valid],
  //       ['epfflag', epfflag],
  //       ['gpfflag', gpfflag]])
  //   } catch (e){
  //     console.log(e)
  //   }
  // }
  // getData = async () => {
  //   try  {
  //     const username = await AsyncStorage.getItem('username')
  //     const password = await AsyncStorage.getItem('password')
  //     if(username !== null) {
  //       //console.log("username = "+username)
  //     }
  //     if(password !== null) {
  //       //console.log("password = "+password)
  //     }
      
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  
  return (
    <View style={styles.container}>
    <StatusBar style="auto" backgroundColor= "#368cb3"  />
    <Text style={{fontSize: 20, color: '#427f95', marginTop: 60  }}>Nizam's Institute of Medical Sciences</Text>
    <Text style={{fontSize: 13, color: '#427f95'  }}>(A University Established Under State Act)</Text>
    <Text style={{fontSize: 17, color: '#427f95'  }}>Hyderbad 500082 Telangana, India</Text>
    <Image style={{height: 160, width: 140, margin: 30, marginBottom: 30}} source={require('../../assets/nimslogo_liteblue.png')} />
            
   
    <TextInput  
    style={{height: 36,
    backgroundColor: 'white', 
    fontSize: 20, width: '69%', 
    borderRadius: 10,
    borderColor:'#368cb3',
    paddingLeft: 10,
    borderWidth: 2,}} 
    // keyboardType='number-pad'
    onChangeText={inputText => setEmail(inputText)}
    value={email}
    placeholder="Username"/>

    <TextInput  
    style={{height: 36,
    backgroundColor: 'white', 
    fontSize: 20, width: '69%',
    borderRadius: 10,
    borderColor:'#368cb3',
    borderWidth: 2,
    paddingLeft: 10,
    margin: 15}} 
    secureTextEntry={true}
    onChangeText={inputText => setPassword(inputText)}
    value={password}
    placeholder="Password"/>

    {/* <View style={{padding: 0, flexDirection: 'row', alignContent: 'space-between'}}>
      <Text
      onPress={() => { props.navigation.navigate({routeName: 'NewUser'}); }} >New User                   </Text>
      <Text
      onPress={() => { props.navigation.navigate({routeName: 'ForgotPassword'}); }}>Forgot Password?</Text>
    </View> */}

    <TouchableOpacity style={styles.appButtonContainer}
    onPress={() => {  checkTextInput(); } }>
      <Text style={styles.appButtonText}>Log In</Text>
      </TouchableOpacity>
    {/* <Text>{props.user.username}</Text> */}
    <Image style={{height: 65, width: 170, bottom: -80}} source={require('../../assets/toolbarlogo1.png')} />
    
  </View>
      )
  }

export default DoctorLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    //flexDirection: 'column',
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
});




// 8125
// Mr. SATYANARAYANA MURTHY T V V
// 331010008125
// 9491886492
// 331011800101036
// 1
// 0
// 1




// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

// const DoctorLoginScreen = ({navigation}) => {
//         return (
//           <View style={styles.container}>
//           <StatusBar style="auto" backgroundColor= "#368cb3"  />
//         <Text style={{fontSize: 20, color: '#427f95', marginTop: 80  }}>Nizam's Institute of Medical Sciences</Text>
//         <Text style={{fontSize: 13, color: '#427f95'  }}>(A University Established Under State Act)</Text>
//         <Text style={{fontSize: 17, color: '#427f95'  }}>Hyderbad 500082 Telangana, India</Text>
//         <Image style={{height: 160, width: 140, margin: 30, marginBottom: 50}} source={require('../../assets/nimslogo_liteblue.png')} />
//         <TextInput  
//         style={{height: 36,
//         backgroundColor: 'white', 
//         fontSize: 20, width: '69%', 
//         borderRadius: 10,
//         borderColor:'#368cb3',
//         paddingLeft: 10,
//         borderWidth: 2,}} placeholder="Username"/>
  
//         <TextInput  
//         style={{height: 36,
//         backgroundColor: 'white', 
//         fontSize: 20, width: '69%',
//         borderRadius: 10,
//         borderColor:'#368cb3',
//         borderWidth: 2,
//         paddingLeft: 10,
//         margin: 20}} placeholder="Password"/>
  
  
//         <TouchableOpacity style={styles.appButtonContainer}
//         onPress = {() => navigation.navigate('DoctorHome')}>
//           <Text style={styles.appButtonText}>Log In</Text>
//           </TouchableOpacity>
        
//         <Image style={{height: 65, width: 170, bottom: -20}} source={require('../../assets/toolbarlogo1.png')} />
         
//       </View>
//           )
//       }
  
//   export default DoctorLoginScreen;
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'column',
//       backgroundColor: '#eef2f7',
//       alignItems: 'center',
//     },
//     appButtonContainer: {
//       marginTop: 15,
//       backgroundColor: "#368cb3",
//       borderRadius: 25,
//       width: 140,
//       paddingVertical: 10,
//       paddingHorizontal: 12
//     },
//     appButtonText: {
//       fontSize: 15,
//       color: "#fff",
//       fontWeight: "bold",
//       alignSelf: "center",
//       textTransform: "uppercase"
//     },
    
//   });
  
  
