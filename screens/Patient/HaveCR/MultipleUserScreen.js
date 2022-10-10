import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity,FlatList, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { connect, useDispatch } from "react-redux"
import * as user_Action from '../../../ServiceURL/actions/URL';

const MultipleUserScreen = props => {
  
  const DATA = useSelector(state => state.URL.patientdetails);
  console.log(DATA);
  const [isLoading, setLoading] = useState(false);
  //const [DATA, setDATA ] = useState(); 
  //const patientdetails = props.navigation.getParam('patientdetailsKey');
  const dispatch = useDispatch();
  //const DATA = props.navigation.getParam('patientdetailsKey');
  const mobileNumber = props.navigation.getParam('mobileNumberKey');
  console.log('here' , DATA)


  function pass(patName, crno) {
    
      props.navigation.navigate('Home',
      {patKey: patName,
       crnoKey: crno})
      
      dispatch(
       user_Action.CRpatientDATA(
         //patientdetails,
         patName, 
         crno,
         mobileNumber
       )
       )
  }

const Item = ({ title }) => (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
const renderItem = ({ item }) => {
    return(
  <View style={{width:'100%', backgroundColor: '#f1eeee'}}>

    
    <TouchableOpacity style={styles.container1}
       onPress={() => pass(item.patName, item.crno)}
         >
      <View style={{flexDirection: 'row', flex: 1, marginTop: 8, marginLeft: 7}}>
        <View style={{flex: 1, marginLeft: 7, marginTop: -3}}>
            <Text style={[(styles.title), {fontSize: 17}]} >Patient Name</Text>
            <Text style={styles.title}>CR No.</Text>           
        </View>
        <View style={{flex: 1, marginLeft: -50, marginTop: -3}}> 
          <Text style={{fontWeight:'bold',fontSize: 17}}>{item.patName}</Text> 
          <Text style={{fontWeight:'bold',color: 'grey',fontSize: 14}}>{item.crno}</Text> 
        </View>
      </View> 
      </TouchableOpacity>


    </View>
  );
}

    return (
        <View style={styles.container}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>
      
        {isLoading ? (
         
         <View style={{flex: 1, width: '100%'}}>
          <View style={{
          width: '100%',
          height: 80,
          backgroundColor: '#368cb3',
          paddingTop: 38,
          marginTop: -45,
          marginBottom: 15,}}>

        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <View style={{flexDirection: 'row', marginLeft: 12}}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 20, padding: 5}}>HMIS HMIS</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
        <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="#368cb3" />
        <MaterialIcons name="home" size={24} color="#368cb3"/>
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
        paddingTop: 38,
        marginTop: -45,
        marginBottom: 15,}}>

      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
      <View style={{flexDirection: 'row', marginLeft: 12}}>
      <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 20, padding: 5}}>HMIS HMIS</Text>
      </View>
      <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
      <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="#368cb3" />
      <MaterialIcons name="home" size={24} color="#368cb3"/>
      </View>
      </View>
      </View>

      <View style={{marginLeft: 2, paddingBottom: 10}}>
      <Text style={{fontWeight: 'bold'}}>Select CR Number:</Text>
      </View>

      <View style={{flex: 1, width: '100%'}}>
      <FlatList data={DATA.patientdetails} renderItem={renderItem} keyExtractor={SR_NO => SR_NO.id} />
      </View>


      </>
        )}

    </View>
    );
   }
export default MultipleUserScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'white',
},
container1: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e4e6e8',
    margin: 8,
    paddingBottom: 15,
    paddingTop:15,
    },
container4: {
  flex: 1,
  //margin: 5,
  //padding: 10
},
appButtonContainer: {
  marginTop: 11,
  backgroundColor: "#368cb3",
  borderRadius: 25,
  height: 30,
  width: 120,
  paddingVertical: 10,
  paddingHorizontal: 1
},
appButtonText: {
  marginTop: -5,
  //height: 16,
  fontSize: 14,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
title: {
  fontSize: 14,
  color: 'black',
  fontWeight:'bold',
},
activityIndicator: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: 180
},
appButtonContainer: {
  marginTop: 10,
  backgroundColor: "#368cb3",
  borderRadius: 25,
  height: 30,
  width: 140,
  paddingVertical: 10,
  paddingHorizontal: 1
},
appButtonText: {
  marginTop: -5,
  //height: 16,
  fontSize: 14,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
});