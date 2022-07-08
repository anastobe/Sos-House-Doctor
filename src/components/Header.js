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
import { COLORS, FONTS, SHADOW, SIZES } from '../constraints/Theme'

const Header = ({...props}) => {

  console.log("navigation h===>",props);
  
  const noticationCondition = useSelector((state)=> state?.formReducer?.noticationCondition)
  console.log("we get===>",noticationCondition);


  const showNotificationHandler = () =>{
    props?.navigation.navigate( noticationCondition == 'Provider' ? "Notifications" :  "NotificationPatient"  )
    //  noticationCondition == 'Provider' ? console.log("Notifications")  : console.log("NotificationPatient")  
 
    }


  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingTop: 20, paddingBottom: 15, backgroundColor: props?.backgroundColor, alignItems: "center" }} >
      
      {props?.showLeftIcon ?
      <Icon name={IONICONS.backarrow} size={30}color={props?.leftIconColor} onPress={ ()=> props?.navigation.goBack() } />
      : <Text>.</Text>}

      <Text style={{ ...FONTS.p1, fontWeight: '700', color: props?.titleColor}} >{props?.title}</Text> 
      {props?.showRightIcon ?
      <Icon name={props?.rightIcon} size={27} color={props?.rightIconColor} onPress={ ()=> showNotificationHandler() } />
      : <Text>{"   "}</Text>}
    </View>
  )
}

export default Header










{/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingTop: 25, paddingBottom: 20, backgroundColor: props?.backgroundColor }} >
    <Icon name={props?.leftIcon} size={25} 
    
    color={ props?.headerTxtColor ? props?.headerTxtColor : COLORS.black} 
    
    onPress={ ()=> navigation.goBack() } />
    
     <Text style={{ ...FONTS.p1, fontWeight: '700',
     
     color: props?.titleColor ? props?.titleColor : COLORS.black }} 
     
     >{title}</Text> 
     
     {props?.rightIcon ?
     <Icon name={props.rightIcon} size={25} color={props?.rightIconColor} onPress={ ()=> navigation.goBack() } />
     : <Text>{""}</Text> }
    </View> */}