import React, { useEffect, useRef, useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SHADOW, SHADOWELEV_2 } from '../constraints/Theme'

const ButtonNoLogo = ({onPress1 = () => {}, ...props }) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        marginVertical: props?.verticlePadding,
        ...SHADOW
      }}>
      <TouchableOpacity
        style={{
          height: 42,
          width: props?.width ? props?.width : 250,
          backgroundColor: props?.backcolor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          ...SHADOWELEV_2
        }}
        onPress={onPress1}>
        <Text style={{ ...FONTS.p4, color: props?.txtcolor, fontWeight: props?.FontsBoldness }}>{props?.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonNoLogo
