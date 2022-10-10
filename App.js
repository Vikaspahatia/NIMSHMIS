import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { createStore, combineReducers, applyMiddleware } from "redux";
import urlReducer from './ServiceURL/reducers/URL';
import authReducer from './ServiceURL/reducers/auth'
import { Provider } from 'react-redux';
import ScreenNavigator from "./navigation/ScreenNavigation";
import { persistStore } from 'redux-persist'
import ReduxThunk from 'redux-thunk';
// import InternetConnectionAlert from "react-native-internet-connection-alert";
const rootReducer = combineReducers({
  URL: urlReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() 
{
  const [connected, setIsConnected] = useState(true);
  return (
    // <InternetConnectionAlert title="Facing issues with connection!" message="Please check your internet"
    //   onChange={(connectionState) => {
    //     console.log("Connection State: ", connectionState);
    //     setIsConnected(!connectionState.isInternetReachable); 
    //   }}
    // // console.log("Connection State: ", connectionState);
    //  //}}
    // >    
    <Provider store={store}>
      <ScreenNavigator/>
    </Provider>
    // </InternetConnectionAlert>
    );
}
