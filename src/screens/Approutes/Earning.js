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
  Linking,
  Image
} from 'react-native'
import Header from '../../components/Header'
import { IONICONS } from '../../constraints/Icons'
import { COLORS,SHADOW ,FONTS, IMAGES, SIZES, SHADOWBOX} from '../../constraints/Index'
import ToggleSwitch from 'toggle-switch-react-native'
import SingleInputField from '../../components/InputFields/SingleInputField'
import ButtonNoLogo from '../../components/ButtonNoLogo'
import BtnNoLogoHeadTxt from '../../components/BtnNoLogoHeadTxt'
import Icon from 'react-native-vector-icons/Ionicons'
import { SHADOWBOXDARK, SHADOWELEV_1, SHADOWELEV_2 } from '../../constraints/Theme'
import { HandleCalander, HandleModalSignOut } from '../../stores/actions/form.action'
import { useDispatch } from 'react-redux'
import DobInputField from '../../components/InputFields/DobInputField'
import DatePicker from 'react-native-date-picker'
import Moment from 'moment';
import MaskInput from 'react-native-mask-input'


const Contact = ({ navigation, route,  }) => {

    const dispatch = useDispatch()
    const [Date, setDate] = useState('')

    const onPressCalander = () => {
        dispatch(HandleCalander({
            visibility: true,
            title: "anas bhai bhhai",
           }))
      }


    const StatementErningTxt = () =>{
      return(
          <Text style={{  ...FONTS.p5, fontWeight: "bold", color: COLORS.black, marginVertical: 10, marginLeft: 15}} >Statement Earning</Text>
      )
  } 

    const InputFields = () =>{
        return (
            <View style={{ marginHorizontal: 15 , marginVertical:  SIZES.padding }} >
              <View style={{ borderRadius: 4, backgroundColor: "#fcf7f7", ...SHADOWELEV_2, height: 45, flexDirection: "row", justifyContent: "space-between", alignItems: "center"  }}>
                <TextInput 
                value={Date} 
                onChangeText={setDate} 
                placeholder={"Section Completed with Api"}  
                />
                 <TouchableOpacity style={{ marginRight: 15 }}  onPress={ ()=>{onPressCalander()}} >
           
                 <Image
          style={{
            width: 22,
            height: 22,
            resizeMode: 'contain'
          }}
          source={IMAGES.calander}
        />
           
            </TouchableOpacity>
              </View>
            </View>
          )
     }

    
      const TotalEarningCards = () =>{
        return(
    
          <View style={{ height: 150, backgroundColor: "#fcf7f7", ...SHADOWELEV_2,  flexDirection: 'row', borderRadius: 5,  justifyContent: "space-around", alignItems: 'center', marginHorizontal: 15, marginVertical: 5  }} >
          
          <View>
          <Image
      style={{
        width: 72,
        height: 72,
        resizeMode: 'contain'
      }}
      source={IMAGES?.messageIcon}
      />
          </View>

          <View style={{ alignItems: "center" }} >
              <Text style={{ ...FONTS.p2, color: COLORS.btnColor, paddingVertical: 5,fontWeight: "700" }} >$0.00</Text>
              <Text style={{ ...FONTS.p5, color: COLORS.black, fontWeight: "700" }} >Your Total Earning</Text>
          </View>
    
          </View>
    
        )
      }
    

      const renderCardList = [
        {
          id: 1,
          pic: IMAGES?.paidearningicon,
          text1: 'Paid Amount',
          text2: '$0.00',
        },
        {
          id: 2,
          pic: IMAGES?.paideDollaricon,
          text1: 'Pending Amount',
          text2: '$0',
      }
      ]
    
      const renderCards = () =>{
  
        const renderItem = ({item , index}) =>{
          console.log("item==>",item);
          return(
            <View style={{flex:1,alignItems:'center',marginVertical: 15,}}>  
              <View style={{ width: 160, height: 170, ...SHADOWELEV_1, borderRadius: 5 ,backgroundColor: "#fcf7f7", justifyContent:'center',alignItems:'center',  }} >    
            <Image style={{
                  width: 35,
                  height: 35,
                  resizeMode: 'contain'
                }}
                source={item?.pic} />
              <View>
                <Text style={{
                    ...FONTS.p5,
                    color: COLORS.black,
                    fontWeight: '700',
                    textAlign: "center",
                    paddingTop: 10
                  }}>
                    {item?.text1}
                </Text>
                <Text style={{
                    ...FONTS.p4,
                    color: COLORS.btnColor,
                    fontWeight: '700',
                    textAlign: "center",
                    paddingTop: 5,
                    ...FONTS.p2,
                  }}>
                    {item?.text2}
                </Text>
              </View>
              </View>
            </View>
            )
        }
        
      
        return(
          <FlatList
            data={renderCardList}
            numColumns={2}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
          />
        )
      }
      

    return (
   <>
    <StatusBar backgroundColor={COLORS.mainColor} />
    {/* <Header backgroundColor={COLORS.shadowColor} leftIcon={IONICONS?.backarrow}  title="Earning" titleColor={COLORS.black} navigation={navigation} rightIconColor={COLORS.black} rightIcon={IONICONS.notificationIcon} headerTxtColor={COLORS.black} /> */}
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightmainColor,
      }}>
      {StatementErningTxt()}
      {InputFields()}
      {TotalEarningCards()}
      {renderCards()}







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

export default Contact

