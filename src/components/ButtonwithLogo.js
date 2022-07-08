import React, { useEffect, useRef, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
// import Images from '../constraints/Images'
import { COLORS, FONTS, SHADOW, IMAGES } from '../constraints/Index'

const ButtonwithLogo = ({
  title,
  backcolor,
  txtcolor,
  verticlePadding,
  pic,
  bordercolor
}) => {
  return (
    <View
      style={{
        backgroundColor: backcolor,
        borderColor: bordercolor,
        borderRadius: 5,
        borderWidth: 1,
        alignSelf: 'center',
        marginVertical: verticlePadding,
        // ...SHADOW
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 42,
          width: 250,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={() => {
          console.log('I am Pressed')
        }}>
        <Image
          style={{
            width: 18,
            height: 18,
            resizeMode: 'contain'
          }}
          source={pic}
        />
        <Text style={{ ...FONTS.p4, color: txtcolor, fontWeight: '600' }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonwithLogo
