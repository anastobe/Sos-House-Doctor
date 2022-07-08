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

const ReferFriendPatient = ({ navigation, route }) => {

 const renderTabs = () =>{
     return(
         <>
         <View style={{ alignItems: "center", flexDirection: "row", justifyContent: 'center', justifyContent: "space-around",  marginHorizontal: 10 }} >

           <TouchableOpacity onPress={()=> navigation.navigate("SuccessfullReferPatient") } style={{ height: 45, width: '49%', backgroundColor: COLORS.btnColor2, alignItems: "center", justifyContent: "center", borderRadius: 5, ...SHADOWELEV_2  }} >
            <Text style={{ ...FONTS.p6, fontWeight: "600", color: COLORS.white }} >My Referrals</Text>
           </TouchableOpacity>  

           <TouchableOpacity onPress={()=> navigation.navigate("EarningWalletPatient") }  style={{ height: 45, width: '49%', backgroundColor: COLORS.mainColor, alignItems: "center", justifyContent: "center", borderRadius: 5, ...SHADOWELEV_2   }} >
           <Text style={{ ...FONTS.p6, fontWeight: "600", color: COLORS.white }} >View Earning</Text>
           </TouchableOpacity>  

         </View>
         </>
     )
 }

 const renderImage = () =>{
     return(
        <View style={{ alignItems: "center",marginTop: -10 }} >
          <Image source={IMAGES.Workingprocess} />
        </View>
     )
 }

 const renderBottomText = () =>{
     return(
         <View style={{ alignItems: "center", alignSelf: "center", marginHorizontal: 15, marginTop: 10}} >
             <Text style={{ textAlign: 'center', ...FONTS.p4,  color: COLORS.black }} >Earn 5 points each time you sign up a {"\n"} friend with your referral code<Text style={{ color: COLORS?.btnColor }} > SOS-Anas Ahmed</Text></Text>
         </View>
     )
 } 

 const ReferNow = () =>{
     return(
        <ButtonNoLogo
        title="Refer a friend"
        backcolor={COLORS.btnColor2}
        txtcolor={COLORS.white}
        verticlePadding={20}
        width={160}
        onPress1={()=>{ navigation.navigate("ReferFriendInvitePatient") }}
        />
     )
 }

  return ( 
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.btnColor} />
      {/* <Header leftIcon={IONICONS.drawerIcon}  title="Refer friend(s)" navigation={navigation} rightIconColor={COLORS.btnColor} /> */}
       {renderTabs()}
      <View style={{ flex: 1, backgroundColor: COLORS.lightmainColor, justifyContent: "center" }}>

       {renderImage()}
       {renderBottomText()}
       {ReferNow()}

        
      </View>
    </>
  )
}

export default ReferFriendPatient

































