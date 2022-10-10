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
  Modal,
  Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch,useSelector } from 'react-redux';
import * as authAction from '../../ServiceURL/actions/auth';
import * as user_Action from '../../ServiceURL/actions/URL';
import { useLinkProps } from '@react-navigation/native';
const EmployeeHomeScreen = (props,{navigation}) => {
  const dispatch = useDispatch();
  const URL = useSelector(state => state.URL.EmployeeHome);
  const checkEmployee = useSelector(state => state.auth.employeeNumber);
  const [isLoading, setLoading] = useState(true);
  const [EMP_NAME, setEMP_NAME] = useState();
  const [pickerModal, setPickerModal] = useState(false);

  const empid = props.navigation.getParam('empid');
  const userdisplayname = props.navigation.getParam('userdisplayname');
  const crno = props.navigation.getParam('crno');
  const epfflag = props.navigation.getParam('epfflagKey');
  const saveEmployeeNumber = async()=>{
    await dispatch(authAction.saveEmployee(empid, 'Employee'));
    // await dispatch(
    //   user_Action.userDATA(
    //     crno, 
    //     userdisplayname,
    //     empid,
    //   )
    //   )
  }
  useEffect(() => {
    setLoading(false);
  }, []);




   const [val, setVal] = useState(0);


  //   if(!checkEmployee && val===0) {
  //     setVal(1)
  //   Alert.alert(
  //     "Do you want to save the password?",
  //     "By saving the password you don't need to enter it again and again.",
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel"
  //       },
  //       { text: "SAVE", onPress: () => { saveEmployeeNumber() } }
  //     ]
  //   );
  // }
//}

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
          width: 400,
          height: 80,
          backgroundColor: '#368cb3',
          // justifyContent: 'center',
          paddingTop: 38,
          marginTop: -45,
        }}>

        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <View style={{flexDirection: 'row', marginLeft: 12}}>
        <Ionicons name="reorder-three" size={35} color="white" />
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Home</Text>
        </View>

        <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
        <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white"/>
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
      onPress={() => {props.navigation.toggleDrawer();}} 
    />
    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Home</Text>
    </View>

    <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
    <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" 
            onPress={() => setPickerModal(!pickerModal)} />

    <Modal  animationType= "none"  transparent={true}  visible={pickerModal}  >
  
    <View style={{
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      height: '88%', width:'88%', 
      alignSelf: 'center', 
      marginTop: 60,
      borderRadius: 15,
      }}>
        
      <View style={{flex:1, height: 40, width: '100%', backgroundColor: '#61b15a'}}>
        <Text style={{color: '#825959', alignSelf: 'center', fontSize: 20, marginTop: 3}}>NOTIFICATIONS</Text>  
      </View>
    
      <View style={{
        flex:15,
        backgroundColor: '#368cb3', 
        //justifyContent: 'center', 
        //alignSelf: 'center', 
      }}>
      
      <View style={{
        marginTop: 6,
        width: '95%', height: '12%', 
        alignSelf: 'center', 
        backgroundColor: 'white', 
        borderRadius: 5, 
        }}>
          <Text style={{fontSize: 18, flex: 1,marginTop: 15, alignSelf: 'center' }}>No Leave Notification</Text>
      </View>

      <View style={{
        width: '40%', height: 31, 
        alignSelf: 'center', 
        backgroundColor: 'white', 
        borderRadius: 14, 
        position: 'absolute',
        bottom:30
        }}>
      <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => setPickerModal(false)}>
          <Text style={{fontSize: 18, marginTop: 2}}>Close</Text>
        </TouchableOpacity>
      </View>
      
      </View>
      </View>
    </Modal>

    <MaterialIcons name="home" size={24} color="white" />
    </View>
    </View>
    </View>

    <View style={{
      //width: '71%',
      alignSelf: 'center',
      height: 48,
      backgroundColor: '#368cb3',
      justifyContent: 'center',
      margin: 20,
      borderRadius: 10,}}>
    <Text style={styles.texted}>{userdisplayname}</Text>
    </View>

    {/* {EMP_NAME} */}
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate({routeName: 'PIS', epfflagKey: epfflag}); }} >
    {/* <AntDesign name="idcard" size={50} color="black" />  */}
    <Image source={require('../../assets/pis.png')}
      style={{height: 100, width: 115, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate({routeName: 'Leave'}); }} >
    <Image source={require('../../assets/leave.png')}
      style={{height: 100, width: 95, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>
    </View>


    {/* <View style={{alignSelf: 'flex-start', marginLeft: 10,}}> */}
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate({routeName: 'FamilyDetails'}); }} >
    <Image source={require('../../assets/family.png')}
      style={{height: 100, width: 86, alignSelf: 'center'}} />
    </TouchableOpacity>
    </View>

    <View style={styles.containerX}>
    
    
    </View>

    </View>



    <View style={{flexDirection: 'row', flex: 1, position: 'absolute', bottom: 0}}>

    <View style={styles.container2}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => {   logoutHandler() }}>
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

export default EmployeeHomeScreen;


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
    color: 'white',
    fontSize:18,
    alignContent: 'center',
    marginLeft: 5,
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

