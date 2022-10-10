import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ActivityIndicator,
  SafeAreaView,
  Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Crypto from 'expo-crypto';
import { useDispatch,useSelector } from 'react-redux';
import * as authAction from '../../ServiceURL/actions/auth';


const LeaveScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const employee = useSelector(state => state.URL.emno);
  //var empno = 331010008122;
  const check = 'cdac'+employee+'leavefinal'
  const URL = useSelector(state => state.URL.Leave);
  var URL1;
  var URL2;
  //const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/payDetails?empno=331010008122";
  const [isLoading, setLoading] = useState(true);
  const [EMP_NAME, setEMP_NAME] = useState();
  const [pass, setPass] = useState();

  let content
  let jsonDATA
  useEffect(() => {
    (async () => {
    content = await fetch(URL)
    jsonDATA = await content.json()
    console.log(jsonDATA);
    setEMP_NAME(jsonDATA[0].EMP_NAME);
    setLoading(false);

    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA1,
      check
    );
    setPass(digest);

    }
    )();
  }, []);

  const NLR = "https://nimsts.edu.in/HISPis_mobile/pis/leave/transactions/addModifyPageLeaveRequest_mobileDtl.action?pageFlag=add&pageMode=Emp&userEmpID="+employee+"&check="+pass;

  const webURL =  "https://nimsts.edu.in/HISPis_mobile/pis/leave/transactions/LeaveSanctioning_mobile.action?userEmpID="+employee+"&check="+pass;


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
        <Ionicons name="reorder-three" size={35} color="white" />
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Leave</Text>
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
    onPress={() => {navigation.toggleDrawer();}} 
    />
    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Leave</Text>
    </View>

    <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
    <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
    <MaterialIcons name="home" size={24} color="white" 
    onPress={()=> navigation.navigate('EmployeeHome')}/>
    </View>
    </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { navigation.navigate({routeName: 'LeaveBalance'}); }} >
    {/* <AntDesign name="idcard" size={50} color="black" />  */}
    <Image source={require('../../assets/leaveBalance.png')}
      style={{height: 100, width: 105, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { navigation.navigate({routeName: 'LeaveProcesses'}); }} >
    <Image source={require('../../assets/leaveProcesses.png')}
      style={{height: 100, width: 100, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
     onPress={ ()=>{ Linking.openURL( NLR )}}
    >
    <Image source={require('../../assets/newLeaveRequest.png')}
      style={{height: 90, width: 100, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={ ()=>{ Linking.openURL( webURL )}} >
    <Image source={require('../../assets/leaveApproval.png')}
      style={{height: 97, width: 95, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>
    </View>


    <View style={{flexDirection: 'row', flex: 1, position: 'absolute', bottom: 0}}>

    <View style={styles.container2}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { logoutHandler() }}>
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

export default LeaveScreen;


const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  
  },
  container: {
    //flexDirection: 'column',
    width: '71%',
    height: 48,
    backgroundColor: '#368cb3',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  container1: {
    alignItems: 'center',
    padding: 15,
    margin: 7,
    height: 120,
    width: 165,
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
  containerX: {
    alignItems: 'center',
    padding: 15,
    margin: 7,
    height: 120,
    width: 165,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: '#f2f2f2',
    backgroundColor: '#f2f2f2',
  },
  texted: {
    marginLeft: 15,
    color: 'white',
    fontSize:18,
    alignSelf: 'center',
    fontWeight: 'bold',
    //borderBottomWidth: 1,
    //borderBottomColor: 'white',
    //borderColor: 'white',
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
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  }
});







// Leave Approlvel: https://nimsts.edu.in/HISPis_mobile/pis/leave/transactions/LeaveSanctioning_mobile.action?userEmpID=331010008122&check=f7d3429d738e50ef82d64a245a2f1f32f86b7a63
// Leave Request: https://nimsts.edu.in/HISPis_mobile/pis/leave/transactions/addModifyPageLeaveRequest_mobileDtl.action?pageFlag=add&pageMode=Emp&userEmpID=331010008122&check=f7d3429d738e50ef82d64a245a2f1f32f86b7a63