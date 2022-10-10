import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
const PreRegistrationScreen = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35}}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
        </View>  
    <View style={{flex: 1}}>
    <WebView source={{ uri: 'https://nims.edu.in/provisionalregistration' }} />
    </View>
    </View>
  );
}
export default PreRegistrationScreen;


// BELOW CODE IS THE CODED FORM FOR REGISTRATION

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// //import { TouchableOpacity } from 'react-native-gesture-handler';
// import { RadioButton } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import RadioForm from 'react-native-simple-radio-button';

// const PreRegistrationScreen = ({navigation}) => {

//     var gender = [
//         {label: "Male     ", value: 0},
//         {label: "Female     ", value: 1},
//         {label: "Transgender     ", value: 2},
//     ]
//     var relation = [
//         {label: "Father     ", value: 0},
//         {label: "Mother     ", value: 1},
//         {label: "Spouse     ", value: 2},
//     ]
//   return (
//     <View style={{flex:1, backgroundColor: 'white'}}>
//         <StatusBar style="auto"  backgroundColor= "#368cb3"/>

//         <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35}}>
//             <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
//             onPress={() => {navigation.toggleDrawer();}} />
//             <Image style={{marginLeft: 70, height: 50, width: 130}} 
//             source={require('../../../assets/toolbarlogo1.png')} />
//         </View>  
//     <ScrollView style={styles.contain}>

//         <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 10, marginTop: 20}}>
//             <Text style={{fontSize: 20, color: 'red'}}>* </Text>
//             <Text style={{fontSize: 15, color: 'black'}}>Select Department</Text>
//         </View>



//         <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', paddingLeft: 10, marginTop: 30}}>Patient Details</Text>

//         <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center'}}>

//             <TextInput  
//             style={{height: 40,
//             fontSize: 20, 
//             width: '45%',
//             borderColor:'#cfcfcf',
//             borderBottomWidth: 2,
//             backgroundColor: '#f5f5f5',
//             paddingLeft: 10,
//             marginTop: 5,
//             }}
//             maxLength= {6}
//             // onChangeText={numberInputHandler}
//             // value={enteredValue}
//             placeholder="First Name"/>


//             <TextInput  
//             style={{height: 40,
//             fontSize: 20, 
//             width: '45%',
//             borderColor:'#cfcfcf',
//             borderBottomWidth: 2,
//             backgroundColor: '#f5f5f5',
//             paddingLeft: 10,
//             marginTop: 5,
//             marginLeft: 15}}
//             maxLength= {6}
//             // onChangeText={numberInputHandler}
//             // value={enteredValue}
//             placeholder="Last Name"/>
//         </View>

//         <TextInput  
//             style={{height: 40,
//             fontSize: 20, 
//             width: '94%',
//             borderColor:'#cfcfcf',
//             borderBottomWidth: 2,
//             backgroundColor: '#f5f5f5',
//             paddingLeft: 10,
//             marginTop: 5,
//             alignSelf: 'center'}}
//             maxLength= {6}
//             // onChangeText={numberInputHandler}
//             // value={enteredValue}
//             placeholder="Age"/>


//         <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 10, marginTop: 20}}>
//             <Text style={{fontSize: 20, color: 'red'}}>* </Text>
//             <Text style={{fontSize: 15, color: 'black'}}>Gender</Text>
//         </View>


//         <View style={{alignSelf: 'center', paddingLeft: 18}}>
//                 <RadioForm 
//                     radio_props= {gender}
//                     onPress={(value) => {}}
//                     initial={0}
//                     selectedButtonColor='#368cb3'
//                     buttonColor='#368cb3'
//                     formHorizontal={true}
//                     buttonSize={12}
//                 />
//         </View>
//         {/* <RadioButtonRN
//         box = {true}
//         selectedBtn={(e) => console.log(e)}
//         icon={
//             <Icon
//               name="check-circle"
//               size={25}
//               color="#2c9dd1"
//             />
//           }
//         /> */}


//         <TextInput  
//             style={{height: 40,
//             fontSize: 20, 
//             width: '94%',
//             borderColor:'#cfcfcf',
//             borderBottomWidth: 2,
//             backgroundColor: '#f5f5f5',
//             paddingLeft: 10,
//             marginTop: 5,
//             alignSelf: 'center'}}
//             maxLength= {6}
//             // onChangeText={numberInputHandler}
//             // value={enteredValue}
//             placeholder="Father's/Mother's/Spouse's name"/>



//         <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 10, marginTop: 20}}>
//             <Text style={{fontSize: 20, color: 'red'}}>* </Text>
//             <Text style={{fontSize: 15, color: 'black'}}>Select Relation</Text>
//         </View>


