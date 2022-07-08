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
import HeaderDrawer from '../../components/HeaderDrawer'
import CircularProgress from 'react-native-circular-progress-indicator';
import ButtonNoLogo from '../../components/ButtonNoLogo'

const WalletPatient = ({ navigation, route }) => {

  const CircularBar = () =>{
    return(
        <View style={{ height: 320, backgroundColor: "#fff", marginHorizontal: 30, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 25, ...SHADOWBOXDARK }} >

        <CircularProgress
  value={1}
  radius={120}
  duration={1000}
  activeStrokeWidth={30} 
  activeStrokeColor={COLORS.btnColor} 
  inActiveStrokeWidth={30} 
  inActiveStrokeColor={COLORS.lightmainColor} 
  progressValueColor={COLORS.btnColor}
  subtitle={"$"}
  maxValue={200}
  titleFontSize={10}
  subtitleFontSize={20}
  progressFormatter={() => {
    'worklet';
    return (0).toFixed(2); // 2 decimal places
  }}
/>
        </View>
    )
}

const BtnCollect = () =>{
    return(
       <ButtonNoLogo
       title="Add Funds"
       backcolor={COLORS?.btnColor2}
       txtcolor={COLORS?.white}
       verticlePadding={40}
       width={170}
       FontsBoldness={'700'}
     />
    )
}


  return ( 
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.btnColor} />
       <View style={{ flex: 1, 
        backgroundColor: COLORS?.mainColor,}}>
        <ScrollView>
           
        {CircularBar()}
        {BtnCollect()}

        </ScrollView>
      </View>
    </>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default WalletPatient

































