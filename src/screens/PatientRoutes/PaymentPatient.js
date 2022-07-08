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

const PaymentPatient = ({ navigation, route }) => {
  
  
  const card = () =>{
    return(
      <View style={{ height: 250 ,backgroundColor: COLORS.mainColor, marginHorizontal: 15, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
        
        <View style={{ height: 100, width: 100, backgroundColor: COLORS.white, borderRadius: 50 }} >
        <Image
      style={{
        width: 100,
        height: 100,
        resizeMode: 'contain'
      }}
      source={IMAGES.drWilliam}
    />
        </View>

          <Text style={{ ...FONTS.p5, color: COLORS.white, marginTop: 20 ,fontWeight: "700", textAlign: "center" }} >No payment {"\n"} methode added </Text>
          <Text style={{ ...FONTS.p5, color: COLORS.white, marginTop: 15 , fontWeight: "600", textAlign: "center" }} >Add now</Text>

      </View>
    )
  }

  
  return ( 
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.btnColor} />
       <View style={{ 
        flex: 1, 
        backgroundColor: COLORS?.lightmainColor,
        justifyContent: "center"        
        }}>
        {/* <ScrollView> */}
           
        {card()}

        {/* </ScrollView> */}
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

export default PaymentPatient

































