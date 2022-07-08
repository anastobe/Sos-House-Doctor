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
import { HandleCalander, HandleModal, HandleModalSignOut, selectedCity, selectedCountry, selectedSpeciality, selectedState } from '../../stores/actions/form.action'
import { COLORS, FONTS, SHADOW, SIZES } from '../../constraints/Index'
import { IONICONS } from '../../constraints/Icons'
import ButtonNoLogo from '../ButtonNoLogo'
import DobInputField from '../InputFields/DobInputField'

const Calander = ({ onPress, value }) => {

  // const[expirationDate,setexpirationDate] = useState(new Date())
  // const[open,setOpen] = useState(false)

  
  const dispatch =  useDispatch()
  
  const title = useSelector((state)=> state?.formReducer?.modalCalanderStatus?.title)
  const visibility = useSelector((state)=> state?.formReducer?.modalCalanderStatus?.visibility)

  console.log("visibility",visibility);
  console.log("visibility",visibility);


  const[daterequired, expirationDate] = useState("")
  const[date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  // const[date, setDate] = useState(new Date())
  // const [open, setOpen] = useState(false)


  function closeCalanderModal() {
    dispatch(HandleCalander({
        visibility: false,
        title: "",
       }))
     
  }

  
  const [check, setcheck] = useState("DD/MM/YYYY")

  return (
    // <></>
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
   <View style={{ flex: 1,  backgroundColor: "rgba(0,0,0,0.5)",  justifyContent: 'center', paddingHorizontal: 25  }} >
      <View style={{ backgroundColor: COLORS.lightmainColor,  height: 300, borderRadius: 5, padding: 1 }} >
     
        <View style={{  backgroundColor: COLORS.shadowColor,  height: 66, flexDirection: "row", }} >
      
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 18, marginLeft: 5 }} >



     <Text>Wait for Api</Text>





      </View>
      
      <View style={{ alignItems: "center", justifyContent: "center", width: 80 }} >
        <TouchableOpacity onPress={()=>{ closeCalanderModal() }} >
        <View style={{ width: 35, height: 35, backgroundColor: COLORS.btnColor, borderRadius: 5, justifyContent: "center", alignItems: "center" }} >
          <Text style={{ color: COLORS.white }} >Go</Text>
        </View>
        </TouchableOpacity>  
      </View>
      
        </View>

        <View style={{ backgroundColor: COLORS.lightmainColor}} >
          {["Current Activity", "This week" , "Last week" , "This month - Mar 22"].map((v)=>{
            return(
              <Text style={{ borderBottomColor: COLORS.shadowColor, borderBottomWidth: 0.8, color: COLORS.black, ...FONTS.p5, paddingVertical: 5 }} >{v}</Text>
            )
          })}

        </View>

      </View>
    </View> 
    </Modal>

   : <></>}

  </>
   )
}

export default Calander
