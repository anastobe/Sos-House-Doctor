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
import { useDispatch } from 'react-redux';
import { HandleModal } from '../../stores/actions/form.action';
import { SHADOWELEV_2 } from '../../constraints/Theme';
import Icon from 'react-native-vector-icons/Ionicons'
import { IONICONS } from '../../constraints/Icons';
import { showMessage } from 'react-native-flash-message';


const SpecilityInputField= ({ ChangeText = ()=>{},required, onPress, onPressCancel  , editable , ...props }) => {

    // console.log("Props====s>",props?.placeholdertxt);

  const[renove,setrenove] = useState()

  useEffect(()=>{
    setrenove(required?.msg)
  },[required])


  return (
    <>

    <View style={{ marginHorizontal: SIZES.padding + 5, marginVertical:  SIZES.padding  }} >
    <Text style={{  color: COLORS.btnTxtColor, ...FONTS.p4, marginBottom: 5,    }} >{props.title}</Text>
      <View style={{ borderColor: COLORS?.white, borderWidth: 1, borderRadius: 4, backgroundColor: "#fff", ...SHADOWELEV_2, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', height: props?.value ? 75 : 42   }}>
      {props?.value ? null : <Text>{props?.placeholdertxt}</Text> }

       {props?.value ? 
       <>
       <View style={{ borderColor: COLORS?.btnTxtColor, borderWidth: 1, borderRadius: 5, padding: 3, flexDirection: "row", width: 130, justifyContent: "space-between", alignItems: "center", marginLeft: 10, marginTop: -25 }} >
           <Text style={{ color: COLORS.black, fontSize: SIZES.p3 }} >{props?.value}</Text>
           <Icon name={IONICONS?.close} size={18} color={COLORS?.btnTxtColor} onPress={()=>{onPressCancel() }} />
       </View> 
       <Text style={{ position: 'absolute', bottom: 8, left: 15, color: COLORS?.black }} >{props?.value}</Text>
       </>
       : null}


        <TouchableOpacity onPress={()=>{onPress() , setrenove(""), 
            showMessage({
                message: 'You Can Select Only One Speciality',
                backgroundColor: COLORS.mainColor, 
                color: COLORS.white, 
              })
               }}  style={{ marginRight: 15 }} >
          <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
          }}
          source={IMAGES.dropDown}
        />
        </TouchableOpacity >
     
      </View>
      <Text style={{ color: "red" }}  >{renove}</Text>
    </View>

    </>
  )
}

export default SpecilityInputField
