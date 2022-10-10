import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Picker, Modal, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch,useSelector } from 'react-redux';

const PrescriptionOnlineViewScreen = props => {


    // const patientcrno = useSelector(state => state.URL.patientcrno);
    // const patientName = useSelector(state => state.URL.patientName);

    const patientName = props.navigation.getParam('patKey');
    const patientcrno = props.navigation.getParam('crnoKey');
    const [dataLenght, setdataLenght] = useState();

    const [pickerModal, setPickerModal] = useState(false);
    const [value, setValue] = useState('All');

    const URL = 'https://nimsts.edu.in/HISServices/service/UserService/getUserPatDataViewPrescription?CrNo='+331011900914166+'&seatid=10001';
    console.log(URL)
    const [isLoading, setLoading] = useState(true);
    const [DATA, setDATA ] = useState(); 
    const [name, setName] = useState();
    const [crno, setCrno] = useState();

    var content
    var jsonDATA
   
    useEffect(() => {
      try {
      (async () => {
      content = await fetch(URL);
      jsonDATA = await content.json()
      setDATA(jsonDATA);
      setdataLenght(jsonDATA.pat_details.length)
      setLoading(false);
      setName(DATA.pat_details[0].PATNAME);
      setCrno(DATA.pat_details[0].HRGNUM_PUK);
    }
    )();
  } catch(e) {
    console.log(e);
  }
}, []);



function onPressPass(item) {
  props.navigation.navigate('PSV', {
    seatid: item.UNITCODE,
    visitno: item.VISITNO,
    crnoKey: patientcrno 
  });
}


  const renderItemData = ( itemData ) => {
    return(
    <View>  
      <TouchableOpacity
            onPress={() => onPressPass(itemData.item)} >
            <View style={{marginTop: 15, marginBottom: 8, width: '88%', alignSelf: 'center', borderRadius: 5, borderWidth: 0.6, borderColor: 'grey',
              backgroundColor: 'white'}}>

              <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', padding: 10, alignSelf: 'center'}}>{itemData.item.UNITNAME}</Text>

              <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={{fontSize: 15, color: '#4495b9', fontWeight: 'bold'}}>{itemData.item.VISITDATE}</Text>
                <Text style={{fontSize: 15, color: 'black'}}>Visit No:</Text>
                <Text style={{fontSize: 15, color: 'black', marginBottom: 12}}>{itemData.item.VISITNO}</Text>
              </View>

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
            source={require('../../../assets/toolbarlogo1.png')} />
        </View> 

    <View style={styles.container}>
      <Text style={styles.texted}>Patient Details</Text>
      <View style={{width: '95%', borderWidth: 1, borderColor: 'white', marginBottom: 5, alignSelf: 'center'}}></View>
      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <Text style={styles.texte}>CR NO. :</Text>
        <Text style={styles.textev}>{patientcrno}</Text>
      </View>
      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <Text style={styles.texte}>Patient Name :</Text>
        <Text style={styles.textev}>{patientName}</Text>
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
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35, }}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {props.navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
        </View> 

        <View style={styles.container}>
            <Text style={styles.texted}>Patient Details</Text>
            <View style={{width: '95%', borderWidth: 1, borderColor: 'white', marginBottom: 5, alignSelf: 'center'}}></View>
            <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                <Text style={styles.texte}>CR NO. :</Text>
                <Text style={styles.textev}>{patientcrno}</Text>
            </View>
            <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                <Text style={styles.texte}>Patient Name :</Text>
                <Text style={styles.textev}>{patientName}</Text>
            </View>
        </View>


        {(dataLenght==0) ? (<View style={{flex: 1, width: '100%'}}>
        <Text style={{alignSelf:'center', marginTop: 160, fontSize: 20}}>No Data</Text>
        </View>
            ):(
              <View style={{flex: 1, width: '100%'}}>
       

        <View style={{width: '93%', backgroundColor: '#f1eeee', alignSelf: 'center', borderRadius: 10, borderWidth: 0.7, borderColor: 'grey'}}>
            <View style={{height: 80, backgroundColor: 'white', borderTopRightRadius: 10, borderTopLeftRadius: 10}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold', padding: 5}}>Select visit to view prescription</Text>
            

            {(Platform.OS == 'ios') ? (
  
              <View style={{flexDirection: 'row', alignContent: 'flex-start'}}>
   
              <TouchableOpacity
                style={{width: '80%', height: 30,}}
                onPress={() => setPickerModal(!pickerModal)}><Text style={{paddingLeft: 20, marginTop: 10, fontSize: 18}}>{value}</Text></TouchableOpacity>
                <AntDesign name="caretdown" size={12} color="grey" style={{marginTop: 12, marginEnd: -100}}/>
            
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
                      style={{margin: -20, alignSelf: 'center', width: '100%', height: '50%'}}
                      selectedValue= {value} // default value
                      onValueChange={(itemValue, itemIndex)=> setValue(itemValue)}>
                        {DATA.pat_details.map((item, key)=>(
                          <Picker.Item label={item.DEPTNAME} value={item.DEPTNAME} key={item.DEPTNAME} />)
                          )}
                  </Picker>
                </View>
                </View>
                </Modal>
              </View>
          
            

                ) : ( 

               
            
            
              <View style={{flexDirection: 'row', alignContent: 'space-around'}}>
              
              {/* <Picker
                  style={{width: '90%'}}
                  selectedValue= {value} // default value
                  onValueChange={(itemValue, itemIndex)=> setValue(itemValue)}>
                      {DATA.pat_details.map((item, key)=>(
                      <Picker.Item label={item.DEPTNAME} value={item.DEPTNAME} key={item.DEPTNAME} />)
                      )}
              </Picker> */}
           
              </View>

              )} 

</View>

            <FlatList data={DATA.pat_details} renderItem={renderItemData}/>
            
        </View>

        </View>)
        }

    </View>

        </>
        )}


    </View>
  );
}

export default PrescriptionOnlineViewScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    //alignItems: 'center',
    //marginTop: 30,
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
    width: 165,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C7C7C7',
    backgroundColor: 'white',
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
  textev: {
    color: 'white',
    fontSize:15,
    marginLeft: -70,
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
    marginTop: 200,
    alignSelf: 'center',
    //height: 180
  },
  title: {
    fontSize: 14,
    color: '#368cb3',
    marginBottom: -2,
  },
});

