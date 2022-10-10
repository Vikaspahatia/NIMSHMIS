import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { useDispatch,useSelector } from 'react-redux';
import * as authAction from '../../ServiceURL/actions/auth';

const PISScreen = props => {

  const URL = useSelector(state => state.URL.PIS);
  const epfflag = props.navigation.getParam('epfflagKey');
  console.log('url ', URL);
  //const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/payDetails?empno=331010008122";

  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const [EMP_NO, setEMP_NO] = useState();
  const [EMP_NAME, setEMP_NAME] = useState();
  const [EMP_DESGINATION, setEMP_DESGINATION] = useState();
  const [EMP_DEPT, setEMP_DEPT] = useState();
  const [EMP_DOB, setEMP_DOB] = useState();
  const [EMP_DOJ, setEMP_DOJ] = useState();
  const [EMP_DOR, setEMP_DOR] = useState();
  const [EMP_ACCNO, setEMP_ACCNO] = useState();
  const [EMP_PANNO, setEMP_PANNO] = useState();
  const [EMP_AADHAR, setEMP_AADHAR] = useState();
  const [EMP_MOBILE, setEMP_MOBILE] = useState();
  const [EMP_EMAIL, setEMP_EMAIL] = useState();
  
let content
let jsonDATA

useEffect(() => {
    (async () => {
    content = await fetch(URL)
    jsonDATA = await content.json()
    console.log(jsonDATA);
    setEMP_NO(jsonDATA[0].EMP_NAME);
    setEMP_NAME(jsonDATA[0].EMP_NAME);
    setEMP_DESGINATION(jsonDATA[0].EMP_DESGINATION);
    setEMP_DEPT(jsonDATA[0].EMP_DEPT);
    setEMP_DOB(jsonDATA[0].EMP_DOB);
    setEMP_DOJ(jsonDATA[0].EMP_DOJ);
    setEMP_DOR(jsonDATA[0].EMP_DOR);
    setEMP_ACCNO(jsonDATA[0].EMP_ACCNO);
    setEMP_PANNO(jsonDATA[0].EMP_PANNO);
    setEMP_AADHAR(jsonDATA[0].EMP_AADHAR);
    setEMP_MOBILE(jsonDATA[0].EMP_MOBILE);
    setEMP_EMAIL(jsonDATA[0].EMP_EMAIL);
    setLoading(false);
    }
    )();
  }, []);


  const logoutHandler = async()=>{
    await dispatch(authAction.logout());
    props.navigation.navigate('Main');
  }


  return (

    <SafeAreaView style={styles.contain}>
    <StatusBar style="auto"  backgroundColor= "#368cb3"/>
    
    {isLoading ? (
         
         <View>
         <View style={{
           width: 398,
           height: 80,
           backgroundColor: '#368cb3',
           // justifyContent: 'center',
           paddingTop: 38,
           marginTop: -45,
         }}>
 
         <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
         <View style={{flexDirection: 'row', marginLeft: 12}}>
         <Ionicons name="reorder-three" size={35} color="white" 
         />
         <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>PIS</Text>
         </View>
 
         <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
         <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
         <MaterialIcons name="home" size={24} color="white" />
         </View>
         </View>
         </View>
         
 
           <ActivityIndicator 
        color = '#368cb3' // color of your choice
        size = "large"
        style = {styles.activityIndicator}
           />
 
         </View>
        ) : (
          <>


    <View style={{
        width: '100%',
        height: 80,
        backgroundColor: '#368cb3',
        // justifyContent: 'center',
        paddingTop: 38,
        marginTop: -45,
        }}>

    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
    <View style={{flexDirection: 'row', marginLeft: 12}}>
    <Ionicons name="reorder-three" size={35} color="white"
      onPress={() => {props.navigation.toggleDrawer();}}  />
    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>PIS</Text>
    </View>

    <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
    <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
    <MaterialIcons name="home" size={24} color="white" 
    onPress={()=> props.navigation.navigate('EmployeeHome')}/>
    </View>
    </View>
    </View>



    <View style={styles.container}>
    <Text style={styles.texted}>Mr. {EMP_NAME}</Text>
    </View>



    <View style={{
        borderWidth: 4,
        borderRadius: 15,
        backgroundColor: 'white', 
        borderColor: '#368cb3',
        //height: 250,
        width: '93%',
        paddingBottom: 10}}>

    <View style={{marginTop: 5, marginLeft: 5}}>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Employee Code</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_NO}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Designation</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_DESGINATION}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Department</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_DEPT}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Date of Birth</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_DOB}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Date of Joining</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_DOJ}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Date of Retirement</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_DOR}</Text>
    </View>
    </View><View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Bank Account Number</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_ACCNO}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>PAN Card Number</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_PANNO}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Aadhaar Number</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_AADHAR}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Mobile Number</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_MOBILE}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Email id</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>{EMP_EMAIL}</Text>
    </View>
    </View>

    </View>
    </View>





    <View style={{flexDirection: 'row', alignContent: 'space-between', marginTop: 18, alignContent: 'center'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate({routeName: 'PaySlip'}); }}>
    {/* <AntDesign name="idcard" size={50} color="black" />  */}
    <Image source={require('../../assets/pay_slip.png')}
      style={{height: 100, width: 68, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>

    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate('Tax', {
      EMP_PANNO: EMP_PANNO,
    }); }} >
    <Image source={require('../../assets/tax.png')}
      style={{height: 97, width: 60, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>

    {(epfflag==1) ? (
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate({routeName: 'EPF'}); }} >
    <Image source={require('../../assets/epf.jpg')}
      style={{height: 97, width: 60, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>


    ):(
      <View style={styles.containerX}></View>
    )}
    </View>


    <View style={{flexDirection: 'row', flex: 1, position: 'absolute', bottom: 0}}>
    <View style={styles.container2}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => {  logoutHandler() }}>
    <AntDesign name="closecircleo" size={21} color="#368cb3" style={{alignSelf:'center'}}  />
    <Text style={styles.iconText2}>Logout</Text>
    </TouchableOpacity>
    </View>
    </View>

    {/* <View style={{flexDirection: 'row', flex: 1, 
    position: 'absolute', bottom: 0,
    height: 15,
    width: '100%',
    backgroundColor: 'white',
    marginHorizontal: 1,}}>
    </View> */}

    


    </>
        )}

    </SafeAreaView>
  );
}

