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
  Image
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, FONTS } from '../../constraints/Index';
import { IONICONS } from '../../constraints/Icons';
import HeaderDrawer from '../../components/HeaderDrawer';
import ProfileImgSelect from '../../components/ProfileImgSelect';
import ImageCropPicker from 'react-native-image-crop-picker';
import CombineInputFields from '../../components/InputFields/CombineInputFields';
import SingleInputField from '../../components/InputFields/SingleInputField';
import PasswordInputField from '../../components/InputFields/PasswordInputField';
import LocationInputField from '../../components/InputFields/LocationInputField';
import ModalInputFields from '../../components/InputFields/ModalInputFields';
import { useDispatch, useSelector } from 'react-redux';
import { HandleModal } from '../../stores/actions/form.action'
import SpecilityInputField from '../../components/InputFields/SpecilityInputField';
import DobInputField from '../../components/InputFields/DobInputField';
import UploadImageInput from '../../components/UploadImageInput';
import ButtonNoLogo from '../../components/ButtonNoLogo';
import { showMessage } from 'react-native-flash-message';
import ImagePicker  from 'react-native-image-crop-picker';
import CombineInputFieldsPhoneAndEmail from '../../components/InputFields/CombineInputFieldsPhoneAndEmail';
import utilsHelper from '../../utils/utils.helper';

const Tab = createMaterialTopTabNavigator();


