import React, { useState, useEffect } from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default Sidebar = ({navigation}) => {
    
    const employee = useSelector(state => state.URL.emno);
    const crnum = useSelector(state => state.URL.crno);
    const username = useSelector(state => state.URL.userdisplayname);
    // console.log(employee);
    // console.log(crnum);
    // console.log(username);
    const [DATA, setDATA ] = useState(); 
    var empno=331010008121;
    const URL = "https://nimsts.edu.in/NIMSNC_MobileServices/service/appointment/photo?EmpNo="+employee+"&S_no=0&Hcode=33101"
    
    axios.get(URL).then((res) => setDATA(res.data[0].ImageData));

    var profilePic = 'data:image/png;base64,' + DATA;

return(
    <View style={styles.container}>
        <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
        <View style={styles.upper}>
            <Image style={{
                height: 150, width: 150, 
                backgroundColor: 'white',
                alignSelf: 'center',
                marginTop: 42,
                borderRadius: 100,}} 
                source={{uri: profilePic}}/>
    
            <Text style={styles.text1}>{username}</Text>
            <Text style={styles.text2}>{employee}</Text>
            <Text style={styles.text3}>{crnum}</Text>
        </View>
        <View style={styles.lower}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Notification'); }}>
            <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                <View style={{paddingLeft: 22, marginTop: 25}}><MaterialIcons name="notifications-active" size={24} color="grey" /></View>
                <View style={{paddingLeft: 32, marginTop: 27}}><Text>Notifications</Text></View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('LeaveStatus'); }}>
            <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                <View style={{paddingLeft: 22, marginTop: 25}}><MaterialCommunityIcons name="clock" size={24} color="grey" /></View>
                <View style={{paddingLeft: 32, marginTop: 27}}><Text>Leave Status</Text></View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Todo'); }}>
            <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                <View style={{paddingLeft: 22, marginTop: 25}}><FontAwesome name="list-ol" size={24} color="grey" /></View>
                <View style={{paddingLeft: 32, marginTop: 27}}><Text>Todo</Text></View>
            </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
                onPress={() => { navigation.navigate('ChangePassword'); }}>
            <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                <View style={{paddingLeft: 22, marginTop: 25}}><MaterialIcons name="notifications-active" size={24} color="grey" /></View>
                <View style={{paddingLeft: 32, marginTop: 27}}><Text>Change Password</Text></View>
            </View>
            </TouchableOpacity> */}
            <TouchableOpacity
                onPress={() => { navigation.navigate('Main'); }}>
            <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                <View style={{paddingLeft: 22, marginTop: 25}}><Feather name="power" size={24} color="grey" /></View>
                <View style={{paddingLeft: 32, marginTop: 27}}><Text>Logout</Text></View>
            </View>
            </TouchableOpacity>
        </View>
        </View>
        
    </View>
    );
}

const styles = StyleSheet.create({
 container: {
    flex:1,
 },
 upper: {
    flex: 2,
    backgroundColor: '#368cb3'
 },
 lower: {
    flex: 3,
 },
 text1: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 65,
 },
 text2: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
 },
 text3: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
 },
 text: {
    fontSize: 15,
    color: 'black',
    // alignSelf: 'center',
    // position: 'absolute',
    // bottom: 15,
 }
});