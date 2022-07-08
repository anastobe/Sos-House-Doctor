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

const SettingPatient = ({ navigation, route }) => {


  const resetPasswordCards = () =>{
    return(
        <View style={{ height: 90, marginVertical: 20 ,backgroundColor: "#fff", marginHorizontal: 15, borderRadius: 5, ...SHADOWELEV_2, justifyContent: "space-around", paddingHorizontal: 15 }} >

        <Text style={{ ...FONTS.p5,color: COLORS.black, paddingTop: 10, marginLeft: -8 }}  >Reset Password</Text>
        <View
      style={{
        marginVertical: 5,
        ...SHADOWELEV_2,
      }}>
      <TouchableOpacity
        style={{
          height: 30,
          backgroundColor: COLORS.btnColor2,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          marginHorizontal: 5,
        }}
        onPress={()=>{ resetPassword()}}>
        <Text style={{ ...FONTS.p4, color: COLORS.white }}>Click Here</Text>
      </TouchableOpacity>
    </View>

  
      </View>
    )
}

  return ( 
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.btnColor} />
       <View style={{ flex: 1,backgroundColor: COLORS?.lightmainColor}}>
           
           {resetPasswordCards()}

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

export default SettingPatient

































