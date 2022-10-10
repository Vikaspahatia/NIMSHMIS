import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import RadioForm from 'react-native-simple-radio-button';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BiochemistryScreen = ({navigation}) => {

    const [isLoading, setLoading] = useState(false);

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
                onPress={(value) => {}}
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
        <View style={styles.contain}>
      
    
        <View style={{
            marginTop: 10,
            height: 80,
            width: '95%',
            backgroundColor: '#368cb3',
            alignSelf: 'center',
            borderRadius: 10,
            justifyContent: 'center'
        }}>
            <Text style={{ 
                fontSize: 14, 
                color: 'white', 
                textAlign: 'left',
                fontWeight: 'bold',
                paddingLeft: 7,
                marginTop: 3
            }}>Biochemistry( Biochemistry )</Text>
            <Text style={{ 
                fontSize: 14, 
                color: 'white', 
                textAlign: 'left',
                fontWeight: 'bold',
                paddingLeft: 7,
                marginTop: 3
            }}>Location : Speciality Block</Text>
            <Text style={{ 
                fontSize: 14, 
                color: 'white', 
                textAlign: 'left',
                fontWeight: 'bold',
                paddingLeft: 7,
                marginTop: 3
            }}>Incharge Name : Dharmendra</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center', marginTop: 10}}>
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

            

        <View style={styles.container1}>
            
            <Text style={{ 
                fontSize: 15, 
                color: 'black', 
                textAlign: 'left',
                fontWeight: 'bold',
                paddingLeft: 7,
                marginTop: 3
            }}>At lii</Text>
            
            <Text style={{ 
                fontSize: 20, 
                color: '#34b5e5', 
                fontWeight: 'bold',
                textAlign: 'right',
                paddingRight: 20
            }}><MaterialCommunityIcons name="currency-inr" size={18} color="#34b5e5" />80</Text>

    </View>
    </View>
    </View>

    </View>

    </>
    )}
    </View>
  );
}

export default BiochemistryScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //
  },
  container: {
    //flexDirection: 'column',
    width: '93%',
    height: 60,
    backgroundColor: '#368cb3',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  container1: {
    alignSelf: 'center',
    padding: 5,
    margin: 15,
    height: 80,
    width: '95%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C7C7C7',
    backgroundColor: 'white',
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
  containerX: {
    alignItems: 'center',
    padding: 15,
    margin: 7,
    height: 120,
    width: 165,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: '#f2f2f2',
    backgroundColor: '#f2f2f2',
  },
  texted: {
    marginLeft: 15,
    color: 'white',
    fontSize:18,
    alignSelf: 'center',
    fontWeight: 'bold',
    //borderBottomWidth: 1,
    //borderBottomColor: 'white',
    //borderColor: 'white',
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
    fontSize: 14, 
    color: '#368cb3', 
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
  activityIndicator: {
    flex: 1,
    marginTop: -150
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});

