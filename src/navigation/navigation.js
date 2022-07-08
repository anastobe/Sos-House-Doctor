import React from 'react'
import {Text,View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppRoutes from './App/app-routes'
import AuthRoutes from './auth/auth-routes'
import PatientRoutes from './App/PatientRoutes'
import SplashScreen from '../screens/Splash/index';
import GlobalModal from '../components/GlobalModal/GlobalModal'
import SignOutModal from '../components/GlobalModal/SignOutModal'
import MessageModal from '../components/GlobalModal/MessageModal'
import RevieveEmailModal from '../components/GlobalModal/RevieveEmailModal'
import Calander from '../components/GlobalModal/Calander'
import Login from '../screens/AuthScreens/Login'
import ReferFriend from '../screens/Approutes/ReferFriend'
import SuccessfullRefer from '../screens/Approutes/SuccessfullRefer'
import ReferalWallet from '../screens/Approutes/ReferalWallet'
import ReferFriendInvite from '../screens/Approutes/ReferFriendInvite'
import Header from '../components/Header'
import { IONICONS } from '../constraints/Icons'
import { COLORS } from '../constraints/Theme'
import SuccessfullReferPatient from '../screens/PatientRoutes/SuccessfullReferPatient'
import EarningWalletPatient from '../screens/PatientRoutes/EarningWalletPatient'
import ReferFriendInvitePatient from '../screens/PatientRoutes/ReferFriendInvitePatient'
import PatientReqCancellationReason from '../components/GlobalModal/PatientReqCancellationReason'


const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
      
      {/* <Stack.Screen name="AuthRoutes" component={AuthRoutes}      
      options={{
          headerShown: false
        }}  /> */}
      
      <Stack.Screen name="PatientRoutes" component={PatientRoutes}   
      options={{
          headerShown: false
        }} />


     
      <Stack.Screen name="AppRoutes" component={AppRoutes}
        options={{
          headerShown: false
        }}
       />
      


{/* //screens we want navigation in provider/app route ths why i place it here   */}
       
       <Stack.Screen name="SuccessfullRefer" component={SuccessfullRefer}    
        options={{
          headerShown: true,
          header:(props)=>
          (
            <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.btnColor} title="Succesfull Refer" titleColor={COLORS.black}  leftIconColor={COLORS?.black} backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={true} {...props}  /> 
          )
        }} />

       <Stack.Screen name="ReferalWallet" component={ReferalWallet}
        options={{
          headerShown: true,
           
          header:(props)=>
          (
            <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.white}  leftIconColor={COLORS?.white} backgroundColor={COLORS.mainColor}  showLeftIcon={true} showRightIcon={true} {...props}  /> 
            )
        }}
         />

       <Stack.Screen name="ReferFriendInvite" component={ReferFriendInvite}
       options={{
        headerShown: true,
        header:(props)=>
        (
          <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.btnColor}  leftIconColor={COLORS?.black} titleColor={COLORS?.black}  title="Refer friend(s)" backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={true} {...props}  /> 
        )
      }}/>
      


{/* //screens we want navigation in patient route ths why i place it here   */}
       
       <Stack.Screen name="SuccessfullReferPatient" component={SuccessfullReferPatient}    
        options={{
          headerShown: true,
          header:(props)=>
          (
            <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.btnColor} title="Succesfull Refer" titleColor={COLORS.black}  leftIconColor={COLORS?.black} backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={true} {...props}  /> 
          )
        }} />

       <Stack.Screen name="EarningWalletPatient" component={EarningWalletPatient}
        options={{
          headerShown: true,
           
          header:(props)=>
          (
            <Header title={"Earnings"} titleColor={COLORS.black} rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.btnColor2}  leftIconColor={COLORS?.black} backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={true} {...props}  /> 
            )
        }}
         />

       <Stack.Screen name="ReferFriendInvitePatient" component={ReferFriendInvitePatient}
       options={{
        headerShown: true,
        header:(props)=>
        (
          <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.btnColor}  leftIconColor={COLORS?.black} titleColor={COLORS?.black}  title="Refer friend(s)" backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={true} {...props}  /> 
        )
      }}/>


    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
      <NavigationContainer>
        <RootStack />
        <GlobalModal />
        <SignOutModal />
        <RevieveEmailModal />
        <Calander />
        <MessageModal />
        <PatientReqCancellationReason />
      </NavigationContainer>
  )
}

export default MainNavigation









// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Home from '../screens/Home/Home.screen'
// import CameraScreen from "../screens/Home/CameraScreen"
// import Icon from 'react-native-vector-icons/Ionicons'
// import Screen2 from '../screens/Home/Screen2'
// import Screen3 from '../screens/Home/Screen3'

// const Stack = createNativeStackNavigator()
// const Tab = createBottomTabNavigator()

// // function MyTabs() {
// //   return (
// //     <Tab.Navigator>
// //       <Tab.Screen
// //         name="Home"
// //         component={Home}
// //         options={{
// //           headerShown: false,
// //           tabBarIcon: ({ focused, color, size }) => {
// //             return <Icon name={'ios-home'} size={25} color={color} />
// //           }
// //         }}
// //       />
// //       <Tab.Screen
// //         name="Profile"
// //         component={Profile}
// //         options={{
// //           headerShown: false,
// //           tabBarIcon: ({ focused, color, size }) => {
// //             return <Icon name={'ios-settings'} size={25} color={color} />
// //           }
// //         }}
// //       />
// //     </Tab.Navigator>
// //   )
// // }



// const AuthStack = () => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen
//         name="Screen3"
//         component={Screen3} />
//     </Tab.Navigator>
//   )
// }


// const MainNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>

//       <Tab.Screen
//         name="Home"
//         component={Home} />

//       <Tab.Screen
//         name="AuthStack"
//         component={AuthStack} />

//       <Tab.Screen
//         name="CameraScreen"
//         component={CameraScreen} />

//       <Tab.Screen
//         name="Screen2"
//         component={Screen2} />

      
//       <Tab.Screen
//         name="Screen3"
//         component={Screen3} />


//         {/* <Stack.Screen
//           name="HomeBase"
//           options={{ headerShown: false }}
//           component={MyTabs}
//         /> */}
//         {/* add your another screen here using -> Stack.Screen */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default MainNavigation