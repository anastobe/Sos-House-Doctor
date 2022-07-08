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
  Pressable
} from 'react-native'
import { COLORS, FONTS, SHADOW } from '../constraints/Theme'
import { conditionsForNextPage } from '../stores/actions/form.action'
import { useDispatch } from 'react-redux'

const TwoButtons = ({ onPress1 = () =>{}, onPress2 = () =>{} }) => {

  
  const dispatch =  useDispatch()

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }} >

  <TouchableOpacity onPress={()=>{onPress1(),dispatch(conditionsForNextPage(false))}}  >
     <View style={{ height: 40, width: 160, backgroundColor: COLORS.btnColor, alignItems: 'center', justifyContent: 'center', borderRadius: 4,  }} >
        <Text style={{ color: COLORS.white, ...FONTS.p4 , fontWeight: "600" }} >Individual</Text>
     </View>
    </TouchableOpacity>    

    <TouchableOpacity onPress={()=>{onPress2(),dispatch(conditionsForNextPage(true))}} >
     <View style={{ height: 40, width: 160, backgroundColor: COLORS.mainColor, alignItems: 'center', justifyContent: 'center', borderRadius: 4,  }} >
        <Text style={{ color: COLORS.white, ...FONTS.p4 , fontWeight: "600" }} >Practice</Text>
     </View>
    </TouchableOpacity>
    
    </View>
  )
}

export default TwoButtons
