import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
 
const LeaveBalanceScreen = ({navigation}) => {

  const empno = 331010008122
  
  const URL = useSelector(state => state.URL.LeaveBalance);
  //const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/leave/leavebalance?empno=" + empno ;

  const [isLoading, setLoading] = useState(true);

  const [DATA, setDATA] = useState();
  
let content
let jsonDATA

useEffect(() => {
    (async () => {
    content = await fetch(URL)
    jsonDATA = await content.json()
    setDATA(jsonDATA);
    setLoading(false);
    console.log(jsonDATA[0].LEAVE_LNAME);
    console.log(jsonDATA[0].LEAVE_DAYS);
    }
    )();
  }, []);



const renderItem = ({ item }) => {
  return(
  <View>
  <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
  <View style={styles.container4}>
      <Text style={styles.boxText}>{item.LEAVE_LNAME} :-</Text>
  </View>
  <View style={styles.container4}>
      <Text style={styles.boxText}>{item.LEAVE_DAYS}</Text>
  </View>
  </View>
  </View>
);
}




  return (

    <SafeAreaView style={styles.contain}>
    <StatusBar style="auto"  backgroundColor= "#368cb3"/>
    {isLoading ? (
         
         <View>
         <View style={{
           width: 398,
           height: 80,
           backgroundColor: '#368cb3',
           // justifyContent: 'center',
           paddingTop: 38,
           marginTop: -45,
         }}>
 
         <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
         <View style={{flexDirection: 'row', marginLeft: 12}}>
         <Ionicons name="reorder-three" size={35} color="white" 
         />
         <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Leave Balance</Text>
         </View>
 
         <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
         <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
         <MaterialIcons name="home" size={24} color="white" />
         </View>
         </View>
         </View>
         
           <ActivityIndicator 
        color = '#368cb3'
        size = "large"
        style = {styles.activityIndicator}
           />
 
         </View>
        ) : (
          <>

    <View style={{
        width: '100%',
        height: 80,
        backgroundColor: '#368cb3',
        // justifyContent: 'center',
        paddingTop: 38,
        marginTop: -45,
        }}>

    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
    <View style={{flexDirection: 'row', marginLeft: 12}}>
    <Ionicons name="reorder-three" size={35} color="white" 
      onPress={() => {navigation.toggleDrawer();}} />
    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Leave Balance</Text>
    </View>

    <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
    <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
    <MaterialIcons name="home" size={24} color="white" 
    onPress={()=> navigation.navigate('EmployeeHome')}/>
    </View>
    </View>
    </View>

    <View style={{
        borderWidth: 4,
        borderRadius: 15,
        backgroundColor: 'white', 
        borderColor: '#368cb3',
        height: '90%',
        width: '93%',
        marginTop: 15}}>

    <View style={{marginTop: 23, marginLeft: 23}}>

      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>Leave Type</Text>
    </View>
    <View style={styles.container4}>
        <Text style={styles.boxText1}>Balance</Text>
    </View>
    </View>
    <FlatList data={DATA} renderItem={renderItem} keyExtractor={LEAVE_ID => LEAVE_ID.id} />

    </View>
    </View>
    </>
        )}
    </SafeAreaView>
  );
}
export default LeaveBalanceScreen;

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
      fontSize: 16.5,
      color: '#368cb3',
  },
  boxText1: {
    fontSize: 16.5,
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

