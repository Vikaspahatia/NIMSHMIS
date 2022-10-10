import React, { useState, useEffect } from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch,useSelector } from 'react-redux';
import * as URLAction from '../ServiceURL/actions/URL';

const PatientSidebar = props => {

    const name = useSelector(state => state.URL.enteredName);
    const mobileNumber = useSelector(state => state.URL.enteredNumber);


    const patientName = useSelector(state => state.URL.patientName);
    const doctorName = useSelector(state => state.URL.doctorName);
    console.log(patientName);
    const patientcrno = useSelector(state => state.URL.patientcrno);
    const patientMobileNumber = useSelector(state => state.URL.patientMobileNumber);

    const dispatch = useDispatch();

  const logoutHandler= async()=>{ 
    await dispatch(URLAction.CRpatientDATALogout());
    props.navigation.navigate('Main'); 
  }


//console.log(name,'shen');
    const [DATA, setDATA ] = useState(); 
    var empno=331010008121;
    // const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/appointment/photo?EmpNo="+empno+"&S_no=0&Hcode=33101"
    const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/appointment/photo?CrNo="+patientcrno+"&S_no=0&Hcode=33101"
    
    axios.get(URL).then((res) => setDATA(res.data[0].ImageData));

    var profilePic = 'data:image/png;base64,' + DATA;
    var lastFourDigits = mobileNumber.substring(6);

    //console.log(name.length)
    function displayName() {
        if(name.length >= 1){
            return <Text style={styles.text1}>{name}</Text>
        } else if(patientName.length >= 1){
            return <Text style={styles.text1}>{patientName}</Text>
        } else if(doctorName.length >= 1){
        return <Text style={styles.text1}>{doctorName}</Text>
        }
    }
return(
    <View style={styles.container}>
        <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
        <View style={styles.upper}>
            <Image style={{
                height: 80, width: 80, 
                backgroundColor: 'white',
                alignSelf: 'center',
                marginTop: 50,
                borderRadius: 100,}} 
                source={{uri: profilePic}}/>
    
            {/* <Text style={styles.text1}>{name}</Text> */}
            {displayName()}
            {/* <Text style={styles.text2}>Mob No: XXXXXX{lastFourDigits}</Text> */}
            {/* <Text style={styles.text2}>{patientcrno}</Text> */}
        </View>
        <View style={styles.lower}>
            <TouchableOpacity
                onPress={() => { props.navigation.navigate('MyAccount',{  picKey: profilePic, nameKey: name, patientNameKey: patientName  }); }}>
            <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                <View style={{paddingLeft: 22, marginTop: 25}}><FontAwesome5 name="user-alt" size={21} color="grey" /></View>
                <View style={{paddingLeft: 32, marginTop: 27}}><Text>My Account</Text></View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { props.navigation.navigate('AboutUs'); }}>
            <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                <View style={{paddingLeft: 22, marginTop: 25}}><MaterialCommunityIcons name="information" size={24} color="grey" /></View>
                <View style={{paddingLeft: 32, marginTop: 27}}><Text>About us</Text></View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { logoutHandler() }}>
            <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                <View style={{paddingLeft: 22, marginTop: 25}}><MaterialIcons name="cancel" size={24} color="grey" /></View>
                <View style={{paddingLeft: 32, marginTop: 27}}><Text>Logout</Text></View>
            </View>
            </TouchableOpacity>
        </View>
        </View>
        
    </View>
    );
}

export default PatientSidebar;
const styles = StyleSheet.create({
 container: {
    flex:1,
 },
 upper: {
    flex: 1,
    backgroundColor: '#368cb3'
 },
 lower: {
    flex: 3,
 },
 text1: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
 },
 text2: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
 },
 text3: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
 },
 text: {
    fontSize: 15,
    color: 'black',
    // alignSelf: 'center',
    // position: 'absolute',
    // bottom: 15,
 }
});