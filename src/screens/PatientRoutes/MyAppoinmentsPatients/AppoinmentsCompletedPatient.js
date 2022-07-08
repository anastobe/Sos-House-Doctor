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
import InvalidStatusCard from '../../../components/InvalidStatusCard';
import { IMAGES, COLORS, SHADOW, FONTS } from '../../../constraints/Index';

const AppoinmentsCompletedPatient = ({ navigation, route,  }) => {
  
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
  
        <InvalidStatusCard heights={190} showlowtext={false} label="No bookings available" img={IMAGES?.ProviderPic} />
  
  
        {/* </ScrollView> */}
      </View>
      </>
        );
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default AppoinmentsCompletedPatient































