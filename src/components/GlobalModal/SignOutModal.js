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
  Pressable,
  Modal,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector ,useDispatch} from 'react-redux'
import { HandleModal, HandleModalSignOut, selectedCity, selectedCountry, selectedSpeciality, selectedState } from '../../stores/actions/form.action'
import { COLORS, FONTS, SHADOW, SIZES } from '../../constraints/Index'
import { IONICONS } from '../../constraints/Icons'
import ButtonNoLogo from '../ButtonNoLogo'

const SignOutModal = ({ onPress, value }) => {


  const dispatch =  useDispatch()
  
  const title = useSelector((state)=> state?.formReducer?.modalSignoutStatus?.title)
  const visibility = useSelector((state)=> state?.formReducer?.modalSignoutStatus?.visibility)

  console.log("title",title);
  console.log("visibility",visibility);

  function SignOutYes() {
    dispatch(HandleModalSignOut({
        visibility: false,
        title: "",
       }))
     
  }

  function SignOutCancel() {
    dispatch(HandleModalSignOut({
        visibility: false,
        title: "",
       }))
     
  }


  return (
      <>

{visibility ? 
  <Modal
    isVisible={false}
    transparent={true}
    animationIn="zoomInUp"
    animationOut="zoomOutDown"
    backdropOpacity={0.7}
    backdropColor={"#020d1c"}
    animationInTiming={1000}
    animationOutTiming={1000}
  >
   <View style={{ flex: 1,  backgroundColor: "rgba(0,0,0,0.5)",  justifyContent: 'center', paddingHorizontal: 25  }} >
     
   <Text onPress={()=>{SignOutCancel()}}  style={{  zIndex: 9999, alignSelf: "flex-end", position: "absolute", top: 20, color: "#fff"}} ><Icon name={IONICONS?.close} size={40} color={COLORS.lightwhite} />{"    "}</Text>
     
      <View style={{ backgroundColor: COLORS.mainColor,  height: 100, borderRadius: 10, padding: 20 }} >
   
      <View style={{ flexDirection: "row", alignItems: "center" }} >
      <Icon name={IONICONS.power} size={20} color={COLORS.white} onPress={ ()=> console.log("Pressed") } />
      <Text style={{ color: COLORS.white, fontSize: 20, paddingLeft: 5, ...FONTS.p1 }} >Logout</Text>
      </View>

      <View style={{ paddingVertical: 3 }} >
      <Text style={{ color: COLORS.white, ...FONTS.p4}} >Are You Sure You Want To Logout</Text>
      </View>

      <View style={{ paddingVertical: 5, alignSelf: "flex-end", flexDirection: "row" }} >
      <Pressable onPress={()=>{SignOutYes()}}  >
      <Text style={{ color: COLORS.white, ...FONTS.p4, paddingRight: 25}} >Yes</Text>
      </Pressable>
      
      <Pressable onPress={()=>{SignOutCancel()}}>
      <Text style={{ color: COLORS.white, ...FONTS.p4, paddingRight: 10}} >Cancel</Text>
      </Pressable>
      </View>

      </View>
    </View> 
    </Modal>

    : <></>}

  </>
   )
}

export default SignOutModal
