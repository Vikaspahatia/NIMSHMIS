import MainScreen from "../screens/MainScreen";
import EmployeeLoginScreen from '../screens/Employee/EmployeeLoginScreen';
import NewUserScreen from "../screens/Employee/NewUserScreen";
import EmployeeHomeScreen from "../screens/Employee/EmployeeHomeScreen";
import PISScreen from "../screens/Employee/PISScreen";
import PaySlipScreen from "../screens/Employee/PaySlipScreen";
import FamilyDetailsScreen from "../screens/Employee/FamilyDetailsScreen";
import LeaveScreen from "../screens/Employee/LeaveScreen";
import LeaveBalanceScreen from "../screens/Employee/LeaveBalanceScreen";
import TaxScreen from "../screens/Employee/TaxScreen";
import LeaveProcessesScreen from "../screens/Employee/LeaveProcessesScreen";
import ClinicalInfoScreen from "../screens/Employee/ClinicalInfoScreen";
import EmpOTPScreen from "../screens/Employee/EmpOTPScreen";
import EPFScreen from "../screens/Employee/EPFScreen";
import NotificationScreen from "../screens/Employee/NotificationScreen";
import TodoScreen from "../screens/Employee/TodoScreen";
import ChangePasswordScreen from "../screens/Employee/ChangePasswordScreen";
import LeaveStatusScreen from "../screens/Employee/LeaveStatusScreen";
import ForgotPasswordScreen from "../screens/Employee/ForgotPasswordScreen";

import DoctorLoginScreen from '../screens/Doctor/DoctorLoginScreen';
import DoctorHomeScreen from "../screens/Doctor/DoctorHomeScreen";
import AfterLoginScreen from "../screens/Doctor/AfterLoginScreen";
import LabReportTrendsScreen from "../screens/Doctor/LabReportTrendsScreen";
import TrendsScreen from "../screens/Doctor/TrendsScreen";
import TrendsSecondScreen from "../screens/Doctor/TrendsSecondScreen"
import CodeScannerScreen from "../screens/Doctor/CodeScannerScreen";

import PatientLoginScreen from '../screens/Patient/PatientLoginScreen';
import HaveCRScreen from "../screens/Patient/HaveCR/HaveCRScreen";
import LabEnquiryScreen from "../screens/Patient/HaveCR/LabEnquiryScreen";
import OPDEnquiryScreen from "../screens/Patient/HaveCR/OPDEnquiryScreen";
import LabReportScreen from "../screens/Patient/HaveCR/LabReportScreen";
import HomeScreen from "../screens/Patient/HaveCR/HomeScreen";
import FeedbackScreen from "../screens/Patient/HaveCR/FeedbackScreen";
import LabReportPDFScreen from "../screens/Patient/HaveCR/LabReportPDFScreen";
import OtherPatientScreen from "../screens/Patient/HaveCR/OtherPatientScreen";
import PrescriptionViewScreen from "../screens/Patient/HaveCR/PrescriptionViewScreen";
import POVpdfScreen from "../screens/Patient/HaveCR/POVpdfScreen";
import PrescriptionOnlineViewScreen from "../screens/Patient/HaveCR/PrescriptionOnlineViewScreen";
import PrescriptionScannedViewScreen from "../screens/Patient/HaveCR/PrescriptionScannedViewScreen";
import MultipleUserScreen from "../screens/Patient/HaveCR/MultipleUserScreen";
import MyAccountCRScreen from "../screens/Patient/HaveCR/MyAccountCRScreen";
import PSVScreen from "../screens/Patient/HaveCR/PSVScreen";

import DontHaveCRHomeScreen from "../screens/Patient/DontHaveCR/DontHaveCRHomeScreen";
import AboutUsScreen from "../screens/Patient/DontHaveCR/AboutUsScreen";
import Appointment from "../screens/Patient/DontHaveCR/Appointment";
import DontHaveCRScreen from "../screens/Patient/DontHaveCR/DontHaveCRScreen";
import TRScreen from "../screens/Patient/DontHaveCR/TRScreen";
import DATScreen from "../screens/Patient/DontHaveCR/DATScreen";
import PreRegistrationScreen from "../screens/Patient/DontHaveCR/PreRegistrationScreen";
import MyAccountScreen from  "../screens/Patient/DontHaveCR/MyAccountScreen";
import OTPScreen from "../screens/Patient/OTPScreen";
import GeneralMedicineScreen from "../screens/Patient/OPDEnuiry/GeneralMedicineScreen";
import BiochemistryScreen from "../screens/Patient/LabEnquiry/BiochemistryScreen";
import AllDepartmentScreen from "../screens/Patient/OPDEnuiry/AllDepartmentScreen";


import SplashScreen from '../screens/SplashScreen';
import SideBar from '../components/SideBar';
import PatientSideBar from '../components/PatientSideBar';
import CRPatientSideBar from "../components/CRPatientSideBar"; 

