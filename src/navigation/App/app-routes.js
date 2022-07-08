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
import Home from "../../screens/Approutes/Home"
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../CustomDrawer';
import Profile from '../../screens/Approutes/Profile';
import ReferFriend from '../../screens/Approutes/ReferFriend';
import SuccessfullRefer from '../../screens/Approutes/SuccessfullRefer';
import ReferalWallet from '../../screens/Approutes/ReferalWallet';
import ReferFriendInvite from '../../screens/Approutes/ReferFriendInvite';
import Setting from '../../screens/Approutes/Setting';
import Contact from '../../screens/Approutes/Contact';
import Earning from '../../screens/Approutes/Earning';
import Request from '../../screens/Approutes/Request';
import MyAppoinment from '../../screens/Approutes/MyAppoinment';
import Notifications from '../../screens/Approutes/Notifications';
import Header from '../../components/Header';
import { IONICONS } from '../../constraints/Icons';
import HeaderDrawer from '../../components/HeaderDrawer';
import { COLORS } from '../../constraints/Theme';

const Stack = createStackNavigator();
 
 const AppRoutes = () => {
   
  const Drawer = createDrawerNavigator();

   return (
     <Drawer.Navigator
     screenOptions={({ navigation, route }) => ({
      headerShown: true,
    })}
    drawerContent={(props) => <CustomDrawer {...props} />
  }
    >
       <Drawer.Screen name="Home" component={Home}
       options={{ header:(props)=>
        (
          <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black} leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Home" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
       />

       <Drawer.Screen name="Profile" component={Profile}
        options={{ header:(props)=>
          (
            <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Profile" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />

            // <Header title="Profile" backgroundColor={COLORS.lightmainColor} showLeftIcon={true} showRightIcon={false} {...props}  /> 
          )
        }}
         />

       <Drawer.Screen name="ReferFriend" component={ReferFriend} 
        options={{ header:(props)=>
          (
            <HeaderDrawer  leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Refer Friend(s)" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
          )
        }}
        />

       <Drawer.Screen name="Setting" component={Setting}
       options={{ header:(props)=>
        (
          <HeaderDrawer  leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmaishadnColor} title="Setting" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
       />

       <Drawer.Screen name="Contact" component={Contact}
       options={{ header:(props)=>
        (
          <HeaderDrawer  leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Contact" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
       />
       
       <Drawer.Screen name="Earning" component={Earning}
       options={{ header:(props)=>
        (
          <HeaderDrawer  leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Earning" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
      />
      
       <Drawer.Screen name="Request" component={Request}
        options={{ header:(props)=>
          (
            <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black}  leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Request(s)" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
          )
        }}
      />
      
       <Drawer.Screen name="Notifications" component={Notifications}
       options={{ header:(props)=>
        (
          <Header titleColor={COLORS?.black} title="Notifications" backgroundColor={COLORS?.lightmainColor} leftIconColor={COLORS?.black} showLeftIcon={true} showRightIcon={false} {...props}  /> 
        )
      }}
      />

       <Drawer.Screen name="MyAppoinment" component={MyAppoinment}
         options={{ header:(props)=>
          (
            <HeaderDrawer leftIconColor={COLORS?.black} TitleColor={COLORS?.black}   leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Visit History" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
          )
        }}
         />

       
     </Drawer.Navigator>
   );
 };
 
 export default AppRoutes;
 
 














{/* 
       <Drawer.Screen name="SuccessfullRefer" component={SuccessfullRefer} 
        options={{ header:(props)=>
          (
            <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.btnColor}  title="Successful Referal" backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={true} {...props}  /> 
          )
        }}
        />

       <Drawer.Screen name="ReferalWallet" component={ReferalWallet} 
        options={{ header:(props)=>
          (
            <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.white}  leftIconColor={COLORS?.white}  title="" backgroundColor={COLORS.mainColor}  showLeftIcon={true} showRightIcon={true} {...props}  /> 
          )
        }}
      />

       <Drawer.Screen name="ReferFriendInvite" component={ReferFriendInvite} 
       options={{ header:(props)=>
        (
          <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.btnColor}  leftIconColor={COLORS?.black} titleColor={COLORS?.black}  title="Refer friend(s)" backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={true} {...props}  /> 

          // <HeaderDrawer leftIcon={IONICONS.drawerIcon} backgroundColor={COLORS.lightmainColor} title="Refer friend(s)" rightIcon={IONICONS.notificationIcon} rightIconColor={COLORS.btnColor} {...props} />
        )
      }}
       /> */}