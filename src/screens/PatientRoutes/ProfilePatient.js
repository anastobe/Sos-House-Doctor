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
import { conditionsForNextPage, HandleModal, signupPageData } from '../../stores/actions/form.action'
import { useSelector, useDispatch } from 'react-redux'
import RBSheet from "react-native-raw-bottom-sheet";
import LocationInputField from '../../components/InputFields/LocationInputField'
import ModalInputFields from '../../components/InputFields/ModalInputFields'
import ButtonNoLogo from '../../components/ButtonNoLogo'
import Box from '../../components/Box'


const ProfilePatient = ({ navigation }) => {

  const dispatch =  useDispatch()
  
  const modalValue = useSelector((state)=> state?.formReducer)
  const {countrys , states , citys } = modalValue

  
  
  useEffect(()=>{
   setcountry(countrys)
   setstate(states)
   setcity(citys)
  },[modalValue])


  const[firstNamerequired,setfirstNamerequired] = useState("")
  const[lastNamerequired,setlastNamerequired] = useState("")
  const[daterequired, setDaterequired] = useState("")
  const[phnorequired,setphnorequired] = useState("")
  const[Addressempty,setAddressempty] = useState("")
  const[countryempty,setcountryempty] = useState("")
  const[stateempty,setstateempty] = useState("")
  const[cityempty,setcityempty] = useState("")
  const[zipCodeempty,setzipCodeempty] = useState("")
  const[emailrequired,setemailrequired] = useState("")
  
  
  
  const[ShowImg,setShowImg] = useState(false)
  const[profileImg,setprofileImg] = useState("aaaaaaaaa")
  const[firstName,setfirstName] = useState("aaaaa")
  const[lastName,setlastName] = useState("aaaaa")
  const[date, setDate] = useState("DD/MM/YYYY")
  const [open, setOpen] = useState(false)
  const[phno,setphno] = useState("1111111111111111")
  const[Address,setAddress] = useState("")
  const[country,setcountry] = useState("")
  const[state,setstate] = useState("")
  const[city,setcity] = useState("")
  const[email,setemail] = useState("anas@gmail.com")
  const[eye,seteye] = useState(true)
  const[eyecnfrm,seteyecnfrm] = useState(true)
  const[zipCode,setzipCode] = useState("")
  const [checked, setCheck] = useState(true)
  
  

    console.log("=======================",firstName,lastName,phno,Address,country,state,city,email,eye, eyecnfrm, "new==>" ,open, date, profileImg );
  
    let arraofobjCountry = [
      {
        "id": 1,
        "title": "pakistan"
      },
      {
        "id": 2,
        "title": "india"
      },
      {
        "id": 3,
        "title": "china"
      },
      {
        "id": 4,
        "title": "africa"
      },
      {
        "id": 5,
        "title": "Austrailia"
      },
      {
        "id": 6,
        "title": "kenya"
      },
      {
        "id": 7,
        "title": "mongols"
      },
      {
        "id": 8,
        "title": "darusalem"
      },
      {
        "id": 9,
        "title": "barma"
      },
      {
        "id": 10,
        "title": "switzerland"
      },
      {
        "id": 11,
        "title": "coastarica"
      },
  ]
  
  let arraofobjState = [
    {
      "id": 1,
      "title": "sindh"
    },
    {
      "id": 2,
      "title": "Punjab"
    },
    {
      "id": 3,
      "title": "Baluchistan"
    },
    {
      "id": 4,
      "title": "KhyberPukhtuk Khawan"
    },
    {
      "id": 5,
      "title": "NWFP"
    },
    {
      "id": 6,
      "title": "other"
    },
  ]
  
  let arraofobjCity = [
    {
      "id": 1,
      "title": "Islamabad"
    },
    {
      "id": 2,
      "title": "Karachi"
    },
    {
      "id": 3,
      "title": "Peshawar"
    },
    {
      "id": 4,
      "title": "Multan"
    },
    {
      "id": 5,
      "title": "Faisalabad"
    },
    {
      "id": 6,
      "title": "Sialkot"
    },
  ] 
  
  function forCountry() {
    dispatch(HandleModal({
      visibility: true,
      title: "Country",
      arrObj: arraofobjCountry,
     }))
  }
    
  function forState() {
    dispatch(HandleModal({
      visibility: true,
      title: "State",
      arrObj: arraofobjState,
     }))
  }

  function forCity() {
    dispatch(HandleModal({
      visibility: true,
      title: "City",
      arrObj: arraofobjCity,
     }))
  }
  
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

            <View style={{ marginBottom: -20 }} >
            <LocationInputField required={Addressempty}  value={Address} ChangeText={setAddress} title="Address" placeholdertxt="Enter your address" />
            </View> 

            
            <View style={{ marginBottom: -20 }}>
             <ModalInputFields required={countryempty}  value={country} ChangeText={setcountry} title="Country" placeholdertxt="Enter your country"  editable={false} onPress={()=>forCountry()}/>
            </View>
 
            <View style={{ marginBottom: -20 }} >
             <ModalInputFields required={stateempty}  value={state} ChangeText={setstate} title="State" placeholdertxt="Enter your state (abbreviation only)" editable={false} onPress={()=>forState()} />
            </View>          
           
            <View style={{ marginBottom: -20 }} >
             <ModalInputFields required={cityempty}  value={city} ChangeText={setcity} title="City" placeholdertxt="Enter your city" editable={false} onPress={()=>forCity()}  />
            </View>
          
            <SingleInputField required={zipCodeempty}  value={zipCode} ChangeText={setzipCode} title="Zip Code (Optional)" placeholdertxt="Enter your Zip code" keboardtype={'numeric'} maxlen={5} />


         
          </View>
        )
      }

  const RegisterNow = () => {
    return (
      <ButtonNoLogo
        onPress1={onPressNext}
        title="Update"
        backcolor={COLORS?.btnColor2}
        txtcolor={COLORS.white}
        verticlePadding={30}
        FontsBoldness={'600'}
      />
    )
  }
  const SignUpCall = (payload) =>{
    console.log("payload==>",payload);

  }

  
  console.log("date?.length=====>",date?.length); 


  const onPressNext = () => {

    //========== VALIDATION ===========
    let emailValidate = Helper.validateEmail(email);
    
    if (firstName?.length < 4) {      
      
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

    }
    else if (Address?.length < 5) {

      showMessage({
        message: 'Address field is required',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setAddressempty({msg: 'Address field is required', uid: Math.random()})
      return
  
    }
    else if (!(country)) {
      showMessage({
        message: 'Please Select Country',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setcountryempty({msg: 'Please Select Country', uid: Math.random()})
      return
  
    } else if (!(state)) {
      showMessage({
        message: 'Please select state',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setstateempty({msg: 'Please select state', uid: Math.random()})
      return
  
    } else if (!(city)) {
      showMessage({
        message: 'Please select city',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setcityempty({msg: 'Please select city', uid: Math.random()})
      return
  
    }   else if (!emailValidate) {

      showMessage({
        message: 'Enter Valid Email Address',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setemailrequired({msg: 'Enter Valid Email Address' , uid: Math.random()})
      return  

    } else if (zipCode?.length < 4) {
      showMessage({
        message: 'Zipcode must be 4 characters long',
        backgroundColor: COLORS.mainColor, 
        color: COLORS.white, 
      })
      setzipCodeempty({msg: 'Zipcode must be 4 characters long', uid: Math.random()})
      return
  
    } 
    else {

      var payload = {}

        payload = {
          "firstName": firstName,
          "lastName": lastName,
          "date": date,
          "phno": phno,
          "Address": Address,
          "country": country,
          "state": state,
          "city": city,
          "email": email,
          "zipCode": zipCode,
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
        {RegisterNow()}


        


        {/* <FilePickers /> */}

      </ScrollView>
    </View>
  )
}

export default ProfilePatient
