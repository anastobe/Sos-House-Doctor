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
  StyleSheet
} from 'react-native'
import { IONICONS } from '../../constraints/Icons';
import { COLORS, FONTS, SHADOW, SHADOWELEV_2, SIZES } from '../../constraints/Theme'
import Icon from 'react-native-vector-icons/Ionicons'

const PasswordInputField = ({ ChangeText = () => {},required, onpresseye, ...props  }) => {
  

    const[renove,setrenove] = useState()

    useEffect(()=>{
      setrenove(required?.msg)
    },[required])
  
    
  return (
    <View style={{ marginHorizontal: SIZES.padding + 5, marginVertical:  SIZES.padding }} >
      <Text style={{  color: COLORS.btnTxtColor, ...FONTS.p4, marginBottom: 5,  }} >{props.title}</Text>
      <View style={{ borderColor: COLORS.white, borderWidth: 1, borderRadius: 4, backgroundColor: "#fff", ...SHADOWELEV_2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 42   }}>
       
        <TextInput style={{ width: 260 }} secureTextEntry={props.eyestatus ? true : false}  value={props.value} onChangeText={ChangeText} placeholder={props.placeholdertxt} keyboardType={props.keboardtype}  onFocus={()=>{setrenove("")}} maxLength={props?.maxlen}  />
         {props.eyestatus ?
        <TouchableOpacity style={{ marginRight: 15 }}  onPress={ ()=> onpresseye() } >
         <Icon name={IONICONS.eye} size={20} color={COLORS.btnTxtColor} /> 
        </TouchableOpacity>
         :
         <TouchableOpacity style={{ marginRight: 15 }} onPress={ ()=> onpresseye() }  >
        <Icon name={IONICONS.closeeye} size={20} color={COLORS.btnTxtColor} />
         </TouchableOpacity>}
 
      </View>
      <Text style={{ color: "red" }}  >{renove}</Text>
    </View>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default PasswordInputField
