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
  FlatList,
  ScrollView,
  Linking,
  Image
} from 'react-native'
import Box from '../../components/Box'
import Header from '../../components/Header'
import { IONICONS } from '../../constraints/Icons'
import { COLORS, IMAGES, SHADOWBOX,SHADOW, SIZES, FONTS } from '../../constraints/Index'
import Icon from 'react-native-vector-icons/Ionicons'
import { SHADOWBOXDARK, SHADOWELEV_2 } from '../../constraints/Theme'


const NotificationPatient = ({ navigation, route }) => {

  function renderDate() {
    return(
        <>
            <Text onPress={()=>navigation.navigate("Profile")} style={{ ...FONTS.p5, fontWeight: "bold", color: COLORS.black, marginLeft: 15, marginVertical: 15 }} >March 12, 2022</Text>
        </>
    )
}

function renderNotifications(){
    return(
        <View style={{ height: 90, backgroundColor: "#fff", marginHorizontal: 15, borderRadius: 5, ...SHADOWELEV_2 ,  paddingHorizontal: 15, marginVertical: 6, justifyContent: "center" }} >

        <Text style={{ ...FONTS.p5, fontWeight: "bold", color: COLORS.black }}  >Booking Request</Text>
        <Text style={{ ...FONTS.p4, color: COLORS.wh, marginTop: 5 }} >You have a new Teleconsult booking request.</Text>
        <View
style={{
borderBottomColor: 'blue',
width: 80,
borderBottomWidth: 1,
marginVertical: 5,
}}
/>
        <View style={{ flexDirection: "row" ,justifyContent: "space-between", alignItems: "center" }} >
        <Text style={{ ...FONTS.p4, color: COLORS.black, }} >12/04/2022 06:12 PM</Text>
        <Icon name={IONICONS.dustbin} size={25} color={COLORS.btnColor} />
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
      }}>

    {renderDate()} 
    {renderNotifications()}

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

export default NotificationPatient

































