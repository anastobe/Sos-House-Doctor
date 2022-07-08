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

const SingleInputField = ({ ChangeText = () => {},required, keboardtype, maxlen,focus ,...props }) => {
  
  const[renove,setrenove] = useState()

  useEffect(()=>{
    setrenove(required?.msg)
  },[required])


  return (
    <>


    <View style={{ marginHorizontal: props?.width ? 5 : SIZES.padding + 5 , marginVertical:  SIZES.padding  }} >
      <Text style={{  color: props?.btnTxtColor, ...FONTS.p4, marginBottom: 5, fontWeight: props?.titleBolness    }} >{props.title}</Text>
      <View style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, width: props?.width, height: 42 }}>
        <TextInput onFocus={()=>{setrenove("")}} autoFocus={focus} keyboardType={keboardtype} maxLength={maxlen} value={props.value} onChangeText={ChangeText} placeholder={props.placeholdertxt} />
        <Text style={{ color: "red" }}  >{renove}</Text>
      </View>
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

export default SingleInputField
