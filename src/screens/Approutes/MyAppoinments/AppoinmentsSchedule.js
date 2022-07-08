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


const AppoinmentsSchedule = ({ navigation, route,  }) => {
  

  return (
    //  <Card />
    <View style={{ flex: 1, backgroundColor: COLORS.lightmainColor, marginTop: 25 }} >

    <View style={{ height: 220  ,backgroundColor: COLORS?.white, borderRadius: 5, ...SHADOWELEV_2 , marginHorizontal: 15,}} >

{/* upper Content   */}
    <View style={{ flexDirection: "row" }} >

    <View style={{ margin: 10 }} >
      <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: 'contain'
          }}
          source={IMAGES.homeProfilePic}
          />
    </View>

     <View style={{ marginTop: 10, width: 250 }} >

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",  }} >

        <View  >
        <Text style={{ ...FONTS.p4, fontWeight: 'bold', color: COLORS.black }} >Emma Alaxander</Text>
        </View>

       <TouchableOpacity
      style={{
        height: 40,
        width: 55,
        backgroundColor: COLORS.btnColor,
        borderRadius: 5,
        justifyContent: "center",

      }}
      >
          <Text style={{
            ...FONTS.p3,
            color: COLORS.white,
            fontWeight: '700',
            textAlign: "center",
          }}>
     $40.00
        </Text>

    </TouchableOpacity>

  

      </View>

       <Text>Request Type: Teleconsult </Text>
       <Text>Date: 10/04/2022 </Text>
       <Text>Time: 8:50 PM</Text>
       <Text>Address: Catherine Avenue</Text>
       <Text> Los Angeles, CA 90026</Text>
     </View>

    </View>

    <View style={{ marginHorizontal: 15, marginTop: 15, flexDirection: "row", justifyContent: "space-between" }} >

    <View>
    <TouchableOpacity
      style={{
        height: 40,
        width: 110,
        backgroundColor: COLORS.btnColor,
        borderRadius: 5,
        justifyContent: "center",

      }}
      >
          <Text style={{
            ...FONTS.p4,
            color: COLORS.white,
            fontWeight: '700',
            textAlign: "center",
          }}>
     Complete
        </Text>
    </TouchableOpacity>
    </View>

    <View style={{ flexDirection: "row", justifyContent: "space-between" ,width: 120, alignItems: 'center' }} > 
    <Image style={{
      width: 22,
      height: 22,
      resizeMode: 'contain'
    }}
    source={IMAGES.videocall} 
  />
  <Image style={{
      width: 22,
      height: 22,
      resizeMode: 'contain'
    }}
    source={IMAGES.calling} 
  />
        <Image style={{
      width: 22,
      height: 22,
      resizeMode: 'contain'
    }}
    source={IMAGES.massage} 
  />
    </View>
    </View>
    </View>
    </View>
    );
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default AppoinmentsSchedule































