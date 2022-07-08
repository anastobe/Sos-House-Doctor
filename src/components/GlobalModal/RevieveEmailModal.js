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
import { HandleModal, HandleModalSentEmail, HandleModalSignOut, selectedCity, selectedCountry, selectedSpeciality, selectedState } from '../../stores/actions/form.action'
import { COLORS, FONTS, SHADOW, SIZES } from '../../constraints/Index'
import { IONICONS } from '../../constraints/Icons'
import ButtonNoLogo from '../ButtonNoLogo'

const RevieveEmailModal = ({ onPress, value }) => {


  const dispatch =  useDispatch()
  
  const title = useSelector((state)=> state?.formReducer?.sentEmailModalStatus?.title)
  const visibility = useSelector((state)=> state?.formReducer?.sentEmailModalStatus?.visibility)

  console.log("title",title);
  console.log("visibility",visibility);


  const Ok = () => {
      console.log("ok"),
    dispatch(HandleModalSentEmail({
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
      <View style={{ backgroundColor: COLORS.mainColor,  height: 135, borderRadius: 10, padding: 20 }} >
   

      <View style={{ paddingVertical: 10 }} >
      <Text style={{ color: COLORS.white, ...FONTS.p4,textAlign:'justify', textAlign: "center"  }} >{title}</Text>
      </View>

      <View style={{ paddingVertical: 5, alignSelf: "flex-end", flexDirection: "row" }} >      
      <Pressable onPress={()=>{Ok()}}>
      <Text style={{ color: COLORS.white, ...FONTS.p4, paddingRight: 10, padding: 5}} >OK</Text>
      </Pressable>
      </View>

      </View>
    </View> 
    </Modal>

    : <></>}
</> 

   )
}

export default RevieveEmailModal
