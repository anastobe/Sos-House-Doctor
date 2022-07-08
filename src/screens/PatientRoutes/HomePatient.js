// import React, { useEffect, useRef, useState } from 'react';
// import { 
//   Dimensions, 
//   StyleSheet, 
//   Text, 
//   View, 
//   PermissionsAndroid , 
//   ActivityIndicator, 
//   SafeAreaView,
//   StatusBar,
//   TouchableOpacity,
//   Vibration,
//   Button,
//   TextInput,
//   FlatList,
//   ScrollView,
//   Image

// } from 'react-native';
// import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
// const windowHeight = Dimensions.get('window').height;
// import Geolocation from 'react-native-geolocation-service'
// import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';

// import Box from '../../components/Box'
// import Header from '../../components/Header'
// import { IONICONS } from '../../constraints/Icons'
// import { COLORS, IMAGES, SHADOWBOX,SHADOW, SIZES, FONTS } from '../../constraints/Index'
// import Icon from 'react-native-vector-icons/Ionicons'
// import { SHADOWBOXDARK, SHADOWELEV_2 } from '../../constraints/Theme'
// import ToggleSwitch from 'toggle-switch-react-native'
// import HeaderDrawer from '../../components/HeaderDrawer'
// import RBSheet from "react-native-raw-bottom-sheet";
// import SingleInputField from '../../components/InputFields/SingleInputField'
// import ModalInputFields from '../../components/InputFields/ModalInputFields'
// import SpecilityInputField from '../../components/InputFields/SpecilityInputField'
// import { useDispatch, useSelector } from 'react-redux'
// import { HandleModal, HandleModalSignOut } from '../../stores/actions/form.action'
// import Images from '../../constraints/Images'
// import CommentsInputField from '../../components/InputFields/CommentsInputField'
// import Animated from 'react-native-reanimated';
// import { HandleCancelationRequest, HandleModalMessage } from '../../stores/actions/Patient.actions';
// import ButtonNoLogo from '../../components/ButtonNoLogo';

// import * as Progress from 'react-native-progress';

// function HomePatient({navigation}) {

//   const [logitude, setLongitude] = useState(null)
//   const [latitude, setLatitude] = useState(null)
//   const [showAnotherImage, setshowAnotherImage] = useState(false)
//   const [permission, setPermission] = useState(false)
//   const[LookingForAvailableProvider,setLookingForAvailableProvider] = useState(true)  

//   const [value, setValue] = useState(0)

//   useEffect(() => {
//     getCurrentLocations()
//   }, [])

//  const getCurrentLocations = () =>{
  
//   Geolocation.getCurrentPosition(
//     position => {
//       console.log('mypostion', position)
//       mylatitude(position.coords.latitude, position.coords.longitude)
//     },
//     error => {
//       console.log(error.code, error.message)
//     },
//     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//   )
//   requestCameraPermission()

//  }

 
//   const requestCameraPermission = () => {
//     if (Platform.OS === 'android') {
//       PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
//       ]).then(result => {
//         if (
//           result['android.permission.ACCESS_COARSE_LOCATION'] &&
//           result['android.permission.CAMERA'] &&
//           result['android.permission.ACCESS_FINE_LOCATION'] &&
//           result['android.permission.READ_EXTERNAL_STORAGE'] &&
//           result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
//         ) {
//           setPermission(true)
//         } else if (
//           result['android.permission.ACCESS_COARSE_LOCATION'] ||
//           result['android.permission.CAMERA'] ||
//           result['android.permission.ACCESS_FINE_LOCATION'] ||
//           result['android.permission.READ_EXTERNAL_STORAGE'] ||
//           result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
//             'never_ask_again'
//         ) {
//           requestCameraPermission()

//         }
//       })
//     }
//   }
  
//   const mylatitude = (e, v) => {
//     setLatitude(e)
//     setLongitude(v)  
//   }
  

// //other than map work 

//   const dispatch =  useDispatch()

//   const modalValue = useSelector((state)=> state?.formReducer)
//   const { specialitys, age, symptoms } = modalValue


//   useEffect(()=>{
//    setspeciality(specialitys)
//    setAge(age)
//    setsymption(symptoms)
//   },[modalValue])


//   const[AgeEmpty, setAgeEmpty] = useState("")
//   const[patientNameempty, setpatientNameempty] = useState("")
//   const[specialityempty,setspecialityempty] = useState("")  
//   const[symptionempty,setsymptionempty] = useState("")  
//   const[OtherInstructionsempty,setOtherInstructionsempty] = useState("")  

//   const[patientName, setpatientName] = useState("")
//   const[Age, setAge] = useState("")
//   const[Locations, setLocations] = useState("")
//   const[speciality,setspeciality] = useState("") 
//   const[symption,setsymption] = useState("")  
//   const[OtherInstructions,setOtherInstructions] = useState("")  



  
//   let arraofobjAge = [
//     {
//       "id": 1,
//       "title": "1"
//     },
//     {
//       "id": 2,
//       "title": "2"
//     },
//     {
//       "id": 3,
//       "title": "3"
//     },
//     {
//       "id": 4,
//       "title": "4"
//     },
//   ]
  
//   let arraofobjSpeciality = [
//     {
//       "id": 1,
//       "title": "Acupuncturist"
//     },
//     {
//       "id": 2,
//       "title": "Chiropractor"
//     },
//     {
//       "id": 3,
//       "title": "COVID Testing"
//     },
//     {
//       "id": 4,
//       "title": "DV1"
//     },
//   ]

