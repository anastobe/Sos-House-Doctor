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
  Image
} from 'react-native'
import DatePicker from 'react-native-date-picker'
import Moment from 'moment';
import { IMAGES, COLORS, FONTS, SHADOW, SIZES } from '../../constraints/Index';
import GetLocation from 'react-native-get-location'
import { SHADOWELEV_2 } from '../../constraints/Theme';


const LocationInputField = ({ ChangeText = ()=>{},required, onPress , ...props }) => {

  const[renove,setrenove] = useState()

  useEffect(()=>{
    setrenove(required?.msg)
  },[required])


    
  useEffect(()=>{
    getLocation()
},[])

const getLocation = async () =>{
    
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then((location)  => {
            console.log(location);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })

}



  return (
    <>

    <View style={{ marginHorizontal: SIZES.padding + 5, marginVertical:  SIZES.padding  }} >
    <Text style={{ color: COLORS.btnTxtColor, ...FONTS.p4, marginBottom: 5,  }} >{props.title}</Text>
      <View style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, width: props?.width, height: 42, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>      
     
        <TextInput  
         value={props.value} 
         onChangeText={ChangeText} 
         placeholder={props.placeholdertxt} 
         onFocus={()=>{setrenove("")}}
         style={{ width: 270 }}
        />
        
        <TouchableOpacity onPress={() => onPress()}  style={{ marginRight: 15 }} >
          <Image
         onPress={() => onPress()}
          style={{
            width: 20,
            height: 22,
            resizeMode: 'contain'
          }}
          source={IMAGES.locationPic}
        />
        </TouchableOpacity >
     
      </View>
      <Text style={{ color: "red" }}  >{renove}</Text>
    </View>

    </>
  )
}

export default LocationInputField
