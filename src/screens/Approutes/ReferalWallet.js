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
import HeaderDrawer from '../../components/HeaderDrawer'
import ButtonNoLogo from '../../components/ButtonNoLogo'
import { COLORS, FONTS, SHADOW, SIZES } from '../../constraints/Index'
import Icon from 'react-native-vector-icons/Ionicons'
import { IONICONS } from '../../constraints/Icons'
import CircularProgress from 'react-native-circular-progress-indicator';
import Header from '../../components/Header'
import { SHADOWBOXDARK } from '../../constraints/Theme'
const ReferalWallet = ({ ...props }) => {

    const CircularBar = () =>{
        return(
            <View style={{ height: 360, backgroundColor: "#fff", marginHorizontal: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 40, ...SHADOWBOXDARK }} >

            <CircularProgress
      value={50}
      radius={120}
      duration={1000}
      activeStrokeWidth={20} 
      activeStrokeColor={COLORS.btnColor} 
      inActiveStrokeWidth={20} 
      inActiveStrokeColor={COLORS.lightmainColor} 
      progressValueColor={COLORS.btnColor}
      subtitle={"$"}
      maxValue={200}
      titleFontSize={10}
      subtitleFontSize={20}
      progressFormatter={() => {
        'worklet';
        return (50).toFixed(2); // 2 decimal places
      }}
    />
            </View>
        )
    }

    const BtnCollect = () =>{
        return(
           <ButtonNoLogo
           title="Collect"
           backcolor={COLORS.btnColor2}
           txtcolor={COLORS.white}
           verticlePadding={100}
           width={170}
           FontsBoldness={'800'}
         />
        )
    }
   

  return ( 
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS?.mainColor} />
      {/* <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.white}  leftIconColor={COLORS?.white} backgroundColor={COLORS.mainColor}  showLeftIcon={true} showRightIcon={true} {...props}  />  */}

      {/* <Header backgroundColor={COLORS.mainColor} leftIcon={IONICONS.backarrow}  title="Refer friend(s)" titleColor={COLORS.white} navigation={navigation} rightIconColor={COLORS.white} rightIcon={IONICONS.notificationIcon} headerTxtColor={COLORS.white} /> */}
      <View style={{ flex: 1, backgroundColor: COLORS.mainColor }}>

        <Text style={{ alignSelf: "center", ...FONTS.p2, color: COLORS?.white, fontWeight: "700" }} >My Referal Wallet</Text>

        {CircularBar()}
        {BtnCollect()}


        
      </View>
    </>
  )
}

export default ReferalWallet

