//   let arraofobjSymptions = [
//     {
//       "id": 1,
//       "title": "Abdominal Pain"
//     },
//     {
//       "id": 2,
//       "title": "Agitation"
//     },
//     {
//       "id": 3,
//       "title": "Anxiety"
//     },
//     {
//       "id": 4,
//       "title": "Appetite Loss"
//     },
//   ]

//   function forAge() {
//     dispatch(HandleModal({
//       visibility: true,
//       title: "Age",
//       arrObj: arraofobjAge,
//      }))
//   } 
//   function forSpeciality() {
//     dispatch(HandleModal({
//       visibility: true,
//       title: "Speciality",
//       arrObj: arraofobjSpeciality,
//      }))
//   } 
//   function forSymptoms() {
//     dispatch(HandleModal({
//       visibility: true,
//       title: "Symptoms",
//       arrObj: arraofobjSymptions,
//      }))
//   }
  
//   function CustomHeader() {
//    return(

//      <View style={{ 
//        position: 'absolute',
//        flex: 1,
//        zIndex: 9999,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: '100%',
//     height: 40,
//     backgroundColor: "f2aa4c",
//     marginTop: 15
//   }} >
  
//     <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 15 }} >
//       <View style={{ backgroundColor: "#fff", borderRadius: 5, width: 32, height: 32, alignItems: "center", justifyContent: "center" }} >
//         <Icon name={IONICONS?.drawerIcon} size={23}color={"#000"} onPress={ ()=> navigation?.openDrawer() } />
//       </View>
//     </View>
  
//     <View style={{ width: 100, justifyContent: "center", alignItems: "center", marginRight: 15, flexDirection: "row", justifyContent: "space-around" }} >
  
//     <TouchableOpacity onPress={()=>{ 
//       getCurrentLocations()      
//     }} style={{ backgroundColor: "#fff", borderRadius: 5, width: 32, height: 32,  alignItems: "center", justifyContent: "center" }} >
//       <Image style={{ width: 20, height: 22, resizeMode: 'contain' }} source={IMAGES?.locationPic} />
//     </TouchableOpacity>
  
//     <TouchableOpacity  onPress={()=>{ navigation.navigate("NotificationPatient") }}  style={{ backgroundColor: "#fff", borderRadius: 5, width: 32, height: 32,  alignItems: "center", justifyContent: "center" }} >
//       <Icon name={IONICONS?.notificationIcon} size={23}color={COLORS?.btnColor2} onPress={ ()=> console.log("left button pressed") } />
//     </TouchableOpacity>
//     </View>
//   </View>
//   )
// }

// const UpperTxt = () =>{
//   return(
//     <View style={{ marginBottom: -5 }} >
//         <Text onPress={()=>{ setLookingForAvailableProvider(false) }} style={{ color: COLORS?.lightTxtColor, ...FONTS?.p5, marginTop: 10  }} >Hello Anas Ahmed</Text>
//         <Text style={{ color: COLORS?.black, fontSize: 25, fontWeight: 'bold' }} >Find a Provider</Text>
//       </View>
//     )
//   }
//   const nameAndAgeInputField = () =>{
//     return(
//       <View style={{ marginLeft: -5, flexDirection: "row" , justifyContent: "space-between" }}  >
//       <SingleInputField btnTxtColor={COLORS?.lightTxtColor} titleBolness={"700"} width={220} required={patientNameempty} value={patientName} ChangeText={setpatientName} title="PATIENT NAME" placeholdertxt="Enter your patient name" />

//       <>
// <View style={{ marginVertical:  10  }}>
// <Text style={{  color: COLORS?.lightTxtColor, ...FONTS.p4, marginBottom: 5, fontWeight: "700"   }} >AGE</Text>
// <TouchableOpacity onPress={()=>{ forAge() }}  style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, width: 80 , flexDirection: "row", justifyContent: "space-between", alignItems: 'center',height: 42 }}>

//   <TextInput  
//    value={Age} 
//    onChangeText={(e)=>setAge(e)} 
//    placeholder={"AGE"} 
//    editable={false}
//   style={{ width: 40  }}
//    color={COLORS.black}
//   />

//      <Image
//      style={{
//        width: 20,
//        height: 20,
//        resizeMode: 'contain',
//        marginRight: 15 
//      }}
//      source={Images?.dropDown}
//    /> 


// </TouchableOpacity>
// </View>
// </>

//     </View>
//     )
//   }

//   const LocationField = () =>{
//     return(

//       <View style={{marginVertical:  SIZES.padding }} >
//   <View style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, height: 42, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>      

//   <TouchableOpacity onPress={()=>{console.log("Icon Pressed")}}  style={{ marginLeft: 5 }} >
//    <Icon name="search" size={20} color={COLORS?.mainColor} /> 
//   </TouchableOpacity >

//     <TextInput  
//      value={"American Software House, Nazmabad Room No: 423"} 
//      onChangeText={(e)=>{setLocations(e)}} 
//      placeholder={"sasassa"} 
//      style={{ width: 250 }}
//      />
    
//     <TouchableOpacity onPress={()=>{console.log("Icon Pressed")}}  style={{ marginRight: 15 }} >
//       <Image
//       style={{
//         width: 20,
//         height: 22,
//         resizeMode: 'contain'
//       }}
//       source={IMAGES?.locationPic}
//       />
//     </TouchableOpacity >
 
//   </View>
// </View>

