import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Picker, Modal, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
 
const LeaveStatusScreen = ({navigation}) => {


    const employee = useSelector(state => state.URL.emno);
    //console.log(employee);
    //const URL = useSelector(state => state.URL.LeaveProcesses);
    const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/leave/leaverequest?crno="+employee;
    const [isLoading, setLoading] = useState(true);
    const [DATA, setDATA ] = useState(); 
    //const [value, setValue] = useState("2020-2021"); //latest value in the json
    const [selectedValue, setSelectedValue] = useState("java");
    const [month1, setMonth1] = useState("Dec");
    const [month2, setMonth2] = useState("Mar");
    const [year1, setYear1] = useState("2020");
    const [year2, setYear2] = useState("2021");
    const [pickerModal1, setPickerModal1] = useState(false);
    const [pickerModal2, setPickerModal2] = useState(false);
    const [pickerModal3, setPickerModal3] = useState(false);
    const [pickerModal4, setPickerModal4] = useState(false);

    var content
    var jsonDATA
    useEffect(() => {
    (async () => {
    content = await fetch(URL);
    jsonDATA = await content.json()
    setDATA(jsonDATA);
    setLoading(false);
    console.log(DATA)
    }
    )();
    }, []);
    var color;
    function Status(value) {
        if(value==10) {
            return (<Text>In Process</Text>);
        } else if( value==30 ) {
            return (<Text>Approved</Text>);   
        } else if( value==50 ) {
            return (<Text>Rejected</Text>);   
        }
    }
    
    
    
    const Item = ({ title }) => (
        <View>
        <Text style={styles.title}>{title}</Text>
    </View>
    );
    const renderItem = ({ item }) => {
        function check(value) {
            if(value==10) {
                return '#ffbda7'; //yellow
            } else if( value==30 ) {
                return  '#a4ff7e'; //green  
            } else if( value==50 ) {
                return  '#fe7f7e'; //red 
            }
        }
    return(
        <View style={{
            alignSelf: 'center',
            backgroundColor: check(item.LEAVE_FLAG_ID),
            height: 130,
            width: '100%',
            borderRadius: 5,
            margin: 6,
        }}>
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex: 1, paddingLeft: 10, marginTop: 10}}>
                    <Text style={styles.boxText}>Common Request No.</Text>
                    <Text style={styles.boxText}>Submission Date</Text>
                    <Text style={styles.boxText}>From Date</Text>
                    <Text style={styles.boxText}>To Date</Text>
                    <Text style={styles.boxText}>Leave Status</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 10, marginTop: 10}}>
                    <Item title={item.COMM_REQ_NO}/>
                    <Item title={item.SUB_DATE} /> 
                    <Item title={item.FROM_DATE} />
                    <Item title={item.TO_DATE} /> 
                    <Item title={Status(item.LEAVE_FLAG_ID)} />
                </View>
            </View>
        </View>
    );
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
    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Leave Status</Text>
    </View>
    <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
    <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
    <MaterialIcons name="home" size={24} color="white" 
    onPress={()=> navigation.navigate('EmployeeHome')}/>
    </View>
    </View>
    </View>

    


    {(Platform.OS == 'android') ? (

    <View style={{ width: '100%'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'white', marginLeft: 8}}>Mn: </Text>
        <View style={{flex: 1, marginTop: -10, width: 60, height: 33, backgroundColor: 'white', borderRadius: 7}}>
        <Picker
        selectedValue={month1}
        style={{ height: 70, width: '100%', color: 'black', marginTop: -18 }}
        onValueChange={(itemValue, itemIndex) => setMonth1(itemValue)}>
        <Picker.Item label="Jan" value="Jan" />
        <Picker.Item label="Feb" value="Feb" />
        <Picker.Item label="Mar" value="Mar" />
        <Picker.Item label="Apr" value="Apr" />
        <Picker.Item label="May" value="May" />
        <Picker.Item label="Jun" value="June" />
        <Picker.Item label="Jul" value="July" />
        <Picker.Item label="Aug" value="Aug" />
        <Picker.Item label="Sep" value="Sept" />
        <Picker.Item label="Oct" value="Oct" />
        <Picker.Item label="Nov" value="Nov" />
        <Picker.Item label="Dec" value="Dec" />
        </Picker>
        </View>
        <Text style={{color: 'white', marginLeft: 8}}>Yr: </Text>
        <View style={{flex: 1, marginTop: -10, width: 100, height: 33, backgroundColor: 'white', borderRadius: 7, marginRight: 10}}>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 100, color: 'black', marginTop: -9}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="2017" value="2017" />
        <Picker.Item label="2018" value="2018" />
        <Picker.Item label="2019" value="2019" />
        <Picker.Item label="2020" value="2020" />
        <Picker.Item label="2021" value="2021" />
        </Picker>
        </View>
    <View style={{
        height: 80, width: 55, 
        marginRight: 10, marginTop: -10, 
        backgroundColor: 'white',
        borderRadius: 7,
        justifyContent:'center', alignItems: 'center'}}>
            <Octicons name="search" size={30} color="black" />
        </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: -23}}>
        <Text style={{color: 'white', marginLeft: 8}}>Mn: </Text>
        <View style={{flex: 1, marginTop: -10, width: 60, height: 33, backgroundColor: 'white', borderRadius: 7}}>
        <Picker
        selectedValue={month2}
        style={{ height: 70, width: '100%', color: 'black', marginTop: -18 }}
        onValueChange={(itemValue, itemIndex) => setMonth2(itemValue)}>
         <Picker.Item label="Jan" value="Jan" />
        <Picker.Item label="Feb" value="Feb" />
        <Picker.Item label="Mar" value="Mar" />
        <Picker.Item label="Apr" value="Apr" />
        <Picker.Item label="May" value="May" />
        <Picker.Item label="Jun" value="June" />
        <Picker.Item label="Jul" value="July" />
        <Picker.Item label="Aug" value="Aug" />
        <Picker.Item label="Sep" value="Sept" />
        <Picker.Item label="Oct" value="Oct" />
        <Picker.Item label="Nov" value="Nov" />
        <Picker.Item label="Dec" value="Dec" />
        </Picker>
        </View>
        <Text style={{color: 'white', marginLeft: 8}}>Yr: </Text>
        <View style={{flex: 1, marginTop: -10, width: 100, height: 33, backgroundColor: 'white', borderRadius: 7, marginRight: 75}}>
        <Picker
        selectedValue={year2}
        style={{ height: 70, width: '100%', color: 'black', marginTop: -18 }}
        onValueChange={(itemValue, itemIndex) => setYear2(itemValue)}>
        <Picker.Item label="2017" value="2017" />
        <Picker.Item label="2018" value="2018" />
        <Picker.Item label="2019" value="2019" />
        <Picker.Item label="2020" value="2020" />
        <Picker.Item label="2021" value="2021" />
        </Picker>
        </View>
    </View>
    </View>

    ) : ( 
    
        
    <View style={{ width: '100%'}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text style={{color: 'white', marginLeft: 8}}>Mn: </Text>
    <View style={{flex: 1, marginTop: -10, width: 60, height: 33, backgroundColor: 'white', borderRadius: 7}}>
    <TouchableOpacity
      style={{width: 150, height: 50,}}
      onPress={() => setPickerModal1(!pickerModal1)}><Text style={{fontSize: 18, paddingLeft :10, marginTop: 5}} >{month1}</Text></TouchableOpacity>
    
    <Modal
        animationType= "slide"
        transparent={true}
        visible={pickerModal1}  >
      <View style={{flex: 1}}>
      <View style={{width: '100%', height: '35%', position: 'absolute', bottom: 0, backgroundColor: 'white'}}>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}} onPress={() => setPickerModal1(false)}>
          <Text style={{fontSize: 18}}>CLICK HERE TO SELECT</Text>
        </TouchableOpacity>
        
    <Picker
    selectedValue={month1}
    style={{ height: 70, width: '100%', color: 'black', marginTop: -9 }}
    onValueChange={(itemValue, itemIndex) => setMonth1(itemValue)}>
    <Picker.Item label="January" value="Jan" />
    <Picker.Item label="February" value="Feb" />
    <Picker.Item label="March" value="Mar" />
    <Picker.Item label="April" value="Apr" />
    <Picker.Item label="May" value="May" />
    <Picker.Item label="June" value="June" />
    <Picker.Item label="July" value="July" />
    <Picker.Item label="August" value="Aug" />
    <Picker.Item label="September" value="Sept" />
    <Picker.Item label="October" value="Oct" />
    <Picker.Item label="November" value="Nov" />
    <Picker.Item label="December" value="Dec" />
    </Picker>


      </View>
      </View>
      </Modal>



    </View>
    <Text style={{color: 'white', marginLeft: 8}}>Yr: </Text>
    <View style={{flex: 1, marginTop: -10, width: 100, height: 33, backgroundColor: 'white', borderRadius: 7, marginRight: 10}}>
    <TouchableOpacity
      style={{width: 150, height: 50,}}
      onPress={() => setPickerModal2(!pickerModal2)}><Text style={{fontSize: 18, paddingLeft :10, marginTop: 5}} >{year1}</Text></TouchableOpacity>
    
    <Modal
        animationType= "slide"
        transparent={true}
        visible={pickerModal2}  >
      <View style={{flex: 1}}>
      <View style={{width: '100%', height: '35%', position: 'absolute', bottom: 0, backgroundColor: 'white'}}>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}} onPress={() => setPickerModal2(false)}>
          <Text style={{fontSize: 18}}>CLICK HERE TO SELECT</Text>
        </TouchableOpacity>
        
    <Picker
    selectedValue={year1}
    style={{ height: 70, width: '100%', color: 'black', marginTop: -9 }}
    onValueChange={(itemValue, itemIndex) => setYear1(itemValue)}>
    <Picker.Item label="2017" value="2017" />
    <Picker.Item label="2018" value="2018" />
    <Picker.Item label="2019" value="2019" />
    <Picker.Item label="2020" value="2020" />
    <Picker.Item label="2021" value="2021" />
    </Picker>


      </View>
      </View>
      </Modal>

    </View>
