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
import ButtonwithLogo from '../../components/ButtonwithLogo'
import Box from '../../components/Box'

const ProviderStaffScreen = ({navigation}) => {
  const [email, setemail] = useState('')
  const [pwd, setpwd] = useState('')
  const [checked, setCheck] = useState(false)

  console.log('one==>', email, 'val2==>', pwd)

  console.log(checked)

  //   // ============== LOGIN SERVICE CALL =================
  //   const loginApiCall = (payload) => {
  //     console.log("loginApiCall with payload ==>",payload);

  //     login(payload).then((res) => {
  //       console.log('<=========== LOGIN API RESPONSE ===========>');
  //       console.log(res);

  //       // navigation.reset({
  //       //   index: 0,
  //       //   routes: [{ name: 'AppRoutes' }],
  //       // });

  //     }).catch((error) => {
  //       console.log('<=========== LOGIN API ERROR ===========>');

  //       let response = JSON.parse(error?.request?.response)
  //       let message = response?.message
  //       let errors = response?.errors

  //       let email = response?.data?.errors?.email?.[0]

  //       console.log(email);

  //     });

  //   }

  // const onPress = () => {
  //   //========== VALIDATION ===========
  //   let emailValidate = utilsHelper.validateEmail(email);
  //   if (!emailValidate) {
  //     alert('Please enter valid email')

  //   } else if (pwd?.length < 6) {
  //     alert('Password must be 6 characters long')
  //   } else {

  //     let payload = {
  //       email: email,
  //       password: pwd,
  //     }

  //     loginApiCall(payload)

  //   }
  // }

  function Heading() {
    return (
      <View style={{ alignItems: 'center', marginTop: 70 }}>
        <Image
          style={{
            width: 158,
            height: 80,
            resizeMode: 'contain'
          }}
          source={IMAGES.soslogoheading}
        />
        <View>
          <Text
            style={{
              ...FONTS.p1,
              color: COLORS.btnColor,
              fontWeight: '700',
              lineHeight: 60
            }}>
            Welcome
          </Text>
        </View>
      </View>
    )
  }

  function InputFields() {
    return (
      <>
        <SingleInputField value={email} ChangeText={setemail} title="Email" placeholdertxt="Enter Email" />
        <SingleInputField value={pwd} ChangeText={setpwd} title="Password" placeholdertxt="Enter Password"  />
      </>
    )
  }

  function forgetandrememberme() {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginVertical: 5
          }}>
          <View>
            <Text
              style={{
                color: COLORS.btnColor,
                ...FONTS.p3,
                fontWeight: '600'
              }}>
              Forgot Password?
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Box
              borderWid={0}
              borderCol={'#FFF'}
              showShadow={true}
              boxheight={20}
              boxwidth={20}
              onPress={() => {
                setCheck(!checked)
              }}
              value={checked}
            />

            <Text
              style={{
                color: COLORS.btnTxtColor,
                ...FONTS.p3,
                fontWeight: '600'
              }}>
              Remember Me
            </Text>
          </View>
        </View>
      </>
    )
  }

  function LoginButton() {
    return (
      <ButtonNoLogo
        title="Login"
        backcolor={COLORS.btnColor}
        txtcolor={COLORS.white}
        verticlePadding={50}
      />
    )
  }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightmainColor,
        justifyContent: 'center'
      }}>
      <ScrollView>
        {Heading()}
        {InputFields()}
        {forgetandrememberme()}
        {LoginButton()}
      </ScrollView>
    </View>
  )
}

export default ProviderStaffScreen