//   )
//   }
//   const SpecialityAndSymptoms = () =>{
//     return(
//   <View style={{ marginHorizontal: -15 }} >
//     <View style={{ marginTop: -10 }}  >
//       <ModalInputFields placeholderTextColor={COLORS?.btnColor2} btnTxtColor={COLORS?.lightTxtColor} titleBolness={"700"}  required={specialityempty}  value={speciality} ChangeText={setspeciality} title="I NEED" placeholdertxt="Speciality" onPress={()=>forSpeciality()}  onPressCancel={()=>setspeciality(null)} editable={false} />
//     </View>

//     <View style={{ marginTop: -25 }}  >
//       <ModalInputFields btnTxtColor={COLORS?.lightTxtColor} titleBolness={"700"}  required={symptionempty}  value={symption} ChangeText={setsymption} title="MY SYMPTOMS" placeholdertxt="Your Symptoms" onPress={()=>forSymptoms()}  onPressCancel={()=>forSymptoms(null)} editable={false} />
//     </View>
//   </View>
//     )
//   }
//   const CommentFields = () =>{
//     return(
//       <View style={{ marginTop: -25, marginHorizontal: -15 }} >
//         <CommentsInputField  fontSizes={14}  title="OTHER INSTRUCTIONS"  btnTxtColor={COLORS?.lightTxtColor} titleBolness={"700"}  required={OtherInstructionsempty} value={OtherInstructions} ChangeText={setOtherInstructions} placeholdertxt="Other Instructions" maxlen={500} />
//       </View>
//     )
//   }      

// const showMessageInScreen = (data) =>{

//   if (data == 'HouseCall') {

//     dispatch(HandleModalMessage({ visibility: true, title: "Your request has been Submitted! Searching for your provider" })) 
  
//     setTimeout(() => {
//       dispatch(HandleModalMessage({ visibility: false, title: "" })) 
//     }, 3000);

//    setLookingForAvailableProvider(true)
    
//   } else if (data == 'Teleconsult') {
  
//     dispatch(HandleModalMessage({ visibility: true, title: "Your request has been Submitted! Searching for your provider" })) 
  
//     setTimeout(() => {
//       dispatch(HandleModalMessage({ visibility: false, title: "" })) 
//     }, 3000);

//     setLookingForAvailableProvider(true)

//   }
  
// } 


//   const renderTabs = () =>{
//     return(
//         <>
//         <View style={{ alignItems: "center", flexDirection: "row", justifyContent: 'center', justifyContent: "space-around", marginBottom: 100 }} >

//           <TouchableOpacity onPress={()=>{ showMessageInScreen("HouseCall") }} style={{ height: 45, width: '49%', backgroundColor: COLORS.btnColor2, alignItems: "center", justifyContent: "center", borderRadius: 5,  }} >
//            <Text style={{ ...FONTS.p4, color: COLORS.white }} >Request A House Call</Text>
//           </TouchableOpacity>  

//           <TouchableOpacity onPress={()=>{ showMessageInScreen("Teleconsult") }} style={{ height: 45, width: '49%', backgroundColor: COLORS.mainColor, alignItems: "center", justifyContent: "center", borderRadius: 5,   }} >
//           <Text style={{ ...FONTS.p4, color: COLORS.white }} >Request a Teleconsult</Text>
//           </TouchableOpacity>  

//         </View>
//         </>
//     )
// }
//   const renderBottomTxt = () =>{
//   return(
//     <View style={{ position: "absolute", bottom: 0, backgroundColor: COLORS?.btnColor2, width: '100%', height: 45, justifyContent: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20, zIndex: 99999  }} >
//       <Text style={{ color: COLORS?.white,  textAlign: 'center', fontSize: 11, fontWeight: "600",  }} >IN CASE OF A "LIFE THREATINING" MEDICAL EMERGENCY DIAL 911 IMMEDIATELY</Text>
//     </View>
//   )
// }

//   const onRegionChange = (e) =>{
    
//     setshowAnotherImage(true)
//     console.log("region Change====>",e)
//     setLatitude(e.latitude)
//     setLongitude(e.longitude)
//     // setLatitudeedelta(e?.latitudeDelta)
//     // setLongitudeedelta(e?.longitudeDelta)
    
//   }



//   const BottomContent = () =>{
//     return(
//       <View style={styles.header}>
//       <View style={[styles.panelHandle,{ alignSelf:"center"}]} />
      
//     <View style={{ marginHorizontal: 15 }} >

//       {UpperTxt()}
//       {nameAndAgeInputField()}
//       {LocationField()}
//       {SpecialityAndSymptoms()}
//       {CommentFields()}     
//       {renderTabs()} 
      
//     </View>   

//     </View>
//   )
// }
  
// const LookingForAvailableProduct = () =>{
//   return(

//     <View style={[styles.header, { height: '100%' } ]}>

//     <View style={[styles.panelHandle,{ alignSelf:"center"}]} />

//     <View style={{ marginHorizontal: 15 }} >

//     <Text  onPress={()=>{ setLookingForAvailableProvider(true) }} style={{ marginTop: 5, ...FONTS.p1, color: COLORS?.black, fontWeight: '700' }} >Looking For Available Providers</Text>
    
//     <Progress.Bar   
//       animated={true} 
//       indeterminate={true} 
//       progress={0.3} 
//       width={200} 
//       indeterminateAnimationDuration={2000}
//       color={COLORS?.btnColor2}
//       backgroundColor={"#c9ebf2"} 
//       animationType={'spring'}
//       animationConfig={{ bounciness: 2 }}
//       style={{width: '100%',height: 5, marginVertical: 10, borderColor: "#c9ebf2"  }}
//     />

