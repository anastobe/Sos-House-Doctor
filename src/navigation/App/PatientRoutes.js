import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Vibration,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
  Image
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomePatient from "../../screens/PatientRoutes/HomePatient"
import HomePatientForMap from "../../screens/PatientRoutes/HomePatientForMap"
import ProfilePatient from '../../screens/PatientRoutes/ProfilePatient';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../../screens/Approutes/Profile';
import ReferFriend from '../../screens/Approutes/ReferFriend';
import SuccessfullRefer from '../../screens/Approutes/SuccessfullRefer';
import ReferalWallet from '../../screens/Approutes/ReferalWallet';
import ReferFriendInvite from '../../screens/Approutes/ReferFriendInvite';
import Setting from '../../screens/Approutes/Setting';
import Contact from '../../screens/Approutes/Contact';
import Earning from '../../screens/Approutes/Earning';
import Request from '../../screens/Approutes/Request';
import MyAppoinmentPatient from '../../screens/PatientRoutes/MyAppoinmentPatient';
import Notifications from '../../screens/Approutes/Notifications';
import Header from '../../components/Header';
import { IONICONS } from '../../constraints/Icons';
import HeaderDrawer from '../../components/HeaderDrawer';
import { COLORS } from '../../constraints/Theme';
import CustomDrawerPatient from '../CustomDrawerPatient';
import PaymentPatient from '../../screens/PatientRoutes/PaymentPatient';
import ReferFriendPatient from '../../screens/PatientRoutes/ReferFriendPatient';
import SettingPatient from '../../screens/PatientRoutes/SettingPatient';
import ContactPatient from '../../screens/PatientRoutes/ContactPatient';
import WalletPatient from '../../screens/PatientRoutes/WalletPatient';
import NotificationPatient from '../../screens/PatientRoutes/NotificationPatient';

const Stack = createStackNavigator();
 
 const PatientRoutes = () => {
   
  const Drawer = createDrawerNavigator();

   return (
     <Drawer.Navigator
     screenOptions={({ navigation, route }) => ({
      headerShown: true,
    })}
    drawerContent={(props) => <CustomDrawerPatient {...props} />
  }
    >


      {/* <Drawer.Screen name="HomePatientForMap" component={HomePatientForMap}
       options={{ header:(props)=>
        (<></>
            // <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black} leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Home patient" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
            )
        }}
       /> */}

       <Drawer.Screen name="HomePatient" component={HomePatient}
       options={{ header:(props)=>
        (<></>
            // <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black} leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Home patient" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
            )
        }}
       />
        <Drawer.Screen name="ProfilePatient" component={ProfilePatient}
         options={{ header:(props)=>
           (
            <HeaderDrawer TitleColor={COLORS?.black} leftIconColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS?.lightmainColor} title="Profile" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
           )
         }}
          />

       <Drawer.Screen name="MyAppoinmentPatient" component={MyAppoinmentPatient}
         options={{ header:(props)=>
          (
            <HeaderDrawer TitleColor={COLORS?.black} leftIconColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS?.lightmainColor} title="My Appoinment(s)" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
          )
        }}
         />

        <Drawer.Screen name="PaymentPatient" component={PaymentPatient}
         options={{ header:(props)=>
          (
            <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black} leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Payment(s)" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
          )
        }}
         />

        <Drawer.Screen name="ReferFriendPatient" component={ReferFriendPatient}
         options={{ header:(props)=>
          (
            <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Visit History" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
          )
        }}
         />
         
        <Drawer.Screen name="WalletPatient" component={WalletPatient}
         options={{ header:(props)=>
          (
            <HeaderDrawer TitleColor={COLORS?.white} leftIconColor={COLORS?.white} leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS?.mainColor} title="Wallet" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS?.white} {...props} />
          )
        }}
         />

        <Drawer.Screen name="SettingPatient" component={SettingPatient}
       options={{ header:(props)=>
        (
          <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmaishadnColor} title="Setting" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
        }}
        />

        <Drawer.Screen name="ContactPatient" component={ContactPatient}
         options={{ header:(props)=>
         (
           <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Contact" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
         )
        }}
        />

        <Drawer.Screen name="NotificationPatient" component={NotificationPatient}
         options={{ header:(props)=>
         (
          //  <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Notifications" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
           <Header titleColor={COLORS?.black} title="Notifications" backgroundColor={COLORS?.lightmainColor} leftIconColor={COLORS?.black} showLeftIcon={true} showRightIcon={false} {...props}  /> 
           )
        }}
        />

{/* 
       <Drawer.Screen name="ReferFriend" component={ReferFriend} 
        options={{ header:(props)=>
          (
            <Header  title="Refer Friends" backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={false} {...props}  /> 
          )
        }}
        />

       <Drawer.Screen name="SuccessfullRefer" component={SuccessfullRefer} 
        options={{ header:(props)=>
          (
            <Header  title="Successful Referal" backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={false} {...props}  /> 
          )
        }}
        />

       <Drawer.Screen name="ReferalWallet" component={ReferalWallet} 
        options={{ header:(props)=>
          (
            <Header  title="My Referal Wallet" backgroundColor={COLORS.mainColor}  showLeftIcon={true} showRightIcon={false} navigation={props}  /> 
          )
        }}
      />

       <Drawer.Screen name="ReferFriendInvite" component={ReferFriendInvite} 
       options={{ header:(props)=>
        (
          <HeaderDrawer leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Refer friend(s)" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
       />

       <Drawer.Screen name="Setting" component={Setting}
       options={{ header:(props)=>
        (
          <HeaderDrawer leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Setting" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
       />

       <Drawer.Screen name="Contact" component={Contact}
       options={{ header:(props)=>
        (
          <HeaderDrawer leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Contact" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
       />
       
       <Drawer.Screen name="Earning" component={Earning}
       options={{ header:(props)=>
        (
          <HeaderDrawer leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Earning" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
      />
      
       <Drawer.Screen name="Request" component={Request}
        options={{ header:(props)=>
          (
            <Header title="Request" backgroundColor={COLORS.lightmainColor} showLeftIcon={true} showRightIcon={false} {...props}  /> 
          )
        }}
      />
      
       <Drawer.Screen name="Notifications" component={Notifications}
       options={{ header:(props)=>
        (
          <HeaderDrawer leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Notifications" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
      />

       <Drawer.Screen name="MyAppoinment" component={MyAppoinment}
         options={{ header:(props)=>
          (
            <Header  title="MyAppoinment"backgroundColor={COLORS.lightmainColor} showLeftIcon={true} showRightIcon={false} {...props}  /> 
          )
        }}
         /> */}

       
     </Drawer.Navigator>
   );
 };
 
 export default PatientRoutes;
 
 