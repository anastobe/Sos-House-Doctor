import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { COLORS, IMAGES, FONTS } from '../../constraints/Index'
import SingleInputField from '../../components/InputFields/SingleInputField'
import ButtonNoLogo from '../../components/ButtonNoLogo'
import Icon from 'react-native-vector-icons/Ionicons'
import { IONICONS } from '../../constraints/Icons'
// import CheckBox from '../../components/checkBox'
import ButtonwithLogo from '../../components/ButtonwithLogo'
import Box from '../../components/Box'
import PasswordInputField from '../../components/InputFields/PasswordInputField'
import utilsHelper from '../../utils/utils.helper'

const ForgetPassword = ({navigation}) => {

  const [email, setemail] = useState('')


  const HeadingText = () => {
      return(
          <View style={{ marginTop: 10 }} >
              <Text
              style={{
                  color: COLORS?.black,
                  ...FONTS?.p4,
                  fontWeight: "bold",
                  marginLeft: 15
              }}
              >Enter the Emil Address {'\n'}Associated with your ccount</Text>
          </View>
      )
  }

  const InputFields = () => {
    return(
        <View style={{ marginTop: 10 }} >
            <SingleInputField value={email} ChangeText={setemail} title="Email" placeholdertxt="Enter Your Email" titleColor={COLORS?.btnTxtColor}  />

        </View>
    )
}

const RenderButton = () =>{
    return(
    <View>
      <ButtonNoLogo
        title="Submit"
        backcolor={COLORS.btnColor2}
        txtcolor={COLORS.white}
        verticlePadding={15}
        onPress1={()=>console.log("Forgrt Password Butoon Pressed")}
      />
    </View>    
    )
}

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightmainColor,
      }}>

        {HeadingText()}
        {InputFields()}
        {RenderButton()}

    </View>
  )
}

export default ForgetPassword