//     {/* <View style={{  alignSelf:"center",width: '100%', height: 3, backgroundColor: '#BEC3C5', borderRadius: 4, marginVertical: 10 }} />     */}
    
//     <View style={{ marginVertical:  SIZES.padding +5  }} >
//       <View style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, height: 150, justifyContent: "center" }}>

//       <Text style={{ marginVertical: 5, fontWeight: '600', ...FONTS.p7 , color: COLORS?.black, textDecorationLine: 'underline', marginLeft: 10, fontWeight: "600" }} >Booking Details:</Text>


//     <View style={{ flexDirection: "row", marginLeft: 10 }} >
//       <Text style={{  fontWeight: '600', ...FONTS.p7, lineHeight: 22 ,color: COLORS?.black,  }} >Booking Type:</Text>
//       <Text style={{  ...FONTS.p7, lineHeight: 22 ,color: COLORS?.btnColor2, }} > HOUSECALL</Text>
//     </View>

//     <View style={{ flexDirection: "row", marginLeft: 10 }} >
//       <Text style={{  fontWeight: '600', ...FONTS.p7, lineHeight: 22 ,color: COLORS?.black,  }} >Speciality:</Text>
//       <Text style={{  ...FONTS.p7, lineHeight: 22 ,color: COLORS?.btnColor2, }} > DV1</Text>
//     </View>

//     <View style={{ flexDirection: "row", marginLeft: 10 }} >
//       <Text style={{  fontWeight: '600', ...FONTS.p7, lineHeight: 22 ,color: COLORS?.black,  }} >Symptoms:</Text>
//       <Text style={{  ...FONTS.p7, lineHeight: 22 ,color: COLORS?.btnColor2, }} > Anxiety</Text>
//     </View>

//     <View style={{ flexDirection: "row", marginLeft: 10 }} >
//       <Text style={{  fontWeight: '600', ...FONTS.p7, lineHeight: 22 ,color: COLORS?.black,  }} >Address:</Text>
//       <Text style={{  ...FONTS.p7, lineHeight: 22 ,color: COLORS?.btnColor2, }} > Orangi Town Karachi</Text>
//     </View>

//     {/* <View style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, height: 50 }}>

//     </View> */}


//       </View>
//     </View>


//     </View>   

//   </View>
//   )
// }

// const PressCancelBooking = () =>{


//   dispatch(HandleCancelationRequest({ 
  
//     visibility: true, 
//     title: "HandleCancelationRequest", 
//     heading: "Tell us why you want to cancel your appoinment?",
  
//   }))

// }

// const CancelButttonRequest = () =>{
//   return(
//     <TouchableOpacity
//     onPress={()=> PressCancelBooking()  }
//     style={{
//       // borderColor: COLORS?.btnColor2,
//       // borderWidth: 2.5,
//       borderRadius: 5,
//       marginBottom: 20,
//       alignSelf: "center",
//       height: 45,
//       justifyContent: "flex-start",
//       alignItems: "center",
//       paddingLeft: 10,
//       flexDirection: "row",
//       zIndex: 9999,
//       backgroundColor: "#fff",
//       position: "absolute",
//       bottom: 0,
//       width: '90%',
//       ...SHADOW
      



//     }}>
      
//       <View style={{ width: 22, height: 22, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }} >  
//         <Icon name={IONICONS?.close} size={22}color={COLORS?.lightred}  />
//       </View>

//       <Text style={{ ...FONTS?.p5 ,  fontWeight: '600', color: COLORS?.lightred }} >  Cancel Booking</Text>
  
//   </TouchableOpacity>
//   )
// }

//   return (          

// <View style={styles.container}>

// {CustomHeader()}
// <>
  
//    {latitude == null && logitude == null ? (
//     <View
//       style={{
//         position: 'absolute',
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: 'rgba(0,0,0,0.2)',
//         zIndex: 999,
//         top: 0,
//         right: 0,
//         left: 0,
//         bottom: 0,
//         alignItems: 'center'
//       }}>
//       <ActivityIndicator size="large" color={"#000"} />
//     </View>
//   ) : latitude !== null && logitude !== null ? (

// <View style={{ height: windowHeight / 2  }} >
//     <MapView
//     onRegionChange={(e)=>
//       onRegionChange(e)
//     }
//       provider={PROVIDER_GOOGLE}
//       // style={StyleSheet.absoluteFill}
//       style={{ height: SIZES?.height / 2 , justifyContent: "center", alignItems: "center" }}
//       onRegionChangeComplete={ ()=> setshowAnotherImage(false) }
//       showsUserLocation={true}
//       showsMyLocationButton={false}
//       rotateEnabled={false}
     
//       // followsUserLocation={true}
//       // showsCompass={true}
//       // scrollEnabled={true}
//       // zoomEnabled={true}
//       // pitchEnabled={true}

//       initialRegion={{
//         latitude: latitude,
//         longitude: logitude,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//       }}
//       />
      
//          <Image source={ showAnotherImage ? IMAGES?.addicon : IMAGES?.ProviderPic } style={{ width: 50, height: 60, position: "absolute", alignSelf: "center", top: '50%'}} ></Image>
  
//     </View>
//   ) : null}

// </>

//       <ScrollBottomSheet  // If you are using TS, that'll infer the renderItem `item` type
//         componentType="FlatList"
        
//         snapPoints={[  windowHeight / 3 , windowHeight / 2 
//       ]}
//         scrollEnabled={true}
//         initialSnapIndex={1}
        
