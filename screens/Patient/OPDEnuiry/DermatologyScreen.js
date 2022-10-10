import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TextInput, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import RadioForm from 'react-native-simple-radio-button';
import { FontAwesome } from '@expo/vector-icons';

const GeneralMedicineScreen = ({navigation}) => {
    var department = [
        {label: "GENERAL        ", value: 0},
        {label: "SPECIAL        ", value: 1},
        {label: "ALL        ", value: 2},
    ]
    const deptCode = navigation.getParam('deptCode');
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
  
var renderItem = ({ item }) => {
function check(value) {
switch(value) {
    case 0: {
      if(item.rosterType === 'General') {
        return (<View style={styles.contain}>
          <View style={styles.container1}>
              <Text style={{ fontSize: 14,  color: '#368cb3', fontWeight: 'bold',textAlign: 'right',paddingRight: 10,}}>{item.rosterType}</Text>
              <Text style={{ fontSize: 17.5, color: '#34b5e5', fontWeight: 'bold',textAlign: 'left',marginTop: -3,}}>Department: {item.deptName}</Text>
              <View style={{borderWidth: 1, borderBottomColor: '#368cb3', marginTop: 1}}></View>
              <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Unit: {item.unitName}</Text>
              <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Building/Block: {item.location}/{item.roomName}</Text>
              <Text style={{ fontSize: 15, color: '#ff8803', fontWeight: 'bold',textAlign: 'left',marginTop: 3}}>Unit Days:</Text>
              <Text style={{ fontSize: 15, color: '#368cb3', fontWeight: 'bold',textAlign: 'left',paddingLeft: 10,marginTop: 3}}>{item.unitDays}</Text>
        </View>
      </View>);
      } else {
        return true;
      }
    }
    case 1: {
      if(item.rosterType === "Special") {
        return (<View style={styles.contain}>
          <View style={styles.container1}>
              <Text style={{ fontSize: 14,  color: '#368cb3', fontWeight: 'bold',textAlign: 'right',paddingRight: 10,}}>{item.rosterType}</Text>
              <Text style={{ fontSize: 17.5, color: '#34b5e5', fontWeight: 'bold',textAlign: 'left',marginTop: -3,}}>Department: {item.deptName}</Text>
              <View style={{borderWidth: 1, borderBottomColor: '#368cb3', marginTop: 1}}></View>
              <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Unit: {item.unitName}</Text>
              <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Building/Block: {item.location}/{item.roomName}</Text>
              <Text style={{ fontSize: 15, color: '#ff8803', fontWeight: 'bold',textAlign: 'left',marginTop: 3}}>Unit Days:</Text>
              <Text style={{ fontSize: 15, color: '#368cb3', fontWeight: 'bold',textAlign: 'left',paddingLeft: 10,marginTop: 3}}>{item.unitDays}</Text>
        </View>
      </View>);
      } else {
        return true;
      }
    }
    case 2: {
        return(<View style={styles.contain}>
          <View style={styles.container1}>
              <Text style={{ fontSize: 14,  color: '#368cb3', fontWeight: 'bold',textAlign: 'right',paddingRight: 10,}}>{item.rosterType}</Text>
              <Text style={{ fontSize: 17.5, color: '#34b5e5', fontWeight: 'bold',textAlign: 'left',marginTop: -3,}}>Department: {item.deptName}</Text>
              <View style={{borderWidth: 1, borderBottomColor: '#368cb3', marginTop: 1}}></View>
              <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Unit: {item.unitName}</Text>
              <Text style={{ fontSize: 14, color: 'black', textAlign: 'left',marginTop: 3}}>Building/Block: {item.location}/{item.roomName}</Text>
              <Text style={{ fontSize: 15, color: '#ff8803', fontWeight: 'bold',textAlign: 'left',marginTop: 3}}>Unit Days:</Text>
              <Text style={{ fontSize: 15, color: '#368cb3', fontWeight: 'bold',textAlign: 'left',paddingLeft: 10,marginTop: 3}}>{item.unitDays}</Text>
        </View>
      </View>);
    }
}
}

return(
  <View>
    {check(value)}
  </View>
  );   
}  

  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
        <StatusBar style="auto"  backgroundColor= "#368cb3"/>

        {isLoading ? (

        <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35}}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
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

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center'}}>
        <TextInput  
            style={{height: 35,
            fontSize: 17, 
            width: '94%',
            borderColor:'#cfcfcf',
            borderBottomWidth: 2,
            backgroundColor: 'white',
            paddingLeft: 10,
            alignSelf: 'center'}}
            // onChangeText={numberInputHandler}
            // value={enteredValue}
            placeholder="Search by department name"/>

        <FontAwesome style={{marginLeft: -25, marginTop: 2}}  name="search" size={24} color="grey" />
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
            onPress={() => {navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
        </View> 


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

  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center'}}>
  <TextInput  
      style={{height: 35,
      fontSize: 17, 
      width: '94%',
      borderColor:'#cfcfcf',
      borderBottomWidth: 2,
      backgroundColor: 'white',
      paddingLeft: 10,
      alignSelf: 'center'}}
      // onChangeText={numberInputHandler}
      // value={enteredValue}
      placeholder="Search by department name"/>

  <FontAwesome style={{marginLeft: -25, marginTop: 2, marginBottom: 20}}  name="search" size={24} color="grey" />
  </View>

      <View style={{flex: 1, width: '100%'}}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={REQDNO => REQDNO.id} />
      </View>

    </View>
    </View>

    </>
    )}
    </View>
  );
}

export default GeneralMedicineScreen;

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
});