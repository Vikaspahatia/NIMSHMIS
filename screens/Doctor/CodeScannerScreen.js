// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';

// const CodeScannerScreen = props => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     //   if(data != null) {
//     //     props.navigation.navigate('DoctorHome', {
//     //         dataKey: data,
//     //       });
//     //   }
//     })();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     setData(data);
//   };
// console.log(data);




//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>


//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />

//       <TouchableOpacity style={styles.appButtonContainer}
//         onPress={() => { props.navigation.navigate('AfterLogin') } }>
//         <Text style={styles.appButtonText}>Go Back</Text>
//       </TouchableOpacity>


//       {scanned && 
//         props.navigation.navigate('DoctorHome', {  dataKey: data  })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   barCodeView: {
//     width: '100%', 
//     height: '50%', 
//     marginBottom: 40
//   },
//   appButtonContainer: {
//     marginTop: 380,
//     backgroundColor: "#368cb3",
//     borderRadius: 25,
//     width: 140,
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

// export default CodeScannerScreen;




import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as user_Action from '../../ServiceURL/actions/URL';
import { connect, useDispatch } from "react-redux"

const CodeScannerScreen = props => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    //   if(data != null) {
    //     props.navigation.navigate('DoctorHome', {
    //         dataKey: data,
    //       });
    //   }
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
  };
console.log(data);




  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  
  //const [doctorName, setdoctorName] = useState();
  function valuePassed(data) {
    // const [patientName,setpatientName] = useState();
    // const [age,setage] = useState();
    // const [gender,setgender] = useState();
    var doctorName
    const URL = "https://nimsts.edu.in/HISServices/service/patient/desk/patdtl/crno?crno="+data+"&hcode=33101";
      try {
      (async () => {
      var content = await fetch(URL);
      var jsonDATA = await content.json()
      doctorName=jsonDATA.PAT[0].NAME
      //setdoctorName(jsonDATA.PAT[0].NAME)
      console.log(doctorName, 'name')
      //console.log(jsonDATA.PAT[0].NAME);
      //age=jsonDATA.PAT[0].AGE
      //console.log(age,'age')
      //gender=jsonDATA.PAT[0].GEN
      // setpatientName(jsonDATA.PAT[0].NAME)
      // console.log(jsonDATA.PAT[0].NAME);
      // setage(jsonDATA.PAT[0].AGE)
      // setgender(jsonDATA.PAT[0].GEN)

      await dispatch(
        user_Action.DoctorDATA(
          doctorName, 
          )
          )
      
      props.navigation.navigate('DoctorHome',
      {
        //nameKey: patientName,
        crnoKey: data, 
      })
      //console.log('doctak ko naam', doctorName);
      //console.log('here')
          
        }
        )();
      } catch(e) {
        console.log(e);
      }

  }

  return (
    <View style={styles.container}>


      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <TouchableOpacity style={styles.appButtonContainer}
        onPress={() => { props.navigation.navigate('AfterLogin') } }>
        <Text style={styles.appButtonText}>Go Back</Text>
      </TouchableOpacity>


      {scanned && 
      valuePassed(data)
        // props.navigation.navigate('DoctorHome', {  dataKey: data  })
      }

        {/* // dispatch(
        //     user_Action.CRpatientDATA(
        //       patientName, 
        //       crno,
        //       mobileNumber
        //     )
        //     ) */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  barCodeView: {
    width: '100%', 
    height: '50%', 
    marginBottom: 40
  },
  appButtonContainer: {
    marginTop: 380,
    backgroundColor: "#368cb3",
    borderRadius: 25,
    width: 140,
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

export default CodeScannerScreen;