<View style={{
    height: 80, width: 55, 
    marginRight: 10, marginTop: -10, 
    backgroundColor: 'white',
    borderRadius: 7,
    justifyContent:'center', alignItems: 'center'}}>
        <Octicons name="search" size={30} color="black" />
    </View>
</View>

<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: -23}}>
    <Text style={{color: 'white', marginLeft: 8}}>Mn: </Text>
    <View style={{flex: 1, marginTop: -10, width: 60, height: 33, backgroundColor: 'white', borderRadius: 7}}>
    <TouchableOpacity
      style={{width: 150, height: 50,}}
      onPress={() => setPickerModal3(!pickerModal3)}><Text style={{fontSize: 18, paddingLeft :10, marginTop: 5}} >{month2}</Text></TouchableOpacity>
    
    <Modal
        animationType= "slide"
        transparent={true}
        visible={pickerModal3}  >
      <View style={{flex: 1}}>
      <View style={{width: '100%', height: '35%', position: 'absolute', bottom: 0, backgroundColor: 'white'}}>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}} onPress={() => setPickerModal3(false)}>
          <Text style={{fontSize: 18}}>CLICK HERE TO SELECT</Text>
        </TouchableOpacity>
        
    <Picker
    selectedValue={month2}
    style={{ height: 70, width: '100%', color: 'black', marginTop: -9 }}
    onValueChange={(itemValue, itemIndex) => setMonth2(itemValue)}>
    <Picker.Item label="January" value="Jan" />
    <Picker.Item label="February" value="Feb" />
    <Picker.Item label="March" value="Mar" />
    <Picker.Item label="April" value="Apr" />
    <Picker.Item label="May" value="May" />
    <Picker.Item label="June" value="June" />
    <Picker.Item label="July" value="July" />
    <Picker.Item label="August" value="Aug" />
    <Picker.Item label="September" value="Sept" />
    <Picker.Item label="October" value="Oct" />
    <Picker.Item label="November" value="Nov" />
    <Picker.Item label="December" value="Dec" />
    </Picker>


      </View>
      </View>
      </Modal>

    </View>
    <Text style={{color: 'white', marginLeft: 8}}>Yr: </Text>
    <View style={{flex: 1, marginTop: -10, width: 100, height: 33, backgroundColor: 'white', borderRadius: 7, marginRight: 75}}>
    <TouchableOpacity
      style={{width: 150, height: 50,}}
      onPress={() => setPickerModal4(!pickerModal4)}><Text style={{fontSize: 18, paddingLeft :10, marginTop: 5}} >{year2}</Text></TouchableOpacity>
    
    <Modal
        animationType= "slide"
        transparent={true}
        visible={pickerModal4}  >
      <View style={{flex: 1}}>
      <View style={{width: '100%', height: '35%', position: 'absolute', bottom: 0, backgroundColor: 'white'}}>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}} onPress={() => setPickerModal4(false)}>
          <Text style={{fontSize: 18}}>CLICK HERE TO SELECT</Text>
        </TouchableOpacity>
        
    <Picker
    selectedValue={year2}
    style={{ height: 70, width: '100%', color: 'black', marginTop: -9 }}
    onValueChange={(itemValue, itemIndex) => setYear2(itemValue)}>
    <Picker.Item label="2017" value="2017" />
    <Picker.Item label="2018" value="2018" />
    <Picker.Item label="2019" value="2019" />
    <Picker.Item label="2020" value="2020" />
    <Picker.Item label="2021" value="2021" />
    </Picker>


      </View>
      </View>
      </Modal>

    </View>
</View>
</View>


        )}



    <View style={{ width: '90%', marginTop: 20}}>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={SUB_DATE => SUB_DATE.id} />
    </View>


    
    </View>
    );
}
export default LeaveStatusScreen;

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
        height: 130,
        width: '100%',
        borderRadius: 5,
        margin: 6,
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