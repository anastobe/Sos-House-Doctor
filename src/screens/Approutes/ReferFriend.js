import React, { useEffect, useRef, useState } from 'react'
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
  FlatList,
  ScrollView,
  Image
} from 'react-native'
import Box from '../../components/Box'
import Header from '../../components/Header'
import { IONICONS } from '../../constraints/Icons'
import { COLORS, IMAGES, SHADOWBOX,SHADOW, SIZES, FONTS } from '../../constraints/Index'
import Icon from 'react-native-vector-icons/Ionicons'
import { SHADOWBOXDARK, SHADOWELEV_2 } from '../../constraints/Theme'
import ToggleSwitch from 'toggle-switch-react-native'
import ButtonNoLogo from '../../components/ButtonNoLogo'

const ReferFriend = ({ navigation, route }) => {

 const renderTabs = () =>{
     return(
         <>
         <View style={{ alignItems: "center", flexDirection: "row", justifyContent: 'center', justifyContent: "space-around",  marginHorizontal: 10 }} >

           <TouchableOpacity onPress={()=> navigation.navigate("SuccessfullRefer") } style={{ height: 45, width: '49%', backgroundColor: COLORS.btnColor2, alignItems: "center", justifyContent: "center", borderRadius: 5, ...SHADOWELEV_2  }} >
            <Text style={{ ...FONTS.p4, fontWeight: "600", color: COLORS.white }} >View My Referrals</Text>
           </TouchableOpacity>  

           <TouchableOpacity onPress={()=> navigation.navigate("ReferalWallet") }  style={{ height: 45, width: '49%', backgroundColor: COLORS.mainColor, alignItems: "center", justifyContent: "center", borderRadius: 5, ...SHADOWELEV_2   }} >
           <Text style={{ ...FONTS.p4, fontWeight: "600", color: COLORS.white }} >My Wallet</Text>
           </TouchableOpacity>  

         </View>
         </>
     )
 }

 const renderImage = () =>{
     return(
        <View style={{ alignItems: "center", marginVertical: 50 }} >
          <Image source={IMAGES.Workingprocess} />
        </View>
     )
 }

 const renderBottomText = () =>{
     return(
         <View style={{ alignItems: "center", width: 270, alignSelf: "center" }} >
             <Text style={{ textAlign: 'center', ...FONTS.p4, fontWeight: "700", color: COLORS.black }} >Refer a Friend and recieve $5 per sign up a with your refferal <Text style={{  ...FONTS.p4, fontWeight: "700", color: COLORS.btnColor2 }} >SOS ANAS AHMED 199 - cs - 2020</Text></Text>
         </View>
     )
 } 

 const ReferNow = () =>{
     return(
        <ButtonNoLogo
        title="Refer Now"
        backcolor={COLORS.btnColor2}
        txtcolor={COLORS.white}
        verticlePadding={50}
        width={150}
        onPress1={()=>{ navigation.navigate("ReferFriendInvite") }}
        />
     )
 }

  return ( 
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.btnColor} />
      {/* <Header leftIcon={IONICONS.drawerIcon}  title="Refer friend(s)" navigation={navigation} rightIconColor={COLORS.btnColor} /> */}
      <View style={{ flex: 1, backgroundColor: COLORS.lightmainColor }}>

       {renderTabs()}
       {renderImage()}
       {renderBottomText()}
       {ReferNow()}

        
      </View>
    </>
  )
}

export default ReferFriend

