export default PISScreen;


const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  
  },
  container: {
    //flexDirection: 'column',
    //width: '75%',
    height: 48,
    backgroundColor: '#368cb3',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  container1: {
    alignItems: 'center',
    padding: 15,
    margin: 4,
    height: 120,
    width: 110,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: '#3680aa',
    backgroundColor: '#3680aa',
  },
  container2: {
    alignItems: 'center',
    padding: 10,
    height: 58,
    width: '100%',
    backgroundColor: 'white',
    marginHorizontal: 1,
  },
  container3: {
    alignItems: 'center',
    padding: 8,
    height: 58,
    width: '50%',
    backgroundColor: '#f0f0f0',
    marginHorizontal: 1,
  },
  container4: {
    flex: 1,
  },
  containerX: {
    alignItems: 'center',
    padding: 15,
    margin: 7,
    height: 120,
    width: 110,
    backgroundColor: '#f2f2f2',
  },
  texted: {
    marginLeft: 6,
    color: 'white',
    fontSize:18,
    alignSelf: 'center',
    // fontWeight: 'bold',
    marginBottom: 6,
    marginRight: 15,
  },
  texte: {
    color: 'white',
    fontSize:15,
    marginLeft: 15,
    flex: 1,
  },
  buttonImageIconStyle: {
    
    padding: 10,
    margin: 7,
    height: 120,
    width: 165,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C7C7C7',
  },
  buttonImageIconStyle1: {
    height: 80,
    width: 65,
  },
  iconText: { 
    alignSelf:'center', 
    fontSize: 18, 
    color: 'white', 
    fontWeight: 'bold'
  },
  iconText1: { 
    alignSelf:'center', 
    fontSize: 13, 
    color: '#368cb3', 
    fontWeight: 'bold'
  },
  iconText2: { 
    alignSelf:'center', 
    fontSize: 13, 
    color: '#368cb3', 
    fontWeight: 'bold'
  },
  boxText: {
      fontSize: 14,
      color: '#368cb3',
  },
  boxText1: {
    marginLeft: -12,
    fontSize: 14,
    color: '#368cb3',
},
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  }
});

