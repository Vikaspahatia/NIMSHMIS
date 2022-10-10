import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const DoctorHomeScreen = props => {

  // const name = props.navigation.getParam('nameKey');
  // console.log(name,'N')
  //var crno = 134
  const crno = props.navigation.getParam('crnoKey');
  // const age = props.navigation.getParam('ageKey');
  // const gender = props.navigation.getParam('genderKey');
  // console.log(gender,'G')
  // const crno = props.navigation.getParam('dataKey');
  // //console.log(crno,'crno patient')
  const [name,setname] = useState();
  const [age,setage] = useState();
  const [gender,setgender] = useState();
  const URL = "https://nimsts.edu.in/HISServices/service/patient/desk/patdtl/crno?crno="+crno+"&hcode=33101";
  useEffect(() => {
    try {
    (async () => {
    var content = await fetch(URL);
    var jsonDATA = await content.json()
    // setDATA(jsonDATA);
    setname(jsonDATA.PAT[0].NAME)
    setage(jsonDATA.PAT[0].AGE)
    setgender(jsonDATA.PAT[0].GEN)
    // setLoading(false);
    // setLength(jsonDATA.length);
    }
    )();
  } catch(e) {
    console.log(e);
  }
  }, []); 
   

 useEffect(() => {

 });

 
  return (
    <View style={styles.contain}>
    <StatusBar style="auto"  backgroundColor= "#368cb3"  />
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35, }}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {props.navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../assets/toolbarlogo1.png')} />
        </View> 

    <View style={styles.container}>
    <Text style={styles.texted}>Patient Details</Text>
    <View style={{width: '95%', borderWidth: 1, borderColor: 'white', marginBottom: 5, alignSelf: 'center'}}></View>
    <View style={{flexDirection: 'row', alignContent: 'flex-start'}}>
    <Text style={styles.texte}>CR NO. :</Text>
    <Text style={styles.textev}>{crno}</Text>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'flex-start'}}>
    <Text style={styles.texte}>Name : </Text>
    {/* <Text style={styles.texte}>{selectedNumber}</Text> */}
    <Text style={styles.textev}>{name} ( {age}/{gender} )</Text>
    </View>
    </View>


    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    //onPress={() => { navigation.navigate('DAT',{patKey: name,crnoKey: crno}); }}
    onPress={() => { Alert.alert("This feature will be soon available in the next release.") }} 
    >
    <Image source={require('../../assets/scanning.png')}
      style={{height: 88, width: 86, alignSelf: 'center'}} /> 

    <Text style={styles.iconText}>Prescription Scan</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate('PrescriptionView',{patKey: name,crnoKey: crno, ageKey: age, genderKey: gender}); }}>
    <Image source={require('../../assets/view_prescription.png')}
      style={{height: 89, width: 65, alignSelf: 'center'}}/>
    <Text style={styles.iconText}>Prescription View</Text>
    </TouchableOpacity>
    </View>
    </View>

    

    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={()=> props.navigation.navigate('LabReportTrends',{nameKey: name,crnoKey: crno, ageKey: age, genderKey: gender})}>
    <Image source={require('../../assets/investigation.png')}
      style={{height: 90, width: 90, alignSelf: 'center'}} /> 
    <Text style={styles.iconText}>Lab Reports & trends</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={()=> props.navigation.navigate('OPDEnquiry')}>
    <Image source={require('../../assets/enquiry.png')}
      style={{height: 90, width: 100, alignSelf: 'center'}}/>
    <Text style={styles.iconText}>OPD Enquiry</Text>
    </TouchableOpacity>
    </View>
    </View>



    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => { props.navigation.navigate({routeName: 'LabEnquiry'}); }} >
    <Image source={require('../../assets/labenquiry.png')}
      style={{height: 90, width: 90, alignSelf: 'center'}} /> 
    <Text style={styles.iconText}>Lab Enquiry</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.container1}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={()=> props.navigation.navigate('Feedback')}>
    <Image source={require('../../assets/feedback.png')}
      style={{height: 90, width: 90, alignSelf: 'center'}} /> 
    <Text style={styles.iconText}>Feedback</Text>
    </TouchableOpacity>
    </View>
    </View>
 



    <View style={{flexDirection: 'row', flex: 1, position: 'absolute', bottom: 0}}>
    <View style={styles.container3}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => {  props.navigation.navigate('DoctorHome'); }}> 
    <MaterialIcons name="home" size={23} color="#368cb3" style={{alignSelf:'center'}} />
    <Text style={styles.iconText1}>Home</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.container2}>
    <TouchableOpacity activeOpacity={0.5}
    onPress={() => {  props.navigation.navigate('AfterLogin'); }}
    >
    <AntDesign name="plus" size={22} color="#696969" style={{alignSelf:'center'}} />
    <Text style={styles.iconText2}>New CR</Text>
    </TouchableOpacity>
    </View>
    </View>



    </View>
  );
}

export default DoctorHomeScreen;

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
    margin: 4,
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
    padding: 5,
    margin: 4,
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
    marginLeft: -180,
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

