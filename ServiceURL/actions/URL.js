export const USER_DATA = 'USER_DATA';
export const NOCR_DATA = 'NOCR_DATA';
export const CR_DATA = 'CR_DATA';
export const PAT_DATA = 'PAT_DATA';
export const DOC_DATA = 'DOC_DATA';
export const  LOGOUT_EMPLOYEE= 'LOGOUT_EMPLOYEE';
export const LOGOUT_CR_PATIENT ='LOGOUT_CR_PATIENT';
export const userDATA = (crno,userdisplayname,empid,username,mobileno,valid,epfflag,gpfflag) => {
    return { 
        type: USER_DATA,  
        crno: crno, 
        userdisplayname: userdisplayname,
        empid: empid,
        username: username,
        mobileno: mobileno,
        valid: valid,
        epfflag: epfflag,
        gpfflag: gpfflag,
    };
} 

export const patientDATA = (enteredName,enteredNumber) => {
    return { 
        type: NOCR_DATA,  
        enteredName: enteredName,
        enteredNumber: enteredNumber,
    };
} 

export const CRpatientDATA = (patientName,crno,mobileNumber) => {
    return { 
        type: CR_DATA,
        patientName: patientName,
        patientcrno: crno,
        patientMobileNumber: mobileNumber
    };
} 

export const DoctorDATA = (doctorName) => {
    console.log(doctorName,'action wala')
    return { 
        type: DOC_DATA,
        doctorName: doctorName
        
    };
} 

    export const CRpatientDATALogout =()=>{
        return {
            type:  LOGOUT_CR_PATIENT
        };
    }

export const PatDetailsDATA = (patientdetails) => {
    return { 
        type: PAT_DATA,
        patientdetails: patientdetails,  
    };
} 

export const logout = ()=>{
    AsyncStorage.removeItem('userData');
   return {type: LOGOUT_EMPLOYEE };
 }; 