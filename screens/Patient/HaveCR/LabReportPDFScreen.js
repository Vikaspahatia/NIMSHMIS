import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, String } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PDFReader from 'rn-pdf-reader-js';
import { useDispatch,useSelector } from 'react-redux';

const LabReportPDFScreen = props => {
  
  const patientcrno = useSelector(state => state.URL.patientcrno);
  const reqDNo = props.navigation.getParam('reqNo');
  const URL = 'https://nimsts.edu.in/HBIMS/services/restful/invService/reportData?crNo='+patientcrno+'&reqDNo='+reqDNo+'&hosCode=33101';
  const [isLoading, setLoading] = useState(true);
  const [baseData, setBaseData] = useState([]);
  const [DATA, setDATA ] = useState(); 
  var content
  var jsonDATA
  useEffect(() => {
    try {
      (async () => {
      content = await fetch(URL);
      jsonDATA = await content.json()
      setDATA(jsonDATA);
      setBaseData(jsonDATA[0].PDFDATA);
      setLoading(false);
    }
    )();
  } catch(e) {
    console.log(e);
  }
}, []);
 
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
           <ActivityIndicator 
        color = '#368cb3' // color of your choice
        size = "large"
        style = {{flex: 1,  justifyContent: 'center',  alignItems: 'center',  height: 180}}
           />
         </View>
         ) : (
           <>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 35, }}>
            <Ionicons style={{padding: 7}} name="reorder-three" size={35} color="black" 
            onPress={() => {props.navigation.toggleDrawer();}} />
            <Image style={{marginLeft: 70, height: 50, width: 130}} 
            source={require('../../../assets/toolbarlogo1.png')} />
        </View> 
      <View style={{flex: 1, width: '100%'}}>
        <PDFReader
          source={{
            base64: 'data:application/pdf;base64,'+baseData+''
          }}
        /> 
      </View>
    </>
        )}
    </View>
  );
}

export default LabReportPDFScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    marginBottom: 5
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    marginTop: 200
  },
  pdf: {
    flex:1,
    width:150,
    height:300,
}
});

