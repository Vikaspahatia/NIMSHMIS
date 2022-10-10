import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import PDFReader from 'rn-pdf-reader-js'
import { useSelector } from 'react-redux';

const PSVScreen = props => {
  //const patientcrno = useSelector(state => state.URL.patientcrno);
  const patientcrno = props.navigation.getParam('crnoKey');
  const reqDNo = props.navigation.getParam('seatid');
  const visitno = props.navigation.getParam('visitno');
  //const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/appointment/photo?CrNo="+patientcrno+"&S_no=0&Hcode=33101"
  //const URL = 'https://nimsts.edu.in/HBIMS/services/restful/UserService/retrivePrescriptionpdf?DeptValue=hello^'+patientcrno+'^'+visitno+'^'+reqDNo+'001^33101';
  const URL = 'https://nimsts.edu.in/HBIMS/services/restful/UserService/retrivePrescriptionpdf?DeptValue=hello^'+331011900914166+'^'+visitno+'^'+reqDNo+'001^33101';
  console.log(URL);
  const [isLoading, setLoading] = useState(true);
  const [baseData, setBaseData] = useState([]);
  var content
  var jsonDATA
  useEffect(() => {
    try {
      (async () => {
      content = await fetch(URL);
      jsonDATA = await content.json()
      //setDATA(jsonDATA);
      setBaseData(jsonDATA.PRESPDF);
      setLoading(false);
    }
    )();
  } catch(e) {
    console.log(e);
  }
}, []);

console.log(baseData);
var profilePic = 'data:image/png;base64,' + baseData;
return(
  <View style={{flex: 1}}>     
      <View style={{flex: 1, width: '100%', marginTop: 20}}>
        {/* <PDFReader
          source={{
            base64: 'data:application/pdf;base64,'+baseData+''
          }}
        /> */}

           <Image style={{
                flex:1}} 
                source={{uri: profilePic}}/> 
      </View>
  </View>
);   


}

export default PSVScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    //alignItems: 'center',
    //marginTop: 30,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  },
  pdf: {
    flex:1,
    width:150,
    height:300,
}
});

