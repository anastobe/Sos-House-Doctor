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
import { COLORS, FONTS, SHADOW, SIZES } from '../constraints/Theme'

const Box = ({ onPress, value, ...props }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onPress()
        }}
        style={{
          borderColor: props?.borderCol,
          borderWidth: props?.borderWid,
          width: props?.boxwidth,
          height: props?.boxheight,
          alignItems: 'center',
          backgroundColor: value ? COLORS.btnColor : COLORS.white ,
          borderRadius: 3,
          marginRight: 10,
          ...props?.showShadow
        
        }}>
        {value ? <Icon name="checkmark" size={18} color={COLORS.white} /> : null}
      </TouchableOpacity>
    </>
  )
}

export default Box
