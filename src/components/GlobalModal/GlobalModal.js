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

const GlobalModal = ({ onPress, value }) => {



  const [filteredDataSource, setFilteredDataSource] = useState();
  const [masterDataSource, setMasterDataSource] = useState();

  // console.log("filteredDataSource",filteredDataSource);
  // console.log("masterDataSource",masterDataSource);

  const dispatch =  useDispatch()
  const Status = useSelector((state)=> state?.formReducer?.modalStatus?.visibility)
  const title = useSelector((state)=> state?.formReducer?.modalStatus?.title)
  const arrObj = useSelector((state)=> state?.formReducer?.modalStatus?.arrObj)
  

  useEffect(()=>{
    setMasterDataSource(arrObj)
    setFilteredDataSource(arrObj)
  },[arrObj])


//searching lgorithm
const Searchresult = (text) =>{
       if (text) {
        const newData = masterDataSource.filter(function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
      } else {
        setFilteredDataSource(masterDataSource);
      }
  }


  
  const selected = (value) =>{

    if (title == 'Country') {

      dispatch(selectedCountry(value))
      dispatch(HandleModal({
        visibility: false,
       }))

    } else if (title == 'State') {
            
      dispatch(selectedState(value))
      dispatch(HandleModal({
        visibility: false,
       }))
    }
    else if (title == 'City') {
            
      dispatch(selectedCity(value))
      dispatch(HandleModal({
        visibility: false,
       }))
    }
    else if (title == 'Speciality') {
            
      dispatch(selectedSpeciality(value))
      dispatch(HandleModal({
        visibility: false,
       }))
    }
    else if (title == 'Age') {
            
      dispatch(selectedAge(value))
      dispatch(HandleModal({
        visibility: false,
       }))
    }
    else if (title == 'Symptoms') {
            
      dispatch(selectedSymptoms(value))
      dispatch(HandleModal({
        visibility: false,
       }))
    }

    
    
  }
 
 
 
const renderCard = () =>{

  const renderItem = (v) => {
    return (
    <View style={{ alignItems: 'center'}}>
      <TouchableOpacity onPress={()=>selected(v.item.title)}>
       <Text style={{ color: COLORS.white, fontWeight: "bold", ...FONTS.p4, lineHeight: 27 }} >{v.item.title}</Text>
      </TouchableOpacity>
    </View>
    )
  }

  return (
        <FlatList
          data={filteredDataSource}
          renderItem={renderItem}
          keyExtractor={v => `${v.id}`}
        />
  )
}






  function check() {
    dispatch(HandleModal({
      visibility: false,
      title: "modl heading",
     }))
     
  }

  return (
    <> 
    {Status ?  
    
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

      <Text onPress={()=> check() } style={{  zIndex: 9999, alignSelf: "flex-end", position: "absolute", top: 20, color: "#fff"}} ><Icon name={IONICONS?.close} size={40} color={COLORS.lightwhite} />{"    "}</Text>
      
      <View style={{ backgroundColor: COLORS.mainColor, width: 250, height: 300, borderRadius: 10 }} >
   
     <Pressable style={{ alignItems: 'center', height: 40, justifyContent: 'center' }} onPress={()=> check() } >
      <Text style={{ fontWeight: 'bold', color: COLORS.btnColor, ...FONTS.p1 }} >{title}</Text>
     </Pressable>

     <View style={{ flexDirection: 'row', marginHorizontal: 10, paddingHorizontal: 10 ,borderRadius: 5,justifyContent: 'space-between', alignItems: 'center' }} > 
      <TextInput
         height={40}
        //  value={Search} 
         onChangeText={(e)=>Searchresult(e)} 
         placeholder="Search Countries Here"
         placeholderTextColor={COLORS.white}
         color={COLORS.white}
        />
      <Icon name={IONICONS.searchIcon} size={25} color={COLORS.lightwhite} />
     </View>

     {renderCard()}


      </View>
    </View> 
    </Modal>
    
    :
      <></> }

   </>
   )
}

export default GlobalModal
