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
  SectionList,
  ScrollView,
  Image
} from 'react-native'
import HeaderDrawer from '../../components/HeaderDrawer'
import ButtonNoLogo from '../../components/ButtonNoLogo'
import { COLORS, FONTS, IMAGES, SHADOW, SIZES } from '../../constraints/Index'
import Icon from 'react-native-vector-icons/Ionicons'
import { IONICONS } from '../../constraints/Icons'
import CircularProgress from 'react-native-circular-progress-indicator';
import Header from '../../components/Header'
import { SHADOWBOXDARK, SHADOWELEV_2 } from '../../constraints/Theme'


const EarningWalletPatient = ({ ...props }) => {

 
  const renderCard = () =>{

    
    const CardData = [
      {
          id: 1,
          Text: `You Earned $5 ${"\n"} Credit in your SOS ${"\n"} Pay Wallet`,
          Price: '200 points',
          route: "HomePatient",
          pic: IMAGES.apple
      },
      {
          id: 2,
          Text: "15% Discount on your next booking",
          Price: '500 points',
          route: "ProfilePatient",
          pic: IMAGES.camerapic
      },


  ]

  const renderItem = ({item , index}) =>{
    console.log("item==>",item);
    return(
      <View style={{flex:1,alignItems:'center',marginVertical: 7}}>  
        <TouchableOpacity onPress={()=>{ navigation.navigate(item?.route) }} style={{ width: 150, height: 180, }} >    
     
     <View style={{ height: 90,  width: 150, backgroundColor: COLORS.btnColor2, justifyContent:'center',alignItems:'center', SHADOWELEV_2, borderRadius: 5 }} >

      <Image style={{
        width: 25,
        height: 25,
        resizeMode: 'contain'
      }}
      source={item?.pic} />
       
      </View>
       
        <View>
          
          <Text style={{
              ...FONTS.p4,
              color: COLORS.black,
              fontWeight: '700',
              // textAlign: "center",
              paddingTop: 10
            }}>
              {item?.Text}
          </Text>

          <Text style={{
              ...FONTS.p3,
              color: COLORS.btnColor2,
              fontWeight: '700',
              // textAlign: "center",
            }}>
              {item?.Price}
          </Text>

        </View>
        </TouchableOpacity>
      </View>
      )
  }
  
    return (
          <FlatList
            data={CardData}
            renderItem={renderItem}
            keyExtractor={v => `${v.id}`}
            numColumns={2}
          />
    )
  }
  
  

  return ( 
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS?.lightmainColor} />
      {/* //heder   */}
      <View style={{ flex: 1, backgroundColor: COLORS.lightmainColor }}>
      

        <Text style={{ alignSelf: "center", ...FONTS.p2, color: COLORS?.btnColor2, fontWeight: '700', marginTop: 20 }} >500 Points</Text>

                  {/* Seperator */}
                  <View
                                style={{
                                    height: 0.5,
                                    backgroundColor: COLORS?.btnColor2,
                                    width: '100%',
                                    marginTop: 30,
                                    marginBottom: 30
                                }}
                            />

        <Text style={{ ...FONTS.p1, color: COLORS?.black, fontWeight: '700', marginLeft: 15, marginBottom: 15 }} >Credit</Text>


         {/* <View style={{ flexDirection: 'row' }} > */}
        {renderCard()}
         {/* </View> */}

        
      </View>
    </>
  )
}

export default EarningWalletPatient

































