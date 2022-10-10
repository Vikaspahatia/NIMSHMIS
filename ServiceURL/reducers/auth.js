import {AUTO_EMPLOYEE, LOGOUT_EMPLOYEE,SAVE_EMP_NO } from '../actions/auth';
const initialState = {
    employeeId: null
};

export default (state = initialState , action) =>{
    switch(action.type){
        case AUTO_EMPLOYEE :
            return{
                employeeId: action.empId
            };
        case SAVE_EMP_NO :
            return{
                employeeId: action.empId
            };
        case LOGOUT_EMPLOYEE:
            return initialState;
    }
    return state;
}