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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Contact from './Contact';
import Earning from './Earning';
import { IONICONS } from '../../constraints/Icons';
import { COLORS, FONTS, SHADOW, SHADOWBOXDARK, SHADOWELEV_2 } from '../../constraints/Theme';
import HeaderDrawer from '../../components/HeaderDrawer';
import Card from '../../components/Card';
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createMaterialTopTabNavigator();


const Notifications = ({ navigation, route,  }) => {

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
          <StatusBar barStyle="dark-content" backgroundColor={COLORS?.lightmainColor} />
          <View style={{ flex: 1, 
            backgroundColor: COLORS?.white}}
          >
            <ScrollView>

              {/* <Card /> */}

              {renderDate()} 
              {renderNotifications()}
              {renderNotifications()}
    
            </ScrollView>
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

export default Notifications

