//         renderHandle={() => (
//           <View style={styles.header}>
//             <View style={[styles.panelHandle,{ alignSelf: "center" }]} />
//           </View>
//         )}
          
          
//           // LookingForAvailableProvider ?
//           // BottomContent
//           // :
//           // LookingForAvailableProduct
          


//       data={[1]}
//       keyExtractor={i => i}
//       renderItem={({ item }) => { 

//       console.log("item===>",item);

//         return(
        


//         LookingForAvailableProvider ?
//         <BottomContent />
//         :
//         <LookingForAvailableProduct />

//          )   
      
//     }}


//         contentContainerStyle={styles.contentContainerStyle}
//       />
      
//       {LookingForAvailableProvider ?
//       renderBottomTxt()
//       : 
//       CancelButttonRequest()}


//     </View>


//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainerStyle: {
//     padding: 16,
//     backgroundColor: '#F3F4F9',
//   },
//   header: {
//     // alignItems: 'center',
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20
//   },
//   panelHandle: {
//     width: 25,
//     height: 3,
//     backgroundColor: '#BEC3C5',
//     borderRadius: 4
//   },
//   item: {
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     alignItems: 'center',
//     marginVertical: 10,
//   },

// //maps
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
//   // map: {
//   //   width: Dimensions.get('window').width,
//   //   height: Dimensions.get('window').height,
//   // },

// });

// export default HomePatient;





















































//everything fi9 imran bhai k hissab se sheet ko pura upper krdo 

import React, { useEffect, useRef, useState } from 'react';
import { 
  Dimensions, 
  StyleSheet, 
  Text, 
  View, 
  PermissionsAndroid , 
  ActivityIndicator, 
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Vibration,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  Image

} from 'react-native';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
const windowHeight = Dimensions.get('window').height;
import Geolocation from 'react-native-geolocation-service'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';

import Box from '../../components/Box'
import Header from '../../components/Header'
import { IONICONS } from '../../constraints/Icons'
import { COLORS, IMAGES, SHADOWBOX,SHADOW, SIZES, FONTS } from '../../constraints/Index'
import Icon from 'react-native-vector-icons/Ionicons'
import { SHADOWBOXDARK, SHADOWELEV_2 } from '../../constraints/Theme'
import ToggleSwitch from 'toggle-switch-react-native'
import HeaderDrawer from '../../components/HeaderDrawer'
import RBSheet from "react-native-raw-bottom-sheet";
import SingleInputField from '../../components/InputFields/SingleInputField'
import ModalInputFields from '../../components/InputFields/ModalInputFields'
import SpecilityInputField from '../../components/InputFields/SpecilityInputField'
import { useDispatch, useSelector } from 'react-redux'
import { HandleModal, HandleModalSignOut } from '../../stores/actions/form.action'
import Images from '../../constraints/Images'
import CommentsInputField from '../../components/InputFields/CommentsInputField'
import Animated from 'react-native-reanimated';
import { HandleCancelationRequest, HandleModalMessage } from '../../stores/actions/Patient.actions';
import ButtonNoLogo from '../../components/ButtonNoLogo';

import * as Progress from 'react-native-progress';

function HomePatient({navigation}) {

  const [logitude, setLongitude] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [showAnotherImage, setshowAnotherImage] = useState(false)
  const [permission, setPermission] = useState(false)
  const[LookingForAvailableProvider,setLookingForAvailableProvider] = useState(true)  

  const [value, setValue] = useState(0)

  useEffect(() => {
    getCurrentLocations()
  }, [])

 const getCurrentLocations = () =>{
  
  Geolocation.getCurrentPosition(
    position => {
      console.log('mypostion', position)
      mylatitude(position.coords.latitude, position.coords.longitude)
    },
    error => {
      console.log(error.code, error.message)
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  )
  requestCameraPermission()

 }

 
  const requestCameraPermission = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ]).then(result => {
        if (
          result['android.permission.ACCESS_COARSE_LOCATION'] &&
          result['android.permission.CAMERA'] &&
          result['android.permission.ACCESS_FINE_LOCATION'] &&
          result['android.permission.READ_EXTERNAL_STORAGE'] &&
          result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
        ) {
          setPermission(true)
        } else if (
          result['android.permission.ACCESS_COARSE_LOCATION'] ||
          result['android.permission.CAMERA'] ||
          result['android.permission.ACCESS_FINE_LOCATION'] ||
          result['android.permission.READ_EXTERNAL_STORAGE'] ||
          result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            'never_ask_again'
        ) {
          requestCameraPermission()

        }
      })
    }
  }
  
  const mylatitude = (e, v) => {
    setLatitude(e)
    setLongitude(v)  
  }
  

