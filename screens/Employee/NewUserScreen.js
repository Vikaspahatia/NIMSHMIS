import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

const NewUserScreen = props => {
    return (
    <View style={styles.container}>
    <StatusBar style="auto" backgroundColor= "#368cb3"  />

    <View style={{flexDirection: 'row-reverse', alignContent: 'space-between'}}>
    <View style={styles.container1}>
    <Text style={{fontSize: 17 , color: '#427f95' }}>Nizam's Institute of Medical Sciences</Text>
    <Text style={{fontSize: 16, color: '#427f95'  }}>Hyderbad 500082 Telangana, India</Text>
    </View>
    <View style={styles.container2}>
    <Image style={{height: 80, width: 60,}} source={require('../../assets/nimslogo_liteblue.png')} />
    </View>
    </View>

    <Image style={{height: 120, width: 200, marginTop: -45}} source={require('../../assets/hospitallogo.jpg')} />
      
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={{flex: 5, margin: 10}}>
    <TextInput  
      style={{height: 35,
      padding: 6,
      backgroundColor: 'white', 
      fontSize: 17, width: 240,
      marginLeft: 10,
      borderRadius: 13,
      borderColor:'#368cb3',
      borderWidth: 2,
      }} placeholder="Emp-id"/>
    </View>
    <View style={{flex: 2, marginRight: 15,}}>
    <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Details</Text>
    </TouchableOpacity>
    </View>
    </View> 

    <View style={{flexDirection: 'row', alignContent: 'space-between', marginTop: -8}}>
    <View style={{flex: 5, margin: 10}}>
    <TextInput  
      style={{height: 35,
      padding: 6,
      backgroundColor: 'white', 
      fontSize: 17, width: 240,
      marginLeft: 10,
      borderRadius: 13,
      borderColor:'#368cb3',
      borderWidth: 2,
      }} placeholder="Username"/>
    </View>
    <View style={{flex: 2, marginRight: 15,}}>
    <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Check</Text>
    </TouchableOpacity>
    </View>
    </View>  

<TextInput  
      style={{height: 35,
      padding: 6,
      backgroundColor: 'white', 
      fontSize: 17, width: '90%',
      marginTop: 2,
      borderRadius: 15,
      borderColor:'#368cb3',
      borderWidth: 2,
      }} placeholder="Name"/>

<TextInput  
      style={{height: 35,
      padding: 6,
      backgroundColor: 'white', 
      fontSize: 17, width: '90%',
      marginTop: 11,
      borderRadius: 15,
      borderColor:'#368cb3',
      borderWidth: 2,
      }} placeholder="Mobile No."/>

<TextInput  
      style={{height: 35,
      padding: 6,
      backgroundColor: 'white', 
      fontSize: 17, width: '90%',
      marginTop: 11,
      borderRadius: 15,
      borderColor:'#368cb3',
      borderWidth: 2,
      }} placeholder="Email"/>

<TextInput  
      style={{height: 35,
      padding: 6,
      backgroundColor: 'white', 
      fontSize: 17, width: '90%',
      marginTop: 11,
      borderRadius: 15,
      borderColor:'#368cb3',
      borderWidth: 2,
      }} placeholder="Password"/>  

<TextInput  
      style={{height: 35,
      padding: 6,
      backgroundColor: 'white', 
      fontSize: 17, width: '90%',
      marginTop: 11,
      borderRadius: 15,
      borderColor:'#368cb3',
      borderWidth: 2,
      }} placeholder="Confirm Password"/>


      <View style={{flexDirection: 'row-reverse', alignContent: 'space-between', marginTop: 11}}>
    <View style={{flex: 2}}>
    <TextInput  
      style={{height: 35,
      padding: 6,
      backgroundColor: 'white', 
      fontSize: 17, width: 160,
      borderRadius: 13,
      borderColor:'#368cb3',
      borderWidth: 2,
      }} placeholder="OTP"/>
    </View>
    <View style={{flex: 1, marginTop: -9, marginLeft: 55}}>
    <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Get OTP</Text>
    </TouchableOpacity>
    </View>
    </View>  
    

      <TouchableOpacity style={styles.appButtonContainer1}>
        <Text style={styles.appButtonText}>create Account</Text>
        </TouchableOpacity>
      
    </View>
        )
    }

export default NewUserScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  appButtonContainer: {
    //alignContent: 'center',
    marginTop: 10,
    backgroundColor: "#368cb3",
    borderRadius: 25,
    height: 33,
    width: 90,
    paddingVertical: 10,
    paddingHorizontal: 1
  },
  appButtonText: {
    marginTop: -4,
    height: 16,
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  container1: {
    flex: 5,
    alignItems: 'flex-start',
    padding: 5,
    margin: 6,
    height: 120,
    width: 165,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    padding: 3,
    marginLeft: 20,
    height: 120,
    width: 165,
  },
  appButtonContainer1: {
    //alignContent: 'center',
    marginTop: 17,
    backgroundColor: "#368cb3",
    borderRadius: 25,
    height: 33,
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 1
  },
});

