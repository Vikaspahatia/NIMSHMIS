import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { MaterialIcons } from '@expo/vector-icons';


const MyAccountCRScreen = ({navigation}) => {

    const profilePic= navigation.getParam('picKey');
    const name= navigation.getParam('nameKey');
    const patientName= navigation.getParam('patientNameKey');

    const pickFromCamera = async() => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.5
            })
            console.log(data)
        } else {
            Alert.alert("Please Allow Access!")
        }
    }

    function displayName() {
      if(name.length >= 1){
          return <Text style={styles.text1}>{name}</Text>
      } else if(patientName.length >= 1){
          return <Text style={styles.text1}>{patientName}</Text>
      }
  }


  return (
    <View style={{flex:1}}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
        </View>  
    <View style={styles.contain}>

    <View style={{
        alignSelf: 'center', 
        height: 150, width: 150, 
        backgroundColor: 'white',
        borderRadius: 100,
        marginTop: 25}}>

              <Image style={{
                height: 150, width: 150,
                backgroundColor: 'white',
                alignSelf: 'center',           
                borderRadius: 100,}} 
                source={{uri: profilePic}}/>
</View>

    <TouchableOpacity activeOpacity={0.5}
        onPress = {()=> pickFromCamera()}>
    <FontAwesome name="camera" size={24} color="white" 
        style={{
            alignSelf: 'flex-end',
            bottom: 10,
            paddingRight: 40
        }}/>
    </TouchableOpacity>
      {displayName()}

    </View>
    </View>
  );
}
 
export default MyAccountCRScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 0.4,
    backgroundColor: '#368cb3',
    //alignItems: 'center',
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
    width: '50%',
    backgroundColor: 'white',
    marginHorizontal: 1,
  },
  container3: {
    alignItems: 'center',
    padding: 8,
    height: 58,
    width: '50%',
    backgroundColor: 'white',
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
  text1: {fontSize: 23, alignSelf: 'center', color: 'white', fontWeight: 'bold',
  position: 'absolute', bottom: 25},
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

