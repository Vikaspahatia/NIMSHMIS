import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import axios from 'axios';
var counter = 0;

const FamilyDetailsScreen = ({navigation}) => {
  
  const URL = useSelector(state => state.URL.FamilyDetails);
  const [isLoading, setLoading] = useState(true);
  const [DATA, setDATA ] = useState(); 
  const [length, setLength] = useState();
  var content
  var jsonDATA
 
  useEffect(() => {
    try {
    (async () => {
    content = await fetch(URL);
    jsonDATA = await content.json()
    setDATA(jsonDATA);
    setLoading(false);
    setLength(jsonDATA.length);
    }
    )();
  } catch(e) {
    console.log(e);
  }
  }, []);

  const Item = ({ title }) => (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  // console.log("Render Start");
  // console.log("counter = " +counter);
  // console.log(counter<=length);

  var renderItem = ({ item }) => {

//   var x = "https://nimsts.edu.in/NIMSNC_MobileServices/service/appointment/photo?EmpNo=331010008125&S_no="+ item.SR_NO +"&Hcode=33101";

//   var dummy = "https://run.mocky.io/v3/bae4d050-b114-4228-b91a-8f861c7801b8";
//   //console.log(x);
//      counter= counter+1;
//      axios.get(x).then((res) => setImg(res.data[0].ImageData));
 
    var profilePic = 'data:image/png;base64,' + item.MEM_PHOTO;
//   //console.log(img);
//   //console.log(img.ImageData);

//  console.log("Ends here");
//var s = item.MEM_PHOTO;
    return(
  
    <View style={styles.container1}>
      
      <View style={{flexDirection: 'row', flex: 1, marginTop: 8, marginLeft: 7}}>
        <View style={{
            borderColor: '#368cb3',
            borderWidth: 3,
            borderRadius: 10,
            height: 110,
            width: 84,
            justifyContent: 'center',
            alignItems: 'center',}}>
            <Image style={{width: 73, height: 100, borderRadius: 0}} source={{uri: profilePic}}/> 
        </View>
        <View style={{flex: 1, marginLeft: 7, marginTop: -3}}>
            <Text style={styles.title} >Sr No.</Text>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.title}>Gender</Text>
            <Text style={styles.title}>Relation</Text>
            <Text style={styles.title}>CR No.</Text>
        </View>
        <View style={{flex: 2, marginLeft: 7, marginTop: -3}}>  
          <Item title={item.SR_NO}/>  
          <Item title={item.NAME} />   
          <Item title={item.GENDER} />  
          <Item title={item.RELATION} />
          <Item title={item.CRNO} />
        </View>
      </View>

      <View style={{alignSelf: 'center', paddingBottom: 5}}>
        <TouchableOpacity style={styles.appButtonContainer}
        onPress={() => { navigation.navigate({routeName: 'ClinicalInfo'}); }}>
        <Text style={styles.appButtonText}>Clinical Info</Text>
        </TouchableOpacity>
      </View>
        
    </View>
  );   
} 
 

    return (
        <View style={styles.container}>
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
         <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Family Details</Text>
         </View>
 
         <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
         <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
         <MaterialIcons name="home" size={24} color="white" />
         </View>
         </View>
         </View>
         
 
           <ActivityIndicator 
        color = '#368cb3' // color of your choice
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
        paddingTop: 38,
        marginTop: -45,
        marginBottom: 22,
    }}>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
      <View style={{flexDirection: 'row', marginLeft: 12}}>
      <Ionicons name="reorder-three" size={35} color="white" 
        onPress={() => {navigation.toggleDrawer();}} />
      <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19, marginLeft: 25, padding: 5}}>Family Details</Text>
      </View>
      <View style={{flexDirection: 'row', margin: 8, marginRight: 20}}>
      <MaterialCommunityIcons style={{marginRight: 30}} name="bell-ring" size={24} color="white" />
      <MaterialIcons name="home" size={24} color="white"
      onPress={()=> navigation.navigate('EmployeeHome')}/>
      </View>
      </View>
      </View>
      
      <View style={{flex: 1, width: '100%'}}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={SR_NO => SR_NO.id} />
      </View>

      </>
        )}

    </View>
    );
   }
export default FamilyDetailsScreen;
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'white',
},
container1: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 130,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e4e6e8',
    margin: 8,
    },
container4: {
  flex: 1,
  //margin: 5,
  //padding: 10
},
appButtonContainer: {
  marginTop: 11,
  backgroundColor: "#368cb3",
  borderRadius: 25,
  height: 30,
  width: 100,
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
  marginBottom: -2,
  
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
  height: 30,
  width: 128,
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
});