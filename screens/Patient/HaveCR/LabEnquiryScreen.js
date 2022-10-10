import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const LabEnquiryScreen = props => {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35}}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {props.navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
        </View>  
    <View style={styles.contain}>

    <WebView source={{ uri: 'https://www.nims.edu.in/alltestsview' }} />

    </View>
    </View>
  );
}

export default LabEnquiryScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#ebebeb',
  
  }
});



// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// const LabEnquiryScreen = ({navigation}) => {

//   return (


//     <View style={styles.contain}>
//       <StatusBar style="auto" backgroundColor= "#368cb3"  />
//     <Image style={{ marginTop: 3, alignContent: 'center', height: 50, width: 130}} 
//     source={require('../../../assets/toolbarlogo1.png')} />

//     <Text style={{alignSelf:'flex-start', fontSize: 17, color: 'black', fontWeight: 'bold', marginLeft: 28, marginTop: 10, marginBottom: 4,}}>Common Labs: </Text>








//     <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//     <View style={styles.container1}>
//     <TouchableOpacity activeOpacity={0.5}
//     onPress={() => { navigation.navigate('Biochemistry'); }}>
//     <Image source={require('../../../assets/biochemistry.png')}
//       style={{height: 60, width: 60, alignSelf: 'center'}} /> 
//     <Text style={styles.iconText}>Biochemistry</Text>
//     </TouchableOpacity>
//     </View>
//     <View style={styles.container1}>
//     <TouchableOpacity activeOpacity={0.5}>
//     <Image source={require('../../../assets/cardiology.png')}
//       style={{height: 60, width: 55, alignSelf: 'center'}}/>
//     <Text style={styles.iconText}>Cardiology</Text>
//     </TouchableOpacity>
//     </View>
//     </View>



//     <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//     <View style={styles.container1}>
//     <TouchableOpacity activeOpacity={0.5}>
//     <Image source={require('../../../assets/microbiology.png')}
//       style={{height: 60, width: 70, alignSelf: 'center'}} /> 
//     <Text style={styles.iconText}>Microbiology</Text>
//     </TouchableOpacity>
//     </View>
//     <View style={styles.container1}>
//     <TouchableOpacity activeOpacity={0.5}>
//     <Image source={require('../../../assets/pathology.png')}
//       style={{height: 60, width: 55, alignSelf: 'center'}}/>
//     <Text style={styles.iconText}>Pathology</Text>
//     </TouchableOpacity>
//     </View>
//     </View>



//     <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//     <View style={styles.container1}>
//     <TouchableOpacity activeOpacity={0.5}>
//     <Image source={require('../../../assets/physiology.png')}
//       style={{height: 60, width: 60, alignSelf: 'center'}} /> 
//     <Text style={styles.iconText}>Physiology</Text>
//     </TouchableOpacity>
//     </View>
//     <View style={styles.container1}>
//     <TouchableOpacity activeOpacity={0.5}>
//     <Image source={require('../../../assets/radiology.png')}
//       style={{height: 60, width: 50, alignSelf: 'center'}}/>
//     <Text style={styles.iconText}>Radiology</Text>
//     </TouchableOpacity>
//     </View>
//     </View>

//     <TouchableOpacity style={styles.appButtonContainer}>
//         <Text style={styles.appButtonText}>All Tests</Text>
//         </TouchableOpacity>
    

//     </View>
//   );
// }

// export default LabEnquiryScreen;


// const styles = StyleSheet.create({
//   contain: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 40,
  
//   },
//   container: {
//     flexDirection: 'column',
//     width: '93%',
//     height: 90,
//     backgroundColor: '#e7e7e7',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     margin: 20,
//     borderRadius: 10,
//   },
//   container1: {
//     alignItems: 'center',
//     padding: 5,
//     margin: 5,
//     height: 90,
//     width: 170,
//     borderRadius: 5,
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: '#C7C7C7',
//   },
//   container2: {
//     alignItems: 'center',
//     padding: 10,
//     height: 58,
//     width: '50%',
//     backgroundColor: '#f0f0f0',
//     marginHorizontal: 1,
//   },
//   container3: {
//     alignItems: 'center',
//     padding: 8,
//     height: 58,
//     width: '50%',
//     backgroundColor: '#f0f0f0',
//     marginHorizontal: 1,
//   },
//   texted: {
//     marginLeft: 15,
//     color: 'white',
//     fontSize:15,
//     borderBottomWidth: 1,
//     borderBottomColor: 'white',
//     borderColor: 'white',
//     marginBottom: 6,
//     marginRight: 15,
//   },
//   texte: {
//     color: 'white',
//     fontSize:15,
//     marginLeft: 15,
//     flex: 1,
//   },
//   buttonImageIconStyle: {
    
//     padding: 10,
//     margin: 7,
//     height: 120,
//     width: 165,
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: '#C7C7C7',
//   },
//   buttonImageIconStyle1: {
//     height: 80,
//     width: 65,
//   },
//   iconText: { 
//     alignSelf:'center', 
//     fontSize: 14, 
//     color: '#368cb3', 
//     fontWeight: 'bold'
//   },
//   iconText1: { 
//     alignSelf:'center', 
//     fontSize: 13, 
//     color: '#368cb3', 
//     fontWeight: 'bold'
//   },
//   iconText2: { 
//     alignSelf:'center', 
//     fontSize: 13, 
//     color: '#696969', 
//     fontWeight: 'bold'
//   },
//   appButtonContainer: {
//     marginTop: 15,
//     backgroundColor: "#368cb3",
//     borderRadius: 25,
//     width: 170,
//     paddingVertical: 10,
//     paddingHorizontal: 12
//   },
//   appButtonText: {
//     fontSize: 15,
//     color: "#fff",
//     fontWeight: "bold",
//     alignSelf: "center",
//     textTransform: "uppercase"
//   },
// });

