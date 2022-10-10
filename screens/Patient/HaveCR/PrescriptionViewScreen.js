import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch,useSelector } from 'react-redux';

const PrescriptionViewScreen = props => {


  // const patientcrno = useSelector(state => state.URL.patientcrno);
  // const patientName = useSelector(state => state.URL.patientName);

  const patientName = props.navigation.getParam('patKey');
  const patientcrno = props.navigation.getParam('crnoKey');

  return (
    <View style={styles.contain}>
      <StatusBar style="auto"  backgroundColor= "#368cb3"  />
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35, }}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {props.navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
        </View> 

    <View style={styles.container}>
      <Text style={styles.texted}>Patient Details</Text>
      <View style={{width: '95%', borderWidth: 1, borderColor: 'white', marginBottom: 5, alignSelf: 'center'}}></View>
      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <Text style={styles.texte}>Patient Name :</Text>
        <Text style={styles.textev}>{patientName}</Text>
      </View>
      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <Text style={styles.texte}>CR NO. :</Text>
        <Text style={styles.textev}>{patientcrno}</Text>
      </View>
    </View>


    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <View style={styles.container1}>
        <TouchableOpacity activeOpacity={0.5}
        onPress={()=>props.navigation.navigate('PrescriptionOnlineView',{patKey: patientName,crnoKey: patientcrno})}>
        <Image source={require('../../../assets/view_prescription.png')}
          style={{height: 89, width: 65, alignSelf: 'center'}}/>
        <Text style={styles.iconText}>Prescription</Text>
        <Text style={styles.iconText}>Online View</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity activeOpacity={0.5}
        onPress={()=>props.navigation.navigate('PrescriptionScannedView',{patKey: patientName,crnoKey: patientcrno})}>
        <Image source={require('../../../assets/view_prescription.png')}
          style={{height: 89, width: 65, alignSelf: 'center'}}/>
        <Text style={styles.iconText}>Prescription</Text>
        <Text style={styles.iconText}>Scanned View</Text>
        </TouchableOpacity>
      </View>
    </View>



    </View>
  );
}

export default PrescriptionViewScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    //alignItems: 'center',
    //marginTop: 30,
  },
  container: {
    flexDirection: 'column',
    width: '93%',
    height: 90,
    backgroundColor: '#368cb3',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 10,
  },
  container1: {
    alignSelf: 'center',
    padding: 5,
    margin: 6,
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
    fontSize:15,
    // borderBottomWidth: 1,
    // borderBottomColor: 'white',
    // borderColor: 'white',
    marginBottom: 2,
    marginRight: 15,
  },
  texte: {
    color: 'white',
    fontSize:15,
    marginLeft: 15,
    flex: 1,
  },
  textev: {
    color: 'white',
    fontSize:15,
    marginLeft: -70,
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
    color: '#696969', 
    fontWeight: 'bold'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  }
});

