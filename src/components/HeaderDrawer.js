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
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import ICONS, { IONICONS } from '../constraints/Icons'
import { COLORS, FONTS, SHADOW, SHADOWBOX, SIZES } from '../constraints/Theme'

const HeaderDrawer = ({title, ...props}) => {
  
  const noticationCondition = useSelector((state)=> state?.formReducer?.noticationCondition)
  console.log("we get noticationCondition ================>",noticationCondition);


  
  const showNotificationHandler = () =>{
    props?.navigation.navigate( noticationCondition == 'Provider' ? "Notifications" :  "NotificationPatient"  )
    //  noticationCondition == 'Provider' ? console.log("Notifications")  : console.log("NotificationPatient")  
 
    }



  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, alignItems: "center", backgroundColor: props?.backgroundColor ? props?.backgroundColor :  COLORS.lightmainColor , paddingTop: 25, paddingBottom: 15, paddingHorizontal: 15 }} >
    <Icon name={props.leftIcon} size={25} color={props?.leftIconColor} onPress={()=>{props?.navigation.openDrawer()}}  />
     <Text style={{ ...FONTS.p1, fontWeight: '700', color: props?.TitleColor }} >{title}</Text> 
     
     {props.rightIcon ?
     <Icon name={props.rightIcon} size={25} color={props.rightIconColor} onPress={ ()=> showNotificationHandler() } />
     : <Text>{"   "}</Text>}
    </View>
  )
}

export default HeaderDrawer
