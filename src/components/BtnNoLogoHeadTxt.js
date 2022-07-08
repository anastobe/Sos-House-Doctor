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
import { COLORS, FONTS, SHADOW, SHADOWELEV_2, SIZES } from '../constraints/Theme'

const BtnNoLogoHeadTxt = ({titleHeading, title, backcolor, txtcolor, verticlePadding, fontBoldness ,onPress1 = () => {} }) => {
    return (
      <View
        style={{
          marginVertical: verticlePadding,
          ...SHADOW,
          marginHorizontal: 15
        }}>
            <Text style={{ color: COLORS.black, fontWeight: "700", ...FONTS.p6, marginBottom: 5 }} >{titleHeading}</Text>
        <TouchableOpacity
          style={{
            height: 35,
            backgroundColor: backcolor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            // ...SHADOWELEV_2
          }}
          onPress={onPress1}>
          <Text style={{ ...FONTS.p4, color: txtcolor, fontWeight: fontBoldness, }}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
  }

export default BtnNoLogoHeadTxt
