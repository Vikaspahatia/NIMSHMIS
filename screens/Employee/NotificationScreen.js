import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Linking, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';


const NotificationScreen = ({navigation}, {props}) => {

//   const URL = useSelector(state => state.URL.PaySlip);
//   const empid = 331010008122;
//   //const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/payslip2?empno=331010008122";
//   const [isLoading, setLoading] = useState(true);
//   const [DATA, setDATA ] = useState(); 
//   var content
//   var jsonDATA
//   useEffect(() => {
//     (async () => {
//     content = await fetch(URL);
//     jsonDATA = await content.json()
//     setDATA(jsonDATA);
//     setLoading(false);
//     }
//     )();
//   }, []);


// const Item = ({ title }) => (
//     <View>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );


// const renderItem = ({ item }) => {
//     //console.log(moment(item.MONTH).format("MMMM"));
//     //console.log(moment(item.MONTH).format("YYYY"));

//     const URLL = "https://nimsts.edu.in/HISPayroll/paybill/reports/ReportSalarySlip.action?mode=print&empNo="+empid+"&month="+ moment(item.MONTH).format("MMMM") +"&year="+ moment(item.MONTH).format("YYYY") +"&hospitalCode=33101";
//     return(
        
//     <View>

//     {/* box here */}
//     <View style={styles.container1}>
//     <View style={{marginTop: 8, marginLeft: 18}}>
//     <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//     <View style={styles.container4}>
//         <Text style={styles.boxText}>Month:</Text>
//     </View>
//     <View style={styles.container4}>
//         <Item title={moment(item.MONTH).format("MMMM YYYY")}/>
//     </View>
//     </View>
//     <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//     <View style={styles.container4}>
//         <Text style={styles.boxText}>Earnings:</Text>
//     </View>
//     <View style={styles.container4}>
//         <Item title={item.EARNING}/>
//     </View>
//     </View>
//     <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//     <View style={styles.container4}>
//         <Text style={styles.boxText}>Deductions:</Text>
//     </View>
//     <View style={styles.container4}>
//         <Item title={item.DEDUCT}/>
//     </View>
//     </View>
//     <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
//     <View style={styles.container4}>
//         <Text style={styles.boxText}>Net Earning:</Text>
//     </View>
//     <View style={styles.container4}>
//         <Item title={(item.EARNING - item.DEDUCT)}/>
//     </View>
//     </View>
//     </View>

//     <View style={{justifyContent: 'center', alignSelf: 'center'}}>
//     <TouchableOpacity style={styles.appButtonContainer}
//     onPress={ ()=>{ Linking.openURL( URLL )}}>
//     <Text style={styles.appButtonText}>Download</Text>
//     </TouchableOpacity>
//     </View>

    
//     </View>

//     </View>
//   );
// }

const [text,setText] =useState('')

getData = async () => {
    try  {
        const value = await AsyncStorage.getItem('text')
        if(value !== null) {
          setText(value);
          console.log("value = " + value);
        }
    } catch (e) {
      console.log(e)
    }
  }



    return (
        <View style={styles.container}>

<StatusBar style="auto"  backgroundColor= "#368cb3"/>
        
    <View style={{
        width: '100%',
        height: 80,
        backgroundColor: '#368cb3',
        paddingTop: 38,
        marginTop: -40,
        marginBottom: 22,
    }}>
    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
    <View style={{flexDirection: 'row', marginLeft: 12}}>
    <Ionicons name="reorder-three" size={35} color="white" 
      onPress={() => {navigation.toggleDrawer();}} />
    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Notifications</Text>
    </View>
    <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
    <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
    <MaterialIcons name="home" size={24} color="white" 
    onPress={()=> navigation.navigate('EmployeeHome')}/>
    </View>
    </View>
    </View>

    {/* <View style={{ flexGrow: 1, width: '100%', paddingBottom: 100 }}>
    <FlatList data={DATA} renderItem={renderItem} keyExtractor={PBR_MONTH => PBR_MONTH.id} />
    </View> */}

    <View style={{height: '30%', width:'90%', alignSelf: 'center', backgroundColor: 'white', borderRadius: 8}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{ fontSize: 16, color: '#368cb3', paddingLeft: 50, marginTop:25, fontWeight: 'bold'}}>Inprocess Leaves :</Text>
            <Text style={{ fontSize: 16, color: 'red', paddingLeft: 50, marginTop:25, fontWeight: 'bold'}}>7</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{ fontSize: 16, color: '#368cb3', paddingLeft: 50, marginTop:18, fontWeight: 'bold'}}>Approved Leaves :</Text>
            <Text style={{ fontSize: 16, color: 'green', paddingLeft: 50, marginTop:18, fontWeight: 'bold'}}>8</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{ fontSize: 16, color: '#368cb3', paddingLeft: 50, marginTop:20, fontWeight: 'bold'}}>Rejected Leaves :</Text>
            <Text style={{ fontSize: 16, color: 'orange', paddingLeft: 50, marginTop:20, fontWeight: 'bold'}}>9</Text>
        </View>
        <View><Text style={{fontSize:18, marginTop: 20, alignSelf: 'center'}}>No Leave Notifications</Text></View>
    </View>


        </View>
    );
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#368cb3',
    },
    container1: {
        alignSelf: 'center',
        backgroundColor: '#f1f5f9',
        height: 130,
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e4e6e8',
        margin: 8,
        },
    boxText: {
        fontSize: 14,
        color: '#368cb3',
    },
    container4: {
      flex: 1,
      //margin: 5,
      //padding: 10
    },
    appButtonContainer: {
      marginTop: 10,
      backgroundColor: "#368cb3",
      borderRadius: 25,
      height: 30,
      width: 140,
      paddingVertical: 10,
      paddingHorizontal: 1
    },
    appButtonText: {
      marginTop: -5,
      //height: 16,
      fontSize: 14,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    title: {
        fontSize: 14,
        color: '#368cb3',
    }
});