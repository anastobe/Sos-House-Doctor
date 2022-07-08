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
import { IMAGES, COLORS, FONTS, SHADOW, SIZES } from '../../constraints/Index';
import { SHADOWBOX, SHADOWELEV_1, SHADOW_ELEVATION_1,SHADOWELEV_2 } from '../../constraints/Theme';
import MaskInput from 'react-native-mask-input'


const CombineInputFieldsPhoneAndEmail = ({ ChangeText1 = ()=> {} , ChangeText2 = ()=> {} , ...props}) => {

  return (
    <View>
    <View style={{ marginHorizontal: SIZES.padding + 5, marginVertical:  SIZES.padding }} >
 
    <Text style={{ ...FONTS.p4, marginBottom: 7 }} >{props?.title}</Text>
    <View style={{ borderColor: COLORS.white, borderWidth: 1, borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, width: props?.width, height: 84 }}>
     <MaskInput 
        mask={props?.mask}
        keyboardType={props?.keyType1} 
        maxLength={props?.maxlen} 
        style={{ borderColor: COLORS?.mainColor, borderBottomWidth: 0.2, height: 42 }}
        value={props?.value1} 
        onChangeText={ChangeText1} 
        placeholder={props?.placeHolder1}  
    />
     
     <TextInput 
     style={{ height: 42  }} 
     value={props.value2} 
     onChangeText={ChangeText2}  
     keyboardType={props?.keyType2}
     placeholder={props?.placeHolder2} 
     />

    </View>
    
    
    </View>
    </View>
  )
}

export default CombineInputFieldsPhoneAndEmail








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
// import { IMAGES, COLORS, FONTS, SHADOW, SIZES,SHADOWELEV_2 } from '../../constraints/Index';
// import { SHADOWELEV_1 } from '../../constraints/Theme';

// const CombineInputFieldsPhoneAndEmail = ({ ChangeText1 = ()=> {} , ChangeText2 = ()=> {} , ...props}) => {

//   return (
//     <View>
//     <View style={{ marginHorizontal: SIZES.padding + 5, marginVertical:  SIZES.padding }} >
    
    
//      <Text>{props?.title}</Text>
//      <View style={{ borderColor: COLORS.shadowColor, borderWidth: 1, borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, width: props?.width, height: 45 }}>
//         <TextInput value={props.value1} onChangeText={ChangeText1} />
//       </View>
//       <View style={{ borderColor: COLORS.shadowColor, borderWidth: 1 ,borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, width: props?.width, height: 45 }}>
//         <TextInput value={props.value2} onChangeText={ChangeText2} />
//       </View>
    
//     </View>
//     </View>
//   )
// }

// export default CombineInputFieldsPhoneAndEmail





