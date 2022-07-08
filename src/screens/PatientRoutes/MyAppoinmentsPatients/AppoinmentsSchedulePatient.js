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
  Image
} from 'react-native'
import { COLORS, FONTS, SHADOW, SHADOWELEV_1, SHADOWELEV_2, SIZES } from '../../../constraints/Theme';
import { IMAGES } from '../../../constraints/Index';
import InvalidStatusCard from '../../../components/InvalidStatusCard';


const AppoinmentsSchedulePatient = ({ navigation, route,  }) => {

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

      <InvalidStatusCard heights={250} showlowtext={true} label="you have no scheduled visit"  img={IMAGES?.ProviderPic} />


      {/* </ScrollView> */}
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

export default AppoinmentsSchedulePatient































