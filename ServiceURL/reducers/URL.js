import {USER_DATA, LOGOUT_EMPLOYEE, NOCR_DATA, CR_DATA, PAT_DATA , DOC_DATA, LOGOUT_CR_PATIENT} from '../actions/URL'; 
const initialState = {
    ClinicalInfo: "https://nimsts.edu.in/NIMSNC_MobileServices/service/dependent/dependent?empno=",
    EmployeeHome: "https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/payDetails?empno=331010008122",
    FamilyDetails: "https://run.mocky.io/v3/08fd7834-d6c4-4f7d-bd3c-0e0a7a5485e7",
    LeaveBalance: "https://nimsts.edu.in/NIMSNC_MobileServices/service/leave/leavebalance?empno=",
    LeaveProcesses: "https://nimsts.edu.in/NIMSNC_MobileServices/service/leave/filteredleaverequest?crno=",
    Leave: "https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/payDetails?empno=",
    PIS: "https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/payDetails?empno=",
    PaySlip: "https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/payslip2?empno=",
    Tax1: "https://nimsts.edu.in/NIMSNC_MobileServices/service/payroll/epfAcc?empno=331010008122",
    emno: "",
    crno: "",
    userdisplayname: "",
    enteredName: "",
    enteredNumber: "",
    patientName: "",
    patientcrno: "",
    patientMobileNumber: "",
    patientdetails: "",
    doctorName: "",
}
  
const urlReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case  USER_DATA :
            // console.log(action.empid, 'here');
            const PIS = state.PIS;
            state.PIS = PIS+ action.empid;
            const PaySlip = state.PaySlip;
            state.PaySlip = PaySlip+ action.empid;
            const emno = state.emno;
            state.emno = emno+ action.empid;
            const crno = state.crno;
            state.crno = crno+ action.crno;
            const userdisplayname = state.userdisplayname;
            state.userdisplayname = userdisplayname+ action.userdisplayname;
            const LeaveBalance = state.LeaveBalance;
            state.LeaveBalance = LeaveBalance+ action.empid;
            const LeaveProcesses = state.LeaveProcesses;
            state.LeaveProcesses = LeaveProcesses+ action.empid;
            const ClinicalInfo = state.ClinicalInfo;
            state.ClinicalInfo = ClinicalInfo+ action.empid;
            const Leave = state.Leave;
            state.Leave = Leave+ action.empid;
            return state;

        case  NOCR_DATA :
            state.enteredName = action.enteredName;
            state.enteredNumber = action.enteredNumber;
            return state;

        case  CR_DATA :
            state.patientName = action.patientName;
            console.log(action.patientName);
            state.patientcrno = action.patientcrno;
            state.patientMobileNumber = action.patientMobileNumber;
            return state;

        case  PAT_DATA :
            state.patientdetails = action.patientdetails;
            // console.log(state.patientdetails,'state');
            return state;

        case  DOC_DATA :
            state.doctorName = action.doctorName;
             console.log(state.doctorName,'state');
             console.log(action.doctorName,'action');
            return state;
  
        case LOGOUT_EMPLOYEE:
            return initialState;

        case LOGOUT_CR_PATIENT:
                state.patientName = "";
                state.patientcrno = "";
                state.patientMobileNumber = "";
                state.enteredName = "";
                state.enteredNumber = "";
                return state;
    }
    return state;
}

export default urlReducer;







// const Tax1 = state.Tax1;
// state.Tax1 = Tax1+ action.crno;