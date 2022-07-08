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
  Image
} from 'react-native'
import DatePicker from 'react-native-date-picker'
import Moment from 'moment';
import { IMAGES, COLORS, FONTS, SHADOW, SIZES } from '../../constraints/Index';
import { useDispatch } from 'react-redux';
import { HandleModal } from '../../stores/actions/form.action';
import { SHADOWELEV_2 } from '../../constraints/Theme';

const ModalInputFields = ({ ChangeText = ()=>{},required, onPress  , editable , ...props }) => {

  const[renove,setrenove] = useState()

  useEffect(()=>{
    setrenove(required?.msg)
  },[required])


  return (
    <>

    <View style={{ marginHorizontal: SIZES.padding + 5, marginVertical:  SIZES.padding  }} >
    <Text style={{  color: props?.btnTxtColor ?  props?.btnTxtColor : COLORS?.btnTxtColor , ...FONTS.p4, marginBottom: 5, fontWeight: props?.titleBolness    }} >{props.title}</Text>
      <TouchableOpacity onPress={()=>{onPress() , setrenove("") }}  style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, width: props?.width, flexDirection: "row", justifyContent: "space-between", alignItems: 'center',height: 42 }}>
    
        <TextInput  
         value={props.value} 
         onChangeText={ChangeText} 
         placeholder={props.placeholdertxt} 
         editable={editable}
        style={{ width: 280  }}
        placeholderTextColor={props?.placeholderTextColor}
        // onPress={()=>{onPress() , setrenove("") }} 
        // editable={true}
         color={COLORS.black}
         onFocus={()=>{setrenove("")}}
        />
     
           <Image
           style={{
             width: 20,
             height: 20,
             resizeMode: 'contain',
             marginRight: 15 
           }}
           source={IMAGES.dropDown}
         /> 
     
     
      </TouchableOpacity>
      <Text style={{ color: "red" }}  >{renove}</Text>
    </View>

    </>
  )
}

export default ModalInputFields
