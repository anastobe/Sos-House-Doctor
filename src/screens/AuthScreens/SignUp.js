import React, { useEffect, useRef, useState } from 'react'
import {View,Text,StatusBar,Image,ScrollView,Button,TextInput} from 'react-native'
import Header from '../../components/Header'
import SingleInputField from '../../components/InputFields/SingleInputField'
import PasswordInputField from '../../components/InputFields/PasswordInputField'
import TwoButtons from '../../components/TwoButtons'
// import  from '../../constraints/Images'
import { COLORS,IMAGES, FONTS } from '../../constraints/Index'
import DatePicker from 'react-native-date-picker'
import DobInputField from '../../components/InputFields/DobInputField'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProfileImgSelect from '../../components/ProfileImgSelect'
import Helper from '../../utils/utils.helper';
import PhNoMaskedInputField from '../../components/InputFields/PhNoMaskedInputField'
import ImagePicker  from 'react-native-image-crop-picker';
import { showMessage, hideMessage } from "react-native-flash-message";
import { conditionsForNextPage, signupPageData } from '../../stores/actions/form.action'
import { useSelector, useDispatch } from 'react-redux'
import RBSheet from "react-native-raw-bottom-sheet";


const SignUp = ({ navigation }) => {

  const dispatch =  useDispatch()
  
  const[firstNamerequired,setfirstNamerequired] = useState("")
  const[lastNamerequired,setlastNamerequired] = useState("")
  const[daterequired, setDaterequired] = useState("")
  const[phnorequired,setphnorequired] = useState("")
  const[emailrequired,setemailrequired] = useState("")
  const[passwordrequired,setpasswordrequired] = useState("")
  const[cnfrmpasswordrequired,setcnfrmpasswordrequired] = useState("")



    const[firstName,setfirstName] = useState("aaaaa")
    const[lastName,setlastName] = useState("aaaaa")
    const[date, setDate] = useState("DD/MM/YYYY")
    const [open, setOpen] = useState(false)
    const[phno,setphno] = useState("1111111111111111")
    const[email,setemail] = useState("anas@gmail.com")
    const[password,setpassword] = useState("aaaaa")
    const[cnfrmpassword,setcnfrmpassword] = useState("aaaaa")

    const[eye,seteye] = useState(true)
    const[eyecnfrm,seteyecnfrm] = useState(true)
    const[ShowImg,setShowImg] = useState(false)
    const[profileImg,setprofileImg] = useState("aaaaaaaaa")



    console.log("=======================",firstName,lastName,phno,email,password,cnfrmpassword, eye, eyecnfrm, "new==>" ,open, date, profileImg );
   
   
const pickDrivingImage = () => {
  let width = 1080
  let height = 1080
  ImagePicker.openPicker({
    width: width,
    height: height, 
  })
  .then((image) => {
    setprofileImg(image?.path)
    setShowImg(true)
  }) 
}

const openCamera = () => {
  let width = 1000
  let height = 1080
  ImagePicker.openCamera({
      width: width,
      height: height,
      // cropping: true,
      // useFrontCamera: currentPickerFor == MediaType.Profile
  })
  .then(image => {
    setprofileImg(image?.path)
    setShowImg(true)
  })
};


function SelectProfileImg(){
      return(
       <ProfileImgSelect  Img={profileImg} show={ShowImg}
         onPress1={()=>pickDrivingImage()} 
         onPress2={()=>openCamera()} 
         /> 
      )
    }

    const InputFields = () => {
        return (
          <View style={{ marginTop: 15 }} >
            <SingleInputField required={firstNamerequired} value={firstName} ChangeText={setfirstName} title="First Name" placeholdertxt="First Name" />
            <SingleInputField required={lastNamerequired} value={lastName} ChangeText={setlastName} title="Last Name" placeholdertxt="Last Name"    />
          
            <DobInputField smallDobField={false} required={daterequired} date={date} ChangeText={setDate}  show={open} title="Date of Birth" onPress={()=>{setOpen(!open)}} showImg={true}  placeholdertxt="DD/MM/YYYY" />
            
            <View style={{marginTop: -20 }}>
              <PhNoMaskedInputField required={phnorequired} value={phno} ChangeText={setphno}  title="Phone Number" placeholdertxt="(310) 550 - 1234" keboardtype={'numeric'} maxlen={16} mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/]}/>
              <SingleInputField required={emailrequired} value={email} ChangeText={setemail} title="Email" placeholdertxt="Enter Email" />
            </View>          

            <View style={{ marginBottom: - 15 }}>
            <PasswordInputField required={passwordrequired} value={password} ChangeText={setpassword} title="Password" placeholdertxt="Enter Password" eyestatus={eye} onpresseye={()=>{seteye(!eye)}} />
            </View>

            <View style={{ marginBottom: - 15 }}>
            <PasswordInputField required={cnfrmpasswordrequired} value={cnfrmpassword} ChangeText={setcnfrmpassword} title="Confirm Password" placeholdertxt="Enter Password"  eyestatus={eyecnfrm} onpresseye={()=>{seteyecnfrm(!eyecnfrm)}}  />
            </View>
          </View>
        )
      }