import React from 'react';
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
const ScreenNavigator = createStackNavigator({
    
    // DoctorLogin: {
    //     screen: DoctorLoginScreen},
    // PatientLogin: {
    //     screen: PatientLoginScreen},
    // HaveCR: {
    //     screen: HaveCRScreen},
    // DontHaveCR: {
    //     screen: DontHaveCRScreen},
    Home: {
        screen: HomeScreen},
    DontHaveCRHome: {
        screen: DontHaveCRHomeScreen},
    LabEnquiry: {
        screen: LabEnquiryScreen},
    OPDEnquiry: {
        screen: OPDEnquiryScreen},
    // OTP: {
    //     screen: OTPScreen},
    FamilyDetails: {
        screen : FamilyDetailsScreen},
    AboutUs: {
        screen: AboutUsScreen},
    Appointment: {
        screen: Appointment},
    TR: {
        screen: TRScreen},
    DAT: {
        screen: DATScreen},
    PreRegistration: {
        screen: PreRegistrationScreen},
    GeneralMedicine: {
        screen: GeneralMedicineScreen},
    Biochemistry: {
        screen: BiochemistryScreen},
    MyAccount: {
        screen: MyAccountScreen},
    MyAccountCR: {
        screen: MyAccountCRScreen},
    Feedback: {
        screen: FeedbackScreen},
    LabReport: {
        screen: LabReportScreen},
    LabReportPDF: {
        screen: LabReportPDFScreen},
    OtherPatient: {
        screen: OtherPatientScreen},
    PrescriptionView: {
        screen: PrescriptionViewScreen},
    DoctorHome: {
        screen: DoctorHomeScreen},
    PrescriptionScannedView: {
        screen: PrescriptionScannedViewScreen},
    PrescriptionOnlineView: {
        screen: PrescriptionOnlineViewScreen},
    POVpdf: {
        screen: POVpdfScreen},
    PSV:PSVScreen,
    AfterLogin: {
        screen: AfterLoginScreen},
    AllDepartment: {
        screen: AllDepartmentScreen},
    LabReportTrends: {
        screen: LabReportTrendsScreen},
    Trends: {
        screen: TrendsScreen},
    TrendsSecond: {
        screen: TrendsSecondScreen},
    CodeScanner: CodeScannerScreen},
    {
    defaultNavigationOptions:  {
        title: 'MyScreen',
        headerShown: false,
    }
});



const EmployeeNavigator = createStackNavigator({
    
    // EmployeeLogin: {
    //     screen: EmployeeLoginScreen},
    // NewUser: {
    //     screen: NewUserScreen},
    // ForgotPassword: {
    //     screen: ForgotPasswordScreen},
    EmployeeHome: {
        screen: EmployeeHomeScreen},
    PIS: {
        screen: PISScreen},
    PaySlip: {
        screen: PaySlipScreen},
    FamilyDetails: {
        screen : FamilyDetailsScreen},
    Leave: {
        screen: LeaveScreen},
    LeaveBalance: {
        screen: LeaveBalanceScreen},
    Tax: {
        screen: TaxScreen},
    LeaveProcesses: {
        screen: LeaveProcessesScreen},
    ClinicalInfo: {
        screen: ClinicalInfoScreen},
    // EmpOTP: {
    //     screen: EmpOTPScreen},
    EPF: {
        screen: EPFScreen},
    Notification: {
        screen: NotificationScreen},
    Todo: {
        screen: TodoScreen},
    ChangePassword: {
        screen: ChangePasswordScreen},
    LeaveStatus: {
        screen: LeaveStatusScreen},
    },
    {
    defaultNavigationOptions:  {
        title: 'MyScreen',
        headerShown: false,
    }
});

const StartNavigator = createStackNavigator({
    Main: MainScreen,
    EmployeeLogin: EmployeeLoginScreen,
    EmpOTP:  EmpOTPScreen,
    DoctorLogin: DoctorLoginScreen,
    PatientLogin: PatientLoginScreen,
    HaveCR: HaveCRScreen,
    DontHaveCR: DontHaveCRScreen,
    OTP: OTPScreen,
},
{
defaultNavigationOptions:  {
    title: 'MyScreen',
    headerShown: false,
}
});
const DrawerNavigator = createDrawerNavigator({
    Screen: ScreenNavigator
},{
    contentComponent: props => <PatientSideBar {...props} />
});

const EmployeeDrawerNavigator = createDrawerNavigator({
    ScreensEmployee: EmployeeNavigator
},{
    contentComponent: props => <SideBar {...props} />
});

const MainNavigator =  createSwitchNavigator({
    Splash:SplashScreen,
    MultipleUser: MultipleUserScreen,
    Start:StartNavigator,
    Drawer: DrawerNavigator,
    EmployeeDrawer:EmployeeDrawerNavigator
});

export default createAppContainer(MainNavigator);