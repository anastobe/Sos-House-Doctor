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
import MaskInput from 'react-native-mask-input'
import Icon from 'react-native-vector-icons/Ionicons'
import { IONICONS } from '../../constraints/Icons'
import { IMAGES, COLORS, FONTS, SHADOW, SIZES} from '../../constraints/Index';
import { SHADOWELEV_2 } from '../../constraints/Theme'
// import Images from '../../constraints/Images';

const DobInputField = ({ date,smallDobField, ChangeText = ()=>{},required  ,show, onPress , showImg, title ,placeholdertxt, width,  fontSizze }) => {
  
    const[renove,setrenove] = useState()

    useEffect(()=>{
      setrenove(required?.msg)
    },[required])
  

  return (
    <>


      <DatePicker
        modal
        open={show}
        date={new Date()}
        dateFormat="DD/MM/YYYY"
        mode='date'
        onConfirm={date => {
          let newDate = Moment(date).format('DD-MM-YYYY')
            onPress(false)
          ChangeText(newDate)
        }}
        onCancel={() => {
            onPress(false)
        }}
      />


    <View style={{ marginHorizontal: smallDobField ? 2 : SIZES.padding + 5, marginVertical:  SIZES.padding, }} >
    
    
    <Text style={{  color: COLORS.btnTxtColor, ...FONTS.p4, marginBottom: 5,  display: smallDobField ? "none" : "flex" }} >{title}</Text>
      <View style={{ borderColor: COLORS.white, borderWidth: 1, borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', height: 42, width: smallDobField ? 110 : null ,  }}>
       
        <MaskInput  
         value={date} 
         onChangeText={ChangeText} 
         keyboardType={"number-pad"}
         placeholder={placeholdertxt}
         color={"#000"}
         mask={[/\d/, /\d/, '/', /\d/, /\d/, '/' , /\d/, /\d/, /\d/, /\d/]} 
         style={{ fontSize: fontSizze ? 10 : 14, width: width ? width : 270, color: COLORS.black }}
         onFocus={()=>{setrenove("")}} 
        />
        { showImg ?
         <TouchableOpacity onPress={()=>{ onPress(), setrenove("") }} >
          <Image
         style={{
         width: smallDobField ? 15 :  18,
         height: smallDobField ? 15 : 18,
           resizeMode: 'contain',
           marginRight: 15
          }}
          source={IMAGES.calander}
          />
          </TouchableOpacity>
        :
        null
        }
      </View>
     <Text style={{ color: "red" }}  >{renove}</Text>
    </View>




    </>
  )
}

export default DobInputField



















// import React, { useEffect, useRef, useState } from 'react'
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   Vibration,
//   Button,
//   TextInput,
//   StyleSheet,
//   Image
// } from 'react-native'
// import DatePicker from 'react-native-date-picker'
// import Moment from 'moment';
// import MaskInput from 'react-native-mask-input'
// import Icon from 'react-native-vector-icons/Ionicons'
// import { IONICONS } from '../../constraints/Icons'
// import { IMAGES, COLORS, FONTS, SHADOW, SIZES,SHADOWELEV_2 } from '../../constraints/Index';
// // import Images from '../../constraints/Images';

// const DobInputField = ({ date,smallDobField, ChangeText = ()=>{},required  ,show, onPress , showImg, title ,placeholdertxt }) => {
  
  
//     console.log("smallDobField==>", smallDobField);

//     // console.log("width==>", width);
//     let newDate = Moment(date).format('DD-MM-YYYY')
//     // console.log(" new Date==>",newDate);


//     const[renove,setrenove] = useState()

//     useEffect(()=>{
//       setrenove(required)
//     },[required])
  


//   return (
//     <View>


//       <DatePicker
//         modal
//         open={show}
//         date={date}
//         dateFormat="DD/MM/YYYY"
//         mode='date'
//         onConfirm={date => {
//             onPress(false)
//           ChangeText(date)
//         }}
//         onCancel={() => {
//             onPress(false)
//         }}
//       />


//     <View style={{ marginHorizontal: smallDobField ? 2 : SIZES.padding + 5, marginVertical:  SIZES.padding,  }} >
    
    
//     <Text style={{  color: COLORS.btnTxtColor, ...FONTS.p4, marginBottom: 5,  display: smallDobField ? "none" : "flex" }} >{title}</Text>
//       <View style={{ borderColor: COLORS.shadowColor, borderWidth: 2, borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', height: 42, width: smallDobField ? 110 : null  }}>
       
//       <TouchableOpacity onPress={() => onPress()} >
//         <TextInput  
//          value={newDate} 
//          onChangeText={ChangeText} 
//          placeholder={placeholdertxt}
//          color={"#000"}
//          editable={false}
//          style={{ fontSize: 14 }}
//          onFocus={()=>{setrenove("")}} 
//         />
//       </TouchableOpacity >
//         { showImg ?
//          <TouchableOpacity onPress={() => onPress()} >
//           <Image
//         //  onPress={() => onPress()}
//          style={{
//          width: smallDobField ? 18 :  20,
//          height: smallDobField ? 18 : 22,
//            resizeMode: 'contain',
//            marginRight: 15
//           }}
//           source={IMAGES.calander}
//           />
//           </TouchableOpacity>
//         :
//         null
//         }
//       </View>
//      <Text style={{ color: "red" }}  >{renove}</Text>
//     </View>




//     </View>
//   )
// }

// export default DobInputField