function Txt() {
    return(
    <View style={{ marginLeft: 15 }} >
        <Text style={{ color: COLORS.btnTxtColor, lineHeight: 40 }} >Sign up as a</Text>
    </View>
    )
}


function RenderNoAccountTxt() {
    return (
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          marginBottom: 50,
          marginTop: 20
        }}>
        <Text style={{ color: COLORS.btnTxtColor, ...FONTS.p4 }}>
        Already have an account? {' '}
        </Text>
        <TouchableOpacity  onPress={()=>{ navigation.navigate("Login") }}  >
        <Text style={{ color: COLORS.btnColor, ...FONTS.p4, fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const SignUpCall = (payload) =>{
    console.log("payload==>",payload);

    navigation.navigate("ProviderSignupIndividualandPractice",payload)
  }

  
  console.log("date?.length=====>",date?.length); 


  const onPressNext = () => {

    //========== VALIDATION ===========
    let emailValidate = Helper.validateEmail(email);
    
    if (!profileImg) {
     
      showMessage({
        message: 'Please Select Profile Image',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      return  

    } else if (firstName?.length < 4) {      
      
      showMessage({
        message: 'First Name must be 4 characters long',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setfirstNamerequired({msg: 'First Name must be 4 characters long', uid: Math.random()})
      return  

    } else if (lastName?.length < 4) {

      showMessage({
        message: 'last Name must be 4 characters long',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setlastNamerequired({msg: 'last Name must be 4 characters long', uid: Math.random()})
      return  

    } else if (date == 'DD/MM/YYYY' || date?.length < 9) {
      showMessage({
        message: 'Please Select Date of Birth',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setDaterequired({msg: 'Please Select DOB', uid: Math.random()})
      return  

    } else if (phno?.length < 16) {

      showMessage({
        message: 'Phone Number Must be 11 digit',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      
      setphnorequired({msg: 'Phone Number Must be 11 digit', uid: Math.random()})
      return  

    } else if (!emailValidate) {

      showMessage({
        message: 'Enter Valid Email Address',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setemailrequired({msg: 'Enter Valid Email Address' , uid: Math.random()})
      return  

    } else if (password?.length < 3) {

      showMessage({
        message: 'Password must be 4 digit characters long',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setpasswordrequired({msg: 'Password must be 4 digit characters long' , uid: Math.random()})
      return  

    } else if (cnfrmpassword?.length < 3) {
      showMessage({
        message: 'Confirm Password must be 4 digit characters long',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setcnfrmpasswordrequired({msg: 'Confirm Password must be 4 digit characters long' , uid: Math.random()})
      return  

    } else if (!(password === cnfrmpassword)) {
      showMessage({
        message:'Password not matched',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      return  
   
    }
    else {

      var payload = {}

        payload = {
          "profileImg": profileImg,
          "firstName": firstName,
          "lastName": lastName,
          "date": date,
          "phno": phno,
          "email": email,
          "password": password,
          "cnfrmpassword": cnfrmpassword,
        }
      }

      SignUpCall(payload)
      dispatch(signupPageData(payload))
      return

    }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightmainColor,
        justifyContent: 'center'
      }}>
      <StatusBar backgroundColor={COLORS.mainColor} />
      <ScrollView>

        {SelectProfileImg()}
        {InputFields()}
        {Txt()}
        <TwoButtons onPress1={onPressNext} onPress2={onPressNext}  />
        {RenderNoAccountTxt()}


        


        {/* <FilePickers /> */}

      </ScrollView>
    </View>
  )
}

export default SignUp
