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
import { COLORS, FONTS, SHADOW, SHADOWELEV_1, SHADOWELEV_2, SIZES } from '../../constraints/Theme'

const CommentsInputField = ({ ChangeText = () => {},required, keboardtype, maxlen,focus ,...props }) => {
  
  const[renove,setrenove] = useState()

  useEffect(()=>{
    setrenove(required)
  },[required])

  

  return (
    <View>
    <View style={{ marginHorizontal: 15 , marginVertical:  SIZES.padding  }} >
      <Text style={{ color: props?.btnTxtColor ? props?.btnTxtColor : COLORS?.btnTxtColor, ...FONTS.p4, marginBottom: 5,  fontWeight: props?.titleBolness  }} >{props?.title}</Text>
      <View style={{ borderColor: COLORS?.white, borderWidth: 1, borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2 , height: 86 }}>
        <TextInput onFocus={()=>{setrenove("")}} autoFocus={focus} keyboardType={keboardtype} maxLength={maxlen} value={props.value} onChangeText={ChangeText} placeholder={props.placeholdertxt}  style={{ fontSize: props?.fontSizes }} />
        <Text style={{ color: "red", alignSelf: "flex-end", color: props?.btnTxtColor  }}  > {props?.value?.length}/500    </Text>
      </View>
        <Text style={{ color: "red" }}  > {renove}</Text>
    </View>
    </View>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default CommentsInputField
