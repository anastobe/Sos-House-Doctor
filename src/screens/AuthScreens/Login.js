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
import { transform } from '@babel/core'
import { useDispatch } from 'react-redux'
import { conditionsForNotification } from '../../stores/actions/form.action'
// import utilsHelper from '../../utils/utils.helper'

const Login = ({navigation, route}) => {
  
  const dispatch =  useDispatch()

  const [email, setemail] = useState('')
  const [pwd, setpwd] = useState('')
  const [checked, setCheck] = useState(true)
  const[eye,seteye] = useState(true)

  console.log('one==>', email, 'val2==>', pwd)

  console.log("navii Login=====================================>",route?.params?.navi) 

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
      <View style={{ alignItems: 'center', marginTop: 60 }}>
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
              color: COLORS.btnColor2,
              fontWeight: '700',
              lineHeight: 65,
              textTransform: 'uppercase'
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
        <SingleInputField value={email} ChangeText={setemail} title="Email" placeholdertxt="Enter Email" titleColor={COLORS?.btnTxtColor}  />
        <PasswordInputField value={pwd} ChangeText={setpwd} title="Password" placeholdertxt="Enter Password" eyestatus={eye} onpresseye={()=>{seteye(!eye)}}  titleColor={COLORS?.btnTxtColor}    />
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
            marginHorizontal: 18,
            marginTop: -15,
            marginBottom: 15,
            alignItems: "center"
          }}>
          <View>
            <Text
            onPress={()=>navigation.navigate("ForgetPassword")}
              style={{
                color: COLORS.btnColor,
                ...FONTS.p4,
                fontWeight: '600'
              }}>
              Forgot Password?
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: "center" }}>
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
                ...FONTS.p4,
              }}>
              Remember Me
            </Text>
          </View>
        </View>
      </>
    )
  }

  const navigateWithNotificationCondition = () =>{

    if (route?.params?.navi === "goPatient") {
    
      navigation.navigate("PatientRoutes"),
      dispatch(conditionsForNotification("Patient"))
      
    } else {
      
      navigation.navigate("AppRoutes"),
      dispatch(conditionsForNotification("Provider"))
    
    }

  }

  function LoginButton() {
    return (
      <ButtonNoLogo
        title="Log in"
        backcolor={COLORS.btnColor2}
        txtcolor={COLORS.white}
        verticlePadding={8}
       
   //if provider so go with below */
   
        onPress1={()=>{ navigateWithNotificationCondition() }  }

   //if patient so go with below */

        // onPress1={()=>navigation.navigate("PatientRoutes")}

      />
    )
  }

  function RenderSocialTxt() {
    return (
      <View style={{ alignSelf: 'center', marginVertical: 10 }}>
        <Text style={{ ...FONTS?.p4, color: COLORS?.black, fontWeight: '400' }} >or login using social app</Text>
      </View>
    )
  }

  function RenderSocialButtons() {
    return (
      <>
        <ButtonwithLogo
          title="   Continue with Facebook"
          backcolor={COLORS.lightmainColor}
          txtcolor={COLORS.btnTxtColor}
          verticlePadding={5}
          pic={IMAGES.facebook}
          bordercolor={COLORS.btnColor}
        />

        <ButtonwithLogo
          title="   Continue with Google"
          backcolor={COLORS.lightmainColor}
          txtcolor={COLORS.btnTxtColor}
          verticlePadding={5}
          pic={IMAGES.google}
          bordercolor={COLORS.btnColor}
        />
      </>
    )
  }

  function RenderNoAccountTxt() {
    return (
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          marginBottom: 50,
          marginVertical: 30
        }}>
        <Text style={{ color: COLORS.btnTxtColor, ...FONTS.p4 }}>
          Don’t have an account?{' '}
        </Text>

         {/* //if provider so go with below */}
        <Text onPress={()=>{ navigation.navigate(route?.params?.navi === "goPatient" ? "SignupPatient" :  "SignUp" ) }} style={{ color: COLORS.btnColor, ...FONTS.p4, fontWeight: "700" }}>Sign Up</Text>
      
        {/* //if Patient so go with below */}
        {/* <Text onPress={()=>{ navigation.navigate("SignupPatient") }} style={{ color: COLORS.btnColor, ...FONTS.p4 }}>     SignUp patient</Text> */}

      </View>
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
        {RenderSocialTxt()}
        {RenderSocialButtons()}
        {RenderNoAccountTxt()}
      </ScrollView>
    </View>
  )
}

export default Login