//other than map work 

  const dispatch =  useDispatch()

  const modalValue = useSelector((state)=> state?.formReducer)
  const { specialitys, age, symptoms } = modalValue


  useEffect(()=>{
   setspeciality(specialitys)
   setAge(age)
   setsymption(symptoms)
  },[modalValue])


  const[AgeEmpty, setAgeEmpty] = useState("")
  const[patientNameempty, setpatientNameempty] = useState("")
  const[specialityempty,setspecialityempty] = useState("")  
  const[symptionempty,setsymptionempty] = useState("")  
  const[OtherInstructionsempty,setOtherInstructionsempty] = useState("")  

  const[patientName, setpatientName] = useState("")
  const[Age, setAge] = useState("")
  const[Locations, setLocations] = useState("")
  const[speciality,setspeciality] = useState("") 
  const[symption,setsymption] = useState("")  
  const[OtherInstructions,setOtherInstructions] = useState("")  



  
  let arraofobjAge = [
    {
      "id": 1,
      "title": "1"
    },
    {
      "id": 2,
      "title": "2"
    },
    {
      "id": 3,
      "title": "3"
    },
    {
      "id": 4,
      "title": "4"
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

  let arraofobjSymptions = [
    {
      "id": 1,
      "title": "Abdominal Pain"
    },
    {
      "id": 2,
      "title": "Agitation"
    },
    {
      "id": 3,
      "title": "Anxiety"
    },
    {
      "id": 4,
      "title": "Appetite Loss"
    },
  ]

  function forAge() {
    dispatch(HandleModal({
      visibility: true,
      title: "Age",
      arrObj: arraofobjAge,
     }))
  } 
  function forSpeciality() {
    dispatch(HandleModal({
      visibility: true,
      title: "Speciality",
      arrObj: arraofobjSpeciality,
     }))
  } 
  function forSymptoms() {
    dispatch(HandleModal({
      visibility: true,
      title: "Symptoms",
      arrObj: arraofobjSymptions,
     }))
  }
  
  function CustomHeader() {
   return(

     <View style={{ 
       position: 'absolute',
       flex: 1,
       zIndex: 9999,
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    height: 40,
    backgroundColor: "f2aa4c",
    marginTop: 15
  }} >
  
    <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 15 }} >
      <View style={{ backgroundColor: "#fff", borderRadius: 5, width: 32, height: 32, alignItems: "center", justifyContent: "center" }} >
        <Icon name={IONICONS?.drawerIcon} size={23}color={"#000"} onPress={ ()=> navigation?.openDrawer() } />
      </View>
    </View>
  
    <View style={{ width: 100, justifyContent: "center", alignItems: "center", marginRight: 15, flexDirection: "row", justifyContent: "space-around" }} >
  
    <TouchableOpacity onPress={()=>{ 
      getCurrentLocations()      
    }} style={{ backgroundColor: "#fff", borderRadius: 5, width: 32, height: 32,  alignItems: "center", justifyContent: "center" }} >
      <Image style={{ width: 20, height: 22, resizeMode: 'contain' }} source={IMAGES?.locationPic} />
    </TouchableOpacity>
  
    <TouchableOpacity  onPress={()=>{ navigation.navigate("NotificationPatient") }}  style={{ backgroundColor: "#fff", borderRadius: 5, width: 32, height: 32,  alignItems: "center", justifyContent: "center" }} >
      <Icon name={IONICONS?.notificationIcon} size={23}color={COLORS?.btnColor2} onPress={ ()=> console.log("left button pressed") } />
    </TouchableOpacity>
    </View>
  </View>
  )
}

const UpperTxt = () =>{
  return(
    <View style={{ marginBottom: -5 }} >
        <Text onPress={()=>{ setLookingForAvailableProvider(false) }} style={{ color: COLORS?.lightTxtColor, ...FONTS?.p5, marginTop: 10  }} >Hello Anas Ahmed</Text>
        <Text style={{ color: COLORS?.black, fontSize: 25, fontWeight: 'bold' }} >Find a Provider</Text>
      </View>
    )
  }
  const nameAndAgeInputField = () =>{
    return(
      <View style={{ marginLeft: -5, flexDirection: "row" , justifyContent: "space-between" }}  >
      <SingleInputField btnTxtColor={COLORS?.lightTxtColor} titleBolness={"700"} width={220} required={patientNameempty} value={patientName} ChangeText={setpatientName} title="PATIENT NAME" placeholdertxt="Enter your patient name" />

      <>
<View style={{ marginVertical:  10  }}>
<Text style={{  color: COLORS?.lightTxtColor, ...FONTS.p4, marginBottom: 5, fontWeight: "700"   }} >AGE</Text>
<TouchableOpacity onPress={()=>{ forAge() }}  style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, width: 80 , flexDirection: "row", justifyContent: "space-between", alignItems: 'center',height: 42 }}>

  <TextInput  
   value={Age} 
   onChangeText={(e)=>setAge(e)} 
   placeholder={"AGE"} 
   editable={false}
  style={{ width: 40  }}
   color={COLORS.black}
  />

     <Image
     style={{
       width: 20,
       height: 20,
       resizeMode: 'contain',
       marginRight: 15 
     }}
     source={Images?.dropDown}
   /> 