const Profile = ({ navigation, route,  }) => {

  
   const dispatch =  useDispatch()

   const modalValue = useSelector((state)=> state?.formReducer)
   const {countrys , states , citys, specialitys, conditions } = modalValue
 

   useEffect(()=>{
    setcountry(countrys)
    setstate(states)
    setcity(citys)
    setspeciality(specialitys)
   },[modalValue])

  const[profileImgempty,setprofileImgempty] = useState("")
  const[firstNameempty,setfirstNameempty] = useState("")
  const[lastNameempty,setlastNameempty] = useState("")
  const[Phoneempty,setPhoneempty] = useState("")
  const[Emailempty,setEmailempty] = useState("")
  const[yourBankempty,setyourBankempty] = useState("")
  const[accountNoempty,setaccountNoempty] = useState("")
  const[RoutingNoempty,setRoutingNoempty] = useState("")
  const[Addressempty,setAddressempty] = useState("")
  const[countryempty,setcountryempty] = useState("")
  const[stateempty,setstateempty] = useState("")
  const[cityempty,setcityempty] = useState("")
  const[zipCodeempty,setzipCodeempty] = useState("")
  const[specialityempty,setspecialityempty] = useState("")//
  const[DrivingLicencetxtempty,setDrivingLicencetxtempty] = useState("")
  const[DrivingLicenceImgempty,setDrivingLicenceImgempty] = useState("")
  const[expirationDateempty,setexpirationDateempty] = useState("")
  const[ProfLicenseempty,setProfLicenseempty] = useState("")
  const[issueDateempty,setissueDateempty] = useState("")
  const[insuranceInformtionempty,setinsuranceInformtionempty] = useState("")
  const[insuranceInformtionImgempty,setinsuranceInformtionImgempty] = useState("")



  const[showProfileImg,setshowProfileImg] = useState(false)
  const[profileImg,setprofileImg] = useState("s")
  const[firstName,setfirstName] = useState("aaaaa")
  const[lastName,setlastName] = useState("aaaaa")
  const[Phone,setPhone] = useState("123456789881234")
  const[Email,setEmail] = useState("aaaaa@gmail.com")
  const[ShowImg,setShowImg] = useState(false)
  const[yourBank,setyourBank] = useState("sdsadadasda")
  const[eyeaccountNo,seteyeaccountNo] = useState(true)
  const[accountNo,setaccountNo] = useState("1234567890")
  const[eyeRoutingNo,seteyeRoutingNo] = useState(true)
  const[RoutingNo,setRoutingNo] = useState("1234567899")
  const[dateDob, setDateDob] = useState("DD/MM/YYYY")
  const [openDob, setOpenDob] = useState(false)
  const[Address,setAddress] = useState("123456")
  const[country,setcountry] = useState("aaaa")
  const[state,setstate] = useState("aaaaa")
  const[city,setcity] = useState("aaaaaa")  
  const[zipCode,setzipCode] = useState("12345")
  const[speciality,setspeciality] = useState("")
  const[ShowDrivingImg,setShowDrivingImg] = useState(false)
  const[DrivingLicencetxt,setDrivingLicencetxt] = useState("")
  const[DrivingLicenceImg,setDrivingLicenceImg] = useState("")
  const [open, setOpen] = useState(false)
  //
  const[date, setDate] = useState("DD/MM/YYYY")
  const[ProfLicense,setProfLicense] = useState("")
  const[issueDate,setissueDate] = useState("")
  const[insuranceInformtion,setinsuranceInformtion] = useState("")
  const[ShowinsuranceImg,setShowinsuranceImg] = useState(false)
  const[insuranceInformtionImg,setinsuranceInformtionImg] = useState("")


    console.log("===========================>",profileImg,"--",firstName,"--",lastName,"--",Phone,"--",Email,"--",yourBank,"--",accountNo,"--",RoutingNo,"----",dateDob,"--",country,"--",state,"--",city,"--",zipCode,"--",speciality,"--",DrivingLicencetxt,"--",ShowImg,"--",DrivingLicenceImg,"--",ProfLicense,"--",issueDate,
    "--",insuranceInformtion, "--" ,ShowinsuranceImg, "--",insuranceInformtionImg, "--",open);

// use effeft condition for making stte empty becouse we have to select any one state from it
useEffect(()=>{
  setDrivingLicenceImg("")
  setShowDrivingImg(false)
},[DrivingLicencetxt])

useEffect(()=>{
  setinsuranceInformtionImg("")
  setShowinsuranceImg(false)
},[insuranceInformtion])

 
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

let arraofobjSpeciality = [
  {
    "id": 1,
    "title": "Acupuncturist"
  },
  {
    "id": 2,
    "title": "Chiropractor"
  },
  {
    "id": 3,
    "title": "COVID Testing"
  },
  {
    "id": 4,
    "title": "DV1"
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

function forSpeciality() {
  dispatch(HandleModal({
    visibility: true,
    title: "Speciality",
    arrObj: arraofobjSpeciality,
   }))
} 


//pick Profile Image
const pickProfileImage = () => {

  let width = 1080
  let height = 1080
  ImagePicker.openPicker({
      width: width,
      height: height, 
  })
  .then((image) => {
    console.log("pickProfileImage===>",image?.path);
    setprofileImg(image?.path)
    setshowProfileImg(true)
  }) 
}

const openCameraForProfileImage = () => {
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
    setshowProfileImg(true)
  })
};

//pick driving Licence Image
const pickDrivingImage = () => {

  let width = 1080
  let height = 1080
  ImagePicker.openPicker({
      width: width,
      height: height, 
  })
  .then((image) => {
      // console.log("Props:", image?.path)
      // setDrivingLicencetxt("")
      setDrivingLicenceImg(image?.path)
      setShowDrivingImg(true)
  }) 
}

const openCameraForDriving = () => {
  let width = 1000
  let height = 1080
  ImagePicker.openCamera({
      width: width,
      height: height,
      // cropping: true,
      // useFrontCamera: currentPickerFor == MediaType.Profile
  })
  .then(image => {
      // console.log("Props:", image?.path)
      setDrivingLicenceImg("")
      setShowDrivingImg(true)
  })
};

  //  for insurance image 
  const pickInsuranceImage = () => {
    let width = 1080
    let height = 1080
    ImagePicker.openPicker({
        width: width,
        height: height, 
    })
    .then((image) => {
        // console.log("Props:", image?.path)
        setinsuranceInformtion("")
        setinsuranceInformtionImg(image?.path)
        setShowinsuranceImg(true)
    }) 

}

const openInsuranceCamera = () => {
  let width = 1000
  let height = 1080
  ImagePicker.openCamera({
      width: width,
      height: height,
      // cropping: true,
      // useFrontCamera: currentPickerFor == MediaType.Profile
  })
  .then(image => {
    // console.log("Props:", image?.path)
    setinsuranceInformtion("")
    setinsuranceInformtionImg(image?.path)
    setShowinsuranceImg(true)
  })
};

const CallApi = (payload) =>{
  console.log("Pyload===>",payload);
}
     
const onPressNext = () => {

    //========== VALIDATION ===========
    let emailValidate = utilsHelper.validateEmail(Email);

  if (!profileImg) {
    showMessage({
      message: 'Please Select Profile Image',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
     return

  }
 else if (firstName?.length < 4) {
    showMessage({
      message: 'First Name Must be 4 Digit Character Long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    // setfirstNameempty({msg: 'First Name Must be 4 Digit', uid: Math.random()})
    return

  }
  else if (lastName?.length < 4) {
    showMessage({
      message:  'Last Name Must be 4 Digit Character Long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    // setlastName({msg: 'Last Name Must be 4 Digit', uid: Math.random()})
    return

  } 
  else if (Phone?.length < 15 ) {
    showMessage({
      message: 'Please Enter Your Phone Number',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    // setPhoneempty({msg: 'Phone Number Must Be 11 Digit', uid: Math.random()})
    return

  }
   else if (!emailValidate) {
    showMessage({
      message: 'Please Enter Your Valid Email',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    // setEmailempty({msg:  'Please Enter Your Email', uid: Math.random()})
    return

  } 
  else if (yourBank?.length < 10) {
    showMessage({
      message: 'yourBank 10 digit characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setyourBankempty({msg: 'yourBank 10 digit characters long' , uid: Math.random()})
    return

  }else if (accountNo?.length < 10) {
    showMessage({
      message: 'Account No 10 digit characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setaccountNoempty({msg: 'Account No 10 digit characters long' , uid: Math.random()})
    return

  }else if (RoutingNo?.length < 5) {

    showMessage({
      message: 'RoutingNo 5 digit characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white,
    })
    setRoutingNoempty({msg: 'RoutingNo 5 digit characters long' , uid: Math.random()})
    return
  }
  else if (dateDob == 'DD/MM/YYYY' || dateDob?.length < 9) {

    showMessage({
      message: 'Please Select you Date of Birth',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white,
    })
    return
  }  
  else if (Address?.length < 5) {

    showMessage({
      message: 'Address 5 digit characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white,
    })
    setAddressempty({msg: 'Address 5 digit characters long' , uid: Math.random()})
    return
  } 
  else if (!(country)) {

    showMessage({
      message: 'Please Select Country',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white,
    })
    setcountryempty({msg: 'Please Select Country' , uid: Math.random()})
    return
  } 
  
  else if (!(state)) {
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

  } else if (zipCode?.length < 4) {
    showMessage({
      message: 'Zipcode must be 4 characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setzipCodeempty({msg: 'Zipcode must be 4 characters long', uid: Math.random()})
    return

  }else if (!(speciality)) {
    showMessage({
      message: 'Please select  speciality',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setspecialityempty({msg: 'Please select  speciality', uid: Math.random()})
    return


  } else if (DrivingLicencetxt?.length < 4) {
    showMessage({
      message: 'Driving Licencet must be 4 digit characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setDrivingLicencetxtempty({msg: '4 digit characters long' , uid: Math.random()})
    return

  }else if (!(DrivingLicenceImg)) {
    showMessage({
      message: 'Please Select Driving Licence Image',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    return

  }else if (ProfLicense?.length < 5) {
    showMessage({
      message:'Professional License must be 5 digit characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setProfLicenseempty({msg: 'Must be 5 digit' , uid: Math.random()})
    return

  }else if (issueDate?.length < 5) {
    showMessage({
      message: 'Please Select IssueDate',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setissueDateempty({msg: 'Please Select IssueDate' , uid: Math.random()})
    return

  }
  // else if (dateDob == 'DD/MM/YYYY' || dateDob?.length < 9) {
  //   showMessage({
  //     message: 'Select expirationDate',
  //     backgroundColor: COLORS.mainColor, 
  //     color: COLORS.white, 
  //   })
  //   setexpirationDateempty({msg: "Please Select Your Expiration Date" , uid: Math.random()})
  //   return

  // }
  else if (insuranceInformtion?.length < 2) {

    showMessage({
      message: 'Insurance Informtion 2 Characters Long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setinsuranceInformtionempty({msg: '2 Characters Long' , uid: Math.random()})
    return

  }else if (!(insuranceInformtionImg)) {   
    
    showMessage({
      message: 'Please Select Insurance Informtion Image',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    return

  }


  else {

    var payload = {}

      payload = {
        "Address": Address,
        "country": country,
        "state": state,
        "city": city,
        "zipCode": zipCode,
        "speciality": speciality,
        "DrivingLicencetxt": DrivingLicencetxt,
        "DrivingLicenceImg": DrivingLicenceImg,
        "ProfLicense": ProfLicense,
        "issueDate": issueDate,
        "insuranceInformtion": insuranceInformtion,
        "yourBank": yourBank,
        "accountNo": accountNo,
        "RoutingNo": RoutingNo,
      }
    }
    
    CallApi(payload)
    return
  }





  function SelectProfileImg(){
    return(
     <ProfileImgSelect  Img={profileImg} show={showProfileImg}
         onPress1={()=>pickProfileImage()} 
         onPress2={()=>openCameraForProfileImage()} 
          />
     )
  }

  function TxtInputFields() {
    return(
      <View style={{ marginTop: 20 }} >
        <CombineInputFields ChangeText1={setfirstName} ChangeText2={setlastName} value1={firstName} value2={lastName} title={"Full Name"} placeHolder1={"Enter First Name"} placeHolder2={"Enter Last Name"} />
        <CombineInputFieldsPhoneAndEmail
        maxlen={16} 
        mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/]}
        ChangeText1={setPhone} 
        ChangeText2={setEmail} 
        value1={Phone} 
        value2={Email} 
        title={"Contact"} 
        placeHolder1={"Enter Phone Number"} 
        placeHolder2={"Enter Email Address"} 
        keyType1={'numeric'}
        keyType2={'default'} 
        />

    
            <Text style={{ ...FONTS.p1, fontWeight: "700", color: COLORS.black, marginLeft: 15, marginVertical: 5 }} >Financial/ Payout Profile</Text>
            <SingleInputField required={yourBankempty} value={yourBank} ChangeText={setyourBank} title="Find your bank" placeholdertxt="Enter your bank name" />
           
            <View style={{ marginBottom: -15 }} >
             <PasswordInputField maxlen={10} required={accountNoempty} value={accountNo} ChangeText={setaccountNo} title="Account number" placeholdertxt="Enter account number" keboardtype={'numeric'} eyestatus={eyeaccountNo} onpresseye={()=>{seteyeaccountNo(!eyeaccountNo)}} />
            </View>
         
         
              <PasswordInputField  maxlen={9}  required={RoutingNoempty}value={RoutingNo} ChangeText={setRoutingNo} title="Routing number" placeholdertxt="Enter routing number" keboardtype={'numeric'}   eyestatus={eyeRoutingNo} onpresseye={()=>{seteyeRoutingNo(!eyeRoutingNo)}}  />
   

              <Text style={{ ...FONTS.p1, fontWeight: "700", color: COLORS.black, marginLeft: 15, marginTop: -10 }} >Details</Text>
    

              <View style={{ marginBottom: -15 }} >
              <DobInputField smallDobField={false} required={expirationDateempty} date={dateDob} ChangeText={setDateDob}  show={openDob} title="Date of Birth" onPress={()=>{setOpenDob(!openDob)}} showImg={true} width={250}  placeholdertxt="DD/MM/YYYY" />
             </View>

              <View style={{ marginBottom: -15 }} >
            <LocationInputField required={Addressempty}  value={Address} ChangeText={setAddress} title="Address" placeholdertxt="Enter your address" onPress={()=>{ console.log("Pressed")}} />
            </View>

            <View style={{ marginBottom: -15 }}>
             <ModalInputFields required={countryempty}  value={country} ChangeText={setcountry} title="Country" placeholdertxt="Enter your country"   editable={false} onPress={()=>forCountry()}/>
            </View>
 
            <View style={{ marginBottom: -15 }} >
             <ModalInputFields required={stateempty}  value={state} ChangeText={setstate} title="State" placeholdertxt="Enter your state (abbreviation only)"  editable={false} onPress={()=>forState()} />
            </View>          
           
            <View style={{ marginBottom: -15 }} >
             <ModalInputFields required={cityempty}  value={city} ChangeText={setcity} title="City" placeholdertxt="Enter your city"  editable={false} onPress={()=>forCity()}  />
            </View>
           
           
            <SingleInputField required={zipCodeempty}  value={zipCode} ChangeText={setzipCode} title="Zip Code" placeholdertxt="Enter your Zip code" keboardtype={'numeric'} maxlen={5} />
           
            <View style={{ marginBottom: -15 }} >
             <SpecilityInputField required={specialityempty}  value={speciality} ChangeText={setspeciality} title="Select your Speciality" placeholdertxt=" Select Speciality" onPress={()=>forSpeciality()}  onPressCancel={()=>setspeciality(null)}  />
            </View>


            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }} >
              <SingleInputField required={DrivingLicencetxtempty}  value={DrivingLicencetxt} ChangeText={setDrivingLicencetxt} title="Driver License" placeholdertxt="Enter your driving license"  width={200} />
              <Text style={{ marginLeft: 20, color: COLORS?.black  }} >Or</Text>
              <UploadImageInput required={DrivingLicenceImgempty}   Img={DrivingLicenceImg} show={ShowDrivingImg}  
                onPress1={()=>pickDrivingImage()} 
                onPress2={()=>openCameraForDriving()} 
              
              // onPress={()=>pickDrivingImage()}  
              /> 
            </View>
            
            <View style={{ marginHorizontal: 10 }} >
             <SingleInputField required={ProfLicenseempty}   value={ProfLicense} ChangeText={setProfLicense} title="Medical or Professinal license" placeholdertxt="Enter Manually" width={200} />
            </View>

            <View style={{ flexDirection: 'row', width: 200, marginLeft: 8 }} >
             <SingleInputField required={issueDateempty} value={issueDate} ChangeText={setissueDate} title="Issued State" placeholdertxt="Issued State" width={95} />

             <View style={{ marginLeft: -12 }} >
              <DobInputField smallDobField={false} required={expirationDateempty} date={date} ChangeText={setDate}  show={open} title="Expiration Date" onPress={()=>{setOpen(!open)}} showImg={true} width={65}  placeholdertxt="DD/MM/YYYY" fontSizze={10} />
             </View>

            </View> 
 
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: -20  }} >
              <SingleInputField  required={insuranceInformtionempty} value={insuranceInformtion} ChangeText={setinsuranceInformtion} title="Malpractice Insurance Infor.." placeholdertxt="Enter manually"  width={200} />
              <Text style={{ marginLeft: 20, color: COLORS?.black  }} >Or</Text>
              <UploadImageInput required={insuranceInformtionImgempty}  Img={insuranceInformtionImg} show={ShowinsuranceImg}  
             
             onPress1={()=>pickInsuranceImage()} 
             onPress2={()=>openInsuranceCamera()}               
            // onPress={()=>pickinsuranceImage()} 
             /> 
            </View>
            
      </View>
    )
  }
  const LoginButton = () => {
    return (
      <ButtonNoLogo
        onPress1={onPressNext}
        title="Login"
        backcolor={COLORS.btnColor}
        txtcolor={COLORS.white}
        verticlePadding={25}
      />
    )
  }
  return ( 
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightmainColor } />
      {/* <HeaderDrawer  leftIcon={IONICONS.backarrow}  title="Profile" navigation={navigation} rightIcon={IONICONS.notificationIcon}  rightIconColor={COLORS.btnColor} /> */}
      <View style={{ flex: 1, 
        backgroundColor: COLORS.lightmainColor }}
      >
        <ScrollView>
        {SelectProfileImg()}
        {TxtInputFields()}
        {LoginButton()}


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

export default Profile

































