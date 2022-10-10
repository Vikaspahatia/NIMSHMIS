import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import RadioForm from 'react-native-simple-radio-button';
import * as user_Action from '../../ServiceURL/actions/URL';
import { connect, useDispatch } from "react-redux"

const AfterLoginScreen = props => {
    var department = [
        {label: "OPD        ", value: 0},
        {label: "IPD        ", value: 1},
        {label: "Emergency  ", value: 2},
    ]

    const dispatch = useDispatch();
    const deptCode = props.navigation.getParam('deptCode');
    const [isLoading, setLoading] = useState(false);
    const URL = "https://nimsts.edu.in/HISServices/service/consultant/consultantByDept?deptCode="+deptCode+"&hospCode=33101";
    const [DATA, setDATA ] = useState(); 
    const [value, setValue] = useState(0);
    useEffect(() => {
      try {
      (async () => {
      const content = await fetch(URL);
      const jsonDATA = await content.json()
      setDATA(jsonDATA);
      setLoading(false);
      }
      )();
    } catch(e) {
      console.log(e);
    }
    }, []);
  
// var renderItem = ({ item }) => {
// function check(value) {
// switch(value) {
//     case 0: {
//       if(item.rosterType === 'General') {
//         return (<View style={styles.contain}>
//           <View style={styles.container1}>
//               <Text style={{ fontSize: 14,  color: '#368cb3', fontWeight: 'bold',textAlign: 'right',paddingRight: 10,}}>{item.rosterType}</Text>
//               <Text style={{ fontSize: 17.5, color: '#34b5e5', fontWeight: 'bold',textAlign: 'left',marginTop: -3,}}>Department: {item.deptName}</Text>
//               <View style={{borderWidth: 1, borderBottomColor: '#368cb3', marginTop: 1}}></View>
//               <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Unit: {item.unitName}</Text>
//               <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Building/Block: {item.location}/{item.roomName}</Text>
//               <Text style={{ fontSize: 15, color: '#ff8803', fontWeight: 'bold',textAlign: 'left',marginTop: 3}}>Unit Days:</Text>
//               <Text style={{ fontSize: 15, color: '#368cb3', fontWeight: 'bold',textAlign: 'left',paddingLeft: 10,marginTop: 3}}>{item.unitDays}</Text>
//         </View>
//       </View>);
//       } else {
//         return true;
//       }
//     }
//     case 1: {
//       if(item.rosterType === "Special") {
//         return (<View style={styles.contain}>
//           <View style={styles.container1}>
//               <Text style={{ fontSize: 14,  color: '#368cb3', fontWeight: 'bold',textAlign: 'right',paddingRight: 10,}}>{item.rosterType}</Text>
//               <Text style={{ fontSize: 17.5, color: '#34b5e5', fontWeight: 'bold',textAlign: 'left',marginTop: -3,}}>Department: {item.deptName}</Text>
//               <View style={{borderWidth: 1, borderBottomColor: '#368cb3', marginTop: 1}}></View>
//               <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Unit: {item.unitName}</Text>
//               <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Building/Block: {item.location}/{item.roomName}</Text>
//               <Text style={{ fontSize: 15, color: '#ff8803', fontWeight: 'bold',textAlign: 'left',marginTop: 3}}>Unit Days:</Text>
//               <Text style={{ fontSize: 15, color: '#368cb3', fontWeight: 'bold',textAlign: 'left',paddingLeft: 10,marginTop: 3}}>{item.unitDays}</Text>
//         </View>
//       </View>);
//       } else {
//         return true;
//       }
//     }
//     case 2: {
//         return(<View style={styles.contain}>
//           <View style={styles.container1}>
//               <Text style={{ fontSize: 14,  color: '#368cb3', fontWeight: 'bold',textAlign: 'right',paddingRight: 10,}}>{item.rosterType}</Text>
//               <Text style={{ fontSize: 17.5, color: '#34b5e5', fontWeight: 'bold',textAlign: 'left',marginTop: -3,}}>Department: {item.deptName}</Text>
//               <View style={{borderWidth: 1, borderBottomColor: '#368cb3', marginTop: 1}}></View>
//               <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Unit: {item.unitName}</Text>
//               <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Building/Block: {item.location}/{item.roomName}</Text>
//               <Text style={{ fontSize: 15, color: '#ff8803', fontWeight: 'bold',textAlign: 'left',marginTop: 3}}>Unit Days:</Text>
//               <Text style={{ fontSize: 15, color: '#368cb3', fontWeight: 'bold',textAlign: 'left',paddingLeft: 10,marginTop: 3}}>{item.unitDays}</Text>
//         </View>
//       </View>);
//     }
// }
// }

// return(
//   <View>
//     {check(value)}
//   </View>
//   );   
// }  

    const [enteredValue,setenteredValue] =useState('3310120');
    const [selectedNumber,setselectedNumber] = useState('');
    const numberInputHandler = inputText => {
      setenteredValue(inputText);
    };
 

    function proceed () {
      if(enteredValue.length<15) {
        alert('Enter CR Number')
      } else {
        var doctorName
        const URL = "https://nimsts.edu.in/HISServices/service/patient/desk/patdtl/crno?crno="+enteredValue+"&hcode=33101";
          try {
          (async () => {
          var content = await fetch(URL);
          var jsonDATA = await content.json()
          doctorName=jsonDATA.PAT[0].NAME
  
          await dispatch(
            user_Action.DoctorDATA(
              doctorName, 
              )
              )
          
          props.navigation.navigate('DoctorHome',
          {
            crnoKey: enteredValue, 
          })
            }
            )();
          } catch(e) {
            console.log(e);
          }
      }
    }

    // function proceed() {
    //   var doctorName
    //   const URL = "https://nimsts.edu.in/HISServices/service/patient/desk/patdtl/crno?crno="+enteredValue+"&hcode=33101";
    //     try {
    //     (async () => {
    //     var content = await fetch(URL);
    //     var jsonDATA = await content.json()
    //     doctorName=jsonDATA.PAT[0].NAME

    //     await dispatch(
    //       user_Action.DoctorDATA(
    //         doctorName, 
    //         )
    //         )
        
    //     props.navigation.navigate('DoctorHome',
    //     {
    //       crnoKey: enteredValue, 
    //     })
    //       }
    //       )();
    //     } catch(e) {
    //       console.log(e);
    //     }
    // }


  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>

        {isLoading ? (

        <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35}}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {props.navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../assets/toolbarlogo1.png')} />
        </View>  
        <View style={styles.contain}>
      
        <View style={{alignSelf: 'center', paddingLeft: 10, marginTop: 10}}>
            <RadioForm 
                radio_props= {department}
                onPress={(value) => {setValue(value)}}
                initial={0}
                selectedButtonColor='#368cb3'
                buttonColor='#368cb3'
                formHorizontal={true}
                buttonSize={12}
            />
        </View>


               
        <ActivityIndicator 
        color = '#368cb3' // color of your choice
        size = "large"
        style = {styles.activityIndicator}
           />
        </View> 
        </View>

        ) : (
            <>

        <View style={{flex: 1}}> 
        <View style={styles.contain}>
      

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35}}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {props.navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../assets/toolbarlogo1.png')} />
        </View> 

        <Text style={{fontSize: 25, color: '#368cb3', padding: 8, fontWeight: 'bold'}}>Scan Prescription</Text>
        <Text style={{fontSize: 17, color: 'black', padding: 8, fontWeight: 'bold'}}>Scan Prescription Type</Text>
        <View style={{alignSelf: 'center', paddingLeft: 10, marginTop: 18}}>
        <RadioForm 
          radio_props= {department}
          onPress={(value) => {setValue(value)}}
          initial={0}
          selectedButtonColor='#368cb3'
          buttonColor='#368cb3'
          formHorizontal={true}
          buttonSize={12}
            />
        </View>

        <TextInput  
            style={{height: 35,
            fontSize: 18, 
            color: 'black',
            width: '94%',
            borderColor:'#368cb3',
            borderBottomWidth: 2,
            backgroundColor: 'white',
            paddingLeft: 10,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: -20}}
            keyboardType='number-pad'
            onChangeText={numberInputHandler}
            value={enteredValue}/>

      <TouchableOpacity style={styles.appButtonContainer} 
        onPress={() => { proceed() }} >
        <Text style={styles.appButtonText}>Proceed</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.appButtonContainer} 
        onPress={() => { props.navigation.navigate({routeName: 'CodeScanner'}); }} >
        <Text style={styles.appButtonText}>Click here to scan code</Text>
        </TouchableOpacity>


    <View style={{flexDirection: 'row', flex: 1, 
    position: 'absolute', bottom: 0,
    height: 5,
    width: '100%',
    backgroundColor: 'white',
    marginHorizontal: 1,}}>
    </View>
 


    </View>
    </View>

    </>
    )}
    </View>
  );
}

export default AfterLoginScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //
  },
  container1: {
    alignSelf: 'center',
    padding: 5,
    margin: 5,
    width: '95%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C7C7C7',
    backgroundColor: 'white',
  },
  activityIndicator: {
    flex: 1,
    marginTop: -150
  },
  iconText2: { 
    alignSelf:'center', 
    fontSize: 13, 
    color: '#696969', 
    fontWeight: 'bold'
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
  iconText1: { 
    alignSelf:'center', 
    fontSize: 13, 
    color: '#368cb3', 
    fontWeight: 'bold'
  },
  appButtonContainer: {
    marginTop: '20%',
    backgroundColor: "#368cb3",
    borderRadius: 25,
    width: 260,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center'
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