</TouchableOpacity>
</View>
</>

    </View>
    )
  }

  const LocationField = () =>{
    return(

      <View style={{marginVertical:  SIZES.padding }} >
  <View style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, height: 42, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>      

  <TouchableOpacity onPress={()=>{console.log("Icon Pressed")}}  style={{ marginLeft: 5 }} >
   <Icon name="search" size={20} color={COLORS?.mainColor} /> 
  </TouchableOpacity >

    <TextInput  
     value={"American Software House, Nazmabad Room No: 423"} 
     onChangeText={(e)=>{setLocations(e)}} 
     placeholder={"sasassa"} 
     style={{ width: 250 }}
     />
    
    <TouchableOpacity onPress={()=>{console.log("Icon Pressed")}}  style={{ marginRight: 15 }} >
      <Image
      style={{
        width: 20,
        height: 22,
        resizeMode: 'contain'
      }}
      source={IMAGES?.locationPic}
      />
    </TouchableOpacity >
 
  </View>
</View>

  )
  }
  const SpecialityAndSymptoms = () =>{
    return(
  <View style={{ marginHorizontal: -15 }} >
    <View style={{ marginTop: -10 }}  >
      <ModalInputFields placeholderTextColor={COLORS?.btnColor2} btnTxtColor={COLORS?.lightTxtColor} titleBolness={"700"}  required={specialityempty}  value={speciality} ChangeText={setspeciality} title="I NEED" placeholdertxt="Speciality" onPress={()=>forSpeciality()}  onPressCancel={()=>setspeciality(null)} editable={false} />
    </View>

    <View style={{ marginTop: -25 }}  >
      <ModalInputFields btnTxtColor={COLORS?.lightTxtColor} titleBolness={"700"}  required={symptionempty}  value={symption} ChangeText={setsymption} title="MY SYMPTOMS" placeholdertxt="Your Symptoms" onPress={()=>forSymptoms()}  onPressCancel={()=>forSymptoms(null)} editable={false} />
    </View>
  </View>
    )
  }
  const CommentFields = () =>{
    return(
      <View style={{ marginTop: -25, marginHorizontal: -15 }} >
        <CommentsInputField  fontSizes={14}  title="OTHER INSTRUCTIONS"  btnTxtColor={COLORS?.lightTxtColor} titleBolness={"700"}  required={OtherInstructionsempty} value={OtherInstructions} ChangeText={setOtherInstructions} placeholdertxt="Other Instructions" maxlen={500} />
      </View>
    )
  }      

const showMessageInScreen = (data) =>{

  if (data == 'HouseCall') {

    dispatch(HandleModalMessage({ visibility: true, title: "Your request has been Submitted! Searching for your provider" })) 
  
    setTimeout(() => {
      dispatch(HandleModalMessage({ visibility: false, title: "" })) 
    }, 3000);

   setLookingForAvailableProvider(true)
    
  } else if (data == 'Teleconsult') {
  
    dispatch(HandleModalMessage({ visibility: true, title: "Your request has been Submitted! Searching for your provider" })) 
  
    setTimeout(() => {
      dispatch(HandleModalMessage({ visibility: false, title: "" })) 
    }, 3000);

    setLookingForAvailableProvider(true)

  }
  
} 


  const renderTabs = () =>{
    return(
        <>
        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: 'center', justifyContent: "space-around", marginBottom: 100 }} >

          <TouchableOpacity onPress={()=>{ showMessageInScreen("HouseCall") }} style={{ height: 45, width: '49%', backgroundColor: COLORS.btnColor2, alignItems: "center", justifyContent: "center", borderRadius: 5,  }} >
           <Text style={{ ...FONTS.p4, color: COLORS.white }} >Request A House Call</Text>
          </TouchableOpacity>  

          <TouchableOpacity onPress={()=>{ showMessageInScreen("Teleconsult") }} style={{ height: 45, width: '49%', backgroundColor: COLORS.mainColor, alignItems: "center", justifyContent: "center", borderRadius: 5,   }} >
          <Text style={{ ...FONTS.p4, color: COLORS.white }} >Request a Teleconsult</Text>
          </TouchableOpacity>  

        </View>
        </>
    )
}
  const renderBottomTxt = () =>{
  return(
    <View style={{ position: "absolute", bottom: 0, backgroundColor: COLORS?.btnColor2, width: '100%', height: 45, justifyContent: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20, zIndex: 99999  }} >
      <Text style={{ color: COLORS?.white,  textAlign: 'center', fontSize: 11, fontWeight: "600",  }} >IN CASE OF A "LIFE THREATINING" MEDICAL EMERGENCY DIAL 911 IMMEDIATELY</Text>
    </View>
  )
}

  const onRegionChange = (e) =>{
    
    setshowAnotherImage(true)
    console.log("region Change====>",e)
    setLatitude(e.latitude)
    setLongitude(e.longitude)
    // setLatitudeedelta(e?.latitudeDelta)
    // setLongitudeedelta(e?.longitudeDelta)
    
  }



  const BottomContent = () =>{
    return(
      <View style={styles.header}>
      <View style={[styles.panelHandle,{ alignSelf:"center"}]} />
      
<ScrollView>
      <View style={{ marginHorizontal: 15 }} >

      {UpperTxt()}
      {nameAndAgeInputField()}
      {LocationField()}
      {SpecialityAndSymptoms()}
      {CommentFields()}     
      {renderTabs()} 
      
    </View>        
</ScrollView>

    </View>
  )
}
  
