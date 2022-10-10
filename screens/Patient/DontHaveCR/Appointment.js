import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Appointment = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35, backgroundColor: 'white'}}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
        </View>  
    <View style={styles.contain}>
      <Text style={{fontSize: 21, alignSelf: 'center', color: 'black', fontWeight: 'bold', marginTop: 20}}>Pre-Registration/Appointment</Text>

      <TouchableOpacity activeOpacity={0.5}
      onPress={() => { navigation.navigate('PreRegistration'); }}>
        <View style={{
            height: 80, width: '95%', 
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            marginTop: 20,
            borderWidth: 1,
            borderColor: '#c7c7c7',
        }}>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image style={{height: 60, width: 55, marginTop: 7, marginLeft: 8}} 
            source={require('../../../assets/provisional_registration.png')} />
            <Text style={{fontWeight: 'bold', marginTop: 10, marginLeft: 10, fontSize: 15}}>Pre-Registration(General OPD's)</Text>
            </View>
            <Text style={{marginTop: 10, fontSize: 15, color: 'grey', width: '70%', marginLeft: 73, marginTop: -36}}>Form-based pre-registration with basic demographic detials.</Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity activeOpacity={0.5}
      onPress={() => { navigation.navigate('TR'); }}>

        <View style={{
            height: 80, width: '95%', 
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            marginTop: 10,
            borderWidth: 1,
            borderColor: '#c7c7c7',
        }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image style={{height: 60, width: 50, marginTop: 7, marginLeft: 8}} 
            source={require('../../../assets/todays.png')} />
            <Text style={{fontWeight: 'bold', marginTop: 10, marginLeft: 10, fontSize: 15}}>Today's Registration</Text>
            </View>
            <Text style={{marginTop: 10, fontSize: 15, color: 'grey', width: '70%', marginLeft: 70, marginTop: -36}}>View list of pre-registrations done today.</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.5}
        onPress={() => { navigation.navigate('DAT'); }}>

        <View style={{
            height: 80, width: '95%', 
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            marginTop: 10,
            borderWidth: 1,
            borderColor: '#c7c7c7',
        }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image style={{height:56, width: 52, marginTop: 10, marginLeft: 8}} 
            source={require('../../../assets/special_clinic_appointment.png')} />
            <Text style={{fontWeight: 'bold', marginTop: 10, marginLeft: 10, fontSize: 15}}>Doctor Appointment-Teleconsultation</Text>
            </View>
            <Text style={{marginTop: 10, fontSize: 15, color: 'grey', width: '70%', marginLeft: 70, marginTop: -36}}>Book Doctor's Appointment.</Text>
        </View>
        </TouchableOpacity>

    </View>
    </View>
  );
}

export default Appointment;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#ebebeb',
    //alignItems: 'center',
    //
  },
  container: {
    //flexDirection: 'column',
    width: '93%',
    height: 60,
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

