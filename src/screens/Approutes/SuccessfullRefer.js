import React, { useEffect, useRef, useState } from 'react'
import {View,Text,StatusBar,Image,ScrollView,Button,TextInput} from 'react-native'
import Header from '../../components/Header'
import { IONICONS } from '../../constraints/Icons'
import { COLORS ,IMAGES, FONTS } from '../../constraints/Index'

const SuccessfullRefer = ({ ...props }) => {

  const card = () =>{
    return(
      <View style={{ height: 200 ,backgroundColor: COLORS.mainColor, marginHorizontal: 15, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
        
        <View style={{ height: 100, width: 100, backgroundColor: COLORS.white, borderRadius: 50 }} >
        <Image
      style={{
        width: 100,
        height: 100,
        resizeMode: 'contain'
      }}
      source={IMAGES.drWilliam}
    />
        </View>

        <View style={{ alignItems: 'center'}}  >
                <Text style={{ ...FONTS.p5, color: COLORS.white, marginVertical: 10, fontWeight: "700" }} >No requsest found!</Text>
        </View>
     
      </View>
    )
  }

  return (
    <>
    <StatusBar backgroundColor={COLORS.mainColor} />
  
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightmainColor,
        justifyContent: "center"
      }}>
      {/* <ScrollView> */}

        {card()}


      {/* </ScrollView> */}
    </View>
    </>
  )
}

export default SuccessfullRefer
