import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback }  from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator, Picker, Modal, Platform, Linking, groups } from 'react-native';
import axios from "axios";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
 
const TaxScreen = ({navigation}) => {

  const employee = useSelector(state => state.URL.emno);
  const crnum = useSelector(state => state.URL.crno);
  const username = useSelector(state => state.URL.userdisplayname);
  const EMP_PANNO = navigation.getParam('EMP_PANNO');
  //console.log('EMP_PANNO ', EMP_PANNO);
  var empno = 331010008122;
  const [isLoading, setLoading] = useState(true); 
  const [DATA, setDATA] = useState();
  const [DATA1, setDATA1] = useState();
  const [spinValue, setSpinValue] = useState("2020-2021"); //latest value in the json
  var sum = 0;
  var start = spinValue.substring(0, 4);
  var end = spinValue.substring(9, 5);
  //console.log(spinValue)
  // console.log('start',start);
  // console.log('end',end);
  const [totalVal, setTotalVal] = useState();
  const [length, setLength] = useState('');
  const [pickerModal, setPickerModal] = useState(false);
  const URLL = 'https://nimsts.edu.in/HISPis/pis/pr/reports/printItAnnualStatement.action?mode=itForm&empNumber='+employee+'&assYear='+start+'-'+end+'&empPanNumber='+EMP_PANNO+'&userName=adm_nims'
  
  const monthArr = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"];
  const amountArr = ["0", "0", "0", "0"];

  var total = 0;
  
  // function display(){
  //   //const monthArr = ["March", "April", "May", "June"];

  //   let p = 12 - length;
  //   let i = length;
  //   for(i;i<p;i++) {
  //     console.log(p);
  //     return <View><Text>{monthArr[i]}</Text></View>
  //   }
  // }

  const renderItem = ({ item }) => {
    total = total+parseInt(item.PARA_AMT);
    //setTotalVal(total);
    
    //console.log(total);
    return(
    <View>
     <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
       <View style={styles.container4}>
           <Text style={styles.boxText}>{moment().month((item.PBR_MONTH)-1).format("MMMM")}</Text>
       </View>
       <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
           <Text style={styles.boxText}>{Math.ceil(item.PARA_AMT)}</Text>
     </View>
     </View>
    </View>
  );
  }


  useEffect(() => {
    var post;
  fetch("https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/epfAcc?empno=" + employee )
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }  
  }).then(function (data) {

    post = data;
    //console.log(start, end);
    return fetch('https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/incometaxdetailsnew?fromyear='+start+'&toyear='+end+'&empno='+employee);
  
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }  
  }).then(function (userData) {
    setDATA(post);
    setDATA1(userData);
    // setLength(userData.length);
    
    setLoading(false);
  }).catch(function (error) {
    console.warn(error);
  });  
  }, [ spinValue ]);
 
//used to clean up the useEffect  
// useEffect(() => {
//   return () => {
//     console.log("cleaned up");  
//   };
// }, []);


// const func = useCallback(() => {
//   var post;  
//   fetch("https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/epfAcc?empno=" + empno ).then(function (response) {
//     if (response.ok) {
//       return response.json();  
//     } else {
//       return Promise.reject(response);  
//     }
//   }).then(function (data) {

//     post = data;  
// console.log(start, end);
//     return fetch('https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/incometaxdetailsnew?fromyear='+start+'&toyear='+end+'&empno='+331010008122);
  
//   }).then(function (response) {
//     if (response.ok) {
//       return response.json();  
//     } else {
//       return Promise.reject(response);  
//     }
//   }).then(function (userData) {
//     setDATA(post);  
//     setDATA1(userData)
//     setLoading(false);
//     // console.log(post[0].FIN_YEAR);
//     // console.log(userData[4].PBR_DATE);
//   }).catch(function (error) {
//     console.warn(error);  
//   });
// },[start, end])


// useEffect(() => {
//   func();  
// }, []);




// function check(value) {
//   switch(value) {
//     case 2: 
//     {
//       return (
//       <View>
//         <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[0].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[0].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[1].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[1].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>May</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>June</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>July</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View> 

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>August</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>September</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>Obtober</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>November</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>December</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>February</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>January</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>0</Text>
//         </View>
//       </View>  
//       </View>
//       );
//     }