const LookingForAvailableProduct = () =>{
  return(

    <View style={[styles.header, { height: '100%' } ]}>

    <View style={[styles.panelHandle,{ alignSelf:"center"}]} />

    <View style={{ marginHorizontal: 15 }} >

    <Text  onPress={()=>{ setLookingForAvailableProvider(true) }} style={{ marginTop: 5, ...FONTS.p1, color: COLORS?.black, fontWeight: '700' }} >Looking For Available Providers</Text>
    
    <Progress.Bar   
      animated={true} 
      indeterminate={true} 
      progress={0.3} 
      width={200} 
      indeterminateAnimationDuration={2000}
      color={COLORS?.btnColor2}
      backgroundColor={"#c9ebf2"} 
      animationType={'spring'}
      animationConfig={{ bounciness: 2 }}
      style={{width: '100%',height: 5, marginVertical: 10, borderColor: "#c9ebf2"  }}
    />

    {/* <View style={{  alignSelf:"center",width: '100%', height: 3, backgroundColor: '#BEC3C5', borderRadius: 4, marginVertical: 10 }} />     */}
    
    <View style={{ marginVertical:  SIZES.padding +5  }} >
      <View style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, height: 150, justifyContent: "center" }}>

      <Text style={{ marginVertical: 5, fontWeight: '600', ...FONTS.p7 , color: COLORS?.black, textDecorationLine: 'underline', marginLeft: 10, fontWeight: "600" }} >Booking Details:</Text>


    <View style={{ flexDirection: "row", marginLeft: 10 }} >
      <Text style={{  fontWeight: '600', ...FONTS.p7, lineHeight: 22 ,color: COLORS?.black,  }} >Booking Type:</Text>
      <Text style={{  ...FONTS.p7, lineHeight: 22 ,color: COLORS?.btnColor2, }} > HOUSECALL</Text>
    </View>

    <View style={{ flexDirection: "row", marginLeft: 10 }} >
      <Text style={{  fontWeight: '600', ...FONTS.p7, lineHeight: 22 ,color: COLORS?.black,  }} >Speciality:</Text>
      <Text style={{  ...FONTS.p7, lineHeight: 22 ,color: COLORS?.btnColor2, }} > DV1</Text>
    </View>

    <View style={{ flexDirection: "row", marginLeft: 10 }} >
      <Text style={{  fontWeight: '600', ...FONTS.p7, lineHeight: 22 ,color: COLORS?.black,  }} >Symptoms:</Text>
      <Text style={{  ...FONTS.p7, lineHeight: 22 ,color: COLORS?.btnColor2, }} > Anxiety</Text>
    </View>

    <View style={{ flexDirection: "row", marginLeft: 10 }} >
      <Text style={{  fontWeight: '600', ...FONTS.p7, lineHeight: 22 ,color: COLORS?.black,  }} >Address:</Text>
      <Text style={{  ...FONTS.p7, lineHeight: 22 ,color: COLORS?.btnColor2, }} > Orangi Town Karachi</Text>
    </View>

    {/* <View style={{ borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, height: 50 }}>

    </View> */}


      </View>
    </View>


    </View>   

  </View>
  )
}

const PressCancelBooking = () =>{


  dispatch(HandleCancelationRequest({ 
  
    visibility: true, 
    title: "HandleCancelationRequest", 
    heading: "Tell us why you want to cancel your appoinment?",
  
  }))

}

const CancelButttonRequest = () =>{
  return(
    <TouchableOpacity
    onPress={()=> PressCancelBooking()  }
    style={{
      // borderColor: COLORS?.btnColor2,
      // borderWidth: 2.5,
      borderRadius: 5,
      marginBottom: 20,
      alignSelf: "center",
      height: 45,
      justifyContent: "flex-start",
      alignItems: "center",
      paddingLeft: 10,
      flexDirection: "row",
      zIndex: 9999,
      backgroundColor: "#fff",
      position: "absolute",
      bottom: 0,
      width: '90%',
      ...SHADOW
      



    }}>
      
      <View style={{ width: 22, height: 22, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }} >  
        <Icon name={IONICONS?.close} size={22}color={COLORS?.lightred}  />
      </View>

      <Text style={{ ...FONTS?.p5 ,  fontWeight: '600', color: COLORS?.lightred }} >  Cancel Booking</Text>
  
  </TouchableOpacity>
  )
}

  return (          

<View style={styles.container}>

{CustomHeader()}
<>
  
   {latitude == null && logitude == null ? (
    <View
      style={{
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        zIndex: 999,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        alignItems: 'center'
      }}>
      <ActivityIndicator size="large" color={"#000"} />
    </View>
  ) : latitude !== null && logitude !== null ? (

<View style={{ height: windowHeight / 2  }} >
    <MapView
    onRegionChange={(e)=>
      onRegionChange(e)
    }
      provider={PROVIDER_GOOGLE}
      // style={StyleSheet.absoluteFill}
      style={{ height: SIZES?.height / 2 , justifyContent: "center", alignItems: "center" }}
      onRegionChangeComplete={ ()=> setshowAnotherImage(false) }
      showsUserLocation={true}
      showsMyLocationButton={false}
      rotateEnabled={false}
     
      // followsUserLocation={true}
      // showsCompass={true}
      // scrollEnabled={true}
      // zoomEnabled={true}
      // pitchEnabled={true}

      initialRegion={{
        latitude: latitude,
        longitude: logitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      />
      
         <Image source={ showAnotherImage ? IMAGES?.addicon : IMAGES?.ProviderPic } style={{ width: 50, height: 60, position: "absolute", alignSelf: "center", top: '50%'}} ></Image>
  
    </View>
  ) : null}

</>

      <ScrollBottomSheet  // If you are using TS, that'll infer the renderItem `item` type
        componentType="FlatList"
        snapPoints={[  60 , windowHeight / 2 
      ]}
      scrollEnabled={false}
        initialSnapIndex={1}
        renderHandle={
          LookingForAvailableProvider ?
          BottomContent
          :
          LookingForAvailableProduct
        }

        //if code break then uncomment please

      //   data={[ { id: 1 } ]}
      //   keyExtractor={i => i}
      //   renderItem={ 
      //     () =>(
      //     <View>
      //       <Text>Anas</Text>
      //     </View>
      // ) }

        contentContainerStyle={styles.contentContainerStyle}
      />
      
      {LookingForAvailableProvider ?
      renderBottomTxt()
      : 
      CancelButttonRequest()}


    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#F3F4F9',
  },
  header: {
    // alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHandle: {
    width: 25,
    height: 3,
    backgroundColor: '#BEC3C5',
    borderRadius: 4
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },

//maps
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // map: {
  //   width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height,
  // },

});

export default HomePatient;





















