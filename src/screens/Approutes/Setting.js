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
import Header from '../../components/Header'
import { IONICONS } from '../../constraints/Icons'
import { COLORS,SHADOW ,FONTS} from '../../constraints/Index'
import ToggleSwitch from 'toggle-switch-react-native'
import SingleInputField from '../../components/InputFields/SingleInputField'
import ButtonNoLogo from '../../components/ButtonNoLogo'
import { HandleModalSentEmail, HandleModalSignOut } from '../../stores/actions/form.action'
import { useDispatch } from 'react-redux'
import { SHADOWELEV_2 } from '../../constraints/Theme'


const Setting = ({ navigation, route,  }) => {

    const[onlineOffline, setonlineOffline] = useState(true)

    const dispatch =  useDispatch()

    const onchangeStatus = () =>{
        setonlineOffline(!onlineOffline)
      }


      const statusBars = (barTxt, onlineofflineStatus ,barStatus, handleStatus ) =>{
  
        return(
          <View style={{ height: 75, marginVertical: 10 ,backgroundColor: "#fff", marginHorizontal: 15, borderRadius: 5, ...SHADOWELEV_2, justifyContent: "space-around", paddingHorizontal: 15,  }} >
            <Text style={{ ...FONTS.p5, fontWeight: "bold", color: COLORS.black, paddingTop: 10 }}  >{barTxt}</Text>
      
            <View
             style={{
              margin: 0,
              borderBottomColor: '#C4C4C4',
              borderBottomWidth: 1,
             }}
            />
      
            <View style={{ justifyContent: "space-between", flexDirection: "row" }} >
              <Text style={{ ...FONTS.p3, color: COLORS.lightTxtColor, fontWeight: "bold" }}  >{barStatus}</Text>
               <ToggleSwitch isOn={onlineofflineStatus} onColor={COLORS?.btnColor} offColor={COLORS?.textColor}  size="small" onToggle={handleStatus} />    
            </View>
      
          </View>
        )
      }
      
      
const resetPassword = () =>{
  
  dispatch(HandleModalSentEmail({
    visibility: true,
    title: "You have revieve n emil at ***********@gmail.com with a link to reset your password",
   }))

  }

  const resetPasswordCards = () =>{
    return(
        <View style={{ height: 90, marginVertical: 20 ,backgroundColor: "#fff", marginHorizontal: 15, borderRadius: 5, ...SHADOWELEV_2, justifyContent: "space-around", paddingHorizontal: 15 }} >

        <Text style={{ ...FONTS.p5,color: COLORS.black, paddingTop: 10, marginLeft: -8 }}  >Reset Password</Text>
        <View
      style={{
        marginVertical: 5,
        ...SHADOWELEV_2,
      }}>
      <TouchableOpacity
        style={{
          height: 30,
          backgroundColor: COLORS.btnColor2,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          marginHorizontal: 5,
        }}
        onPress={()=>{ resetPassword()}}>
        <Text style={{ ...FONTS.p4, color: COLORS.white }}>Click Here</Text>
      </TouchableOpacity>
    </View>

  
      </View>
    )
}


    return (
   <>
    <StatusBar backgroundColor={COLORS.mainColor} />
    {/* <Header backgroundColor={COLORS.shadowColor} leftIcon={IONICONS?.backarrow}  title="Setting(s)" titleColor={COLORS.black} navigation={navigation} rightIconColor={COLORS.black} rightIcon={IONICONS.notificationIcon} headerTxtColor={COLORS.black} /> */}
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightmainColor,
        justifyContent: "center"
      }}>

          
<ScrollView>
      {statusBars("Status", onlineOffline ,"Online/ Offline",onchangeStatus)}
      {resetPasswordCards()}
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

export default Setting

