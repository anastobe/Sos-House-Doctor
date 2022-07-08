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
  Linking,
  Image
} from 'react-native'
import Header from '../../components/Header'
import { IONICONS } from '../../constraints/Icons'
import { COLORS,SHADOW ,FONTS} from '../../constraints/Index'
import ToggleSwitch from 'toggle-switch-react-native'
import SingleInputField from '../../components/InputFields/SingleInputField'
import ButtonNoLogo from '../../components/ButtonNoLogo'
import BtnNoLogoHeadTxt from '../../components/BtnNoLogoHeadTxt'


const Contact = ({ navigation, route,  }) => {


  const renderTxt = () =>{
  
    return(
        <View>
            <Text style={{ textAlign: "center", ...FONTS.p6, color: "#9FA3A5", marginTop: 20, marginBottom: 10 ,width: 270, alignSelf: "center" }} > If you have any questions, Please do not hesitate to contact us</Text>
        </View>
    )
  }
  
const btns = () =>{
return(
    <View>
  <BtnNoLogoHeadTxt
    titleHeading="EMAIL US"
    title="Info@sosdoctorhousecall.com"
    backcolor={COLORS.btnColor2}
    txtcolor={COLORS.white}
    verticlePadding={7}
    fontBoldness={"600"}
    onPress1={()=>{ Linking.openURL('mailto:Info@sosdoctorhousecall.com') }}
  />


<BtnNoLogoHeadTxt
    titleHeading="CALL US"
    title="(303) 550-0510"
    backcolor={COLORS.btnColor2}
    txtcolor={COLORS.white}
    verticlePadding={7}
    fontBoldness={"600"}
    onPress1={()=>{Linking.openURL(`tel: 03322731663`)}}
  />


    </View>
)
}


    return (
   <>
    <StatusBar backgroundColor={COLORS.mainColor} />
    {/* <Header backgroundColor={COLORS.shadowColor} leftIcon={IONICONS?.backarrow}  title="Contact" titleColor={COLORS.black} navigation={navigation} rightIconColor={COLORS.black} rightIcon={IONICONS.notificationIcon} headerTxtColor={COLORS.black} /> */}
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightmainColor,
      }}>

          
<ScrollView>
      {renderTxt()}
      {btns()}
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

export default Contact

