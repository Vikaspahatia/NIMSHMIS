export const AUTO_EMPLOYEE = 'AUTO_EMPLOYEE';
export const SAVE_EMP_NO='SAVE_EMP_NO';
export const  LOGOUT_EMPLOYEE= 'LOGOUT_EMPLOYEE';
import {AsyncStorage} from 'react-native';


export const saveEmployee = (empid, client ) =>{
    return async dispatch =>{
        dispatch({type: AUTO_EMPLOYEE, empid:empid});
      saveDataToStorage(empid, client);
    }
};


export const saveEmpNo = (empid)=>{
    return async dispatch =>{
        dispatch({type: SAVE_EMP_NO, empid})
    }
}
 
export const logout = ()=>{
   AsyncStorage.removeItem('userData');
  return {type: LOGOUT_EMPLOYEE };
};

const saveDataToStorage = (employeeId, client) =>{
  AsyncStorage.setItem('userData', JSON.stringify({
    employeeId,
    client
  }))
}