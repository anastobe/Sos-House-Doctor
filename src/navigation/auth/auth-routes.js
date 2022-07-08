import React from 'react';
import {View,Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginSelect from "../../screens/AuthScreens/LoginSelect"
import Login from "../../screens/AuthScreens/Login"
import SignUp from '../../screens/AuthScreens/SignUp';
import ProviderSignupIndividualandPractice from '../../screens/AuthScreens/ProviderSignupIndividualandPractice';
import ProviderOptionScreen from '../../screens/AuthScreens/ProviderOptionScreen';
import ProviderStaffScreen from '../../screens/AuthScreens/ProviderStaffScreen';
import { IONICONS } from '../../constraints/Icons';
import { COLORS, FONTS } from '../../constraints/Theme';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/Header';
import SignupPatient from '../../screens/AuthScreens/SignupPatient';
import ForgetPassword from '../../screens/AuthScreens/ForgetPassword';

const Stack = createStackNavigator();
 
 const AuthRoutes = () => {

   return (
     <Stack.Navigator screenOptions={{ headerShown: true }}>
 
       <Stack.Screen name="LoginSelect" component={LoginSelect} options={{headerShown: false }} />
       <Stack.Screen name="ProviderStaffScreen" component={ProviderStaffScreen} options={{headerShown: false }}  />
       <Stack.Screen name="ProviderOptionScreen" component={ProviderOptionScreen} options={{headerShown: false }}  />
       <Stack.Screen name="Login" component={Login} options={{headerShown: false }}  /> 
        
        
       <Stack.Screen name="SignUp" component={SignUp} 
       options={{ header:(props)=>
        (
          <Header leftIconColor={COLORS?.black}  titleColor={COLORS?.black} backgroundColor={COLORS.lightmainColor}  title="Provider Signup" showLeftIcon={true} showRightIcon={false} {...props} /> 
        ) }}
      />  

       <Stack.Screen name="ProviderSignupIndividualandPractice" component={ProviderSignupIndividualandPractice}
        options={{ header:(props)=>
          (
          <Header  backgroundColor={COLORS.lightmainColor}  titleColor={COLORS?.black} title="Provider Signup" leftIconColor={COLORS?.black} showLeftIcon={true} showRightIcon={false}  {...props}  /> 
            )
        }}
       />

      <Stack.Screen name="ForgetPassword" component={ForgetPassword}
        options={{ header:(props)=>
          (
          <Header titleColor={COLORS?.black} leftIconColor={COLORS?.black} backgroundColor={COLORS.lightmainColor}   title="Forget Password" showLeftIcon={true} showRightIcon={false}  {...props}  /> 
            )
        }}
       />

      
       {/* //patients */}
       <Stack.Screen name="SignupPatient" component={SignupPatient} 
          options={{ header:(props)=>
            (
              <Header titleColor={COLORS?.black} leftIconColor={COLORS?.black} backgroundColor={COLORS.lightmainColor}   title="Patient Sign Up" showLeftIcon={true} showRightIcon={false}  {...props}  /> 
            )
          }}
       
       />









     </Stack.Navigator>
   );
 };
 
 export default AuthRoutes;
 