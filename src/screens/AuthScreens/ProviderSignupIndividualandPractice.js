import React, { useEffect, useState } from 'react'
import {View,Text,StatusBar,Image,ScrollView,Button} from 'react-native'
import Header from '../../components/Header'
import SingleInputField from '../../components/InputFields/SingleInputField'
import { COLORS,IMAGES, FONTS } from '../../constraints/Index'
import LocationInputField from '../../components/InputFields/LocationInputField'
import ModalInputFields from '../../components/InputFields/ModalInputFields'
import DobInputField from '../../components/InputFields/DobInputField'
import PasswordInputField from '../../components/InputFields/PasswordInputField'
import ButtonNoLogo from '../../components/ButtonNoLogo'
import { useDispatch, useSelector } from 'react-redux';
import { HandleModal } from '../../stores/actions/form.action'
import PhNoMaskedInputField from '../../components/InputFields/PhNoMaskedInputField'
import ImagePicker  from 'react-native-image-crop-picker';
import UploadImageInput from '../../components/UploadImageInput'
import { showMessage, hideMessage } from "react-native-flash-message";
import SpecilityInputField from '../../components/InputFields/SpecilityInputField'
import Icon from 'react-native-vector-icons/Ionicons'

const ProviderSignupIndividualandPractice = ({ navigation, route , ...props}) => {

  console.log("props==>",props);

  
     const modalValue = useSelector((state)=> state?.formReducer)
     const {countrys , states , citys, specialitys, conditions } = modalValue

     
     
     useEffect(()=>{
      setcountry(countrys)
      setstate(states)
      setcity(citys)
      setspeciality(specialitys)
     },[modalValue])

     const[PracticeNameempty,setPracticeNameempty] = useState("")
     const[Addressempty,setAddressempty] = useState("")
     const[countryempty,setcountryempty] = useState("")
     const[stateempty,setstateempty] = useState("")
     const[cityempty,setcityempty] = useState("")
     const[zipCodeempty,setzipCodeempty] = useState("")
     const[PhoneNumberempty,setPhoneNumberempty] = useState("")
     const[refralCodeempty,setrefralCodeempty] = useState("")
     const[specialityempty,setspecialityempty] = useState("")
     const[taxidempty,settaxidempty] = useState("")
     const[DrivingLicencetxtempty,setDrivingLicencetxtempty] = useState("")
     const[DrivingLicenceImgempty,setDrivingLicenceImgempty] = useState("")
     const[expirationDateempty,setexpirationDateempty] = useState("")
     const[ProfLicenseempty,setProfLicenseempty] = useState("")
     const[issueDateempty,setissueDateempty] = useState("")
     const[insuranceInformtionempty,setinsuranceInformtionempty] = useState("")
     const[insuranceInformtionImgempty,setinsuranceInformtionImgempty] = useState("")
     const[yourBankempty,setyourBankempty] = useState("")
     const[accountNoempty,setaccountNoempty] = useState("")
     const[RoutingNoempty,setRoutingNoempty] = useState("")
     
     
    const[PracticeName,setPracticeName] = useState("")
    const[Address,setAddress] = useState("")
    const[country,setcountry] = useState("")
    const[state,setstate] = useState("")
    const[city,setcity] = useState("")
    const[zipCode,setzipCode] = useState("")
    const[PhoneNumber,setPhoneNumber] = useState("")
    const[refralCode,setrefralCode] = useState("")
    const[speciality,setspeciality] = useState("")
    const[taxid,settaxid] = useState("")
    const[DrivingLicencetxt,setDrivingLicencetxt] = useState("")
    const[ShowImg,setShowImg] = useState(false)
    const[DrivingLicenceImg,setDrivingLicenceImg] = useState("")
    const[ProfLicense,setProfLicense] = useState("")
    const[issueDate,setissueDate] = useState("")
    const[date, setexpirationDate] = useState("DD/MM/YYYY")
    const[insuranceInformtion,setinsuranceInformtion] = useState("")
    const[ShowinsuranceImg,setShowinsuranceImg] = useState(false)
    const[insuranceInformtionImg,setinsuranceInformtionImg] = useState("")
    const [open, setOpen] = useState(false)
    const[yourBank,setyourBank] = useState("")
    const[eye,seteye] = useState(true)
    const[eyecnfrm,seteyecnfrm] = useState(true)
    const[accountNo,setaccountNo] = useState("")
    const[RoutingNo,setRoutingNo] = useState("")
    
    // console.log("new==>",PracticeName,"--",Address,"--",country,"--",state,"--",city,"--",zipCode,"--",PhoneNumber,"--",refralCode,"--",speciality,"--",taxid,"--",DrivingLicencetxt,"--",ShowImg,"--",DrivingLicenceImg,"--",ProfLicense,"--",issueDate,"--",expirationDate,
    // "--",insuranceInformtion, "--" ,ShowinsuranceImg, "--",insuranceInformtionImg, "--",open,"--",yourBank,"--",accountNo,"--",RoutingNo);

// use effeft condition for making stte empty becouse we have to select any one state from it
  useEffect(()=>{
    setDrivingLicenceImg("")
    setShowImg(false)
  },[DrivingLicencetxt])

  useEffect(()=>{
    setinsuranceInformtionImg("")
    setShowinsuranceImg(false)
  },[insuranceInformtion])




  const dispatch =  useDispatch()
 
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



const CallApi = (payload) =>{
  console.log("payload==>",payload);
  navigation.navigate("AppRoutes")
}
  
     
const onPressNext = () => {
  //========== VALIDATION ===========
  
  if (
    conditions && 
    PracticeName < 4) {
    showMessage({
      message: 'Practice Name must be 4 characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setPracticeNameempty({msg: 'Practice Name must be 4 characters long', uid: Math.random()})
    return

  } else if (Address?.length < 4) {
    showMessage({
      message: 'Address must be 4 characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setAddressempty({msg: 'Address must be 4 characters long', uid: Math.random()})
    return

  } else if (!(country)) {
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

  } else if (zipCode?.length < 4) {
    showMessage({
      message: 'Zipcode must be 4 characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setzipCodeempty({msg: 'Zipcode must be 4 characters long', uid: Math.random()})
    return

  } else if (PhoneNumber?.length < 16) {

    showMessage({
      message: 'Phone Number must be 10 digit characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setPhoneNumberempty({msg: 'Phone Number must be 10 digit characters long', uid: Math.random()})
    return

  } else if (refralCode?.length < 5) {

    showMessage({
      message: 'refralCode must be 5 digit characters long',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setrefralCodeempty({msg: 'refralCode must be 5 digit characters long', uid: Math.random()})
    return

  } else if (!(speciality)) {
    showMessage({
      message: 'Please select  speciality',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setspecialityempty({msg: 'Please select  speciality', uid: Math.random()})
    return


  } else if (
    conditions && 
    taxid?.length < 5) {
    showMessage({
      message: 'Taxid must be 5 digit',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    settaxidempty({msg: 'Taxid must be 5 digit' , uid: Math.random()})
    return

  }
  //  else if (DrivingLicencetxt?.length < 4) {
  //   showMessage({
  //     message: 'Driving Licencet must be 4 digit characters long',
  //     backgroundColor: COLORS.mainColor, 
  //     color: COLORS.white, 
  //   })
  //   setDrivingLicencetxtempty({msg: '4 digit characters long' , uid: Math.random()})
  //   return

  // }else if (!(DrivingLicenceImg)) {
  //   showMessage({
  //     message: 'Please Select Driving Licence Image',
  //     backgroundColor: COLORS.mainColor, 
  //     color: COLORS.white, 
  //   })
  //   return

  // }
  else if (ProfLicense?.length < 5) {
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

  }else if (date == 'DD/MM/YYYY' || date?.length < 9) {
    showMessage({
      message: 'Select expirationDate',
      backgroundColor: COLORS.mainColor, 
      color: COLORS.white, 
    })
    setexpirationDateempty({msg: "Please Select Your Expiration Date" , uid: Math.random()})
    return

  }
  // else if (insuranceInformtion?.length < 2) {

  //   showMessage({
  //     message: 'Insurance Informtion 2 Characters Long',
  //     backgroundColor: COLORS.mainColor, 
  //     color: COLORS.white, 
  //   })
  //   setinsuranceInformtionempty({msg: '2 Characters Long' , uid: Math.random()})
  //   return

  // }
  // else if (!(insuranceInformtionImg)) {   
    
  //   showMessage({
  //     message: 'Please Select Insurance Informtion Image',
  //     backgroundColor: COLORS.mainColor, 
  //     color: COLORS.white, 
  //   })
  //   return

  // }
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
    setRoutingNoempty({ms: 'RoutingNo 5 digit characters long' , uid: Math.random()})
    return
  } 

  else {

    var payload = {}

      payload = {
        "PracticeName": PracticeName,
        "Address": Address,
        "country": country,
        "state": state,
        "city": city,
        "zipCode": zipCode,
        "PhoneNumber": PhoneNumber,
        "refralCode": refralCode,
        "speciality": speciality,
        "taxid": taxid,
        "DrivingLicencetxt": DrivingLicencetxt,
        "DrivingLicenceImg": DrivingLicenceImg,
        "ProfLicense": ProfLicense,
        "issueDate": issueDate,
        "expirationDate": date,
        "insuranceInformtion": insuranceInformtion,
        "yourBank": yourBank,
        "accountNo": accountNo,
        "RoutingNo": RoutingNo,
      }
    }
    
    CallApi(payload)
    return
  }





   
const pickDrivingImage = () => {

  let width = 1080
  let height = 1080
  ImagePicker.openPicker({
      width: width,
      height: height, 
  })
  .then((image) => {
      // console.log("Props:", image?.path)
      setDrivingLicencetxt("")
      setDrivingLicenceImg(image?.path)
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
      // console.log("Props:", image?.path)
      setDrivingLicencetxt("")
      setDrivingLicenceImg(image?.path)
      setShowImg(true)
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


  function InputFields() {
        return (
          <>
           {conditions ?
            <SingleInputField required={PracticeNameempty}  value={PracticeName} ChangeText={setPracticeName} title="Practice Name" placeholdertxt="Business Name" />
            : null} 
            
            <View style={{ marginBottom: -20 }} >
            <LocationInputField required={Addressempty}  value={Address} ChangeText={setAddress} title="Address" placeholdertxt="Enter your address" onPress={()=> console.log("pressed")} />
            </View>

            <View style={{ marginBottom: -20 }}>
             <ModalInputFields required={countryempty}  value={country} ChangeText={setcountry} title="Country" placeholdertxt="Enter your country"  editable={false} onPress={()=>forCountry()}/>
            </View>
 
            <View style={{ marginBottom: -20 }} >
             <ModalInputFields required={stateempty}  value={state} ChangeText={setstate} title="State" placeholdertxt="Enter your state (abbreviation only)"  editable={false} onPress={()=>forState()} />
            </View>          
           
            <View style={{ marginBottom: -20 }} >
             <ModalInputFields required={cityempty}  value={city} ChangeText={setcity} title="City" placeholdertxt="Enter your city"  editable={false} onPress={()=>forCity()}  />
            </View>
           
           
            <SingleInputField required={zipCodeempty}  value={zipCode} ChangeText={setzipCode} title="Zip Code" placeholdertxt="Enter your Zip code" keboardtype={'numeric'} maxlen={5} />
            <PhNoMaskedInputField required={PhoneNumberempty}  value={PhoneNumber} ChangeText={setPhoneNumber} title="Phone Number" placeholdertxt="(310) 550 - 1234" keboardtype={'numeric'} maxlen={16} mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/]} />
            <SingleInputField required={refralCodeempty}  value={refralCode} ChangeText={setrefralCode} title="Referral Code (Optional)"  placeholdertxt="Enter your referral code" keboardtype={'numeric'} maxlen={5}  />
           
            <View style={{ marginBottom: -15 }} >
             <SpecilityInputField required={specialityempty}  value={speciality} ChangeText={setspeciality} title="Select your Speciality" placeholdertxt=" Select Speciality" onPress={()=>forSpeciality()}  onPressCancel={()=>setspeciality(null)}  />
            </View>
        
            {conditions ?
            <PhNoMaskedInputField required={taxidempty} value={taxid} ChangeText={settaxid} title="Tax ID"  placeholdertxt="(##-#######)" keboardtype={'numeric'} maxlen={12}  mask={['(', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ')',]}  />
            : null} 

           <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10 }} >
                <SingleInputField required={DrivingLicencetxtempty}  value={DrivingLicencetxt} ChangeText={setDrivingLicencetxt} title="Driver License" placeholdertxt="Enter your driving license"  width={200} />
                <Text style={{ marginLeft: 20, color: COLORS?.black  }} >Or</Text>
              <UploadImageInput required={DrivingLicenceImgempty}   Img={DrivingLicenceImg} show={ShowImg}  
                onPress1={()=>pickDrivingImage()} 
                onPress2={()=>openCamera()} 
              /> 
            
          </View>
            
        

         
          </>
        )
      }

      const lowerInputFields = () =>{
        return(
          <>
           
           <View style={{ marginHorizontal: 10 }} >
             <SingleInputField required={ProfLicenseempty}   value={ProfLicense} ChangeText={setProfLicense} title="Medical or Professinal license" placeholdertxt="Enter Manually" width={200} />
            </View>

            <View style={{ flexDirection: 'row', width: 200, marginLeft: 8 }} >
             <SingleInputField required={issueDateempty} value={issueDate} ChangeText={setissueDate} title="Issued State" placeholdertxt="Issued State" width={95} />

             <View style={{ marginLeft: -15 }} >
              <DobInputField smallDobField={false} required={expirationDateempty} date={date} ChangeText={setexpirationDate}  show={open} title="Expiration Date" onPress={()=>{setOpen(!open)}} showImg={true} width={65}  placeholdertxt="DD/MM/YYYY" fontSizze={10} />
             </View>

            </View> 
 
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: -10}} >
              <SingleInputField  required={insuranceInformtionempty} value={insuranceInformtion} ChangeText={setinsuranceInformtion} title="Malpractice Insurance Inform.." placeholdertxt="Enter manually"  width={200} />
              <Text style={{ marginLeft: 20, color: COLORS?.black  }} >Or</Text>
              <UploadImageInput required={insuranceInformtionImgempty}  Img={insuranceInformtionImg} show={ShowinsuranceImg}  
             
             onPress1={()=>pickInsuranceImage()} 
             onPress2={()=>openInsuranceCamera()}               
            // onPress={()=>pickinsuranceImage()} 
             /> 
            </View>
            


            <Text style={{ ...FONTS.p1, fontWeight: "700", color: COLORS.black, marginLeft: 15, marginVertical: 15 }} >Financial/ Payout Profile</Text>
            <SingleInputField required={yourBankempty} value={yourBank} ChangeText={setyourBank} title="Find your bank" placeholdertxt="Enter your bank name" />
           
            <View style={{ marginBottom: -15 }} >
             <PasswordInputField required={accountNoempty} value={accountNo} ChangeText={setaccountNo} title="Account number" placeholdertxt="Enter account number" keboardtype={'numeric'}  eyestatus={eye} onpresseye={()=>{seteye(!eye)}} />
            </View>
         
         
              <PasswordInputField  required={RoutingNoempty}value={RoutingNo} ChangeText={setRoutingNo} title="Routing number" placeholdertxt="Enter routing number" keboardtype={'numeric'}   eyestatus={eyecnfrm} onpresseye={()=>{seteyecnfrm(!eyecnfrm)}}   />
          </>
        )
      }

      const LoginButton = () => {
        return (
          <ButtonNoLogo
            onPress1={onPressNext}
            title="Login"
            backcolor={COLORS.btnColor}
            txtcolor={COLORS.white}
            verticlePadding={15}
          />
        )
      }
      function RenderAlreadyAccountTxt() {
        return (
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              marginBottom: 50,
              marginTop: 8
            }}>
            <Text style={{ color: COLORS.btnTxtColor, ...FONTS.p4 }}>
            Already have an account?{' '}
            </Text>
    
            <Text onPress={()=>{ navigation.navigate("Login") }} style={{ color: COLORS.btnColor, ...FONTS.p4, fontWeight: 'bold' }}>Login</Text>
          
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
      <StatusBar backgroundColor={COLORS.mainColor} />
        {/* <Header title="Provider Signup" navigation={navigation} /> */}
      <ScrollView>

      {InputFields()}
      {lowerInputFields()}
      {LoginButton()}
      {RenderAlreadyAccountTxt()} 


      </ScrollView>
    </View>
  )
}

export default ProviderSignupIndividualandPractice
