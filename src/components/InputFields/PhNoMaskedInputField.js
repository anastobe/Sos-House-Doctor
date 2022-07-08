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
import MaskInput from 'react-native-mask-input'
import { COLORS, FONTS, SHADOW, SHADOWELEV_2, SIZES } from '../../constraints/Theme'

const PhNoMaskedInputField = ({ ChangeText = () => {},required, keboardtype, maxlen, mask , ...props }) => {

    
  const[renove,setrenove] = useState()

  useEffect(()=>{
    setrenove(required?.msg)
  },[required])



  return (
    <View style={{ marginHorizontal: props?.width ? 5 : SIZES.padding + 5  , marginVertical:  SIZES.padding }} >
      <Text style={{color: COLORS.btnTxtColor, ...FONTS.p4, marginBottom: 5,    }} >{props.title}</Text>
      <View style={{ borderColor: COLORS.white, borderWidth: 1, borderRadius: 4, backgroundColor: "#fff", ...SHADOWELEV_2, width: props?.width, height: 42  }}>
        <MaskInput 
         mask={mask}
        keyboardType={keboardtype} 
        maxLength={maxlen} 
        value={props.value} 
        onChangeText={ChangeText} 
        placeholder={props.placeholdertxt} 
        onFocus={()=>{setrenove("")}} 
        
        />
        <Text style={{ color: "red" }}  >{renove}</Text>
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

export default PhNoMaskedInputField
