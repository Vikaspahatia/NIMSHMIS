import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
 
const LeaveProcessesScreen = ({navigation}) => {
 
    const URL = useSelector(state => state.URL.LeaveProcesses);
    //const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/leave/filteredleaverequest?crno=331010008125";
    const [isLoading, setLoading] = useState(true);
    const [DATA, setDATA ] = useState(); 
    const [dataLenght, setdataLenght] = useState();
    var content
    var jsonDATA
    useEffect(() => {
    (async () => {
    content = await fetch(URL);
    jsonDATA = await content.json()
    setDATA(jsonDATA);
    setdataLenght(jsonDATA.length)
    //console.log(jsonDATA.length)
    setLoading(false);
    }
    )();
    }, []);

    function Status(value) {
        if(value==10) {
            return (<Text>In Process</Text>);
        } else if( value==30 ) {
            return (<Text>Approved</Text>);   
        }
    }
    const Item = ({ title }) => (
    <View>
        <Text style={styles.title}>{title}</Text>
    </View>
    );
    const renderItem = ({ item }) => {
    return(
    
        <View style={styles.container1}>
            <View style={{flex:1, flexDirection: 'row'}}>
            <View style={{flex: 1, paddingLeft: 10, marginTop: 10}}>
                <Text style={styles.boxText}>Leave Req No. :</Text>
                <Text style={styles.boxText}>Submission Date:</Text>
                <Text style={styles.boxText}>From:</Text>
                <Text style={styles.boxText}>To:</Text>
                <Text style={styles.boxText}>Status:</Text>
            </View>
            <View style={{flex: 1, paddingLeft: 10, marginTop: 10}}>
            <Item title={item.COMM_REQ_NO}/>
            <Item title={item.SUB_DATE} /> 
            <Item title={item.FROM_DATE} />
            <Item title={item.TO_DATE} /> 
            <Item title={Status(item.LEAVE_FLAG_ID)} />
            </View>
            </View>

        <View style={{alignSelf: 'center', paddingBottom: 7}}>
        <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>View</Text>
        </TouchableOpacity>
        </View>
        

    
        
        </View>
    );
}




function ApprovedScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#368cb3' }}>
        <Text style={{fontSize: 21}}>No Data</Text>
      </View>
    );
  }
  
function InProcessScreen() {
    return (<View style={{flex:1,  alignItems: 'center', backgroundColor: '#368cb3' }}>
      {(dataLenght==0) ? (<View style={{flex: 1, width: '100%'}}>
      <Text style={{alignSelf:'center', marginTop: 260, fontSize: 21}}>No Data</Text>
      </View>
          ):(
            <View style={{flex: 1, width: '90%'}}>
              <FlatList data={DATA} renderItem={renderItem} keyExtractor={SUB_DATE => SUB_DATE.id} />

      </View>)
    }
      {/* // <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#368cb3' }}>
      //     <View style={{ width: '90%' }}>
      //           <FlatList data={DATA} renderItem={renderItem} keyExtractor={SUB_DATE => SUB_DATE.id} />
      //     </View>
      // </View> */}
    
      </View>);
  }
  
function RejectedScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#368cb3'}}>
        <Text style={{fontSize: 21}}>No Data</Text>
      </View>
    );
  }

const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>
        
    <View style={{
        width: '100%',
        height: 80,
        backgroundColor: '#368cb3',
        paddingTop: 38,
        marginTop: -40,
    }}>
    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
    <View style={{flexDirection: 'row', marginLeft: 12}}>
    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 5, padding: 5}}>Leave</Text>
    </View>
    <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
    <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="#368cb3" />
    <MaterialIcons name="home" size={24} color="white" 
    onPress={()=> navigation.navigate('EmployeeHome')}/>
    </View>
    </View>
    </View>

    <View style={{ flexGrow: 1, width: '100%' }}>


    <View style={{flex:1}}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Approved" component={ApprovedScreen} />
        <Tab.Screen name="In Process" component={InProcessScreen} />
        <Tab.Screen name="Rejected" component={RejectedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>

    </View>

    </View>
    );
}
export default LeaveProcessesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#368cb3',
    },
    container1: {
        alignSelf: 'center',
        backgroundColor: '#f6beac',
        height: 150,
        width: '100%',
        borderRadius: 5,
        margin: 8,
        },
    boxText: {
        fontSize: 15,
        color: 'black',
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
      width: 100,
      paddingVertical: 10,
      paddingHorizontal: 1
    },
    appButtonText: {
      marginTop: -4,
      //height: 16,
      fontSize: 14,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    title: {
        fontSize: 15,
        color: 'black',
    },
    scene: {
        flex: 1,
      },
});