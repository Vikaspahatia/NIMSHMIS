import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';


const TrendsScreen = props => {
  
  const name = props.navigation.getParam('nameKey');
  const crno = props.navigation.getParam('crnoKey');
  const age = props.navigation.getParam('ageKey');
  const gender = props.navigation.getParam('genderKey');
  //const URL = useSelector(state => state.URL.FamilyDetails);
  const URL = 'https://nimsts.edu.in/HBIMS/services/restful/invService/investigationDataList?crNo='+crno+'&hosCode=33101';
  const [isLoading, setLoading] = useState(true);
  const [DATA, setDATA ] = useState(); 
  const [img, setImg] = useState([]);
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

  function onPressPass(item) {
    props.navigation.navigate('TrendsSecond', {
        PARAMETERCODE: item.PARAMETERCODE,
        nameKey: name,crnoKey: crno, ageKey:age,genderKey:gender
    });
  }

var renderItem = ({ item }) => {
return(
    <View style={styles.container1}>
        
        <TouchableOpacity
            onPress={() => onPressPass(item)} >
            
            <View style={{flexDirection: 'row'}}>
            <Text style={{ 
                fontSize: 15, 
                color: 'black', 
                textAlign: 'left',
                paddingLeft: 10
            }}>{item.TESTNAME}</Text>
        </View>
        </TouchableOpacity>
    </View>
  );   
}  



  return (

    <View style={styles.contain}>
      <StatusBar style="auto"  backgroundColor= "#368cb3"  />

      {isLoading ? (
         
         <View>
         

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35, }}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {props.navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../assets/toolbarlogo1.png')} />
        </View> 



    <View style={styles.container}>
    <Text style={styles.texted}>Patient Details</Text>
    <View style={{width: '95%', borderWidth: 1, borderColor: 'white', marginBottom: 5, alignSelf: 'center'}}></View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <Text style={styles.texte}>Name:</Text>
    <Text style={styles.textev}>{name} ( {age}/{gender} )</Text>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <Text style={styles.texte}>CR No:</Text>
    {/* <Text style={styles.texte}>{selectedNumber}</Text> */}
    <Text style={styles.textev}>{crno}</Text>
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
 
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35, }}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {props.navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../assets/toolbarlogo1.png')} />
        </View> 



    <View style={styles.container}>
    <Text style={styles.texted}>Patient Details</Text>
    <View style={{width: '95%', borderWidth: 1, borderColor: 'white', marginBottom: 5, alignSelf: 'center'}}></View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <Text style={styles.texte}>Name:</Text>
    <Text style={styles.textev}>{name} ( {age}/{gender} )</Text>
    </View>
    <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
    <Text style={styles.texte}>CR No:</Text>
    {/* <Text style={styles.texte}>{selectedNumber}</Text> */}
    <Text style={styles.textev}>{crno}</Text>
    </View>
    </View>






    <View style={{flex: 1, width: '100%'}}>
    <FlatList data={DATA} renderItem={renderItem} keyExtractor={REQDNO => REQDNO.id} />
    </View>


    </>
        )}

    </View>
  );
}

export default TrendsScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    width: '93%',
    height: 90,
    backgroundColor: '#368cb3',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 10,
  },
  container1: {
    alignSelf: 'center',
    padding: 5,
    margin: 6,
    //height: 80,
    width: '100%',
    //borderWidth: 1,
    borderTopWidth: 1,
    borderColor: '#C7C7C7',
  },
  container2: {
    alignItems: 'center',
    padding: 10,
    height: 58,
    width: '50%',
    backgroundColor: 'white',
    marginHorizontal: 1,
  },
  container3: {
    alignItems: 'center',
    padding: 8,
    height: 58,
    width: '50%',
    backgroundColor: 'white',
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
    fontSize:15,
    // borderBottomWidth: 1,
    // borderBottomColor: 'white',
    // borderColor: 'white',
    marginBottom: 2,
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
    color: '#696969', 
    fontWeight: 'bold'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    marginTop: 200
  },
  title: {
    fontSize: 14,
    color: '#368cb3',
    marginBottom: -2,
  },
  textev: {
    color: 'white',
    fontSize:15,
    marginLeft: -180,
    flex: 1,
  },
});