//         <View style={{alignSelf: 'center'}}>
//                 <RadioForm 
//                     radio_props= {relation}
//                     onPress={(value) => {}}
//                     initial={0}
//                     selectedButtonColor='#368cb3'
//                     buttonColor='#368cb3'
//                     formHorizontal={true}
//                     buttonSize={12}
//                 />
//         </View>


//         <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', paddingLeft: 10, marginTop: 30}}>Address Details</Text>

//         <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 10, marginTop: 20}}>
//             <Text style={{fontSize: 20, color: 'red'}}>* </Text>
//             <Text style={{fontSize: 15, color: 'black'}}>Select State</Text>
//         </View>


//         <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 10, marginTop: 20}}>
//             <Text style={{fontSize: 20, color: 'red'}}>* </Text>
//             <Text style={{fontSize: 15, color: 'black'}}>Select District</Text>
//         </View>




//         <TextInput  
//             style={{height: 40,
//             fontSize: 20, 
//             width: '94%',
//             borderColor:'#cfcfcf',
//             borderBottomWidth: 2,
//             backgroundColor: '#f5f5f5',
//             paddingLeft: 10,
//             marginTop: 5,
//             alignSelf: 'center'}}
//             maxLength= {6}
//             // onChangeText={numberInputHandler}
//             // value={enteredValue}
//             placeholder="City/Village"/>
//         <TextInput  
//             style={{height: 40,
//             fontSize: 20, 
//             width: '94%',
//             borderColor:'#cfcfcf',
//             borderBottomWidth: 2,
//             backgroundColor: '#f5f5f5',
//             paddingLeft: 10,
//             marginTop: 5,
//             alignSelf: 'center'}}
//             maxLength= {6}
//             // onChangeText={numberInputHandler}
//             // value={enteredValue}
//             placeholder="Pin Code"/>

//         <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', paddingLeft: 10, marginTop: 20}}>Contact Details</Text>
//         <TextInput  
//             style={{height: 40,
//             fontSize: 20, 
//             width: '94%',
//             borderColor:'#cfcfcf',
//             borderBottomWidth: 2,
//             backgroundColor: '#f5f5f5',
//             paddingLeft: 10,
//             marginTop: 5,
//             alignSelf: 'center'}}
//             maxLength= {6}
//             // onChangeText={numberInputHandler}
//             // value={enteredValue}
//             placeholder="Mobile Number"/>
//         <TextInput  
//             style={{height: 40,
//             fontSize: 20, 
//             width: '94%',
//             borderColor:'#cfcfcf',
//             borderBottomWidth: 2,
//             backgroundColor: '#f5f5f5',
//             paddingLeft: 10,
//             marginTop: 5,
//             alignSelf: 'center'}}
//             maxLength= {6}
//             // onChangeText={numberInputHandler}
//             // value={enteredValue}
//             placeholder="Email"/>

//     </ScrollView>

//         <TouchableOpacity style={{width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#368cb3', height: 50}}>
//             <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17,marginTop: 13, alignSelf: 'center'}}>SUBMIT</Text></TouchableOpacity>
//     </View>
//   );
// }

// export default PreRegistrationScreen;

// const styles = StyleSheet.create({
//   contain: {
//     flex: 1,
//     backgroundColor: 'white',
//     //alignItems: 'center',
//     marginBottom: 50
//     //
//   },
//   container: {
//     //flexDirection: 'column',
//     width: '93%',
//     height: 60,
//     backgroundColor: '#368cb3',
//     justifyContent: 'center',
//     margin: 20,
//     borderRadius: 10,
//   },
//   container1: {
//     alignItems: 'center',
//     padding: 5,
//     margin: 6,
//     height: 120,
//     width: 165,
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: '#C7C7C7',
//     backgroundColor: 'white',
//   },
//   container2: {
//     alignItems: 'center',
//     padding: 10,
//     height: 58,
//     width: '100%',
//     backgroundColor: 'white',
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
//   containerX: {
//     alignItems: 'center',
//     padding: 15,
//     margin: 7,
//     height: 120,
//     width: 165,
//     borderWidth: 1,
//     borderRadius: 11,
//     borderColor: '#f2f2f2',
//     backgroundColor: '#f2f2f2',
//   },
//   texted: {
//     marginLeft: 15,
//     color: 'white',
//     fontSize:18,
//     alignSelf: 'center',
//     fontWeight: 'bold',
//     //borderBottomWidth: 1,
//     //borderBottomColor: 'white',
//     //borderColor: 'white',
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
//     color: '#368cb3', 
//     fontWeight: 'bold'
//   },
// });

