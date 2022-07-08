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
import { COLORS, FONTS, SHADOW, SHADOWELEV_1, SHADOWELEV_2, SIZES } from '../constraints/Theme';
import { IMAGES } from '../constraints/Index';


const InvalidStatusCard = ({ navigation, ...props }) => {
 
    // console.log("propss===>",props);

  return (
    
    <View style={{ height: props?.heights, backgroundColor: COLORS.mainColor, marginHorizontal: 15, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
        
    <View style={{ height: 100, width: 100, backgroundColor: COLORS.white, borderRadius: 50 }} >
    <Image
  style={{
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }}
  source={props?.img}
/>
    </View>

      <Text style={{ ...FONTS.p5, color: COLORS.white, marginTop: 20 ,fontWeight: "700", textAlign: "center" }} >{props?.label}</Text>
    
    { props?.showlowtext ?
      <Text style={{ ...FONTS.p5, color: COLORS.white, marginTop: 15 , fontWeight: "600", textAlign: "center" }} >Click Here</Text>
    : <></> }
    
  </View>
    
    )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default InvalidStatusCard































