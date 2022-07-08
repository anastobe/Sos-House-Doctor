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
import { HandleModalMessage } from '../../stores/actions/Patient.actions'
import { COLORS, FONTS, SHADOW, SIZES } from '../../constraints/Index'
import { IONICONS } from '../../constraints/Icons'
import ButtonNoLogo from '../ButtonNoLogo'

const MessageModal = ({ onPress, value }) => {


  const dispatch =  useDispatch()
  
  const visibility = useSelector((state)=> state?.patientReducer?.globalmessageHandle?.visibility)
  const title = useSelector((state)=> state?.patientReducer?.globalmessageHandle?.title)

  console.log("state patient====>",visibility);

//   function SignOutYes() {
//     dispatch(HandleModalSignOut({
//         visibility: false,
//         title: "",
//        }))
     
//   }

  function SignOutCancel() {
    dispatch(HandleModalMessage({
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
     
      <View style={{ backgroundColor: COLORS.mainColor,  height: 100, borderRadius: 10, justifyContent: "center", paddingHorizontal: 5 }} >
   
      <Text style={{ color: COLORS.white, paddingLeft: 5, ...FONTS.p5, textAlign: "center", fontWeight: "600" }} >{title}</Text>

      </View>

    </View> 
    </Modal>

    : <></>}

  </>
   )
}

export default MessageModal
