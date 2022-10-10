import React,{useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator, AsyncStorage, Alert} from 'react-native';
import * as authActions from '../ServiceURL/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const SplashScreen = props =>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const tryLogin = async ()=>{
            const userData =await AsyncStorage.getItem('userData');
            console.log(userData,'userData');
            
            if(!userData){
                
                props.navigation.navigate('Main');
                return;
            }
            const transformedData =await JSON.parse(userData);
            console.log(transformedData);
            const emp = transformedData.employeeId;
            const client= transformedData.client;
            if(!emp){
                
                props.navigation.navigate('Main');
                return;
            }
            try{
                if(client ==='Employee'){
                    console.log(emp,'dta')
                await dispatch(authActions.saveEmpNo(emp));
                // console.log(date, 'useSelector');
                
                
                props.navigation.navigate('EmployeeHome');
                }
            } catch(err){
                Alert.alert(err.message)
            }
            // const expirationTime = expirationDate.getTime() - new Date().getTime();
            // dispatch(authActions.authentication(userId, token, expirationTime));
        }
        tryLogin();
    },[dispatch])
    useEffect(()=>{

    },[])

    return (
        <View style={styles.screen}>
           <ActivityIndicator 
                color = '#368cb3' // color of your choice
                size = "large"
                style = {styles.activityIndicator}
            />
                </View>
    )
};
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 180
      },
});

export default SplashScreen;