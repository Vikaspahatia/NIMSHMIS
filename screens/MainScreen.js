import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

const MainScreen = props => {

  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const width = new Animated.Value(400);
  const height = new Animated.Value(880);

  setTimeout(() => {
    setAlign('flex-start'), setAlignsecond(true);
    setIsLoading(true);
  }, 1000);  // 1000 means 1 second


  useEffect(() => {
    Animated.timing(
      width, // The animated value to drive
      {
        toValue: 400, // Animate to opacity: 1 (opaque)
        duration: 350, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
    Animated.timing(
      height, // The animated value to drive
      {
        toValue: 1000, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
  }, []);




  return (
    <View style={{flex: 1}}>
    <StatusBar style="auto"  backgroundColor= "#368cb3" />   

        <View style={styles.container}>
      <Text style={{fontSize: 20, color: '#427f95', marginTop: 60 }}>Nizam's Institute of Medical Sciences</Text>
      <Text style={{fontSize: 13, color: '#427f95'  }}>(A University Established Under State Act)</Text>
      <Text style={{fontSize: 17, color: '#427f95'  }}>Hyderbad 500082 Telangana, India</Text>
      <Image style={{height: 160, width: 140, margin: 30,}} source={require('../assets/nimslogo_liteblue.png')} />

        <TouchableOpacity style={styles.appButtonContainer} 
        onPress={() => { props.navigation.navigate({routeName: 'EmployeeLogin'}); }} >
        <Text style={styles.appButtonText}>Employee</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appButtonContainer} 
        // onPress={() => { Alert.alert("This feature will be soon available in the next release.") }} >
        onPress={() => { props.navigation.navigate({routeName: 'DoctorLogin'}); }} >
        <Text style={styles.appButtonText}>Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appButtonContainer} 
         onPress={() => { props.navigation.navigate({routeName: 'PatientLogin'}); }} >
        {/* onPress={() => { Alert.alert("This feature will be soon available in the next release.") }} > */}
        <Text style={styles.appButtonText}>Patient</Text>
        </TouchableOpacity>

      <Image style={{height: 65, width: 170, position: 'absolute', bottom: 70}} source={require('../assets/toolbarlogo1.png')} />
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    flexDirection: 'column',
  },
  appButtonContainer: {
    marginTop: 15,
    backgroundColor: "#368cb3",
    borderRadius: 25,
    width: 260,
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

export default MainScreen;