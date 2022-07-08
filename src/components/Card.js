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
  Image,
  Pressable
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ICONS, { IONICONS } from '../constraints/Icons'
import { COLORS, FONTS, SHADOW, SIZES, IMAGES } from '../constraints/Index'

const Card = ({ title, navigation, ...props }) => {
  return (
    <>
          
    <View style={{ alignItems: 'center', height: 190, backgroundColor: COLORS.mainColor, justifyContent: 'center', marginTop: "50%", marginHorizontal: 15, borderRadius: 5  }} >
    <View style={{ height: 100, width: 100, justifyContent: "center", alignItems: 'center' , backgroundColor: COLORS.white, borderColor: "#fff", borderWidth: 1, borderRadius: 50, }} >
     <Image
      style={{ width: 92,height: 92, resizeMode: 'contain' }} source={IMAGES?.drWilliam} />

    </View>
     <View style={{ alignItems: 'center'}}  >
      <Text style={{ ...FONTS.p5, color: COLORS.white, marginVertical: 15 }} >No Notifications Found</Text>
     </View>
    </View>

    </>
  )
}

export default Card
