import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback }  from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator, Picker, Modal, Platform } from 'react-native';
import axios from "axios";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

const EPFScreen = ({navigation}) => {

  const employee = useSelector(state => state.URL.emno);
  const crnum = useSelector(state => state.URL.crno);
  const username = useSelector(state => state.URL.userdisplayname);
  const EMP_PANNO = navigation.getParam('EMP_PANNO');
  console.log(employee,'em');
  var empno = 331010008122;
  const [isLoading, setLoading] = useState(true); 
  const [DATA, setDATA] = useState();
  const [DATA1, setDATA1] = useState();
  const [value, setValue] = useState("2020-2021"); //latest value in the json
  var sum = 0;
  const [a, setA] =useState();
  const [b, setB] =useState();
  const [totalVal, setTotalVal] = useState();
  const [pickerModal, setPickerModal] = useState(false);


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
    return fetch('https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/epfAccSub?empno='+employee+'&fromyear='+start+'&toyear='+end);
  
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }  
  }).then(function (userData) {
    setDATA(post);
    setDATA1(userData);
    //console.log(userData.length);
    setLoading(false);
  }).catch(function (error) {
    //console.warn(error);
  });  
  }, [value]);
 
//used to clean up the useEffect  
// useEffect(() => {
//   return () => {
//     console.log("cleaned up");  
//   };
// }, []);



var count = 1;
var total = 0;
var totalA = 0;
var totalB = 0;
const renderItem = ({ item }) => {

// total = total + parseInt(item.PARA_AMT);
// setTotalVal(total);
//function check(code) {

//   if(code === "VOLUNTARY CONTRIBUTION FUND") {  
//     //console.log('epf  =  ',item.PARA_CODE)    
//     totalA = totalA + parseInt(item.PARA_AMT);
//   } else {
//     return true; 
//   }
//   if (code === "VOLUNTARY CONTRIBUTION FUND") {
//     //console.log('VCF  =  ',item.PARA_CODE) 
//     totalB = totalB + parseInt(item.PARA_AMT);
//   }  else {
//     return true; 
//   }
// }

  // console.log('totalA  =  ', totalA);
  // console.log('totalB  =  ', totalB);
  console.log(item.PARA_CODE,' = ',count);
  count++;
  return(
    <View>
      {/* {check(item.PARA_CODE)} */}
    </View>
    );
}



// for( var i=0; i<12;i++) {
//   totalA = totalA + parseInt(DATA1[i].PARA_AMT);
// }

console.log(DATA1,'1st paracode');

var start = value.substring(0, 4);
var end = value.substring(9, 5);

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
        marginTop: 5,
        paddingBottom: 10}}>

    <View style={{marginTop: 2,}}>

    <Text style={{
        alignSelf: 'center', 
        fontSize: 21,
        fontWeight: 'bold',
        color: '#368cb3',
        marginBottom: 5,}}>EPF Details</Text>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Employee Name</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText}>{username}</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>UAN No.</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText}>{crnum}</Text>
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
        marginBottom: 10}}>Financial Year</Text>
    <View style={{flexDirection: 'row', alignContent: 'space-around'}}>
    <View style={{flex: 1}}>
        <Text style={styles.boxText}>Financial Year</Text>
    </View>
    <View style={{flexDirection: 'row', flex:1,  paddingRight: 0}}>
    <TouchableOpacity
      style={{width: 150, height: 30,}}
      onPress={() => setPickerModal(!pickerModal)}><Text >{value}</Text></TouchableOpacity>
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
            selectedValue= {value} // default value
            onValueChange={(itemValue, itemIndex)=> setValue(itemValue)}>
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
        marginBottom: 10}}>Financial Year</Text>
    <View style={{flexDirection: 'row', alignContent: 'space-around'}}>
    <View style={{flex: 1}}>
        <Text style={styles.boxText}>Financial Year</Text>
    </View>
    <View style={{flex: 1, marginRight: -15, marginTop: -15}}>
    <Picker
        style={{width: '90%'}}
        selectedValue= {value} // default value
        onValueChange={(itemValue, itemIndex)=> setValue(itemValue)}>
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
        paddingBottom: 10}}>
    <View style={{marginTop: 1,}}>
    <Text style={{
        alignSelf: 'center', 
        fontSize: 21,
        fontWeight: 'bold',
        color: '#368cb3',
        marginBottom: 5,}}>Subscription</Text>




    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5}}></View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
          <Text style={styles.boxText}>Voluntary Contribution</Text>
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
          <Text style={styles.boxText}>Employee Share</Text>
      </View>
      <View style={{flex: 4, marginRight: 3, alignItems: 'flex-end'}}>
          <Text style={styles.boxText}>Employer Share</Text>
      </View>
    </View>


    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[2].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[14].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[2].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[2].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[3].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[15].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[3].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[3].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[4].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[16].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[4].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[4].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[5].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[17].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[5].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[5].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[6].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[18].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[6].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[6].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[7].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[19].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[7].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[7].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[8].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[19].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[8].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[8].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[9].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[21].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[9].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[9].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[10].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[22].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[10].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[10].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[11].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[23].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[11].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[11].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[0].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[12].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[0].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[0].PARA_AMT)}</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 5,}}>
          <Text style={styles.boxText}>{moment().month((DATA1[1].PBR_MONTH)-1).format("MMMM")}</Text>
      </View>
      <View style={{flex: 5, alignItems: 'flex-end'}}>
            {/* <Text style={styles.boxText}>{Math.ceil(DATA1[13].PARA_AMT)}</Text> */}
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[1].PARA_AMT)}</Text>
      </View>
      <View style={{flex: 4, marginRight: 5, alignItems: 'flex-end'}}>
            <Text style={styles.boxText}>{Math.ceil(DATA1[1].PARA_AMT)}</Text>
      </View>
    </View>


    <FlatList 
      data={DATA1} 
      renderItem={renderItem}
      keyExtractor={item => item.id} 
    /> 


    </View>
    </View>



    <View style={{
        borderWidth: 4,
        borderRadius: 15,
        backgroundColor: 'white', 
        borderColor: '#368cb3',
        //height: '15%',
        width: '88%',
        marginBottom: 10,
        paddingBottom:7}}>

    <View style={{marginTop: 5}}>

    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Voluntary Contribution(A)</Text>
    </View>
    <View style={{flex: 1, marginRight: -170, marginTop: 0}}>
        <Text style={styles.boxText}>9</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Employee Share(B)</Text>
    </View>
    <View style={{flex: 1, marginRight: -170, marginTop: 0}}>
        <Text style={styles.boxText}>5</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Employee Share(C)</Text>
    </View>
    <View style={{flex: 1, marginRight: -170, marginTop: 0}}>
        <Text style={styles.boxText}>6</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText}>Total(A+B+C)</Text>
    </View>
    <View style={{flex: 1, marginRight: -170, marginTop: 0}}>
        <Text style={styles.boxText}>123</Text>
    </View>
    </View>
    </View>
    </View>

    </>
        )}
    </SafeAreaView>
 );
}
export default EPFScreen;

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
      fontSize: 14,
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
  }
});