//     case 12: 
//     {
//       return (
//       <View>
//         <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[2].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[2].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[3].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[3].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[4].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[4].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[5].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[5].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[6].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[6].PARA_AMT)}</Text>
//         </View>
//       </View> 

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[7].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[7].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[8].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[8].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[9].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[9].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[10].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[10].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[11].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[11].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[0].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[0].PARA_AMT)}</Text>
//         </View>
//       </View>

//       <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//         <View style={styles.container4}>
//             <Text style={styles.boxText}>{moment().month((DATA1[1].PBR_MONTH)-1).format("MMMM")}</Text>
//         </View>
//         <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
//             <Text style={styles.boxText}>{Math.ceil(DATA1[1].PARA_AMT)}</Text>
//         </View>
//       </View> 
//       </View>);
//     }
  


// }
// }


  




  return (

    <SafeAreaView style={styles.contain}>
    <StatusBar style="auto"  backgroundColor= "#368cb3"/>
    {isLoading ? (
         <View>
           <ActivityIndicator 
        color = '#368cb3'
        size = "large"
        style = {styles.activityIndicator}
           />
 
         </View>
        ) : (
          <>


    <View style={{
        borderWidth: 4,
        borderRadius: 15,
        backgroundColor: 'white', 
        borderColor: '#368cb3',
        //height: '15%',
        width: '93%',
        marginBottom: 15,
        paddingBottom: 10,
        marginTop: 5}}>

    <View style={{marginTop: 2,}}>

    <Text style={{
        alignSelf: 'center', 
        fontSize: 21,
        fontWeight: 'bold',
        color: '#368cb3',
        marginBottom: 5,}}>IT Deduction</Text>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Employee Number</Text>
    </View>
    <View style={styles.container4}>
        <Text style={{fontSize: 15,
      color: '#368cb3',
      marginLeft: 9,
      marginLeft: -20}}>{crnum}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Employee Name</Text>
    </View>
    <View style={styles.container4}>
        <Text style={{fontSize: 15,
      color: '#368cb3',
      marginLeft: 9,
      marginLeft: -20}}>{username}</Text>
    </View>
    </View>
    </View>
    </View>


  {(Platform.OS == 'ios') ? (
     <View style={{
        borderWidth: 4,
        borderRadius: 15,
        backgroundColor: 'white', 
        borderColor: '#368cb3',
        //height: '12.5%',
        width: '93%',
        marginBottom: 15}}>
    <View style={{marginTop: 1,}}>
    <Text style={{
        alignSelf: 'center', 
        fontSize: 21,
        fontWeight: 'bold',
        color: '#368cb3',
        marginBottom: 10}}>Income Tax Details</Text>
    <View style={{flexDirection: 'row', alignContent: 'space-around'}}>
    <View style={{flex: 1}}>
        <Text style={styles.boxText}>Financial Year</Text>
    </View>
    <View style={{flexDirection: 'row', flex:1,  paddingRight: 0}}>
    <TouchableOpacity
      style={{width: 150, height: 30,}}
      onPress={() => setPickerModal(!pickerModal)}><Text >{spinValue}</Text></TouchableOpacity>
      <AntDesign name="caretdown" size={12} color="grey" style={{marginTop: 2}}/>
    </View>
      <Modal
        animationType= "slide"
        transparent={true}
        visible={pickerModal}  >
      <View style={{flex: 1}}>
      <View style={{width: '100%', height: '35%', position: 'absolute', bottom: 0, backgroundColor: 'white'}}>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20, marginBottom: 20}} onPress={() => setPickerModal(false)}>
          <Text style={{fontSize: 18}}>CLICK HERE TO SELECT</Text>
        </TouchableOpacity>
        <Picker
            style={{alignSelf: 'center', width: '100%', height: '50%'}}
            selectedValue= {spinValue} // default value
            onValueChange={(itemValue, itemIndex)=> setSpinValue(itemValue)}>
              {DATA.map((item, key)=>(
                <Picker.Item label={item.FIN_YEAR} value={item.FIN_YEAR} key={item.FIN_YEAR} />)
                )}
        </Picker>
      </View>
      </View>
      </Modal>
    </View>
    </View>
    </View>

      ) : ( 

      <View style={{
        borderWidth: 4,
        borderRadius: 15,
        backgroundColor: 'white', 
        borderColor: '#368cb3',
        height: '12.5%',
        width: '93%',
        marginBottom: 15}}>
    <View style={{marginTop: 1,}}>
    <Text style={{
        alignSelf: 'center', 
        fontSize: 21,
        fontWeight: 'bold',
        color: '#368cb3',
        marginBottom: 10}}>Income Tax Details</Text>
    <View style={{flexDirection: 'row', alignContent: 'space-around'}}>
    <View style={{flex: 1}}>
        <Text style={styles.boxText}>Financial Year</Text>
    </View>
    <View style={{flex: 1, marginRight: -29, marginTop: -15}}>
    <Picker
        style={{width: '90%'}}
        selectedValue= {spinValue} // default value
        onValueChange={(itemValue, itemIndex)=> setSpinValue(itemValue)}>
            {DATA.map((item, key)=>(
            <Picker.Item label={item.FIN_YEAR} value={item.FIN_YEAR} key={item.FIN_YEAR} />)
            )}
    </Picker>
    </View>
    </View>
    </View>
    </View>
      )}



    <View style={{
        borderWidth: 4,
        borderRadius: 15,
        backgroundColor: 'white', 
        borderColor: '#368cb3',
        //height: '43%',
        width: '93%',
        marginBottom: 18,
        paddingBottom: 10,}}>
    <View style={{marginTop: 1,}}>
    <Text style={{
        alignSelf: 'center', 
        fontSize: 21,
        fontWeight: 'bold',
        color: '#368cb3',
        marginBottom: 5,}}>Tax Distribution</Text>

      <FlatList 
      data={DATA1} 
      renderItem={renderItem} 
      keyExtractor={item => item.PBR_MONTH} 
      />
 
      {/* {check(2)} */}


{/* 
      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[2].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[2].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[3].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[3].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[4].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[4].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[5].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[5].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[6].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[6].PARA_AMT)}</Text>
        </View>
      </View> 

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[7].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[7].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[8].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[8].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[9].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[9].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[10].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[10].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[11].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[11].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[0].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[0].PARA_AMT)}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={styles.container4}>
            <Text style={styles.boxText}>{moment().month((DATA1[1].PBR_MONTH)-1).format("MMMM")}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingRight: 10}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[1].PARA_AMT)}</Text>
        </View>
      </View> */}



    </View>
    </View>



    <View style={{
        borderWidth: 4,
        borderRadius: 15,
        backgroundColor: 'white', 
        borderColor: '#368cb3',
        height: '7.5%',
        width: '88%',
        marginBottom: 10}}>

    <View style={{marginTop: 15}}>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Total tax to be deducted</Text>
    </View>
    <View style={{flex: 1, marginRight: -170, marginTop: 0}}>
        <Text style={styles.boxText}>{total}</Text>
    </View>
    </View>
    </View>


    </View>

    <TouchableOpacity style={styles.appButtonContainer}
    onPress={ ()=>{ Linking.openURL( URLL )}}
    >
    <Text style={styles.appButtonText}>VIEW IT ANNUAL STATEMENT</Text>
    </TouchableOpacity>

    </>
        )}
    </SafeAreaView>
 );
}
export default TaxScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  
  },
  container: {
    //flexDirection: 'column',
    width: '75%',
    height: 48,
    backgroundColor: '#368cb3',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  container1: {
    alignItems: 'center',
    padding: 15,
    margin: 7,
    height: 120,
    width: 110,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: '#3680aa',
    backgroundColor: '#3680aa',
  },
  container2: {
    alignItems: 'center',
    padding: 10,
    height: 58,
    width: '100%',
    backgroundColor: 'white',
    marginHorizontal: 1,
  },
  container3: {
    alignItems: 'center',
    padding: 8,
    height: 58,
    width: '50%',
    backgroundColor: '#f0f0f0',
    marginHorizontal: 1,
  },
  container4: {
    flex: 1,
  },
  texted: {
    marginLeft: 15,
    color: 'white',
    fontSize:18,
    alignSelf: 'center',
    fontWeight: 'bold',
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
    fontSize: 18, 
    color: 'white', 
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
  boxText: {
      fontSize: 15,
      color: '#368cb3',
      marginLeft: 9,
  },
  boxText1: {
    fontSize: 15,
    color: '#368cb3',
    fontWeight: 'bold',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  },
  appButtonContainer: {
    marginTop: 10,
    backgroundColor: "#368cb3",
    borderRadius: 25,
    //height: 30,
    //width: 140,
    paddingVertical: 10,
    paddingHorizontal: 1,
  },
  appButtonText: {
    marginTop: 0,
    //height: 16,
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingRight: 15,
    paddingLeft: 15
  },
});

