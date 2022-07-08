import React from 'react'
import {View,Text,StatusBar,Image} from 'react-native'
// import  from '../../constraints/Images'
import { COLORS,IMAGES } from '../../constraints/Index'

const SplashScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.mainColor,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <StatusBar backgroundColor={COLORS.mainColor} />
      <Image
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
        }}
        source={IMAGES.logo}
      />
    </View>
  )
}

export default SplashScreen
