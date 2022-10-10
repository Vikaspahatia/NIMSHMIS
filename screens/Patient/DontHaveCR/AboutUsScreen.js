import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const AboutUsScreen = ({navigation}) => {
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
      <Text style={{fontSize: 40, alignSelf: 'center', color: '#368cb3', fontWeight: 'bold'}}>About Us</Text>
      <Text style={{fontSize: 15, textAlign: 'left', color: '#368cb3', fontWeight: 'bold', paddingLeft: 20, marginTop: 10}}>support : mappsdev-noida@in.in</Text>
      <Text style={{fontSize: 16, alignSelf: 'center', color: 'grey', width:'90%', marginTop: 20}}>
      e-Sushrut, C-DAC's Hospital Management Information System is a major step towards adapting technology to improve healthcare. HMIS incorporates an integrated computerized clinical information system for improved hospital administration and patient health care. It also provides an accurate, electronically stored medical record of the patient. A data warehouse of such records can be utilized for statistical requirements and for research. The real time HMIS streamlines the treatment flow of patients and simultaneously empowering workforce to perform to their peak ability, in an optimized and efficient manner. It is modeled on the unique combination of a 'patient centric and medical staff centric' paradigm, thus providing benefits to both the recipients and the providers of healthcare. It ensures dramatic improvement in performance along with reducing the costs.
        
      </Text>



    </View>    
    </View>
  );
}

export default AboutUsScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  container: {
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

