import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SideBar from '../../../components/SideBar';
import { DrawerNavigatorItems, DrawerRouter } from 'react-navigation-drawer';
import * as URLAction from '../../../ServiceURL/actions/URL';
import { useDispatch,useSelector } from 'react-redux';

const DontHaveCRHomeScreen = props => {

  const Name = props.navigation.getParam('nameKey');
  const mobileNumber = props.navigation.getParam('numberKey');

  const dispatch = useDispatch();

  const logoutHandler= async()=>{ 
    await dispatch(URLAction.CRpatientDATALogout());
    props.navigation.navigate('Main'); 
  }

  return (

    <View style={{flex:1}}>
    <StatusBar style="auto"  backgroundColor= "#368cb3"/>

      <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
      <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
        onPress={() => {props.navigation.toggleDrawer();}} />
        <Image style={{marginLeft: 70, height: 50, width: 130}} 
        source={require('../../../assets/toolbarlogo1.png')} />

      </View>  



    <View style={styles.contain}>


    <View style={styles.container}>
    <Text style={styles.texted}>Hello {Name}</Text>
    </View>







    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate({routeName: 'Appointment'}); }} > 
    <Image source={require('../../../assets/registration.png')}
      style={{height: 70, width: 70, alignSelf: 'center'}} /> 
    <Text style={styles.iconText}>Pre-Registration/</Text>
    <Text style={styles.iconText}>Appointment</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate({routeName: 'OPDEnquiry'}); }} >
    <Image source={require('../../../assets/enquiry.png')}
      style={{height: 85, width: 95, alignSelf: 'center'}} />
    <Text style={styles.iconText}>OPD Enquiry</Text>
    </TouchableOpacity>
    </View>
    </View>


    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate({routeName: 'LabEnquiry'}); }} >
    <Image source={require('../../../assets/labenquiry.png')}
      style={{height: 86, width: 86, alignSelf: 'center'}} /> 
    <Text style={styles.iconText}>Lab Enquiry</Text>
    </TouchableOpacity>
    </View>

    <View style={styles.containerX}>
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


    </View>
    </View>

  );
}

export default DontHaveCRHomeScreen;


const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    //flexDirection: 'column',
    width: '93%',
    height: 55,
    backgroundColor: '#368cb3',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  container1: {
    alignItems: 'center',
    padding: 5,
    margin: 6,
    height: 120,
    width: 165,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C7C7C7',
    backgroundColor: 'white',
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
    alignSelf: 'center',
    fontWeight: 'bold',
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
    fontSize: 14, 
    color: '#368cb3', 
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
});

