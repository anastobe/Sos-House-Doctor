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
  Pressable,
  Modal,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector ,useDispatch} from 'react-redux'
import { HandleModal, selectedAge, selectedCity, selectedCountry, selectedSpeciality, selectedState, selectedSymptoms } from '../../stores/actions/form.action'
import { COLORS, FONTS, SHADOW, SIZES } from '../../constraints/Index'
import { IONICONS } from '../../constraints/Icons'
import { HandleCancelationRequest } from '../../stores/actions/Patient.actions'
import Box from '../Box'
import ButtonNoLogo from '../ButtonNoLogo'

const PatientReqCancellationReason = ({ onPress, value }) => {
    
    const [checked1, setCheck1] = useState(false)
    const [checked2, setCheck2] = useState(false)
    const [checked3, setCheck3] = useState(false)
    const [checked4, setCheck4] = useState(false)

    const [cancelationReason, setcancelationReason] = useState("")
    console.log("cancelationReason======================================================>",cancelationReason,"==>", checked1, checked2, checked3, checked4);

    const dispatch = useDispatch();

    const visibility = useSelector((state)=> state?.patientReducer?.HandleCancelationRequest?.visibility)
    const title = useSelector((state)=> state?.patientReducer?.HandleCancelationRequest?.title)
    const heading = useSelector((state)=> state?.patientReducer?.HandleCancelationRequest?.heading)

    
  
    console.log("visibility",visibility);
    console.log("title",title);
    console.log("heading",heading);


    
    const PressCloseModal = () =>{
        dispatch(HandleCancelationRequest({ visibility: false, title: "" }))
    }


 
    const renderOptions = (id,setCheckNo, CheckNo, lineheights, title) =>{

        const setChecks = (id,title) =>{
            if (id === 1) {
                setCheckNo(!CheckNo)
                setCheck2(false)
                setCheck3(false)
                setCheck4(false)
                setcancelationReason(title)

            } else if (id === 2) {
                setCheckNo(!CheckNo)
                setCheck1(false)
                setCheck3(false)
                setCheck4(false)
                setcancelationReason(title)
            }
            else if (id === 3) {
                setCheckNo(!CheckNo)
                setCheck1(false)
                setCheck2(false)
                setCheck4(false)
                setcancelationReason(title)
            }
            else if (id === 4) {
                setCheckNo(!CheckNo)
                setCheck1(false)
                setCheck2(false)
                setCheck3(false)
                setcancelationReason(title)
            }
        }
      
        return(
        <View>
        <View style={{ flexDirection: "row", alignItems: "center", }}>
         <Box
              borderWid={1.4}
              borderCol={'#00'}
              showShadow={true}
              boxheight={19}
              boxwidth={19}

              onPress={() => {
                setChecks(id,title)
              }}
              value={CheckNo}
            />

         <Text style={{ color: COLORS.black,  ...FONTS.p4, marginLeft: -7 ,lineHeight: lineheights }} >{title}</Text>
        </View>    

        </View>    
        )
    }

    //up
    // height: v?.id == 2 ? 40 : 35
    //down
    // lineHeight: v?.id == 2 ? 20 : 35 

  return (
    <>
   {visibility ? 
       <Modal
       isVisible={false}
       transparent={true}
       animationIn="zoomInUp"
       animationOut="zoomOutDown"
       backdropOpacity={0.7}
       backdropColor={"#020d1c"}
       animationInTiming={1000}
       animationOutTiming={1000}
     >
     
       <View style={{ flex: 1,  backgroundColor: "rgba(0,0,0,0.5)", alignItems: 'center', justifyContent: 'center'  }} >
            


         <View style={{ backgroundColor: "#1d5e7c", width: 280, height: 400, borderRadius: 10, justifyContent: "center", paddingHorizontal: 15}} >
         
         <Icon style={{ alignSelf: "flex-end", marginRight: '5%', position: "absolute", top: -35 }}  onPress={()=> {PressCloseModal()}} name={IONICONS?.close} size={50} color={COLORS.lightwhite} />

   
        <Pressable style={{ justifyContent: 'center', marginTop: 20 }} onPress={()=> {PressCloseModal()} } >
         <Text style={{  color: COLORS?.white, ...FONTS.p1, fontWeight: "600" }} >{heading}</Text>
        </Pressable>
   

        <View style={{  height: 230, backgroundColor: "#fff", marginTop: 10, borderRadius: 5, paddingLeft: 5, paddingTop: 15 }} >
        {renderOptions(1,setCheck1,checked1, 35, "I don't need provider anymore")}
        {renderOptions(2,setCheck2,checked2, 20, `I want to change my booking ${'\n'} details`)}
        {renderOptions(3,setCheck3,checked3, 35,  "It took too long to find a provider")}
        {renderOptions(4,setCheck4,checked4, 35, "Other")}

        </View>

 
      <ButtonNoLogo
       onPress1={()=> {PressCloseModal()}}
        title="SUBMIT"
        width={170}
        backcolor={"#d2024d"}
        txtcolor={COLORS.white}
        verticlePadding={10}
      />
   
   
         </View>

         
       </View> 
       </Modal>
       
       :
         <></>}
    
      </>
   )
}

export default PatientReqCancellationReason
