import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const PatientLoginScreen = props => {
        return (
          <View style={styles.container}>
          <StatusBar style="auto"  backgroundColor= "#368cb3" />
        <Text style={{fontSize: 20, color: '#427f95', marginTop: 80  }}>Nizam's Institute of Medical Sciences</Text>
        <Text style={{fontSize: 13, color: '#427f95'  }}>(A University Established Under State Act)</Text>
        <Text style={{fontSize: 17, color: '#427f95'  }}>Hyderbad 500082 Telangana, India</Text>
        <Image style={{height: 160, width: 140, margin: 30,}} source={require('../../assets/nimslogo_liteblue.png')} />
        
        <TouchableOpacity style={styles.appButtonContainer} 
        onPress={() => { props.navigation.navigate({routeName: 'HaveCR'}); }} >
        <Text style={styles.appButtonText}>Login (Have CR No.)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appButtonContainer}
        onPress={() => { props.navigation.navigate({routeName: 'DontHaveCR'}); }} >
          <Text style={styles.appButtonText}>Signup (Don't Have CR No.)</Text>
          </TouchableOpacity>
        
        <Image style={{height: 65, width: 170, position: 'absolute', bottom: 50}} source={require('../../assets/toolbarlogo1.png')} />
        
      </View>
          )
      }
  
  export default PatientLoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#eef2f7',
      alignItems: 'center',
    },
    appButtonContainer: {
      marginTop: 25,
      backgroundColor: "#368cb3",
      borderRadius: 25,
      width: 280,
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
  
  
